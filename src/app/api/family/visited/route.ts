import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/family/visited?room_code=XXXX
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("room_code");
  if (!code) return NextResponse.json({ error: "room_code required" }, { status: 400 });

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("family_visited_spots")
    .select("spot_id, visited_at")
    .eq("room_code", code);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ visited: data ?? [] });
}

// POST /api/family/visited  → { room_code, spot_id }
export async function POST(req: NextRequest) {
  const { room_code, spot_id } = await req.json();
  if (!room_code || spot_id == null)
    return NextResponse.json({ error: "room_code and spot_id required" }, { status: 400 });

  const supabase = createServerClient();
  const { error } = await supabase
    .from("family_visited_spots")
    .upsert({ room_code, spot_id }, { onConflict: "room_code,spot_id" });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

// DELETE /api/family/visited?room_code=XXXX&spot_id=1
export async function DELETE(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("room_code");
  const spotId = req.nextUrl.searchParams.get("spot_id");
  if (!code || !spotId)
    return NextResponse.json({ error: "room_code and spot_id required" }, { status: 400 });

  const supabase = createServerClient();
  const { error } = await supabase
    .from("family_visited_spots")
    .delete()
    .eq("room_code", code)
    .eq("spot_id", Number(spotId));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
