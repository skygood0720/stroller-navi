import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/my-stats?user_id=xxx
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id");
  if (!userId) return NextResponse.json({ error: "user_id is required" }, { status: 400 });

  const supabase = createServerClient();

  const [visitedRes, reviewRes, favRes] = await Promise.all([
    supabase.from("visited_spots").select("spot_id", { count: "exact", head: true }).eq("user_id", userId),
    supabase.from("reviews").select("id", { count: "exact", head: true }).eq("user_id", userId),
    supabase.from("favorites").select("spot_id", { count: "exact", head: true }).eq("user_id", userId),
  ]);

  return NextResponse.json({
    visited_count: visitedRes.count ?? 0,
    review_count: reviewRes.count ?? 0,
    favorite_count: favRes.count ?? 0,
  });
}
