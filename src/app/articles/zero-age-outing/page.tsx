import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "0歳の赤ちゃんはいつから外出できる？初めてのおでかけ完全ガイド | ベビーカーナビ",
  description: "0歳の赤ちゃんのおでかけはいつから？1ヶ月健診後から外出OK。月齢別外出の目安・持ち物チェックリスト・注意点・おすすめスポット4選を完全網羅。初めてのベビーカーデビューも解説。",
  keywords: ["0歳 外出 いつから", "赤ちゃん おでかけ いつから", "生後1ヶ月 外出", "ベビーカー いつから", "赤ちゃん 外出 準備", "新生児 外出"],
  openGraph: {
    title: "0歳の赤ちゃんはいつから外出できる？初めてのおでかけ完全ガイド",
    description: "1ヶ月健診後から外出OK。初めての外出で準備するもの・注意点・おすすめスポットをまとめました。",
    url: "https://stroller-navi.vercel.app/articles/zero-age-outing",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function ZeroAgeOutingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "0歳の赤ちゃんはいつから外出できる？初めてのおでかけ完全ガイド",
    "description": "0歳の赤ちゃんのおでかけはいつから？初めての外出で準備するもの・注意点を解説。",
    "url": "https://stroller-navi.vercel.app/articles/zero-age-outing",
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-17",
    "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "赤ちゃんはいつから外出できますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "一般的に生後1ヶ月健診の後から短時間の外出が可能とされています。最初は近所の散歩から始め、徐々に外出時間や距離を延ばしていくのがおすすめです。" },
      },
      {
        "@type": "Question",
        "name": "ベビーカーはいつから使えますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "A型ベビーカー（フルリクライニング対応）は生後1ヶ月から使用可能です。B型ベビーカー（腰座り後）は生後6〜7ヶ月以降が目安です。" },
      },
      {
        "@type": "Question",
        "name": "0歳の赤ちゃんとのおでかけで準備すべきものは？",
        "acceptedAnswer": { "@type": "Answer", "text": "授乳グッズ（哺乳瓶・ミルク・母乳ケープ）、おむつ・おしりふき・防臭袋、着替え一式、体温計、保険証・母子手帳、ベビーカーとレインカバーが基本セットです。" },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-pink-400 via-rose-500 to-orange-400 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>0歳のおでかけ</span>
          </nav>
          <div className="text-4xl mb-3">👶</div>
          <h1 className="text-xl font-black leading-snug">
            0歳の赤ちゃんは<br />いつから外出できる？
          </h1>
          <p className="text-xs text-white/80 mt-2">初めてのおでかけ完全ガイド｜準備・注意点・おすすめスポット</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          <ArticleAuthor date="2026年5月" readTime="約7分" />
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              「赤ちゃんとの初めての外出、いつからOK？」「何を準備すればいい？」
              新米パパ・ママが最も悩む疑問にお答えします。
              一般的には<strong>生後1ヶ月健診の後</strong>から短時間の外出が可能です。
              無理せず少しずつ外の世界に慣らしてあげましょう。
            </p>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">📅 月齢別 外出の目安</h2>
            <div className="space-y-3">
              {[
                {
                  age: "生後0〜1ヶ月",
                  label: "外出は最小限に",
                  color: "bg-red-50 border-l-4 border-red-400",
                  desc: "免疫が低く感染リスクが高い時期。外出はなるべく避け、必要な場合は人混みを避けた短時間で。",
                },
                {
                  age: "1ヶ月健診後〜",
                  label: "近所のお散歩からスタート",
                  color: "bg-amber-50 border-l-4 border-amber-400",
                  desc: "1ヶ月健診でOKが出たら近所を短時間お散歩できます。15〜30分程度から始めるのがおすすめ。",
                },
                {
                  age: "生後2〜3ヶ月",
                  label: "少し遠出もOK",
                  color: "bg-green-50 border-l-4 border-green-400",
                  desc: "外気への抵抗力がついてきます。授乳室のある施設なら1〜2時間の外出が可能に。",
                },
                {
                  age: "生後4〜6ヶ月",
                  label: "本格的なお出かけ開始",
                  color: "bg-blue-50 border-l-4 border-blue-400",
                  desc: "首がすわって安定してきます。ショッピングモールや公園、水族館なども楽しめる時期。",
                },
                {
                  age: "生後7ヶ月〜",
                  label: "行動範囲がぐっと広がる",
                  color: "bg-purple-50 border-l-4 border-purple-400",
                  desc: "腰座りも安定し、B型ベビーカーやバギーも使えるように。動物園・テーマパークデビューも◎",
                },
              ].map((m) => (
                <div key={m.age} className={`rounded-xl p-4 ${m.color}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black">{m.age}</span>
                    <span className="text-[10px] font-bold text-gray-600">{m.label}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">👜 外出に必要な持ち物チェックリスト</h2>
            <div className="space-y-4">
              {[
                {
                  category: "授乳・ミルク",
                  icon: "🍼",
                  items: ["哺乳瓶（作り置きミルク or 粉ミルク）", "母乳ケープ（授乳カバー）", "保温マグ（お湯用）", "授乳クッション"],
                },
                {
                  category: "おむつ・衛生",
                  icon: "💧",
                  items: ["おむつ（外出時間+2枚分）", "おしりふき", "防臭袋・ゴミ袋", "着替え一式（2セット）", "おむつ替えシート"],
                },
                {
                  category: "安全・医療",
                  icon: "🩺",
                  items: ["母子手帳", "健康保険証・医療証", "体温計", "常備薬（かかりつけ医に相談）"],
                },
                {
                  category: "ベビーカー",
                  icon: "🚼",
                  items: ["ベビーカー（A型：生後1ヶ月〜）", "レインカバー", "日よけカバー・UVカット", "ブランケット（季節により）"],
                },
              ].map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-sm font-bold mb-2">{cat.icon} {cat.category}</h3>
                  <div className="space-y-1">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-4 h-4 rounded border border-gray-300 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🚼 ベビーカーはいつから使える？</h2>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-blue-800 mb-2">A型ベビーカー（フルリクライニング）</h3>
                <p className="text-xs text-gray-700">生後<strong>1ヶ月〜</strong>から使用可能。完全フラットに倒せるので新生児でも安心して使える。重くなりがちだが安定感がある。</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-green-800 mb-2">B型ベビーカー（コンパクト型）</h3>
                <p className="text-xs text-gray-700">生後<strong>6〜7ヶ月（腰座り後）</strong>から使用可能。軽くてコンパクト。電車移動に便利。</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">📍 0歳の初めてのおでかけにおすすめのスポット</h2>
            <div className="space-y-2">
              {[
                { name: "近所の公園・散歩コース", desc: "まずはここから。外気浴・日光浴の練習に", badge: "1ヶ月〜" },
                { name: "イオンモールなどの大型商業施設", desc: "授乳室・おむつ替え完備で安心。天候に関係なく行ける", badge: "2ヶ月〜" },
                { name: "水族館（小さめ）", desc: "暗めの照明で赤ちゃんが落ち着く。刺激の少ない環境", badge: "3ヶ月〜" },
                { name: "子育て支援センター・児童館", desc: "無料で利用でき、先輩ママとの交流にも", badge: "1ヶ月〜" },
              ].map((s) => (
                <div key={s.name} className="flex items-start gap-3 bg-pink-50 rounded-xl p-3">
                  <span className="text-[9px] font-bold bg-pink-200 text-pink-700 px-2 py-1 rounded-full whitespace-nowrap">{s.badge}</span>
                  <div>
                    <div className="text-xs font-bold">{s.name}</div>
                    <div className="text-[10px] text-gray-500">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/spots" className="mt-3 block text-xs text-brand-600 font-semibold text-center hover:underline">
              全国のスポットを地域から探す →
            </Link>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-4">❓ よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "赤ちゃんはいつから外出できますか？",
                  a: "一般的に生後1ヶ月健診の後から短時間の外出が可能とされています。最初は近所の散歩から始め、徐々に外出時間や距離を延ばしていくのがおすすめです。",
                },
                {
                  q: "ベビーカーはいつから使えますか？",
                  a: "A型ベビーカー（フルリクライニング対応）は生後1ヶ月から使用可能です。B型ベビーカーは腰座りが安定する生後6〜7ヶ月以降が目安です。",
                },
                {
                  q: "0歳の赤ちゃんとのおでかけで準備すべきものは？",
                  a: "授乳グッズ・おむつセット・着替え・母子手帳・保険証が基本です。外出時間+2枚分のおむつを持参し、授乳室がある施設を事前に確認しておくと安心です。",
                },
                {
                  q: "真夏・真冬の外出は大丈夫ですか？",
                  a: "真夏（気温28℃以上）と真冬（気温5℃以下）は赤ちゃんへの負担が大きいため、外出時間を短くするか室内施設を選ぶのがおすすめです。",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-bold text-gray-800 mb-1">Q. {item.q}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">A. {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">関連記事</h3>
            <div className="space-y-2">
              <Link href="/articles/nursing-room-tips" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">🍼</span>
                <div>
                  <div className="text-xs font-bold">授乳室の見つけ方と上手な使い方</div>
                  <div className="text-[10px] text-gray-500">外出先での授乳室の探し方・持ち物・マナー</div>
                </div>
              </Link>
              <Link href="/articles/stroller-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">🚼</span>
                <div>
                  <div className="text-xs font-bold">ベビーカーでのおでかけ完全ガイド</div>
                  <div className="text-[10px] text-gray-500">準備・ルート選び・施設選びのポイント</div>
                </div>
              </Link>
              <Link href="/articles/train-stroller-manner" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">🚃</span>
                <div>
                  <div className="text-xs font-bold">ベビーカーで電車に乗るときのマナー</div>
                  <div className="text-[10px] text-gray-500">折りたたみ必要？混雑時のコツ</div>
                </div>
              </Link>
              <Link href="/articles/ehon-0sai" className="flex items-center gap-2 bg-violet-50 hover:bg-violet-100 rounded-xl p-3 transition">
                <span className="text-xl">📚</span>
                <div>
                  <div className="text-xs font-bold">0歳赤ちゃんへのおすすめ絵本10選</div>
                  <div className="text-[10px] text-gray-500">月齢別・読み聞かせ方も解説【2026年版】</div>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 授乳室があるスポットを探す
            </Link>
          </div>
                  <ShareButtons title="0歳のおでかけ完全ガイド" url="/articles/zero-age-outing" />
                  <ArticleAreaNav currentSlug="zero-age-outing" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
