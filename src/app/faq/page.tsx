import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）| ベビーカーナビ",
  description: "ベビーカーナビに関するよくある質問をまとめました。授乳室の探し方・電車でのベビーカー利用・0歳からのおでかけ・子連れランチなど赤ちゃん連れおでかけの疑問を解決。",
  alternates: { canonical: "https://stroller-navi.vercel.app/faq" },
  openGraph: {
    title: "よくある質問（FAQ）| ベビーカーナビ",
    description: "ベビーカーで電車に乗るときは？授乳室はどこ？0歳のおでかけは？子連れおでかけのよくある疑問を全解決。",
    url: "https://stroller-navi.vercel.app/faq",
  },
};

const FAQS = [
  {
    category: "ベビーカー・移動",
    emoji: "🚼",
    items: [
      {
        q: "ベビーカーで電車に乗るときは折りたたむ必要がありますか？",
        a: "国土交通省の公式見解では、ベビーカーは折りたたまずに乗車できます。ただし混雑時は周囲への配慮が必要です。エレベーターのある駅を選ぶ・混雑の少ない時間帯に移動するなどの工夫が有効です。",
        link: "/articles/train-stroller-manner",
        linkLabel: "詳しくはこちら：ベビーカーで電車に乗るときのマナー",
      },
      {
        q: "新幹線にベビーカーを持ち込めますか？",
        a: "持ち込み可能です。2020年から「特大荷物スペース付き座席」の事前予約制が始まり、ベビーカーもこのスペースに置けます。座席は最後列や車端部が便利です。",
        link: "/articles/stroller-shinkansen",
        linkLabel: "詳しくはこちら：新幹線でのベビーカーガイド",
      },
      {
        q: "A型とB型のベビーカーはどう違いますか？",
        a: "A型は生後1ヶ月から使える大型タイプで、B型は生後7ヶ月以降から使える軽量タイプです。電車移動が多い都市部ではB型（5kg以下）が使いやすく、郊外でのカー移動中心なら機能性の高いA型がおすすめです。",
        link: "/articles/stroller-choosing-guide",
        linkLabel: "詳しくはこちら：ベビーカーの選び方完全ガイド",
      },
      {
        q: "飛行機にベビーカーを持ち込めますか？",
        a: "機内への持ち込みは原則不可ですが、搭乗口で預けてボーディングブリッジで返却してもらえます（機材・航空会社により異なる）。コンパクトに折りたためるバギー型が旅行に便利です。",
        link: null,
        linkLabel: null,
      },
    ],
  },
  {
    category: "授乳室・おむつ替え",
    emoji: "🍼",
    items: [
      {
        q: "外出先で授乳室はどこで探せますか？",
        a: "ベビーカーナビでは全国500以上の授乳室・おむつ替え台のある施設を掲載しています。百貨店・ショッピングモール・駅ビル・大型公園管理棟に多く設置されています。施設に着いたらインフォメーションカウンターで確認するのが確実です。",
        link: "/articles/nursing-room-tips",
        linkLabel: "詳しくはこちら：授乳室の見つけ方と上手な使い方",
      },
      {
        q: "授乳室がない施設ではどうすればいいですか？",
        a: "多目的トイレ・授乳ケープを使ったレストランのすみ・車内での授乳などが選択肢です。事前にベビーカーナビで授乳室のある施設を確認してからお出かけするのがおすすめです。",
        link: null,
        linkLabel: null,
      },
      {
        q: "おむつ替え台はどこにありますか？",
        a: "バリアフリートイレ（多機能トイレ）に設置されていることが多いです。ショッピングモール・駅ビル・大型施設はほぼ完備。公園は管理棟近くのトイレを確認してください。ベビーカーナビでもおむつ替え台のある施設を検索できます。",
        link: null,
        linkLabel: null,
      },
    ],
  },
  {
    category: "月齢・年齢別おでかけ",
    emoji: "👶",
    items: [
      {
        q: "赤ちゃんはいつからおでかけできますか？",
        a: "一般的に生後1ヶ月健診後から短時間の外出が可能です。生後2〜3ヶ月は近所の散歩、生後4〜6ヶ月から少し遠くのスポットへ。ただし人混み・病院・繁華街は避け、気温・時間・体調に合わせてください。",
        link: "/articles/zero-age-outing",
        linkLabel: "詳しくはこちら：0歳の赤ちゃんはいつから外出できる？",
      },
      {
        q: "0歳の赤ちゃんと行けるスポットはありますか？",
        a: "はい、多数あります。授乳室完備の水族館・屋内遊び場・ショッピングモール・広い公園などが人気です。ベビーカーナビでは月齢フィルターで0歳向けスポットを絞り込めます。",
        link: "/articles/baby-first-outing",
        linkLabel: "詳しくはこちら：赤ちゃんの初めてのおでかけ",
      },
      {
        q: "1歳の子どもとのおでかけで注意することは？",
        a: "歩き始めた1歳は目が離せません。柵のある場所・砂場・水遊び広場が人気。まだベビーカーと抱っこ紐を併用する時期です。お腹が空くとぐずりやすいので、食事・おやつのタイミングを計画に組み込みましょう。",
        link: "/articles/1year-old-outing",
        linkLabel: "詳しくはこちら：1歳のおでかけ完全ガイド",
      },
      {
        q: "2歳のイヤイヤ期でもおでかけできますか？",
        a: "できます！2歳は好奇心が旺盛でおでかけが楽しい時期でもあります。「どっちから行く？」と選択肢を与える・帰る時間を事前に予告する・お腹が空く前にご飯を入れるなどのコツで楽しいおでかけになります。",
        link: "/articles/2year-old-outing",
        linkLabel: "詳しくはこちら：2歳のおでかけ完全ガイド",
      },
    ],
  },
  {
    category: "子連れランチ・レストラン",
    emoji: "🍽️",
    items: [
      {
        q: "ベビーカーで入れるレストランの見分け方は？",
        a: "入口のドア幅・段差の有無・ベビーチェアの有無を事前確認することが重要です。予約時に「ベビーカーで行きます」と伝えると配慮してもらえることが多いです。ベビーカーナビでは子連れOKのレストランを掲載しています。",
        link: "/articles/restaurant-tips",
        linkLabel: "詳しくはこちら：ベビーカーで入れるレストランの見分け方",
      },
      {
        q: "子連れに優しいショッピングモールはどこですか？",
        a: "授乳室・おむつ替え台・ベビーカー貸出・キッズスペースが充実したモールが子連れに最適です。イオンモール・ルクア（大阪）・ラゾーナ川崎・ラウンドワン内のモールなどは設備が充実しています。",
        link: "/articles/shopping-mall-stroller",
        linkLabel: "詳しくはこちら：ベビーカーに優しいショッピングモール15選",
      },
    ],
  },
  {
    category: "エリア別おでかけ",
    emoji: "🗾",
    items: [
      {
        q: "東京でおすすめの子連れスポットはどこですか？",
        a: "上野動物園・東京ディズニーランド・お台場アクアパーク品川・新宿御苑・昭和記念公園などが人気です。ベビーカーナビでは東京都内100以上のスポットを掲載しています。",
        link: "/articles/free-kids-spots-tokyo",
        linkLabel: "詳しくはこちら：東京の子供が無料で遊べる場所25選",
      },
      {
        q: "沖縄に赤ちゃんを連れて行けますか？",
        a: "もちろんです！美ら海水族館はベビーカー貸出・授乳室完備。イオンモール沖縄ライカムは授乳室が12か所以上あります。飛行機は航空会社によって搭乗可能月齢が異なるため事前確認が必要です。",
        link: "/articles/okinawa-guide",
        linkLabel: "詳しくはこちら：沖縄 子連れおでかけ完全ガイド",
      },
      {
        q: "雨の日に子どもと行ける場所はありますか？",
        a: "水族館・科学館・屋内遊び場（ボーネルンドなど）・ショッピングモール・図書館などが雨の日の定番です。ベビーカーナビでは「室内」タグで絞り込み検索できます。",
        link: "/articles/rainy-day-spots",
        linkLabel: "詳しくはこちら：雨の日でも大丈夫！室内スポット特集",
      },
    ],
  },
  {
    category: "サービスについて",
    emoji: "❓",
    items: [
      {
        q: "ベビーカーナビは無料で使えますか？",
        a: "はい、完全無料でご利用いただけます。会員登録不要でスポット検索・ルート案内が使えます。ログインするとお気に入り保存・口コミ投稿・訪問記録などの機能が使えます。",
        link: null,
        linkLabel: null,
      },
      {
        q: "スポット情報を追加・修正することはできますか？",
        a: "はい。ログイン後に「新しいスポットを投稿する」ボタンからスポット情報を投稿できます。投稿内容は審査後に掲載されます。誤りを見つけた場合はお問い合わせフォームからご連絡ください。",
        link: "/contact",
        linkLabel: "お問い合わせはこちら",
      },
    ],
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>よくある質問</span>
          </nav>
          <h1 className="text-xl font-black">よくある質問（FAQ）</h1>
          <p className="text-[11px] opacity-80 mt-1.5">赤ちゃん・子連れおでかけの疑問を解決します</p>
        </header>

        <main className="p-5 space-y-6">
          {/* 目次 */}
          <nav className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-bold text-gray-500 mb-3">📋 カテゴリから探す</p>
            <div className="flex flex-wrap gap-2">
              {FAQS.map((cat) => (
                <a
                  key={cat.category}
                  href={`#${cat.category}`}
                  className="text-[11px] bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full font-medium hover:bg-brand-100 transition"
                >
                  {cat.emoji} {cat.category}
                </a>
              ))}
            </div>
          </nav>

          {/* FAQ本体 */}
          {FAQS.map((cat) => (
            <section key={cat.category} id={cat.category}>
              <h2 className="text-sm font-black text-gray-700 mb-3 flex items-center gap-2">
                <span>{cat.emoji}</span>{cat.category}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden group"
                  >
                    <summary className="px-5 py-4 cursor-pointer text-sm font-bold text-gray-800 flex items-start justify-between gap-3 list-none hover:bg-gray-50 transition">
                      <span className="flex-1">Q. {item.q}</span>
                      <span className="text-brand-400 shrink-0 text-base leading-snug group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-5 pb-5 border-t border-gray-50">
                      <p className="text-sm text-gray-700 leading-relaxed mt-3">{item.a}</p>
                      {item.link && (
                        <Link
                          href={item.link}
                          className="inline-block mt-3 text-xs text-brand-500 font-bold hover:underline"
                        >
                          → {item.linkLabel}
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center space-y-3 border border-brand-100">
            <p className="text-sm font-bold">まだ疑問が解決しない場合は</p>
            <div className="flex gap-2.5">
              <Link
                href="/contact"
                className="flex-1 py-3 rounded-xl border-2 border-brand-400 text-brand-600 text-xs font-bold hover:bg-brand-50 transition text-center"
              >
                📩 お問い合わせ
              </Link>
              <Link
                href="/"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-xs font-bold hover:opacity-90 transition text-center"
              >
                🚼 アプリを使う
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <section>
            <h2 className="text-sm font-bold text-gray-700 mb-3">📚 関連記事</h2>
            <div className="space-y-2">
              {[
                { href: "/articles/train-stroller-manner", label: "ベビーカーで電車に乗るときのマナー", emoji: "🚃" },
                { href: "/articles/zero-age-outing", label: "0歳の赤ちゃんはいつから外出できる？", emoji: "🌱" },
                { href: "/articles/nursing-room-tips", label: "授乳室の見つけ方と上手な使い方", emoji: "🍼" },
                { href: "/articles/stroller-choosing-guide", label: "ベビーカーの選び方完全ガイド", emoji: "🛒" },
                { href: "/articles/restaurant-tips", label: "ベビーカーで入れるレストランの見分け方", emoji: "🍽️" },
              ].map((a) => (
                <Link key={a.href} href={a.href}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition text-sm text-gray-700 hover:text-brand-600">
                  <span>{a.emoji}</span>
                  <span className="font-medium">{a.label}</span>
                  <span className="ml-auto text-gray-300 text-xs">→</span>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
