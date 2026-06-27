import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_SPOTS } from "@/lib/spots-data";
import SiteFooter from "@/components/SiteFooter";
import RelatedArticles from "@/components/RelatedArticles";

// タグの表示名・説明マップ
const TAG_META: Record<string, { label: string; description: string; emoji: string }> = {
  "授乳室":        { label: "授乳室あり",         description: "授乳室が設置されているベビーカーOKのスポット一覧",    emoji: "🍼" },
  "おむつ替え":    { label: "おむつ替えスペースあり", description: "おむつ替えスペースがある子連れ向けスポット一覧",      emoji: "👶" },
  "ベビーカー貸出": { label: "ベビーカー貸出あり",   description: "ベビーカーを無料で借りられるスポット一覧",          emoji: "🛒" },
  "エレベーター":  { label: "エレベーターあり",     description: "エレベーターが設置されたバリアフリースポット一覧",    emoji: "🛗" },
  "スロープ":      { label: "スロープあり",         description: "段差がなくスロープで移動できるバリアフリースポット一覧", emoji: "♿" },
  "キッズスペース": { label: "キッズスペースあり",   description: "子どもが遊べるキッズスペースがあるスポット一覧",     emoji: "🎠" },
  "バリアフリー":  { label: "バリアフリー対応",     description: "バリアフリー設計のベビーカーでも安心なスポット一覧", emoji: "♿" },
  "カフェ":        { label: "カフェ併設",           description: "子連れで入れるカフェ・休憩スポット一覧",            emoji: "☕" },
};

const SPOT_TAGS = [
  "授乳室", "おむつ替え", "ベビーカー貸出", "エレベーター", "スロープ", "キッズスペース", "バリアフリー",
];

export function generateStaticParams() {
  return SPOT_TAGS.map((tag) => ({ tag }));
}

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
  const tag = decodeURIComponent(params.tag);
  const meta = TAG_META[tag];
  const label = meta?.label ?? `${tag}のスポット`;
  const desc  = meta?.description ?? `${tag}がある子連れ・ベビーカー向けスポット一覧`;

  return {
    title: `${label}の子連れスポット一覧 | ベビーカーナビ`,
    description: `${desc}。授乳室・ベビーカーで行ける施設をエリア別に紹介。`,
    keywords: [tag, "ベビーカー", "子連れ", "赤ちゃん", "おでかけ", "授乳室"],
    openGraph: {
      title: `${label}の子連れスポット一覧 | ベビーカーナビ`,
      description: desc,
      url: `https://stroller-navi.vercel.app/spots/tag/${params.tag}`,
      siteName: "ベビーカーナビ",
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag    = decodeURIComponent(params.tag);
  const meta   = TAG_META[tag];
  if (!meta && !SPOT_TAGS.includes(tag)) notFound();

  const spots  = ALL_SPOTS.filter((s) => s.tags.includes(tag));
  if (spots.length === 0) notFound();

  const label  = meta?.label  ?? `${tag}のスポット`;
  const desc   = meta?.description ?? `${tag}がある子連れスポット`;
  const emoji  = meta?.emoji  ?? "📍";

  // 地域でグループ化
  const byRegion = new Map<string, typeof spots>();
  for (const s of spots) {
    const r = s.region ?? "その他";
    if (!byRegion.has(r)) byRegion.set(r, []);
    byRegion.get(r)!.push(s);
  }
  const regions = Array.from(byRegion.entries()).sort((a, b) => b[1].length - a[1].length);

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${label}の子連れスポット一覧`,
    "description": desc,
    "url": `https://stroller-navi.vercel.app/spots/tag/${encodeURIComponent(tag)}`,
    "numberOfItems": spots.length,
    "itemListElement": spots.slice(0, 20).map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": s.name,
      "url": `https://stroller-navi.vercel.app/spots/${s.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[640px] mx-auto">

        {/* Header */}
        <header className="px-5 pt-5 pb-6 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/spots" className="hover:text-white">スポット一覧</Link>
            <span className="mx-1.5">›</span>
            <span>{label}</span>
          </nav>
          <div className="text-4xl mb-2">{emoji}</div>
          <h1 className="text-xl font-black leading-snug">{label}の子連れスポット</h1>
          <p className="text-xs text-white/80 mt-1">{spots.length}件のスポット</p>
        </header>

        <main className="p-5 space-y-5">

          {/* タグ横断ナビ */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 mb-2">他の設備・条件で探す</p>
            <div className="flex flex-wrap gap-2">
              {SPOT_TAGS.filter((t) => t !== tag).map((t) => {
                const m = TAG_META[t];
                return (
                  <Link
                    key={t}
                    href={`/spots/tag/${encodeURIComponent(t)}`}
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 hover:bg-brand-50 hover:text-brand-600 rounded-full text-xs font-semibold text-gray-600 transition"
                  >
                    {m?.emoji} {t}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* エリア別スポット */}
          {regions.map(([region, regionSpots]) => (
            <section key={region}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black text-gray-600">📍 {region}</span>
                <div className="flex-1 h-px bg-gray-200" />
                <Link
                  href={`/spots/region/${encodeURIComponent(region)}`}
                  className="text-[10px] text-brand-500 hover:underline"
                >
                  {region}全体を見る
                </Link>
              </div>
              <div className="space-y-2">
                {regionSpots.map((s) => (
                  <Link
                    key={s.id}
                    href={`/spots/${s.id}`}
                    className="flex gap-3 bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-lg shrink-0">
                      {s.category === "indoor" ? "🏠" : s.category === "outdoor" ? "🌳" : "🏠🌳"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate group-hover:text-brand-600 transition">
                        {s.name}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{s.desc}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {s.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${
                              t === tag
                                ? "bg-brand-100 text-brand-700"
                                : "bg-amber-50 text-amber-600"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-gray-300 self-center shrink-0">›</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* 関連記事 */}
          <RelatedArticles tags={[tag]} title="📖 関連ガイド記事" />

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-1">🗺️ 地図でも探せます</p>
            <p className="text-xs text-gray-500 mb-3">現在地周辺の{label}スポットをマップ表示</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition"
            >
              マップで探す
            </Link>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
