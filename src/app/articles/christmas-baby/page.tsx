import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】赤ちゃんとはじめてのクリスマス｜飾り付け・プレゼント・写真アイデアまとめ | ベビーカーナビ",
  description: "0歳・1歳の赤ちゃんとのはじめてのクリスマスを最高の思い出にするガイド。安全な飾り付け、月齢別おすすめプレゼント、サンタ衣装、記念写真のアイデアを解説。",
  keywords: ["赤ちゃん クリスマス", "0歳 クリスマス プレゼント", "1歳 クリスマス", "赤ちゃん サンタ 衣装", "クリスマス 子連れ", "赤ちゃん クリスマスプレゼント 何"],
  openGraph: {
    title: "赤ちゃんとはじめてのクリスマス | ベビーカーナビ",
    description: "0歳・1歳の赤ちゃんとのはじめてのクリスマスを最高の思い出に。プレゼント・飾り付け・写真アイデアまとめ。",
    url: "https://stroller-navi.vercel.app/articles/christmas-baby",
    siteName: "ベビーカーナビ", locale: "ja_JP", type: "article",
  },
};

export default function ChristmasBabyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "0歳の赤ちゃんへのクリスマスプレゼントは何がいい？", "acceptedAnswer": { "@type": "Answer", "text": "0歳には視覚・聴覚・触覚を刺激するものがおすすめです。オーボールなどのやわらかいボール、音が出るおもちゃ、布絵本、ベビーベッドに付けるメリーなどが人気です。" } },
      { "@type": "Question", "name": "クリスマスツリーは赤ちゃんがいても飾れる？", "acceptedAnswer": { "@type": "Answer", "text": "飾れますが、誤飲や転倒リスクがあるオーナメントは赤ちゃんの手の届かない場所に。ベビー用のやわらかい布製ツリーや、高い棚に飾るミニツリーなど工夫しましょう。" } },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>赤ちゃんとクリスマス</span>
          </nav>
          <div className="text-4xl mb-2">🎄</div>
          <h1 className="text-lg font-black leading-tight">赤ちゃんとはじめてのクリスマス<br />完全ガイド【2026年版】</h1>
          <p className="text-[11px] opacity-80 mt-2">プレゼント・飾り付け・サンタ衣装・写真 / 読了時間：約8分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年7月" readTime="約8分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🎄 はじめてのクリスマスを特別な日にしよう</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                赤ちゃんにとってはじめてのクリスマス。本人には記憶がなくても、パパ・ママにとっては一生忘れられない宝物の日になります。「何をしてあげたらいい？」「プレゼントは何がいい？」そんな疑問をまとめました。
              </p>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🎁 月齢別おすすめクリスマスプレゼント</h2>
              <div className="space-y-4">
                {[
                  {
                    age: "0〜3ヶ月",
                    items: [
                      { name: "メリー（ベッドモービル）", desc: "くるくる回るものを目で追う練習になる。音楽付きのものは寝かしつけにも◎" },
                      { name: "プレイマット", desc: "うつ伏せ練習にぴったり。カラフルなデザインで視覚刺激にもなる" },
                      { name: "ファーストトイ（ぬいぐるみ）", desc: "長く使える定番プレゼント。洗えるものが清潔で安心" },
                    ],
                  },
                  {
                    age: "4〜8ヶ月",
                    items: [
                      { name: "オーボール・ラトル", desc: "持ちやすく口に入れても安全。赤ちゃんが自分で動かせる喜びを体験できる" },
                      { name: "布絵本", desc: "しゃぶっても安全な素材。いないいないばあができるものが人気" },
                      { name: "バンボやハイローチェア", desc: "一人座りを始める時期に便利なアイテム" },
                    ],
                  },
                  {
                    age: "9〜12ヶ月",
                    items: [
                      { name: "プッシュウォーカー", desc: "つかまり立ち・伝い歩きの練習に。押して歩く達成感が大好き" },
                      { name: "積み木・ブロック", desc: "つかむ・積む・倒すで指先の発達を促す。大きめサイズで安全" },
                      { name: "音楽おもちゃ（ピアノ・太鼓）", desc: "叩くと音が出る喜びで表情がいっきに豊かになる" },
                    ],
                  },
                ].map(group => (
                  <div key={group.age}>
                    <p className="text-xs font-bold text-red-600 mb-2 bg-red-50 inline-block px-2 py-0.5 rounded-full">{group.age}</p>
                    <div className="space-y-2">
                      {group.items.map(item => (
                        <div key={item.name} className="border border-gray-100 rounded-xl p-3">
                          <p className="text-xs font-bold text-gray-800 mb-0.5">🎁 {item.name}</p>
                          <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🎅 サンタ衣装・飾り付けアイデア</h2>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-red-800 mb-2">👘 衣装選びのポイント</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・赤と白のサンタロンパースが定番。70〜80サイズが1歳前後に合いやすい</li>
                    <li>・サンタ帽は取れやすいので写真のときだけでOK</li>
                    <li>・トナカイ衣装（角付き）も可愛くて人気</li>
                    <li>・家族でお揃いのサンタカラーでまとめると統一感が出る</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-800 mb-2">🌲 赤ちゃんがいる家の飾り付け</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・<strong>ツリーは台の上や高い棚に置く</strong>：引っ張り倒しリスクを回避</li>
                    <li>・オーナメントは布製・軽量のものに。ガラス製は転落・破損リスクあり</li>
                    <li>・電飾コードは赤ちゃんが触れない場所に束ねておく</li>
                    <li>・窓にステッカーを貼るだけでもクリスマスらしい雰囲気に</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">📷 はじめてのクリスマス写真アイデア</h2>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  { idea: "ツリーの前でサンタ衣装", tip: "ツリーを背景に自然光で撮影。連写で表情をたくさん残そう" },
                  { idea: "プレゼントボックスの中に入れる", tip: "大きな赤いボックスに赤ちゃんを座らせて撮影。Instagramで大人気のスタイル" },
                  { idea: "靴下を持って（ファースト靴下）", tip: "クリスマスカラーの靴下を手に持たせて。サイズ感の記念にもなる" },
                  { idea: "家族3人でお揃いコーデ", tip: "赤・白・緑のクリスマスカラーに揃えると統一感◎" },
                  { idea: "「はじめてのクリスマス」ボードと一緒に", tip: "「First Christmas 2026」と書いたボードを100均で手作りできる" },
                ].map(item => (
                  <div key={item.idea} className="border border-gray-100 rounded-xl p-3 flex gap-3">
                    <span className="text-xl shrink-0">📸</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{item.idea}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🍽 クリスマスケーキ・ごはんの注意点</h2>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-3">
                <p className="text-xs font-bold text-amber-800 mb-2">⚠️ 1歳未満の赤ちゃんにクリスマスケーキは？</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  生クリーム・砂糖が多いケーキは1歳を過ぎてから少量ずつ。1歳未満の場合は「赤ちゃん用スマッシュケーキ」（お芋やバナナで作ったケーキ）をSNSで検索すると可愛いレシピがたくさんあります。
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                パパ・ママのクリスマスディナーの際は、赤ちゃんはいつもどおりの離乳食で問題ありません。「家族でテーブルを囲む」という体験自体が赤ちゃんにとっての特別なクリスマスになります。
              </p>
            </section>

            <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">🎄 まとめ：はじめてのクリスマスを記念日にしよう</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "プレゼントは月齢に合った感覚遊びのものを選ぶ",
                  "ツリーは赤ちゃんの手が届かない高さに置く",
                  "写真はサンタ衣装×ツリー前が鉄板コーデ",
                  "ケーキは1歳を過ぎてから少量で",
                  "成長記録アプリに「はじめてのクリスマス」として保存しよう",
                ].map((t, i) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-red-500 font-bold">{i + 1}.</span>
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
                  { href: "/articles/halloween-baby", label: "🎃 赤ちゃんとはじめてのハロウィン" },
                  { href: "/articles/shichigosan-guide", label: "⛩️ 七五三 子連れガイド" },
                  { href: "/articles/baby-goods/ehon", label: "📚 0歳から楽しめる絵本ガイド" },
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
