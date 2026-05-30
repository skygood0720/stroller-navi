"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { calcStrollerScore } from "@/lib/stroller-score";
import type { SpotWithCategory } from "@/lib/spots-data";

const FILTER_TAGS = [
  "授乳室", "おむつ替え", "エレベーター", "スロープ",
  "ベビーカー貸出", "ベビーチェア", "バリアフリー",
];

const CATEGORY_LABELS: Record<string, string> = {
  indoor: "🏠 室内",
  outdoor: "🌳 屋外",
  both: "🏠🌳 両方",
};

interface Props {
  spots: SpotWithCategory[];
}

export default function SpotFilterClient({ spots }: Props) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [category, setCategory] = useState<"" | "indoor" | "outdoor" | "both">("");
  const [showFilter, setShowFilter] = useState(false);

  const toggleTag = (tag: string) =>
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const filtered = useMemo(() => {
    return spots.filter((spot) => {
      if (query) {
        const q = query.toLowerCase();
        const hit =
          spot.name.toLowerCase().includes(q) ||
          (spot.desc ?? "").toLowerCase().includes(q) ||
          (spot.region ?? "").includes(q) ||
          spot.tags.some((t) => t.includes(q));
        if (!hit) return false;
      }
      if (activeTags.length > 0) {
        if (!activeTags.every((tag) => spot.tags.includes(tag))) return false;
      }
      if (category && spot.category !== category) return false;
      return true;
    });
  }, [spots, query, activeTags, category]);

  const hasFilter = query || activeTags.length > 0 || category;

  return (
    <div className="space-y-4">
      {/* 検索バー */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400 shrink-0">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="スポット名・地域・設備で検索..."
            className="flex-1 text-sm focus:outline-none text-gray-800 placeholder-gray-400"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}
        </div>

        {/* フィルタートグル */}
        <button
          onClick={() => setShowFilter((v) => !v)}
          className={`w-full flex items-center justify-between px-4 py-2.5 border-t text-xs font-bold transition ${
            hasFilter ? "bg-brand-50 text-brand-600 border-brand-100" : "border-gray-100 text-gray-500 hover:bg-gray-50"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z" />
            </svg>
            絞り込み
            {hasFilter && (
              <span className="bg-brand-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                {activeTags.length + (category ? 1 : 0)}
              </span>
            )}
          </span>
          <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current transition-transform ${showFilter ? "rotate-180" : ""}`}>
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {/* フィルターパネル */}
        {showFilter && (
          <div className="px-4 pb-4 pt-3 border-t border-gray-100 space-y-3">
            {/* 室内・屋外 */}
            <div>
              <p className="text-[11px] font-bold text-gray-500 mb-2">種別</p>
              <div className="flex gap-2">
                {(["", "indoor", "outdoor", "both"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                      category === c
                        ? "bg-brand-500 text-white border-brand-500"
                        : "bg-white text-gray-600 border-gray-200 hover:border-brand-300"
                    }`}
                  >
                    {c === "" ? "すべて" : CATEGORY_LABELS[c]}
                  </button>
                ))}
              </div>
            </div>

            {/* 設備タグ */}
            <div>
              <p className="text-[11px] font-bold text-gray-500 mb-2">設備（複数選択可）</p>
              <div className="flex flex-wrap gap-2">
                {FILTER_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                      activeTags.includes(tag)
                        ? "bg-brand-500 text-white border-brand-500"
                        : "bg-white text-gray-600 border-gray-200 hover:border-brand-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {hasFilter && (
              <button
                onClick={() => { setActiveTags([]); setCategory(""); setQuery(""); }}
                className="text-xs text-gray-400 hover:text-red-500 transition"
              >
                ✕ 絞り込みをリセット
              </button>
            )}
          </div>
        )}
      </div>

      {/* 件数 */}
      <p className="text-xs text-gray-500 px-1">
        {hasFilter ? (
          <><span className="font-bold text-brand-600">{filtered.length}件</span> ヒット（全{spots.length}件中）</>
        ) : (
          <>全 <span className="font-bold">{spots.length}</span> 件</>
        )}
      </p>

      {/* 結果リスト */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-sm font-bold text-gray-700 mb-1">該当するスポットが見つかりません</p>
          <p className="text-xs text-gray-500">条件を変えて再度お試しください</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.slice(0, 50).map((spot) => {
            const score = calcStrollerScore(spot.tags);
            return (
              <div key={spot.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <Link href={`/spots/${spot.id}`} className="block p-4 hover:bg-gray-50 transition">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-bold text-gray-800">{spot.name}</p>
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                          score.rank === "S" ? "bg-emerald-100 text-emerald-700" :
                          score.rank === "A" ? "bg-blue-100 text-blue-700" :
                          score.rank === "B" ? "bg-amber-100 text-amber-700" :
                          "bg-gray-100 text-gray-500"
                        }`}>
                          {score.rank} {score.total}点
                        </span>
                      </div>
                      {spot.region && (
                        <p className="text-[11px] text-gray-400 mt-0.5">📍 {spot.region}</p>
                      )}
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {spot.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            activeTags.includes(tag)
                              ? "bg-brand-100 text-brand-700"
                              : "bg-amber-50 text-amber-700"
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <FavoriteButton spotId={spot.id} compact />
                  </div>
                </Link>
              </div>
            );
          })}
          {filtered.length > 50 && (
            <p className="text-xs text-gray-400 text-center py-3">
              他 {filtered.length - 50} 件 — 絞り込みをさらに絞るとすべて表示されます
            </p>
          )}
        </div>
      )}
    </div>
  );
}
