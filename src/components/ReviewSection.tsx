"use client";

import { useState, useEffect, useRef } from "react";
import { Stars, EmptyState, Spinner } from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { formatBabyAge } from "@/lib/constants";
import type { Review } from "@/types";

interface Props {
  spotId: number;
}

export default function ReviewSection({ spotId }: Props) {
  const { user, babyProfile, babyMonths, reviewsBySpot, setReviewsForSpot, addReview } =
    useAppStore();

  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
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

  const handleSubmit = async () => {
    if (!text || rating === 0) return;
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
          rating,
          text,
          baby_age: babyAge,
          photo_url: photoPreview,
        }),
      });

      const data = await res.json();
      if (data.review) {
        addReview(spotId, data.review);
        setText("");
        setRating(0);
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
      {/* Add review button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-3 rounded-xl border-2 border-dashed border-brand-500
            bg-brand-50/30 text-brand-500 text-sm font-bold hover:bg-brand-50 transition mb-4"
        >
          ✏️ 口コミを書く
        </button>
      )}

      {/* Review form */}
      {showForm && (
        <div className="bg-orange-50/50 rounded-2xl p-4 mb-4 border border-gray-200">
          <h4 className="text-sm font-bold mb-3">口コミを投稿</h4>

          <div className="mb-3">
            <label className="text-xs text-gray-500 font-semibold">評価</label>
            <Stars rating={rating} size={28} interactive onChange={setRating} />
          </div>

          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="ニックネーム（任意）"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm mb-2
              focus:border-brand-500 focus:outline-none"
          />

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="この施設の感想を教えてください..."
            rows={3}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm resize-y
              focus:border-brand-500 focus:outline-none"
          />

          {/* Photo upload */}
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
              onClick={() => { setShowForm(false); setPhotoPreview(null); }}
              className="flex-1 py-2.5 rounded-lg border border-gray-200 text-xs font-semibold
                text-gray-500 hover:bg-gray-50 transition"
            >
              キャンセル
            </button>
            <button
              onClick={handleSubmit}
              disabled={!text || rating === 0 || submitting}
              className={`flex-[1.5] py-2.5 rounded-lg text-white text-xs font-bold transition
                ${text && rating && !submitting
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              {submitting ? "投稿中..." : "投稿する"}
            </button>
          </div>
        </div>
      )}

      {/* Reviews list */}
      {reviews.length === 0 && !showForm && (
        <EmptyState emoji="💬" title="まだ口コミがありません" sub="最初の口コミを投稿しませんか？" />
      )}

      {reviews.map((r: Review) => (
        <div key={r.id} className="bg-gray-50 rounded-xl p-3.5 mb-2">
          <div className="flex justify-between items-center mb-1.5">
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
              <Stars rating={r.rating} size={11} />
              <div className="text-[10px] text-gray-400 mt-0.5">
                {new Date(r.created_at).toLocaleDateString("ja-JP")}
              </div>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-gray-700">{r.text}</p>

          {/* Review photo */}
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
      ))}

      {/* Fullscreen photo viewer */}
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
