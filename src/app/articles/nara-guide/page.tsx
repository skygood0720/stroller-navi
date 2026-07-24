import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】奈良 子連れ・赤ちゃん連れおでかけ完全ガイド｜奈良公園・東大寺・授乳室まとめ | ベビーカーナビ",
  description: "奈良で赤ちゃん・子連れでおでかけするための完全ガイド。奈良公園・東大寺・春日大社の授乳室・おむつ替え台・ベビーカー対応情報を徹底解説。鹿せんべいの注意点も。",
  keywords: ["奈良 子連れ", "奈良 赤ちゃん", "奈良 授乳室", "奈良公園 子連れ", "奈良公園 ベビーカー", "東大寺 子連れ", "奈良 鹿 子供", "奈良 おでかけ"],
  openGraph: {
    title: "奈良 子連れ・赤ちゃん連れおでかけ完全ガイド | ベビーカーナビ",
    description: "奈良公園・東大寺の授乳室・ベビーカー情報。鹿との遭遇対策も解説。奈良観光で子連れが知りたい情報を全部まとめました。",
    url: "https://stroller-navi.vercel.app/articles/nara-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function NaraGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "奈良 子連れ・赤ちゃん連れおでかけ完全ガイド",
    "description": "奈良公園・東大寺・春日大社の授乳室・ベビーカー対応と鹿との付き合い方",
    "url": "https://stroller-navi.vercel.app/articles/nara-guide",
    "datePublished": "2026-07-01",
    "dateModified": "2026-07-01",
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "奈良公園はベビーカーで回れますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "芝生エリアや整備された遊歩道はベビーカーで通れます。ただし砂利道や段差のある参道もあるため、タイヤが太めのベビーカーか抱っこ紐の併用がおすすめです。" }
      },
      {
        "@type": "Question",
        "name": "奈良の鹿は赤ちゃんに危険ですか？",
        "acceptedAnswer": { "@type": "Answer", "text": "鹿は野生動物なので、鹿せんべいを持っていると群がってきます。赤ちゃん連れの場合は鹿せんべいは持たず、鹿が近づいてきたら距離を取るのが安全です。10月〜11月の発情期はオスが特に活発になります。" }
      },
      {
        "@type": "Question",
        "name": "奈良公園周辺の授乳室はどこにありますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "奈良県観光案内所（近鉄奈良駅近く）、なら100年会館、近隣のショッピングモール「ミ・ナーラ」などに授乳室があります。東大寺参道近くのレストランやカフェでも授乳室を設けているところがあります。" }
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
            <span>奈良子連れガイド</span>
          </nav>
          <h1 className="text-lg font-black leading-tight">
            【2026年最新】奈良 子連れ・赤ちゃん連れ<br />おでかけ完全ガイド
          </h1>
          <p className="text-[11px] opacity-80 mt-2">奈良公園・東大寺・春日大社 / 読了時間：約9分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年7月" readTime="約9分" />
          <article className="space-y-6">

            {/* 目次 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📋 この記事でわかること</h2>
              <ol className="space-y-2 text-sm text-brand-700">
                {["奈良観光で子連れが絶対知るべき「鹿」の注意点", "奈良公園のベビーカー事情と授乳室情報", "東大寺・春日大社のバリアフリー情報", "子連れに最適なモデルコース", "授乳室のある子連れランチスポット", "大阪・京都からのアクセスと移動のコツ"].map((item, i) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-400 font-bold">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* 鹿の注意 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🦌 赤ちゃん連れで鹿と遭遇する前に</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                奈良観光の象徴である「奈良の鹿」。子どもと一緒に訪れる親御さんが最も気になるのが<strong>鹿との遭遇リスク</strong>です。奈良公園には約1,200頭の野生の鹿が生息しており、観光客に慣れていますが、あくまで野生動物です。
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
                <p className="text-xs font-bold text-red-800 mb-2">🚨 赤ちゃん連れで注意すること</p>
                <ul className="text-xs text-gray-700 space-y-1.5">
                  <li>・<strong>鹿せんべいは持たない</strong>：せんべいを持つと複数頭が群がってきて危険</li>
                  <li>・<strong>ベビーカーに鹿が興味を示す</strong>：荷物入れのビニール袋などをかじることがある</li>
                  <li>・<strong>10〜11月の発情期は特に注意</strong>：雄鹿が活発・攻撃的になる</li>
                  <li>・<strong>鹿に近づきすぎない</strong>：1〜2mは距離を保つ</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-xs font-bold text-green-800 mb-2">✅ 安全に楽しむコツ</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>・鹿から来ても騒がず静かに後退するのがベスト</li>
                  <li>・鹿が少ない早朝（8〜9時台）や夕方（17時以降）に行く</li>
                  <li>・抱っこ紐で赤ちゃんをしっかり抱えていると安心</li>
                </ul>
              </div>
            </section>

            {/* 奈良公園 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🌳 奈良公園のベビーカー・授乳室情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                奈良公園は約660ヘクタールという広大な面積を持ちます。東大寺・春日大社・興福寺などが公園内に点在しており、一日中楽しめます。公園内はおおむねフラットな芝生エリアですが、場所によって状況が異なります。
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-2"><span className="text-green-500">✓</span><span>芝生広場エリア：平坦でベビーカーで走行しやすい</span></div>
                <div className="flex gap-2"><span className="text-green-500">✓</span><span>浮見堂周辺：景色が良く散歩に最適。比較的空いている</span></div>
                <div className="flex gap-2"><span className="text-amber-500">⚠</span><span>東大寺〜南大門参道：砂利・段差があり押しにくい区間あり</span></div>
                <div className="flex gap-2"><span className="text-amber-500">⚠</span><span>春日大社参道：砂利道が長く続く。抱っこ紐推奨</span></div>
                <div className="flex gap-2"><span className="text-green-500">✓</span><span>おむつ替え台：公園内トイレ（一部）に設置あり</span></div>
                <div className="flex gap-2"><span className="text-green-500">✓</span><span>授乳室：近鉄奈良駅観光案内所、ミ・ナーラ（ショッピングモール）に完備</span></div>
              </div>
            </section>

            {/* 東大寺 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">⛩️ 東大寺 バリアフリー情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                世界最大の木造建築「大仏殿」で知られる東大寺。奈良観光のメインスポットですが、子連れで訪れる際はいくつか注意点があります。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>大仏殿内はフラットで広く、ベビーカーで入場可能</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>大仏の大きさに赤ちゃんも興味を示すことが多い</span></li>
                <li className="flex gap-2"><span className="text-amber-500">⚠</span><span>南大門〜大仏殿は砂利道：入口付近に段差もあり</span></li>
                <li className="flex gap-2"><span className="text-amber-500">⚠</span><span>入場料：大人500円、中学生200円、小学生以下無料</span></li>
                <li className="flex gap-2"><span className="text-amber-500">⚠</span><span>混雑時は人の多い参道でベビーカーが動かしにくい</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>授乳室：大仏殿内に多目的トイレあり（スタッフに要確認）</span></li>
              </ul>
              <div className="bg-yellow-50 rounded-xl p-3 mt-3">
                <p className="text-xs text-gray-700">💡 <strong>混雑回避Tips</strong>：開門直後（7:30〜8:30）か閉門前（16:30〜）が比較的空いています。修学旅行のシーズン（4〜5月、9〜10月）の平日は特に混雑します。</p>
              </div>
            </section>

            {/* モデルコース */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🗺️ 子連れ向けモデルコース</h2>
              <div className="space-y-3">
                <p className="text-xs text-gray-500 font-bold">【日帰り】大阪・京都からの子連れ奈良1dayコース</p>
                {[
                  { time: "9:00", place: "近鉄奈良駅到着", desc: "まず観光案内所で授乳・おむつ替えを済ませる" },
                  { time: "9:30", place: "興福寺・猿沢の池", desc: "駅から徒歩5分。五重塔を背景に鹿との写真撮影（比較的空いている）" },
                  { time: "10:30", place: "東大寺 大仏殿", desc: "混む前に大仏殿へ。大きな大仏に赤ちゃんも目を輝かせる" },
                  { time: "12:00", place: "ランチ", desc: "東大寺門前の飲食店か、近鉄奈良駅周辺へ戻って食事" },
                  { time: "13:30", place: "奈良公園 芝生広場", desc: "ランチ後は芝生でのんびり。鹿に遠目から慣れさせる" },
                  { time: "15:00", place: "ならまち散策", desc: "格子戸の並ぶ昔ながらの街並み。カフェでひと休み" },
                  { time: "16:30", place: "帰路", desc: "疲れる前に早めに出発。電車で大阪・京都へ" },
                ].map((step) => (
                  <div key={step.time} className="flex gap-3">
                    <span className="text-brand-600 font-bold text-xs w-12 shrink-0 pt-0.5">{step.time}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{step.place}</p>
                      <p className="text-xs text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* アクセス */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🚃 大阪・京都からのアクセス</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs mb-1">大阪（難波）から</p>
                  <p className="text-xs">近鉄奈良線 特急・急行で約40〜50分。乗り換えなし。ベビーカーのまま乗車OK（混雑時は折畳み要請あり）</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs mb-1">京都から</p>
                  <p className="text-xs">近鉄京都線 特急で約45分。または JR奈良線 みやこ路快速で約50分。どちらも便利</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs mb-1">車の場合</p>
                  <p className="text-xs">奈良公園周辺の駐車場は土日混雑。「奈良県営 登大路駐車場」が公園まで徒歩圏内で比較的停めやすい</p>
                </div>
              </div>
            </section>

            {/* まとめ */}
            <section className="bg-gradient-to-br from-brand-50 to-orange-50 rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">まとめ：奈良子連れ旅行のポイント</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-brand-500 font-bold">1.</span><span>鹿せんべいは持たない。鹿が来たら静かに後退</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">2.</span><span>授乳室は近鉄奈良駅観光案内所かミ・ナーラを活用</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">3.</span><span>東大寺は開門直後が空いていて動きやすい</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">4.</span><span>春日大社参道は砂利道なので抱っこ紐が快適</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">5.</span><span>日帰りなら大阪・京都からがアクセスしやすくおすすめ</span></li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📖 関連記事</h2>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { href: "/articles/kyoto-guide", text: "京都 子連れおでかけガイド" },
                  { href: "/articles/osaka-guide", text: "大阪 子連れおでかけガイド" },
                  { href: "/articles/kanazawa-guide", text: "金沢 子連れおでかけガイド" },
                  { href: "/articles/stroller-shinkansen", text: "新幹線でのベビーカー・赤ちゃん乗車ガイド" },
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
