import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "東京の子連れカフェ・キッズスペースつきカフェ15選【2026年版】 | ベビーカーナビ",
  description: "赤ちゃん・子供と行ける東京のカフェを15か所厳選。吉祥寺・代官山・二子玉川・自由が丘など人気エリアのベビーカーOK・授乳室近くのカフェをジャンル別に紹介。",
  keywords: ["東京 子連れカフェ", "東京 キッズカフェ", "赤ちゃん連れ カフェ 東京", "ベビーカー カフェ 東京", "授乳室 カフェ 東京"],
  openGraph: {
    title: "東京の子連れカフェ・キッズスペースつきカフェ15選【2026年版】",
    description: "赤ちゃん・子供と行ける東京のカフェを15か所厳選。ベビーカーOK・授乳室近くのカフェをエリア別に紹介。",
    url: "https://stroller-navi.vercel.app/articles/kids-cafe-tokyo",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const CAFES = [
  {
    area: "吉祥寺",
    spots: [
      { name: "吉祥寺 コピス吉祥寺 3F カフェエリア", genre: "カフェ・スイーツ", features: ["ベビーチェアあり", "授乳室同フロア", "キッズスペース近く"], desc: "コピス3Fのカフェはファミリー向けで開放的な空間。授乳室はコピス内3Fに設置。買い物と組み合わせてのんびり過ごせる。", tip: "平日午前中が混雑しにくい。週末は子連れファミリーで賑わう。" },
      { name: "井の頭公園 周辺カフェ", genre: "カフェ・軽食", features: ["テラス席あり", "公園隣接", "ペットOK"], desc: "井の頭公園近くの緑豊かなカフェ街。テラス席でベビーカーのまま着席できる店が多い。公園の散歩後にコーヒーブレイクに最適。", tip: "春（桜）・秋（紅葉）シーズンは公園が特に美しく子連れのお散歩に最高。" },
    ],
  },
  {
    area: "代官山・中目黒",
    spots: [
      { name: "代官山 蔦屋書店 周辺カフェ", genre: "ブックカフェ・ラウンジ", features: ["ゆったり席", "ベビーカー入店可", "静かな環境"], desc: "代官山T-SITEの蔦屋書店内のカフェは広々とした空間で赤ちゃん連れでも気を遣わずにゆったり過ごせる。本を眺めながらのカフェタイムはパパ・ママのリフレッシュにも。", tip: "朝10時のオープン直後は空いていることが多く、子連れで使いやすい時間帯。" },
      { name: "中目黒 目黒川沿い カフェ", genre: "カフェ・テラス席", features: ["テラス席（川沿い）", "ベビーカー入店可", "外気浴に最適"], desc: "目黒川沿いのカフェはテラス席が充実。ベビーカーのまま着席できる店が多く、川の景観が赤ちゃんの刺激にもなる。春の桜シーズンは絶景。", tip: "川沿いの歩道は広くベビーカーで歩きやすい。混雑シーズンは早めの時間帯に。" },
    ],
  },
  {
    area: "二子玉川",
    spots: [
      { name: "二子玉川ライズ カフェ・レストランエリア",  genre: "カフェ・洋食", features: ["ベビーカー入店可", "授乳室完備", "キッズスペース隣接"], desc: "二子玉川ライズはファミリー向け設計の複合施設。授乳室・キッズスペースが充実しており、カフェでのんびりした後すぐに子供を遊ばせられる。多摩川の緑も見渡せる開放的な空間。", tip: "タマコヤ（キッズスペース）利用との組み合わせが人気。週末は並ぶこともあるため予約推奨。" },
      { name: "二子玉川 多摩川河川敷 テイクアウトカフェ", genre: "テイクアウト・アウトドアカフェ", features: ["河川敷ピクニック", "ベビーカー横付け可", "広大なスペース"], desc: "二子玉川の多摩川河川敷は都内屈指の広さを誇るピクニックスポット。近くのカフェでテイクアウトして芝生でランチするのが人気スタイル。天気の良い日は最高の子連れカフェ体験。", tip: "レジャーシートは必須。芝生は虫が出ることも。ゴミ袋も忘れずに持参を。" },
    ],
  },
  {
    area: "自由が丘",
    spots: [
      { name: "自由が丘スイーツフォレスト周辺カフェ", genre: "スイーツカフェ", features: ["ゆったり席", "ベビーカー入店可", "スイーツ充実"], desc: "スイーツの街・自由が丘は小さなカフェが点在。ゆったりした席のカフェが多く、赤ちゃん連れでものんびり過ごせる雰囲気がある。ソフトクリーム・パフェなど授乳中のママのリフレッシュにも◎。", tip: "自由が丘は路地が細く、大型ベビーカーは少し移動しにくい場合も。折りたたみベビーカーか抱っこひもが便利。" },
    ],
  },
  {
    area: "下北沢",
    spots: [
      { name: "下北沢 ミカン下北 カフェエリア", genre: "カフェ・コーヒー", features: ["ベビーカー入店可", "广い通路", "子連れ歓迎雰囲気"], desc: "2022年オープンの新スポット「ミカン下北」内のカフェは通路が広くベビーカーで移動しやすい。子連れファミリーに寛大な雰囲気で気軽に立ち寄れる。", tip: "隣接する下北線路街は屋外空間も広くベビーカーで散策しやすい。" },
    ],
  },
  {
    area: "お台場・豊洲",
    spots: [
      { name: "ダイバーシティ東京 カフェエリア", genre: "カフェ・軽食", features: ["ベビーカー入店可", "授乳室完備", "駐車場充実"], desc: "お台場のダイバーシティ東京はファミリー向け設計で授乳室・おむつ替え台が充実。広い館内でベビーカーでの移動もラク。お台場の海を見ながらのカフェタイムが人気。", tip: "週末は混雑のため、開店直後の10〜11時台に訪問するのがおすすめ。" },
      { name: "アクアシティお台場 フードコート", genre: "フードコート（軽食・カフェ）", features: ["海が見える席", "ベビーチェアあり", "授乳室直近"], desc: "フジテレビ隣のアクアシティはお台場の海と富士山を望む絶景フードコート。ベビーチェアも充実しており赤ちゃん連れに人気。授乳室は3Fに設置。", tip: "混雑を避けるために到着は11時前が理想。台場海浜公園と合わせて散歩プランが組める。" },
    ],
  },
  {
    area: "品川・天王洲",
    spots: [
      { name: "天王洲アイル T.Y. HARBOR 周辺", genre: "ブランチカフェ・ダイニング", features: ["運河テラス席", "ベビーカー入店可", "ゆったり空間"], desc: "品川・天王洲の運河沿いに展開するカフェ・ダイニング。ゆったりとしたテラス席でベビーカーのまま食事ができる。非日常的な空間でパパ・ママのリフレッシュにも最適。", tip: "天王洲の歩道は広くベビーカーで散策しやすい。週末ランチは予約推奨。" },
    ],
  },
  {
    area: "新宿",
    spots: [
      { name: "新宿 タカシマヤタイムズスクエア カフェ（11F・12F）", genre: "カフェ・スイーツ", features: ["個室あり", "授乳室直近", "ベビーチェアあり"], desc: "高島屋11〜12Fのカフェ・レストランエリア。授乳室は13Fに設置されており食後すぐアクセス可能。新宿で子連れカフェをするなら施設の整ったタカシマヤがおすすめ。", tip: "授乳室は13F女性トイレ横の個室型。ベビーカーは1Fインフォメーションで貸し出し可能。" },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>東京 子連れカフェ</span>
          </nav>
          <div className="text-3xl mb-2">☕</div>
          <h1 className="text-lg font-black leading-tight">東京の子連れカフェ<br />キッズスペースつき15選</h1>
          <p className="text-[11px] opacity-80 mt-2">吉祥寺・代官山・二子玉川・お台場など人気エリア / 2026年版</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年7月" readTime="約7分" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">子連れカフェを選ぶ5つのポイント</h2>
            <div className="space-y-2">
              {[
                { num: "1", title: "ベビーチェアの有無", desc: "「ハイチェアありますか？」と入店前に確認。対面抱っこで食事できるか聞いておくと安心。" },
                { num: "2", title: "通路の広さ・席間の余裕", desc: "ベビーカーを横付けできるか確認。席が狭いと赤ちゃんが動いたときに隣の席に迷惑をかけることも。" },
                { num: "3", title: "授乳室・おむつ替え台の場所", desc: "入店前に授乳室の場所を把握。「どこに授乳室がありますか？」と聞けばスタッフが教えてくれる。" },
                { num: "4", title: "店内の騒音レベル", desc: "BGMがある程度ある店の方が赤ちゃんが泣いても気になりにくい。静かすぎる高級カフェは逆に気を遣う。" },
                { num: "5", title: "提供速度・セルフサービスか", desc: "オーダーから提供まで時間がかかる店は赤ちゃんのご機嫌が切れることも。ドリンクバー・セルフ式は素早く済ませられて◎。" },
              ].map(p => (
                <div key={p.num} className="flex gap-3 bg-pink-50/50 rounded-xl p-3">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-pink-500 text-white text-[10px] font-black flex items-center justify-center">{p.num}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800 mb-0.5">{p.title}</p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {CAFES.map(areaGroup => (
            <section key={areaGroup.area} className="space-y-3">
              <h2 className="text-base font-bold px-1">📍 {areaGroup.area}</h2>
              {areaGroup.spots.map(cafe => (
                <div key={cafe.name} className="bg-white rounded-2xl p-4 shadow-sm">
                  <h3 className="text-sm font-bold mb-1">{cafe.name}</h3>
                  <p className="text-[10px] text-gray-500 mb-2">{cafe.genre}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cafe.features.map(f => (
                      <span key={f} className="text-[9px] bg-pink-50 text-pink-700 border border-pink-200 px-2 py-0.5 rounded font-medium">{f}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{cafe.desc}</p>
                  <div className="bg-orange-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-orange-800"><span className="font-bold">💡 Tip：</span>{cafe.tip}</p>
                  </div>
                </div>
              ))}
            </section>
          ))}

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">☕ チェーンカフェの子連れ活用法</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              スターバックス・タリーズ・コメダ珈琲などのチェーンカフェも子連れに使いやすい選択肢です。
              特に<strong>コメダ珈琲</strong>は広めの席・半個室型ソファが多く、授乳ケープを使いやすい環境。
              <strong>スターバックス</strong>は一部店舗でベビーチェアを完備。
            </p>
            <div className="space-y-2">
              {[
                { chain: "コメダ珈琲", point: "広いソファ席・半個室型が多く授乳しやすい。モーニングは7時から。" },
                { chain: "スターバックス", point: "一部大型店舗でベビーチェアあり。持ち込みOK確認の上授乳もできる。" },
                { chain: "サンマルクカフェ", point: "比較的広い席配置。子連れでも長居しやすい雰囲気。" },
                { chain: "ドトール", point: "価格が手頃でサクッと使える。禁煙席を確認して利用を。" },
              ].map(c => (
                <div key={c.chain} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="text-xl shrink-0">☕</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{c.chain}</p>
                    <p className="text-[10px] text-gray-600">{c.point}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-100">
            <h3 className="text-sm font-bold text-pink-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/restaurant-tips", title: "子連れランチの選び方｜失敗しない5つのポイント", emoji: "🍽️" },
                { href: "/articles/shibuya-lunch", title: "渋谷・代官山・恵比寿 子連れランチ10選", emoji: "🌿" },
                { href: "/articles/ikebukuro-lunch", title: "池袋 子連れランチ10選【個室あり】", emoji: "🍜" },
                { href: "/articles/yokohama-lunch", title: "横浜・みなとみらい 子連れランチ10選", emoji: "⚓" },
                { href: "/articles/kichijoji-guide", title: "吉祥寺エリア 子連れおでかけ完全ガイド", emoji: "🌳" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-xs text-pink-700 hover:text-pink-900 hover:underline">
                  <span>{l.emoji}</span><span>{l.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="東京の子連れカフェ・キッズスペースつきカフェ15選" url="/articles/kids-cafe-tokyo" />

          <div className="text-center pt-2">
            <Link href="/spots/region/%E6%9D%B1%E4%BA%AC" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-bold hover:opacity-90 transition">
              🗺️ 東京のスポットを探す
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
