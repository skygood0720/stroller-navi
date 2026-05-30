"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import FavoriteButton, { getFavorites } from "@/components/FavoriteButton";
import { ALL_SPOTS } from "@/lib/spots-data";
import { calcStrollerScore } from "@/lib/stroller-score";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  const refresh = () => setFavoriteIds(getFavorites());

  useEffect(() => {
    setMounted(true);
    refresh();
    window.addEventListener("favoritesUpdated", refresh);
    return () => window.removeEventListener("favoritesUpdated", refresh);
  }, []);

  const favoriteSpots = ALL_SPOTS.filter((s) => favoriteIds.includes(s.id));

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-20">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-red-400 via-rose-500 to-pink-500 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>お気に入り</span>
          </nav>
          <div className="text-3xl mb-2">❤️</div>
          <h1 className="text-xl font-black">お気に入りスポット</h1>
          <p className="text-xs text-white/70 mt-1">
            {mounted ? `${favoriteSpots.length}件保存中` : "読み込み中..."}
          </p>
        </header>

        <main className="p-5">
          {!mounted ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl h-24 animate-pulse" />
              ))}
            </div>
          ) : favoriteSpots.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🤍</div>
              <p className="text-base font-bold text-gray-700 mb-2">お気に入りがまだありません</p>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                スポット詳細ページの ❤️ ボタンをタップして<br />行きたいスポットを保存しましょう
              </p>
              <Link
                href="/spots"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-bold hover:opacity-90 transition"
              >
                🗺️ スポットを探す
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {favoriteSpots.map((spot) => {
                const score = calcStrollerScore(spot.tags);
                return (
                  <div key={spot.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <Link href={`/spots/${spot.id}`} className="block p-4 hover:bg-gray-50 transition">
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm font-bold text-gray-800 truncate">{spot.name}</p>
                            <span className={`shrink-0 text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                              score.rank === "S" ? "bg-emerald-100 text-emerald-700" :
                              score.rank === "A" ? "bg-blue-100 text-blue-700" :
                              "bg-amber-100 text-amber-700"
                            }`}>
                              {score.rank}
                            </span>
                          </div>
                          {spot.region && (
                            <p className="text-[11px] text-gray-400 mb-1.5">📍 {spot.region}</p>
                          )}
                          <p className="text-xs text-gray-600 line-clamp-2">{spot.desc}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {spot.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
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

              <p className="text-[11px] text-gray-400 text-center pt-2">
                ※ お気に入りはこのデバイスのブラウザにのみ保存されます
              </p>
            </div>
          )}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
