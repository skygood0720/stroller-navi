import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】赤ちゃんとはじめてのハロウィン｜仮装・お菓子・写真アイデアまとめ | ベビーカーナビ",
  description: "0歳・1歳の赤ちゃんとのはじめてのハロウィンを120%楽しむガイド。かぼちゃ仮装の選び方、子連れで参加できるイベント、記念写真のアイデア、安全なお菓子選びを解説。",
  keywords: ["赤ちゃん ハロウィン", "0歳 ハロウィン 仮装", "1歳 ハロウィン", "ハロウィン 赤ちゃん 衣装", "ハロウィン 子連れ", "赤ちゃん 仮装 アイデア"],
  openGraph: {
    title: "赤ちゃんとはじめてのハロウィン | ベビーカーナビ",
    description: "0歳・1歳の赤ちゃんとのはじめてのハロウィンを120%楽しむガイド。仮装・写真・イベント情報まとめ。",
    url: "https://stroller-navi.vercel.app/articles/halloween-baby",
    siteName: "ベビーカーナビ", locale: "ja_JP", type: "article",
  },
};

export default function HalloweenBabyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "0歳の赤ちゃんにハロウィン仮装は大丈夫？", "acceptedAnswer": { "@type": "Answer", "text": "衣装の素材が肌に優しいもの（綿素材）を選び、長時間着せすぎなければ問題ありません。帽子や飾りが外れて誤飲しないよう、縫い付け・接着が甘いパーツに注意しましょう。" } },
      { "@type": "Question", "name": "赤ちゃんのハロウィン写真はどう撮る？", "acceptedAnswer": { "@type": "Answer", "text": "自然光が入る窓際で撮影するのが最もきれいに撮れます。かぼちゃのランタンや秋の落ち葉などプロップスを使うとフォトスタジオ級の写真が撮れます。連写モードで表情を多く撮るのがコツです。" } },
      { "@type": "Question", "name": "子連れで参加できるハロウィンイベントは？", "acceptedAnswer": { "@type": "Answer", "text": "ショッピングモールのハロウィンイベントは子連れに最適です。キャラクターとの写真撮影、お菓子配り、仮装パレードなど、授乳室・おむつ替え台も完備しているモールが多くおすすめです。" } },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>赤ちゃんとハロウィン</span>
          </nav>
          <div className="text-4xl mb-2">🎃</div>
          <h1 className="text-lg font-black leading-tight">赤ちゃんとはじめてのハロウィン<br />完全ガイド【2026年版】</h1>
          <p className="text-[11px] opacity-80 mt-2">仮装・写真・イベント・お菓子 / 読了時間：約7分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年7月" readTime="約7分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🎃 はじめてのハロウィンをとことん楽しもう</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                赤ちゃんの「はじめてのハロウィン」は、パパ・ママにとっても一生の思い出になる特別な体験です。「どんな衣装を着せよう」「写真はどう撮ろう」「イベントに連れて行っていいの？」そんな疑問にまとめてお答えします。
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: "👗", text: "月齢別おすすめ衣装" },
                  { icon: "📷", text: "映える写真の撮り方" },
                  { icon: "🏪", text: "子連れイベントの選び方" },
                  { icon: "🍬", text: "赤ちゃんに安全なお菓子" },
                ].map(i => (
                  <div key={i.text} className="bg-orange-50 rounded-xl p-3 text-xs text-gray-700 flex gap-2 items-center">
                    <span className="text-base">{i.icon}</span><span>{i.text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">👗 月齢別・おすすめ衣装の選び方</h2>
              <div className="space-y-4">
                {[
                  {
                    age: "0〜3ヶ月",
                    title: "カボチャ・かぼちゃベビーロンパース",
                    desc: "首がまだすわっていない時期。体に負担の少ないロンパースタイプが最適。オレンジのかぼちゃロンパースや、クモの巣柄のベビー服を選ぼう。帽子は取れやすいので写真のときだけでOK。",
                    tips: "素材は綿100%が安心。締め付けが少なく脱着しやすいものを選ぶ",
                  },
                  {
                    age: "4〜8ヶ月",
                    title: "魔女・ドラキュラ・かぼちゃお化け",
                    desc: "少し動き回るようになる時期。ロンパースに小道具を組み合わせると写真映えが抜群。魔女の帽子（柔らかい素材）、コウモリの羽根つきロンパースが人気。",
                    tips: "動き回るので引っかかるフリルや紐には注意。写真撮影後はシンプルな服に着替えよう",
                  },
                  {
                    age: "9〜12ヶ月",
                    title: "かぼちゃ全身衣装・キャラクター仮装",
                    desc: "ハイハイや伝い歩きを始める時期。膝が保護されているコスチュームや、動きやすいセパレートタイプが◎。みんなが笑顔になるかぼちゃの全身着ぐるみが大人気。",
                    tips: "長時間は暑くなりやすい。室内でのみ着用して、外出時は普段着に重ねられるタイプが便利",
                  },
                ].map(item => (
                  <div key={item.age} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{item.age}</span>
                      <p className="text-sm font-bold text-gray-800">{item.title}</p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-[10px] text-orange-700 bg-orange-50 rounded-lg p-2">💡 {item.tips}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">📷 記念写真を上手に撮るコツ</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-amber-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-800 mb-2">📸 絶対押さえたいプロップス（小道具）</p>
                  <ul className="text-xs space-y-1">
                    <li>🎃 かぼちゃのランタン（おもちゃ）</li>
                    <li>🍂 秋の葉っぱ、どんぐり（100均で揃う）</li>
                    <li>🕷️ クモの巣レースや黒いリボン</li>
                    <li>👻 白いシーツでおばけ演出</li>
                    <li>📦 「Trick or Treat」のバスケット</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold mb-2">撮影場所・時間帯</p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">✓</span><span><strong>自然光が入る窓際</strong>が最もきれいに撮れる。午前10〜12時がおすすめ</span></li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">✓</span><span><strong>連写モード</strong>で10〜20枚撮って、一番良い表情を選ぶ</span></li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">✓</span><span>赤ちゃんが<strong>機嫌のいい時間帯</strong>（授乳・昼寝後）に撮影する</span></li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">✓</span><span>撮影後は<strong>成長記録アプリ</strong>に日付と一緒に保存しよう</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🏪 子連れで行けるハロウィンイベント</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                赤ちゃん連れでハロウィンイベントを楽しむには、<strong>ショッピングモールのイベントが最もおすすめ</strong>です。授乳室・おむつ替え台完備、エレベーターあり、雨でも安心の屋内環境が揃っています。
              </p>
              <div className="space-y-2">
                {[
                  { type: "ショッピングモール", emoji: "🏬", pros: "授乳室完備・雨天OK・フードコートあり", cons: "混雑しやすい（10〜12時に行くと比較的空いている）" },
                  { type: "テーマパーク", emoji: "🎡", pros: "フォトスポットが充実・本格的な雰囲気", cons: "入場料がかかる・長時間になりやすい" },
                  { type: "公民館・地域イベント", emoji: "🏘️", pros: "少人数・落ち着いた雰囲気・無料が多い", cons: "開催情報が分かりにくい（市区町村HPを確認）" },
                ].map(ev => (
                  <div key={ev.type} className="border border-gray-100 rounded-xl p-3.5">
                    <p className="text-sm font-bold text-gray-800 mb-1.5">{ev.emoji} {ev.type}</p>
                    <p className="text-[11px] text-green-700">✓ {ev.pros}</p>
                    <p className="text-[11px] text-amber-600 mt-0.5">⚠ {ev.cons}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🍬 赤ちゃんとお菓子の注意点</h2>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-3">
                <p className="text-xs font-bold text-red-800 mb-2">⚠️ 1歳未満の赤ちゃんへのお菓子は与えない</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  ハロウィンのお菓子配りは雰囲気を楽しむものとして、赤ちゃん本人は食べません。「Trick or Treat!」の掛け声とかごを持って参加するだけで十分楽しめます。
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                1歳を過ぎた子どもの場合も、ハチミツを使ったお菓子、硬い飴、小さくて誤嚥しやすいものは避けましょう。ベビーせんべいや赤ちゃん用スナックをかごに入れて「自分専用のお菓子」として持たせてあげると喜びます。
              </p>
            </section>

            <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">🎃 まとめ：はじめてのハロウィンを成功させるコツ</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "衣装は綿素材・脱着しやすいロンパースを選ぶ",
                  "写真は自然光・連写モード・赤ちゃんが機嫌のいい時に",
                  "イベントはショッピングモールが授乳室完備で安心",
                  "1歳未満はお菓子を食べさせない",
                  "成長記録アプリに写真と日付を保存しておこう",
                ].map((t, i) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-orange-500 font-bold">{i + 1}.</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📖 あわせて読みたい</h2>
              <div className="space-y-2">
                {[
                  { href: "/milestone", label: "👶 成長記録をつける — マイルストーントラッカー" },
                  { href: "/articles/christmas-baby", label: "🎄 赤ちゃんとはじめてのクリスマス" },
                  { href: "/articles/shichigosan-guide", label: "⛩️ 七五三 子連れガイド" },
                  { href: "/articles/baby-first-outing", label: "🚼 赤ちゃんとはじめてのおでかけ" },
                ].map(a => (
                  <Link key={a.href} href={a.href} className="flex gap-2 text-sm text-brand-600 hover:underline">
                    <span className="text-gray-300">›</span>{a.label}
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
