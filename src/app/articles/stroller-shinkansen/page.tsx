import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "新幹線でのベビーカー完全ガイド【2026年】畳む必要は？特大荷物スペース予約方法まで | ベビーカーナビ",
  description: "新幹線にベビーカーを持ち込む際の疑問を全解決。特大荷物スペース付き座席の予約方法・ベビーカーをたたむ必要があるかどうか・おすすめの座席・授乳室の場所まで詳しく解説。",
  keywords: ["ベビーカー 新幹線", "新幹線 ベビーカー 畳む", "新幹線 赤ちゃん 座席", "新幹線 特大荷物 ベビーカー", "赤ちゃん 新幹線 乗り方"],
  openGraph: {
    title: "新幹線でのベビーカー完全ガイド【2026年】",
    description: "新幹線にベビーカーを持ち込む際の疑問を全解決。予約方法・座席選び・授乳室まで。",
    url: "https://stroller-navi.vercel.app/articles/stroller-shinkansen",
    type: "article",
  },
};

const SHINKANSEN_RULES = [
  {
    q: "ベビーカーは畳まなければいけない？",
    a: "2023年のJRの案内では、ベビーカーは【原則そのまま持ち込み可能】です。ただし通路をふさぐ場合は折りたたみのご協力をお願いする場合があります。「特大荷物スペース付き座席」を予約すれば、一番後ろの荷物スペースにそのまま置けるのでおすすめです。",
    icon: "🛗",
  },
  {
    q: "特大荷物スペース付き座席とは？",
    a: "2024年から東海道・山陽・九州新幹線などで実施されている、一番後ろの座席＋後ろの荷物スペースを事前予約できるシステム。ベビーカー・スーツケースをそのまま置けます。EX予約・スマートEXなどのアプリから予約可能。",
    icon: "📦",
  },
  {
    q: "赤ちゃんの乗車券は必要？",
    a: "6歳未満は無料（大人1名に対し子供2名まで）。ただし座席が必要な場合は子供の切符が必要です。乗車中ずっとだっこや授乳でいい場合は不要。指定席に座らせる場合は子供運賃（大人の半額）が必要です。",
    icon: "🎫",
  },
  {
    q: "授乳はどこでできる？",
    a: "東海道・山陽新幹線（のぞみ・ひかり等）には多目的室があります。事前に車掌さんに申し出ると使用できます（ただし車椅子利用者が優先）。グリーン車の車両にはトイレ内のおむつ替え台もあります。",
    icon: "🍼",
  },
];

const SEAT_TIPS = [
  {
    type: "特大荷物スペース付き最後尾座席",
    merit: "ベビーカーをそのまま置ける。後ろの通路に気を使わなくて済む。壁があるので後ろを気にしなくていい。",
    demerit: "事前予約が必要（追加料金なし）。取れない場合もある。",
    recommend: "◎ 最もおすすめ",
    color: "green",
  },
  {
    type: "最前列座席（1号車など）",
    merit: "前に壁があり子供が前に出ても他の乗客に迷惑をかけにくい。足元スペースが広め。",
    demerit: "人気のため取りにくい。ベビーカー置き場は通路のみ。",
    recommend: "○ おすすめ",
    color: "blue",
  },
  {
    type: "多目的室に近い座席",
    merit: "授乳・おむつ替えのためのアクセスが最短。赤ちゃんが泣いたとき移動しやすい。",
    demerit: "多目的室は満室のことも。場所は号車によって異なる。",
    recommend: "○ おすすめ",
    color: "blue",
  },
  {
    type: "3列シートの通路側（C席など）",
    merit: "立ちやすく、授乳・あやしのために席を外しやすい。",
    demerit: "通路を通る人とぶつかる可能性。ベビーカーは前後に置くと通行の妨げに。",
    recommend: "△ 状況による",
    color: "orange",
  },
];

const PREP_LIST = [
  { timing: "予約時", items: ["特大荷物スペース付き座席を予約（EX予約/スマートEX推奨）", "子供の乗車券が必要か確認", "多目的室の位置を確認（JR公式サイト）"] },
  { timing: "前日", items: ["授乳グッズ・離乳食・おむつを多めに準備", "保険証・母子手帳をバッグに入れる", "ベビーカーの折りたたみ練習（スムーズにできるか確認）"] },
  { timing: "当日・乗車前", items: ["出発30分前には駅に到着（エレベーター探しに時間がかかることも）", "赤ちゃんにお腹を空かせないよう軽く授乳しておく", "おむつを新しいものに交換してから乗車"] },
  { timing: "車内", items: ["ベビーカーは折りたたんで荷棚 or 最後尾スペースへ", "泣いたら多目的室 or デッキで対応", "周囲の乗客に一声かけておくと安心"] },
];

export default function StrollerShinkansenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "新幹線でのベビーカー完全ガイド【2026年】",
    "description": "新幹線にベビーカーを持ち込む際の疑問を全解決。特大荷物スペース予約方法・座席選び・授乳室まで。",
    "url": "https://stroller-navi.vercel.app/articles/stroller-shinkansen",
    "datePublished": "2026-06-10",
    "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
    "inLanguage": "ja",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "新幹線にベビーカーを持ち込む際、たたまないといけませんか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "原則そのまま持ち込み可能です。特大荷物スペース付き座席を予約すれば、指定の荷物スペースにそのまま置けます。通路をふさぐ場合はたたみのご協力をお願いされることがあります。",
        },
      },
      {
        "@type": "Question",
        "name": "新幹線で赤ちゃんと乗る際のおすすめ座席は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "特大荷物スペース付きの最後尾座席が最もおすすめです。ベビーカーをそのまま置けて、後ろを気にせず子供をあやせます。次点で多目的室に近い座席がおすすめです。",
        },
      },
      {
        "@type": "Question",
        "name": "新幹線での授乳はどこでできますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "東海道・山陽新幹線には多目的室があります。車掌に申し出ると使用できます（車椅子利用者優先）。デッキスペースで授乳カバーを使う方法もあります。",
        },
      },
    ],
  };

  const colorMap: Record<string, string> = {
    green: "bg-green-50 border-green-200 text-green-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    orange: "bg-orange-50 border-orange-200 text-orange-800",
  };
  const recommendColor: Record<string, string> = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    orange: "bg-orange-100 text-orange-800",
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>新幹線でのベビーカーガイド</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">移動ガイド</span>
            <span className="bg-blue-300/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">🚅 新幹線特集</span>
          </div>
          <h1 className="text-lg font-black leading-snug">
            新幹線でのベビーカー完全ガイド【2026年】<br />
            <span className="text-[13px] font-bold opacity-90">畳む必要は？特大荷物スペース予約方法まで</span>
          </h1>
        </header>

        <main className="p-5 space-y-6">
          <ArticleAuthor date="2026年6月10日" readTime="8分" category="移動ガイド" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              「赤ちゃんを連れて新幹線に乗りたいけど、ベビーカーはどうする？」そんな不安を解消します。実は<strong>新幹線はベビーカーに比較的優しい乗り物</strong>で、コツさえつかめば快適に移動できます。
            </p>
            <div className="mt-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-xs font-bold text-blue-800 mb-2">📋 この記事のポイント</p>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>✅ ベビーカーを畳む必要があるか（結論：基本不要）</li>
                <li>✅ 特大荷物スペース付き座席の予約方法</li>
                <li>✅ 赤ちゃんとのおすすめ座席タイプ</li>
                <li>✅ 車内での授乳・おむつ替えの方法</li>
                <li>✅ 当日の乗車チェックリスト</li>
              </ul>
            </div>
          </section>

          {/* ルール・Q&A */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🚅 新幹線ベビーカーの基本ルール</h2>
            <div className="space-y-4">
              {SHINKANSEN_RULES.map((rule) => (
                <div key={rule.q} className="border-l-2 border-blue-300 pl-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-lg">{rule.icon}</span>
                    <p className="text-xs font-bold text-gray-800">{rule.q}</p>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">{rule.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 座席選び */}
          <section>
            <h2 className="text-base font-bold mb-3">💺 赤ちゃん連れのおすすめ座席</h2>
            <div className="space-y-3">
              {SEAT_TIPS.map((seat) => (
                <div key={seat.type} className={`rounded-2xl p-4 border ${colorMap[seat.color]}`}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-xs font-bold">{seat.type}</p>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${recommendColor[seat.color]}`}>
                      {seat.recommend}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[9px] font-bold mb-0.5">✅ メリット</p>
                      <p className="text-[10px] leading-relaxed">{seat.merit}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold mb-0.5">⚠️ デメリット</p>
                      <p className="text-[10px] leading-relaxed">{seat.demerit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 予約手順 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">📱 特大荷物スペース付き座席の予約手順</h2>
            <div className="space-y-3">
              {[
                "「EX予約」「スマートEX」アプリをインストール",
                "座席選択画面で「特大荷物スペースあり」にチェック",
                "希望の便・号車の最後尾座席を選択",
                "追加料金なしで予約完了！",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700 pt-0.5">{step}</p>
                </div>
              ))}
              <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-100 mt-2">
                <p className="text-[11px] text-yellow-800">
                  ⚠️ 特大荷物スペース付き座席は人気のため早めの予約を。取れなかった場合は車掌に声をかけてデッキや空いているスペースを確認しましょう。
                </p>
              </div>
            </div>
          </section>

          {/* チェックリスト */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">✅ 新幹線乗車チェックリスト</h2>
            <div className="space-y-4">
              {PREP_LIST.map((phase) => (
                <div key={phase.timing}>
                  <p className="text-xs font-bold text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded-lg inline-block">{phase.timing}</p>
                  <div className="space-y-1.5 ml-2">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="w-4 h-4 border border-gray-300 rounded shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">❓ よくある質問</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. 新幹線でベビーカーを畳まないといけない？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  原則不要です。ただし満席の便で通路を占有するとトラブルになることも。特大荷物スペース付き座席を予約すれば安心です。
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. 赤ちゃんが泣いたらどうする？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  デッキや多目的室（車掌に申し出）に移動しましょう。車内は密閉されているため泣き声が響きますが、多くの乗客は赤ちゃんの泣き声に理解を示してくれます。
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. おむつ替えは車内でできる？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  グリーン車などのトイレにはおむつ替え台が設置されています。普通車でも大型トイレ（多目的トイレ）があれば使用可能です。乗車前に該当車両を確認しておくと安心。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="text-sm font-bold text-blue-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/train-stroller-manner", title: "ベビーカーで電車に乗るときのマナーと注意点", emoji: "🚃" },
                { href: "/articles/shinjuku-station-guide", title: "新宿駅 エレベーターガイド｜ベビーカーでの移動ルート", emoji: "🗺️" },
                { href: "/articles/baby-first-outing", title: "赤ちゃんの初めてのおでかけ｜月齢別おすすめスポット", emoji: "👶" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="flex items-center gap-2 text-xs text-blue-700 hover:text-blue-900 hover:underline">
                  <span>{link.emoji}</span>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🗾 旅先のスポットをあらかじめ調べる</p>
            <p className="text-xs text-gray-500 mb-3">全国9地域の授乳室・エレベーター・おむつ替え情報</p>
            <Link href="/spots"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
              スポット一覧を見る →
            </Link>
          </section>

          <ShareButtons title="新幹線でのベビーカー完全ガイド【2026年】" url="/articles/stroller-shinkansen" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
