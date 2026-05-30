import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SPOTS } from "@/lib/spots-data";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SpotPhotosClient from "./SpotPhotosClient";
import StrollerScoreCard from "@/components/StrollerScoreCard";

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

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": spot.name,
    "description": spot.desc,
    "url": `https://stroller-navi.vercel.app/spots/${spot.id}`,
    ...(spot.address && { "address": { "@type": "PostalAddress", "addressLocality": spot.address, "addressCountry": "JP" } }),
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": spot.lat,
      "longitude": spot.lng,
    },
    ...(spot.website && { "sameAs": [spot.website] }),
    ...(spot.hours && { "openingHours": spot.hours }),
    "amenityFeature": spot.tags.map((t) => ({
      "@type": "LocationFeatureSpecification",
      "name": t,
      "value": true,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://stroller-navi.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "スポット一覧", "item": "https://stroller-navi.vercel.app/spots" },
      ...(spot.region ? [{ "@type": "ListItem", "position": 3, "name": spot.region, "item": `https://stroller-navi.vercel.app/spots/region/${encodeURIComponent(spot.region)}` }] : []),
      { "@type": "ListItem", "position": spot.region ? 4 : 3, "name": spot.name, "item": `https://stroller-navi.vercel.app/spots/${spot.id}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": `${spot.name}にベビーカーで行けますか？`, "acceptedAnswer": { "@type": "Answer", "text": `はい、${spot.name}はベビーカーでのアクセスが可能です。設備: ${spot.tags.join("、")}` } },
      { "@type": "Question", "name": `${spot.name}に授乳室はありますか？`, "acceptedAnswer": { "@type": "Answer", "text": spot.tags.includes("授乳室") ? `${spot.name}には授乳室が設置されています。` : `最新情報は公式サイトでご確認ください。近隣の授乳室はベビーカーナビで検索できます。` } },
      { "@type": "Question", "name": `${spot.name}は何歳から楽しめますか？`, "acceptedAnswer": { "@type": "Answer", "text": `${spot.age_min === 0 ? "0歳（ねんね期）" : `${spot.age_min}ヶ月頃`}から楽しめます。` } },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/spots" className="hover:text-white">スポット一覧</Link>
            {spot.region && (
              <>
                <span className="mx-1.5">›</span>
                <Link href={`/spots/region/${encodeURIComponent(spot.region)}`} className="hover:text-white">
                  {spot.region}
                </Link>
              </>
            )}
          </nav>
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
          {/* Spot Photos */}
          <section>
            <SpotPhotosClient spotName={spot.name} lat={spot.lat} lng={spot.lng} />
          </section>

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

          {/* Stroller Score */}
          <StrollerScoreCard tags={spot.tags} />

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

          {/* FAQ section for SEO */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">❓ よくある質問</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-xs font-bold text-gray-800">{spot.name}にベビーカーで行けますか？</h3>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                  はい、{spot.name}はベビーカーでのアクセスが可能です。
                  {spot.tags.includes("エレベーター") && "エレベーターが設置されています。"}
                  {spot.tags.includes("スロープ") && "スロープも整備されています。"}
                  {spot.tags.includes("ベビーカー貸出") && "ベビーカーの貸出サービスもあります。"}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">{spot.name}に授乳室はありますか？</h3>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                  {spot.tags.includes("授乳室")
                    ? `${spot.name}には授乳室が設置されています。おむつ替え台も利用可能です。`
                    : `${spot.name}の施設内の授乳室情報は最新の公式サイトでご確認ください。近隣の授乳室はベビーカーナビのトイレタブで検索できます。`
                  }
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">{spot.name}は何歳から楽しめますか？</h3>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                  {spot.name}は{spot.age_min === 0 ? "0歳（ねんね期）" : `${spot.age_min}ヶ月頃`}から楽しめます。
                  {ageTipsEntries.length > 0 && `月齢に合わせた楽しみ方があります。`}
                </p>
              </div>
            </div>
          </section>

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
        <SiteFooter />
      </div>
    </div>
  );
}
