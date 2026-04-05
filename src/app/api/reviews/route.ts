import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

// GET /api/reviews?spot_id=1
export async function GET(req: NextRequest) {
  const spotId = req.nextUrl.searchParams.get("spot_id");
  if (!spotId) {
    return NextResponse.json({ error: "spot_id is required" }, { status: 400 });
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("spot_id", Number(spotId))
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reviews: data });
}

// POST /api/reviews
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { spot_id, user_id, user_name, rating, text, baby_age } = body;

  if (!spot_id || !rating || !text) {
    return NextResponse.json(
      { error: "spot_id, rating, text are required" },
      { status: 400 }
    );
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("reviews")
    .insert({
      spot_id,
      user_id: user_id || null,
      user_name: user_name || "匿名",
      rating,
      text,
      baby_age: baby_age || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 平均評価を更新
  const { data: stats } = await supabase
    .from("reviews")
    .select("rating")
    .eq("spot_id", spot_id);

  const avg = stats
    ? (stats.reduce((s: number, r: { rating: number }) => s + r.rating, 0) / stats.length).toFixed(1)
    : null;

  return NextResponse.json({ review: data, avgRating: avg, totalReviews: stats?.length || 0 });
}
