import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/baby-profile?user_id=xxx
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id");
  if (!userId) {
    return NextResponse.json({ error: "user_id is required" }, { status: 400 });
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("baby_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ profile: data || null });
}

// POST /api/baby-profile
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { user_id, name, birth_date } = body;

  if (!user_id || !name || !birth_date) {
    return NextResponse.json(
      { error: "user_id, name, birth_date are required" },
      { status: 400 }
    );
  }

  const supabase = createServerClient();

  // Upsert: 既存があれば更新、なければ挿入
  const { data, error } = await supabase
    .from("baby_profiles")
    .upsert(
      { user_id, name, birth_date },
      { onConflict: "user_id" }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ profile: data });
}

// DELETE /api/baby-profile?user_id=xxx
export async function DELETE(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id");
  if (!userId) {
    return NextResponse.json({ error: "user_id is required" }, { status: 400 });
  }

  const supabase = createServerClient();
  const { error } = await supabase
    .from("baby_profiles")
    .delete()
    .eq("user_id", userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
