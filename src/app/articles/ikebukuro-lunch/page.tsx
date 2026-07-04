import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "池袋 子連れランチ10選【個室あり・授乳室近く】2026年版 | ベビーカーナビ",
  description: "池袋で赤ちゃん・子連れOKのランチスポットを10店厳選。サンシャインシティ・東武・西武・パルコなど個室あり・ベビーチェアあり・授乳室近くのお店をエリア別に解説。",
  keywords: ["池袋 子連れランチ", "池袋 ベビーカー レストラン", "サンシャインシティ 子連れランチ", "池袋 個室 ランチ 赤ちゃん", "池袋 授乳室 ランチ"],
  openGraph: {
    title: "池袋 子連れランチ10選【個室あり・授乳室近く】2026年版",
    description: "池袋で赤ちゃん・子連れOKのランチスポットを10店厳選。個室あり・ベビーチェアあり・授乳室近くのお店をエリア別に解説。",
    url: "https://stroller-navi.vercel.app/articles/ikebukuro-lunch",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const RESTAURANTS = [
  {
    name: "サンシャインシティ アルパ B1F〜2F レストラン街",
    area: "東池袋（サンシャイン60通り）",
    genre: "和食・ファミリーレストラン",
    price: "900〜2,000円",
    features: ["個室あり", "授乳室同フロア", "ベビーチェアあり", "ベビーカー入店可"],
    good: "サンシャインシティ内の大型レストラン街。授乳室はアルパ2Fに設置されており、食後すぐ利用できる。個室を構える和食店も多く、赤ちゃんが泣いても気兼ねなし。",
    tip: "授乳室は2Fフードコート近くに設置。事前にHPで場所確認を推奨。",
    badge: "授乳室◎",
  },
  {
    name: "サンシャインシティ ワールドインポートマート 4F フードコート",
    area: "東池袋",
    genre: "フードコート（多ジャンル）",
    price: "700〜1,500円",
    features: ["広い座席スペース", "ベビーカー入店可", "ベビーチェアあり"],
    good: "広々したフードコートで、ベビーカーのまま着席可能。混雑時も席の間隔が広く、授乳ケープを使っての授乳もしやすい環境。子連れ家族に寛大な雰囲気。",
    tip: "12時台は混雑するため11時半前に入場がベスト。週末の昼はファミリーで賑わう。",
    badge: "広々◎",
  },
  {
    name: "西武池袋本店 レストラン街（8F・別館3F）",
    area: "池袋駅直結（西口）",
    genre: "和食・洋食・中華",
    price: "1,200〜2,800円",
    features: ["個室あり（和食店）", "授乳室直近", "ベビーチェアあり"],
    good: "西武8Fと別館3Fに多様なジャンルのレストランが集まる。授乳室は8Fトイレ付近に設置。デパートのため子連れサービスが充実しており、ベビーカー貸し出しも可能。",
    tip: "西武池袋の授乳室は6F・8F・別館3Fの3か所。ベビーカーは1Fインフォメーションで貸し出し可。",
    badge: "授乳室3か所",
  },
  {
    name: "東武百貨店池袋店 レストラン街（12F・13F）",
    area: "池袋駅直結（東口）",
    genre: "和食・フレンチ・イタリアン",
    price: "1,500〜3,500円",
    features: ["半個室・個室あり", "授乳室同フロア", "ベビーチェアあり"],
    good: "東武池袋13Fに授乳室あり。ゆったりとした空間のレストランが多く、小さな子連れでも落ち着いて食事できる。特別な日の子連れランチにおすすめ。",
    tip: "東武の授乳室は13F（個室型授乳ブース2室）と8F（おむつ替え台）。予約してから訪れると安心。",
    badge: "特別な日◎",
  },
  {
    name: "池袋パルコ レストラン（6F・7F）",
    area: "池袋駅西口徒歩3分",
    genre: "カジュアル・エスニック",
    price: "1,000〜2,200円",
    features: ["ベビーチェアあり", "ベビーカー入店可", "子供メニューあり"],
    good: "若者向けのイメージがあるパルコだが、レストランフロアは子連れOKの店が多数。台湾料理・タイ料理など多国籍グルメを楽しめる。授乳室は館内2Fに設置。",
    tip: "7Fの一部店舗はテラス席あり。授乳室はパルコ館内2Fの「ベビールーム」を利用。",
    badge: "多国籍グルメ",
  },
  {
    name: "ハレザ池袋 ニコラス ランチ",
    area: "池袋駅東口徒歩5分",
    genre: "ファミリーレストラン・カフェ",
    price: "1,000〜2,000円",
    features: ["広いスペース", "ベビーカー入店可", "キッズスペース近く"],
    good: "ハレザ池袋内のファミリー向け施設。隣接する「としまキッズパーク」との組み合わせで、食事→室内遊びのプランが立てやすい。レストランは広い通路でベビーカーOK。",
    tip: "としまキッズパーク（0〜6歳向け室内遊び場）と合わせて利用するのがおすすめ。",
    badge: "遊び場隣接",
  },
  {
    name: "池袋 ルミネ池袋 レストラン（7F）",
    area: "池袋駅直結",
    genre: "和食・定食・カフェ",
    price: "900〜1,800円",
    features: ["ベビーチェアあり", "座敷席あり（一部店舗）", "授乳室同フロア"],
    good: "ルミネ池袋7F・8Fのレストランは比較的ゆったりした席配置。和定食・カフェランチが中心で、授乳室はルミネ館内に設置されている。",
    tip: "ルミネ池袋の授乳室は6Fの女性トイレ付近。エレベーターはJR改札出てすぐ利用可。",
    badge: "駅直結◎",
  },
  {
    name: "池袋 WACCA IKEBUKURO（ワッカ池袋）カフェ・レストラン",
    area: "池袋駅東口徒歩5分",
    genre: "カジュアルレストラン・カフェ",
    price: "1,000〜2,000円",
    features: ["テラス席あり", "ベビーカー入店可", "広い通路"],
    good: "2F〜4Fに飲食店が集まる複合施設。オープンエアのテラス席ではベビーカーのまま食事でき、開放的な空間で赤ちゃんがぐずりにくい環境。",
    tip: "平日ランチは比較的空いており、子連れでもゆっくり食事できる。近くに南池袋公園があり食後の散歩にも◎。",
    badge: "テラス席◎",
  },
  {
    name: "南池袋公園 周辺カフェ",
    area: "池袋駅東口徒歩5分",
    genre: "カフェ・ランチ",
    price: "800〜1,500円",
    features: ["テラス席（公園向き）", "ベビーカー入店可", "公園隣接"],
    good: "芝生公園に隣接するカフェは子連れ家族に人気。公園のベンチでテイクアウトランチもできる。晴れた日は芝生でピクニック気分のランチが楽しめる。",
    tip: "南池袋公園は小さな子が芝生で遊べる都内屈指の公園。週末は混雑するため10時台の早めのランチがおすすめ。",
    badge: "公園隣接◎",
  },
  {
    name: "池袋 東急ハンズ周辺 子連れカフェ",
    area: "池袋駅西口周辺",
    genre: "カフェ・軽食",
    price: "700〜1,400円",
    features: ["ベビーカー入店可", "禁煙席あり", "Wi-Fi完備"],
    good: "池袋西口エリアにはスターバックス・ドトール・サンマルクカフェなど授乳ケープを使いやすい広めの席のあるカフェチェーンが多数。赤ちゃんと一緒の軽ランチに活用を。",
    tip: "混雑回避のため11時前か14時以降に利用。ベビーカーは入口付近に置かせてもらえることが多い。",
    badge: "チェーン店利用しやすい",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>池袋・子連れランチ</span>
          </nav>
          <div className="text-3xl mb-2">🍜</div>
          <h1 className="text-lg font-black leading-tight">池袋 子連れランチ10選<br />【個室・授乳室情報付き】</h1>
          <p className="text-[11px] opacity-80 mt-2">サンシャインシティ・東武・西武・パルコ / 2026年版</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年7月" readTime="約6分" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">池袋が子連れランチに向いている理由</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              池袋は東京の中でも<strong>デパート・大型商業施設が集中するエリア</strong>で、どの施設も授乳室・おむつ替え台が複数フロアに設置されています。
              東武・西武・パルコ・ルミネ・サンシャインシティとバリエーションが豊富で、ベビーカーでの移動もしやすい広い通路が整っています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              東口エリアには「としまキッズパーク」や「南池袋公園」など子供と遊べるスポットも徒歩圏内にあり、
              ランチ→公園遊びというプランが立てやすいのも魅力です。
            </p>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="text-xs font-bold text-amber-800 mb-2">📋 池袋エリアの子連れランチ 3つのポイント</p>
              <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                <li>• <strong>デパート集中</strong>：東武・西武どちらも授乳室3か所以上設置</li>
                <li>• <strong>サンシャインシティ</strong>：水族館・プラネタリウムと合わせて丸1日プランが作れる</li>
                <li>• <strong>東口公園</strong>：南池袋公園・としまキッズパークで食後の遊びも充実</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-bold px-1">🏬 施設別おすすめランチ10選</h2>
            {RESTAURANTS.map((r, i) => (
              <div key={r.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="px-4 pt-4 pb-1 flex items-start gap-2">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-amber-100 text-amber-700 text-xs font-black flex items-center justify-center">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold">{r.name}</h3>
                      <span className="text-[9px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold">{r.badge}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-0.5">📍 {r.area}｜{r.genre}｜{r.price}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="flex flex-wrap gap-1.5 mb-2 mt-2">
                    {r.features.map(f => (
                      <span key={f} className="text-[9px] bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded font-medium">{f}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{r.good}</p>
                  <div className="bg-amber-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-amber-800"><span className="font-bold">💡 Tip：</span>{r.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🍼 池袋エリアの授乳室・おむつ替えまとめ</h2>
            <div className="space-y-2">
              {[
                { place: "サンシャインシティ アルパ", note: "2F・3F 授乳スペース・おむつ替え台" },
                { place: "東武百貨店池袋店", note: "8F・13F 個室型授乳ブース" },
                { place: "西武池袋本店", note: "6F・8F・別館3F 授乳室3か所" },
                { place: "池袋パルコ", note: "2F ベビールーム（授乳＋おむつ替え）" },
                { place: "としまキッズパーク", note: "館内授乳コーナーあり（予約制室内遊び場）" },
              ].map(s => (
                <div key={s.place} className="flex gap-3 bg-blue-50 rounded-xl p-3">
                  <span className="text-xl shrink-0">🍼</span>
                  <div>
                    <p className="text-xs font-bold text-blue-800">{s.place}</p>
                    <p className="text-[10px] text-gray-600">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100">
            <h3 className="text-sm font-bold text-orange-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/ikebukuro-guide", title: "池袋エリア 子連れおでかけ完全ガイド", emoji: "🐧" },
                { href: "/articles/restaurant-tips", title: "子連れランチの選び方｜失敗しない5つのポイント", emoji: "🍽️" },
                { href: "/articles/shibuya-lunch", title: "渋谷・代官山・恵比寿 子連れランチ10選", emoji: "🍽️" },
                { href: "/articles/yokohama-lunch", title: "横浜・みなとみらい 子連れランチ10選", emoji: "⚓" },
                { href: "/articles/rainy-day-spots", title: "雨の日でも安心！室内スポット11選", emoji: "☔" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-xs text-orange-700 hover:text-orange-900 hover:underline">
                  <span>{l.emoji}</span><span>{l.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="池袋 子連れランチ10選【個室あり・授乳室近く】" url="/articles/ikebukuro-lunch" />

          <div className="text-center pt-2">
            <Link href="/spots/region/%E6%9D%B1%E4%BA%AC" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold hover:opacity-90 transition">
              🗺️ 池袋周辺のスポットを探す
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
