import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "横浜・みなとみらい 子連れランチ10選【個室・授乳室情報付き】2026年版 | ベビーカーナビ",
  description: "横浜みなとみらいで赤ちゃん連れOKのランチを10店厳選。ランドマークプラザ・クイーンズスクエア・赤レンガ倉庫など個室あり・ベビーチェアあり・授乳室近くのお店を解説。",
  keywords: ["横浜 子連れランチ", "みなとみらい 子連れランチ", "横浜 ベビーカー レストラン", "横浜 個室 ランチ 赤ちゃん", "みなとみらい 授乳室"],
  openGraph: {
    title: "横浜・みなとみらい 子連れランチ10選【個室・授乳室情報付き】2026年版",
    description: "横浜みなとみらいで赤ちゃん連れOKのランチを10店厳選。個室あり・ベビーチェアあり・授乳室近くのお店を解説。",
    url: "https://stroller-navi.vercel.app/articles/yokohama-lunch",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const RESTAURANTS = [
  {
    name: "ランドマークプラザ 5F レストランフロア",
    area: "みなとみらい駅徒歩3分",
    genre: "和食・洋食・イタリアン",
    price: "1,200〜2,800円",
    features: ["個室あり", "授乳室同フロア", "ベビーチェアあり", "ベビーカー入店可"],
    good: "横浜ランドマークプラザ5Fはレストランが集まるフロア。授乳室・おむつ替え台も同フロアに設置されており、食事と授乳を一か所で済ませられる。個室のある和食店も多数。",
    tip: "授乳室は5F女性トイレ横。ランドマーク1F〜4Fにも授乳スポットあり。エレベーターは南側が使いやすい。",
    badge: "授乳室◎",
  },
  {
    name: "クイーンズスクエア横浜 Q1〜Q3 レストラン街",
    area: "みなとみらい駅直結",
    genre: "多ジャンル（和・洋・中）",
    price: "1,000〜2,500円",
    features: ["ベビーチェアあり", "ベビーカー入店可", "授乳室あり"],
    good: "みなとみらい駅直結の大型複合施設。Q1〜Q3の各棟にレストランが点在。授乳室はQ1・Q2のトイレ横に設置。天候を気にせず移動でき、雨の日にも最適。",
    tip: "各棟をつなぐ連絡通路はすべてベビーカーで移動できる広さ。エスカレーターの代わりにエレベーターを活用して。",
    badge: "駅直結◎",
  },
  {
    name: "横浜赤レンガ倉庫 2号館 2F レストラン",
    area: "馬車道駅徒歩15分 / みなとみらい駅徒歩20分",
    genre: "カジュアル・ビアホール・洋食",
    price: "1,200〜2,500円",
    features: ["テラス席あり", "ベビーカー入店可", "海が見える"],
    good: "横浜港を望む景観の良いレストラン。テラス席ではベビーカーのまま着席できる店舗もあり、海の景色が赤ちゃんの刺激にもなる。開放的な空間で気兼ねなく食事できる。",
    tip: "夏は海風が強く日差しも強め。帽子・日焼け止め持参を。冬は屋内席がおすすめ。周辺の赤レンガパークは芝生広場で食後の遊びにも◎。",
    badge: "海景色◎",
  },
  {
    name: "横浜ワールドポーターズ 4F レストラン",
    area: "みなとみらい駅徒歩10分",
    genre: "ファミリー向け・カジュアル",
    price: "900〜2,000円",
    features: ["ベビーチェアあり", "ベビーカー入店可", "子供メニューあり"],
    good: "家族向けのカジュアルレストランが集まる4F。ハンバーガー・パスタ・アジアンフードなど子供も楽しめるメニューが充実。建物内は広く通路が広いためベビーカー移動もラク。",
    tip: "4Fには授乳室（ベビールーム）あり。フードコートはテイクアウトして1F広場で食べるのもおすすめ。",
    badge: "ファミリー向き",
  },
  {
    name: "横浜アンパンマンこどもミュージアム 周辺レストラン",
    area: "新高島駅徒歩3分",
    genre: "ファミリーレストラン・カフェ",
    price: "1,000〜2,000円",
    features: ["ベビーチェアあり", "子供メニュー充実", "授乳室直近"],
    good: "アンパンマンミュージアム内のレストランはアンパンマンモチーフのメニューが充実。ミュージアム見学前後のランチに最適。ミュージアム館内に授乳室あり。入場チケット不要でモール部分のみの利用も可能。",
    tip: "週末は行列ができるため、11時前か14時以降の遅めランチがスムーズ。",
    badge: "アンパンマン",
  },
  {
    name: "横浜みなとみらい コリドー 周辺カフェ",
    area: "みなとみらい駅周辺",
    genre: "カフェ・ブランチ",
    price: "1,000〜2,000円",
    features: ["テラス席あり", "ベビーカー入店可", "景観良好"],
    good: "みなとみらいのコスモワールド・大観覧車周辺に点在するカフェは、子連れファミリーに寛大な雰囲気の店が多い。広い歩道でベビーカー移動がしやすく、観覧車の景色が子供を喜ばせる。",
    tip: "日曜日の午後は観光客で混雑するため、土曜午前中のブランチが狙い目。",
    badge: "景観◎",
  },
  {
    name: "横浜高島屋 レストラン（6F・7F）",
    area: "横浜駅直結",
    genre: "和食・フレンチ・イタリアン",
    price: "1,500〜4,000円",
    features: ["個室あり", "授乳室複数", "ベビーチェアあり"],
    good: "横浜駅直結の老舗百貨店。高島屋の授乳室は5F・6Fに個室型が設置されており、食後すぐに利用できる。高級感があるため少し特別な子連れランチにおすすめ。",
    tip: "離乳食の持ち込みが可能かどうか事前確認を。ベビーカーの貸し出しあり（1Fインフォメーション）。",
    badge: "授乳室◎",
  },
  {
    name: "横浜そごう レストラン（7F・8F）",
    area: "横浜駅直結",
    genre: "和食・鉄板焼き・中華",
    price: "1,200〜3,500円",
    features: ["授乳室あり", "ベビーチェアあり", "ベビーカー入店可"],
    good: "横浜駅東口直結のそごう7〜8Fレストラン街。授乳室は館内複数フロアに設置。ファミリー向けの個室を持つ和食店も多く、幅広い予算で子連れランチを楽しめる。",
    tip: "そごうの授乳室は5F・7Fに設置（個室型）。横浜駅からベビーカーで直接アクセス可能。",
    badge: "横浜駅直結",
  },
  {
    name: "中華街 子連れOKレストラン",
    area: "元町・中華街駅徒歩3分",
    genre: "中華料理",
    price: "1,000〜2,500円",
    features: ["大テーブルあり", "ベビーチェアあり", "ボリューム満点"],
    good: "横浜中華街は家族連れに寛大なレストランが多く、大きなテーブルでのんびり食べられる。点心・餃子・炒飯など子供が喜ぶメニューが豊富。中に入ってから店選びをするより事前予約が安心。",
    tip: "週末昼は非常に混雑。平日ランチか15時以降がゆっくり食事できる。授乳室は「横浜中華街発展会交流館」近くのトイレに設置。",
    badge: "中華街名物",
  },
  {
    name: "元町ショッピングストリート 子連れカフェ",
    area: "元町・中華街駅徒歩3分",
    genre: "カフェ・ランチ",
    price: "900〜1,800円",
    features: ["ゆったり席", "ベビーカー入店可", "静かな環境"],
    good: "おしゃれな横浜・元町エリアのカフェは座席のゆとりがある店が多く、ベビーカーを持ち込んでの食事がしやすい。落ち着いた雰囲気で赤ちゃんも過ごしやすい環境。",
    tip: "元町はコンパクトなエリアなので徒歩で回りやすい。石畳の路面はベビーカーには少し硬いので、空気圧は高めに調整を。",
    badge: "落ち着いた空間",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>横浜・子連れランチ</span>
          </nav>
          <div className="text-3xl mb-2">⚓</div>
          <h1 className="text-lg font-black leading-tight">横浜・みなとみらい<br />子連れランチ10選</h1>
          <p className="text-[11px] opacity-80 mt-2">個室・授乳室・ベビーチェア情報付き / 2026年版</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年7月" readTime="約6分" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">横浜エリアが子連れランチに向いている理由</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              横浜みなとみらいエリアは、大型商業施設が集中し<strong>ベビーカーで移動しやすい平坦な地形</strong>が特徴です。
              ランドマークプラザ・クイーンズスクエア・ワールドポーターズが連絡通路でつながっており、雨の日でも濡れずに複数施設を回れます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              海沿いの公園も整備されており、ランチ後に赤ちゃんを連れて海を眺めながら散歩できるのが横浜ならではの魅力。
              赤レンガ倉庫周辺の芝生広場は天気の良い日に最高のランチスポットになります。
            </p>
            <div className="bg-sky-50 rounded-xl p-4">
              <p className="text-xs font-bold text-sky-800 mb-2">📋 横浜エリアの子連れランチ 3つのポイント</p>
              <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                <li>• <strong>みなとみらい</strong>：施設間が連絡通路でつながりベビーカーでも快適</li>
                <li>• <strong>横浜駅直結</strong>：そごう・高島屋は授乳室完備で雨の日も安心</li>
                <li>• <strong>中華街・元町</strong>：ファミリーに寛大な店が多く食後の観光も楽しめる</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-bold px-1">🗺️ エリア別おすすめランチ10選</h2>
            {RESTAURANTS.map((r, i) => (
              <div key={r.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="px-4 pt-4 pb-1 flex items-start gap-2">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-sky-100 text-sky-700 text-xs font-black flex items-center justify-center">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold">{r.name}</h3>
                      <span className="text-[9px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded font-bold">{r.badge}</span>
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
                  <div className="bg-sky-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-sky-800"><span className="font-bold">💡 Tip：</span>{r.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🍼 横浜・みなとみらいの授乳室まとめ</h2>
            <div className="space-y-2">
              {[
                { place: "ランドマークプラザ", note: "3F・5F 個室型授乳スペース" },
                { place: "クイーンズスクエア", note: "Q1・Q2各フロアのトイレ横" },
                { place: "横浜ワールドポーターズ", note: "4F ベビールーム" },
                { place: "横浜高島屋", note: "5F・6F 個室授乳ブース2室" },
                { place: "横浜そごう", note: "5F・7F 授乳スペース" },
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

          <section className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-5 border border-sky-100">
            <h3 className="text-sm font-bold text-sky-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/yokohama-guide", title: "横浜エリア 子連れおでかけ完全ガイド", emoji: "⚓" },
                { href: "/articles/restaurant-tips", title: "子連れランチの選び方｜失敗しない5つのポイント", emoji: "🍽️" },
                { href: "/articles/shibuya-lunch", title: "渋谷・代官山・恵比寿 子連れランチ10選", emoji: "🍽️" },
                { href: "/articles/ikebukuro-lunch", title: "池袋 子連れランチ10選【個室あり】", emoji: "🍜" },
                { href: "/articles/rainy-day-spots", title: "雨の日でも安心！室内スポット11選", emoji: "☔" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-xs text-sky-700 hover:text-sky-900 hover:underline">
                  <span>{l.emoji}</span><span>{l.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="横浜・みなとみらい 子連れランチ10選" url="/articles/yokohama-lunch" />

          <div className="text-center pt-2">
            <Link href="/spots/region/%E7%A5%9E%E5%A5%88%E5%B7%9D" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold hover:opacity-90 transition">
              🗺️ 横浜周辺のスポットを探す
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
