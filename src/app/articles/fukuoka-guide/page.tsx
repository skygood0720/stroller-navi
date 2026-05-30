import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】福岡 子連れおでかけ完全ガイド｜授乳室・キャナルシティ・マリンワールド | ベビーカーナビ",
  description: "福岡でベビーカーで行けるおすすめスポット・授乳室・子連れランチを完全網羅。キャナルシティ博多・マリンワールド・福岡市動植物園など人気スポットのベビーカー情報を詳しく解説。",
  keywords: ["福岡 子連れ おでかけ", "福岡 ベビーカー", "福岡 授乳室", "キャナルシティ ベビーカー", "福岡 赤ちゃん", "マリンワールド ベビーカー", "福岡 子育て"],
  openGraph: {
    title: "【2026年】福岡 子連れおでかけ完全ガイド",
    description: "キャナルシティ・マリンワールド・アンパンマンミュージアム…福岡のベビーカーOKスポット完全まとめ。",
    url: "https://stroller-navi.vercel.app/articles/fukuoka-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function FukuokaGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】福岡 子連れおでかけ完全ガイド",
    "description": "福岡でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。",
    "url": "https://stroller-navi.vercel.app/articles/fukuoka-guide",
    "datePublished": "2026-05-17",
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
        "name": "福岡でベビーカーで行けるおすすめスポットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "キャナルシティ博多（授乳室完備・全館バリアフリー）、マリンワールド海の中道（エレベーターあり）、福岡市動植物園（ベビーカー貸出あり）がおすすめです。どのスポットも授乳室・おむつ替え台が完備されています。",
        },
      },
      {
        "@type": "Question",
        "name": "福岡でベビーカーで行けるショッピングモールは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "キャナルシティ博多・アミュプラザ博多・マリノアシティ福岡が特におすすめです。授乳室・ベビーカー貸出・エレベーター完備で快適です。アミュプラザ博多は博多駅直結で雨の日も安心です。",
        },
      },
      {
        "@type": "Question",
        "name": "博多駅周辺に授乳室はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "アミュプラザ博多（博多駅直結・各フロアに授乳室）、キャナルシティ博多（徒歩10分・授乳室完備）、博多阪急（博多駅隣接・授乳室あり）があります。博多駅自体にも多目的トイレにおむつ替え台があります。",
        },
      },
      {
        "@type": "Question",
        "name": "福岡市動植物園はベビーカーで入れますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、ベビーカーで入場できます。ベビーカー貸出サービスもあります。スロープカー（ケーブルカー）もベビーカーのまま乗車可能です。授乳室・おむつ替え台も完備されています。",
        },
      },
    ],
  };

  const spots = [
    {
      id: "8001",
      name: "キャナルシティ博多",
      category: "ショッピング・グルメ",
      access: "地下鉄祇園駅から徒歩5分",
      strollerInfo: "全館バリアフリー。各フロアに授乳室完備",
      tags: ["授乳室", "エレベーター", "おむつ替え", "ベビーカー貸出"],
      recommend: "噴水ショーが楽しめる屋外空間もあり、ベビーカーで快適に回れます。フードコートにキッズメニュー充実。",
      ageMin: 0,
    },
    {
      id: "8002",
      name: "アミュプラザ博多",
      category: "ショッピング",
      access: "博多駅直結",
      strollerInfo: "博多駅直結で雨でも安心。屋上にキッズスペースと芝生広場",
      tags: ["授乳室", "エレベーター", "おむつ替え"],
      recommend: "屋上の「つばめの杜ひろば」は芝生広場で子どもが走り回れます。9Fの汽車（TSUTAYA）も人気。",
      ageMin: 0,
    },
    {
      id: "8006",
      name: "マリンワールド海の中道",
      category: "水族館",
      access: "JR海ノ中道駅から徒歩5分",
      strollerInfo: "エレベーター完備。授乳室・おむつ替え台あり",
      tags: ["授乳室", "おむつ替え", "エレベーター"],
      recommend: "イルカショーや屋外デッキからの砂浜も楽しめます。館外の砂浜でベビーカーをたたんで抱っこ散歩もおすすめ。",
      ageMin: 4,
    },
    {
      id: "8005",
      name: "福岡市動植物園",
      category: "動物園",
      access: "地下鉄薬院大通駅から徒歩10分",
      strollerInfo: "ベビーカー貸出あり。スロープカーもベビーカーのまま乗車可",
      tags: ["授乳室", "おむつ替え", "ベビーカー貸出"],
      recommend: "動物園と植物園がセット。ゴリラやカバなど迫力ある展示が充実。ベビーカー貸出があるので手ぶらで来ても安心。",
      ageMin: 4,
    },
    {
      id: "8014",
      name: "福岡アンパンマンこどもミュージアム",
      category: "室内遊び場",
      access: "地下鉄中洲川端駅から徒歩5分（博多リバレインモール内）",
      strollerInfo: "館内バリアフリー。授乳室・おむつ替え台完備",
      tags: ["授乳室", "おむつ替え", "エレベーター"],
      recommend: "アンパンマンショーが1日数回開催。ボールプールなど0歳から遊べるコーナーも充実。雨の日の定番スポット。",
      ageMin: 7,
    },
    {
      id: "8019",
      name: "マリノアシティ福岡",
      category: "アウトレット・ショッピング",
      access: "地下鉄姪浜駅から無料シャトルバス",
      strollerInfo: "全館バリアフリー。授乳室・ベビーカー貸出あり",
      tags: ["授乳室", "ベビーカー貸出", "エレベーター", "おむつ替え"],
      recommend: "九州最大のアウトレット。観覧車（マリナーゼ）は0歳からOKで景色が楽しめます。広い通路でベビーカーも快適。",
      ageMin: 0,
    },
  ];

  const nursingRooms = [
    { place: "キャナルシティ博多", floor: "各フロア（B2F・1F・3F）", features: "授乳個室、おむつ替え台、ミルク用お湯、ソファあり" },
    { place: "アミュプラザ博多", floor: "3F・5F・9F", features: "授乳個室、おむつ替え台、電子レンジあり" },
    { place: "博多阪急", floor: "5F ベビー休憩室", features: "授乳個室2室、おむつ替え台、ソファあり" },
    { place: "マリノアシティ福岡", floor: "情報センター内", features: "授乳個室、おむつ替え台、ミルク用お湯" },
    { place: "マリンワールド海の中道", floor: "1Fエントランス付近", features: "授乳スペース、おむつ替え台" },
    { place: "福岡市動植物園", floor: "動物園内サービスセンター", features: "授乳室、おむつ替え台" },
  ];

  const restaurants = [
    { name: "キャナルシティ フードコート", area: "キャナルシティB1F", features: "キッズメニューあり、ベビーチェアあり、席間広め", price: "700〜1,500円" },
    { name: "アミュプラザ博多 レストラン街", area: "アミュプラザ10F", features: "各店ベビーチェアあり、テーブル間広め", price: "1,000〜3,000円" },
    { name: "海の中道マリンワールドレストラン", area: "マリンワールド館内", features: "海の景色を楽しみながら食事、ベビーチェアあり", price: "1,200〜2,000円" },
    { name: "博多 一風堂（博多本店）", area: "博多駅周辺", features: "子連れOK、ベビーチェアあり、早い時間帯が狙い目", price: "800〜1,200円" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>福岡ガイド</span>
          </nav>
          <div className="text-4xl mb-3">🎏</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】福岡 子連れおでかけ<br />完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">授乳室・キャナルシティ・マリンワールド・アンパンマンミュージアム</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          <ArticleAuthor date="2026年5月" readTime="約7分" />
          {/* イントロ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              天神・博多を中心に子連れ向け施設が充実している福岡。
              ショッピングモール・水族館・動物園・アンパンマンミュージアムなど、
              <strong>0歳から楽しめるスポット</strong>が豊富です。
              このガイドでは福岡でベビーカーで行けるおすすめスポット・授乳室・子連れランチを完全網羅しています。
            </p>
          </section>

          {/* 福岡子連れの特徴 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">✅ 福岡が子連れに向いている理由</h2>
            <div className="space-y-2 text-xs">
              {[
                { icon: "🚇", text: "地下鉄・バスが充実。博多〜天神間はエレベーターが多い" },
                { icon: "🏬", text: "キャナルシティ・アミュプラザなど授乳室完備の大型施設が集中" },
                { icon: "🌤️", text: "年間を通じて比較的温暖で、雨の日も室内施設が充実" },
                { icon: "🍜", text: "ラーメン・もつ鍋など子連れ可能な飲食店が多い" },
                { icon: "🌊", text: "海の中道など自然遊びスポットも市内から近い" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2 bg-red-50 rounded-xl p-3">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* スポット一覧 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-4">🗺️ ベビーカーおすすめスポット6選</h2>
            <div className="space-y-4">
              {spots.map((spot, i) => (
                <Link href={`/spots/${spot.id}`} key={spot.id}
                  className="block border border-gray-100 rounded-xl p-4 hover:border-red-200 hover:bg-red-50 transition">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium">{i + 1}. {spot.category}</span>
                      <h3 className="text-sm font-bold">{spot.name}</h3>
                    </div>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold whitespace-nowrap ml-2">
                      {spot.ageMin === 0 ? "0歳〜OK" : `${spot.ageMin}ヶ月〜`}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-2">📍 {spot.access}</p>
                  <p className="text-xs text-gray-700 mb-2">{spot.recommend}</p>
                  <div className="flex flex-wrap gap-1">
                    {spot.tags.map((tag) => (
                      <span key={tag} className="text-[9px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-medium">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 授乳室まとめ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍼 福岡の授乳室まとめ</h2>
            <div className="space-y-2">
              {nursingRooms.map((room) => (
                <div key={room.place} className="bg-pink-50 rounded-xl p-3">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-gray-800">{room.place}</span>
                    <span className="text-[9px] text-pink-600 font-bold ml-2 whitespace-nowrap">{room.floor}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-1">{room.features}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-3">※情報は2026年5月時点。変更の場合があります。</p>
          </section>

          {/* 子連れランチ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍽️ 子連れランチおすすめ</h2>
            <div className="space-y-3">
              {restaurants.map((r) => (
                <div key={r.name} className="border border-gray-100 rounded-xl p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold">{r.name}</p>
                      <p className="text-[10px] text-gray-500">📍 {r.area}</p>
                    </div>
                    <span className="text-[10px] text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded ml-2 whitespace-nowrap">{r.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-1">{r.features}</p>
                </div>
              ))}
            </div>
          </section>

          {/* エリア別モデルコース */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🚶 子連れモデルコース</h2>
            <div className="space-y-3">
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-xs font-bold text-orange-800 mb-2">【博多エリア】半日コース</p>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>① アミュプラザ博多（博多駅直結・授乳室でひと休み）</p>
                  <p>↓ 徒歩10分</p>
                  <p>② キャナルシティ博多（噴水ショー鑑賞・フードコートでランチ）</p>
                  <p>↓ 地下鉄で10分</p>
                  <p>③ 中洲川端でアンパンマンミュージアム（雨天時最適）</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-800 mb-2">【海の中道エリア】終日コース</p>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>① マリンワールド海の中道（午前〜お昼）</p>
                  <p>↓ 徒歩5分</p>
                  <p>② 海の中道海浜公園（芝生広場で自由遊び）</p>
                  <p>↓ JRで30分</p>
                  <p>③ 博多駅周辺でディナー</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-4">❓ よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "福岡でベビーカーで行けるおすすめスポットは？",
                  a: "キャナルシティ博多（全館バリアフリー）、マリンワールド海の中道（エレベーターあり）、福岡市動植物園（ベビーカー貸出あり）がおすすめです。",
                },
                {
                  q: "博多駅周辺に授乳室はありますか？",
                  a: "アミュプラザ博多（駅直結・3F・5F・9F）と博多阪急（5F）に授乳室があります。博多駅自体の多目的トイレにもおむつ替え台があります。",
                },
                {
                  q: "福岡市動植物園はベビーカーで入れますか？",
                  a: "はい、入場できます。ベビーカー貸出あり、スロープカーもベビーカーのまま乗車可能です。",
                },
                {
                  q: "アンパンマンこどもミュージアムは何歳から楽しめますか？",
                  a: "0歳から入場できます。ボールプールや低月齢向けコーナーがあり、7ヶ月〜1歳半が特に楽しめます。年齢によってアンパンマンショーへの反応が変わります。",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-bold text-gray-800 mb-1">Q. {item.q}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">A. {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連記事 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">関連記事</h3>
            <div className="space-y-2">
              <Link href="/articles/osaka-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 rounded-xl p-3 transition">
                <span className="text-xl">🏯</span>
                <div>
                  <div className="text-xs font-bold">大阪 子連れおでかけ完全ガイド</div>
                  <div className="text-[10px] text-gray-500">USJ・海遊館・キッズプラザのベビーカー情報</div>
                </div>
              </Link>
              <Link href="/articles/train-stroller-manner" className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 rounded-xl p-3 transition">
                <span className="text-xl">🚃</span>
                <div>
                  <div className="text-xs font-bold">ベビーカーで電車に乗るときのマナー</div>
                  <div className="text-[10px] text-gray-500">折りたたむ必要はある？優先スペースの使い方</div>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 福岡の近くのスポットを探す
            </Link>
          </div>
                  <ArticleAreaNav currentSlug="fukuoka-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
