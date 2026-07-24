import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】七五三 子連れ・赤ちゃん連れ完全ガイド｜着物・神社・写真・当日の流れまとめ | ベビーカーナビ",
  description: "七五三に赤ちゃん・子連れで参加するための完全ガイド。着物選び・神社でのベビーカー・授乳室情報・当日のスケジュール・記念写真のポイントを詳しく解説。3歳・5歳・7歳の準備にも。",
  keywords: ["七五三 子連れ", "七五三 赤ちゃん連れ", "七五三 授乳室", "七五三 着物 赤ちゃん", "七五三 神社 ベビーカー", "七五三 スケジュール", "七五三 下の子 連れて行く"],
  openGraph: {
    title: "七五三 子連れ・赤ちゃん連れ完全ガイド | ベビーカーナビ",
    description: "着物・神社・写真・当日の流れを徹底解説。下の子（赤ちゃん）を連れての七五三参りを安心して楽しめます。",
    url: "https://stroller-navi.vercel.app/articles/shichigosan-guide",
    siteName: "ベビーカーナビ", locale: "ja_JP", type: "article",
  },
};

export default function ShichigosanGuidePage() {
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "七五三に赤ちゃんを連れて行っていいですか？", "acceptedAnswer": { "@type": "Answer", "text": "もちろん大丈夫です。ただし神社の参道は砂利・段差が多くベビーカーが難しい場所もあります。抱っこ紐と授乳グッズを準備して、ロング儀式に備えて早め早めに行動しましょう。" } },
      { "@type": "Question", "name": "七五三の神社参りでの授乳はどうすればいい？", "acceptedAnswer": { "@type": "Answer", "text": "多くの神社には授乳室はありません。社務所に相談すれば一室を貸していただける場合もあります。授乳ケープを持参するか、事前に近くの授乳室のある施設（ショッピングモールなど）を確認しておきましょう。" } },
      { "@type": "Question", "name": "七五三はいつ行くのがベスト？", "acceptedAnswer": { "@type": "Answer", "text": "本来は11月15日ですが、前後の週末も参拝OKです。混雑を避けるなら平日、または11月を外して10月の週末を選ぶと比較的空いています。" } },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>七五三子連れガイド</span>
          </nav>
          <div className="text-4xl mb-2">⛩️</div>
          <h1 className="text-lg font-black leading-tight">七五三 子連れ・赤ちゃん連れ<br />完全ガイド【2026年版】</h1>
          <p className="text-[11px] opacity-80 mt-2">着物・神社・写真・当日スケジュール / 読了時間：約9分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年7月" readTime="約9分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">七五三に下の子（赤ちゃん）を連れていける？</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                上の子の七五三に赤ちゃんや下の子を連れていくケースは非常に多いです。「神社の砂利道はベビーカーで大丈夫？」「授乳はどこでする？」など心配事をまとめて解決します。
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: "⛩️", text: "神社のバリアフリー情報" },
                  { icon: "🍼", text: "授乳・おむつ替えのコツ" },
                  { icon: "👘", text: "着物での授乳・抱っこ" },
                  { icon: "📅", text: "混雑しない日程の選び方" },
                ].map(i => (
                  <div key={i.text} className="bg-pink-50 rounded-xl p-3 text-xs text-gray-700 flex gap-2 items-center">
                    <span>{i.icon}</span><span>{i.text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">⛩️ 神社でのベビーカー・バリアフリー情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                七五三の神社参りでよく問題になるのが<strong>砂利道・石段の多さ</strong>です。大きな神社ほど参道が長く、ベビーカーでの移動が難しい場合があります。
              </p>
              <div className="space-y-3">
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-800 mb-2">⚠️ ベビーカーでの注意点</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・参道の砂利道は車輪が取られやすい → <strong>抱っこ紐に切り替え</strong>がおすすめ</li>
                    <li>・本殿までの石段はベビーカー不可の神社も → 事前に神社に確認</li>
                    <li>・境内の授乳室は基本的にない → 授乳ケープ必携</li>
                    <li>・一部の大きな神社（明治神宮・住吉大社など）はバリアフリールートあり</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-800 mb-2">✅ 快適に参拝するための準備</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・抱っこ紐（ベビーカーのバックアップとして必携）</li>
                    <li>・授乳ケープ</li>
                    <li>・おむつ替えシート（境内にないことも多い）</li>
                    <li>・着替え2セット（着物が汚れた時用・赤ちゃん分）</li>
                    <li>・お気に入りのおもちゃ（祈祷中の大人しくする対策）</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🍼 授乳・おむつ替えの場所を事前に確認</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                七五三の神社は授乳室がないことがほとんどです。以下の対策を事前に準備しておきましょう。
              </p>
              <div className="space-y-2">
                {[
                  { title: "授乳ケープを必ず持参", desc: "屋外でも目隠しができる大判のケープがあると安心。神社の休憩所や木陰を活用" },
                  { title: "近くのショッピングモールを事前確認", desc: "神社参拝前・後に立ち寄れる授乳室ある施設を調べておく" },
                  { title: "神社の社務所に相談", desc: "「授乳できる場所はありますか？」と聞くと一室を貸してくれる神社もある" },
                  { title: "完全ミルクなら保温ポットと水を持参", desc: "祈祷の待ち時間は予想より長くなることも。準備多めに" },
                ].map(item => (
                  <div key={item.title} className="border border-gray-100 rounded-xl p-3.5">
                    <p className="text-xs font-bold text-gray-800 mb-1">🍼 {item.title}</p>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">👘 着物・祝い着を着せての参拝ポイント</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold text-xs mb-2">3歳・7歳の着物選び（赤ちゃん連れ親視点）</p>
                  <ul className="text-xs space-y-1.5">
                    <li className="flex gap-2"><span className="text-pink-500">✓</span><span>着付け時間を考慮して<strong>朝は余裕をもって準備</strong>（着付け60〜90分が目安）</span></li>
                    <li className="flex gap-2"><span className="text-pink-500">✓</span><span>赤ちゃんのお世話と着付けを同時進行するのは困難 → <strong>夫婦で役割分担</strong>を事前に決める</span></li>
                    <li className="flex gap-2"><span className="text-pink-500">✓</span><span>ママが着物の場合、授乳は難しい → <strong>当日だけ搾乳・ミルク</strong>に切り替える選択肢も</span></li>
                    <li className="flex gap-2"><span className="text-pink-500">✓</span><span>着物での抱っこ・抱っこ紐は着崩れリスクあり → <strong>抱っこはパパに任せる</strong></span></li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-pink-800 mb-2">💡 着物レンタル vs. 購入</p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    子どもの成長は早いため、着物は<strong>レンタルが主流</strong>。七五三シーズン（11月）は早めの予約（7〜8月）が必要。写真スタジオとのセット契約（衣装+撮影）がコストパフォーマンスが良いことが多いです。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">📅 混雑を避ける日程の選び方</h2>
              <div className="space-y-2">
                {[
                  { timing: "10月の週末", rank: "◎ おすすめ", desc: "11月より空いていて天気も安定。神社・フォトスタジオともに予約が取りやすい" },
                  { timing: "11月の平日（15日前後）", rank: "○ 空いている", desc: "本来の七五三の日。平日なので参拝客が少なく、ゆっくりお参りできる" },
                  { timing: "11月の週末", rank: "△ 混雑注意", desc: "最も混む時期。有名神社は2〜3時間待ちも。早朝（8〜9時台）出発で混雑前に" },
                  { timing: "12月以降", rank: "◎ 空いている", desc: "年内に済ませればOK。混雑ゼロ・予約取りやすい・スタジオも安くなる場合あり" },
                ].map(item => (
                  <div key={item.timing} className="border border-gray-100 rounded-xl p-3.5 flex gap-3">
                    <div className="shrink-0">
                      <p className="text-xs font-bold text-gray-800">{item.timing}</p>
                      <p className={`text-[10px] font-bold mt-0.5 ${item.rank.startsWith("◎") ? "text-green-600" : item.rank.startsWith("○") ? "text-blue-600" : "text-amber-600"}`}>{item.rank}</p>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">📷 七五三の記念写真アイデア</h2>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  { idea: "七五三の主役+下の子（赤ちゃん）ショット", tip: "きょうだい写真は一生の宝物。着物姿のお兄ちゃん/お姉ちゃんと赤ちゃんを一緒に撮ろう" },
                  { idea: "家族4人（or 5人）全員集合写真", tip: "着物・スーツ・ドレスで揃えると統一感が出る。神社の門や本殿前が定番背景" },
                  { idea: "赤ちゃんの手と七五三の子の手", tip: "サイズ差が愛らしい手の写真。10年後に見ると感動する一枚になる" },
                  { idea: "千歳飴を持たせる", tip: "七五三の象徴・千歳飴。子ども2人に持たせて撮ると可愛い写真になる" },
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

            <section className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">⛩️ まとめ：七五三を赤ちゃん連れで成功させるポイント</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "抱っこ紐・授乳ケープは必ず持参",
                  "神社の参道はベビーカーより抱っこ紐が動きやすい",
                  "授乳室のある近隣施設を事前確認",
                  "当日のスケジュールに余裕を持つ（着付け90分+）",
                  "混雑を避けるなら10月・12月がおすすめ",
                  "きょうだい写真は一生の宝物になる",
                ].map((t, i) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-rose-500 font-bold">{i + 1}.</span><span>{t}</span>
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
                  { href: "/articles/christmas-baby", label: "🎄 赤ちゃんとはじめてのクリスマス" },
                  { href: "/articles/baby-onsen", label: "♨️ 赤ちゃん連れ温泉旅行ガイド" },
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
