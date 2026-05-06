import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "【2026年】池袋エリア 子連れおでかけ完全ガイド｜サンシャイン・授乳室・ランチまとめ | ベビーカーナビ",
  description: "池袋サンシャインシティを中心に、水族館・プラネタリウム・ナンジャタウン、無料の子育て施設、子連れランチ、授乳室情報を完全網羅。",
  keywords: ["池袋", "子連れ", "サンシャイン", "水族館", "授乳室", "ランチ", "ベビーカー", "赤ちゃん"],
  openGraph: { title: "池袋エリア 子連れおでかけ完全ガイド | ベビーカーナビ", description: "サンシャインシティを中心に池袋の子連れスポット15選。", url: "https://stroller-navi.vercel.app/articles/ikebukuro-guide", siteName: "ベビーカーナビ", locale: "ja_JP", type: "article" },
};

export default function IkebukuroGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "池袋エリア 子連れおでかけ完全ガイド", "datePublished": "2026-04-25", "publisher": { "@type": "Organization", "name": "ベビーカーナビ" } }) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
          <h1 className="text-lg font-black leading-tight">【2026年最新】池袋エリア<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">サンシャインシティ完全攻略 / 読了時間：約8分</p>
        </header>
        <main className="p-5"><article className="space-y-6">
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに</h2>
            <p className="text-sm text-gray-700 leading-relaxed">池袋は新宿・渋谷と並ぶ東京の三大副都心ですが、実は子連れにとって最も過ごしやすいエリアかもしれません。その理由は、サンシャインシティという巨大複合施設に水族館・プラネタリウム・ナンジャタウン・レストランが集約されており、天候に関係なく1日中楽しめるから。さらに無料の子育て支援施設「パパママ☆すぽっと」や、芝生が美しい南池袋公園もあり、バリエーション豊富です。この記事では、池袋駅を拠点にしたベビーカーでの回り方を完全ガイドします。</p>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. サンシャインシティ完全攻略</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">サンシャインシティは池袋駅東口から地下通路で直結。雨の日もベビーカーで濡れずにアクセスできます。施設内は全館バリアフリーで、各フロアにおむつ替え台付きトイレがあります。</p>
            <SC name="サンシャイン水族館" desc="屋上にある「空飛ぶペンギン」が名物の水族館。頭上を泳ぐペンギンに赤ちゃんも釘付けに。館内はベビーカーOK。授乳室・おむつ替え台完備。アシカショーはベビーカーのまま観覧可能です。" tags={["授乳室", "おむつ替え", "ベビーカーOK"]} link="/spots/3212" tip="平日午前中が最も空いています。屋外エリア「マリンガーデン」は風が気持ちいい" />
            <SC name="プラネタリウム満天" desc="赤ちゃん向け上映プログラムがある珍しいプラネタリウム。通常上映は暗くて泣いてしまう赤ちゃんも、キッズ向け上映なら明るめの照明と短時間で安心。" tags={["赤ちゃん向け上映", "授乳室近い"]} link="/spots/3291" tip="「ベビー＆キッズプラネタリウム」の開催日を公式サイトで事前確認" />
            <SC name="ナンジャタウン" desc="餃子スタジアムとデザート横丁のフードテーマパーク。ベビーカー入場OK。1歳以上の子は餃子やソフトクリームを親子でシェアして楽しめます。" tags={["ベビーカーOK", "フードテーマ", "キャラクター"]} link="/spots/3211" tip="フードだけの利用もできるので、ランチ目的で立ち寄るのもアリです" />
            <SC name="100本のスプーン 東池袋" desc="サンシャインシティ内にある離乳食無料提供のレストラン。大人メニューのハーフサイズがキッズメニュー。子連れファミリーのために作られたお店です。" tags={["離乳食無料", "キッズメニュー", "ベビーチェア"]} link="/spots/7120" tip="ランチは混雑するので11時の開店直後がおすすめ。予約不可なので早めに" />
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 無料で遊べるスポット</h2>
            <SC name="パパママ☆すぽっと（池袋）" desc="豊島区のとしま区民センター内にある木育系の無料遊び場。予約優先・完全入替制で混雑も安心。木のぬくもりあるおもちゃで0歳から安全に遊べます。区外在住でも無料。" tags={["無料", "木のおもちゃ", "予約優先"]} link="/spots/3333" tip="土日は整理券が早く無くなるので、午前中に行くのがベスト" />
            <SC name="南池袋公園" desc="池袋駅から徒歩5分の都市型公園。美しい芝生広場でピクニックが楽しめます。併設のカフェ「Racines FARM to PARK」でテイクアウトして芝生で食べるのが定番コース。" tags={["芝生広場", "カフェ併設", "無料"]} link="/spots/3334" tip="春は桜、秋は紅葉も楽しめる。ベンチも多くベビーカー休憩にも最適" />
            <SC name="池袋パルコ" desc="池袋駅東口徒歩1分。ポケモンセンターメガトウキョーがあり、キャラクターグッズを見るだけでも楽しめます。各フロアにおむつ替え台あり。" tags={["授乳室", "おむつ替え", "ポケモンセンター"]} link="/spots/3210" tip="ポケモンセンターは入場無料。記念写真スポットもあります" />
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 子連れランチ</h2>
            <RC name="100本のスプーン 東池袋" cuisine="洋食" price="1,500〜2,500円" desc="離乳食無料提供。サンシャインシティ内。" tags={["離乳食無料", "キッズメニュー"]} link="/spots/7120" />
            <RC name="焼肉トラジ 池袋サンシャイン店" cuisine="焼肉" price="3,000〜5,000円" desc="個室で子連れ焼肉。キッズプレートあり。" tags={["個室あり", "キッズメニュー"]} link="/spots/7121" />
            <RC name="ガスト 池袋東口店" cuisine="ファミレス" price="800〜1,500円" desc="広めのボックス席でベビーカーOK。気軽に入れる。" tags={["ベビーカーOK", "ドリンクバー"]} link="/spots/7232" />
            <RC name="べるべるパーク 池袋店" cuisine="カラオケ個室" price="1,500〜3,000円" desc="カラオケ個室にキッズスペース付き。ママ会に最適。" tags={["個室", "キッズスペース"]} link="/spots/3393" />
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. 授乳室・おむつ替えMAP</h2>
            <div className="space-y-2">
              <TI name="サンシャインシティ 各フロア" desc="ALTA・専門店街に多数。特にALTA B1Fが広い" />
              <TI name="ルミネ池袋 8F" desc="授乳室・おむつ替え台・ミルク用お湯" />
              <TI name="池袋駅 東口 バリアフリートイレ" desc="東口地下通路。広めの個室" />
              <TI name="池袋パルコ 各フロア" desc="おむつ替え台付きトイレ" />
              <TI name="としま区民センター（パパママ☆すぽっと内）" desc="授乳室・おむつ替え台完備" />
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">📍 おすすめ半日コース</h2>
            <div className="bg-brand-50/30 rounded-xl p-4">
              <h3 className="text-sm font-bold text-brand-700 mb-2">🌤️ サンシャイン満喫コース</h3>
              <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                <p>10:00 サンシャイン水族館（空飛ぶペンギン）</p>
                <p>11:30 100本のスプーンでランチ（離乳食無料）</p>
                <p>13:00 プラネタリウム満天（キッズ上映）</p>
                <p>14:00 南池袋公園でお散歩＆カフェ休憩</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
            <p className="text-sm text-gray-700 leading-relaxed">池袋はサンシャインシティに子連れ向け施設が集約されているため、移動が少なくて済むのが最大の魅力です。水族館→ランチ→プラネタリウム→公園という黄金コースは、0歳から3歳まで幅広い月齢で楽しめます。雨の日でもサンシャインシティ内で完結できるので、天気に左右されない安心感もポイント。ぜひベビーカーナビで池袋のスポットをチェックしてみてください。</p>
          </section>

          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビで池袋のスポットを探す</p>
            <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition mt-2">アプリを開く</Link>
          </section>
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">📚 関連記事</h3>
            <div className="space-y-2">
              <Link href="/articles/shinjuku-guide" className="block text-xs text-brand-500 hover:underline">→ 新宿エリア 子連れガイド</Link>
              <Link href="/articles/shibuya-guide" className="block text-xs text-brand-500 hover:underline">→ 渋谷エリア 子連れガイド</Link>
              <Link href="/articles/odaiba-guide" className="block text-xs text-brand-500 hover:underline">→ お台場・豊洲エリア 子連れガイド</Link>
            </div>
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
