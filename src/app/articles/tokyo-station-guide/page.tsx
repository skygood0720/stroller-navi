import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "東京駅ベビーカーガイド｜新幹線・エレベーター出口・授乳室・丸の内〜八重洲完全解説 | ベビーカーナビ",
  description: "東京駅をベビーカーで完全攻略！新幹線乗り場へのアクセス・丸の内口と八重洲口のエレベーター・授乳室・グランスタのベビー設備を詳しく解説。",
  keywords: ["東京駅 ベビーカー", "東京駅 新幹線 エレベーター", "東京駅 授乳室", "東京駅 ベビーカー 丸の内"],
  openGraph: {
    title: "東京駅ベビーカーガイド｜新幹線・エレベーター・授乳室完全解説",
    description: "新幹線乗り場・丸の内・八重洲のエレベーター位置・授乳室を徹底解説。",
    url: "https://stroller-navi.vercel.app/articles/tokyo-station-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "東京駅でベビーカーを使う場合、どの出口が便利ですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "丸の内側は「丸の内南口」または「丸の内北口」にエレベーターがあります。八重洲側は「八重洲中央口」付近が便利です。新幹線ホームへはエレベーターで移動できます。" }
    },
    {
      "@type": "Question",
      "name": "東京駅で新幹線にベビーカーで乗るには？",
      "acceptedAnswer": { "@type": "Answer", "text": "新幹線ホームへはエレベーターでアクセスできます。のぞみ・ひかり・こだまは11〜16号車付近（北寄り）、はやぶさ・こまちは17〜20号車付近（南寄り）にエレベーターがある場合が多いです。大型荷物・ベビーカースペース付きの車両を事前に予約するのがおすすめです。" }
    },
    {
      "@type": "Question",
      "name": "東京駅周辺の授乳室はどこにありますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "グランスタ東京B1F（授乳室・おむつ替えあり）、大丸東京店8F（個室授乳室あり）、KITTE4F（授乳コーナーあり）に授乳室があります。" }
    },
  ],
};

export default function TokyoStationGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>東京駅ガイド</span>
          </nav>
          <div className="text-3xl mb-2">🏯</div>
          <h1 className="text-xl font-black leading-snug">
            東京駅ベビーカーガイド<br />
            <span className="text-base font-bold opacity-90">新幹線・エレベーター・授乳室 完全解説</span>
          </h1>
          <p className="text-[11px] text-white/70 mt-2">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年5月" readTime="約8分" category="駅ガイド" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              赤レンガの駅舎で有名な東京駅は、新幹線・在来線・地下鉄が集まる巨大ターミナル。
              帰省や旅行で新幹線を使う際も、普段の通勤路線での乗り換えも、
              東京駅はベビーカーでの移動のポイントをいくつか知っておくだけでぐっと楽になります。
              丸の内口と八重洲口の違い、新幹線へのアクセスルート、授乳室の場所を詳しく解説します。
            </p>
          </section>

          {/* 東京駅の構造把握 */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <h2 className="text-base font-bold mb-3">🗺️ まず「丸の内」「八重洲」の違いを把握</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-slate-700 mb-1">丸の内口（西側）</p>
                <ul className="text-[11px] text-gray-600 space-y-0.5">
                  <li>・赤レンガ駅舎側</li>
                  <li>・KITTE・丸ビル方面</li>
                  <li>・東京メトロ丸ノ内線</li>
                  <li>・皇居方面</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-slate-700 mb-1">八重洲口（東側）</p>
                <ul className="text-[11px] text-gray-600 space-y-0.5">
                  <li>・大丸東京・グランスタ</li>
                  <li>・バスターミナル東京八重洲</li>
                  <li>・東京スクエアガーデン</li>
                  <li>・高速バス乗り場</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              ※ 丸の内口と八重洲口は改札内で繋がっていますが、端から端まで徒歩約5〜7分かかります。
              新幹線ホームは中央コンコース（両口の中間）にあります。
            </p>
          </section>

          {/* 丸の内側 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🔵 丸の内口（西側）のエレベーター</h2>
            <div className="space-y-3 text-xs text-gray-700">
              <div>
                <p className="font-bold text-blue-700 mb-1">丸の内南口（推奨）</p>
                <p className="leading-relaxed">改札を出て左側にエレベーターあり。地上の丸の内南口広場へ出られる。KITTE・丸ビル方面への移動に便利。東京ステーションホテル方面への動線もクリア。</p>
              </div>
              <div>
                <p className="font-bold text-blue-700 mb-1">丸の内北口</p>
                <p className="leading-relaxed">改札を出て右手にエレベーターあり。丸の内北口広場・大手町エリアへ出られる。</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-3">
                <p className="text-[11px] font-bold text-blue-700 mb-1">🚇 東京メトロ丸ノ内線へ</p>
                <p className="text-[11px] text-gray-600">丸の内南口を出て地下通路を北へ。丸ノ内線の改札へのエレベーターあり。所要時間：約3〜4分。</p>
              </div>
            </div>
          </section>

          {/* 八重洲側 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟠 八重洲口（東側）のエレベーター</h2>
            <div className="space-y-3 text-xs text-gray-700">
              <div>
                <p className="font-bold text-orange-700 mb-1">八重洲中央口</p>
                <p className="leading-relaxed">大丸東京・グランスタ方面の改札。改札外のグランスタ内にエレベーターあり。大丸東京へ直結でベビー設備が充実。</p>
              </div>
              <div>
                <p className="font-bold text-orange-700 mb-1">八重洲北口・南口</p>
                <p className="leading-relaxed">北口はエレベーターで地上バス乗り場方面へ。南口は東京スクエアガーデン・地下鉄方面へのエレベーターあり。</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-3">
                <p className="text-[11px] font-bold text-orange-700 mb-1">🚌 高速バス（バスターミナル東京八重洲）へ</p>
                <p className="text-[11px] text-gray-600">八重洲口からグランスタを通り地下2Fへ。エレベーターでバスターミナルへ直結。2023年開業の新施設でバリアフリー設計。</p>
              </div>
            </div>
          </section>

          {/* 新幹線ルート */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🚄 新幹線ホームへのベビーカールート</h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              新幹線ホームへはエレベーターでアクセス可能。中央コンコース（丸の内・八重洲の中間）から各新幹線改札へ移動します。
            </p>
            <div className="space-y-3">
              <div className="bg-emerald-50 rounded-xl p-3.5">
                <p className="text-xs font-bold text-emerald-700 mb-1">🚄 東海道・山陽新幹線（のぞみ・ひかり・こだま）</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>・中央コンコースの「東海道新幹線」改札へ向かう</li>
                  <li>・改札内にエレベーターあり（ホーム端付近）</li>
                  <li>・<strong>おすすめ：11号車〜16号車付近</strong>（グリーン車近く）にエレベーターが設置されていることが多い</li>
                  <li>・多目的室のある号車（11号車など）はベビーカーや授乳での利用に便利</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-3.5">
                <p className="text-xs font-bold text-blue-700 mb-1">🚄 東北・北海道新幹線（はやぶさ・やまびこ等）</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>・中央コンコースの「東北新幹線」改札へ向かう</li>
                  <li>・改札内にエレベーターあり</li>
                  <li>・<strong>おすすめ：7号車〜11号車付近</strong>にエレベーターが多い</li>
                  <li>・E5系・H5系は7号車に多目的室あり</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-3.5">
                <p className="text-xs font-bold text-amber-800 mb-1">💡 ベビーカーでの新幹線乗車のコツ</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>・座席の最後尾（壁側）は足元スペースが広くベビーカーを置きやすい</li>
                  <li>・大型荷物スペース付き座席をJR東海・JR東日本の予約サイトで事前確保</li>
                  <li>・乗降時間が短い（20〜30秒）ため、乗車前にドアの位置を確認しておく</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 授乳室 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🍼 東京駅周辺の授乳室・おむつ替えスポット</h2>
            <div className="space-y-3">
              {[
                { name: "大丸東京店 8F ベビー休憩室", tags: ["個室授乳室", "ミルクお湯", "おむつ替え", "電子レンジ"], comment: "八重洲口直結の大丸8F。品質が高く清潔。平日は比較的空いている。", rank: "🥇" },
                { name: "グランスタ東京 B1F（多目的トイレ内）", tags: ["おむつ替え", "多目的トイレ"], comment: "八重洲中央口すぐ。授乳室はないがおむつ替え台が複数箇所に設置されている。緊急時に便利。", rank: "🥈" },
                { name: "KITTE 4F マルノウチ・エリア", tags: ["授乳コーナー", "おむつ替え"], comment: "丸の内南口から徒歩1分。おしゃれな空間で落ち着いて授乳できる。", rank: "🥉" },
                { name: "mamaro（新幹線改札内）", tags: ["個室授乳ブース", "要予約"], comment: "東海道新幹線改札内に設置型授乳ブースmamaroあり。スマホで予約して使う個室タイプ。", rank: "4位" },
              ].map((spot) => (
                <div key={spot.name} className="bg-gray-50 rounded-xl p-3.5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-gray-500 shrink-0">{spot.rank}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{spot.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">{spot.tags.map((t) => <span key={t} className="text-[10px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded-full">{t}</span>)}</div>
                      <p className="text-[11px] text-gray-500 mt-1">{spot.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">💡 東京駅ベビーカー移動のコツ</h2>
            <div className="space-y-3">
              {[
                { emoji: "🗺️", tip: "東京駅の構内は非常に広い。目的地（丸の内口 or 八重洲口、在来線 or 新幹線）を事前に決めておくことが最重要。" },
                { emoji: "⏰", tip: "新幹線利用時は発車の20〜25分前には改札内に入っておこう。エレベーター待ちを含めると余裕が必要。" },
                { emoji: "🛗", tip: "グランスタ東京（B1F）内はフラットでベビーカー移動がしやすい。どの出口への移動もグランスタを通るルートがわかりやすい。" },
                { emoji: "🍱", tip: "グランスタのお弁当コーナーは混雑していることが多い。ベビーカーでは端のスペースを確保してから選ぶと動きやすい。" },
                { emoji: "🚖", tip: "タクシー乗り場は丸の内南口・八重洲南口にある。帰省時の荷物が多いときはタクシーを使うのも選択肢。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xl shrink-0">{item.emoji}</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 他の駅ガイド */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-bold mb-3">🚉 他の駅のベビーカーガイドも見る</h2>
            <div className="space-y-2">
              {[
                { href: "/articles/shinjuku-station-guide", name: "新宿駅ベビーカーガイド", desc: "南口・新南口・東口のエレベーター情報" },
                { href: "/articles/shibuya-station-guide", name: "渋谷駅ベビーカーガイド", desc: "再開発後のエレベーター・ヒカリエルート" },
                { href: "/articles/ikebukuro-station-guide", name: "池袋駅ベビーカーガイド", desc: "サンシャイン・東武・西武へのエレベータールート" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="flex gap-3 items-center bg-gray-50 rounded-xl p-3 hover:bg-brand-50 transition">
                  <span className="text-xl">🚉</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{a.name}</p>
                    <p className="text-[11px] text-gray-500">{a.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <ArticleAreaNav currentSlug="tokyo-station-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
