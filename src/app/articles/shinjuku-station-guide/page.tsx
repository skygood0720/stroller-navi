import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "新宿駅ベビーカーガイド｜エレベーター出口・授乳室・ルート完全解説 | ベビーカーナビ",
  description: "新宿駅をベビーカーで攻略！エレベーターのある出口・改札・乗り換えルートを路線別に解説。近隣の授乳室・おむつ替えスポットも紹介。",
  keywords: ["新宿駅 ベビーカー", "新宿駅 エレベーター 出口", "新宿駅 授乳室", "新宿 ベビーカー 乗り換え"],
  openGraph: {
    title: "新宿駅ベビーカーガイド｜エレベーター出口・授乳室・ルート完全解説",
    description: "路線別エレベーターの場所・出口・乗り換えルートを徹底解説。",
    url: "https://stroller-navi.vercel.app/articles/shinjuku-station-guide",
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
      "name": "新宿駅でベビーカーを使う場合、どの出口が便利ですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "JR新宿駅は「南口」または「新南口（ミライナタワー口）」が最もベビーカー向けです。エレベーターで地上に出られ、段差が少なく移動しやすいです。" }
    },
    {
      "@type": "Question",
      "name": "新宿駅で小田急線・京王線に乗り換えるベビーカー向けルートは？",
      "acceptedAnswer": { "@type": "Answer", "text": "JRから小田急線へは「南口」のエレベーターで小田急新宿駅の改札階へ直結。京王線は「中央西口」エレベーターで地上に出てから西口広場を経由するか、京王新宿駅のB1エレベーターを利用します。" }
    },
    {
      "@type": "Question",
      "name": "新宿駅周辺で授乳室があるのはどこ？",
      "acceptedAnswer": { "@type": "Answer", "text": "伊勢丹新宿店6F（個室・ミルクお湯・体重計完備）、ルミネ新宿2（ルミネ2）5F、小田急百貨店B2Fベビー用品売場付近に授乳室があります。" }
    },
  ],
};

export default function ShinjukuStationGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>新宿駅ガイド</span>
          </nav>
          <div className="text-3xl mb-2">🚉</div>
          <h1 className="text-xl font-black leading-snug">
            新宿駅ベビーカーガイド<br />
            <span className="text-base font-bold opacity-90">エレベーター出口・乗り換えルート完全解説</span>
          </h1>
          <p className="text-[11px] text-white/70 mt-2">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年5月" readTime="約8分" category="駅ガイド" />

          {/* リード文 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              1日の乗降客数が世界最多クラスの新宿駅は、ベビーカーでの移動が難しい駅の筆頭としてよく挙げられます。
              しかし、正しいルートを知っていれば、ベビーカーでも十分に移動できます。
              この記事では路線別のエレベーター位置・ベビーカー向けの出口・乗り換えルートを実際に歩いて確認した情報をもとに詳しく解説します。
            </p>
          </section>

          {/* 全体マップ */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">📌 まず押さえる3つのポイント</h2>
            <div className="space-y-3">
              {[
                { num: "1", title: "「南口」「新南口」を基本にする", desc: "JR新宿駅でベビーカー移動がしやすいのは南口エリア。エレベーターが複数あり、南口改札からミライナタワー・バスタ新宿・小田急方面へスムーズに移動できます。" },
                { num: "2", title: "ラッシュ時間帯は避けるか端の車両を利用", desc: "7:30〜9:30、17:30〜20:00はエレベーター待ちが発生しやすい時間帯。この時間はできるだけ避けるか、先頭・最後尾車両付近のエレベーターを使うと待ち時間を減らせます。" },
                { num: "3", title: "構内図アプリを事前にDL", desc: "JR東日本の「JR東日本アプリ」では駅構内図のエレベーター位置をリアルタイムで確認できます。おでかけ前にDLしておくと便利です。" },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{item.num}</span>
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
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟠 JR新宿駅のエレベーター</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-orange-700 mb-2">南口エリア（最もベビーカー向け）</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-400 shrink-0">▶</span><span><strong>南口改札</strong>：改札外にエレベーターあり。ミライナタワー・バスタ新宿に直結。小田急線への乗り換えも南口が最短。</span></li>
                  <li className="flex gap-2"><span className="text-orange-400 shrink-0">▶</span><span><strong>新南口（ミライナタワー口）</strong>：高島屋・NEWoMan方面。エレベーターで直接地上へ出られる。段差ゼロで最もストレスが少ない出口。</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-orange-700 mb-2">東口・西口エリア</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-400 shrink-0">▶</span><span><strong>東口改札</strong>：改札外にエレベーターあり。伊勢丹・ルミネエスト方面。ただし地上に出るまでの動線がやや複雑。</span></li>
                  <li className="flex gap-2"><span className="text-orange-400 shrink-0">▶</span><span><strong>西口改札</strong>：地下通路経由で西口広場へ。京王百貨店・小田急百貨店方面。エレベーターは改札外（西口地下広場B1）にある。</span></li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-3">
                <p className="text-xs font-bold text-orange-700 mb-1">💡 ホームのエレベーター位置</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  山手線・中央線・埼京線など各路線のホームにエレベーターあり。
                  山手線は<strong>1〜3番線ホームの南端付近</strong>、埼京線は<strong>南端（新南口寄り）</strong>のエレベーターが乗り換えに便利。
                  事前にJR東日本のサイトで「エレベーター設置位置」をご確認ください。
                </p>
              </div>
            </div>
          </section>

          {/* 小田急線 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟣 小田急線新宿駅のエレベーター</h2>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex gap-2"><span className="text-purple-400 shrink-0">▶</span><span><strong>西口改札付近</strong>：地下1階ホームとコンコースをつなぐエレベーターあり。JR南口からの乗り換えが最短ルート。</span></li>
              <li className="flex gap-2"><span className="text-purple-400 shrink-0">▶</span><span><strong>地下ホーム</strong>：ホームと改札階（B1）間にエレベーターあり。改札から外に出る際は小田急百貨店のエレベーターを利用して地上へ。</span></li>
            </ul>
            <div className="bg-purple-50 rounded-xl p-3 mt-3">
              <p className="text-xs font-bold text-purple-700 mb-1">🔁 JRから小田急への乗り換えルート（ベビーカー向け）</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                JR南口改札 → 改札外エレベーターで地下1Fへ → 南口地下広場を直進 → 小田急線西口改札へ。
                所要時間：約5〜7分。エスカレーターなしでベビーカーで移動可能。
              </p>
            </div>
          </section>

          {/* 京王線 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🟢 京王線新宿駅のエレベーター</h2>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">▶</span><span><strong>中央口改札付近</strong>：地下1Fのホームから改札階へのエレベーターあり。</span></li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">▶</span><span><strong>地上へのルート</strong>：改札を出て京王モール内を通り、西口広場のエレベーターで地上へ出る。または高島屋タイムズスクエア方面へ迂回するルートもある。</span></li>
            </ul>
            <div className="bg-green-50 rounded-xl p-3 mt-3">
              <p className="text-xs font-bold text-green-700 mb-1">🔁 JRから京王への乗り換えルート（ベビーカー向け）</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                JR西口改札 → 地下通路を西へ進む → 京王新宿駅中央口改札へ。
                西口広場の地下通路はフラットでベビーカー移動しやすい。所要時間：約5分。
              </p>
            </div>
          </section>

          {/* 都営・地下鉄 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🔵 都営新宿線・東京メトロ丸ノ内線</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-blue-700 mb-2">都営新宿線</h3>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li className="flex gap-2"><span className="text-blue-400 shrink-0">▶</span><span>新宿駅「A12出口」付近にエレベーターあり。JR新宿駅東口から地下通路を通って移動できる。</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-700 mb-2">東京メトロ丸ノ内線</h3>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">▶</span><span>新宿駅「A14出口」または「B10出口」にエレベーター。ホームから改札階へのエレベーターも設置。地下3Fのホームから地上まで時間がかかるので余裕をもって移動を。</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* 授乳室・おむつ替え */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">🍼 新宿駅周辺の授乳室・おむつ替えスポット</h2>
            <div className="space-y-3">
              {[
                {
                  name: "伊勢丹新宿店 6F ベビー休憩室",
                  tags: ["個室授乳室", "ミルクお湯", "体重計", "電子レンジ"],
                  comment: "新宿エリアで最高品質の授乳室。個室で静か。東口から徒歩3分。",
                  rank: "🥇",
                },
                {
                  name: "ルミネ新宿2（ルミネ2）5F",
                  tags: ["授乳室", "おむつ替え"],
                  comment: "南口直結でアクセス抜群。授乳コーナーとおむつ替え台あり。",
                  rank: "🥈",
                },
                {
                  name: "小田急百貨店 新宿店 B2F",
                  tags: ["授乳室", "おむつ替え", "ベビーチェア"],
                  comment: "西口から直結でベビー用品売場に近い。比較的空いていることが多い。",
                  rank: "🥉",
                },
                {
                  name: "NEWoMan新宿 2F",
                  tags: ["授乳室", "おむつ替え"],
                  comment: "新南口直結。おしゃれな環境で落ち着いて授乳できる。",
                  rank: "4位",
                },
              ].map((spot) => (
                <div key={spot.name} className="bg-gray-50 rounded-xl p-3.5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-gray-500 shrink-0">{spot.rank}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{spot.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {spot.tags.map((t) => (
                          <span key={t} className="text-[10px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded-full">{t}</span>
                        ))}
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
            <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-4">💡 新宿駅をベビーカーで移動するコツ</h2>
            <div className="space-y-3">
              {[
                { emoji: "🕐", tip: "平日10〜16時が最もスムーズ。週末の12〜14時はエレベーター待ちが長い傾向がある。" },
                { emoji: "📱", tip: "JR東日本アプリで「エレベーター」フィルターをかけると駅構内図のエレベーター位置が一目でわかる。" },
                { emoji: "🔋", tip: "新宿駅の乗り換えは距離が長いため、バッテリー残量に注意。電動アシスト付きベビーカーは特に充電しておくと安心。" },
                { emoji: "👶", tip: "抱っこ紐もバッグに常備しておくと、エレベーターが使えない緊急時に対応できる。" },
                { emoji: "🗺️", tip: "南口・新南口・東口それぞれの出口で地上の景色が大きく変わる。初めて来る場合はGoogleマップで目的地の方向を確認してから出口を選ぼう。" },
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
                { href: "/articles/shibuya-station-guide", name: "渋谷駅ベビーカーガイド", desc: "スクランブル交差点・ヒカリエ・109方面のエレベーター" },
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

          <ArticleAreaNav currentSlug="shinjuku-station-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
