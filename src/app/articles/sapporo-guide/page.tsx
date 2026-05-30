import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】札幌 子連れおでかけ完全ガイド｜授乳室・円山動物園・冬のおでかけ | ベビーカーナビ",
  description: "札幌でベビーカーで行けるおすすめスポット・授乳室・子連れランチを完全網羅。円山動物園・サッポロファクトリー・モエレ沼公園など人気スポットのベビーカー情報を詳しく解説。冬の赤ちゃんおでかけ情報も。",
  keywords: ["札幌 子連れ おでかけ", "札幌 ベビーカー", "札幌 授乳室", "円山動物園 ベビーカー", "札幌 赤ちゃん 冬", "サッポロファクトリー 子連れ", "北海道 子育て おでかけ"],
  openGraph: {
    title: "【2026年】札幌 子連れおでかけ完全ガイド",
    description: "円山動物園・サッポロファクトリー・モエレ沼…札幌のベビーカーOKスポット完全まとめ。冬の室内遊び場情報も。",
    url: "https://stroller-navi.vercel.app/articles/sapporo-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function SapporoGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】札幌 子連れおでかけ完全ガイド",
    "description": "札幌でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。",
    "url": "https://stroller-navi.vercel.app/articles/sapporo-guide",
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
        "name": "札幌で赤ちゃん連れにおすすめのスポットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "札幌ステラプレイス（駅直結・授乳室完備）、円山動物園（ベビーカー貸出あり）、サッポロファクトリー（全館バリアフリー・授乳室個室）が特におすすめです。冬は室内施設を中心に選ぶと快適です。",
        },
      },
      {
        "@type": "Question",
        "name": "札幌の冬に赤ちゃんとおでかけできる室内スポットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "札幌ステラプレイス・サッポロファクトリー・アリオ札幌・イオンモール札幌発寒などの大型ショッピングモールが室内で快適に過ごせます。雪が積もっている冬でも駅直結・バス直結施設が多く安心です。",
        },
      },
      {
        "@type": "Question",
        "name": "円山動物園はベビーカーで入れますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、ベビーカーで入場できます。ベビーカー貸出（無料）があります。園内はほぼ舗装されており、ベビーカーで回りやすい設計です。授乳室・おむつ替え台も完備しています。",
        },
      },
      {
        "@type": "Question",
        "name": "モエレ沼公園はベビーカーで散歩できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、ベビーカーで散歩できます。公園内の主要道路はすべて舗装されており、ベビーカーでも快適です。ただし広大な公園なので、入口付近の「あそびの山」エリア周辺に絞って散歩するのがおすすめです。",
        },
      },
    ],
  };

  const spots = [
    {
      id: "1001",
      name: "札幌ステラプレイス",
      category: "ショッピング",
      access: "JR・地下鉄札幌駅直結",
      strollerInfo: "駅直結で天候に関係なく安心。6Fに授乳室とおむつ替えスペース",
      tags: ["授乳室", "エレベーター", "おむつ替え"],
      recommend: "冬でも雪に関係なくアクセスできます。6Fの授乳室は個室で清潔。赤ちゃん連れの強い味方。",
      ageMin: 0,
      season: "通年",
    },
    {
      id: "1003",
      name: "サッポロファクトリー",
      category: "ショッピング",
      access: "地下鉄バスセンター前駅から徒歩7分",
      strollerInfo: "全館バリアフリー。レンガ館にベビー休憩室（授乳個室あり）",
      tags: ["授乳室", "エレベーター", "おむつ替え", "スロープ"],
      recommend: "歴史ある煉瓦建築の中でショッピング。アトリウムは天窓から光が入り開放的。授乳室が個室で静かです。",
      ageMin: 0,
      season: "通年",
    },
    {
      id: "1002",
      name: "円山動物園",
      category: "動物園",
      access: "地下鉄円山公園駅から徒歩10分",
      strollerInfo: "ベビーカー貸出（無料）。ほぼ全域舗装済みでベビーカーOK",
      tags: ["授乳室", "おむつ替え", "ベビーカー貸出"],
      recommend: "ホッキョクグマや雪豹が見られる本格動物園。ベビーカー無料貸出があり手ぶらで来ても安心。夏は緑が美しい。",
      ageMin: 4,
      season: "4月〜11月推奨",
    },
    {
      id: "1009",
      name: "モエレ沼公園",
      category: "公園",
      access: "地下鉄環状通東駅からバス15分",
      strollerInfo: "主要道路はすべて舗装。ベビーカーで快適に散歩できる",
      tags: ["おむつ替え", "スロープ"],
      recommend: "イサム・ノグチが設計した芸術的な公園。夏は噴水広場と芝生広場が気持ちよく、ベビーカーでゆったり散歩できます。",
      ageMin: 4,
      season: "5月〜10月推奨",
    },
    {
      id: "1006",
      name: "イオンモール札幌発寒",
      category: "ショッピングモール",
      access: "地下鉄発寒南駅から徒歩5分",
      strollerInfo: "各フロアに授乳室。ベビーカー貸出あり",
      tags: ["授乳室", "ベビーカー貸出", "エレベーター", "おむつ替え"],
      recommend: "広大なフロアで1日過ごせる大型モール。冬の定番お出かけ先。フードコートにキッズメニューが豊富。",
      ageMin: 0,
      season: "通年",
    },
    {
      id: "1016",
      name: "滝野すずらん丘陵公園",
      category: "国営公園",
      access: "地下鉄真駒内駅からバス25分",
      strollerInfo: "ベビーカー貸出あり。授乳室完備。主要エリアは舗装済み",
      tags: ["授乳室", "おむつ替え", "ベビーカー貸出", "スロープ"],
      recommend: "国営公園ならではの広大な敷地。「こどもの谷」エリアのふわふわエッグやじゃぶじゃぶ池（夏季）が子どもに大人気。",
      ageMin: 4,
      season: "5月〜10月推奨",
    },
  ];

  const nursingRooms = [
    { place: "札幌ステラプレイス", floor: "6F ベビー休憩室", features: "授乳個室2室、おむつ替え台、ミルク用お湯、ソファあり" },
    { place: "サッポロファクトリー レンガ館", floor: "2F", features: "授乳個室（鍵付き）、おむつ替え台、ソファあり、静かな環境" },
    { place: "大丸札幌店", floor: "6F ベビー休憩室", features: "授乳個室3室、おむつ替え台、電子レンジ、哺乳瓶消毒器" },
    { place: "アリオ札幌", floor: "2F サービスカウンター隣", features: "授乳個室、おむつ替え台、ミルク用お湯" },
    { place: "イオンモール札幌発寒", floor: "各フロア", features: "広い授乳室、おむつ替え台複数、ベビー用品の販売コーナーも近い" },
    { place: "円山動物園", floor: "管理棟内", features: "授乳スペース、おむつ替え台" },
  ];

  const restaurants = [
    { name: "サッポロファクトリー フードコート", area: "サッポロファクトリー B1F", features: "広いテーブル席、ベビーチェアあり、席間余裕あり", price: "800〜1,500円" },
    { name: "大丸札幌店 レストラン街", area: "大丸7F・8F", features: "各店ベビーチェアあり、多種多様なジャンル", price: "1,000〜3,000円" },
    { name: "くら寿司 札幌澄川店", area: "澄川エリア", features: "タッチパネル注文でベビー連れも気を使わない。ベビーチェアあり", price: "600〜1,500円" },
    { name: "北海道 函館塩ラーメン（ステラプレイス）", area: "ステラプレイス6F", features: "子連れOK、ベビーチェアあり、早い時間帯が狙い目", price: "900〜1,400円" },
  ];

  const winterTips = [
    { tip: "大型ショッピングモールを活用", detail: "ステラプレイス・サッポロファクトリー・イオンモールなど駅直結・バス直結の室内施設がベスト" },
    { tip: "ベビーカーの防寒対策を万全に", detail: "防寒カバー・フットマフは必須。手袋・帽子も忘れずに" },
    { tip: "路面の雪・氷に注意", detail: "ベビーカーのタイヤが雪でスタックしやすい。スパイク付きベビーカータイヤも検討を" },
    { tip: "外出時間は短めに", detail: "気温マイナス10℃以下の日は屋外での外出は最小限に。施設間の移動をすばやく" },
    { tip: "暖房の効いた施設での授乳・おむつ替え", detail: "寒い屋外でのおむつ替えは避け、施設内の授乳室を活用しよう" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>札幌ガイド</span>
          </nav>
          <div className="text-4xl mb-3">🦅</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】札幌 子連れおでかけ<br />完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">授乳室・円山動物園・冬の室内スポット・モエレ沼公園</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          <ArticleAuthor date="2026年5月" readTime="約7分" />
          {/* イントロ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              北海道の中心都市・札幌は、地下街・駅直結施設・大型ショッピングモールが充実しており、
              <strong>冬でも赤ちゃん連れで安心しておでかけできる</strong>都市です。
              このガイドでは季節別のおすすめスポット・授乳室・子連れランチ情報と、
              <strong>冬の赤ちゃんおでかけのコツ</strong>もあわせて解説します。
            </p>
          </section>

          {/* 季節別おすすめ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">📅 季節別おすすめポイント</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { season: "春（4〜5月）", icon: "🌸", text: "円山動物園・モエレ沼公園が快適。残雪に注意" },
                { season: "夏（6〜8月）", icon: "☀️", text: "滝野公園・市内公園で外遊び。過ごしやすい気温" },
                { season: "秋（9〜11月）", icon: "🍂", text: "紅葉の円山公園が絶景。10月末から防寒必要" },
                { season: "冬（12〜3月）", icon: "❄️", text: "室内施設メイン。ステラプレイス・サッポロファクトリーが定番" },
              ].map((s) => (
                <div key={s.season} className="bg-sky-50 rounded-xl p-3">
                  <p className="text-xs font-bold text-sky-800">{s.icon} {s.season}</p>
                  <p className="text-[10px] text-gray-600 mt-1">{s.text}</p>
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
                  className="block border border-gray-100 rounded-xl p-4 hover:border-sky-200 hover:bg-sky-50 transition">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium">{i + 1}. {spot.category}</span>
                      <h3 className="text-sm font-bold">{spot.name}</h3>
                    </div>
                    <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded font-bold whitespace-nowrap ml-2">
                      {spot.season}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-2">📍 {spot.access}</p>
                  <p className="text-xs text-gray-700 mb-2">{spot.recommend}</p>
                  <div className="flex flex-wrap gap-1">
                    {spot.tags.map((tag) => (
                      <span key={tag} className="text-[9px] bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded font-medium">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 冬のおでかけコツ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">❄️ 冬の赤ちゃんおでかけコツ</h2>
            <p className="text-xs text-gray-500 mb-3">札幌の冬（12〜3月）は気温がマイナスになることも。赤ちゃん連れの冬おでかけのポイントです。</p>
            <div className="space-y-2">
              {winterTips.map((item) => (
                <div key={item.tip} className="flex items-start gap-2 bg-blue-50 rounded-xl p-3">
                  <span className="text-blue-500 font-bold text-xs">❄️</span>
                  <div>
                    <p className="text-xs font-bold">{item.tip}</p>
                    <p className="text-[10px] text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 授乳室まとめ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍼 札幌の授乳室まとめ</h2>
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

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-4">❓ よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "札幌で赤ちゃん連れにおすすめのスポットは？",
                  a: "札幌ステラプレイス（駅直結・授乳室完備）、円山動物園（ベビーカー貸出あり）、サッポロファクトリー（全館バリアフリー）が特におすすめです。冬は室内施設を中心に選びましょう。",
                },
                {
                  q: "札幌の冬に赤ちゃんとおでかけできる室内スポットは？",
                  a: "札幌ステラプレイス・サッポロファクトリー・アリオ札幌・イオンモール札幌発寒が冬の定番です。すべて授乳室完備で、駅やバスからのアクセスも良好です。",
                },
                {
                  q: "円山動物園はベビーカーで入れますか？",
                  a: "はい、ベビーカーで入場できます。ベビーカー無料貸出があります。園内はほぼ舗装されており、ベビーカーで回りやすい設計です。",
                },
                {
                  q: "モエレ沼公園はベビーカーで散歩できますか？",
                  a: "はい、快適に散歩できます。主要道路はすべて舗装済みです。「あそびの山」エリアを中心に、お子さんの体力に合わせて散歩コースを選べます。",
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
              <Link href="/articles/zero-age-outing" className="flex items-center gap-2 bg-gray-50 hover:bg-sky-50 rounded-xl p-3 transition">
                <span className="text-xl">🌱</span>
                <div>
                  <div className="text-xs font-bold">0歳の赤ちゃんはいつから外出できる？</div>
                  <div className="text-[10px] text-gray-500">月齢別おでかけ完全ガイド</div>
                </div>
              </Link>
              <Link href="/articles/train-stroller-manner" className="flex items-center gap-2 bg-gray-50 hover:bg-sky-50 rounded-xl p-3 transition">
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
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 札幌の近くのスポットを探す
            </Link>
          </div>
                  <ArticleAreaNav currentSlug="sapporo-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
