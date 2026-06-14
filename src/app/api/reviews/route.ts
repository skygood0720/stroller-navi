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
  const {
    spot_id,
    user_id,
    user_name,
    text,
    baby_age,
    photo_url,
    // カテゴリ別評価
    rating_stroller,
    rating_nursing,
    rating_cleanliness,
    rating_staff,
    rating_kids,
  } = body;

  if (!spot_id || !text) {
    return NextResponse.json(
      { error: "spot_id and text are required" },
      { status: 400 }
    );
  }

  // カテゴリ別評価から平均を計算
  const subRatings = [rating_stroller, rating_nursing, rating_cleanliness, rating_staff, rating_kids].filter(
    (v): v is number => typeof v === "number" && v >= 1 && v <= 5
  );
  if (subRatings.length === 0) {
    return NextResponse.json({ error: "少なくとも1つの評価が必要です" }, { status: 400 });
  }
  const rating = Math.round((subRatings.reduce((s, v) => s + v, 0) / subRatings.length) * 10) / 10;

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("reviews")
    .insert({
      spot_id,
      user_id: user_id || null,
      user_name: user_name || "匿名",
      rating,
      rating_stroller: rating_stroller ?? null,
      rating_nursing: rating_nursing ?? null,
      rating_cleanliness: rating_cleanliness ?? null,
      rating_staff: rating_staff ?? null,
      rating_kids: rating_kids ?? null,
      text,
      baby_age: baby_age || null,
      photo_url: photo_url || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // スポット全体の平均評価を再計算
  const { data: stats } = await supabase
    .from("reviews")
    .select("rating")
    .eq("spot_id", spot_id);

  const avg = stats
    ? (stats.reduce((s: number, r: { rating: number }) => s + r.rating, 0) / stats.length).toFixed(1)
    : null;

  return NextResponse.json({ review: data, avgRating: avg, totalReviews: stats?.length || 0 });
}
