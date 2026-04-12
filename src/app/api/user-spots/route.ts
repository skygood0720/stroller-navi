import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/user-spots - list approved user-submitted spots
export async function GET(req: NextRequest) {
  const status = req.nextUrl.searchParams.get("status") || "approved";
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("user_spots")
    .select("*")
    .eq("status", status)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ spots: data });
}

// POST /api/user-spots - submit a new spot
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, lat, lng, tags, desc, submitted_by, submitted_by_name } = body;

  if (!name || !lat || !lng || !desc) {
    return NextResponse.json({ error: "name, lat, lng, desc are required" }, { status: 400 });
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("user_spots")
    .insert({
      name,
      lat,
      lng,
      tags: tags || [],
      desc,
      submitted_by: submitted_by || "anonymous",
      submitted_by_name: submitted_by_name || "匿名",
      status: "approved", // 自動承認（モデレーション機能は後で追加可能）
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ spot: data });
}
