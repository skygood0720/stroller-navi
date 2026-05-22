import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "【2026年】名古屋 子連れおでかけ完全ガイド｜授乳室・レゴランド・東山動植物園 | ベビーカーナビ",
  description: "名古屋でベビーカーで行けるおすすめスポット・授乳室・子連れランチを完全網羅。レゴランド・東山動植物園・名古屋港水族館など人気スポットのベビーカー情報を詳しく解説。",
  keywords: ["名古屋 子連れ おでかけ", "名古屋 ベビーカー", "名古屋 授乳室", "レゴランド ベビーカー", "東山動植物園 子連れ", "名古屋港水族館 ベビーカー", "名古屋 赤ちゃん おでかけ"],
  openGraph: {
    title: "【2026年】名古屋 子連れおでかけ完全ガイド",
    description: "レゴランド・東山動植物園・名古屋港水族館…名古屋のベビーカーOKスポット完全まとめ。",
    url: "https://stroller-navi.vercel.app/articles/nagoya-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function NagoyaGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】名古屋 子連れおでかけ完全ガイド",
    "description": "名古屋でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。",
    "url": "https://stroller-navi.vercel.app/articles/nagoya-guide",
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
        "name": "名古屋でベビーカーで行けるおすすめスポットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "レゴランド・ジャパン（ベビーカーレンタルあり・ベビーケアセンター完備）、東山動植物園（ベビーカー貸出・授乳室あり）、名古屋港水族館（全館バリアフリー）が特におすすめです。名古屋駅直結のゲートタワーモールも授乳室完備で0歳から安心です。",
        },
      },
      {
        "@type": "Question",
        "name": "レゴランド・ジャパンはベビーカーで入れますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、ベビーカーで入場できます。ベビーカーレンタルサービスもあります。園内各所にベビーケアセンター（授乳室・おむつ替え台）が設置されています。3歳未満でも乗れるアトラクションが複数あります。",
        },
      },
      {
        "@type": "Question",
        "name": "名古屋駅周辺に授乳室はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "名古屋タカシマヤ ゲートタワーモール7F、近鉄パッセ5F、ミッドランドスクエア4Fに授乳室があります。名古屋駅自体の多目的トイレにもおむつ替え台があります。",
        },
      },
      {
        "@type": "Question",
        "name": "東山動植物園はベビーカーで回れますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ベビーカーで入場・回ることができます。ベビーカー貸出があります。ただし園内は坂道もあるため、体力のあるパパが押すと楽です。スカイビュートレイン（モノレール）もベビーカーのまま乗車可能です。",
        },
      },
    ],
  };

  const spots = [
    {
      id: "4001",
      name: "名古屋タカシマヤ ゲートタワーモール",
      category: "ショッピング",
      access: "名古屋駅直結",
      strollerInfo: "名古屋駅直結。7Fにベビー休憩室・授乳個室完備",
      tags: ["授乳室", "エレベーター", "おむつ替え", "ベビーカー貸出"],
      recommend: "名古屋駅直結で雨でも安心。7Fの授乳室はゆったりした個室。ポケモンセンターやキッズフロアも充実。",
      ageMin: 0,
    },
    {
      id: "4002",
      name: "レゴランド・ジャパン",
      category: "テーマパーク",
      access: "あおなみ線金城ふ頭駅から徒歩5分",
      strollerInfo: "ベビーカーレンタルあり。園内各所にベビーケアセンター",
      tags: ["授乳室", "おむつ替え", "ベビーカー貸出", "エレベーター"],
      recommend: "3歳未満でも乗れるアトラクション多数。デュプロ・バレーはブロックで遊べる0歳から楽しめるエリア。ベビーケアセンターが充実しているのも安心。",
      ageMin: 7,
    },
    {
      id: "4003",
      name: "東山動植物園",
      category: "動物園・植物園",
      access: "地下鉄東山公園駅から徒歩3分",
      strollerInfo: "ベビーカー貸出あり。スカイビュートレインはベビーカーのまま乗車可",
      tags: ["授乳室", "おむつ替え", "ベビーカー貸出"],
      recommend: "コアラとゴリラが必見！ベビーカー貸出があり手ぶらで来ても安心。スカイビュートレイン（モノレール）に乗りながら動物を見下ろす体験も楽しい。",
      ageMin: 4,
    },
    {
      id: "4004",
      name: "名古屋港水族館",
      category: "水族館",
      access: "地下鉄名古屋港駅から徒歩5分",
      strollerInfo: "館内全域バリアフリー。ベビーカーレンタルあり",
      tags: ["授乳室", "おむつ替え", "エレベーター", "ベビーカー貸出"],
      recommend: "シャチとベルーガが大人気。館内は全域バリアフリーでベビーカーで完全に回れます。イルカショー・シャチトレーニングは迫力満点。授乳室も広くて清潔。",
      ageMin: 0,
    },
    {
      id: "4011",
      name: "鈴鹿サーキット モートピア",
      category: "テーマパーク",
      access: "近鉄白子駅からバス30分",
      strollerInfo: "授乳室完備。3歳未満でも乗れるアトラクション多数",
      tags: ["授乳室", "おむつ替え", "ベビーカー貸出", "エレベーター"],
      recommend: "0歳から乗れるアトラクションが充実しているテーマパーク。キッズバイクや観覧車など小さい子向け施設も豊富。F1の本場でモータースポーツの雰囲気も。",
      ageMin: 0,
    },
    {
      id: "4018",
      name: "富山市ファミリーパーク",
      category: "動物園・遊園地",
      access: "富山市電 公園前駅から徒歩5分",
      strollerInfo: "ベビーカー貸出あり。授乳室・おむつ替え台完備",
      tags: ["授乳室", "おむつ替え", "ベビーカー貸出"],
      recommend: "里山の自然の中にある動物園と遊園地の複合施設。入場料が安く（大人500円）、ふれあいコーナーで小動物に触れられます。",
      ageMin: 4,
    },
  ];

  const nursingRooms = [
    { place: "名古屋タカシマヤ ゲートタワーモール", floor: "7F ベビー休憩室", features: "授乳個室3室、おむつ替え台、ミルク用お湯、電子レンジ、哺乳瓶消毒器" },
    { place: "近鉄パッセ", floor: "5F ベビー休憩室", features: "授乳個室2室、おむつ替え台、ソファあり" },
    { place: "ミッドランドスクエア", floor: "4F", features: "授乳個室、おむつ替え台" },
    { place: "レゴランド・ジャパン", floor: "園内3か所 ベビーケアセンター", features: "授乳個室（鍵付き）、おむつ替え台、授乳チェア、ミルク用お湯" },
    { place: "名古屋港水族館", floor: "1F・3F", features: "授乳スペース、おむつ替え台、ソファあり" },
    { place: "東山動植物園", floor: "園内サービスセンター", features: "授乳室、おむつ替え台" },
  ];

  const restaurants = [
    { name: "ゲートタワーモール レストラン街", area: "ゲートタワー6〜7F", features: "各店ベビーチェアあり。名古屋グルメ（味噌かつ等）も楽しめる", price: "1,000〜3,000円" },
    { name: "レゴランド内レストラン", area: "レゴランド内", features: "キッズメニューあり、ベビーチェアあり、テーマ感たっぷりの食事", price: "1,500〜3,000円" },
    { name: "名古屋港水族館内レストラン", area: "名古屋港水族館3F", features: "海の見えるレストラン。ベビーチェアあり", price: "1,200〜2,500円" },
    { name: "矢場とん 矢場町本店", area: "名古屋市内（矢場町）", features: "名古屋名物みそかつ。子連れOK、ベビーチェアあり", price: "1,000〜2,500円" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>名古屋ガイド</span>
          </nav>
          <div className="text-4xl mb-3">🏯</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】名古屋 子連れおでかけ<br />完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">授乳室・レゴランド・東山動植物園・名古屋港水族館</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          {/* イントロ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              東海地方の中心都市・名古屋には、レゴランド・東山動植物園・名古屋港水族館など
              <strong>子連れ向けの充実した施設</strong>が集まっています。
              名古屋駅直結のゲートタワーモールをはじめ、授乳室・ベビーカー対応施設も豊富。
              このガイドでは名古屋でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅します。
            </p>
          </section>

          {/* 名古屋子連れの特徴 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">✅ 名古屋が子連れに向いている理由</h2>
            <div className="space-y-2 text-xs">
              {[
                { icon: "🎡", text: "レゴランド・東山動植物園・名古屋港水族館が同じ市内に集中" },
                { icon: "🚇", text: "地下鉄が充実。ほとんどの主要スポットが地下鉄でアクセス可能" },
                { icon: "🏬", text: "名古屋駅のゲートタワーモールが授乳室・ベビーカー貸出完備" },
                { icon: "🍱", text: "ひつまぶし・みそかつなど名古屋メシも子連れ可のお店が多い" },
                { icon: "🌡️", text: "夏は暑いが大型室内施設が充実。冬はショッピングモールが快適" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2 bg-amber-50 rounded-xl p-3">
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
                  className="block border border-gray-100 rounded-xl p-4 hover:border-amber-200 hover:bg-amber-50 transition">
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
                      <span key={tag} className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 授乳室まとめ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍼 名古屋の授乳室まとめ</h2>
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

          {/* モデルコース */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🚶 子連れモデルコース</h2>
            <div className="space-y-3">
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs font-bold text-amber-800 mb-2">【名古屋駅エリア】半日コース</p>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>① ゲートタワーモール（7Fで授乳・おむつ替え）</p>
                  <p>↓ 徒歩3分</p>
                  <p>② 名古屋タカシマヤ ベビーフロアでお買い物</p>
                  <p>↓ 地下鉄で20分</p>
                  <p>③ 東山公園 or 名古屋港（お子さんの状態次第）</p>
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-xs font-bold text-orange-800 mb-2">【金城ふ頭エリア】終日コース</p>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>① あおなみ線で金城ふ頭へ</p>
                  <p>② レゴランド・ジャパン（午前〜昼食）</p>
                  <p>↓ 徒歩10分</p>
                  <p>③ メイカーズ・ピア（おやつ・ショッピング）</p>
                  <p>↓ あおなみ線で帰路</p>
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
                  q: "名古屋でベビーカーで行けるおすすめスポットは？",
                  a: "レゴランド・ジャパン（ベビーカーレンタルあり）、東山動植物園（ベビーカー貸出あり）、名古屋港水族館（全館バリアフリー）が特におすすめです。",
                },
                {
                  q: "レゴランド・ジャパンはベビーカーで入れますか？",
                  a: "はい、入場できます。ベビーカーレンタルサービスもあります。3歳未満でも乗れるアトラクションが複数あります。",
                },
                {
                  q: "名古屋駅周辺に授乳室はありますか？",
                  a: "ゲートタワーモール7F、近鉄パッセ5F、ミッドランドスクエア4Fに授乳室があります。名古屋駅直結で雨の日も安心です。",
                },
                {
                  q: "東山動植物園はベビーカーで回れますか？",
                  a: "ベビーカーで入場・回ることができます。ベビーカー貸出があります。坂道もありますが、スカイビュートレインに乗りながら楽に移動もできます。",
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
              <Link href="/articles/osaka-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-amber-50 rounded-xl p-3 transition">
                <span className="text-xl">🏯</span>
                <div>
                  <div className="text-xs font-bold">大阪 子連れおでかけ完全ガイド</div>
                  <div className="text-[10px] text-gray-500">USJ・海遊館のベビーカー情報</div>
                </div>
              </Link>
              <Link href="/articles/kyoto-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-amber-50 rounded-xl p-3 transition">
                <span className="text-xl">⛩️</span>
                <div>
                  <div className="text-xs font-bold">京都 子連れおでかけ完全ガイド</div>
                  <div className="text-[10px] text-gray-500">ベビーカーOK・NG観光地を正直解説</div>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 名古屋の近くのスポットを探す
            </Link>
          </div>
                  <ArticleAreaNav currentSlug="nagoya-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
