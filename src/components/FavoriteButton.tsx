"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "stroller_navi_favorites";

export function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function saveFavorites(ids: number[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

interface Props {
  spotId: number;
  /** compact: スポット一覧用の小さいアイコンのみ表示 */
  compact?: boolean;
}

export default function FavoriteButton({ spotId, compact = false }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(getFavorites().includes(spotId));
  }, [spotId]);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const favs = getFavorites();
    const next = favs.includes(spotId)
      ? favs.filter((id) => id !== spotId)
      : [...favs, spotId];
    saveFavorites(next);
    setSaved(next.includes(spotId));
    // カスタムイベントで /favorites ページに通知
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  if (compact) {
    return (
      <button
        onClick={toggle}
        aria-label={saved ? "お気に入りから削除" : "お気に入りに追加"}
        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all active:scale-90 ${
          saved
            ? "bg-red-50 border-red-200"
            : "bg-white border-gray-200 hover:border-red-200"
        }`}
      >
        <svg viewBox="0 0 24 24" className={`w-4 h-4 transition-colors ${saved ? "fill-red-500" : "fill-gray-300"}`}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all active:scale-95 ${
        saved
          ? "bg-red-50 border-red-300 text-red-600"
          : "bg-white border-gray-200 text-gray-600 hover:border-red-200 hover:text-red-500"
      }`}
    >
      <svg viewBox="0 0 24 24" className={`w-4 h-4 ${saved ? "fill-red-500" : "fill-gray-300"}`}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {saved ? "お気に入り登録済み" : "お気に入りに追加"}
    </button>
  );
}
