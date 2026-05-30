import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";
export const metadata: Metadata = { title: "授乳室の見つけ方と上手な使い方｜新米ママ完全マニュアル | ベビーカーナビ", description: "外出先での授乳室の探し方、便利な持ち物、マナー、設置型授乳室mamaroの使い方、東京都内の穴場授乳室TOP5まで完全解説。" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]"><div className="max-w-[640px] mx-auto">
      <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
        <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
        <h1 className="text-lg font-black leading-tight">授乳室の見つけ方と上手な使い方<br />新米ママ完全マニュアル</h1>
        <p className="text-[11px] opacity-80 mt-2">読了時間：約7分</p>
      </header>
      <main className="p-5">
          <ArticleAuthor date="2026年5月" readTime="約7分" /><article className="space-y-6">
        <S t="はじめに"><p className="text-sm text-gray-700 leading-relaxed">初めての外出で最も不安なのが「外で授乳できるか」ではないでしょうか。実は東京都内には「赤ちゃん・ふらっと」認定の授乳スペースが1,600か所以上あります。この記事では、授乳室を素早く見つける方法、持っておくと安心なグッズ、知っておきたいマナーを詳しく解説します。</p></S>
        <S t="1. 授乳室を見つける5つの方法">
          <div className="space-y-4">
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">① ベビーカーナビで検索</h3><p className="text-sm text-gray-700 leading-relaxed">ベビーカーナビのトイレタブには、東京都内100以上の授乳室・多目的トイレが登録されています。現在地から近い順に表示できるので、急な授乳にも対応できます。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">② ママパパマップ</h3><p className="text-sm text-gray-700 leading-relaxed">授乳室専門の検索アプリ。全国の授乳室を口コミ付きで検索できます。ミルク用お湯の有無、個室の数、混雑度などの詳細情報が便利です。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">③ 商業施設のフロアガイド</h3><p className="text-sm text-gray-700 leading-relaxed">百貨店やショッピングモールの公式サイトのフロアガイドPDFに授乳室の位置が記載されています。おでかけ前に確認しておくと安心です。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">④ 東京都「赤ちゃん・ふらっと」マーク</h3><p className="text-sm text-gray-700 leading-relaxed">東京都が認定した授乳・おむつ替えスペース。ピンク色のステッカーが目印。区役所、図書館、郵便局などの公共施設に多く設置されています。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">⑤ 設置型授乳室 mamaro</h3><p className="text-sm text-gray-700 leading-relaxed">駅構内やオフィスビルに設置された完全個室の授乳ボックス。スマホで予約でき、鍵付きで安心。東京駅・新橋駅・大手町駅などに設置されています。</p></div>
          </div>
        </S>
        <S t="2. 授乳室に持っていくと便利なもの">
          <div className="bg-brand-50/50 rounded-xl p-4 mb-3"><p className="text-xs text-gray-700 leading-relaxed">授乳ケープ（個室がない場合に必須）、ガーゼハンカチ（複数枚）、母乳パッド予備、哺乳瓶＋粉ミルク＋お湯入り水筒（ミルクの場合）、ビニール袋（使用済みおむつ用）、おむつ替えシート、着替え一式、おしりふき。</p></div>
          <div className="bg-amber-50 rounded-xl p-3.5"><p className="text-xs text-amber-700 font-bold mb-1">💡 プロのコツ</p><p className="text-xs text-gray-600 leading-relaxed">授乳グッズはまとめて「授乳ポーチ」に入れておくと、バッグから取り出しやすくなります。100均のメッシュポーチがサイズ的にちょうどいいです。</p></div>
        </S>
        <S t="3. 授乳室が満室のときの対処法">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">週末の午後は百貨店の授乳室が混み合うことがあります。以下の対処法を覚えておくと慌てません。</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>・別フロアの授乳室を試す（大型施設は複数フロアにあることが多い）</p>
            <p>・近くの百貨店に移動する（百貨店の授乳室は比較的空いている）</p>
            <p>・授乳ケープを使ってカフェのソファ席で対応する</p>
            <p>・スタジオアリスは授乳室を一般開放している店舗もある</p>
          </div>
        </S>
        <S t="4. 知っておきたいマナー"><p className="text-sm text-gray-700 leading-relaxed">授乳室は共有スペースです。使用後はおむつ替え台を軽く拭く、ゴミは持ち帰る、長時間の占有を避けるなど基本的なマナーを守りましょう。ミルクのお湯は施設が提供してくれる場合がありますが、自分で持参するのがベター。電子レンジがある施設では離乳食の温めもできます。</p></S>
        <S t="5. 東京都内おすすめ授乳室TOP5">
          <div className="space-y-2">
            <div className="bg-amber-50/50 rounded-xl p-3.5"><span className="text-xs font-bold text-amber-700">🥇 伊勢丹新宿店 6F</span><p className="text-[11px] text-gray-600">個室授乳室・ミルク用お湯・体重計・電子レンジ。最高品質。</p></div>
            <div className="bg-gray-50 rounded-xl p-3.5"><span className="text-xs font-bold text-gray-700">🥈 日本橋三越 新館6F</span><p className="text-[11px] text-gray-600">個室授乳室・ミルク用お湯・体重計・電子レンジ完備。</p></div>
            <div className="bg-gray-50 rounded-xl p-3.5"><span className="text-xs font-bold text-gray-700">🥉 ららぽーと豊洲 各フロア</span><p className="text-[11px] text-gray-600">ミルク用お湯・電子レンジ・身長体重計。広くて清潔。</p></div>
            <div className="bg-gray-50 rounded-xl p-3.5"><span className="text-xs font-bold text-gray-600">4位 銀座三越 9F</span><p className="text-[11px] text-gray-600">個室授乳室・調乳用お湯・体重計。落ち着いた環境。</p></div>
            <div className="bg-gray-50 rounded-xl p-3.5"><span className="text-xs font-bold text-gray-600">5位 二子玉川ライズ</span><p className="text-[11px] text-gray-600">ミルク用お湯・電子レンジ・身長体重計。各フロアに完備。</p></div>
          </div>
        </S>
        <S t="まとめ"><p className="text-sm text-gray-700 leading-relaxed">授乳室は「事前に場所を把握しておく」ことが最大のポイントです。ベビーカーナビのトイレタブで近くの授乳室を検索できるので、おでかけ前にチェックしておくと安心。授乳ケープも常に持ち歩いておけば、万が一授乳室が見つからなくても対応できます。</p></S>
        <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center"><Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">アプリで授乳室を探す</Link></section>
      </article>          <ArticleAreaNav currentSlug="nursing-room-tips" />
        </main>
      <SiteFooter />
    </div></div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
