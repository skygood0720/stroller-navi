import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "授乳室の見つけ方と上手な使い方｜新米ママ完全マニュアル 2026年版 | ベビーカーナビ",
  description: "外出先で迷わない！授乳室の探し方5つの方法・持ち物15点チェックリスト・満室時の対処法・授乳マナー・東京都内おすすめ授乳室TOP5まで。新米ママが知りたい情報を全網羅。",
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
          <h1 className="text-lg font-black leading-tight">授乳室の見つけ方と上手な使い方<br />新米ママ完全マニュアル</h1>
          <p className="text-[11px] opacity-80 mt-2">授乳室探し・持ち物・マナーを完全解説 / 読了時間：約8分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約8分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                初めての外出で最も不安なのが「外で授乳できるか」ではないでしょうか。
                「授乳室がなかったらどうしよう」「人目のある場所で授乳は難しい」——そんな不安を持つ新米ママはとても多いです。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                実は東京都内には「赤ちゃん・ふらっと」認定の授乳スペースが<strong>1,600か所以上</strong>あります。
                知っていれば、外出先での授乳はそれほど難しくありません。
                この記事では、授乳室を素早く見つける方法から、持ち物・マナー・混雑時の対処法まで、
                実際に赤ちゃんと外出した経験をもとに詳しく解説します。
              </p>
              <div className="bg-pink-50 rounded-xl p-4">
                <p className="text-xs font-bold text-pink-800 mb-1">📋 この記事でわかること</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>• 外出先で授乳室を素早く見つける5つの方法</li>
                  <li>• 授乳室に持っていくと便利なアイテムリスト</li>
                  <li>• 授乳室が満室・見つからないときの対処法</li>
                  <li>• 知っておきたいマナーとエチケット</li>
                  <li>• 東京都内おすすめ授乳室ランキングTOP5</li>
                  <li>• 設置型授乳室「mamaro」の使い方</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. 授乳室を見つける5つの方法</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                外出中に授乳室を探す方法はいくつかあります。事前に調べておくのが理想ですが、急に必要になったときのために複数の方法を知っておきましょう。
              </p>

              <div className="space-y-4">
                <div className="bg-brand-50/50 rounded-xl p-4 border border-brand-100/50">
                  <h3 className="text-sm font-bold text-brand-700 mb-2">① ベビーカーナビで検索（最速・現在地対応）</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ベビーカーナビのトイレ・授乳タブには、東京都内100以上の授乳室・多目的トイレが登録されています。
                    現在地から近い順に表示できるため、急な授乳が必要になったときでも素早く近くの授乳室を探せます。
                    また、「授乳室あり」タグでフィルタリングして事前に行き先付近の授乳室を確認することもできます。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2">② ママパパマップ（授乳室専門アプリ）</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    授乳室・おむつ替えスペースの検索に特化したアプリです。
                    施設の詳細情報として、ミルク用お湯の有無、個室の数、おむつ替え台の高さ、口コミなどが確認できます。
                    ユーザーが実際に利用したコメントが参考になるため、品質の高い授乳室を事前にリサーチするのに便利です。
                    事前の計画があるときは、このアプリでおでかけ先の授乳室をチェックしておくのがおすすめです。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2">③ 商業施設の公式サイト・フロアガイド</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    百貨店・ショッピングモールの公式サイトには、フロアガイードPDFが掲載されていることが多く、
                    授乳室の位置が記載されています。おでかけ前に施設のホームページを確認し、
                    どのフロアに授乳室があるか、何個の個室があるかなどを事前に把握しておくと当日慌てません。
                    大型百貨店では複数フロアに授乳室があることも多いため、確認しておくと便利です。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2">④ 東京都「赤ちゃん・ふらっと」マーク</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    東京都が認定した授乳・おむつ替えスペースには、ピンク色の「赤ちゃん・ふらっと」ステッカーが貼られています。
                    区役所・図書館・郵便局など、商業施設以外の公共施設にも多数設置されています。
                    全国で1,600か所以上の認定施設があり、東京都のウェブサイトで検索できます。
                    知名度が高くないため穴場になっていることもあり、意外と空いていてゆっくり使えます。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2">⑤ 設置型授乳室「mamaro」</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    近年、駅構内やオフィスビルに「mamaro」という完全個室の設置型授乳ボックスが増えています。
                    スマートフォンアプリで事前予約でき、鍵付きのプライベート空間で授乳できます。
                    東京駅・新橋駅・大手町駅・渋谷駅などに設置されており、出張や通院などで駅周辺にいるときに重宝します。
                    設備はコンパクトですが清潔で、急場しのぎの授乳スペースとして頼りになります。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 授乳室に持っていくと便利なもの</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                授乳室を利用する際に「あると助かった」と多くのママが感じるアイテムをまとめました。
                事前に「授乳ポーチ」を作っておくと、バッグの中でバラバラにならず管理しやすいです。
              </p>

              <div className="space-y-3">
                <div className="bg-pink-50/50 rounded-xl p-4 border border-pink-100/50">
                  <p className="text-xs font-bold text-pink-700 mb-2">🍼 授乳グッズ（必須）</p>
                  <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                    <li>• <strong>授乳ケープ</strong>：個室がない場合や、個室が満室のときに必須。リングタイプが使いやすい</li>
                    <li>• <strong>母乳パッド（予備）</strong>：授乳後に交換するための予備を2〜3枚</li>
                    <li>• <strong>ガーゼハンカチ</strong>：吐き戻し対策に複数枚あると安心</li>
                    <li>• <strong>哺乳瓶＋粉ミルク＋お湯入り水筒</strong>（ミルク育児の場合）</li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
                  <p className="text-xs font-bold text-blue-700 mb-2">👶 おむつ替えグッズ</p>
                  <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                    <li>• おむつ（通常より1〜2枚多め）</li>
                    <li>• おしりふき（十分な量）</li>
                    <li>• おむつ替えシート（施設によってはあると便利）</li>
                    <li>• ビニール袋（使用済みおむつ用）</li>
                    <li>• 着替え一式（おむつ替え中の汚れに備えて）</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-800 mb-1">💡 プロの授乳ポーチのつくり方</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    100均のメッシュポーチ（A5〜B5サイズ）に授乳ケープ・母乳パッド予備・ガーゼをまとめておくと、
                    バッグから一発で取り出せます。授乳が終わったら元の場所に戻すだけなので整理も楽になります。
                    外出するたびにいちいち確認する必要がなく、準備の時間を大幅に短縮できます。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 授乳室が満室・見つからないときの対処法</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                週末・連休・時間帯によっては、授乳室が混雑していることがあります。
                そんなときのために、複数の対処法を頭に入れておきましょう。
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">①</span>
                  <div>
                    <p className="font-bold">別フロアの授乳室を試す</p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      大型商業施設では複数フロアに授乳室が設置されていることが多いです。
                      混雑している場合は他フロアを試してみましょう。インフォメーションで確認すると早いです。
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">②</span>
                  <div>
                    <p className="font-bold">近くの百貨店・大型施設に移動する</p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      ショッピングモールよりも百貨店の授乳室は比較的空いていることが多いです。
                      伊勢丹・三越・高島屋など老舗百貨店は授乳室の品質が高く、ゆったり使えます。
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">③</span>
                  <div>
                    <p className="font-bold">授乳ケープを使ってカフェのソファ席で対応する</p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      授乳ケープがあれば、カフェの隅のソファ席でも授乳できます。
                      「授乳OKです」と明示しているカフェも増えています。
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">④</span>
                  <div>
                    <p className="font-bold">スタジオアリスの授乳室を借りる</p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      スタジオアリスは撮影のお客様がいない場合、授乳室を一般開放している店舗があります。
                      お声がけしてみるのも一つの方法です。
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">⑤</span>
                  <div>
                    <p className="font-bold">駅の多目的トイレを利用する</p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      多目的トイレにはおむつ替え台が設置されていることが多く、
                      ベビーカーのまま入れる広さがあります。ただし清潔度は施設によって異なります。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. 授乳室のマナーとエチケット</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                授乳室は他のお子さん連れのパパ・ママと共有するスペースです。
                お互い気持ちよく利用するために、基本的なマナーを確認しておきましょう。
              </p>
              <div className="space-y-3">
                <div className="bg-green-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-green-700 mb-1">✅ 心がけること</p>
                  <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
                    <li>• 使用後はおむつ替え台・床を軽く拭いてから退室する</li>
                    <li>• ゴミ（使用済みおむつ・母乳パッドなど）は必ず専用ごみ箱か持ち帰る</li>
                    <li>• 次の人が使いやすいように椅子・荷物を元の場所に戻す</li>
                    <li>• 授乳が終わったら長居せず速やかに退室する（ただし急かされる必要はありません）</li>
                  </ul>
                </div>
                <div className="bg-red-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-red-700 mb-1">❌ 避けること</p>
                  <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
                    <li>• 授乳以外の目的での長時間占有（着替え・休憩など）</li>
                    <li>• 施設のお湯を大量に使用すること（使い過ぎると他の方が困ります）</li>
                    <li>• スマートフォン・タブレットなどを大音量で使用すること</li>
                    <li>• 許可なく写真・動画撮影すること（プライバシーの侵害になります）</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">5. 東京都内おすすめ授乳室 TOP5</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                実際に赤ちゃん連れで訪問した方の口コミと設備情報をもとに、
                東京都内で特に品質が高いと評価される授乳室をランキング形式でご紹介します。
              </p>

              <div className="space-y-3">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🥇</span>
                    <Link href="/spots/3007" className="text-sm font-bold text-brand-600 hover:underline">伊勢丹新宿店 6F ベビー休憩室</Link>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["個室授乳室", "ミルク用お湯", "体重計", "電子レンジ", "調乳台"].map(t => (
                      <span key={t} className="text-[9px] bg-white text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    新宿の老舗百貨店、伊勢丹の6Fにある授乳室は東京都内でもトップクラスの設備を誇ります。
                    完全個室の授乳ブースが複数あり、ミルク用のお湯・電子レンジ・調乳台・ベビースケール（体重計）まで完備されています。
                    清潔感があり、スタッフが定期的に清掃・管理しています。
                    混雑する週末でも個室が複数あるため、比較的待ち時間が少ないのが特徴です。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🥈</span>
                    <span className="text-sm font-bold text-gray-800">日本橋三越 新館6F</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["個室授乳室", "ミルク用お湯", "体重計", "電子レンジ"].map(t => (
                      <span key={t} className="text-[9px] bg-white text-gray-600 border border-gray-200 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    日本橋三越新館6Fのベビー休憩室も伊勢丹に負けない充実の設備です。
                    個室の授乳ブース・ミルク用お湯・体重計・電子レンジが揃い、赤ちゃんのあらゆるケアが一か所で行えます。
                    落ち着いた雰囲気で、ゆっくりと授乳時間を過ごせると評判です。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🥉</span>
                    <Link href="/spots/3008" className="text-sm font-bold text-brand-600 hover:underline">ららぽーと豊洲 各フロア</Link>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["複数フロア", "ミルク用お湯", "電子レンジ", "身長体重計"].map(t => (
                      <span key={t} className="text-[9px] bg-white text-gray-600 border border-gray-200 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    各フロアに授乳室が設置されているため、どこにいても素早く授乳スペースにアクセスできます。
                    ミルク用お湯・電子レンジ・身長体重計が完備されており、長時間の滞在にも安心です。
                    ショッピングモール内にあるため、フードコートでの食事と組み合わせて訪れる家族が多いです。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">4位</span>
                    <Link href="/spots/3005" className="text-sm font-bold text-brand-600 hover:underline">銀座三越 9F</Link>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">個室授乳室・調乳用お湯・体重計が揃う落ち着いた環境の授乳室です。銀座でのショッピング中の授乳に便利な立地で、9Fというフロアのため混雑しにくいのも嬉しい点です。</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">5位</span>
                    <span className="text-sm font-bold text-gray-800">二子玉川ライズ</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">各フロアにミルク用お湯・電子レンジ・身長体重計が揃った授乳室があります。二子玉川は子育て世帯に人気のエリアで、授乳室の利用者も多く、設備の管理状態が良いと評判です。</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ：外出先の授乳は「事前準備」がすべて</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                授乳室を上手に使うコツは「事前に場所を把握しておくこと」と「いざという時の代替手段を知っておくこと」の2つです。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                ベビーカーナビのトイレタブでは、現在地近くの授乳室・おむつ替えスペースをマップで確認できます。
                おでかけ前に行き先付近の授乳室をチェックしておくことで、当日の不安を大幅に減らせます。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                授乳ケープを常にバッグに入れておけば、万が一授乳室が見つからなくても対応できます。
                最初は不安でも、慣れてくると外での授乳はどんどんスムーズになります。焦らず自分のペースで慣らしていきましょう。
              </p>
            </section>

            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-brand-700 mb-2">🍼 現在地の授乳室を探す</p>
              <p className="text-xs text-gray-500 mb-3">ベビーカーナビなら現在地から近い授乳室をマップで表示できます</p>
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
                アプリを開く
              </Link>
            </section>
          </article>
          <ArticleAreaNav currentSlug="nursing-room-tips" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
