import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// POST /api/x-post - Post to X (Twitter) via API
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { text } = body;

  if (!text) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  const apiKey = process.env.X_API_KEY;
  const apiSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_TOKEN_SECRET;

  if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
    return NextResponse.json(
      { error: "X API credentials not configured. Set X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET in .env.local" },
      { status: 500 }
    );
  }

  try {
    // OAuth 1.0a signature generation
    const url = "https://api.twitter.com/2/tweets";
    const method = "POST";
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const nonce = crypto.randomBytes(16).toString("hex");

    const oauthParams: Record<string, string> = {
      oauth_consumer_key: apiKey,
      oauth_nonce: nonce,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: timestamp,
      oauth_token: accessToken,
      oauth_version: "1.0",
    };

    // Create signature base string
    const paramString = Object.keys(oauthParams)
      .sort()
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(oauthParams[k])}`)
      .join("&");

    const baseString = `${method}&${encodeURIComponent(url)}&${encodeURIComponent(paramString)}`;
    const signingKey = `${encodeURIComponent(apiSecret)}&${encodeURIComponent(accessSecret)}`;
    const signature = crypto.createHmac("sha1", signingKey).update(baseString).digest("base64");

    // Create Authorization header
    const authHeader = `OAuth ${Object.entries({
      ...oauthParams,
      oauth_signature: signature,
    })
      .map(([k, v]) => `${encodeURIComponent(k)}="${encodeURIComponent(v)}"`)
      .join(", ")}`;

    // Make API request
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("X API error:", data);
      return NextResponse.json(
        { error: data.detail || data.title || "Failed to post to X", details: data },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, tweet: data });
  } catch (err: any) {
    console.error("X post error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
