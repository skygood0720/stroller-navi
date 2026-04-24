import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// 管理者のメールアドレス（この人だけがスポットを承認できる）
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";

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

// POST /api/user-spots - submit a new spot (pending approval)
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
      status: "pending", // 承認待ち！
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ spot: data, message: "投稿を受け付けました。管理者の承認後に反映されます。" });
}

// PATCH /api/user-spots - approve or reject a spot (admin only)
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { spot_id, action, admin_email } = body;

  if (!spot_id || !action) {
    return NextResponse.json({ error: "spot_id and action are required" }, { status: 400 });
  }

  // 管理者チェック
  if (ADMIN_EMAIL && admin_email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: "管理者権限が必要です" }, { status: 403 });
  }

  if (action !== "approved" && action !== "rejected") {
    return NextResponse.json({ error: "action must be 'approved' or 'rejected'" }, { status: 400 });
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("user_spots")
    .update({ status: action })
    .eq("id", spot_id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ spot: data });
}
