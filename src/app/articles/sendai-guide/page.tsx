import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】仙台 子連れおでかけ完全ガイド｜授乳室・ランチ・ベビーカー情報 | ベビーカーナビ",
  description: "仙台でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。仙台うみの杜水族館・八木山動物公園・仙台駅周辺ショッピングのベビー設備を詳しく解説。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">【2026年最新】仙台エリア<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">水族館・動物公園・ずんだグルメを満喫 / 読了時間：約7分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約7分" />
          <article className="space-y-6">
            <S t="はじめに">
              <p className="text-sm text-gray-700 leading-relaxed">東北の大都市・仙台は「杜の都」の名のとおり緑豊かで、子連れにやさしいスポットが充実しています。コンパクトな中心部に授乳室完備の百貨店やショッピングモールが集まり、少し足を延ばせば本格的な水族館や動物公園も。牛タンやずんだスイーツを楽しみながら、ゆったりおでかけできるエリアです。</p>
            </S>

            <S t="1. おすすめスポット">
              <SC name="仙台うみの杜水族館" desc="2015年オープンの東北最大の水族館。マンタやイルカショーが迫力満点。授乳室は入口近くの赤ちゃんルームに完備。ベビーカー貸出は無料。館内はバリアフリーで迷わず回れます。" tags={["授乳室", "ベビーカー貸出", "バリアフリー"]} tip="開館直後の10〜11時台はイルカプールが空いており記念撮影も余裕。" />
              <SC name="八木山動物公園フジサキの杜" desc="仙台市が運営する動物公園。入園料は大人480円、中学生以下無料。起伏がありますがスロープルートが整備されています。授乳室は正門近くの管理センター内。" tags={["無料（中学生以下）", "スロープあり", "授乳室"]} tip="ライオン・ゾウなど大型動物エリアはスロープルートで上れます。" />
              <SC name="仙台駅 エスパル・エスパル東館" desc="仙台駅直結の大型ショッピングモール。授乳室・おむつ替え台は2館合わせて4か所。ベビー用品売り場も充実。雨の日のおでかけに最適。" tags={["駅直結", "授乳室4か所", "雨の日OK"]} tip="東館3Fの授乳室はゆったり広め。混んでいる土日でも比較的空いています。" />
              <SC name="仙台市科学館" desc="入館無料ゾーンの「わくわく科学広場」は予約不要で体験できる。プラネタリウムは赤ちゃん連れ専用回あり（要確認）。授乳室完備。" tags={["一部無料", "プラネタリウム", "授乳室"]} tip="「わくわく科学広場」の光や音の体験コーナーは赤ちゃんが大喜びします。" />
              <SC name="勾当台公園" desc="仙台市中心部の広い芝生公園。周辺にカフェが多く、天気のいい日はピクニックに最適。ベビーカーOKの舗装通路あり。定禅寺通のケヤキ並木と合わせて散策できます。" tags={["芝生広場", "ピクニック", "市中心部"]} tip="平日は人が少なく、ゆっくりシート広げてランチができます。" />
            </S>

            <S t="2. 子連れランチ">
              <RC name="牛タン炭焼 利久 西口本店" cuisine="牛タン" price="1,800〜3,000円" desc="仙台名物牛タンの人気店。子ども用椅子・取り皿あり。テールスープは赤ちゃんも喜ぶ薄味。仙台駅西口から徒歩2分。" tags={["子ども椅子あり", "名物グルメ"]} />
              <RC name="ずんだ茶寮 仙台駅ずんだシェイク仙台駅店" cuisine="スイーツ" price="500〜1,000円" desc="仙台名物ずんだシェイク発祥の店。テイクアウトでベビーカーのまま楽しめる。甘くてなめらかで赤ちゃんも興味津々。" tags={["テイクアウトOK", "名物グルメ"]} />
              <RC name="エスパル仙台 レストランフロア" cuisine="多国籍" price="1,000〜2,500円" desc="駅直結で天候に左右されず便利。授乳室・おむつ替えの後そのままランチ可能。ベビーチェア備え付けの店舗多数。" tags={["雨の日OK", "ベビーチェア"]} />
            </S>

            <S t="3. 授乳室・おむつ替えMAP">
              <div className="space-y-2">
                <TI name="仙台うみの杜水族館 入口近く赤ちゃんルーム" desc="授乳室・ミルク用お湯・おむつ替え台・ソファ" />
                <TI name="仙台駅エスパル 2F・東館3F" desc="授乳室・おむつ替え台・ウォーターサーバー" />
                <TI name="仙台AER 3F" desc="授乳室・おむつ替え台" />
                <TI name="仙台市科学館 1F" desc="授乳室・おむつ替え台" />
                <TI name="藤崎百貨店 4F赤ちゃんルーム" desc="授乳室・おむつ替え台・乳幼児スペース" />
              </div>
            </S>

            <S t="📍 おすすめモデルコース">
              <div className="bg-brand-50/30 rounded-xl p-4 mb-3">
                <h3 className="text-sm font-bold text-brand-700 mb-2">🐠 水族館満喫コース（日帰り）</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>10:00 仙台うみの杜水族館 入館（タクシーor仙台駅から無料シャトルバス）</p>
                  <p>11:30 館内レストランで昼食</p>
                  <p>13:00 イルカショー鑑賞</p>
                  <p>14:30 仙台駅へ戻る</p>
                  <p>15:00 エスパルでずんだシェイク＆おみやげ</p>
                </div>
              </div>
              <div className="bg-green-50/30 rounded-xl p-4">
                <h3 className="text-sm font-bold text-green-700 mb-2">🌿 街なか散策コース（半日）</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>10:00 勾当台公園でベビーカーお散歩</p>
                  <p>11:00 定禅寺通ケヤキ並木をぶらぶら</p>
                  <p>12:00 仙台駅エスパルでランチ</p>
                  <p>13:30 藤崎百貨店でショッピング＆授乳休憩</p>
                </div>
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">仙台は新幹線でアクセスしやすく、授乳室・ベビーカー設備が充実しているため、遠征おでかけ先としてもおすすめです。うみの杜水族館・八木山動物公園・エスパルの3拠点を押さえれば、どんな天候でも赤ちゃんと楽しいおでかけができます。牛タンとずんだは大人のお楽しみに！</p>
            </S>
            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">アプリで仙台のスポットを探す</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, tags, tip }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="text-sm font-bold text-brand-600">{name}</div><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1 mb-2">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div>{tip && <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 {tip}</p>}</div>); }
function RC({ name, cuisine, price, desc, tags }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="flex items-center gap-2 mb-1"><div className="text-sm font-bold text-brand-600">{name}</div><span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">{cuisine}</span><span className="text-[10px] text-gray-400 ml-auto">💰 {price}</span></div><p className="text-xs text-gray-600 mt-1 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
function TI({ name, desc }: any) { return (<div className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5"><span className="text-sm">🍼</span><div><div className="text-xs font-bold text-purple-700">{name}</div><div className="text-[11px] text-gray-500">{desc}</div></div></div>); }
