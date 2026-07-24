import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】金沢 子連れ・赤ちゃん連れおでかけ完全ガイド｜兼六園・21美・授乳室まとめ | ベビーカーナビ",
  description: "金沢で赤ちゃん・子連れでおでかけするための完全ガイド。兼六園・21世紀美術館・近江町市場など主要スポットの授乳室・おむつ替え台・ベビーカー対応情報を徹底解説。移動・宿泊・ランチのコツも。",
  keywords: ["金沢 子連れ", "金沢 赤ちゃん", "金沢 授乳室", "金沢 ベビーカー", "金沢 観光 子供", "兼六園 子連れ", "21世紀美術館 子連れ", "金沢 おでかけ"],
  openGraph: {
    title: "金沢 子連れ・赤ちゃん連れおでかけ完全ガイド | ベビーカーナビ",
    description: "兼六園・21世紀美術館・近江町市場の授乳室・ベビーカー情報。金沢観光で子連れが知りたい情報を全部まとめました。",
    url: "https://stroller-navi.vercel.app/articles/kanazawa-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function KanazawaGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "金沢 子連れ・赤ちゃん連れおでかけ完全ガイド",
    "description": "兼六園・21世紀美術館・近江町市場など金沢主要スポットの授乳室・ベビーカー対応情報",
    "url": "https://stroller-navi.vercel.app/articles/kanazawa-guide",
    "datePublished": "2026-07-01",
    "dateModified": "2026-07-01",
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://stroller-navi.vercel.app/articles/kanazawa-guide" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "金沢観光でベビーカーは使えますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "兼六園・21世紀美術館・金沢駅周辺の商業施設はベビーカーで入れます。ひがし茶屋街は石畳があるためバギーボードや抱っこ紐との併用がおすすめです。" }
      },
      {
        "@type": "Question",
        "name": "金沢の授乳室はどこにありますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "金沢駅「もてなしドーム」内、イオンモール新小松・金沢フォーラス、21世紀美術館内に授乳室があります。近江町市場には専用授乳室はありませんが、周辺の商業ビルを利用できます。" }
      },
      {
        "@type": "Question",
        "name": "金沢は赤ちゃん連れでも楽しめますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "はい。兼六園の広大な庭園散策、21世紀美術館の無料ゾーン、金沢21世紀美術館のキッズプログラムなど、赤ちゃん連れでも楽しめるスポットが充実しています。" }
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">お役立ち記事</Link>
            <span className="mx-1.5">›</span>
            <span>金沢子連れガイド</span>
          </nav>
          <h1 className="text-lg font-black leading-tight">
            【2026年最新】金沢 子連れ・赤ちゃん連れ<br />おでかけ完全ガイド
          </h1>
          <p className="text-[11px] opacity-80 mt-2">兼六園・21世紀美術館・近江町市場 / 読了時間：約9分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年7月" readTime="約9分" />
          <article className="space-y-6">

            {/* 目次 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📋 この記事でわかること</h2>
              <ol className="space-y-2 text-sm text-brand-700">
                {["金沢観光で子連れが知っておくべき基本情報", "兼六園のベビーカー・授乳室事情", "21世紀美術館の子連れ攻略法", "近江町市場・ひがし茶屋街の注意点", "子連れにやさしいランチスポット", "金沢の移動・駐車場・宿泊について"].map((item, i) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-400 font-bold">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* イントロ */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">金沢は子連れ旅行に向いている？</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                石川県の県庁所在地・金沢市は、「小京都」とも呼ばれる歴史ある城下町。兼六園・金沢城・ひがし茶屋街などの観光スポットが集中しており、週末・連休に人気の家族旅行先です。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                赤ちゃん連れ・子連れ視点で見ると、<strong>中心部の主要スポットは比較的コンパクトにまとまっており</strong>、移動の負担が少ないのが特徴です。ただし、ひがし茶屋街の石畳やぬれ坂（冬季）など、ベビーカーに向かない道もあります。事前に情報を把握して計画を立てることが金沢子連れ旅行成功のカギです。
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {[
                  { icon: "✅", text: "主要スポットが1〜2km圏内に集中" },
                  { icon: "✅", text: "駅周辺に授乳室・おむつ替え完備" },
                  { icon: "✅", text: "21世紀美術館は無料ゾーンあり" },
                  { icon: "⚠️", text: "石畳エリアはベビーカー困難" },
                ].map((item) => (
                  <div key={item.text} className="bg-gray-50 rounded-xl p-3 text-xs text-gray-700 flex gap-2">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 金沢駅 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🚉 金沢駅の授乳室・設備情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                北陸新幹線の開業以来、利用者が急増した金沢駅。「もてなしドーム」と呼ばれる大きな木製ドームが目印です。駅構内・駅ビル（金沢百番街）には赤ちゃん連れに必要な設備が充実しています。
              </p>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-800 mb-2">🍼 授乳室・赤ちゃん設備</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・金沢百番街「あんと」内に授乳室あり（個室タイプ）</li>
                    <li>・おむつ替え台はトイレ複数箇所に設置</li>
                    <li>・コインロッカーが豊富で荷物を預けて観光できる</li>
                    <li>・駅内フードコートでゆっくり食事可能</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-blue-800 mb-2">🦽 バリアフリー情報</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・エレベーターは各プラットフォームに設置済み</li>
                    <li>・改札〜コンコースはフラットでベビーカーで動きやすい</li>
                    <li>・駅から市内へのバスはローフロア対応車が多い</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                金沢駅に着いたらまず<strong>コインロッカーに荷物を預ける</strong>のがおすすめ。軽身になってから観光するとベビーカー操作がずっと楽になります。
              </p>
            </section>

            {/* 兼六園 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🌿 兼六園 ベビーカー・授乳室情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                日本三名園の一つ、兼六園。江戸時代に整備された回遊式庭園で、広大な敷地に池・噴水・茶屋が点在します。子連れ旅行で金沢に来たなら外せないスポットです。
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
                <p className="text-xs font-bold text-amber-800 mb-2">⚠️ ベビーカー注意ポイント</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  園内は砂利道・石畳・緩やかな坂が混在します。タイヤが太めのベビーカーなら問題ありませんが、細いタイヤの場合は抱っこ紐を併用するか、ベビーカーを入口近くに置いて見どころだけ歩くのが現実的です。
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>おむつ替え台：桂坂口・真弓坂口の休憩所トイレ内に設置</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>授乳スペース：桂坂口の案内所近くに設置あり</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>ベビーカー貸出：なし（要持参）</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>売店あり：甘酒・きな粉棒など子どもも喜ぶ軽食</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">⚠</span><span>入園料：一般320円、18歳未満無料</span></li>
              </ul>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                <strong>おすすめ時間帯は朝8時〜10時</strong>。観光客が少なく、ベビーカーも動かしやすい。混雑する昼〜午後は霞が池周辺で撮影待ちが発生することも。
              </p>
            </section>

            {/* 21世紀美術館 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🎨 21世紀美術館 子連れ攻略</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                金沢21世紀美術館は、兼六園のすぐ隣にある現代アート美術館。円形の建物全体が作品のようなデザインで、インスタ映えスポットとしても人気。子連れに特に嬉しいのが<strong>無料で入れる交流ゾーン</strong>の存在です。
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-purple-800 mb-2">🆓 無料ゾーン（入館料不要）</p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    ロビーや一部の交流スペースは無料で利用できます。有名なプール作品「スイミング・プール」（レアンドロのプール）は有料ゾーンですが、外から水面の上を歩く人を下から見る体験は赤ちゃんも喜びます。
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-800 mb-2">🍼 赤ちゃん設備</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・授乳室あり（館内スタッフに要確認）</li>
                    <li>・おむつ替え台あり（多目的トイレ内）</li>
                    <li>・エレベーターあり（全フロア対応）</li>
                    <li>・ベビーカーで全エリア回れる（フラットな床）</li>
                    <li>・館内カフェあり（子連れ利用OK）</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-3 mt-3">
                <p className="text-xs text-gray-700">
                  💡 <strong>子連れTips</strong>：有料ゾーンの一部作品は大きな音が出るものや薄暗いものがあります。月齢の低い赤ちゃんは無料ゾーンだけでも十分楽しめます。
                </p>
              </div>
            </section>

            {/* 近江町市場 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🦐 近江町市場の注意点</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                金沢の台所「近江町市場」は、海鮮・惣菜・野菜が並ぶ活気あふれる市場。海鮮丼や能登牛の串焼きなどが食べられる食のスポットとして人気ですが、<strong>子連れ・ベビーカーでは注意が必要</strong>です。
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>通路が狭くベビーカーでは通りにくい区画が多い</span>
                </div>
                <div className="flex gap-2 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>専用授乳室なし（近隣のいちば館3Fに多目的トイレあり）</span>
                </div>
                <div className="flex gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  <span>「いちば館」（市場内ビル）はエレベーターあり・比較的広め</span>
                </div>
                <div className="flex gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  <span>午前中（9〜11時）は比較的空いていて動きやすい</span>
                </div>
                <div className="flex gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  <span>テイクアウトして金沢城公園で食べるのがおすすめ</span>
                </div>
              </div>
            </section>

            {/* ひがし茶屋街 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🏮 ひがし茶屋街での注意</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                金沢を代表する観光スポット、ひがし茶屋街。格子造りの茶屋が並ぶ美しい通りですが、石畳の道がベビーカーには大敵。以下の点を頭に入れておきましょう。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-amber-500">⚠</span><span>メイン通りは石畳：タイヤが細いベビーカーはガタガタしやすい</span></li>
                <li className="flex gap-2"><span className="text-amber-500">⚠</span><span>お店の入口に段差あり：大半の店舗はベビーカーのまま入れない</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>抱っこ紐で来て、店内見学するのがストレスフリー</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>通り沿いの甘味処・カフェは比較的入りやすい</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>早朝（8〜9時台）は観光客が少なく写真も撮りやすい</span></li>
              </ul>
            </section>

            {/* 子連れランチ */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🍱 子連れにやさしいランチスポット</h2>
              <div className="space-y-3">
                {[
                  {
                    name: "金沢百番街 ダイニング街",
                    desc: "金沢駅直結。和食・洋食・ラーメンなど多彩な選択肢。テーブル席が多く、ベビーチェアを置いているお店も。雨の日・移動前後の食事に最適",
                    tag: "駅直結・雨の日◎",
                  },
                  {
                    name: "金沢フォーラス レストランフロア",
                    desc: "片町エリアの大型ショッピングモール内。授乳室・おむつ替え台が館内にあり安心。落ち着いて食事できる個室もあり",
                    tag: "授乳室あり",
                  },
                  {
                    name: "もりもり寿し 近江町店",
                    desc: "人気の回転寿し。子ども向けメニューあり。混雑時は並ぶため、開店直後（11時）か14時以降のすき間を狙おう",
                    tag: "子どもメニューあり",
                  },
                ].map((spot) => (
                  <div key={spot.name} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="text-sm font-bold text-gray-800">{spot.name}</p>
                      <span className="text-[10px] bg-brand-100 text-brand-700 rounded-full px-2 py-0.5 shrink-0">{spot.tag}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{spot.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 移動・宿泊 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🚌 移動・駐車場・宿泊のコツ</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-2">市内移動</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    金沢駅から主要観光地へは<strong>城下まち金沢周遊バス（1日フリー乗車券500円）</strong>が便利。ローフロアバスが多く、ベビーカーのまま乗車可能。ただし混雑時は折り畳みを求められる場合も。タクシーは市内フラットで短距離の移動に◎。
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-2">駐車場</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    車の場合、兼六園周辺は観光シーズンに大混雑。金沢城公園の駐車場（兼六駐車場）か、少し離れた金沢駅西口の駐車場を活用してバスで移動するのがスムーズです。
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-2">宿泊</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    赤ちゃん連れなら<strong>金沢駅周辺のホテル</strong>がベスト。荷物の持ち運びが少なく、授乳室・売店・コンビニへのアクセスが良い。ANAクラウンプラザ金沢・ホテル日航金沢などのシティホテルはベビーベッド貸出対応が多め。
                  </p>
                </div>
              </div>
            </section>

            {/* まとめ */}
            <section className="bg-gradient-to-br from-brand-50 to-orange-50 rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">まとめ：金沢子連れ旅行のポイント</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-brand-500 font-bold">1.</span><span>金沢駅に着いたらまず荷物をロッカーに預ける</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">2.</span><span>兼六園は朝一番、近江町市場は午前中に行く</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">3.</span><span>ひがし茶屋街は抱っこ紐か、ベビーカーを駐車して散策</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">4.</span><span>21世紀美術館の無料ゾーンは授乳室ありで安心</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">5.</span><span>宿泊は金沢駅周辺ホテルを選ぶと移動が楽</span></li>
              </ul>
            </section>

            {/* 関連記事 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📖 関連記事</h2>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { href: "/articles/kyoto-guide", text: "京都 子連れおでかけガイド" },
                  { href: "/articles/osaka-guide", text: "大阪 子連れおでかけガイド" },
                  { href: "/articles/stroller-shinkansen", text: "新幹線でのベビーカー・赤ちゃん乗車ガイド" },
                  { href: "/articles/baby-onsen", text: "赤ちゃん連れ温泉旅行ガイド" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-brand-600 hover:underline flex gap-2 items-center">
                    <span className="text-gray-300">›</span>{item.text}
                  </Link>
                ))}
              </div>
            </section>

          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
