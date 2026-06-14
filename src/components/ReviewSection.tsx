"use client";

import { useState, useEffect, useRef } from "react";
import { Stars, EmptyState, Spinner } from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { formatBabyAge } from "@/lib/constants";
import type { Review } from "@/types";

interface Props {
  spotId: number;
}

// 5つの評価カテゴリ定義
const RATING_CATEGORIES = [
  { key: "rating_stroller",    label: "ベビーカー移動",  emoji: "🚼", hint: "段差・エレベーター・スロープのしやすさ" },
  { key: "rating_nursing",     label: "授乳室・おむつ台", emoji: "🤱", hint: "授乳室・おむつ替え台の充実度・清潔さ" },
  { key: "rating_cleanliness", label: "清潔さ",          emoji: "✨", hint: "施設全体の清潔さ・トイレの衛生状態" },
  { key: "rating_staff",       label: "スタッフの対応",   emoji: "😊", hint: "スタッフの親切さ・子連れへの配慮" },
  { key: "rating_kids",        label: "子連れのしやすさ", emoji: "👶", hint: "赤ちゃん・子どもとの過ごしやすさ総合" },
] as const;

type CategoryKey = typeof RATING_CATEGORIES[number]["key"];

type SubRatings = Record<CategoryKey, number>;

function calcAvg(sub: Partial<SubRatings>): number | null {
  const vals = RATING_CATEGORIES.map((c) => sub[c.key]).filter((v): v is number => typeof v === "number" && v >= 1);
  if (vals.length === 0) return null;
  return Math.round((vals.reduce((s, v) => s + v, 0) / vals.length) * 10) / 10;
}

// カテゴリ別星ピッカー
function CategoryStarPicker({
  category,
  value,
  onChange,
}: {
  category: typeof RATING_CATEGORIES[number];
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg w-6 text-center">{category.emoji}</span>
      <div className="flex-1">
        <p className="text-xs font-bold text-gray-700">{category.label}</p>
        <p className="text-[10px] text-gray-400">{category.hint}</p>
      </div>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <span
            key={s}
            onClick={() => onChange(s)}
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            className="cursor-pointer transition-colors text-xl"
            style={{ color: s <= (hovered || value) ? "#FFB300" : "#E0D5CA" }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

// カテゴリ別評価バー（表示用）
function CategoryBar({ label, emoji, value }: { label: string; emoji: string; value: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-sm">{emoji}</span>
      <span className="text-[10px] text-gray-500 w-[72px] shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full transition-all"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="text-[10px] font-bold text-amber-600 w-5 text-right">{value}</span>
    </div>
  );
}

export default function ReviewSection({ spotId }: Props) {
  const { user, babyProfile, babyMonths, reviewsBySpot, setReviewsForSpot, addReview } =
    useAppStore();

  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [subRatings, setSubRatings] = useState<Partial<SubRatings>>({});
  const [userName, setUserName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [expandedPhoto, setExpandedPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reviews = reviewsBySpot[spotId] || [];

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/reviews?spot_id=${spotId}`);
        const data = await res.json();
        if (data.reviews) {
          setReviewsForSpot(spotId, data.reviews);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [spotId, setReviewsForSpot]);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("写真は2MB以下にしてください");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const avgPreview = calcAvg(subRatings);
  const ratedCount = RATING_CATEGORIES.filter((c) => subRatings[c.key]).length;
  const canSubmit = !submitting && text.trim().length > 0 && ratedCount >= 3;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);

    const babyAge = babyProfile && babyMonths !== null ? formatBabyAge(babyMonths) : null;

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spot_id: spotId,
          user_id: user?.id || null,
          user_name: userName || "匿名",
          text,
          baby_age: babyAge,
          photo_url: photoPreview,
          ...subRatings,
        }),
      });

      const data = await res.json();
      if (data.review) {
        addReview(spotId, data.review);
        setText("");
        setSubRatings({});
        setUserName("");
        setPhotoPreview(null);
        setShowForm(false);
      }
    } catch (err) {
      console.error("Failed to submit review:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Spinner text="口コミを読み込み中..." />;

  return (
    <div>
      {/* 書くボタン */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-3 rounded-xl border-2 border-dashed border-brand-500
            bg-brand-50/30 text-brand-500 text-sm font-bold hover:bg-brand-50 transition mb-4"
        >
          ✏️ 口コミを書く
        </button>
      )}

      {/* 投稿フォーム */}
      {showForm && (
        <div className="bg-orange-50/50 rounded-2xl p-4 mb-4 border border-gray-200">
          <h4 className="text-sm font-bold mb-3">口コミを投稿</h4>

          {/* カテゴリ別評価 */}
          <div className="bg-white rounded-xl p-3 mb-3 space-y-3 border border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-bold text-gray-600">📊 カテゴリ別評価（3項目以上必須）</p>
              {avgPreview !== null && (
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-gray-400">平均</span>
                  <span className="text-sm font-black text-amber-500">★ {avgPreview}</span>
                </div>
              )}
            </div>
            {RATING_CATEGORIES.map((cat) => (
              <CategoryStarPicker
                key={cat.key}
                category={cat}
                value={subRatings[cat.key] ?? 0}
                onChange={(v) => setSubRatings((prev) => ({ ...prev, [cat.key]: v }))}
              />
            ))}
            <p className="text-[10px] text-gray-400 text-right">{ratedCount}/5 評価済み</p>
          </div>

          {/* ニックネーム */}
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="ニックネーム（任意）"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm mb-2
              focus:border-brand-500 focus:outline-none"
          />

          {/* 本文 */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="この施設の感想を教えてください..."
            rows={3}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm resize-y
              focus:border-brand-500 focus:outline-none"
          />

          {/* 写真アップロード */}
          <div className="mt-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoSelect}
              className="hidden"
            />
            {photoPreview ? (
              <div className="relative inline-block">
                <img src={photoPreview} alt="preview" className="w-20 h-20 object-cover rounded-lg border" />
                <button
                  onClick={() => { setPhotoPreview(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-dashed border-gray-300
                  text-xs text-gray-500 hover:bg-gray-50 transition"
              >
                📷 写真を追加（2MBまで）
              </button>
            )}
          </div>

          {babyProfile && babyMonths !== null && (
            <p className="text-xs text-baby-300 mt-2 font-medium">
              👶 {babyProfile.name}ちゃん（{formatBabyAge(babyMonths)}）として投稿
            </p>
          )}

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => { setShowForm(false); setPhotoPreview(null); setSubRatings({}); }}
              className="flex-1 py-2.5 rounded-lg border border-gray-200 text-xs font-semibold
                text-gray-500 hover:bg-gray-50 transition"
            >
              キャンセル
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`flex-[1.5] py-2.5 rounded-lg text-white text-xs font-bold transition
                ${canSubmit
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              {submitting ? "投稿中..." : "投稿する"}
            </button>
          </div>
          {ratedCount < 3 && (
            <p className="text-[10px] text-center text-gray-400 mt-1.5">
              あと{3 - ratedCount}項目評価してください
            </p>
          )}
        </div>
      )}

      {/* 口コミ一覧 */}
      {reviews.length === 0 && !showForm && (
        <EmptyState emoji="💬" title="まだ口コミがありません" sub="最初の口コミを投稿しませんか？" />
      )}

      {reviews.map((r: Review) => {
        const hasSubRatings = r.rating_stroller !== null || r.rating_nursing !== null;
        return (
          <div key={r.id} className="bg-gray-50 rounded-xl p-3.5 mb-2">
            {/* ヘッダー */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-teal-400
                    text-white flex items-center justify-center text-xs font-bold"
                >
                  {r.user_name[0]}
                </div>
                <div>
                  <div className="text-xs font-bold">{r.user_name}</div>
                  {r.baby_age && (
                    <div className="text-[10px] text-baby-300">👶 {r.baby_age}</div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end">
                  <Stars rating={r.rating} size={11} />
                  <span className="text-[11px] font-black text-amber-500">{r.rating}</span>
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">
                  {new Date(r.created_at).toLocaleDateString("ja-JP")}
                </div>
              </div>
            </div>

            {/* カテゴリ別評価バー（新形式のみ表示） */}
            {hasSubRatings && (
              <div className="bg-white rounded-lg p-2.5 mb-2 space-y-1.5 border border-gray-100">
                {RATING_CATEGORIES.map((cat) => {
                  const val = r[cat.key as keyof Review] as number | null;
                  if (val === null || val === undefined) return null;
                  return (
                    <CategoryBar key={cat.key} label={cat.label} emoji={cat.emoji} value={val} />
                  );
                })}
              </div>
            )}

            {/* 本文 */}
            <p className="text-xs leading-relaxed text-gray-700">{r.text}</p>

            {/* 写真 */}
            {r.photo_url && (
              <div className="mt-2">
                <img
                  src={r.photo_url}
                  alt="口コミ写真"
                  onClick={() => setExpandedPhoto(r.photo_url)}
                  className="w-24 h-24 object-cover rounded-lg border cursor-pointer hover:opacity-80 transition"
                />
              </div>
            )}
          </div>
        );
      })}

      {/* 拡大写真ビューア */}
      {expandedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4"
          onClick={() => setExpandedPhoto(null)}
        >
          <img src={expandedPhoto} alt="拡大写真" className="max-w-full max-h-full rounded-lg" />
          <button
            onClick={() => setExpandedPhoto(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full text-white text-lg
              flex items-center justify-center backdrop-blur"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
