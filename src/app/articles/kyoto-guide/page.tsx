import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "【2026年】京都 子連れおでかけ完全ガイド｜授乳室・ベビーカー・観光スポットまとめ | ベビーカーナビ",
  description: "京都の子連れおでかけスポットを完全網羅。京都水族館・梅小路公園・嵐山・金閣寺の授乳室情報、ベビーカーで行きやすいお寺・神社、子連れランチを掲載。0歳から3歳の赤ちゃん連れに。",
  keywords: ["京都 子連れ おでかけ", "京都 授乳室", "京都 ベビーカー", "京都 赤ちゃん", "京都水族館 授乳室", "嵐山 ベビーカー", "京都 0歳"],
  openGraph: {
    title: "【2026年】京都 子連れおでかけ完全ガイド",
    description: "京都の子連れおでかけスポット完全版。京都水族館・嵐山・梅小路公園・授乳室情報・ベビーカーOKスポットを紹介。",
    url: "https://stroller-navi.vercel.app/articles/kyoto-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function KyotoGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】京都 子連れおでかけ完全ガイド｜授乳室・ベビーカー・観光スポットまとめ",
    "description": "京都の子連れおでかけスポットを完全網羅。",
    "url": "https://stroller-navi.vercel.app/articles/kyoto-guide",
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-17",
    "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "京都でベビーカーが使えるお寺・観光地は？",
        "acceptedAnswer": { "@type": "Answer", "text": "梅小路公園・奈良公園（鹿に注意）・岡崎公園周辺はベビーカーで回りやすいです。清水寺や金閣寺は石畳や坂があるため、抱っこ紐との併用を推奨します。" },
      },
      {
        "@type": "Question",
        "name": "京都水族館に授乳室はありますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "はい。京都水族館1Fに授乳室・おむつ替え台・ベビーチェアが設置されています。梅小路公園内にあり、公園内の授乳室も利用できます。" },
      },
      {
        "@type": "Question",
        "name": "京都で0歳の赤ちゃんと楽しめるスポットは？",
        "acceptedAnswer": { "@type": "Answer", "text": "京都水族館（暗めで落ち着く）、梅小路公園（芝生でのんびり）、京都鉄道博物館（広い館内）がおすすめです。" },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>京都子連れガイド</span>
          </nav>
          <div className="text-4xl mb-3">⛩️</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】京都 子連れおでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">授乳室・ベビーカーOKスポット・子連れランチを完全網羅</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              古都・京都は石畳や坂道が多く、ベビーカーでの観光には事前準備が必要です。
              でも安心してください。<strong>梅小路公園・京都水族館・京都鉄道博物館</strong>エリアや
              岡崎エリアはベビーカーで快適に回れます。
              このガイドでは授乳室情報・ベビーカーOKスポット・子連れランチをまとめて紹介します。
            </p>
            <div className="mt-4 p-3 bg-amber-50 rounded-xl text-xs text-amber-700">
              <strong>⚠️ 注意：</strong>清水寺・金閣寺・祇園の石畳は段差・坂が多くベビーカー不向きです。
              抱っこ紐との併用か、周辺の平坦な道でベビーカーを使うのがおすすめ。
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-1">🚂 梅小路エリア（最おすすめ！）</h2>
            <p className="text-xs text-gray-500 mb-4">JR梅小路京都西駅すぐ｜水族館・鉄道博物館が集結</p>
            <div className="space-y-3">
              {[
                {
                  name: "京都水族館",
                  badge: "授乳室1F",
                  desc: "梅小路公園内の水族館。暗めの館内は赤ちゃんも落ち着く。幻想的なクラゲ展示とイルカショーが人気。",
                  tags: ["授乳室", "エレベーター", "おむつ替え"],
                  tips: "1F授乳室はミルク用お湯・おむつ替え台あり。ベビーカーは館内OK。",
                  href: "/spots/5009",
                },
                {
                  name: "京都鉄道博物館",
                  badge: "ベビーカー貸出",
                  desc: "本物のSL・新幹線が展示された迫力の鉄道博物館。広い館内をベビーカーで回れる。運転シミュレーターが人気。",
                  tags: ["授乳室", "ベビーカー貸出", "エレベーター"],
                  tips: "SLスチーム号（SL乗車体験）は2歳以上からOK。水曜休館。",
                  href: "/spots/5003",
                },
                {
                  name: "梅小路公園",
                  badge: "芝生広場◎",
                  desc: "水族館・鉄道博物館に隣接した広大な公園。芝生広場とSLスクエアがあり、ベビーカーで散策しやすい。",
                  tags: ["おむつ替え", "ベビーカー貸出", "スロープ"],
                  tips: "授乳室は水族館・鉄道博物館内に設置。公園内トイレにもおむつ替え台あり。",
                  href: "/spots/5028",
                },
              ].map((s) => (
                <Link key={s.name} href={s.href} className="block bg-gray-50 hover:bg-red-50 rounded-xl p-3.5 transition">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-sm font-bold">{s.name}</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 whitespace-nowrap">{s.badge}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{s.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <p className="text-[10px] text-green-600">💡 {s.tips}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-1">🦌 岡崎・平安神宮エリア</h2>
            <p className="text-xs text-gray-500 mb-4">平坦な道でベビーカー散歩に適したエリア</p>
            <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-700 leading-relaxed">
              <p>岡崎公園は平坦な芝生広場でベビーカーで快適に散策できます。
              京都市動物園・琵琶湖疏水・平安神宮神苑（5歳以下無料）が徒歩圏内に集まっています。</p>
              <ul className="mt-3 space-y-1 text-xs">
                <li>✅ 京都市動物園：ゾウ・ゴリラ・ライオンに会える。授乳室・おむつ替え台あり</li>
                <li>✅ 平安神宮：広い境内は基本的にベビーカーOK</li>
                <li>✅ 岡崎公園：芝生広場でお弁当ランチも◎</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍼 京都の授乳室まとめ</h2>
            <div className="space-y-2">
              {[
                { place: "京都水族館", floor: "1F", detail: "授乳室・おむつ替え台・ミルク用お湯" },
                { place: "京都鉄道博物館", floor: "館内", detail: "授乳室・ベビーカー置き場あり" },
                { place: "イオンモール京都桂川", floor: "各フロア", detail: "授乳室完備・ミルク用お湯" },
                { place: "京都駅 ポルタ", floor: "B1F", detail: "多機能トイレ・おむつ替え台" },
                { place: "京都駅 伊勢丹", floor: "各フロア", detail: "授乳室完備・ミルク用お湯" },
                { place: "四条河原町 大丸京都", floor: "各フロア", detail: "授乳室・おむつ替え台" },
              ].map((r) => (
                <div key={r.place} className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
                  <span className="text-green-500 text-lg">🍼</span>
                  <div>
                    <div className="text-xs font-bold">{r.place}</div>
                    <div className="text-[10px] text-gray-500">{r.floor} ／ {r.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">⚠️ ベビーカーNGな観光地に注意</h2>
            <div className="space-y-2 text-xs">
              {[
                { name: "清水寺", reason: "急な石畳と長い坂道。抱っこ紐推奨" },
                { name: "金閣寺", reason: "砂利道が多い。ベビーカーは駐車場近くに置いて徒歩" },
                { name: "祇園（石畳エリア）", reason: "石畳でガタガタ。ベビーカーは車輪が痛みやすい" },
                { name: "嵐山竹林", reason: "細い道で混雑時はすれ違い困難。渡月橋〜竹林は抱っこ紐推奨" },
                { name: "伏見稲荷大社", reason: "千本鳥居エリアの上り坂は急。下の方のみベビーカーOK" },
              ].map((r) => (
                <div key={r.name} className="flex items-start gap-2 bg-red-50 rounded-xl p-3">
                  <span className="text-red-400">⚠️</span>
                  <div>
                    <span className="font-bold">{r.name}：</span>{r.reason}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-4">❓ よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "京都でベビーカーが使えるお寺・観光地は？",
                  a: "梅小路公園・岡崎公園周辺はベビーカーで回りやすいです。清水寺や金閣寺は石畳や坂があるため、抱っこ紐との併用を推奨します。",
                },
                {
                  q: "京都水族館に授乳室はありますか？",
                  a: "はい。京都水族館1Fに授乳室・おむつ替え台・ベビーチェアが設置されています。梅小路公園内にあり、鉄道博物館の授乳室も利用できます。",
                },
                {
                  q: "京都で0歳の赤ちゃんと楽しめるスポットは？",
                  a: "京都水族館（暗めで落ち着く）、梅小路公園（芝生でのんびり）、京都鉄道博物館（広い館内・授乳室完備）がおすすめです。",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-bold text-gray-800 mb-1">Q. {item.q}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">A. {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">関連ガイド</h3>
            <div className="space-y-2">
              <Link href="/articles/osaka-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">🎡</span>
                <div>
                  <div className="text-xs font-bold">大阪 子連れおでかけガイド</div>
                  <div className="text-[10px] text-gray-500">海遊館・USJ・授乳室まとめ</div>
                </div>
              </Link>
              <Link href="/spots/region/%E8%BF%91%E7%95%BF" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">📍</span>
                <div>
                  <div className="text-xs font-bold">近畿エリアの全スポット一覧</div>
                  <div className="text-[10px] text-gray-500">大阪・京都・神戸・奈良・滋賀のスポット36件</div>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 京都のスポットを地図で見る
            </Link>
          </div>
                  <ArticleAreaNav currentSlug="kyoto-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
