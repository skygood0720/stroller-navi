import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "秋の赤ちゃん連れお出かけスポット特集【2026年】紅葉・動物園・公園 | ベビーカーナビ",
  description: "過ごしやすい秋こそ赤ちゃん連れのおでかけチャンス！紅葉の名所・動物園・広い公園など秋のベビーカーおでかけにぴったりなスポットを厳選紹介。",
  keywords: ["秋 赤ちゃん お出かけ", "紅葉 子連れ 東京", "秋 ベビーカー おすすめ スポット", "赤ちゃん 秋 どこ行く"],
  openGraph: {
    title: "秋の赤ちゃん連れお出かけスポット特集【2026年】紅葉・動物園・公園",
    description: "気候がよい秋はベビーカーおでかけの絶好シーズン！おすすめスポットを厳選紹介。",
    url: "https://stroller-navi.vercel.app/articles/autumn-outing-spots",
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
      "name": "秋に赤ちゃん連れでお出かけするベストな時期はいつですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "10月〜11月が最もおすすめです。気温が20℃前後で赤ちゃんにとって過ごしやすく、紅葉も楽しめます。朝晩は冷えるため一枚羽織るものを準備しましょう。" }
    },
    {
      "@type": "Question",
      "name": "紅葉スポットにベビーカーで行けますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "公園や都市型の紅葉スポットはベビーカーで行けます。ただし山岳地帯や段差の多い寺社は難しい場合も。昭和記念公園・新宿御苑・六義園など平坦な公園が特におすすめです。" }
    },
  ],
};

export default function AutumnOutingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>秋のおでかけ特集</span>
          </nav>
          <div className="text-3xl mb-2">🍂🍁</div>
          <h1 className="text-xl font-black leading-snug">
            秋の赤ちゃん連れ<br />お出かけスポット特集【2026年】
          </h1>
          <p className="text-sm text-white/90 font-bold mt-1">紅葉・動物園・広い公園</p>
          <p className="text-[11px] text-white/60 mt-1">2026年9月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年9月" readTime="約7分" category="季節特集" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              猛暑が落ち着き、過ごしやすい気候になる秋は<strong>ベビーカーおでかけの黄金シーズン</strong>。
              暑すぎず寒すぎない10〜11月は、屋外スポットも快適に楽しめます。
              紅葉の美しい公園・動物園・ファーム体験など、秋ならではのおすすめスポットを厳選して紹介します。
            </p>
          </section>

          {/* 秋おでかけのコツ */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h2 className="text-base font-bold mb-3">🍁 秋のおでかけ3つのポイント</h2>
            <div className="space-y-3">
              {[
                { emoji: "🧥", title: "朝晩は冷える！重ね着で体温調節", desc: "秋は日中暖かくても朝晩は急に冷えることがある。薄手のカーディガン・ひざ掛けをバッグに入れておこう。ベビーカーの風除けカバーも活躍する季節。" },
                { emoji: "🌤️", title: "晴れた日は紫外線対策も必要", desc: "秋でも晴れた日の紫外線量は夏の60〜70%。UVカット帽子・日焼け止め（ベビー用SPF30以上）は引き続き準備を。" },
                { emoji: "📅", title: "紅葉ピーク時は混雑を覚悟", desc: "11月の紅葉ピーク時は人気スポットが大混雑。週末は10時前の早めの到着か、平日を狙うのがおすすめ。駐車場は事前予約可能な施設を選ぶと安心。" },
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

          {/* 紅葉×ベビーカー公園 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🍁 ベビーカーで紅葉を楽しめる公園</h2>
            <p className="text-xs text-gray-500 mb-4">段差が少なく広い園路でベビーカー移動しやすい公園を厳選</p>
            <div className="space-y-3">
              {[
                { name: "昭和記念公園（東京・立川）", point: "広大な園内がほぼフラット。ベビーカーで紅葉を見ながら散歩できる。秋の「コスモス畑」はフォトスポットとしても人気。授乳室・おむつ替えあり。", age: "0ヶ月〜", color: "orange" },
                { name: "新宿御苑（東京・新宿）", point: "整備された広い園路でベビーカー移動しやすい。紅葉シーズンの11月中旬〜12月上旬は特に美しい。温室も見学できる。授乳室あり。", age: "0ヶ月〜", color: "orange" },
                { name: "六義園（東京・駒込）", point: "日本庭園の美しい紅葉が楽しめる。石畳の一部は段差があるが主要ルートはベビーカーでも通行可能。", age: "0ヶ月〜", color: "orange" },
                { name: "砧公園（東京・世田谷）", point: "広い芝生広場でのびのび過ごせる。銀杏並木の紅葉が11月に見頃を迎える。世田谷美術館も隣接しており、授乳室あり。", age: "0ヶ月〜", color: "orange" },
              ].map((spot) => (
                <div key={spot.name} className="bg-orange-50/50 rounded-xl p-3.5 border border-orange-100">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-bold text-gray-800">{spot.name}</p>
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full shrink-0 ml-2">{spot.age}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{spot.point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 動物園 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🐘 動物園（秋こそ屋外が快適）</h2>
            <p className="text-xs text-gray-500 mb-4">夏の猛暑で閉まっていた屋外エリアも秋は快適に楽しめる</p>
            <div className="space-y-3">
              {[
                { name: "上野動物園（東京・上野）", point: "パンダが人気。秋は動物たちも活発で見応えがある。授乳室・おむつ替えあり。ベビーカー貸出あり（有料）。", age: "0ヶ月〜" },
                { name: "多摩動物公園（東京・日野）", point: "広大な敷地に多くの動物。チータやライオンの走りを近くで見られる。秋は気候もよく1日かけてゆっくり見学できる。", age: "4ヶ月〜" },
                { name: "よこはま動物園ズーラシア（神奈川）", point: "テーマごとに世界の動植物が展示。広い園内はベビーカーで移動しやすく、授乳室・おむつ替えが充実。", age: "0ヶ月〜" },
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

          {/* ファーム・収穫体験 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🍠 ファーム・収穫体験（秋ならではの体験）</h2>
            <p className="text-xs text-gray-500 mb-4">さつまいも掘り・りんご狩りなど秋の収穫体験は赤ちゃんの五感刺激にも</p>
            <div className="space-y-3">
              {[
                { name: "サツマイモ掘り体験農園（首都圏各地）", point: "10月が旬のさつまいも掘り。赤ちゃんは土の感触に興味津々。ベビーカーをおいて抱っこ紐で参加する農園が多い。事前予約必須。", age: "6ヶ月〜" },
                { name: "リンゴ狩り（山梨・長野方面）", point: "9〜11月がりんごのシーズン。低い木からのりんご狩りは赤ちゃんも触らせやすい。農園によってバリアフリー対応が異なるので事前確認を。", age: "6ヶ月〜" },
              ].map((spot) => (
                <div key={spot.name} className="bg-red-50/50 rounded-xl p-3.5 border border-red-100">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-bold text-gray-800">{spot.name}</p>
                    <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full shrink-0 ml-2">{spot.age}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{spot.point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 持ち物 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🎒 秋のおでかけ持ち物チェックリスト</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                "薄手のカーディガン", "ひざ掛け（ベビーカー用）",
                "風除けカバー", "UVカット帽子",
                "日焼け止め（ベビー用）", "着替え一式",
                "おむつ（多め）", "授乳グッズ",
                "おしりふき", "ビニール袋",
                "水分補給グッズ", "おやつ（離乳食中の場合）",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="text-amber-400 shrink-0">☑</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* まとめ */}
          <section className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
            <h2 className="text-base font-bold mb-3">📝 まとめ</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-orange-400 shrink-0">✓</span><span>秋（10〜11月）はベビーカーおでかけの最適シーズン。気候がよく外出しやすい</span></li>
              <li className="flex gap-2"><span className="text-orange-400 shrink-0">✓</span><span>平坦な公園での紅葉散歩・動物園・収穫体験など秋ならではの体験を楽しもう</span></li>
              <li className="flex gap-2"><span className="text-orange-400 shrink-0">✓</span><span>紅葉ピークは混雑。週末は早起き・平日はのんびり計画を</span></li>
              <li className="flex gap-2"><span className="text-orange-400 shrink-0">✓</span><span>朝晩の冷え対策に一枚羽織るものを忘れずに</span></li>
            </ul>
            <div className="mt-4 text-center">
              <Link
                href="/spots"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold hover:opacity-90 transition"
              >
                🍁 秋のおでかけスポットをもっと探す
              </Link>
            </div>
          </section>

          <ShareButtons title="秋の赤ちゃん連れお出かけスポット特集【2026年】" url="/articles/autumn-outing-spots" />
          <ArticleAreaNav currentSlug="autumn-outing-spots" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
