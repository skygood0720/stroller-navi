import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
export const metadata: Metadata = { title: "ベビーカーで入れるレストランの見分け方｜子連れランチ攻略法 | ベビーカーナビ", description: "入店前にチェックすべきポイント、予約のコツ、持ち物リスト、月齢別のメニュー選び、東京都内のおすすめ子連れレストランチェーンまで完全解説。" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]"><div className="max-w-[640px] mx-auto">
      <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
        <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
        <h1 className="text-lg font-black leading-tight">ベビーカーで入れるレストランの見分け方<br />子連れランチ攻略法</h1>
        <p className="text-[11px] opacity-80 mt-2">読了時間：約7分</p>
      </header>
      <main className="p-5"><article className="space-y-6">
        <S t="はじめに"><p className="text-sm text-gray-700 leading-relaxed">赤ちゃんと一緒の外食は「入れるかな…」「迷惑にならないかな…」と不安になりがち。でも、ポイントを押さえてお店を選べば、パパもママもリラックスして食事を楽しめます。この記事では、ベビーカーで入れるレストランの見分け方と、子連れ外食を成功させるテクニックを詳しく解説します。</p></S>

        <S t="1. 入店前にチェックすべき5つのポイント">
          <div className="space-y-3">
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">① 入口の幅と段差</h3><p className="text-xs text-gray-600 leading-relaxed">ベビーカーの幅（約50〜55cm）を通せる入口かどうか。段差がある場合、スロープがあるかも確認。Googleマップのストリートビューで事前に確認するのがおすすめです。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">② 店内の通路幅</h3><p className="text-xs text-gray-600 leading-relaxed">テーブル間の通路が狭い店はベビーカーを通しにくいです。ファミレスやホテルレストランは通路が広い傾向。個人店はSNSの写真で店内の広さを確認しましょう。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">③ キッズチェア・ベビーチェアの有無</h3><p className="text-xs text-gray-600 leading-relaxed">ベビーチェアがないお店では、ベビーカーのまま食事になります。食べログやGoogleの口コミで「ベビーチェア」「キッズチェア」と検索すると情報が見つかりやすいです。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">④ おむつ替えスペース</h3><p className="text-xs text-gray-600 leading-relaxed">店内にトイレがあっても、おむつ替え台がないことは多いです。近くの商業施設のおむつ替え台も事前に把握しておくと安心。</p></div>
            <div><h3 className="text-sm font-bold text-gray-800 mb-1">⑤ 座席タイプ（ソファ・座敷・個室）</h3><p className="text-xs text-gray-600 leading-relaxed">ソファ席は赤ちゃんを隣に寝かせられます。座敷席はハイハイ期に最適。個室は泣いても周りを気にしなくてOK。予約時に「ベビーカーで行きます」と伝えると、広い席を用意してもらえることが多いです。</p></div>
          </div>
        </S>

        <S t="2. 予約のコツ">
          <div className="bg-brand-50/50 rounded-xl p-4 space-y-2">
            <p className="text-xs text-gray-700 leading-relaxed">・ランチなら11:00の開店直後が狙い目（混雑前に入れる）</p>
            <p className="text-xs text-gray-700 leading-relaxed">・予約時に「ベビーカーで伺います」「赤ちゃんがいます」と伝える</p>
            <p className="text-xs text-gray-700 leading-relaxed">・「ソファ席」「個室」「座敷」をリクエストする</p>
            <p className="text-xs text-gray-700 leading-relaxed">・食べログやホットペッパーの「子連れOK」フィルターを活用</p>
            <p className="text-xs text-gray-700 leading-relaxed">・平日ランチのほうが週末より格段に入りやすい</p>
          </div>
        </S>

        <S t="3. 月齢別メニューの選び方">
          <div className="space-y-3">
            <div className="bg-pink-50/50 rounded-xl p-3.5"><p className="text-xs font-bold text-pink-700">0〜5ヶ月（離乳食前）</p><p className="text-[11px] text-gray-600">赤ちゃんは授乳のみ。パパママの食事がメイン。授乳室が近いお店を選ぶのがコツ。</p></div>
            <div className="bg-blue-50/50 rounded-xl p-3.5"><p className="text-xs font-bold text-blue-700">5〜8ヶ月（離乳食初期〜中期）</p><p className="text-[11px] text-gray-600">離乳食を持ち込むのが基本。「離乳食持ち込みOK」のお店を選ぶ。100本のスプーンは離乳食無料提供！電子レンジがあるお店は温めもできて便利。</p></div>
            <div className="bg-green-50/50 rounded-xl p-3.5"><p className="text-xs font-bold text-green-700">9〜12ヶ月（離乳食後期）</p><p className="text-[11px] text-gray-600">うどん（柔らかめ）、白身魚、豆腐など、大人メニューから取り分けできるように。丸亀製麺のうどんは柔らかくて赤ちゃんにも◎。</p></div>
            <div className="bg-amber-50/50 rounded-xl p-3.5"><p className="text-xs font-bold text-amber-700">1歳〜（完了期以降）</p><p className="text-[11px] text-gray-600">キッズメニューが頼めるように。ファミレス（ガスト、ジョナサン、ココス）はキッズプレート290円〜と手軽。サイゼリヤは290円からキッズメニューあり。</p></div>
          </div>
        </S>

        <S t="4. おすすめ子連れチェーン店">
          <div className="space-y-2">
            <RC name="100本のスプーン" desc="離乳食無料提供。子連れのための店。新宿・池袋・豊洲・二子玉川。" tag="離乳食無料" />
            <RC name="ロイヤルホスト" desc="離乳食温めサービス。ベビーチェア完備。全国チェーン。" tag="離乳食温め可" />
            <RC name="サイゼリヤ" desc="キッズメニュー290円〜。コスパ最強。通路も広め。" tag="コスパ◎" />
            <RC name="ガスト・ジョナサン" desc="キッズプレートにおもちゃ付き。ドリンクバーでゆっくり。" tag="おもちゃ付き" />
            <RC name="くら寿司・スシロー" desc="タッチパネルで注文。ビッくらポンで子どもも大興奮。" tag="回転寿司" />
            <RC name="木曽路" desc="個室座敷で赤ちゃんも安心。お食い初め・七五三にも。" tag="個室座敷" />
            <RC name="焼肉きんぐ" desc="小学生未満無料の食べ放題。コスパ最強の子連れ焼肉。" tag="小学生未満無料" />
          </div>
        </S>

        <S t="5. 持っていくと便利なもの">
          <div className="bg-blue-50/50 rounded-xl p-4"><p className="text-xs text-gray-700 leading-relaxed">チェアベルト（ベビーチェアがない店で使える）、食事用エプロン、ウェットティッシュ、お気に入りのおもちゃ（小さいもの）、ジップロック（食べ残し持ち帰り用）、着替え一式（食べこぼし用）。</p></div>
        </S>

        <S t="まとめ"><p className="text-sm text-gray-700 leading-relaxed">子連れ外食は事前のお店選びが8割です。ベビーカーナビのレストランタブでは、ベビーカーOK・キッズメニューあり・個室ありなどの条件で絞り込めるので、おでかけ前にチェックしてみてください。現在地から近い順にも表示できるので、急なランチにも対応できます。</p></S>
        <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center"><Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">子連れレストランを探す</Link></section>
      </article>          <ArticleAreaNav currentSlug="restaurant-tips" />
        </main>
      <SiteFooter />
    </div></div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function RC({ name, desc, tag }: any) { return (<div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"><div className="flex-1"><p className="text-xs font-bold text-gray-800">{name}</p><p className="text-[11px] text-gray-500">{desc}</p></div><span className="text-[9px] bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold shrink-0">{tag}</span></div>); }
