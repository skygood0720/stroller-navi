import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "【2026年】横浜 子連れおでかけ完全ガイド｜授乳室・みなとみらい・ランチまとめ | ベビーカーナビ",
  description: "横浜の子連れおでかけスポット完全網羅。八景島シーパラダイス・アンパンマンミュージアム・野毛山動物園・みなとみらいの授乳室情報、ベビーカーOKランチを掲載。0歳から3歳に。",
  keywords: ["横浜 子連れ おでかけ", "横浜 授乳室", "横浜 ベビーカー", "みなとみらい 赤ちゃん", "八景島 授乳室", "アンパンマン 横浜", "横浜 0歳"],
  openGraph: {
    title: "【2026年】横浜 子連れおでかけ完全ガイド",
    description: "横浜の子連れおでかけスポット完全版。みなとみらい・八景島・アンパンマンミュージアム・授乳室情報を紹介。",
    url: "https://stroller-navi.vercel.app/articles/yokohama-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function YokohamaGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】横浜 子連れおでかけ完全ガイド｜授乳室・みなとみらい・ランチまとめ",
    "description": "横浜の子連れおでかけスポットを完全網羅。",
    "url": "https://stroller-navi.vercel.app/articles/yokohama-guide",
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
        "name": "横浜みなとみらいで授乳室がある場所は？",
        "acceptedAnswer": { "@type": "Answer", "text": "ランドマークプラザ3F・クイーンズスクエア各フロア・コスモワールド近くのワールドポーターズ各フロアに授乳室があります。横浜駅のジョイナスB2Fにも授乳室完備です。" },
      },
      {
        "@type": "Question",
        "name": "横浜アンパンマンこどもミュージアムは何歳から楽しめますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "0歳から楽しめます。ベビーカーで入場可能で、館内に授乳室・おむつ替え台が完備されています。特に1〜3歳の子どもに大人気のスポットです。" },
      },
      {
        "@type": "Question",
        "name": "横浜で0歳の赤ちゃんでも楽しめるスポットは？",
        "acceptedAnswer": { "@type": "Answer", "text": "横浜アンパンマンこどもミュージアム（0歳から）、ズーラシア動物園（授乳室完備）、みなとみらい周辺の広場、ランドマークプラザなどがおすすめです。" },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>横浜子連れガイド</span>
          </nav>
          <div className="text-4xl mb-3">🎡</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】横浜 子連れおでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">みなとみらい・八景島・授乳室・ランチを完全網羅</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              横浜はみなとみらいを中心に、子連れに優しい施設が充実しています。
              <strong>アンパンマンこどもミュージアム・八景島シーパラダイス・よこはま動物園ズーラシア</strong>など、
              0歳から楽しめるスポットが揃っています。
              このガイドでは授乳室・ベビーカーOK情報・子連れランチを完全網羅します。
            </p>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-1">⚓ みなとみらいエリア</h2>
            <p className="text-xs text-gray-500 mb-4">横浜市中区｜ベビーカーで回りやすい観光地</p>
            <div className="space-y-3">
              {[
                {
                  name: "横浜アンパンマンこどもミュージアム",
                  badge: "0歳から",
                  desc: "みなとみらい徒歩5分。キャラクターに会えるミュージアム。授乳室・おむつ替え台完備。ベビーカーOK。",
                  tags: ["授乳室", "エレベーター", "おむつ替え"],
                  tips: "0〜3歳の子どもが大喜び。平日のオープン直後が空いていておすすめ。",
                  href: "/spots/3033",
                },
                {
                  name: "ランドマークプラザ",
                  badge: "授乳室3F",
                  desc: "みなとみらいの大型商業施設。3Fに授乳室・体重計・おむつ替え台。エレベーター完備。",
                  tags: ["授乳室", "エレベーター", "体重計"],
                  tips: "授乳室は清潔で広い。ミルク用お湯・授乳個室あり。",
                  href: "/spots/3033",
                },
              ].map((s) => (
                <Link key={s.name} href={s.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-3.5 transition">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-sm font-bold">{s.name}</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap">{s.badge}</span>
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
            <h2 className="text-base font-black mb-1">🦁 八景島・金沢エリア</h2>
            <p className="text-xs text-gray-500 mb-4">八景島シーパラダイス｜水族館と遊園地が一体化</p>
            <Link href="/spots/3034" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-3.5 transition">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-bold">八景島シーパラダイス</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">授乳室完備</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                水族館・遊園地・マリーナが一体。ふれあいラグーンでイルカ・セイウチと触れ合える。
                授乳室・おむつ替え台・ベビーカー貸出あり。
              </p>
              <div className="flex flex-wrap gap-1 mb-1.5">
                {["授乳室", "おむつ替え", "ベビーカー貸出", "エレベーター"].map((t) => (
                  <span key={t} className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">{t}</span>
                ))}
              </div>
              <p className="text-[10px] text-green-600">💡 シーサイドラインでアクセス可能。駐車場も広い。</p>
            </Link>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍼 横浜の授乳室まとめ</h2>
            <div className="space-y-2">
              {[
                { place: "横浜駅 ジョイナス", floor: "B2F", detail: "授乳室・おむつ替え台・ミルク用お湯完備" },
                { place: "ランドマークプラザ", floor: "3F", detail: "授乳室・体重計・ミルク用お湯" },
                { place: "よこはま動物園ズーラシア", floor: "正門近くビジターセンター", detail: "授乳室・おむつ替え台完備" },
                { place: "ららぽーと横浜", floor: "各フロア", detail: "授乳室完備・ミルク用お湯" },
                { place: "ワールドポーターズ", floor: "各フロア", detail: "おむつ替え台・授乳室あり" },
                { place: "横浜高島屋", floor: "各フロア", detail: "授乳室・ベビー休憩室" },
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
            <h2 className="text-base font-black mb-3">🍽️ 子連れランチ おすすめ</h2>
            <div className="space-y-2">
              {[
                { name: "ロイヤルホスト ららぽーと横浜店", feat: "キッズメニュー充実・离乳食温め可", area: "横浜市都筑区" },
                { name: "丸亀製麺 みなとみらい店", feat: "手軽・キッズメニュー・ベビーチェア", area: "みなとみらい" },
                { name: "ラゾーナ川崎 各レストラン", feat: "授乳室が近い・広い席", area: "川崎" },
              ].map((r) => (
                <div key={r.name} className="flex items-start gap-2 bg-blue-50 rounded-xl p-3">
                  <span className="text-blue-400 mt-0.5 text-lg">🍽️</span>
                  <div>
                    <div className="text-xs font-bold">{r.name}</div>
                    <div className="text-[10px] text-gray-500">{r.area} ／ {r.feat}</div>
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
                  q: "横浜みなとみらいで授乳室がある場所は？",
                  a: "ランドマークプラザ3F・クイーンズスクエア各フロア・ワールドポーターズ各フロアに授乳室があります。横浜駅のジョイナスB2Fにも授乳室完備です。",
                },
                {
                  q: "横浜アンパンマンこどもミュージアムは何歳から楽しめますか？",
                  a: "0歳から楽しめます。ベビーカーで入場可能で、館内に授乳室・おむつ替え台が完備されています。特に1〜3歳の子どもに大人気です。",
                },
                {
                  q: "横浜で0歳の赤ちゃんでも楽しめるスポットは？",
                  a: "横浜アンパンマンこどもミュージアム（0歳から）、ズーラシア（授乳室完備）、みなとみらいの広場、ランドマークプラザなどがおすすめです。",
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
              <Link href="/spots/region/%E9%96%A2%E6%9D%B1" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">📍</span>
                <div>
                  <div className="text-xs font-bold">関東エリアの全スポット一覧</div>
                  <div className="text-[10px] text-gray-500">神奈川・埼玉・千葉のスポット一覧</div>
                </div>
              </Link>
              <Link href="/articles/odaiba-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">🎡</span>
                <div>
                  <div className="text-xs font-bold">お台場・豊洲 子連れガイド</div>
                  <div className="text-[10px] text-gray-500">レゴランド・リトルプラネット・科学館</div>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 横浜のスポットを地図で見る
            </Link>
          </div>
                  <ArticleAreaNav currentSlug="yokohama-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
