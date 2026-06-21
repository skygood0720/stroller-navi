import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/family/weaning?room_code=XXXX
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("room_code");
  if (!code) return NextResponse.json({ error: "room_code required" }, { status: 400 });

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("family_weaning_checks")
    .select("food_id, checked")
    .eq("room_code", code);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ checks: data ?? [] });
}

// POST /api/family/weaning  → { room_code, food_id, checked }
export async function POST(req: NextRequest) {
  const { room_code, food_id, checked } = await req.json();
  if (!room_code || !food_id || checked === undefined)
    return NextResponse.json({ error: "room_code, food_id, checked required" }, { status: 400 });

  const supabase = createServerClient();
  const { error } = await supabase
    .from("family_weaning_checks")
    .upsert({ room_code, food_id, checked, updated_at: new Date().toISOString() }, {
      onConflict: "room_code,food_id",
    });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

// PUT /api/family/weaning  → { room_code, checks: Record<string, boolean> }（一括同期）
export async function PUT(req: NextRequest) {
  const { room_code, checks } = await req.json();
  if (!room_code || !checks)
    return NextResponse.json({ error: "room_code and checks required" }, { status: 400 });

  const supabase = createServerClient();
  const now = new Date().toISOString();
  const rows = Object.entries(checks as Record<string, boolean>).map(([food_id, checked]) => ({
    room_code,
    food_id,
    checked,
    updated_at: now,
  }));

  const { error } = await supabase
    .from("family_weaning_checks")
    .upsert(rows, { onConflict: "room_code,food_id" });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
