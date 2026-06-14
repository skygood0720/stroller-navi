import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/visited-spots?user_id=xxx
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id");
  if (!userId) return NextResponse.json({ error: "user_id is required" }, { status: 400 });

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("visited_spots")
    .select("*")
    .eq("user_id", userId)
    .order("visited_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ visited: data });
}

// POST /api/visited-spots
export async function POST(req: NextRequest) {
  const { user_id, spot_id } = await req.json();
  if (!user_id || spot_id == null)
    return NextResponse.json({ error: "user_id and spot_id required" }, { status: 400 });

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("visited_spots")
    .upsert({ user_id, spot_id }, { onConflict: "user_id,spot_id" })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ visited: data });
}

// DELETE /api/visited-spots?user_id=xxx&spot_id=1
export async function DELETE(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id");
  const spotId = req.nextUrl.searchParams.get("spot_id");
  if (!userId || !spotId)
    return NextResponse.json({ error: "user_id and spot_id required" }, { status: 400 });

  const supabase = createServerClient();
  const { error } = await supabase
    .from("visited_spots")
    .delete()
    .eq("user_id", userId)
    .eq("spot_id", Number(spotId));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
