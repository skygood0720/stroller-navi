import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// POST /api/family  → { action: "create" | "join", room_code?: string }
export async function POST(req: NextRequest) {
  const { action, room_code } = await req.json();
  const supabase = createServerClient();

  if (action === "create") {
    if (!room_code) return NextResponse.json({ error: "room_code required" }, { status: 400 });
    const clean = room_code.replace(/-/g, "").toUpperCase();
    const { error } = await supabase
      .from("family_rooms")
      .upsert({ room_code: clean }, { onConflict: "room_code" });
    if (error) {
      console.error("family_rooms upsert error:", error);
      return NextResponse.json({ error: "コードの作成に失敗しました: " + error.message }, { status: 500 });
    }
    return NextResponse.json({ room_code: clean });
  }

  if (action === "join") {
    if (!room_code) return NextResponse.json({ error: "room_code required" }, { status: 400 });
    const clean = room_code.replace(/-/g, "").toUpperCase();
    const { data, error } = await supabase
      .from("family_rooms")
      .select("room_code")
      .eq("room_code", clean)
      .maybeSingle();
    if (error) {
      console.error("family_rooms select error:", error);
      return NextResponse.json({ error: "サーバーエラーが発生しました" }, { status: 500 });
    }
    if (!data) return NextResponse.json({ error: "コードが見つかりません" }, { status: 404 });
    return NextResponse.json({ room_code: clean });
  }

  return NextResponse.json({ error: "invalid action" }, { status: 400 });
}
