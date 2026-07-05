import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "新宿 子連れランチ10選【個室・授乳室情報付き】2026年版 | ベビーカーナビ",
  description: "新宿駅周辺で赤ちゃん連れでも安心のランチスポットを10店厳選。高島屋・NEWoMan・伊勢丹など個室あり・ベビーチェアあり・授乳室近くのお店をエリア別に解説。ベビーカーのまま入れるお店も。",
  keywords: ["新宿 子連れランチ", "新宿 赤ちゃん レストラン", "新宿 個室 ランチ", "新宿 授乳室 近く", "新宿 ベビーカー 入れる レストラン"],
  openGraph: {
    title: "新宿 子連れランチ10選【個室・授乳室情報付き】2026年版",
    description: "新宿駅周辺で赤ちゃん連れでも安心のランチスポットを10店厳選。個室あり・ベビーチェアあり・授乳室近くのお店をエリア別に解説。",
    url: "https://stroller-navi.vercel.app/articles/shinjuku-lunch",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const RESTAURANTS = [
  {
    name: "高島屋タイムズスクエア 11F〜14F レストランフロア",
    area: "新宿駅南口徒歩3分",
    genre: "和食・洋食・各国料理",
    price: "1,200〜2,500円",
    features: ["個室あり", "授乳室近く", "ベビーチェアあり", "ベビーカー入店可"],
    good: "11〜14Fに個室や半個室を備えたレストランが多数。B2Fとフロア内に授乳室・おむつ替え台あり。新宿駅南口から雨でも濡れずにアクセス可能。",
    tip: "週末は事前予約推奨。エレベーターは南側が広くベビーカーでも快適。",
    badge: "個室◎",
  },
  {
    name: "NEWoMan新宿 2F〜7F レストランフロア",
    area: "新宿駅直結（バスタ新宿隣接）",
    genre: "カフェ・イタリアン・和食",
    price: "1,000〜2,500円",
    features: ["ベビーチェアあり", "ベビーカー入店可", "2F授乳室近く"],
    good: "2Fに設けられた授乳室・おむつ替えスペースがレストランフロアに近い。落ち着いたおしゃれな雰囲気で授乳後すぐランチが可能。エスカレーターとエレベーターの両方あり。",
    tip: "2Fの授乳室は事前確認推奨。平日ランチタイム（11:30〜13:00）は混むので早めに来店を。",
    badge: "駅直結◎",
  },
  {
    name: "伊勢丹新宿店 5F〜7F レストランパーク",
    area: "新宿三丁目駅直結",
    genre: "和食・フレンチ・ビストロ",
    price: "1,500〜3,000円",
    features: ["個室あり", "座敷席あり（店舗による）", "ベビーチェアあり"],
    good: "5〜7Fに高品質なレストランが揃う。5Fのベビー休憩室が使いやすい。伊勢丹のスタッフ対応が丁寧で、ベビーカーでの移動もサポートしてもらいやすい。",
    tip: "個室は早めの予約が必要。三越伊勢丹のアプリからオンライン予約が便利。",
    badge: "高品質◎",
  },
  {
    name: "小田急ハルク 5F レストラン街",
    area: "新宿駅西口徒歩1分",
    genre: "洋食・定食・カフェ",
    price: "900〜1,800円",
    features: ["座敷席あり", "ベビーチェアあり", "ベビーカー入店可"],
    good: "座敷席を設けた和洋折衷の定食系レストランが複数。新宿西口から直結でアクセスが楽。授乳室は小田急百貨店側にもあり、徒歩3分程度。",
    tip: "ハルク5Fは知名度が低く狙い目。平日は比較的すいている。",
    badge: "穴場◎",
  },
  {
    name: "新宿住友ビル 三角広場 周辺レストラン",
    area: "新宿駅西口徒歩5分",
    genre: "カフェ・ファストカジュアル",
    price: "800〜1,500円",
    features: ["広い通路", "ベビーカー入店可", "テラス席あり"],
    good: "低層部に飲食店が集まる。吹き抜けの三角広場は赤ちゃんが泣いても音が分散され気兼ねなく食事できる。近くに新宿中央公園があり、食後の散歩もできる。",
    tip: "新宿中央公園に授乳室・おむつ替えスペースあり（徒歩5分）。公園で遊んでから食事するルートがおすすめ。",
    badge: "のびのび◎",
  },
  {
    name: "モア4番街・新宿モア5番街 飲食店",
    area: "新宿駅東口徒歩2分",
    genre: "和食・カジュアルダイニング",
    price: "900〜2,000円",
    features: ["ベビーチェアあり（店舗による）", "ベビーカー入店可"],
    good: "東口の商業エリアに立ち並ぶカジュアルな飲食店街。価格が手頃でカジュアルな雰囲気なので赤ちゃん連れでも周りを気にせず食事ができる。",
    tip: "東口の東急ハンズ（新宿店）7Fにおむつ替え台あり。ランチ後のついで買いにも便利。",
    badge: "リーズナブル◎",
  },
  {
    name: "京王モール（新宿地下街）内レストラン",
    area: "新宿駅地下直結",
    genre: "定食・ラーメン・カフェ",
    price: "700〜1,500円",
    features: ["ベビーカー通行可", "雨でもアクセス可"],
    good: "地下街で繋がっているため雨や猛暑でも濡れずに行ける。特に授乳がしやすいカフェが複数あり、比較的静かな雰囲気。京王百貨店にはおむつ替え台あり。",
    tip: "地下は通路が広くベビーカーでも通りやすい。ただし混雑時はエレベーター待ちあり。",
    badge: "雨の日◎",
  },
  {
    name: "小田急百貨店新宿本館 11F〜14F 食レストラン街",
    area: "新宿駅西口直結",
    genre: "和食・フレンチ・バイキング",
    price: "1,200〜2,800円",
    features: ["個室あり", "授乳室（4F）", "ベビーチェアあり"],
    good: "ランチバイキング形式の店舗では、赤ちゃんが泣いても音が分散されやすい。4Fに授乳室・ベビールームあり、食事前後に利用しやすい。",
    tip: "バイキングは子どもが動き回っても大丈夫な雰囲気。大人2名の場合は事前予約がスムーズ。",
    badge: "バイキング◎",
  },
  {
    name: "新宿サザンテラス エリアのカフェ",
    area: "新宿駅南口徒歩2分",
    genre: "カフェ・スイーツ",
    price: "800〜1,500円",
    features: ["テラス席あり", "ベビーカー入店可", "広い通路"],
    good: "南口から続くテラスエリアに複数のカフェが点在。開放的なテラス席はベビーカーを横に置いたまま食事でき、赤ちゃんが泣いても外なので安心。",
    tip: "晴れた日の午前中が狙い目（午後は西日が入る）。授乳室は隣の高島屋タイムズスクエア（B2F）が最寄り。",
    badge: "テラス◎",
  },
  {
    name: "JR新宿タワー TOKYO GARDEN TERRACE 低層部",
    area: "新宿駅西口直結",
    genre: "カフェ・ベーカリー・軽食",
    price: "700〜1,500円",
    features: ["広い通路", "ベビーカー入店可", "授乳室隣接"],
    good: "2023年オープンの新施設で全体的にバリアフリー設計。ベビーカーでの移動がしやすく、通路が広い。カフェ・ベーカリーが中心で軽めのランチに最適。",
    tip: "新施設のため授乳室・おむつ替え台の設備が新しい。週末は人が多いが設備が整っているため使いやすい。",
    badge: "バリアフリー◎",
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "新宿 子連れランチ10選【個室・授乳室情報付き】2026年版",
  "description": "新宿駅周辺で赤ちゃん連れでも安心のランチスポットを10店厳選。個室あり・ベビーチェアあり・授乳室近くのお店をエリア別に解説。",
  "image": "https://stroller-navi.vercel.app/opengraph-image.png",
  "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
  "publisher": {
    "@type": "Organization",
    "name": "ベビーカーナビ",
    "logo": { "@type": "ImageObject", "url": "https://stroller-navi.vercel.app/icon-192.svg" },
  },
  "datePublished": "2026-07-05",
  "dateModified": "2026-07-05",
  "url": "https://stroller-navi.vercel.app/articles/shinjuku-lunch",
};

export default function ShinjukuLunchPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-5 pb-6 bg-gradient-to-br from-rose-500 via-pink-600 to-orange-500 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>新宿ランチ</span>
          </nav>
          <div className="inline-block bg-white/20 text-xs font-bold px-2 py-0.5 rounded-full mb-2">
            🍽️ エリア別ランチガイド
          </div>
          <h1 className="text-xl font-black leading-snug">
            新宿 子連れランチ10選<br />
            <span className="text-base font-bold opacity-90">【個室・授乳室情報付き】2026年版</span>
          </h1>
          <p className="text-xs opacity-80 mt-2 leading-relaxed">
            新宿駅周辺で赤ちゃん・子どもと安心してランチできる10店を厳選。個室・ベビーチェア・授乳室情報付き。
          </p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor />

          {/* 早見表 */}
          <section className="bg-rose-50 rounded-2xl p-4">
            <p className="text-xs font-black text-rose-700 mb-3">✅ この記事でわかること</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>• 個室あり・ベビーチェアありの新宿ランチ10店</li>
              <li>• 授乳室が近いレストランの選び方</li>
              <li>• エリア別（南口・西口・東口）の使い分け</li>
              <li>• ベビーカーのまま入れるお店の見分け方</li>
            </ul>
          </section>

          {/* 選び方のポイント */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-black mb-3">🗺️ 新宿で子連れランチをするときのコツ</h2>
            <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
              <p><span className="font-bold text-rose-600">南口エリア</span>（高島屋・NEWoMan）：授乳室が充実。駅直結で雨でも安心。</p>
              <p><span className="font-bold text-rose-600">西口エリア</span>（小田急・ハルク・JR新宿タワー）：広い通路でベビーカーが動かしやすい。</p>
              <p><span className="font-bold text-rose-600">東口エリア</span>（伊勢丹・モア）：おしゃれな雰囲気。個室のある高品質レストランが揃う。</p>
            </div>
          </section>

          {/* Restaurant list */}
          {RESTAURANTS.flatMap((r, idx) => {
            const card = (
              <section key={r.name} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">{r.badge}</span>
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
                    <span key={f} className="text-[10px] bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded-full">✓ {f}</span>
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
                <div key="mid-cta" className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-5 text-white text-center">
                  <p className="text-lg font-black mb-1">🗺️ エリア別ランチガイドも確認！</p>
                  <p className="text-xs opacity-80 mb-4">渋谷・池袋・横浜など他エリアのランチ情報もチェック</p>
                  <Link href="/articles/restaurant-tips" className="inline-block bg-white text-rose-600 font-bold text-sm px-6 py-2.5 rounded-xl hover:opacity-90 transition">
                    子連れランチ完全攻略法を見る →
                  </Link>
                </div>,
                card,
              ];
            }
            return [card];
          })}

          {/* 授乳室まとめ */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-black mb-3">🍼 新宿エリア 主な授乳室・おむつ替え場所</h2>
            <div className="space-y-2">
              {[
                { place: "高島屋タイムズスクエア", floor: "B2F・11F", memo: "きれいで広い、南口から直結" },
                { place: "小田急百貨店新宿本館", floor: "4F", memo: "西口エリアで最も利用しやすい" },
                { place: "伊勢丹新宿店", floor: "5F", memo: "東口エリア、ベビールームも充実" },
                { place: "NEWoMan新宿", floor: "2F", memo: "バスタ新宿側、授乳室新しめ" },
                { place: "JR新宿タワー", floor: "各フロア", memo: "2023年オープン、設備新しい" },
              ].map((item) => (
                <div key={item.place} className="flex items-start gap-2 text-xs">
                  <span className="text-rose-500 shrink-0 mt-0.5">●</span>
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
                { href: "/articles/shinjuku-guide", emoji: "🗼", title: "新宿エリア 子連れおでかけ完全ガイド", sub: "授乳室・無料遊び場・モデルコース" },
                { href: "/articles/restaurant-tips", emoji: "🍽️", title: "子連れランチ完全攻略法 2026年版", sub: "個室・予約のコツ・持ち物リスト" },
                { href: "/articles/shibuya-lunch", emoji: "🌿", title: "渋谷・代官山・恵比寿 子連れランチ10選", sub: "個室・授乳室情報付き" },
                { href: "/articles/ikebukuro-lunch", emoji: "🐧", title: "池袋 子連れランチ10選", sub: "サンシャインシティ周辺" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-2 bg-rose-50 hover:bg-rose-100 rounded-xl p-3 transition">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className="text-[10px] text-gray-500">{item.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="新宿 子連れランチ10選【個室・授乳室情報付き】2026年版" url="/articles/shinjuku-lunch" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
