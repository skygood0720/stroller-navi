import { calcStrollerScore } from "@/lib/stroller-score";

interface Props {
  tags: string[];
  /** compact: スポット一覧用の小サイズ表示 */
  compact?: boolean;
}

const BREAKDOWN_LABELS = [
  { key: "elevator", label: "エレベーター動線", max: 30, emoji: "🛗" },
  { key: "nursing",  label: "授乳室の充実度",   max: 25, emoji: "🍼" },
  { key: "diaper",   label: "おむつ替え設備",   max: 20, emoji: "👶" },
  { key: "slope",    label: "スロープ・段差なし", max: 15, emoji: "♿" },
  { key: "extras",   label: "追加設備",          max: 10, emoji: "✨" },
] as const;

export default function StrollerScoreCard({ tags, compact = false }: Props) {
  const score = calcStrollerScore(tags);

  // ─── コンパクト表示（スポット一覧・近隣スポット用）───
  if (compact) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${score.rankBg} ${score.rankColor}`}>
        <span className="text-sm font-black">{score.rank}</span>
        <span>{score.total}点</span>
      </div>
    );
  }

  // ─── フル表示（スポット詳細ページ用）───
  return (
    <section className={`rounded-2xl p-5 border shadow-sm ${score.rankBg}`}>
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-gray-800">
            🏆 ベビーカーフレンドリースコア
          </h2>
          <p className="text-[11px] text-gray-500 mt-0.5">
            ベビーカーナビ編集部による独自評価
          </p>
        </div>
        {/* 総合スコア円 */}
        <div className="relative w-16 h-16 shrink-0">
          <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15.9"
              fill="none"
              stroke={score.rank === "S" ? "#10b981" : score.rank === "A" ? "#3b82f6" : score.rank === "B" ? "#f59e0b" : "#9ca3af"}
              strokeWidth="3"
              strokeDasharray={`${score.total} 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-lg font-black leading-none ${score.rankColor}`}>{score.total}</span>
            <span className="text-[9px] text-gray-400 leading-none">/ 100</span>
          </div>
        </div>
      </div>

      {/* ランクバッジ */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-3xl font-black ${score.rankColor}`}>{score.rank}</span>
        <div>
          <p className={`text-sm font-bold ${score.rankColor}`}>{score.rankLabel}</p>
          <p className="text-[11px] text-gray-500">{score.comment}</p>
        </div>
      </div>

      {/* スコア内訳バー */}
      <div className="space-y-2.5 mb-4">
        <p className="text-xs font-bold text-gray-600">評価内訳</p>
        {BREAKDOWN_LABELS.map(({ key, label, max, emoji }) => {
          const val = score.breakdown[key];
          const pct = Math.round((val / max) * 100);
          return (
            <div key={key}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] text-gray-600">
                  {emoji} {label}
                </span>
                <span className="text-[11px] font-bold text-gray-700">
                  {val}<span className="text-gray-400 font-normal">/{max}点</span>
                </span>
              </div>
              <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    pct >= 80 ? "bg-emerald-400" :
                    pct >= 50 ? "bg-blue-400" :
                    pct >= 25 ? "bg-amber-400" :
                    "bg-gray-300"
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 注記 */}
      <p className="text-[10px] text-gray-400 leading-relaxed border-t border-white/50 pt-3">
        ※ スコアは公式情報・実地調査をもとにベビーカーナビ編集部が独自に算出。
        施設の状況は変更される場合があります。おでかけ前に公式サイトでご確認ください。
      </p>
    </section>
  );
}
