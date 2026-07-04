import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SPOTS } from "@/lib/spots-data";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SpotPhotosClient from "./SpotPhotosClient";
import StrollerScoreCard from "@/components/StrollerScoreCard";
import ShareButtons from "@/components/ShareButtons";
import FavoriteButton from "@/components/FavoriteButton";
import RelatedArticles from "@/components/RelatedArticles";

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
          {(() => {
            const LINKABLE_TAGS = ["授乳室", "おむつ替え", "ベビーカー貸出", "エレベーター", "スロープ", "キッズスペース", "バリアフリー"];
            return (
              <section className="bg-white rounded-2xl p-5 shadow-sm">
                <h2 className="text-base font-bold mb-3">設備・サービス</h2>
                <div className="flex flex-wrap gap-2">
                  {spot.tags.map((tag) =>
                    LINKABLE_TAGS.includes(tag) ? (
                      <Link
                        key={tag}
                        href={`/spots/tag/${encodeURIComponent(tag)}`}
                        className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold hover:bg-amber-100 transition"
                      >
                        {tag} →
                      </Link>
                    ) : (
                      <span key={tag} className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <p className="text-[10px] text-gray-400 mt-2">タグをタップすると同じ設備のスポット一覧を表示</p>
              </section>
            );
          })()}

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

          {/* Favorite + Share */}
          <div className="flex gap-3">
            <FavoriteButton spotId={spot.id} />
            <div className="flex-1">
              <ShareButtons title={spot.name} url={`/spots/${spot.id}`} compact />
            </div>
          </div>

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
              {spot.region && (
                <Link
                  href={`/spots/region/${encodeURIComponent(spot.region)}`}
                  className="mt-3 flex items-center justify-center gap-1.5 text-xs text-brand-600 font-bold py-2.5 rounded-xl bg-brand-50 hover:bg-brand-100 transition"
                >
                  {spot.region}のスポットをすべて見る →
                </Link>
              )}
            </section>
          )}

          {/* Related Articles */}
          <RelatedArticles region={spot.region} tags={spot.tags} title="📖 このスポットに関連する記事" />

          {/* ベビーカーナビ編集部のポイント */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🚼 ベビーカーナビ編集部のポイント</h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                {spot.name}は
                {spot.category === "indoor"
                  ? "室内施設のため、天候に関わらず赤ちゃんと快適に過ごせます。猛暑・雨の日・寒い冬でも安心しておでかけできるスポットです。"
                  : spot.category === "outdoor"
                  ? "屋外施設のため、自然の中で赤ちゃんに外気浴や刺激を与えられます。天気の良い日のおでかけに最適なスポットです。"
                  : "室内・屋外の両方を楽しめる複合施設です。天気や赤ちゃんの体調に合わせてエリアを選べるため、年間を通じて利用しやすいスポットです。"
                }
              </p>
              <p>
                {spot.tags.includes("授乳室") && spot.tags.includes("おむつ替え")
                  ? `授乳室とおむつ替えスペースが完備されており、授乳中のママも安心して訪れることができます。長時間の滞在にも対応できる設備が整っています。`
                  : spot.tags.includes("授乳室")
                  ? `授乳室が設置されているため、母乳育児中のママも安心です。外出の際は念のため授乳ケープも持参しておくと、万が一授乳室が使用中の際も安心です。`
                  : spot.tags.includes("おむつ替え")
                  ? `おむつ替えスペースが設置されています。授乳については施設の公式サイトや受付でご確認ください。`
                  : `訪問前に施設の公式サイトで授乳室・おむつ替えスペースの最新情報をご確認ください。`
                }
              </p>
              <p>
                {spot.tags.includes("ベビーカー貸出")
                  ? `ベビーカーの貸出サービスがあるため、交通機関を利用して手ぶらで来館することも可能です。ただし数に限りがあるため、週末・連休は早めの来館をおすすめします。`
                  : spot.tags.includes("エレベーター")
                  ? `施設内にエレベーターが設置されており、ベビーカーのままフロア間の移動ができます。エレベーターの場所は入口や総合案内所で確認できます。`
                  : ""
                }
              </p>
              <p>
                {spot.region && `${spot.region}エリアでおでかけをお考えの方は、ベビーカーナビの`}
                <Link href={spot.region ? `/spots/region/${encodeURIComponent(spot.region)}` : "/spots"} className="text-brand-500 hover:underline">
                  {spot.region ? `${spot.region}のスポット一覧` : "スポット一覧"}
                </Link>
                もあわせてご覧ください。周辺の授乳室・トイレ情報はベビーカーナビのトップページから現在地周辺検索でご確認いただけます。
              </p>
            </div>
          </section>

          {/* FAQ section for SEO */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">❓ よくある質問</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-800">{spot.name}にベビーカーで行けますか？</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  はい、{spot.name}はベビーカーでのアクセスが可能です。
                  {spot.tags.includes("エレベーター") ? "施設内にエレベーターが設置されているため、フロア間の移動もスムーズです。" : ""}
                  {spot.tags.includes("スロープ") ? "スロープも整備されており、段差なくベビーカーで移動できます。" : ""}
                  {spot.tags.includes("ベビーカー貸出") ? "ベビーカーの貸出サービスもご利用いただけます。" : ""}
                  {!spot.tags.includes("エレベーター") && !spot.tags.includes("スロープ") ? "公共交通機関でのアクセスが便利です。最寄り駅からのエレベーターのご利用をご検討ください。" : ""}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">{spot.name}に授乳室はありますか？</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  {spot.tags.includes("授乳室")
                    ? `${spot.name}には授乳室が設置されています。${spot.tags.includes("おむつ替え") ? "おむつ替え台も設置されているため、赤ちゃんのケアがまとめて行えます。" : ""}長時間の滞在でも安心です。混雑する週末は授乳室が混み合う場合がありますので、時間に余裕を持ってご利用ください。`
                    : `${spot.name}の施設内の授乳室については、最新の公式サイトまたは受付窓口でご確認ください。近隣の授乳室はベビーカーナビのトップページから現在地周辺検索でご確認いただけます。外出の際は授乳ケープをご持参いただくと安心です。`
                  }
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">{spot.name}は何歳から楽しめますか？</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  {spot.name}は{spot.age_min === 0 ? "0歳（ねんね期）" : `${spot.age_min}ヶ月頃`}から{spot.age_max >= 36 ? "3歳以上のお子様まで" : `${spot.age_max}ヶ月頃まで`}楽しめます。
                  {ageTipsEntries.length > 0 ? ` 月齢に合わせたおすすめポイントが複数あり、成長とともに楽しみ方が変わるスポットです。「年齢別おすすめポイント」セクションに詳しい情報を掲載しています。` : ""}
                  {spot.age_min === 0 ? " 生まれたばかりの赤ちゃんから安心して訪れることができます。" : ""}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">{spot.name}はベビーカーで混雑を避けるにはどうすればいいですか？</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  {spot.category === "indoor"
                    ? `週末・祝日の${spot.tags.includes("ショッピング") ? "14〜17時" : "11〜14時"}は特に混み合います。平日の午前中（10〜12時）が比較的空いており、ベビーカーで移動しやすい時間帯です。乳幼児連れの方は開館直後の訪問がおすすめです。`
                    : `週末は午前中に集中する傾向があります。お昼過ぎの13〜15時や平日が比較的空いています。天気が良い日はどこも混雑しますので、時間に余裕を持ってお出かけください。`
                  }
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">{spot.name}へのアクセス方法を教えてください。</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  {spot.address
                    ? `所在地は${spot.address}です。ベビーカーでのご来館には、公共交通機関とエレベーターのご利用をおすすめします。`
                    : `最寄り駅や駐車場の情報は施設の公式サイトでご確認ください。`
                  }
                  Googleマップで「{spot.name}」と検索すると、ルートや現在地からのナビが利用できます。
                  ベビーカーでの来館を予定している場合は、エレベーターの場所を事前に確認しておくと当日スムーズです。
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
