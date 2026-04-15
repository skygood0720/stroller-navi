import { Metadata } from "next";
import Link from "next/link";
import { ALL_SPOTS } from "@/lib/spots-data";

export const metadata: Metadata = {
  title: "全国のベビーカーおすすめスポット一覧 | ベビーカーナビ",
  description: "全国250以上のベビーカー・子連れ向けおすすめスポットを地域別に紹介。授乳室・おむつ替え・エレベーター・ベビーカー貸出の情報付き。",
  keywords: ["ベビーカー", "おすすめスポット", "子連れ", "授乳室", "全国", "おでかけ"],
  openGraph: {
    title: "全国のベビーカーおすすめスポット一覧 | ベビーカーナビ",
    description: "全国250以上のベビーカー・子連れ向けおすすめスポット一覧",
    url: "https://stroller-navi.vercel.app/spots",
  },
};

const REGIONS = ["北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄"];

export default function SpotsIndexPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <Link href="/" className="text-xs text-white/70 hover:text-white mb-2 inline-block">
            ← ベビーカーナビ トップへ
          </Link>
          <h1 className="text-xl font-black">全国のおすすめスポット</h1>
          <p className="text-[11px] opacity-80 mt-1">ベビーカー・子連れで安心して行けるスポット {ALL_SPOTS.length}件</p>
        </header>

        <main className="p-5 space-y-6">
          {REGIONS.map((region) => {
            const spots = ALL_SPOTS.filter((s) => s.region === region);
            if (spots.length === 0) return null;

            return (
              <section key={region}>
                <h2 className="text-base font-bold mb-3 flex items-center gap-2">
                  📍 {region}
                  <span className="text-xs text-gray-400 font-normal">({spots.length}件)</span>
                </h2>
                <div className="space-y-2">
                  {spots.map((spot) => (
                    <Link
                      key={spot.id}
                      href={`/spots/${spot.id}`}
                      className="block bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-bold">{spot.name}</h3>
                        <span className="text-[10px] text-gray-400 shrink-0 ml-2">
                          {spot.category === "indoor" ? "🏠 室内" : spot.category === "outdoor" ? "🌳 屋外" : "🏠🌳"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{spot.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {spot.tags.map((t) => (
                          <span key={t} className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

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

        <footer className="px-5 py-6 text-center border-t border-gray-100">
          <p className="text-[11px] text-gray-400">© 2026 ベビーカーナビ - バリアフリールート検索アプリ</p>
        </footer>
      </div>
    </div>
  );
}
