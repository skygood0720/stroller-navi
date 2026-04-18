import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SPOTS } from "@/lib/spots-data";
import Link from "next/link";

// Generate static pages for all spots at build time
export function generateStaticParams() {
  return ALL_SPOTS.map((spot) => ({ id: String(spot.id) }));
}

// Dynamic metadata for SEO
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const spot = ALL_SPOTS.find((s) => String(s.id) === params.id);
  if (!spot) return { title: "スポットが見つかりません" };

  const tags = spot.tags.join("・");
  return {
    title: `${spot.name} | ベビーカーナビ - バリアフリー情報`,
    description: `${spot.name}のベビーカー・子連れ向け情報。${tags}。${spot.desc}`,
    keywords: [spot.name, "ベビーカー", "授乳室", "バリアフリー", spot.region || "", "子連れ", "おでかけ"].filter(Boolean),
    openGraph: {
      title: `${spot.name} | ベビーカーナビ`,
      description: `${spot.desc} | 設備: ${tags}`,
      url: `https://stroller-navi.vercel.app/spots/${spot.id}`,
      siteName: "ベビーカーナビ",
      locale: "ja_JP",
      type: "article",
    },
  };
}

export default function SpotPage({ params }: { params: { id: string } }) {
  const spot = ALL_SPOTS.find((s) => String(s.id) === params.id);
  if (!spot) notFound();

  const ageTipsEntries = Object.entries(spot.age_tips || {});
  const ageLabels: Record<string, string> = {
    "0-3": "0〜3ヶ月", "4-6": "4〜6ヶ月", "7-12": "7〜12ヶ月",
    "13-24": "1〜2歳", "25-36": "2〜3歳",
  };

  // Find nearby spots in same region
  const nearbySpots = ALL_SPOTS
    .filter((s) => s.id !== spot.id && s.region === spot.region)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <Link href="/" className="text-xs text-white/70 hover:text-white mb-2 inline-block">
            ← ベビーカーナビ トップへ
          </Link>
          <h1 className="text-xl font-black">{spot.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            {spot.region && (
              <span className="bg-white/20 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                📍 {spot.region}
              </span>
            )}
            <span className="bg-white/20 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
              {spot.category === "indoor" ? "🏠 室内" : spot.category === "outdoor" ? "🌳 屋外" : "🏠🌳 室内＆屋外"}
            </span>
          </div>
        </header>

        <main className="p-5 space-y-5">
          {/* Description */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-2">施設情報</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{spot.desc}</p>

            {/* Basic info list */}
            {(spot.address || spot.hours || spot.website) && (
              <div className="mt-4 space-y-2 border-t border-gray-100 pt-3">
                {spot.address && (
                  <div className="flex gap-2 text-xs">
                    <span className="text-gray-400 shrink-0">📍 住所</span>
                    <span className="text-gray-700">{spot.address}</span>
                  </div>
                )}
                {spot.hours && (
                  <div className="flex gap-2 text-xs">
                    <span className="text-gray-400 shrink-0">🕒 営業時間</span>
                    <span className="text-gray-700">{spot.hours}</span>
                  </div>
                )}
                {spot.website && (
                  <div className="flex gap-2 text-xs">
                    <span className="text-gray-400 shrink-0">🔗 公式HP</span>
                    <a
                      href={spot.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:underline break-all"
                    >
                      {spot.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Tags */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">設備・サービス</h2>
            <div className="flex flex-wrap gap-2">
              {spot.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Age tips */}
          {ageTipsEntries.length > 0 && (
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">👶 年齢別おすすめポイント</h2>
              <div className="space-y-2.5">
                {ageTipsEntries.map(([key, tip]) => (
                  <div key={key} className="bg-pink-50/50 rounded-xl p-3 border border-pink-100/50">
                    <div className="text-xs font-bold text-pink-700 mb-1">
                      {ageLabels[key] || key}
                    </div>
                    <p className="text-sm text-gray-700">💡 {tip}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Google Maps link */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🗺️ アクセス</h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600
                text-white text-sm font-bold text-center hover:opacity-90 transition"
            >
              🧭 Google マップで開く
            </a>
          </section>

          {/* Nearby spots */}
          {nearbySpots.length > 0 && (
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">📍 {spot.region}の他のスポット</h2>
              <div className="grid grid-cols-2 gap-2">
                {nearbySpots.map((ns) => (
                  <Link
                    key={ns.id}
                    href={`/spots/${ns.id}`}
                    className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition block"
                  >
                    <div className="text-xs font-bold mb-1 truncate">{ns.name}</div>
                    <div className="text-[10px] text-gray-500 line-clamp-2">{ns.desc}</div>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {ns.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビを使ってみよう</p>
            <p className="text-xs text-gray-500 mb-3">
              天気に合わせたおすすめ、おでかけプラン、口コミ投稿など<br />
              子連れのおでかけをもっと楽しく！
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

        {/* Footer for SEO */}
        <footer className="px-5 py-6 text-center border-t border-gray-100">
          <p className="text-[11px] text-gray-400">
            © 2026 ベビーカーナビ - バリアフリールート検索アプリ
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/" className="text-[11px] text-brand-500 hover:underline">トップページ</Link>
            <Link href="/spots" className="text-[11px] text-brand-500 hover:underline">スポット一覧</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
