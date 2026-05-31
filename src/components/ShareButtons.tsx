"use client";

import { useState } from "react";

interface Props {
  title: string;
  url: string;
  /** compact: アイコンのみの小サイズ表示（スポット詳細ページ横並び用） */
  compact?: boolean;
}

export default function ShareButtons({ title, url, compact = false }: Props) {
  const [copied, setCopied] = useState(false);

  const fullUrl = `https://stroller-navi.vercel.app${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(`${title} | ベビーカーナビ`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = fullUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SNS = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=ベビーカーナビ,子連れお出かけ`,
      bg: "bg-black",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LINE",
      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      bg: "bg-[#06C755]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: "bg-[#1877F2]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "はてブ",
      href: `https://b.hatena.ne.jp/entry/s/stroller-navi.vercel.app${url}`,
      bg: "bg-[#00A4DE]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M20.47 0C22.42 0 24 1.58 24 3.53v16.94C24 22.42 22.42 24 20.47 24H3.53C1.58 24 0 22.42 0 20.47V3.53C0 1.58 1.58 0 3.53 0h16.94zm-3.705 14.47c-.78 0-1.41.63-1.41 1.41s.63 1.41 1.41 1.41 1.41-.63 1.41-1.41-.63-1.41-1.41-1.41zm-10.795.47v2.35h4.928c1.287 0 2.116-.064 2.7-.22.944-.253 1.62-1.055 1.62-2.126 0-.796-.417-1.63-1.128-2.017v-.032c.554-.382.9-1.02.9-1.716 0-.891-.49-1.652-1.255-1.987-.563-.25-1.16-.282-2.353-.282H5.97v5.83zm2.194-4.024h2.21c.994 0 1.482.362 1.482 1.02 0 .705-.52 1.02-1.65 1.02H8.164v-2.04zm0 3.716h2.447c1.034 0 1.572.37 1.572 1.083 0 .676-.506 1.04-1.605 1.04H8.164v-2.123zM16.765 8.4h-2.19v6.07h2.19V8.4zm-1.095-3.87c-.78 0-1.41.63-1.41 1.41s.63 1.41 1.41 1.41 1.41-.63 1.41-1.41-.63-1.41-1.41-1.41z" />
        </svg>
      ),
    },
  ] as const;

  // ── compact 表示（スポット詳細の横並び） ──
  if (compact) {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        {SNS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label}でシェア`}
            className={`w-8 h-8 rounded-full ${s.bg} flex items-center justify-center hover:opacity-80 active:scale-90 transition`}
          >
            <span className="scale-75">{s.icon}</span>
          </a>
        ))}
        <button
          onClick={handleCopy}
          aria-label="リンクをコピー"
          className={`w-8 h-8 rounded-full flex items-center justify-center transition active:scale-90 ${
            copied ? "bg-green-500" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {copied ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-600">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
          )}
        </button>
      </div>
    );
  }

  // ── フル表示（記事ページ下部など） ──
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <p className="text-sm font-bold text-gray-700 mb-3">📤 この情報をシェアする</p>
      <div className="grid grid-cols-5 gap-2">
        {SNS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-1.5 py-3 ${s.bg} rounded-xl hover:opacity-80 active:scale-95 transition`}
          >
            {s.icon}
            <span className="text-[9px] font-bold text-white leading-none">{s.label}</span>
          </a>
        ))}
        {/* コピー */}
        <button
          onClick={handleCopy}
          className={`flex flex-col items-center gap-1.5 py-3 rounded-xl transition active:scale-95 ${
            copied ? "bg-green-500" : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span className="text-[9px] font-bold text-white leading-none">コピー済</span>
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-500">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
              <span className="text-[9px] font-bold text-gray-500 leading-none">コピー</span>
            </>
          )}
        </button>
      </div>
      <p className="text-[10px] text-gray-400 mt-3 text-center">
        ベビーカーナビの情報を友達・家族にシェアしよう 🤝
      </p>
    </div>
  );
}
