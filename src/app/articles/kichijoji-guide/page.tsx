import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
export const metadata: Metadata = { title: "【2026年】吉祥寺エリア 子連れおでかけ完全ガイド｜井の頭公園・ランチ・授乳室 | ベビーカーナビ", description: "吉祥寺の井の頭公園・ジブリ美術館・ハモニカ横丁周辺の子連れスポット、ベビーカーOKランチ、授乳室を完全網羅。" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]"><div className="max-w-[640px] mx-auto">
      <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
        <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
        <h1 className="text-lg font-black leading-tight">【2026年最新】吉祥寺エリア<br />子連れおでかけ完全ガイド</h1>
        <p className="text-[11px] opacity-80 mt-2">井の頭公園・カフェ・授乳室 / 読了時間：約7分</p>
      </header>
      <main className="p-5"><article className="space-y-6">
        <S t="はじめに"><p className="text-sm text-gray-700 leading-relaxed">吉祥寺は「住みたい街ランキング」の常連であると同時に、実は赤ちゃん連れにとっても居心地のいい街です。井の頭恩賜公園の広大な緑、駅直結の商業施設、おしゃれなカフェ、そして少し足を伸ばせばジブリ美術館。自然と都市が程よく融合した吉祥寺ならではの子連れコースをご紹介します。</p></S>

        <S t="1. 公園・自然スポット">
          <SC name="井の頭恩賜公園" desc="吉祥寺駅から徒歩5分。広大な公園で芝生広場やボート池があり、四季を通じてベビーカー散歩が楽しめます。園内の「井の頭自然文化園」には動物園・水生物館もあり。春は桜の名所としても有名。" tags={["芝生", "ボート", "授乳室近い"]} link="/spots/3027" tip="公園内のペパカフェフォレストでタイ料理ランチ→動物園のコースが人気" />
          <SC name="井の頭自然文化園" desc="井の頭公園内の動物園。モルモットのふれあい体験、リスの小径が人気。ベビーカー貸出あり。授乳室完備。入園料400円（小学生以下無料）。" tags={["授乳室", "ベビーカー貸出", "動物ふれあい"]} link="/spots/3327" tip="月曜休園。モルモット抱っこは平日午後が空いています" />
          <SC name="三鷹の森ジブリ美術館" desc="要予約。ネコバスルームは子どもに大人気。ベビーカーは入口で預け、抱っこ紐推奨。館内は撮影禁止ですが、屋上のロボット兵は撮影OK。" tags={["予約制", "授乳室", "抱っこ紐推奨"]} link="/spots/3117" tip="チケットはローソンで毎月10日に発売。すぐ売り切れるので発売日に購入を" />
        </S>

        <S t="2. 子連れランチ">
          <RC name="ペパカフェフォレスト 井の頭" cuisine="タイ料理" price="1,200〜2,000円" desc="井の頭公園内。テラス席で自然を感じながらランチ。キッズメニューあり。" tags={["テラス席", "公園内"]} link="/spots/7171" />
          <RC name="吉祥ダイニング" cuisine="和食ブッフェ" price="1,500〜3,000円" desc="東急REIホテル内。個室・ソファ席完備。お子様食器も全てあり。" tags={["個室あり", "ソファ席"]} link="/spots/7170" />
          <RC name="むさしの森珈琲 吉祥寺南町店" cuisine="カフェ" price="800〜1,500円" desc="ふわっとろパンケーキが人気。ゆったりした席配置でベビーカーOK。" tags={["ベビーチェア", "パンケーキ"]} link="/spots/7242" />
          <RC name="サイゼリヤ 吉祥寺ダイヤ街店" cuisine="イタリアン" price="500〜1,200円" desc="コスパ最強。キッズメニュー290円〜。気軽に入れる。" tags={["リーズナブル", "キッズメニュー"]} link="/spots/7226" />
        </S>

        <S t="3. 授乳室・おむつ替えMAP">
          <div className="space-y-2">
            <TI name="吉祥寺アトレ" desc="駅直結。ベビー休憩室あり" />
            <TI name="吉祥寺パルコ" desc="各フロアにおむつ替え台。授乳室あり" />
            <TI name="コピス吉祥寺 A館5F" desc="授乳室・ミルク用お湯・電子レンジ完備" />
            <TI name="東急百貨店 吉祥寺店 7F" desc="授乳室・おむつ替え台・ミルク用お湯" />
            <TI name="武蔵野市総合体育館" desc="幼児室の近くにおむつ替え台あり" />
          </div>
        </S>

        <S t="📍 おすすめ半日コース">
          <div className="bg-brand-50/30 rounded-xl p-4">
            <div className="text-xs text-gray-600 leading-relaxed space-y-1">
              <p>10:00 コピス吉祥寺で授乳＆買い物</p>
              <p>11:00 井の頭公園をベビーカーでお散歩</p>
              <p>11:30 ペパカフェフォレストでランチ</p>
              <p>13:00 井の頭自然文化園で動物ふれあい</p>
              <p>14:30 吉祥寺駅でおやつ＆帰宅</p>
            </div>
          </div>
        </S>

        <S t="まとめ"><p className="text-sm text-gray-700 leading-relaxed">吉祥寺は自然とカフェが融合した、赤ちゃんとのお散歩に最適な街です。井の頭公園を拠点にすれば、動物園・ランチ・お散歩がすべて歩ける範囲で完結します。授乳室はコピス吉祥寺5Fが最も充実しているので、困ったらまずコピスへ。</p></S>
        <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center"><Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">アプリを開く</Link></section>
      </article>          <ArticleAreaNav currentSlug="kichijoji-guide" />
        </main>
      <SiteFooter />
    </div></div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, tags, link, tip }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1 mb-2">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div>{tip && <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 {tip}</p>}</div>); }
function RC({ name, cuisine, price, desc, tags, link }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="flex items-center gap-2 mb-1"><Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link><span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">{cuisine}</span><span className="text-[10px] text-gray-400 ml-auto">💰 {price}</span></div><p className="text-xs text-gray-600 mt-1 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
function TI({ name, desc }: any) { return (<div className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5"><span className="text-sm">🍼</span><div><div className="text-xs font-bold text-purple-700">{name}</div><div className="text-[11px] text-gray-500">{desc}</div></div></div>); }
