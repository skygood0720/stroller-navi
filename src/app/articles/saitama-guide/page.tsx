import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】さいたまエリア 子連れおでかけ完全ガイド｜大宮・与野・浦和の授乳室・ランチ情報 | ベビーカーナビ",
  description: "さいたま市（大宮・与野・浦和）でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。鉄道博物館・大宮公園・イオンレイクタウンのベビー設備を詳しく解説。",
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
          <h1 className="text-lg font-black leading-tight">【2026年最新】さいたまエリア<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">大宮・与野・浦和・レイクタウン / 読了時間：約7分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約7分" />
          <article className="space-y-6">
            <S t="はじめに">
              <p className="text-sm text-gray-700 leading-relaxed">さいたまエリアは東京から電車で20〜30分という近さながら、広い公園・本格的な鉄道博物館・子育て支援施設が充実した「子育てしやすい街」です。大宮・浦和・与野の各エリアで異なる魅力があり、週末おでかけに飽きることがありません。</p>
            </S>

            <S t="1. おすすめスポット">
              <SC name="鉄道博物館（大宮）" desc="日本最大規模の鉄道博物館。本物の車両展示は赤ちゃんも興奮！ベビーカー貸出あり・授乳室は2か所。おむつ替え台も多数。シミュレーターは身長制限あり（小さいうちは本物の車両展示だけでも十分）。" tags={["授乳室2か所", "ベビーカー貸出", "鉄道好きに必須"]} tip="平日は比較的空いています。乳幼児は入館料無料（3歳以下）。" />
              <SC name="大宮公園・東武動物公園（大宮）" desc="大宮公園は広い芝生と複数の遊具が揃う無料公園。隣接する大宮公園小動物園は無料で動物を見られる穴場。ベビーカーOK。授乳室は公園管理棟内。" tags={["無料", "動物園無料", "芝生広場"]} tip="桜の時期（3〜4月）は混雑するが、それ以外の季節は穴場の快適スポット。" />
              <SC name="イオンレイクタウン（越谷市）" desc="日本最大級のショッピングモール。授乳室は全館で12か所以上。ベビーカー貸出あり。レイクタウンアウトレットと隣接し、一日中楽しめる。授乳室はすべて個室タイプで清潔。" tags={["授乳室12か所以上", "ベビーカー貸出", "日本最大級"]} tip="授乳室の混雑は11〜13時台。少し時間をずらすとスムーズ。" />
              <SC name="さいたま市立浦和博物館・氷川神社（浦和）" desc="氷川神社は国内有数の格式ある神社。広い参道はベビーカーで歩きやすい。境内のベンチで授乳休憩もできる。七五三・お宮参りでも人気のスポット。" tags={["参道広い", "お宮参り人気", "無料"]} tip="午前中の早い時間帯は参拝客が少なく、ゆっくり参拝できます。" />
              <SC name="コクーンシティ（与野本町）" desc="与野本町駅直結の大型モール。授乳室は2か所完備。子ども向けアパレルや雑貨店が充実。近隣に子育て支援センターもあり。" tags={["駅直結", "授乳室完備"]} tip="与野本町駅はエレベーター完備で、ベビーカーのままスムーズにアクセスできます。" />
            </S>

            <S t="2. 子連れランチ">
              <RC name="大宮ルミネ レストランフロア" cuisine="多国籍" price="1,000〜2,500円" desc="大宮駅直結で便利。ベビーチェア完備の店舗多数。授乳室は駅ビル内にあり食事前後に利用可。" tags={["駅直結", "ベビーチェア"]} />
              <RC name="銀のさら 大宮エリア" cuisine="和食回転寿司" price="1,500〜2,500円" desc="さいたま市内に多数展開。個室あり・子ども椅子完備。子どもに人気の回転寿司で家族みんなが楽しめる。" tags={["個室あり", "子ども椅子"]} />
              <RC name="イオンレイクタウン フードコート" cuisine="多国籍" price="700〜1,800円" desc="150席以上のベビーチェアが揃う東日本最大級フードコート。授乳室直近で安心して食事できる。" tags={["ベビーチェア多数", "授乳室直近"]} />
            </S>

            <S t="3. 授乳室・おむつ替えMAP">
              <div className="space-y-2">
                <TI name="鉄道博物館 1F・3F" desc="授乳室・おむつ替え台・ミルク用お湯" />
                <TI name="イオンレイクタウン 各フロア（全12か所）" desc="個室授乳室・おむつ替え台・ウォーターサーバー" />
                <TI name="大宮ルミネ 3F育児室" desc="授乳室・おむつ替え台" />
                <TI name="コクーンシティ 2F" desc="授乳室・おむつ替え台" />
                <TI name="大宮公園 管理棟内" desc="授乳スペース・おむつ替え台" />
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">さいたまエリアは「鉄道博物館→大宮公園→コクーンシティ」という黄金コースがあり、1日かけて充実した子連れおでかけができます。イオンレイクタウンは授乳室12か所以上という圧倒的な設備で、長時間でも安心。東京からのアクセスも良く、週末の行き先として強くおすすめできます。</p>
            </S>
            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">アプリでさいたまのスポットを探す</Link>
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
