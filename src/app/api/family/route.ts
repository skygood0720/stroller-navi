import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// POST /api/family  → { action: "create" | "join", room_code?: string }
export async function POST(req: NextRequest) {
  const { action, room_code } = await req.json();
  const supabase = createServerClient();

  if (action === "create") {
    // コードは client で生成済み → そのまま登録
    if (!room_code) return NextResponse.json({ error: "room_code required" }, { status: 400 });
    const clean = room_code.replace(/-/g, "").toUpperCase();
    await supabase.from("family_rooms").upsert({ room_code: clean });
    return NextResponse.json({ room_code: clean });
  }

  if (action === "join") {
    if (!room_code) return NextResponse.json({ error: "room_code required" }, { status: 400 });
    const clean = room_code.replace(/-/g, "").toUpperCase();
    const { data } = await supabase
      .from("family_rooms")
      .select("room_code")
      .eq("room_code", clean)
      .maybeSingle();
    if (!data) return NextResponse.json({ error: "コードが見つかりません" }, { status: 404 });
    return NextResponse.json({ room_code: clean });
  }

  return NextResponse.json({ error: "invalid action" }, { status: 400 });
}
