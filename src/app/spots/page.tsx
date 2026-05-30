import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { ALL_SPOTS } from "@/lib/spots-data";
import SpotFilterClient from "@/components/SpotFilterClient";

export const metadata: Metadata = {
  title: "全国のベビーカーおすすめスポット一覧 | ベビーカーナビ",
  description: "全国470以上のベビーカー・子連れ向けおすすめスポットを地域別に紹介。授乳室・おむつ替え・エレベーター・ベビーカー貸出の情報付き。",
  keywords: ["ベビーカー", "おすすめスポット", "子連れ", "授乳室", "全国", "おでかけ"],
  openGraph: {
    title: "全国のベビーカーおすすめスポット一覧 | ベビーカーナビ",
    description: "全国470以上のベビーカー・子連れ向けおすすめスポット一覧",
    url: "https://stroller-navi.vercel.app/spots",
  },
};

const REGIONS = ["東京", "北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄"];

export default function SpotsIndexPage() {
  // JSON-LD for spots index
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ベビーカーナビ",
    "url": "https://stroller-navi.vercel.app/",
    "description": "全国のベビーカー・子連れ向けおすすめスポット情報",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://stroller-navi.vercel.app/spots?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <Link href="/" className="text-xs text-white/70 hover:text-white mb-2 inline-block">
            ← ベビーカーナビ トップへ
          </Link>
          <h1 className="text-xl font-black">全国のおすすめスポット</h1>
          <p className="text-[11px] opacity-80 mt-1">ベビーカー・子連れで安心して行けるスポット {ALL_SPOTS.length}件</p>
        </header>

        <main className="p-5 space-y-6">
          {/* SEO intro */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              ベビーカーナビでは、全国{ALL_SPOTS.length}以上のベビーカー・子連れ向けおすすめスポットを掲載しています。各スポットには授乳室・おむつ替え台・エレベーター・スロープ・ベビーカー貸出などの設備情報に加え、0歳から3歳まで月齢に合わせたおすすめポイントを記載。実際にベビーカーで訪れた経験をもとに、「本当に行きやすい」スポットを厳選しています。
            </p>
          </section>

          {/* Ranking banner */}
          <Link
            href="/spots/ranking"
            className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4 hover:border-emerald-400 transition"
          >
            <span className="text-4xl">🏆</span>
            <div className="flex-1">
              <p className="text-sm font-black text-emerald-800">ベビーカーフレンドリースコア ランキング</p>
              <p className="text-[11px] text-emerald-600 mt-0.5">エレベーター・授乳室・スロープを総合採点した独自ランキング</p>
              <p className="text-[10px] text-emerald-400 mt-1">全{ALL_SPOTS.length}スポットを自動採点 → ランキングを見る</p>
            </div>
          </Link>

          {/* Region navigation */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-bold mb-3">📍 地域から探す</h2>
            <div className="grid grid-cols-2 gap-2">
              {REGIONS.map((region) => {
                const count = ALL_SPOTS.filter((s) => s.region === region).length;
                if (count === 0) return null;
                return (
                  <Link
                    key={region}
                    href={`/spots/region/${encodeURIComponent(region)}`}
                    className="flex justify-between items-center p-3 bg-brand-50/40 hover:bg-brand-50
                      rounded-xl transition border border-brand-100/30"
                  >
                    <span className="text-sm font-bold text-brand-700">{region}</span>
                    <span className="text-xs text-gray-400">{count}件 →</span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* スポット追加バナー */}
          <Link
            href="/spots/submit"
            className="flex items-center gap-4 bg-gradient-to-r from-brand-50 to-pink-50 border border-brand-200 rounded-2xl p-4 hover:border-brand-400 transition"
          >
            <span className="text-4xl">📝</span>
            <div className="flex-1">
              <p className="text-sm font-black text-brand-800">スポットを追加・口コミを投稿する</p>
              <p className="text-[11px] text-brand-600 mt-0.5">「このスポット行ってよかった！」「授乳室がきれいだった」などの情報をシェアしよう</p>
            </div>
          </Link>

          {/* 検索・絞り込み（全スポット対象） */}
          <SpotFilterClient spots={ALL_SPOTS} />

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビを使ってみよう</p>
            <p className="text-xs text-gray-500 mb-3">
              天気連動おすすめ、おでかけプラン自動生成、<br />
              口コミ投稿など便利な機能が満載！
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700
                text-white text-sm font-bold hover:opacity-90 transition"
            >
              アプリを開く
            </Link>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
