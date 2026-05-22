import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "ベビーカーで電車に乗るときのマナーと注意点｜たたむ必要はある？ | ベビーカーナビ",
  description: "ベビーカーで電車に乗るときのルール・マナー・注意点を解説。折りたたむべき？エレベーターの探し方、混雑時のコツ、優先スペースの使い方まで初心者ママパパ向けに完全解説。",
  keywords: ["ベビーカー 電車 マナー", "ベビーカー 電車 たたむ", "ベビーカー 電車 優先スペース", "ベビーカー 混雑 電車", "ベビーカー エレベーター", "ベビーカー 電車 マナー 2026"],
  openGraph: {
    title: "ベビーカーで電車に乗るときのマナーと注意点",
    description: "折りたたむ必要はある？混雑時のコツ・エレベーターの探し方・優先スペースの使い方を解説。",
    url: "https://stroller-navi.vercel.app/articles/train-stroller-manner",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function TrainStrollerMannerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ベビーカーで電車に乗るときのマナーと注意点",
    "description": "ベビーカーで電車に乗るときのルール・マナー・注意点を解説。",
    "url": "https://stroller-navi.vercel.app/articles/train-stroller-manner",
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
        "name": "電車の中でベビーカーはたたまないといけませんか？",
        "acceptedAnswer": { "@type": "Answer", "text": "国土交通省・各鉄道会社の公式見解では、混雑していない場合はたたまなくてOKとされています。ただし、混雑時や他の乗客の迷惑になる場合は折りたたむか、子どもを抱っこしてベビーカーをたたむ配慮が求められます。" },
      },
      {
        "@type": "Question",
        "name": "ベビーカーで電車に乗るときの優先スペースはどこですか？",
        "acceptedAnswer": { "@type": "Answer", "text": "多くの路線で車端部（車両の端）や優先席付近にベビーカーを置けるスペースがあります。JR・東京メトロ・私鉄各社の新型車両にはベビーカースペースが設置されているものも増えています。" },
      },
      {
        "@type": "Question",
        "name": "ベビーカーで電車に乗るときはどの時間帯がおすすめですか？",
        "acceptedAnswer": { "@type": "Answer", "text": "平日の10〜15時台が最も空いていておすすめです。朝7〜9時・夕方17〜19時の通勤ラッシュ時間帯は避けるのが無難です。" },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-slate-600 via-slate-700 to-gray-800 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>電車マナー</span>
          </nav>
          <div className="text-4xl mb-3">🚃</div>
          <h1 className="text-xl font-black leading-snug">
            ベビーカーで電車に乗るときの<br />マナーと注意点
          </h1>
          <p className="text-xs text-white/80 mt-2">折りたたむ必要はある？混雑時のコツ・優先スペースの使い方</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              「電車でベビーカーをたたまないといけない？」「混んでいるとき白い目で見られそう…」
              そんな不安を抱えているママ・パパは多いですよね。
              このガイドでは<strong>国土交通省や鉄道会社の公式見解</strong>をもとに、
              ベビーカーで電車に乗るときの正しいマナーと実践的なコツをまとめました。
            </p>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">📋 まず知っておきたい：公式ルール</h2>
            <div className="bg-blue-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
              <p className="font-bold text-blue-800 mb-2">国土交通省の見解（2014年～）</p>
              <p>
                「ベビーカーは混雑していない場合、折りたたまずに乗車することができます」
                と明示されています。<strong>折りたたみは義務ではありません。</strong>
              </p>
            </div>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex items-start gap-2 bg-green-50 rounded-xl p-3">
                <span className="text-green-500 font-bold">✅</span>
                <span>空いている時間帯はそのまま乗車してOK</span>
              </div>
              <div className="flex items-start gap-2 bg-green-50 rounded-xl p-3">
                <span className="text-green-500 font-bold">✅</span>
                <span>JR・東京メトロ・私鉄各社も公式にベビーカー乗車を認めています</span>
              </div>
              <div className="flex items-start gap-2 bg-amber-50 rounded-xl p-3">
                <span className="text-amber-500 font-bold">⚠️</span>
                <span>混雑時は他の乗客への配慮として、折りたたむか端の方へ寄せるのがマナー</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🕐 おすすめの乗車時間帯</h2>
            <div className="space-y-2">
              {[
                { time: "平日 10:00〜15:00", label: "最もおすすめ ◎", color: "bg-green-100 text-green-700", detail: "通勤ラッシュが落ち着き、車内が空いている時間帯" },
                { time: "土日祝日 午前中", label: "比較的ゆとりあり ○", color: "bg-blue-100 text-blue-700", detail: "行楽地の逆方向を選ぶとより空いている" },
                { time: "平日 7:00〜9:00", label: "避けたい ✕", color: "bg-red-100 text-red-700", detail: "朝の通勤ラッシュ。ベビーカーでの乗車は非常に困難" },
                { time: "平日 17:00〜19:00", label: "できれば避けたい △", color: "bg-orange-100 text-orange-700", detail: "帰宅ラッシュ。乗車できても赤ちゃんが疲れやすい" },
              ].map((t) => (
                <div key={t.time} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                  <div>
                    <div className="text-xs font-bold">{t.time}</div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${t.color}`}>{t.label}</span>
                    <div className="text-[10px] text-gray-500 mt-1">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🛗 エレベーターの探し方・コツ</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>駅のエレベーターは思ったより分かりにくい場所にあることが多いです。</p>
              <div className="space-y-2">
                {[
                  { tip: "Googleマップで「〇〇駅 エレベーター」と検索", detail: "ストリートビューで事前確認もできる" },
                  { tip: "各鉄道会社の公式アプリを活用", detail: "東京メトロ・JRなどはアプリでエレベーター位置が確認できる" },
                  { tip: "改札口に近い端の出口を狙う", detail: "エレベーターは改札端部・コンコース端に設置されていることが多い" },
                  { tip: "「バリアフリールート」表示を探す", detail: "駅構内の案内板にエレベーターのマークを探そう" },
                ].map((t) => (
                  <div key={t.tip} className="flex items-start gap-2 bg-slate-50 rounded-xl p-3">
                    <span className="text-slate-500">🛗</span>
                    <div>
                      <div className="text-xs font-bold">{t.tip}</div>
                      <div className="text-[10px] text-gray-500">{t.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">💡 実践的な乗り方のコツ10選</h2>
            <div className="space-y-2 text-xs">
              {[
                "車両の端（車端部）に乗ると置きやすい",
                "乗り込む前にまわりの乗客に「失礼します」と一声かける",
                "ベビーカーのブレーキをかけて動かないよう固定する",
                "電車が揺れる場合はハンドルをしっかり持つ",
                "雨の日はレインカバーの水滴を拭いてから乗車",
                "エレベーターが混雑している場合は次を待つ余裕を持つ",
                "スペースが広い10両編成の場合は先頭・最後尾車両を狙う",
                "ICカードは財布から取り出しやすい場所に",
                "荷物はコンパクトにまとめてベビーカーの下かごに",
                "目的地のエレベーター位置を事前にチェックしておく",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 rounded-xl p-3">
                  <span className="font-bold text-slate-500 min-w-[20px]">{i + 1}.</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-4">❓ よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "電車の中でベビーカーはたたまないといけませんか？",
                  a: "国土交通省・各鉄道会社の公式見解では、混雑していない場合はたたまなくてOKとされています。ただし、混雑時は折りたたむか端に寄せる配慮が求められます。",
                },
                {
                  q: "ベビーカーで電車に乗るときの優先スペースはどこですか？",
                  a: "多くの路線で車端部（車両の端）や優先席付近にベビーカーを置けるスペースがあります。新型車両にはベビーカースペースが設置されているものも増えています。",
                },
                {
                  q: "ベビーカーで電車に乗るときはどの時間帯がおすすめですか？",
                  a: "平日の10〜15時台が最も空いていておすすめです。朝7〜9時・夕方17〜19時の通勤ラッシュ時間帯は避けるのが無難です。",
                },
                {
                  q: "ベビーカーで改札を通るにはどうすれば？",
                  a: "幅広の「多機能改札口」（車いす・ベビーカー対応の広い改札）を使用してください。駅員さんに声をかければ案内してもらえます。",
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
              <Link href="/articles/stroller-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">🚼</span>
                <div>
                  <div className="text-xs font-bold">ベビーカーでのおでかけ完全ガイド</div>
                  <div className="text-[10px] text-gray-500">準備・ルート選び・施設選びのポイント</div>
                </div>
              </Link>
              <Link href="/articles/zero-age-outing" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">👶</span>
                <div>
                  <div className="text-xs font-bold">0歳の赤ちゃんはいつから外出できる？</div>
                  <div className="text-[10px] text-gray-500">初めての外出タイミングと準備まとめ</div>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-slate-600 to-gray-700 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 近くのスポットを探す
            </Link>
          </div>
                  <ArticleAreaNav currentSlug="train-stroller-manner" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
