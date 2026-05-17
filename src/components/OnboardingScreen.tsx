"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    emoji: "🚼",
    title: "ベビーカーナビへようこそ",
    desc: "ベビーカーで安心しておでかけするための情報がまとまったアプリです。",
    features: [
      { icon: "📍", label: "全国370以上のスポット" },
      { icon: "🧭", label: "バリアフリールート検索" },
      { icon: "👶", label: "月齢に合わせた提案" },
      { icon: "🍽️", label: "子連れOKレストラン" },
    ],
    bg: "from-brand-500 to-brand-700",
    cta: null,
  },
  {
    emoji: "👶",
    title: "まず赤ちゃんを登録しよう",
    desc: "生年月日を登録すると、月齢にぴったりのスポットやアドバイスが届きます。",
    features: [
      { icon: "✨", label: "月齢別おすすめスポットが表示される" },
      { icon: "💡", label: "施設ごとに月齢アドバイスが届く" },
      { icon: "🗓️", label: "成長に合ったプランを自動生成" },
    ],
    bg: "from-pink-400 to-rose-500",
    cta: "赤ちゃんを登録する",
    ctaTab: "baby",
  },
  {
    emoji: "🗺️",
    title: "地図でスポットを探そう",
    desc: "マップタブから近くのベビーカースポット・トイレ・レストランを一目で確認できます。",
    features: [
      { icon: "📍", label: "現在地から近い順に表示" },
      { icon: "☀️", label: "天気に合わせておすすめ提案" },
      { icon: "⭐", label: "口コミ・評価を投稿できる" },
    ],
    bg: "from-teal-400 to-emerald-600",
    cta: "さっそく使ってみる",
    ctaTab: "map",
  },
];

interface OnboardingScreenProps {
  onFinish: (gotoTab?: string) => void;
}

export default function OnboardingScreen({ onFinish }: OnboardingScreenProps) {
  const [slide, setSlide] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  const current = SLIDES[slide];
  const isLast = slide === SLIDES.length - 1;

  const next = () => {
    if (slide < SLIDES.length - 1) setSlide(slide + 1);
  };

  const handleCta = () => {
    const tab = current.ctaTab;
    localStorage.setItem("stroller-navi-onboarded", "1");
    onFinish(tab || undefined);
  };

  const handleSkip = () => {
    localStorage.setItem("stroller-navi-onboarded", "1");
    onFinish();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX === null) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50 && slide < SLIDES.length - 1) setSlide(slide + 1);
    if (diff < -50 && slide > 0) setSlide(slide - 1);
    setStartX(null);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${current.bg} transition-all duration-500`} />

      {/* Skip button */}
      <div className="relative z-10 flex justify-end px-5 pt-5">
        <button
          onClick={handleSkip}
          className="text-white/80 text-sm font-semibold bg-white/20 rounded-full px-4 py-1.5 backdrop-blur"
        >
          スキップ
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="text-7xl mb-6 drop-shadow-lg">{current.emoji}</div>
        <h2 className="text-2xl font-black text-white mb-3 leading-snug">
          {current.title}
        </h2>
        <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-xs">
          {current.desc}
        </p>

        {/* Feature list */}
        <div className="w-full max-w-xs space-y-2.5 mb-8">
          {current.features.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 bg-white/20 backdrop-blur rounded-xl px-4 py-2.5"
            >
              <span className="text-lg">{f.icon}</span>
              <span className="text-white text-sm font-semibold">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div className="relative z-10 px-8 pb-10 flex flex-col items-center gap-4">
        {/* CTA or Next */}
        {slide === 0 ? (
          <button
            onClick={next}
            className="w-full max-w-xs py-4 rounded-2xl bg-white text-brand-600 text-base font-black shadow-lg hover:opacity-90 transition active:scale-95"
          >
            次へ →
          </button>
        ) : current.cta ? (
          <>
            <button
              onClick={handleCta}
              className="w-full max-w-xs py-4 rounded-2xl bg-white text-gray-800 text-base font-black shadow-lg hover:opacity-90 transition active:scale-95"
            >
              {current.cta}
            </button>
            {!isLast && (
              <button onClick={next} className="text-white/80 text-sm font-semibold underline">
                あとで
              </button>
            )}
            {isLast && (
              <button onClick={() => { localStorage.setItem("stroller-navi-onboarded", "1"); onFinish(); }}
                className="text-white/80 text-sm font-semibold underline">
                まず見るだけにする
              </button>
            )}
          </>
        ) : null}

        {/* Progress dots */}
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`rounded-full transition-all ${i === slide ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
