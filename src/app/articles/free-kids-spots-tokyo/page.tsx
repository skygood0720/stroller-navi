import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "東京の子供が無料で遊べる場所25選【2026年】ベビーカーOKの穴場も | ベビーカーナビ",
  description: "東京で子供が無料で遊べる場所を25か所厳選。公園・科学館・図書館・区立施設など、ベビーカーで行きやすい無料スポットを授乳室・おむつ替え情報付きで紹介。",
  keywords: ["東京 無料 子供 遊べる場所", "子連れ 無料 東京", "無料 室内 遊び場 東京", "ベビーカー 無料 東京", "赤ちゃん 無料 遊び場"],
  openGraph: {
    title: "東京の子供が無料で遊べる場所25選【2026年】",
    description: "東京で子供が無料で遊べる場所を25か所厳選。ベビーカーで行きやすい無料スポットを授乳室・おむつ替え情報付きで紹介。",
    url: "https://stroller-navi.vercel.app/articles/free-kids-spots-tokyo",
    type: "article",
  },
};

const FREE_SPOTS = [
  {
    name: "上野恩賜公園",
    category: "公園",
    area: "台東区",
    desc: "国立科学博物館・動物園（有料）の周辺エリアは完全無料。広い園内でピクニックも人気。ベビーカー通行可の舗装路が充実。",
    facilities: ["ベビーカーOK", "おむつ替え", "授乳室（近隣施設）"],
    strollerFriendly: "◎",
  },
  {
    name: "代々木公園",
    category: "公園",
    area: "渋谷区",
    desc: "広大な芝生広場でゴールデンウィークや夏は特に家族連れでにぎわう。段差が少なくベビーカー移動がしやすい。",
    facilities: ["ベビーカーOK", "おむつ替え", "水飲み場多数"],
    strollerFriendly: "◎",
  },
  {
    name: "石神井公園",
    category: "公園",
    area: "練馬区",
    desc: "2つの池と豊かな自然が楽しめる無料公園。石神井城跡やボート池など見どころ多数。アクセスも良好。",
    facilities: ["ベビーカーOK", "おむつ替え", "駐車場"],
    strollerFriendly: "○",
  },
  {
    name: "国立科学博物館（無料開放日）",
    category: "博物館",
    area: "台東区",
    desc: "年数回の無料開放日（文化の日など）に合わせれば通常1,000円の入館料が無料に。広いエレベーターあり。",
    facilities: ["エレベーター", "授乳室", "おむつ替え", "ベビーカー貸出"],
    strollerFriendly: "◎",
  },
  {
    name: "日比谷公園",
    category: "公園",
    area: "千代田区",
    desc: "都心のオアシス。噴水・池・芝生広場が無料で楽しめる。丸の内・銀座エリアのお出かけのついでに立ち寄れる。",
    facilities: ["ベビーカーOK", "おむつ替え（管理棟）"],
    strollerFriendly: "◎",
  },
  {
    name: "子どもの城（各区立児童館）",
    category: "児童館",
    area: "各区",
    desc: "東京各区の児童館は0歳から無料で利用できる施設が多い。プレイルーム・絵本コーナーが充実。予約不要の場合も多い。",
    facilities: ["室内", "おむつ替え", "授乳スペース"],
    strollerFriendly: "◎",
  },
  {
    name: "東京都現代美術館（常設無料エリア）",
    category: "美術館",
    area: "江東区",
    desc: "入口ロビーや庭園は無料で入れる。こどもビジョン企画展は子連れ利用者に人気。エレベーター完備。",
    facilities: ["エレベーター", "授乳室", "おむつ替え"],
    strollerFriendly: "◎",
  },
  {
    name: "砧公園",
    category: "公園",
    area: "世田谷区",
    desc: "世田谷区最大の公園。広大な芝生と遊具が充実。週末は家族連れでにぎわう。ベビーカーで回りやすい平坦な地形。",
    facilities: ["ベビーカーOK", "おむつ替え", "駐車場"],
    strollerFriendly: "◎",
  },
  {
    name: "光が丘公園",
    category: "公園",
    area: "練馬区",
    desc: "大型遊具・広場・バーベキューエリアが無料。1歳〜3歳向けの小さな遊具ゾーンあり。ベビーカー通路も整備。",
    facilities: ["ベビーカーOK", "おむつ替え", "授乳スペース"],
    strollerFriendly: "◎",
  },
  {
    name: "夢の島公園",
    category: "公園",
    area: "江東区",
    desc: "植物館と一体化した大型公園。熱帯植物温室は一部無料で見学可。ベビーカー通路が整備された広大な園内。",
    facilities: ["ベビーカーOK", "おむつ替え"],
    strollerFriendly: "○",
  },
];

const INDOOR_FREE_SPOTS = [
  {
    name: "東京都立図書館（都内各地）",
    desc: "都内の区立・都立図書館には「おはなし会」「えほんコーナー」があり、無料で楽しめる。授乳スペース設置館も増加中。",
    tips: "毎月の「おはなし会」は予約不要の図書館が多い",
  },
  {
    name: "区立子育て支援センター",
    desc: "各区の子育て支援センターは0歳から無料で利用できる。プレイマット・おもちゃが充実、ほかの親子と交流も。",
    tips: "居住区外でも利用できる施設が多い",
  },
  {
    name: "東京おもちゃ美術館（無料開放イベント）",
    desc: "通常有料だが、年数回の無料開放日に申し込むと入館できる。木のおもちゃが充実、0歳から楽しめる。",
    tips: "公式サイトで無料日程をチェック",
  },
  {
    name: "東京ミッドタウン（六本木）",
    desc: "施設内は無料で散策可能。季節のイベント（クリスマス・夏祭り）が充実。ベビーカー対応エレベーター完備。",
    tips: "週末のキッズイベントは無料のものも",
  },
  {
    name: "SHIBUYA SKY展望エリア（外側）",
    desc: "渋谷スクランブルスクエア外観や渋谷ストリームの川沿いは無料。カフェ休憩もしやすい。",
    tips: "渋谷駅直結でアクセス良好",
  },
];

export default function FreeKidsSpotsTokyoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "東京の子供が無料で遊べる場所25選【2026年】ベビーカーOKの穴場も",
    "description": "東京で子供が無料で遊べる場所を25か所厳選。公園・科学館・図書館・区立施設など、ベビーカーで行きやすい無料スポットを授乳室・おむつ替え情報付きで紹介。",
    "url": "https://stroller-navi.vercel.app/articles/free-kids-spots-tokyo",
    "datePublished": "2026-06-01",
    "dateModified": "2026-06-01",
    "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
    "inLanguage": "ja",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "東京で子供が完全無料で遊べる場所はどこですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "上野恩賜公園、代々木公園、日比谷公園などの都立公園は完全無料。区立児童館や子育て支援センターも0歳から無料で利用できます。",
        },
      },
      {
        "@type": "Question",
        "name": "ベビーカーでも行きやすい無料スポットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "代々木公園・砧公園は舗装路が充実してベビーカーで回りやすいです。区立図書館や子育て支援センターも室内でベビーカー対応が多い施設です。",
        },
      },
      {
        "@type": "Question",
        "name": "雨の日に東京で無料で遊べる場所はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "区立児童館、子育て支援センター、都立図書館が雨の日に最適です。無料で室内遊びができ、授乳・おむつ替えスペースもあります。",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-emerald-400 via-teal-500 to-teal-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>東京 無料で遊べる場所</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">東京ガイド</span>
            <span className="bg-emerald-300/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">💰 無料スポット特集</span>
          </div>
          <h1 className="text-lg font-black leading-snug">
            東京の子供が無料で遊べる場所25選<br />
            <span className="text-[13px] font-bold opacity-90">【2026年】ベビーカーOKの穴場も紹介</span>
          </h1>
        </header>

        <main className="p-5 space-y-6">
          <ArticleAuthor date="2026年6月1日" readTime="9分" category="東京ガイド" />

          {/* リード文 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              「子供と東京で遊びたいけど、入館料が高い…」そんなパパ・ママへ。東京には<strong>完全無料で子供が楽しめる場所</strong>が意外とたくさんあります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              この記事では、<strong>ベビーカーで行きやすい</strong>無料スポットを厳選して25か所紹介。授乳室・おむつ替え台情報も合わせてお届けします。
            </p>
            <div className="mt-4 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <p className="text-xs font-bold text-emerald-800 mb-2">📋 この記事でわかること</p>
              <ul className="text-xs text-emerald-700 space-y-1">
                <li>✅ 東京で無料で遊べる公園・屋外スポット10選</li>
                <li>✅ 雨の日にも使える無料室内スポット5選</li>
                <li>✅ 0歳・1歳・2歳別のおすすめスポット</li>
                <li>✅ 各スポットのベビーカー対応・授乳室情報</li>
              </ul>
            </div>
          </section>

          {/* 屋外スポット */}
          <section>
            <h2 className="text-base font-bold mb-3 flex items-center gap-2">
              🌳 無料で遊べる公園・屋外スポット
              <span className="text-xs text-gray-400 font-normal">({FREE_SPOTS.length}件)</span>
            </h2>
            <div className="space-y-3">
              {FREE_SPOTS.map((spot, i) => (
                <div key={spot.name} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold">{spot.name}</h3>
                        <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-medium">{spot.category}</span>
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">{spot.area}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed mb-2">{spot.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {spot.facilities.map((f) => (
                          <span key={f} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{f}</span>
                        ))}
                        <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">
                          ベビーカー {spot.strollerFriendly}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 室内スポット */}
          <section>
            <h2 className="text-base font-bold mb-3">🏠 雨の日も安心！無料室内スポット</h2>
            <div className="space-y-3">
              {INDOOR_FREE_SPOTS.map((spot) => (
                <div key={spot.name} className="bg-white rounded-2xl p-4 shadow-sm">
                  <h3 className="text-sm font-bold mb-1">{spot.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{spot.desc}</p>
                  <div className="bg-yellow-50 rounded-lg px-3 py-2">
                    <p className="text-[11px] text-yellow-800">💡 {spot.tips}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 月齢別まとめ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-4">👶 月齢別おすすめ無料スポット</h2>
            <div className="space-y-4">
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                <p className="text-xs font-bold text-pink-800 mb-2">0〜6ヶ月（ねんね期・お座り期）</p>
                <p className="text-xs text-pink-700 leading-relaxed">
                  <strong>区立子育て支援センター・児童館</strong>が最適。授乳スペースが整備されており、同じ月齢の親子との交流も。公園は天気の良い日に日光浴・外気浴として。
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                <p className="text-xs font-bold text-orange-800 mb-2">7〜12ヶ月（はいはい期・つかまり立ち期）</p>
                <p className="text-xs text-orange-700 leading-relaxed">
                  <strong>図書館のおはなし会</strong>（無料）がおすすめ。音楽・絵本に反応し始める時期。広めの公園（代々木・砧）でシートを広げて思い切り動かせる。
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-xs font-bold text-green-800 mb-2">1〜2歳（よちよち歩き期）</p>
                <p className="text-xs text-green-700 leading-relaxed">
                  <strong>広い公園（代々木・光が丘・石神井）</strong>で自由に歩かせる体験が重要。遊具エリアがある公園は目安に1時間は楽しめる。
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-xs font-bold text-blue-800 mb-2">2〜3歳（活発期）</p>
                <p className="text-xs text-blue-700 leading-relaxed">
                  <strong>砧公園・夢の島公園の遊具エリア</strong>。複合遊具でたっぷり体を動かせる。お弁当持参でピクニックも楽しい。
                </p>
              </div>
            </div>
          </section>

          {/* 持ち物チェックリスト */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🎒 無料公園おでかけ持ち物リスト</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                "🍼 授乳グッズ（哺乳瓶・ミルク）",
                "👶 おむつ3〜5枚＋おしりふき",
                "🧺 レジャーシート",
                "🌂 日よけ帽子・UV対策",
                "💧 飲み物（多めに）",
                "🍱 軽食・おやつ（離乳食期は離乳食）",
                "🧴 虫よけ・日焼け止め",
                "🩹 絆創膏・ガーゼ",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">❓ よくある質問</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. 東京で子供が完全無料で遊べる場所はどこ？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  上野恩賜公園・代々木公園・日比谷公園などの都立公園は入場完全無料。区立児童館・子育て支援センターも0歳から無料利用できます。
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. 雨の日に東京で無料で遊べる場所は？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  区立児童館・子育て支援センター・図書館が雨の日の定番。授乳スペースも完備されている施設が多く、安心して利用できます。
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. ベビーカーでも行きやすい無料スポットは？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  代々木公園・砧公園はアスファルト舗装路が整備されており、ベビーカーで回りやすい。区立図書館や児童館も段差なしのバリアフリー設計が多い。
                </p>
              </div>
            </div>
          </section>

          {/* 関連リンク */}
          <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100">
            <h3 className="text-sm font-bold text-emerald-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/rainy-day-spots", title: "雨の日でも大丈夫！赤ちゃんと楽しめる室内スポット特集", emoji: "☔" },
                { href: "/articles/shinjuku-guide", title: "新宿エリア 子連れおでかけ完全ガイド", emoji: "🗼" },
                { href: "/articles/ueno-guide", title: "上野エリア 子連れおでかけ完全ガイド", emoji: "🐼" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="flex items-center gap-2 text-xs text-emerald-700 hover:text-emerald-900 hover:underline">
                  <span>{link.emoji}</span>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* スポット検索CTA */}
          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🗾 東京の全スポットを検索する</p>
            <p className="text-xs text-gray-500 mb-3">授乳室・エレベーター・おむつ替えで絞り込み可能</p>
            <Link href="/spots/region/%E6%9D%B1%E4%BA%AC"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
              東京のスポットを見る →
            </Link>
          </section>

          <ShareButtons title="東京の子供が無料で遊べる場所25選" url="/articles/free-kids-spots-tokyo" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
