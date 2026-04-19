import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_SPOTS } from "@/lib/spots-data";

const REGIONS = ["東京", "北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄"];

const REGION_DESCRIPTIONS: Record<string, string> = {
  "東京": "東京23区・多摩エリアの厳選されたベビーカー・子連れ向けおすすめスポット",
  "北海道": "札幌・旭川・函館を中心に、北海道のベビーカー・子連れ向けスポット",
  "東北": "仙台・盛岡・秋田・山形・福島・青森のベビーカー・子連れ向けスポット",
  "関東": "神奈川・埼玉・千葉・茨城・栃木・群馬のベビーカー・子連れ向けスポット",
  "中部": "名古屋・静岡・新潟・石川・長野のベビーカー・子連れ向けスポット",
  "近畿": "大阪・京都・神戸・奈良・滋賀のベビーカー・子連れ向けスポット",
  "中国": "広島・岡山・鳥取・島根・山口のベビーカー・子連れ向けスポット",
  "四国": "徳島・香川・愛媛・高知のベビーカー・子連れ向けスポット",
  "九州・沖縄": "福岡・熊本・長崎・鹿児島・宮崎・沖縄のベビーカー・子連れ向けスポット",
};

export function generateStaticParams() {
  return REGIONS.map((region) => ({ region: encodeURIComponent(region) }));
}

export function generateMetadata({ params }: { params: { region: string } }): Metadata {
  const region = decodeURIComponent(params.region);
  if (!REGIONS.includes(region)) return { title: "地域が見つかりません" };

  const count = ALL_SPOTS.filter((s) => s.region === region).length;
  const description = REGION_DESCRIPTIONS[region] || "";

  return {
    title: `${region}のベビーカーおすすめスポット${count}件 | ベビーカーナビ`,
    description: `${description}を${count}件掲載。授乳室・おむつ替え・エレベーター・ベビーカー貸出の情報付き。子連れでのおでかけ先を地域から探せます。`,
    keywords: [region, "ベビーカー", "子連れ", "おすすめスポット", "授乳室", "おむつ替え", "おでかけ"],
    openGraph: {
      title: `${region}のベビーカーおすすめスポット | ベビーカーナビ`,
      description: `${description}を${count}件掲載`,
      url: `https://stroller-navi.vercel.app/spots/region/${encodeURIComponent(region)}`,
      siteName: "ベビーカーナビ",
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const region = decodeURIComponent(params.region);
  if (!REGIONS.includes(region)) notFound();

  const spots = ALL_SPOTS.filter((s) => s.region === region);
  const indoorSpots = spots.filter((s) => s.category === "indoor");
  const outdoorSpots = spots.filter((s) => s.category === "outdoor");
  const bothSpots = spots.filter((s) => s.category === "both");

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${region}のベビーカーおすすめスポット`,
    "description": REGION_DESCRIPTIONS[region],
    "url": `https://stroller-navi.vercel.app/spots/region/${encodeURIComponent(region)}`,
    "hasPart": spots.slice(0, 20).map((s) => ({
      "@type": "Place",
      "name": s.name,
      "description": s.desc,
      "url": `https://stroller-navi.vercel.app/spots/${s.id}`,
      ...(s.address && { "address": s.address }),
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": s.lat,
        "longitude": s.lng,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/spots" className="hover:text-white">スポット一覧</Link>
            <span className="mx-1.5">›</span>
            <span>{region}</span>
          </nav>
          <h1 className="text-xl font-black">{region}のおすすめスポット</h1>
          <p className="text-[11px] opacity-80 mt-1">
            ベビーカー・子連れで行きやすいスポット {spots.length}件
          </p>
        </header>

        <main className="p-5 space-y-6">
          {/* Intro */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              {REGION_DESCRIPTIONS[region]}を{spots.length}件まとめました。
              各スポットには授乳室・おむつ替え・エレベーター・ベビーカー貸出などの設備情報、
              赤ちゃんの月齢に合わせたおすすめポイントを掲載しています。
            </p>
          </section>

          {/* Indoor spots */}
          {indoorSpots.length > 0 && (
            <section>
              <h2 className="text-base font-bold mb-3 flex items-center gap-2">
                🏠 雨の日でも安心！室内スポット
                <span className="text-xs text-gray-400 font-normal">({indoorSpots.length}件)</span>
              </h2>
              <div className="space-y-2">
                {indoorSpots.map((spot) => (
                  <SpotCard key={spot.id} spot={spot} />
                ))}
              </div>
            </section>
          )}

          {/* Outdoor spots */}
          {outdoorSpots.length > 0 && (
            <section>
              <h2 className="text-base font-bold mb-3 flex items-center gap-2">
                🌳 お天気の日におすすめ！屋外スポット
                <span className="text-xs text-gray-400 font-normal">({outdoorSpots.length}件)</span>
              </h2>
              <div className="space-y-2">
                {outdoorSpots.map((spot) => (
                  <SpotCard key={spot.id} spot={spot} />
                ))}
              </div>
            </section>
          )}

          {/* Both indoor/outdoor spots */}
          {bothSpots.length > 0 && (
            <section>
              <h2 className="text-base font-bold mb-3 flex items-center gap-2">
                🏠🌳 室内＆屋外どちらも楽しめる
                <span className="text-xs text-gray-400 font-normal">({bothSpots.length}件)</span>
              </h2>
              <div className="space-y-2">
                {bothSpots.map((spot) => (
                  <SpotCard key={spot.id} spot={spot} />
                ))}
              </div>
            </section>
          )}

          {/* Related regions navigation */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">他の地域のスポットも見る</h3>
            <div className="flex flex-wrap gap-2">
              {REGIONS.filter((r) => r !== region).map((r) => (
                <Link
                  key={r}
                  href={`/spots/region/${encodeURIComponent(r)}`}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-brand-50 hover:text-brand-700
                    rounded-full text-xs font-semibold transition"
                >
                  {r} ({ALL_SPOTS.filter((s) => s.region === r).length})
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビを使ってみよう</p>
            <p className="text-xs text-gray-500 mb-3">
              天気連動おすすめ、おでかけプラン自動生成、<br />
              現在地から近いスポット検索など便利機能が満載！
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
          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            <Link href="/" className="text-[11px] text-brand-500 hover:underline">トップ</Link>
            <Link href="/spots" className="text-[11px] text-brand-500 hover:underline">全スポット</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Reusable spot card component
function SpotCard({ spot }: { spot: typeof ALL_SPOTS[0] }) {
  return (
    <Link
      href={`/spots/${spot.id}`}
      className="block bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-sm font-bold">{spot.name}</h3>
      </div>
      <p className="text-xs text-gray-500 mb-2">{spot.desc}</p>
      <div className="flex flex-wrap gap-1">
        {spot.tags.map((t) => (
          <span key={t} className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded font-medium">
            {t}
          </span>
        ))}
      </div>
      {spot.address && (
        <p className="text-[10px] text-gray-400 mt-1.5">📍 {spot.address}</p>
      )}
    </Link>
  );
}
