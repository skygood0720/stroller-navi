import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "大阪 子連れランチ10選【個室・授乳室情報付き】2026年版 | ベビーカーナビ",
  description: "大阪で赤ちゃん連れでも安心のランチスポットを10店厳選。グランフロント・なんばパークス・天王寺MIOなど個室あり・ベビーチェアあり・授乳室近くのお店をエリア別に解説。",
  keywords: ["大阪 子連れランチ", "大阪 赤ちゃん レストラン", "梅田 子連れランチ 個室", "なんば 子連れランチ", "大阪 授乳室 ランチ"],
  openGraph: {
    title: "大阪 子連れランチ10選【個室・授乳室情報付き】2026年版",
    description: "大阪で赤ちゃん連れでも安心のランチスポットを10店厳選。グランフロント・なんばパークス・天王寺MIOなど個室あり・授乳室近くのお店をエリア別に解説。",
    url: "https://stroller-navi.vercel.app/articles/osaka-lunch",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const RESTAURANTS = [
  {
    name: "グランフロント大阪 北館・南館 レストランフロア",
    area: "大阪駅・梅田駅直結",
    genre: "各国料理・和食・カフェ",
    price: "1,200〜2,800円",
    features: ["個室あり", "授乳室（4F）", "ベビーチェアあり", "ベビーカー入店可"],
    good: "北館4Fのナレッジキャピタル内にベビー休憩室あり。南館と北館に計60店以上のレストランが集まり、個室・半個室のある店が多数。大阪駅から雨でも濡れずにアクセス可能。",
    tip: "土日は非常に混む。平日ランチ（11:30〜12:30）は比較的スムーズ。授乳室は混雑前の早めの利用を推奨。",
    badge: "駅直結◎",
  },
  {
    name: "阪急うめだ本店 9F〜13F レストラン街",
    area: "梅田駅直結",
    genre: "和食・フレンチ・懐石",
    price: "1,500〜3,500円",
    features: ["個室あり", "授乳室（3F）", "ベビーチェアあり"],
    good: "3Fに充実したベビールームあり（授乳・おむつ替え・電子レンジ完備）。9〜13Fのレストランは上質で、個室があれば授乳後ゆっくりランチできる。スタッフの対応も丁寧。",
    tip: "阪急百貨店の授乳室は関西最高水準の設備といわれる。事前に場所を確認しておくと安心。",
    badge: "授乳室最高水準",
  },
  {
    name: "大丸梅田店 12F・13F レストランフロア",
    area: "梅田駅直結",
    genre: "和食・洋食・寿司",
    price: "1,200〜2,500円",
    features: ["個室あり", "授乳室（6F）", "ベビーチェアあり", "ベビーカー入店可"],
    good: "6Fに広いベビールームあり。12〜13Fのレストランは個室を備えた店が多く、赤ちゃん連れでもゆっくり食事できる。梅田駅から直結で雨の日も安心。",
    tip: "13Fのレストランは見晴らしがよく、子どもが景色に集中している間に食事がしやすい。",
    badge: "景色◎",
  },
  {
    name: "なんばパークス 7F〜9F レストラン街",
    area: "難波駅徒歩3分",
    genre: "カジュアルイタリアン・和食・カフェ",
    price: "1,000〜2,200円",
    features: ["テラス席あり", "ベビーチェアあり", "ベビーカー入店可", "広い通路"],
    good: "屋上庭園「パークスガーデン」が隣接しており、食後に赤ちゃんを抱っこして散歩できる。テラス席はベビーカーのまま入れる店が多く、開放的な雰囲気。",
    tip: "パークスガーデンの授乳室は8F付近。食事前後に立ち寄れる位置にある。晴れた日のテラスランチが気持ちいい。",
    badge: "テラス・庭園◎",
  },
  {
    name: "天王寺MIO プラザ館 10F〜11F",
    area: "天王寺駅直結",
    genre: "和食・定食・ファミリーレストラン",
    price: "900〜1,800円",
    features: ["座敷席あり", "ベビーチェアあり", "ベビーカー入店可", "授乳室近く"],
    good: "天王寺MIOは子連れファミリーが多く、スタッフもベビー連れへの対応に慣れている。近くに天王寺公園・あべのハルカスもあり、食後の選択肢が豊富。",
    tip: "天王寺MIO本館のベビールームが充実（授乳・おむつ・電子レンジ）。あべのハルカス近辺にも設備あり。",
    badge: "ファミリー◎",
  },
  {
    name: "海遊館周辺 天保山マーケットプレース",
    area: "大阪港駅徒歩5分",
    genre: "カジュアルダイニング・フードコート",
    price: "800〜1,800円",
    features: ["フードコートあり", "ベビーチェアあり", "ベビーカー入店可", "授乳室（海遊館内）"],
    good: "海遊館に隣接するマーケットプレースのフードコートは赤ちゃん連れが多く訪れる。海遊館館内の授乳室・おむつ替え台を利用してからランチが可能。",
    tip: "海遊館見学後のランチ拠点として最適。フードコートは座席が広く、ベビーカーを横に置いて食事できる。",
    badge: "海遊館セット◎",
  },
  {
    name: "ルクア大阪（梅田）10F レストラン街",
    area: "大阪駅直結",
    genre: "カフェ・パン・軽食",
    price: "800〜1,500円",
    features: ["ベビーチェアあり", "ベビーカー入店可", "授乳室（3F）"],
    good: "ルクア1100（イーレ）3Fにベビールームあり。10Fのカフェ・ベーカリーエリアはランチにちょうどいい雰囲気。大阪駅直結なのでアクセスが抜群。",
    tip: "10Fはカジュアルな雰囲気で子連れでも気軽に利用できる。混雑時は2階建てのスペースを利用すると席が見つかりやすい。",
    badge: "アクセス◎",
  },
  {
    name: "道頓堀・なんば 子連れOKのカジュアル飲食店",
    area: "難波駅徒歩3〜10分",
    genre: "たこ焼き・串カツ・定食",
    price: "700〜1,500円",
    features: ["ベビーチェアあり（店舗による）", "ベビーカー入店可（広めの店のみ）"],
    good: "道頓堀は観光客が多く賑やかだが、路地裏にはゆったり座れるカジュアルな定食屋が点在。大阪名物（たこ焼き・お好み焼き）を子どもと一緒に食べる良い体験にもなる。",
    tip: "観光客の多い表通りより路地1本入ると落ち着いた店が多い。なんばパークス（授乳室あり）を事前に確認しておくと安心。",
    badge: "大阪グルメ◎",
  },
  {
    name: "イオンモール大阪ドームシティ フードコート",
    area: "ドーム前千代崎駅徒歩3分",
    genre: "フードコート・ファミリーレストラン",
    price: "700〜1,500円",
    features: ["フードコートあり", "授乳室完備", "ベビーチェアあり", "ベビーカー入店可"],
    good: "大型フードコートで座席に余裕があり、ベビーカーを横に置いての食事が可能。授乳室・おむつ替え台がショッピングモール内に整備されており、安心して来店できる。",
    tip: "ショッピングモール内なので食事後のついで買いも便利。授乳室の場所はインフォメーションで確認を。",
    badge: "安心設備◎",
  },
  {
    name: "万博記念公園 EXPOCITY レストラン街",
    area: "万博記念公園駅直結",
    genre: "各国料理・カジュアルダイニング",
    price: "1,000〜2,200円",
    features: ["個室あり", "ベビーチェアあり", "広い通路", "授乳室完備"],
    good: "大型複合施設でゆったりしており、赤ちゃん連れが多い。ニフレル（水族館）やレゴランドディスカバリーと組み合わせた丸一日プランが組みやすい。",
    tip: "ニフレル入場前後のランチに最適。週末は混むので11時台の早めランチがおすすめ。",
    badge: "施設充実◎",
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "大阪 子連れランチ10選【個室・授乳室情報付き】2026年版",
  "description": "大阪で赤ちゃん連れでも安心のランチスポットを10店厳選。グランフロント・なんばパークス・天王寺MIOなど個室あり・授乳室近くのお店をエリア別に解説。",
  "image": "https://stroller-navi.vercel.app/opengraph-image.png",
  "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
  "publisher": {
    "@type": "Organization",
    "name": "ベビーカーナビ",
    "logo": { "@type": "ImageObject", "url": "https://stroller-navi.vercel.app/icon-192.svg" },
  },
  "datePublished": "2026-07-05",
  "dateModified": "2026-07-05",
  "url": "https://stroller-navi.vercel.app/articles/osaka-lunch",
};

export default function OsakaLunchPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-5 pb-6 bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>大阪ランチ</span>
          </nav>
          <div className="inline-block bg-white/20 text-xs font-bold px-2 py-0.5 rounded-full mb-2">
            🍽️ エリア別ランチガイド
          </div>
          <h1 className="text-xl font-black leading-snug">
            大阪 子連れランチ10選<br />
            <span className="text-base font-bold opacity-90">【個室・授乳室情報付き】2026年版</span>
          </h1>
          <p className="text-xs opacity-80 mt-2 leading-relaxed">
            梅田・なんば・天王寺など大阪主要エリアで赤ちゃん連れでも安心のランチスポットを10店厳選。
          </p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor />

          {/* 早見表 */}
          <section className="bg-orange-50 rounded-2xl p-4">
            <p className="text-xs font-black text-orange-700 mb-3">✅ この記事でわかること</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>• 個室あり・ベビーチェアありの大阪子連れランチ10店</li>
              <li>• 梅田・なんば・天王寺のエリア別ランチガイド</li>
              <li>• 授乳室・おむつ替え台が近いレストランの選び方</li>
              <li>• 観光と組み合わせられるランチスポット</li>
            </ul>
          </section>

          {/* エリアガイド */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-black mb-3">🗺️ 大阪子連れランチ エリア別選び方</h2>
            <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
              <p><span className="font-bold text-orange-600">梅田エリア</span>（グランフロント・阪急・大丸・ルクア）：最も設備が整っており授乳室充実。</p>
              <p><span className="font-bold text-orange-600">なんばエリア</span>（なんばパークス・道頓堀）：観光と組み合わせやすい。</p>
              <p><span className="font-bold text-orange-600">天王寺エリア</span>（天王寺MIO・あべのハルカス）：あべのハルカスと組み合わせたファミリー向け。</p>
            </div>
          </section>

          {/* Restaurant list */}
          {RESTAURANTS.flatMap((r, idx) => {
            const card = (
              <section key={r.name} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">{r.badge}</span>
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
                    <span key={f} className="text-[10px] bg-orange-50 text-orange-700 font-bold px-2 py-0.5 rounded-full">✓ {f}</span>
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
                <div key="mid-cta" className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white text-center">
                  <p className="text-lg font-black mb-1">🗺️ 大阪の子連れスポットも確認！</p>
                  <p className="text-xs opacity-80 mb-4">USJ・海遊館・グランフロントなど大阪の子連れおでかけ情報をまとめています</p>
                  <Link href="/articles/osaka-guide" className="inline-block bg-white text-orange-600 font-bold text-sm px-6 py-2.5 rounded-xl hover:opacity-90 transition">
                    大阪 子連れおでかけ完全ガイドを見る →
                  </Link>
                </div>,
                card,
              ];
            }
            return [card];
          })}

          {/* 授乳室まとめ */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-black mb-3">🍼 大阪 主な授乳室・おむつ替え場所</h2>
            <div className="space-y-2">
              {[
                { place: "グランフロント大阪 北館", floor: "4F", memo: "ベビー休憩室完備、設備充実" },
                { place: "阪急うめだ本店", floor: "3F", memo: "関西最高水準の授乳室設備" },
                { place: "大丸梅田店", floor: "6F", memo: "電子レンジ・授乳椅子あり" },
                { place: "天王寺MIO本館", floor: "3F", memo: "天王寺エリアで最も使いやすい" },
                { place: "なんばパークス", floor: "8F付近", memo: "パークスガーデン近く" },
              ].map((item) => (
                <div key={item.place} className="flex items-start gap-2 text-xs">
                  <span className="text-orange-500 shrink-0 mt-0.5">●</span>
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
                { href: "/articles/osaka-guide", emoji: "🏯", title: "大阪 子連れおでかけ完全ガイド", sub: "USJ・海遊館・授乳室情報" },
                { href: "/articles/restaurant-tips", emoji: "🍽️", title: "子連れランチ完全攻略法 2026年版", sub: "個室・予約のコツ・持ち物リスト" },
                { href: "/articles/shibuya-lunch", emoji: "🌿", title: "渋谷 子連れランチ10選", sub: "東京エリアのランチ情報" },
                { href: "/articles/nagoya-lunch", emoji: "🏯", title: "名古屋 子連れランチ10選", sub: "JRゲートタワー・ミッドランドほか" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-2 bg-orange-50 hover:bg-orange-100 rounded-xl p-3 transition">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className="text-[10px] text-gray-500">{item.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="大阪 子連れランチ10選【個室・授乳室情報付き】2026年版" url="/articles/osaka-lunch" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
