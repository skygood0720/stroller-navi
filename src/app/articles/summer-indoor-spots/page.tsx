import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "夏の赤ちゃん連れ室内スポット特集【2026年】熱中症対策・冷房完備 | ベビーカーナビ",
  description: "猛暑の夏も快適におでかけ！赤ちゃん連れにおすすめの冷房完備室内スポット・熱中症を防ぐおでかけのコツ・暑い日の持ち物チェックリストを徹底解説。",
  keywords: ["夏 赤ちゃん 室内 お出かけ", "夏 ベビーカー 熱中症", "赤ちゃん 夏 どこ行く", "子連れ 夏 室内 スポット 東京"],
  openGraph: {
    title: "夏の赤ちゃん連れ室内スポット特集【2026年】熱中症対策・冷房完備",
    description: "猛暑でも安心！授乳室・おむつ替え完備の室内スポットと熱中症対策のコツ。",
    url: "https://stroller-navi.vercel.app/articles/summer-indoor-spots",
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
      "name": "夏に赤ちゃんとお出かけするときの熱中症対策は？",
      "acceptedAnswer": { "@type": "Answer", "text": "外出は午前中（10時まで）か夕方（16時以降）にしましょう。ベビーカーのシートは地面の熱を受けやすいため、冷却シートを敷くのが有効。こまめな水分補給と日よけカバーも必須です。" }
    },
    {
      "@type": "Question",
      "name": "夏に赤ちゃんを連れて行くのにおすすめの室内スポットは？",
      "acceptedAnswer": { "@type": "Answer", "text": "水族館・科学館・ショッピングモール・図書館・児童館などの冷房完備施設がおすすめです。授乳室・おむつ替え設備が整っているか事前に確認しておくと安心です。" }
    },
    {
      "@type": "Question",
      "name": "夏の赤ちゃんとのお出かけ、何時に出発するのがベストですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "真夏（7〜8月）は9時〜11時に出発し、気温が上がる12〜15時は室内で過ごすのが理想。朝イチの水族館・科学館は混雑も少なく快適です。" }
    },
  ],
};

export default function SummerIndoorSpotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>夏の室内スポット特集</span>
          </nav>
          <div className="text-3xl mb-2">☀️🧊</div>
          <h1 className="text-xl font-black leading-snug">
            夏の赤ちゃん連れ<br />室内スポット特集【2026年】
          </h1>
          <p className="text-sm text-white/90 font-bold mt-1">熱中症対策・冷房完備・授乳室あり</p>
          <p className="text-[11px] text-white/60 mt-1">2026年6月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年6月" readTime="約8分" category="季節特集" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              35℃を超える猛暑日が続く日本の夏。「赤ちゃんを連れてどこに行けばいいの？」と悩むパパ・ママは多いです。
              この記事では、<strong>冷房完備・授乳室あり・ベビーカーで動きやすい</strong>室内スポットを
              カテゴリ別に厳選して紹介します。合わせて、夏のお出かけで赤ちゃんを守るための熱中症対策も詳しく解説します。
            </p>
          </section>

          {/* 熱中症対策 */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-4">⚠️ まず知っておきたい！夏のお出かけ注意点</h2>
            <div className="space-y-3">
              {[
                { emoji: "🌡️", title: "ベビーカーのシートは50℃超えることも", desc: "夏の直射日光が当たるベビーカーのシートは50〜60℃になることも。冷却シートを敷く・日陰でシートを冷ましてから乗せるなどの対策を。シルバーの日よけカバーも効果的。" },
                { emoji: "💧", title: "水分補給はこまめに", desc: "月齢によって与えられる飲み物が異なります。母乳・ミルクの場合はいつもより授乳回数を増やす。離乳食が始まっている赤ちゃんには麦茶・白湯を。外出前・中・後のタイミングで必ず補給。" },
                { emoji: "🕐", title: "外出は10時前か16時以降", desc: "気温が最も高くなる12〜15時の外出は避けましょう。朝イチは施設の混雑も少なく、涼しい時間帯に移動できるのでベスト。夕方以降は気温が落ち着き公園も過ごしやすい。" },
                { emoji: "🚗", title: "車内の熱中症に要注意", desc: "チャイルドシートは直射日光が当たると非常に熱くなる。乗車前に必ずシートの温度を確認し、タオルや専用カバーで遮光を。エンジン停止後は車内に絶対に残さない。" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-xl shrink-0">{item.emoji}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 水族館 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🐠 水族館（暗め・涼しい・ゆっくり見られる）</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              水族館は館内が常に冷房が効いており、薄暗い環境が赤ちゃんを落ち着かせる効果も。
              ベビーカーで動きやすく、多くの水族館に授乳室が設置されています。
            </p>
            <div className="space-y-3">
              {[
                { name: "すみだ水族館（東京・押上）", point: "ペンギンのプールが人気。授乳室・おむつ替えあり。スカイツリーに直結でベビーカー移動しやすい。", age: "0ヶ月〜", href: "/spots" },
                { name: "マクセル アクアパーク品川", point: "夜のイルミネーションが幻想的。0歳から入場可。授乳室完備。広い通路でベビーカー移動しやすい。", age: "0ヶ月〜", href: "/spots" },
                { name: "サンシャイン水族館（東京・池袋）", point: "天空のペンギンが名物。屋上エリアは熱いため屋内中心の周り方を。授乳室・おむつ替え完備。", age: "0ヶ月〜", href: "/spots" },
                { name: "葛西臨海水族園（東京・葛西）", point: "本格的なマグロの回遊が見もの。入場料が安く経済的。広いバリアフリー通路でベビーカー向き。", age: "0ヶ月〜", href: "/spots" },
              ].map((spot) => (
                <div key={spot.name} className="bg-blue-50/50 rounded-xl p-3.5 border border-blue-100">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-bold text-gray-800">{spot.name}</p>
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full shrink-0 ml-2">{spot.age}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{spot.point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 科学館・博物館 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🔬 科学館・博物館（知的好奇心を刺激）</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              日本科学未来館や子ども向けの科学館は、冷房が効いた広い展示スペースでゆっくり過ごせます。
              1歳以下でも視覚・聴覚を刺激する展示が多く、意外と楽しめます。
            </p>
            <div className="space-y-3">
              {[
                { name: "日本科学未来館（東京・お台場）", point: "最先端の科学展示。赤ちゃん向けの体験コーナーも。広くてバリアフリー。授乳室あり。駐車場完備でベビーカーのまま入館できる。", age: "0ヶ月〜" },
                { name: "国立科学博物館（東京・上野）", point: "恐竜の化石に大きな赤ちゃんも反応する。クーラーが効いた広い館内。上野公園内で食事場所も充実。", age: "4ヶ月〜" },
                { name: "東京都現代美術館（東京・清澄白河）", point: "赤ちゃん連れ歓迎の美術館。「アーティゾン美術館」と並んで子連れに優しい環境。静かな空間で赤ちゃんが落ち着きやすい。", age: "0ヶ月〜" },
              ].map((spot) => (
                <div key={spot.name} className="bg-green-50/50 rounded-xl p-3.5 border border-green-100">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-bold text-gray-800">{spot.name}</p>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full shrink-0 ml-2">{spot.age}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{spot.point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ショッピングモール */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🛍️ ショッピングモール（完全室内・設備充実）</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ショッピングモールは授乳室・おむつ替え・キッズスペース・フードコートが揃っており、
              半日〜1日過ごせる夏のお出かけ定番スポット。雨の日にも対応できます。
            </p>
            <div className="space-y-3">
              {[
                { name: "ダイバーシティ東京（お台場）", point: "フジテレビ方面から室内直結。キッズスペースあり。授乳室・おむつ替え充実。駐車場が広くベビーカー移動しやすい。" },
                { name: "ららぽーとTOKYO-BAY（千葉・船橋）", point: "広大な敷地に授乳室・おむつ替えが多数設置。ミルクのお湯・電子レンジ完備施設も。雨でも晴れでも快適に過ごせる。" },
                { name: "グランベリーパーク（東京・南町田）", point: "屋内外の広いモール。授乳室・おむつ替え台完備。近くに公園もあり朝は外・昼は室内のプランが組みやすい。" },
              ].map((spot) => (
                <div key={spot.name} className="bg-orange-50/50 rounded-xl p-3.5 border border-orange-100">
                  <p className="text-sm font-bold text-gray-800 mb-1">{spot.name}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{spot.point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 持ち物チェックリスト */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🎒 夏の赤ちゃんお出かけ 持ち物チェックリスト</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                "日よけカバー（ベビーカー用）",
                "冷却シート（ベビーカー用）",
                "着替え（多め・汗冷え対策）",
                "汗拭きシート",
                "扇風機（手持ちタイプ）",
                "保冷剤＋保冷バッグ",
                "帽子（UVカット）",
                "日焼け止め（ベビー用）",
                "水分補給グッズ",
                "授乳ケープ",
                "多めのおむつ（暑い日は回数増）",
                "おむつ替えシート",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="text-brand-400 shrink-0">☑</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* まとめ */}
          <section className="bg-sky-50 border border-sky-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">📝 まとめ</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-sky-500 shrink-0">✓</span><span>外出は10時前か16時以降が鉄則。気温が高い12〜15時は室内でゆっくり過ごす計画を</span></li>
              <li className="flex gap-2"><span className="text-sky-500 shrink-0">✓</span><span>水族館・科学館・ショッピングモールは夏の定番。授乳室の事前確認を忘れずに</span></li>
              <li className="flex gap-2"><span className="text-sky-500 shrink-0">✓</span><span>ベビーカーシートの温度確認・こまめな水分補給・日よけカバーの3点が熱中症予防の基本</span></li>
              <li className="flex gap-2"><span className="text-sky-500 shrink-0">✓</span><span>ベビーカーナビのスポット検索で「室内」フィルターを使うと冷房完備スポットを効率よく探せます</span></li>
            </ul>
            <div className="mt-4 text-center">
              <Link
                href="/spots"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold hover:opacity-90 transition"
              >
                🌊 室内スポットをベビーカーナビで探す
              </Link>
            </div>
          </section>

          <ShareButtons title="夏の赤ちゃん連れ室内スポット特集【2026年】" url="/articles/summer-indoor-spots" />
          <ArticleAreaNav currentSlug="summer-indoor-spots" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
