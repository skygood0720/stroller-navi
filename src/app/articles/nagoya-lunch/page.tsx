import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "名古屋 子連れランチ10選【個室・授乳室情報付き】2026年版 | ベビーカーナビ",
  description: "名古屋で赤ちゃん連れでも安心のランチスポットを10店厳選。JRゲートタワー・ミッドランドスクエア・松坂屋など個室あり・ベビーチェアあり・授乳室近くのお店をエリア別に解説。",
  keywords: ["名古屋 子連れランチ", "名古屋 赤ちゃん レストラン", "名古屋駅 子連れ ランチ 個室", "栄 子連れランチ", "名古屋 授乳室 ランチ"],
  openGraph: {
    title: "名古屋 子連れランチ10選【個室・授乳室情報付き】2026年版",
    description: "名古屋で赤ちゃん連れでも安心のランチスポットを10店厳選。JRゲートタワー・ミッドランドスクエア・松坂屋など個室あり・授乳室近くのお店をエリア別に解説。",
    url: "https://stroller-navi.vercel.app/articles/nagoya-lunch",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const RESTAURANTS = [
  {
    name: "JRゲートタワー 12F〜17F レストランフロア",
    area: "名古屋駅直結",
    genre: "和食・フレンチ・カフェ",
    price: "1,500〜3,500円",
    features: ["個室あり", "授乳室（5F）", "ベビーチェアあり", "ベビーカー入店可"],
    good: "名古屋駅直結の高層ビルで、5Fにベビーバスルームがある。12〜17Fの高層レストランフロアは眺望が良く、子どもが窓を楽しんでいる間に食事が進む。個室・半個室のある店舗が多数。",
    tip: "エレベーターは直通があり、ベビーカーでも乗り換えなしでレストランフロアへ。5Fの授乳室は混雑前の早い時間がおすすめ。",
    badge: "駅直結・眺望◎",
  },
  {
    name: "ミッドランドスクエア 4F〜6F レストラン街",
    area: "名古屋駅徒歩2分",
    genre: "和食・イタリアン・カフェ",
    price: "1,200〜2,800円",
    features: ["個室あり", "授乳室（3F）", "ベビーチェアあり"],
    good: "3Fにベビールームあり（授乳椅子・おむつ替え台・電子レンジ完備）。4〜6Fのレストラン街は上質な雰囲気で、スタッフの対応も丁寧。名古屋の観光スポットと組み合わせやすいロケーション。",
    tip: "3Fベビールームのアクセスを事前に確認しておくと便利。週末は混雑するので11時台の早めランチがベター。",
    badge: "設備◎",
  },
  {
    name: "大名古屋ビルヂング B1F〜5F飲食フロア",
    area: "名古屋駅徒歩1分",
    genre: "和食・洋食・カフェ",
    price: "1,000〜2,200円",
    features: ["ベビーチェアあり", "ベビーカー入店可", "授乳室近く（JRゲートタワー利用）"],
    good: "名古屋駅からすぐの好立地。B1〜5Fに多彩なレストランが集まり、カジュアルなものからしっかりした食事まで幅広い。近接のJRゲートタワー（5F）の授乳室を利用できる。",
    tip: "地下フロアは通路が広くベビーカーで動きやすい。近くでコーヒーが飲めるカフェもあり、子どもが眠った後の大人タイムにも使える。",
    badge: "立地◎",
  },
  {
    name: "松坂屋名古屋店 南館 8F〜10F",
    area: "矢場町駅直結",
    genre: "和食・天ぷら・レストラン",
    price: "1,500〜3,000円",
    features: ["個室あり", "授乳室（5F）", "ベビーチェアあり"],
    good: "5Fに充実したベビールームあり。名古屋・栄エリアの老舗百貨店で、スタッフのサービスが行き届いている。南館のレストランフロアは個室が充実しており、授乳後ゆっくり食事できる。",
    tip: "栄エリアの観光（名古屋テレビ塔・久屋大通公園）と組み合わせやすい。ランドマークとしてわかりやすい場所にある。",
    badge: "個室充実◎",
  },
  {
    name: "テラッセ納屋橋 飲食フロア",
    area: "伏見駅徒歩8分",
    genre: "カフェ・カジュアルダイニング",
    price: "900〜1,800円",
    features: ["テラス席あり", "ベビーカー入店可", "開放的な空間"],
    good: "堀川沿いのテラス型複合施設。テラス席はベビーカーのまま着席可能な店が多く、川の景色を眺めながらゆったりランチできる。赤ちゃんが泣いても気を使わない開放的な雰囲気。",
    tip: "授乳室は施設内に確認が必要（規模が小さめの施設のため事前確認推奨）。伏見駅からやや歩くが、川沿いの散歩も楽しめる。",
    badge: "テラス・川沿い◎",
  },
  {
    name: "イオンモールNagoya Noritake Garden フードコート",
    area: "名古屋駅徒歩15分",
    genre: "フードコート・和食・洋食",
    price: "700〜1,500円",
    features: ["フードコートあり", "授乳室完備", "ベビーチェアあり", "ベビーカー入店可"],
    good: "ノリタケの森隣接の大型ショッピングモール。フードコートは座席に余裕があり、赤ちゃん連れが多く訪れる。授乳室・おむつ替え台がしっかり整備されており、長時間滞在も安心。",
    tip: "ノリタケの森と組み合わせたお出かけが人気。公園エリアでの散歩後にフードコートでランチというルートがおすすめ。",
    badge: "設備充実◎",
  },
  {
    name: "名古屋港水族館周辺 ガーデンふ頭エリア",
    area: "名古屋港駅徒歩5分",
    genre: "カジュアルダイニング・カフェ",
    price: "800〜1,800円",
    features: ["ベビーカー入店可", "授乳室（水族館内）", "広い通路"],
    good: "名古屋港水族館に隣接したガーデンふ頭の飲食エリア。水族館見学後のランチ拠点として最適。水族館内に授乳室・おむつ替え台が整備されており、見学前後の利用が可能。",
    tip: "水族館入場後に授乳・おむつ替えを済ませてから、外の飲食エリアでランチというルートがスムーズ。",
    badge: "水族館セット◎",
  },
  {
    name: "星ヶ丘テラス レストラン街",
    area: "星ヶ丘駅直結",
    genre: "カフェ・イタリアン・ベーカリー",
    price: "900〜2,000円",
    features: ["テラス席あり", "ベビーチェアあり", "ベビーカー入店可", "授乳室近く"],
    good: "星ヶ丘三越（授乳室完備）と隣接したテラス型商業施設。テラス席はベビーカーのまま食事できる店が多い。名古屋市内では子連れ人気が高いエリアで、スタッフのベビー対応も慣れている。",
    tip: "星ヶ丘三越の授乳室は比較的空いていて使いやすい。平日は特にのんびり過ごせる。",
    badge: "テラス・穴場◎",
  },
  {
    name: "ららぽーと名古屋みなとAquls フードコート",
    area: "港区役所駅徒歩5分",
    genre: "フードコート・各国料理",
    price: "700〜1,500円",
    features: ["フードコートあり", "授乳室（館内2か所）", "ベビーチェアあり", "ベビーカー入店可"],
    good: "大型フードコートで広い座席スペースあり。館内に2か所の授乳室・おむつ替え台が設けられており、赤ちゃん連れも安心。観覧車などのアミューズメントと組み合わせやすい。",
    tip: "週末はショッピングモール全体が混むため、11:30前の早めランチが快適。平日は非常に空いている。",
    badge: "フードコート◎",
  },
  {
    name: "鶴舞公園周辺カフェ・レストラン",
    area: "鶴舞駅徒歩3分",
    genre: "カフェ・ランチダイニング",
    price: "800〜1,800円",
    features: ["ベビーカー入店可", "テラス席あり（一部）"],
    good: "名古屋市内最大クラスの都市公園「鶴舞公園」に隣接。公園内でベビーカー散歩を楽しんだ後、周辺のカフェでランチができる。公園内の噴水広場やあずまやが赤ちゃんに好評。",
    tip: "鶴舞公園内の公園管理棟付近にトイレあり（おむつ替え台は要確認）。授乳は周辺カフェのスペースを活用。公園との組み合わせが◎。",
    badge: "公園セット◎",
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "名古屋 子連れランチ10選【個室・授乳室情報付き】2026年版",
  "description": "名古屋で赤ちゃん連れでも安心のランチスポットを10店厳選。JRゲートタワー・ミッドランドスクエア・松坂屋など個室あり・授乳室近くのお店をエリア別に解説。",
  "image": "https://stroller-navi.vercel.app/opengraph-image.png",
  "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
  "publisher": {
    "@type": "Organization",
    "name": "ベビーカーナビ",
    "logo": { "@type": "ImageObject", "url": "https://stroller-navi.vercel.app/icon-192.svg" },
  },
  "datePublished": "2026-07-05",
  "dateModified": "2026-07-05",
  "url": "https://stroller-navi.vercel.app/articles/nagoya-lunch",
};

export default function NagoyaLunchPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-5 pb-6 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>名古屋ランチ</span>
          </nav>
          <div className="inline-block bg-white/20 text-xs font-bold px-2 py-0.5 rounded-full mb-2">
            🍽️ エリア別ランチガイド
          </div>
          <h1 className="text-xl font-black leading-snug">
            名古屋 子連れランチ10選<br />
            <span className="text-base font-bold opacity-90">【個室・授乳室情報付き】2026年版</span>
          </h1>
          <p className="text-xs opacity-80 mt-2 leading-relaxed">
            名古屋駅・栄・港区など主要エリアで赤ちゃん連れでも安心のランチスポットを10店厳選。
          </p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor />

          {/* 早見表 */}
          <section className="bg-purple-50 rounded-2xl p-4">
            <p className="text-xs font-black text-purple-700 mb-3">✅ この記事でわかること</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>• 個室あり・ベビーチェアありの名古屋子連れランチ10店</li>
              <li>• 名古屋駅・栄・港区エリア別ランチガイド</li>
              <li>• 観光スポットと組み合わせやすいランチ場所</li>
              <li>• 授乳室・おむつ替え台の場所まとめ</li>
            </ul>
          </section>

          {/* エリアガイド */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-black mb-3">🗺️ 名古屋子連れランチ エリア別選び方</h2>
            <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
              <p><span className="font-bold text-purple-600">名古屋駅エリア</span>（JRゲートタワー・ミッドランド・大名古屋ビルヂング）：授乳室が充実。交通アクセス◎。</p>
              <p><span className="font-bold text-purple-600">栄エリア</span>（松坂屋・星ヶ丘）：個室のある高品質レストランが揃う。観光との組み合わせも。</p>
              <p><span className="font-bold text-purple-600">郊外エリア</span>（港・星ヶ丘・鶴舞）：ショッピングモール・公園と合わせたファミリー向け。</p>
            </div>
          </section>

          {/* Restaurant list */}
          {RESTAURANTS.flatMap((r, idx) => {
            const card = (
              <section key={r.name} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">{r.badge}</span>
                    <h2 className="text-sm font-black mt-1 leading-snug">{idx + 1}. {r.name}</h2>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">📍 {r.area}</span>
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">🍴 {r.genre}</span>
                  <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">💴 {r.price}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {r.features.map((f) => (
                    <span key={f} className="text-[10px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded-full">✓ {f}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-2">{r.good}</p>
                <div className="bg-amber-50 rounded-xl p-2.5">
                  <p className="text-[10px] text-amber-800"><span className="font-bold">💡 Tip：</span>{r.tip}</p>
                </div>
              </section>
            );

            if (idx === 4) {
              return [
                <div key="mid-cta" className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-5 text-white text-center">
                  <p className="text-lg font-black mb-1">🏯 名古屋の子連れスポットも確認！</p>
                  <p className="text-xs opacity-80 mb-4">レゴランド・東山動植物園・名古屋港水族館など名古屋の子連れおでかけ情報をまとめています</p>
                  <Link href="/articles/nagoya-guide" className="inline-block bg-white text-purple-600 font-bold text-sm px-6 py-2.5 rounded-xl hover:opacity-90 transition">
                    名古屋 子連れおでかけ完全ガイドを見る →
                  </Link>
                </div>,
                card,
              ];
            }
            return [card];
          })}

          {/* 授乳室まとめ */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-black mb-3">🍼 名古屋 主な授乳室・おむつ替え場所</h2>
            <div className="space-y-2">
              {[
                { place: "JRゲートタワー", floor: "5F", memo: "名古屋駅直結、設備新しい" },
                { place: "ミッドランドスクエア", floor: "3F", memo: "授乳椅子・電子レンジあり" },
                { place: "松坂屋名古屋店 南館", floor: "5F", memo: "栄エリアで最も使いやすい" },
                { place: "星ヶ丘三越", floor: "各フロア", memo: "星ヶ丘エリア、比較的空いている" },
                { place: "イオンモールNagoya Noritake Garden", floor: "各フロア", memo: "ノリタケの森隣接" },
              ].map((item) => (
                <div key={item.place} className="flex items-start gap-2 text-xs">
                  <span className="text-purple-500 shrink-0 mt-0.5">●</span>
                  <div>
                    <span className="font-bold">{item.place}（{item.floor}）</span>
                    <span className="text-gray-500 ml-1">— {item.memo}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 関連記事 */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-black text-gray-500 mb-3">📚 あわせて読みたい</p>
            <div className="space-y-2">
              {[
                { href: "/articles/nagoya-guide", emoji: "🏯", title: "名古屋 子連れおでかけ完全ガイド", sub: "レゴランド・東山動植物園・授乳室情報" },
                { href: "/articles/restaurant-tips", emoji: "🍽️", title: "子連れランチ完全攻略法 2026年版", sub: "個室・予約のコツ・持ち物リスト" },
                { href: "/articles/osaka-lunch", emoji: "🏯", title: "大阪 子連れランチ10選", sub: "グランフロント・なんばパークスほか" },
                { href: "/articles/yokohama-lunch", emoji: "⚓", title: "横浜 子連れランチ10選", sub: "みなとみらい・中華街ほか" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 rounded-xl p-3 transition">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className="text-[10px] text-gray-500">{item.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="名古屋 子連れランチ10選【個室・授乳室情報付き】2026年版" url="/articles/nagoya-lunch" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
