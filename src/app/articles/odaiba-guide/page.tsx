import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "【2026年】お台場・豊洲エリア 子連れおでかけ完全ガイド｜室内遊び場・水族館・ランチまとめ | ベビーカーナビ",
  description: "お台場・豊洲・有明の室内遊び場、水族館、科学館、子連れランチを完全網羅。雨の日でも楽しめるスポット20選。ベビーカーでの移動ルートも解説。",
  keywords: ["お台場", "豊洲", "有明", "子連れ", "ベビーカー", "室内遊び場", "水族館", "ランチ"],
  openGraph: { title: "お台場・豊洲エリア 子連れおでかけ完全ガイド | ベビーカーナビ", url: "https://stroller-navi.vercel.app/articles/odaiba-guide", siteName: "ベビーカーナビ", locale: "ja_JP", type: "article" },
};

export default function OdaibaGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "お台場・豊洲エリア 子連れおでかけ完全ガイド", "datePublished": "2026-04-25", "publisher": { "@type": "Organization", "name": "ベビーカーナビ" } }) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
          <h1 className="text-lg font-black leading-tight">【2026年最新】お台場・豊洲エリア<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">室内遊び場が充実！雨の日にも最適 / 読了時間：約8分</p>
        </header>
        <main className="p-5"><article className="space-y-6">
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに</h2>
            <p className="text-sm text-gray-700 leading-relaxed">お台場・豊洲・有明エリアは、赤ちゃん連れにとって「最強のおでかけエリア」です。理由は3つ。まず、大型商業施設が多く全館バリアフリーで授乳室も完備。次に、室内遊び場が豊富で天候に左右されない。そして、レインボーブリッジを望む海辺の景観がリフレッシュに最適。ゆりかもめはベビーカーでの乗降がスムーズで、各駅にエレベーターがあります。この記事では、お台場・豊洲・有明を網羅した子連れガイドをお届けします。</p>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. 室内遊び場・テーマパーク</h2>
            <SC name="レゴランド・ディスカバリー・センター東京" desc="デュプロ・ビレッジは小さなお子様向け。レゴで自由に遊べるエリア、ミニランド（東京の街をレゴで再現）は大人も感動。デックス東京ビーチ内で授乳室も近い。" tags={["デュプロ", "ベビーカーOK", "授乳室近い"]} link="/spots/3390" tip="平日は空いていてゆっくり遊べます" />
            <SC name="リトルプラネット ダイバーシティ東京" desc="最新デジタル技術を使った砂遊びやお絵描き体験。壁に描いた絵が動き出す体験は赤ちゃんも大興奮。ダイバーシティ内の授乳室・おむつ替え室も充実。" tags={["デジタル体験", "砂遊び", "お絵描き"]} link="/spots/3355" tip="プロジェクションマッピングの演出は0歳児でも楽しめます" />
            <SC name="The Kids デックス東京ビーチ店" desc="巨大ボールプールやアスレチック。赤ちゃん専用エリアもあり、0歳から安全に遊べます。" tags={["ボールプール", "赤ちゃんエリア", "アスレチック"]} link="/spots/3360" tip="レゴランドとセットで回ると1日遊べます" />
            <SC name="CULAFUL（キュラフル）竹芝" desc="キッズパークとカフェが一体化した施設。アトレ竹芝内。赤ちゃんエリアもあり、保護者はカフェでくつろぎながら子どもを見守れます。" tags={["カフェ併設", "赤ちゃんエリア"]} link="/spots/3354" tip="お台場の前に竹芝で遊んでからゆりかもめに乗るルートがおすすめ" />
            <SC name="スモールワールズ TOKYO" desc="精巧なミニチュアの世界。宇宙センターやヨーロッパの街並みなど見応え抜群。ベビーカーのまま見学OK。自分のフィギュアを住民として置けるユニークな体験も。" tags={["ベビーカーOK", "授乳室", "ミニチュア"]} link="/spots/3361" tip="有明エリアで比較的空いている穴場です" />
            <SC name="ニコはぴパーク 豊洲" desc="NHK Eテレの人気キャラクター（いないいないばあっ！など）の世界で遊べる屋内パーク。赤ちゃんエリアもあり。ららぽーと豊洲内。" tags={["Eテレ", "赤ちゃんエリア", "ららぽーと内"]} link="/spots/3394" tip="いないいないばあっ！のワンワンに会えるかも" />
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 知育・体験スポット</h2>
            <SC name="日本科学未来館" desc="「おやっ？っこ」という親子のためのスペースが充実。3F・5Fに授乳室。プラネタリウムもあり。ベビーカー貸出あり。地球ディスプレイは赤ちゃんも見入ります。" tags={["授乳室", "ベビーカー貸出", "プラネタリウム"]} link="/spots/3047" tip="3Fの「おやっ？っこ」は乳幼児向けの体験が充実" />
            <SC name="東京都水の科学館" desc="入場無料で水の不思議を体験。ベビーカーのまま入場でき、乳幼児用スペースもあります。有明エリアの穴場スポット。" tags={["無料", "ベビーカーOK", "体験型"]} link="/spots/3094" tip="無料なのにクオリティが高い。空いていてベビーカーでも快適" />
            <SC name="キッザニア東京" desc="上の子がいる場合に特に便利。0〜2歳専用の「乳幼児エリア」があり、赤ちゃんはそこで遊べます。ららぽーと豊洲内。" tags={["乳幼児エリア", "ららぽーと内"]} link="/spots/3056" tip="赤ちゃんだけで行くよりも、兄弟がいるファミリーにおすすめ" />
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 子連れランチ</h2>
            <RC name="100本のスプーン 豊洲" cuisine="洋食" price="1,500〜2,500円" desc="離乳食無料提供！ららぽーと豊洲内。子連れ対応最高レベル。" tags={["離乳食無料", "キッズメニュー"]} link="/spots/7200" />
            <RC name="bills お台場" cuisine="カフェ" price="2,000〜3,500円" desc="リコッタパンケーキが有名。テラス席からレインボーブリッジが見える。" tags={["テラス席", "ベビーチェア"]} link="/spots/7140" />
            <RC name="Eggs 'n Things お台場店" cuisine="カフェ" price="1,500〜2,500円" desc="パンケーキで有名。子連れ客も多い。アクアシティ内。" tags={["パンケーキ", "キッズメニュー"]} link="/spots/7010" />
            <RC name="ココス ららぽーと豊洲店" cuisine="ファミレス" price="800〜1,800円" desc="ドラえもんキッズプレートが人気。ドリンクバーで気軽にゆっくり。" tags={["キッズメニュー", "ドリンクバー"]} link="/spots/7201" />
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. 授乳室MAP</h2>
            <div className="space-y-2">
              <TI name="ららぽーと豊洲 各フロア" desc="ミルク用お湯・電子レンジ・身長体重計あり" />
              <TI name="ダイバーシティ東京プラザ" desc="各フロアにおむつ替え台付きトイレ" />
              <TI name="アクアシティお台場 3F" desc="ベビー休憩室併設。授乳室も" />
              <TI name="有明ガーデン 各フロア" desc="ミルク用お湯・おむつ替え台・身長体重計" />
              <TI name="日本科学未来館 3F・5F" desc="授乳室・ミルク用お湯・電子レンジ" />
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">📍 モデルコース</h2>
            <div className="bg-brand-50/30 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-bold text-brand-700 mb-2">🌧️ 雨の日お台場コース</h3>
              <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                <p>10:00 レゴランド・ディスカバリー・センター</p>
                <p>12:00 billsでパンケーキランチ</p>
                <p>13:30 リトルプラネットでデジタル遊び</p>
                <p>15:00 ダイバーシティで授乳＆帰宅</p>
              </div>
            </div>
            <div className="bg-blue-50/30 rounded-xl p-4">
              <h3 className="text-sm font-bold text-blue-700 mb-2">☀️ 豊洲満喫コース</h3>
              <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                <p>10:00 ニコはぴパークでEテレの世界を体験</p>
                <p>11:30 100本のスプーンでランチ（離乳食無料）</p>
                <p>13:00 キッザニア or ららぽーとでお買い物</p>
                <p>15:00 豊洲ぐるり公園で海辺のお散歩</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
            <p className="text-sm text-gray-700 leading-relaxed">お台場・豊洲エリアは室内施設が充実しているため、雨の日・猛暑日・寒い日でも安心して1日楽しめます。ゆりかもめはベビーカーでの移動がスムーズで、各駅にエレベーターが完備。ららぽーと豊洲を拠点にすれば、授乳室・ランチ・遊び場がすべて徒歩圏内に揃います。</p>
          </section>

          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビでお台場のスポットを探す</p>
            <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition mt-2">アプリを開く</Link>
          </section>
        </article></main>
        <SiteFooter />
      </div>
    </div>
  );
}
function SC({ name, desc, tags, link, tip }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1 mb-2">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div>{tip && <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 {tip}</p>}</div>); }
function RC({ name, cuisine, price, desc, tags, link }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="flex items-center gap-2 mb-1"><Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link><span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">{cuisine}</span><span className="text-[10px] text-gray-400 ml-auto">💰 {price}</span></div><p className="text-xs text-gray-600 leading-relaxed mt-1 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
function TI({ name, desc }: any) { return (<div className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5"><span className="text-sm">🍼</span><div><div className="text-xs font-bold text-purple-700">{name}</div><div className="text-[11px] text-gray-500">{desc}</div></div></div>); }
