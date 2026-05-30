import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "池袋駅ベビーカーガイド｜エレベーター出口・授乳室・サンシャインへの行き方 | ベビーカーナビ",
  description: "池袋駅をベビーカーで攻略！東西の出口の違い・東武・西武へのエレベーター乗り換えルート・サンシャインシティへの行き方・授乳室を詳しく解説。",
  keywords: ["池袋駅 ベビーカー", "池袋駅 エレベーター 出口", "池袋 サンシャイン ベビーカー", "池袋 授乳室"],
  openGraph: {
    title: "池袋駅ベビーカーガイド｜エレベーター出口・授乳室・サンシャインへの行き方",
    description: "東西の出口・東武西武乗り換え・サンシャインへのベビーカー移動を完全解説。",
    url: "https://stroller-navi.vercel.app/articles/ikebukuro-station-guide",
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
      "name": "池袋駅でベビーカーに便利な出口はどこですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "東口（サンシャイン方面）はC3出口付近にエレベーターがあります。西口（東武・メトロポリタン方面）はA4出口付近が便利です。" }
    },
    {
      "@type": "Question",
      "name": "池袋駅からサンシャインシティへベビーカーで行けますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい。東口を出て東池袋方面へ徒歩約7〜8分です。途中のアゼリアロード（地下）はフラットで移動しやすいです。サンシャインシティ内は全館バリアフリー対応です。" }
    },
    {
      "@type": "Question",
      "name": "池袋駅周辺の授乳室はどこですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "東武百貨店池袋店8F（個室授乳室・ミルク用お湯あり）、西武池袋本店7F（授乳室・おむつ替えあり）、サンシャインシティ内（複数フロアに設置）に授乳室があります。" }
    },
  ],
};

export default function IkebukuroStationGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-violet-500 via-purple-500 to-violet-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>池袋駅ガイド</span>
          </nav>
          <div className="text-3xl mb-2">🎡</div>
          <h1 className="text-xl font-black leading-snug">
            池袋駅ベビーカーガイド<br />
            <span className="text-base font-bold opacity-90">エレベーター・サンシャイン・授乳室完全解説</span>
          </h1>
          <p className="text-[11px] text-white/70 mt-2">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年5月" readTime="約7分" category="駅ガイド" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              池袋駅は1日あたりの乗降客数が東京都内トップクラスで、東武・西武・JR・東京メトロが乗り入れる巨大ターミナル。
              しかし「東口と西口に分かれている」構造さえ把握すれば、各路線のエレベーターは比較的わかりやすく配置されています。
              サンシャインシティやアニメイトなど子連れに人気のスポットへのルートも解説します。
            </p>
          </section>

          {/* 基本構造の把握 */}
          <section className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
            <h2 className="text-base font-bold mb-3">🗺️ まず「東口」と「西口」を理解しよう</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-violet-700 mb-1">東口（サンシャイン側）</p>
                <ul className="text-[11px] text-gray-600 space-y-0.5">
                  <li>・西武池袋本店</li>
                  <li>・サンシャインシティ</li>
                  <li>・東京メトロ有楽町線</li>
                  <li>・東池袋エリア</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-violet-700 mb-1">西口（東武側）</p>
                <ul className="text-[11px] text-gray-600 space-y-0.5">
                  <li>・東武百貨店池袋店</li>
                  <li>・東武東上線</li>
                  <li>・ホテルメトロポリタン</li>
                  <li>・西池袋エリア</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              ※ 東口と西口は改札内でつながっていますが、ベビーカーでの移動は地上でも可能（ただし距離が長い）。
              目的地が決まったら先に東口か西口かを確認しておくことで迷わず動けます。
            </p>
          </section>

          {/* JR線 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟠 JR池袋駅のエレベーター・出口</h2>
            <div className="space-y-3 text-xs text-gray-700">
              <div>
                <p className="font-bold text-orange-700 mb-1">東口（西武・サンシャイン方面）</p>
                <p className="leading-relaxed">東口改札外、地上出口「C3出口」付近にエレベーターあり。西武池袋本店の正面玄関近くに出られる。</p>
              </div>
              <div>
                <p className="font-bold text-orange-700 mb-1">西口（東武方面）</p>
                <p className="leading-relaxed">西口改札を出て正面の広場に出る。東武百貨店と直結。「A4出口」付近のエレベーターで地上へ。東武東上線乗り換えもここから。</p>
              </div>
              <div>
                <p className="font-bold text-orange-700 mb-1">南口（メトロポリタン口）</p>
                <p className="leading-relaxed">ホテルメトロポリタン方面。比較的空いていてベビーカーでの移動がしやすい出口。</p>
              </div>
            </div>
          </section>

          {/* 東武・西武 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟦🟥 東武東上線・西武池袋線のエレベーター</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-blue-700 mb-2">東武東上線</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  JR西口改札を出て左へ進むと東武池袋駅の改札に到達。地上1Fのホームなのでエレベーターはホームと改札フロア間のみ。地上に出る際は東武百貨店のエレベーターが便利。
                </p>
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-[11px] font-bold text-blue-700 mb-1">🔁 JR→東武東上線（ベビーカー推奨）</p>
                  <p className="text-[11px] text-gray-600">JR西口改札 → 改札外を左へ → 東武池袋駅改札（徒歩約2分）</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-700 mb-2">西武池袋線</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  JR東口改札を出て右手前方に西武池袋駅の入口がある。地上1Fのホームで、改札内にエレベーターあり。百貨店と直結しており移動がしやすい。
                </p>
                <div className="bg-red-50 rounded-xl p-3">
                  <p className="text-[11px] font-bold text-red-700 mb-1">🔁 JR→西武池袋線（ベビーカー推奨）</p>
                  <p className="text-[11px] text-gray-600">JR東口改札 → 東口広場を右へ → 西武池袋駅改札（徒歩約3分）</p>
                </div>
              </div>
            </div>
          </section>

          {/* サンシャインへの行き方 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">☀️ サンシャインシティへのベビーカールート</h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              サンシャインシティは子連れに最適な複合施設（授乳室・おむつ替え・ベビーカー貸出あり）。池袋東口から徒歩7〜8分でアクセスできます。
            </p>
            <div className="space-y-2">
              <div className="bg-amber-50 rounded-xl p-3.5">
                <p className="text-xs font-bold text-amber-700 mb-1">🚶 地上ルート（晴れの日向き）</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  JR東口 → 東口広場 → グリーン大通り（歩道が広くベビーカー向き）→ サンシャイン60通り → サンシャインシティ。
                  所要時間：約8分。途中の歩道は広くてベビーカーでも余裕がある。
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3.5">
                <p className="text-xs font-bold text-gray-700 mb-1">🌧 地下ルート（雨の日向き）</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  JR東口改札 → 地下通路（アゼリアロード）→ 東池袋方面出口 → サンシャインシティへ地上に出る。
                  全体的にフラットでベビーカー移動に適している。所要時間：約10分。
                </p>
              </div>
            </div>
          </section>

          {/* 授乳室 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🍼 池袋駅周辺の授乳室・おむつ替えスポット</h2>
            <div className="space-y-3">
              {[
                { name: "東武百貨店池袋店 8F ベビー休憩室", tags: ["個室授乳室", "ミルクお湯", "体重計", "電子レンジ"], comment: "西口直結の百貨店。広くて清潔な授乳室。おむつ替え台も複数あり。", rank: "🥇" },
                { name: "西武池袋本店 7F ベビーフロア", tags: ["授乳室", "おむつ替え", "ベビー用品"], comment: "東口直結。ベビー用品売場に隣接しており必要なものをその場で買える。", rank: "🥈" },
                { name: "サンシャインシティ（複数フロア）", tags: ["授乳室", "おむつ替え", "ベビーカー貸出"], comment: "ワールドインポートマートB1・アルパ各フロアに授乳室あり。ベビーカー貸出も。", rank: "🥉" },
                { name: "ルミネ池袋 4F", tags: ["授乳室", "おむつ替え"], comment: "東口から徒歩1分。比較的空いていて使いやすい。", rank: "4位" },
              ].map((spot) => (
                <div key={spot.name} className="bg-gray-50 rounded-xl p-3.5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-gray-500 shrink-0">{spot.rank}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{spot.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">{spot.tags.map((t) => <span key={t} className="text-[10px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded-full">{t}</span>)}</div>
                      <p className="text-[11px] text-gray-500 mt-1">{spot.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">💡 池袋駅ベビーカー移動のコツ</h2>
            <div className="space-y-3">
              {[
                { emoji: "🧭", tip: "池袋は「東口＝サンシャイン（西武）」「西口＝東武」と覚えておくだけで迷いにくくなる。" },
                { emoji: "🛗", tip: "東武百貨店・西武百貨店どちらも店内のエレベーターを自由に使えるため、駅周辺の移動手段として百貨店内エレベーターを活用するのがコツ。" },
                { emoji: "👶", tip: "サンシャインシティのベビーカー貸出は無料（要身分証）。重い荷物でも現地で借りれば楽になる。" },
                { emoji: "🌧️", tip: "池袋は東武・西武・ルミネなど地下通路で繋がっているため、雨の日でもほとんど外に出ずに移動できる。" },
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
                { href: "/articles/shibuya-station-guide", name: "渋谷駅ベビーカーガイド", desc: "再開発後のエレベーター・ヒカリエルート" },
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

          <ArticleAreaNav currentSlug="ikebukuro-station-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
