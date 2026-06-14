"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/lib/store";
import { BABY_SPOTS } from "@/lib/constants";

interface Props {
  onClose: () => void;
}

interface Stats {
  visited_count: number;
  review_count: number;
  favorite_count: number;
}

const BADGES = [
  { min: 50, icon: "👑", label: "おでかけレジェンド", color: "from-yellow-400 to-amber-500" },
  { min: 30, icon: "🏆", label: "おでかけマスター",  color: "from-orange-400 to-red-500" },
  { min: 20, icon: "🏅", label: "おでかけベテラン",  color: "from-violet-400 to-purple-500" },
  { min: 10, icon: "⭐", label: "おでかけレギュラー", color: "from-brand-400 to-brand-600" },
  { min: 5,  icon: "🍼", label: "おでかけビギナー",  color: "from-teal-400 to-emerald-500" },
  { min: 1,  icon: "🌱", label: "おでかけ初心者",    color: "from-green-300 to-teal-400" },
  { min: 0,  icon: "👶", label: "まだこれから！",    color: "from-gray-300 to-gray-400" },
] as const;

function getBadge(visitedCount: number) {
  return BADGES.find((b) => visitedCount >= b.min) ?? BADGES[BADGES.length - 1];
}

const TOTAL_SPOTS = BABY_SPOTS.length;

const NEXT_MILESTONES = [1, 5, 10, 20, 30, 50];
function getNextMilestone(count: number) {
  return NEXT_MILESTONES.find((m) => m > count) ?? null;
}

export default function MyStatsModal({ onClose }: Props) {
  const { user, visitedSpotIds, favoriteSpotIds } = useAppStore();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    fetch(`/api/my-stats?user_id=${user.id}`)
      .then((r) => r.json())
      .then((d) => setStats(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [user]);

  const visitedCount = stats?.visited_count ?? visitedSpotIds.size;
  const reviewCount  = stats?.review_count ?? 0;
  const favCount     = stats?.favorite_count ?? favoriteSpotIds.size;
  const badge        = getBadge(visitedCount);
  const nextMilestone = getNextMilestone(visitedCount);
  const progress     = Math.min((visitedCount / TOTAL_SPOTS) * 100, 100);

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] flex items-end justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[480px] bg-white rounded-t-3xl px-5 pt-5 pb-10 shadow-2xl animate-slide-up"
      >
        {/* Handle */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-black">📊 マイ記録</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition p-1">✕</button>
        </div>

        {!user ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🔒</div>
            <p className="text-sm font-bold text-gray-700 mb-1">ログインが必要です</p>
            <p className="text-xs text-gray-400">ログインすると訪問記録・口コミ数などが保存されます</p>
          </div>
        ) : loading ? (
          <div className="text-center py-8 text-gray-400 text-sm">読み込み中...</div>
        ) : (
          <>
            {/* Badge */}
            <div className={`bg-gradient-to-r ${badge.color} rounded-2xl p-5 text-white text-center mb-4 shadow-md`}>
              <div className="text-5xl mb-2">{badge.icon}</div>
              <div className="text-base font-black">{badge.label}</div>
              <div className="text-xs opacity-80 mt-0.5">
                {visitedCount === 0
                  ? "最初のスポットに行ってみよう！"
                  : `${visitedCount}か所を制覇中`}
              </div>
              {nextMilestone && (
                <div className="mt-2 text-[11px] opacity-75">
                  次のバッジまで あと {nextMilestone - visitedCount} スポット
                </div>
              )}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              <StatCard emoji="👣" value={visitedCount} label="訪問済み" color="text-brand-500" />
              <StatCard emoji="⭐" value={reviewCount}  label="口コミ数" color="text-amber-500" />
              <StatCard emoji="❤️" value={favCount}     label="お気に入り" color="text-rose-500" />
            </div>

            {/* Progress bar */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-600">🗾 スポット制覇率</span>
                <span className="text-xs font-black text-brand-500">{visitedCount} / {TOTAL_SPOTS}</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-400 mt-1.5 text-right">{progress.toFixed(1)}% 制覇</p>
            </div>

            {/* Badge roadmap */}
            <div className="mt-4">
              <p className="text-xs font-bold text-gray-500 mb-2 px-1">🏅 バッジロードマップ</p>
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {[...BADGES].reverse().map((b) => {
                  const unlocked = visitedCount >= b.min;
                  return (
                    <div
                      key={b.label}
                      className={`shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl border transition
                        ${unlocked
                          ? "border-brand-200 bg-brand-50"
                          : "border-gray-100 bg-gray-50 opacity-40"
                        }`}
                    >
                      <span className="text-lg">{b.icon}</span>
                      <span className="text-[9px] font-bold text-gray-600 whitespace-nowrap">{b.label}</span>
                      <span className="text-[9px] text-gray-400">{b.min}+</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ emoji, value, label, color }: { emoji: string; value: number; label: string; color: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-3.5 text-center">
      <div className="text-xl mb-1">{emoji}</div>
      <div className={`text-2xl font-black ${color}`}>{value}</div>
      <div className="text-[10px] text-gray-500 mt-0.5 font-medium">{label}</div>
    </div>
  );
}
