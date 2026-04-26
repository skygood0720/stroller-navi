import { NextRequest, NextResponse } from "next/server";

// GET /api/place-photo?name=東京ミッドタウン&lat=35.6654&lng=139.7311
// Returns photo URLs from Google Places API
export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name");
  const lat = req.nextUrl.searchParams.get("lat");
  const lng = req.nextUrl.searchParams.get("lng");

  if (!name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Google Maps API key not configured" }, { status: 500 });
  }

  try {
    // Step 1: Find Place ID using Text Search
    const searchQuery = encodeURIComponent(name);
    const locationBias = lat && lng ? `&locationBias=circle%3A5000%40${lat}%2C${lng}` : "";
    const searchUrl = `https://places.googleapis.com/v1/places:searchText`;

    const searchRes = await fetch(searchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.photos",
      },
      body: JSON.stringify({
        textQuery: name,
        languageCode: "ja",
        maxResultCount: 1,
        ...(lat && lng ? { locationBias: { circle: { center: { latitude: Number(lat), longitude: Number(lng) }, radius: 5000 } } } : {}),
      }),
    });

    const searchData = await searchRes.json();

    if (!searchData.places || searchData.places.length === 0) {
      return NextResponse.json({ photos: [] });
    }

    const place = searchData.places[0];
    const photos = (place.photos || []).slice(0, 3);

    if (photos.length === 0) {
      return NextResponse.json({ photos: [] });
    }

    // Step 2: Generate photo URLs
    const photoUrls = photos.map((photo: any) => ({
      url: `https://places.googleapis.com/v1/${photo.name}/media?maxHeightPx=400&maxWidthPx=600&key=${apiKey}`,
      attribution: photo.authorAttributions?.[0]?.displayName || "",
    }));

    return NextResponse.json(
      { photos: photoUrls },
      { headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400" } }
    );
  } catch (err: any) {
    console.error("Place photo error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
