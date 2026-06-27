import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/diary?device_id=xxx  または  ?room_code=xxx
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("device_id");
  const roomCode = req.nextUrl.searchParams.get("room_code");
  if (!deviceId && !roomCode)
    return NextResponse.json({ error: "device_id or room_code required" }, { status: 400 });

  const supabase = createServerClient();
  let query = supabase
    .from("diary_entries")
    .select("*")
    .order("entry_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (roomCode) {
    query = query.eq("room_code", roomCode);
  } else {
    query = query.eq("device_id", deviceId!);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ entries: data ?? [] });
}

// POST /api/diary
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { device_id, room_code, spot_id, spot_name, entry_date, memo, sticker, baby_month } = body;
  if (!device_id || !spot_name || !entry_date)
    return NextResponse.json({ error: "device_id, spot_name, entry_date required" }, { status: 400 });

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("diary_entries")
    .insert({ device_id, room_code: room_code ?? null, spot_id: spot_id ?? null, spot_name, entry_date, memo: memo ?? "", sticker: sticker ?? "🌸", baby_month: baby_month ?? null })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ entry: data });
}

// DELETE /api/diary?id=xxx&device_id=xxx
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const deviceId = req.nextUrl.searchParams.get("device_id");
  if (!id || !deviceId)
    return NextResponse.json({ error: "id and device_id required" }, { status: 400 });

  const supabase = createServerClient();
  const { error } = await supabase
    .from("diary_entries")
    .delete()
    .eq("id", id)
    .eq("device_id", deviceId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
