import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "渋谷駅ベビーカーガイド｜エレベーター出口・授乳室・乗り換えルート完全解説 | ベビーカーナビ",
  description: "渋谷駅をベビーカーで完全攻略！大規模再開発で生まれ変わった渋谷駅のエレベーター出口・各線乗り換えルート・授乳室を徹底ガイド。",
  keywords: ["渋谷駅 ベビーカー", "渋谷駅 エレベーター 出口", "渋谷駅 授乳室", "渋谷 ベビーカー 乗り換え"],
  openGraph: {
    title: "渋谷駅ベビーカーガイド｜エレベーター出口・授乳室・乗り換えルート完全解説",
    description: "再開発で変わった渋谷駅をベビーカーで攻略。路線別エレベーター・授乳室を詳解。",
    url: "https://stroller-navi.vercel.app/articles/shibuya-station-guide",
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
      "name": "渋谷駅でベビーカーに優しい出口はどこですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "渋谷ヒカリエ方面の「東口」または「ヒカリエ口」がエレベーターで地上に出られてベビーカー向きです。また東急東横線・田園都市線は渋谷ストリーム方面のエレベーターも便利です。" }
    },
    {
      "@type": "Question",
      "name": "渋谷駅でJRから東横線・田園都市線に乗り換えるベビーカー向けルートは？",
      "acceptedAnswer": { "@type": "Answer", "text": "JR渋谷駅の東改札から渋谷ヒカリエのエレベーターを利用してB3F〜B2Fへ降り、東急東横線・田園都市線のホームへアクセスするルートがベビーカー向きです。" }
    },
    {
      "@type": "Question",
      "name": "渋谷駅周辺の授乳室はどこにありますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "渋谷ヒカリエ6F（個室授乳室・ミルク用お湯あり）、渋谷スクランブルスクエア13F、渋谷マークシティ4Fに授乳室があります。" }
    },
  ],
};

export default function ShibuyaStationGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>渋谷駅ガイド</span>
          </nav>
          <div className="text-3xl mb-2">🔴</div>
          <h1 className="text-xl font-black leading-snug">
            渋谷駅ベビーカーガイド<br />
            <span className="text-base font-bold opacity-90">エレベーター出口・乗り換えルート完全解説</span>
          </h1>
          <p className="text-[11px] text-white/70 mt-2">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年5月" readTime="約8分" category="駅ガイド" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              2019年以降の大規模再開発で大きく変貌した渋谷駅。複数の路線が縦に積み重なった立体構造は、
              ベビーカーでの移動が難しいとよく言われます。しかし再開発によってエレベーターの数は大幅に増え、
              2026年現在は正しいルートを知れば十分に移動できる駅になっています。
            </p>
          </section>

          {/* 基本の3ポイント */}
          <section className="bg-rose-50 border border-rose-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">📌 まず押さえる3つのポイント</h2>
            <div className="space-y-3">
              {[
                { num: "1", title: "「ヒカリエ口（東口）」を基本にする", desc: "渋谷ヒカリエに直結しており、エレベーターで地下深くの東横線ホームまで移動できる。ヒカリエ内にエレベーターが複数あり最もわかりやすい。" },
                { num: "2", title: "渋谷は「縦に長い」駅と認識する", desc: "東横線・田園都市線はB3F、ハチ公口は地上、JRは2F、銀座線は3Fと縦の移動が多い。エレベーターが多いとはいえ移動に時間がかかるので余裕をもって行動しよう。" },
                { num: "3", title: "東急公式アプリ「TOKYU POINT」が便利", desc: "渋谷駅の構内図・エレベーター位置をアプリで確認できる。渋谷ヒカリエ・渋谷スクランブルスクエアの施設案内も統合されておりベビー設備の場所も確認可能。" },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-400 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{item.num}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* JR線 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟠 JR渋谷駅のエレベーター・出口</h2>
            <div className="space-y-3 text-xs text-gray-700">
              <div>
                <p className="font-bold text-orange-700 mb-1">東口・ヒカリエ口（推奨）</p>
                <p className="leading-relaxed">改札外にエレベーターあり。渋谷ヒカリエへ直結。ヒカリエ内のエレベーターを使って各フロアへ移動できる。東横線・田園都市線への乗り換えもここが最もわかりやすい。</p>
              </div>
              <div>
                <p className="font-bold text-orange-700 mb-1">ハチ公口（スクランブル交差点方面）</p>
                <p className="leading-relaxed">地上レベルで出口に出られる。ただし周辺の歩道が混雑しており、スクランブル交差点はベビーカーには厳しい。109方面はこの出口から。</p>
              </div>
              <div>
                <p className="font-bold text-orange-700 mb-1">南改札（渋谷ストリーム方面）</p>
                <p className="leading-relaxed">渋谷川沿いの渋谷ストリームへ直結。エレベーターで地上へ出られて比較的空いている。東急東横線と繋がる渋谷ストリームB1Fへのルートも便利。</p>
              </div>
            </div>
          </section>

          {/* 東急線 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟦 東急東横線・田園都市線のエレベーター</h2>
            <div className="space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed">
                東急東横線はB3F、田園都市線・半蔵門線・東急新横浜線はB4〜B5Fに位置し、地上から深い場所にある。
              </p>
              <div className="bg-blue-50 rounded-xl p-3.5">
                <p className="text-xs font-bold text-blue-700 mb-1">🔁 JR→東横線・田園都市線（ベビーカー推奨ルート）</p>
                <ol className="space-y-1 text-xs text-gray-700 list-decimal list-inside">
                  <li>JR渋谷駅 東改札（ヒカリエ口）を出る</li>
                  <li>渋谷ヒカリエへ入り2Fコンコースへ</li>
                  <li>ヒカリエ内エレベーターでB3F〜B4Fへ</li>
                  <li>東急改札へ向かう（案内表示に従う）</li>
                </ol>
                <p className="text-[11px] text-gray-500 mt-2">所要時間：約7〜10分。エレベーター待ちで時間が伸びる場合あり。</p>
              </div>
            </div>
          </section>

          {/* 東京メトロ銀座線 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟡 東京メトロ銀座線のエレベーター</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-2">
              銀座線は3Fに位置し、JRより上の階にある珍しい構造。渋谷スクランブルスクエアのエレベーターで3Fまで上がって乗り換えが可能。
            </p>
            <div className="bg-yellow-50 rounded-xl p-3.5">
              <p className="text-xs font-bold text-yellow-700 mb-1">🔁 JR→銀座線（ベビーカー推奨ルート）</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                JRハチ公口改札 → 渋谷スクランブルスクエア1Fへ入る → エレベーターで3Fへ → 銀座線改札へ。
                所要時間：約5分。
              </p>
            </div>
          </section>

          {/* 授乳室 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🍼 渋谷駅周辺の授乳室・おむつ替えスポット</h2>
            <div className="space-y-3">
              {[
                { name: "渋谷ヒカリエ 6F ベビーラウンジ", tags: ["個室授乳室", "ミルクお湯", "おむつ替え", "体重計"], comment: "広くてきれいな授乳室。ヒカリエ口から直結でアクセス良好。週末は少し混む。", rank: "🥇" },
                { name: "渋谷スクランブルスクエア 13F", tags: ["授乳室", "おむつ替え"], comment: "眺めがよく落ち着いた環境。スクランブルスクエアのエレベーターで13Fへ。", rank: "🥈" },
                { name: "渋谷マークシティ 4F", tags: ["授乳室", "おむつ替え"], comment: "井の頭線改札から近い。マークシティ内のエレベーターで4Fへ。", rank: "🥉" },
                { name: "東急フードショー（渋谷駅B1F）", tags: ["おむつ替え（多目的トイレ）"], comment: "授乳室はないがバリアフリートイレでおむつ替えは可能。緊急時に。", rank: "4位" },
              ].map((spot) => (
                <div key={spot.name} className="bg-gray-50 rounded-xl p-3.5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-gray-500 shrink-0">{spot.rank}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{spot.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {spot.tags.map((t) => <span key={t} className="text-[10px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded-full">{t}</span>)}
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1">{spot.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">💡 渋谷駅ベビーカー移動のコツ</h2>
            <div className="space-y-3">
              {[
                { emoji: "🏗️", tip: "再開発は2027年頃まで続いており、一部ルートが変更になる可能性あり。おでかけ直前に渋谷駅の公式サイトで工事情報を確認しよう。" },
                { emoji: "⏰", tip: "渋谷は夕方17時以降の混雑が特に激しい。エレベーターの待ち時間が長くなるため、子連れは15時台までに移動を済ませるのが理想。" },
                { emoji: "🛗", tip: "渋谷ヒカリエのエレベーターはB3Fまで直通のものがある。「B3F（東急東横線）」と表示されたエレベーターを選ぶと乗り換えが早い。" },
                { emoji: "🎒", tip: "スクランブル交差点はベビーカーで渡るのが難しい混雑時間帯がある。渡る場合は青信号直後に素早く動き、端を通るのが安全。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xl shrink-0">{item.emoji}</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 他の駅ガイド */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-bold mb-3">🚉 他の駅のベビーカーガイドも見る</h2>
            <div className="space-y-2">
              {[
                { href: "/articles/shinjuku-station-guide", name: "新宿駅ベビーカーガイド", desc: "南口・新南口・東口のエレベーター情報" },
                { href: "/articles/ikebukuro-station-guide", name: "池袋駅ベビーカーガイド", desc: "サンシャイン・東武・西武へのエレベータールート" },
                { href: "/articles/tokyo-station-guide", name: "東京駅ベビーカーガイド", desc: "新幹線・丸ノ内・八重洲口のバリアフリー情報" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="flex gap-3 items-center bg-gray-50 rounded-xl p-3 hover:bg-brand-50 transition">
                  <span className="text-xl">🚉</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{a.name}</p>
                    <p className="text-[11px] text-gray-500">{a.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <ArticleAreaNav currentSlug="shibuya-station-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
