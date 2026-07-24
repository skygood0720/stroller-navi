import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】鎌倉 子連れ・赤ちゃん連れおでかけ完全ガイド｜大仏・長谷寺・授乳室まとめ | ベビーカーナビ",
  description: "鎌倉で赤ちゃん・子連れでおでかけするための完全ガイド。鎌倉大仏・長谷寺・由比ガ浜・小町通りの授乳室・ベビーカー対応を徹底解説。東京からの日帰りコースも紹介。",
  keywords: ["鎌倉 子連れ", "鎌倉 赤ちゃん", "鎌倉 授乳室", "鎌倉大仏 子連れ", "鎌倉 ベビーカー", "長谷寺 子連れ", "鎌倉 日帰り 子連れ", "鎌倉 おでかけ"],
  openGraph: {
    title: "鎌倉 子連れ・赤ちゃん連れおでかけ完全ガイド | ベビーカーナビ",
    description: "大仏・長谷寺・由比ガ浜の授乳室・ベビーカー情報。東京からの日帰り子連れ鎌倉観光を完全サポート。",
    url: "https://stroller-navi.vercel.app/articles/kamakura-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function KamakuraGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "鎌倉 子連れ・赤ちゃん連れおでかけ完全ガイド",
    "description": "鎌倉大仏・長谷寺・由比ガ浜の授乳室・ベビーカー情報と東京からの日帰りコース",
    "url": "https://stroller-navi.vercel.app/articles/kamakura-guide",
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
        "name": "鎌倉はベビーカーで観光できますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "由比ガ浜の海岸沿いや鎌倉駅周辺はベビーカーで動けますが、小町通りや寺院の参道は石畳・段差が多く難しい場所があります。抱っこ紐との併用がおすすめです。" }
      },
      {
        "@type": "Question",
        "name": "鎌倉の授乳室はどこにありますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "鎌倉駅東口の「鎌倉中央食品市場」近くのトイレや、長谷エリアの「鎌倉市子育て支援センター」付近に授乳スペースがあります。由比ガ浜海水浴場の海の家（夏季）にも設置されています。" }
      },
      {
        "@type": "Question",
        "name": "東京から鎌倉へ子連れで行くには？",
        "acceptedAnswer": { "@type": "Answer", "text": "東京・渋谷から湘南新宿ライン直通（約55分）、または横浜乗り換えで約1時間。週末は混雑するため、早めの出発（8時台）がおすすめです。ベビーカーはドア付近のスペースに置けます。" }
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
            <span>鎌倉子連れガイド</span>
          </nav>
          <h1 className="text-lg font-black leading-tight">
            【2026年最新】鎌倉 子連れ・赤ちゃん連れ<br />おでかけ完全ガイド
          </h1>
          <p className="text-[11px] opacity-80 mt-2">大仏・長谷寺・由比ガ浜 / 読了時間：約8分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年7月" readTime="約8分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📋 この記事でわかること</h2>
              <ol className="space-y-2 text-sm text-brand-700">
                {["鎌倉の子連れ観光で知っておくべき基本情報", "鎌倉大仏（高徳院）のベビーカー・授乳室情報", "長谷寺の子連れ攻略", "小町通り・若宮大路の注意点", "由比ガ浜で海デビュー（赤ちゃん連れのコツ）", "東京からのアクセスと混雑回避"].map((item, i) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-400 font-bold">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">鎌倉は子連れに向いている？</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                東京から約1時間でアクセスできる古都・鎌倉は、週末の家族旅行先として根強い人気を誇ります。海・山・歴史スポットが小さなエリアに凝縮されており、赤ちゃん連れでも楽しめます。ただし鎌倉の観光地は<strong>石畳・坂道・石段が多く</strong>、ベビーカーより抱っこ紐が活躍する場面が多いのも事実です。
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: "✅", text: "東京から1時間でアクセス" },
                  { icon: "✅", text: "海・緑・歴史を一度に楽しめる" },
                  { icon: "✅", text: "長谷エリアはコンパクトで回りやすい" },
                  { icon: "⚠️", text: "石畳・坂道が多くベビーカー困難箇所あり" },
                ].map((item) => (
                  <div key={item.text} className="bg-gray-50 rounded-xl p-3 text-xs text-gray-700 flex gap-2">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🗿 鎌倉大仏（高徳院）の子連れ情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                鎌倉観光のシンボル、青銅製の露座大仏（国宝）。高さ11.3mの大仏は子どもにも大迫力。長谷駅から徒歩10分ほどでアクセスできます。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>境内の参道はほぼフラット、ベビーカーで入場可能</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>大仏内部見学（別途20円）は通路が狭くベビーカー不可だが、外観だけで十分満足できる</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>入場料：大人300円、小学生150円、未就学児無料</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>授乳室：境内内のトイレに多目的室あり（要確認）</span></li>
                <li className="flex gap-2"><span className="text-amber-500">⚠</span><span>ベビーカーは境内入口のベビーカー置き場に停めて見学するのがおすすめ</span></li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🌸 長谷寺の子連れ攻略</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「花の寺」とも呼ばれる長谷寺は、長谷観音と美しい庭園で有名。鎌倉大仏から徒歩5分で、あじさいの季節（6月）は特に人気のスポットです。
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
                <p className="text-xs font-bold text-amber-800 mb-2">⚠️ ベビーカー注意</p>
                <p className="text-xs text-gray-700">境内は階段・急な石段が多く、ベビーカーでは回れないエリアがあります。海側の見晴台や観音堂は石段を上がる必要があるため、抱っこ紐に切り替えるか、入口付近のベビーカー置き場を利用しましょう。</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>入場料：大人400円、小学生200円、未就学児無料</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>弁天窟（洞窟）は赤ちゃんも楽しめる体験（少し薄暗い）</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>境内の「海光庵」カフェでひと休み（眺め良し）</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>おむつ替え台：境内トイレにあり</span></li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🏖️ 由比ガ浜で海デビュー</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                江ノ電・長谷駅から徒歩10分。由比ガ浜は鎌倉を代表するビーチです。赤ちゃんの「海デビュー」の場所として選ぶ親御さんも多いスポットです。
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold text-xs mb-1">🌊 赤ちゃん連れで海に行く際のポイント</p>
                  <ul className="space-y-1 text-xs">
                    <li>・砂浜はベビーカー困難：ビーチテントと敷物を持参</li>
                    <li>・日差しが強いため帽子・ラッシュガード・日焼け止め必携</li>
                    <li>・水に濡れた砂が服に入るので着替えを2セット用意</li>
                    <li>・夏は熱中症リスクあり。10〜11時か15時以降がおすすめ</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-xs mb-1">🍼 授乳室・おむつ替え</p>
                  <ul className="space-y-1 text-xs">
                    <li>・夏季の海の家（海水浴場）には授乳スペースあり</li>
                    <li>・由比ガ浜海浜公園内のトイレにおむつ替え台設置あり</li>
                    <li>・長谷駅近くのコンビニでも利用可能</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🗺️ 子連れおすすめモデルコース</h2>
              <div className="space-y-3">
                {[
                  { time: "8:30", place: "鎌倉駅到着", desc: "荷物をコインロッカーに預ける。江ノ電で長谷駅へ" },
                  { time: "9:15", place: "鎌倉大仏（高徳院）", desc: "開門直後は空いている。大仏をバックに写真撮影" },
                  { time: "10:00", place: "長谷寺", desc: "庭園散策。入口近くのカフェでひと休みもおすすめ" },
                  { time: "11:30", place: "由比ガ浜", desc: "徒歩で海へ。波打ち際で遊ぶ・砂遊び" },
                  { time: "12:30", place: "長谷エリアでランチ", desc: "長谷駅周辺の飲食店は子連れ対応が多め" },
                  { time: "14:00", place: "小町通り散策", desc: "江ノ電で鎌倉駅へ。おみやげショッピング（混雑注意）" },
                  { time: "15:30", place: "帰路", desc: "赤ちゃんが疲れる前に早めに出発" },
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

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🚃 東京からのアクセス</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs mb-1">東京・渋谷・新宿から</p>
                  <p className="text-xs">湘南新宿ライン 直通で鎌倉まで約55分〜1時間5分。乗り換えなしで便利</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs mb-1">横浜から</p>
                  <p className="text-xs">JR横須賀線で約25分。横浜で一度休憩するのもあり</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs mb-1 text-amber-800">⚠️ 混雑について</p>
                  <p className="text-xs text-gray-700">土日・祝日は鎌倉行きの電車が非常に混雑。早朝（8時前）出発か、帰りは16時前に切り上げると楽。江ノ電も激混みのため抱っこ紐推奨</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-50 to-orange-50 rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">まとめ：鎌倉子連れ旅行のポイント</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-brand-500 font-bold">1.</span><span>抱っこ紐必携。石畳・石段が多くベビーカーは補助的に</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">2.</span><span>長谷エリア（大仏・長谷寺・海）をまとめて回ると効率的</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">3.</span><span>東京からは8時台出発で混雑前に到着できる</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">4.</span><span>小町通りは休日昼間は激混み。早朝か夕方に</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">5.</span><span>由比ガ浜の海デビューは熱中症対策をしっかりと</span></li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📖 関連記事</h2>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { href: "/articles/yokohama-guide", text: "横浜 子連れおでかけガイド" },
                  { href: "/articles/tokyo-aquarium-guide", text: "東京の水族館 子連れ完全ガイド" },
                  { href: "/articles/hakone-guide", text: "箱根 子連れおでかけガイド" },
                  { href: "/articles/water-play-spots", text: "赤ちゃん・子連れ水遊びスポット特集" },
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
