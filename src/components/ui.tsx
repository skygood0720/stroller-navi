"use client";

// ★ 評価コンポーネント
export function Stars({
  rating,
  size = 16,
  interactive,
  onChange,
}: {
  rating: number;
  size?: number;
  interactive?: boolean;
  onChange?: (r: number) => void;
}) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          onClick={() => interactive && onChange?.(s)}
          className={`transition-colors ${interactive ? "cursor-pointer" : ""}`}
          style={{
            fontSize: size,
            color: s <= rating ? "#FFB300" : "#E0D5CA",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// タグピル
export function TagPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <span
      onClick={onClick}
      className={`
        inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide
        transition-colors
        ${onClick ? "cursor-pointer" : ""}
        ${
          active
            ? "bg-brand-500 text-white"
            : "bg-amber-50 text-amber-700"
        }
      `}
    >
      {label}
    </span>
  );
}

// ローディングスピナー
export function Spinner({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-brand-500 animate-spin" />
      {text && <p className="mt-4 text-sm text-gray-500 font-medium">{text}</p>}
    </div>
  );
}

// 空状態
export function EmptyState({
  emoji,
  title,
  sub,
}: {
  emoji: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="text-center py-10 text-gray-400">
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="text-sm font-medium">{title}</p>
      {sub && <p className="text-xs mt-1">{sub}</p>}
    </div>
  );
}
