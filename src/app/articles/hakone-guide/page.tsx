import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】箱根 子連れ・赤ちゃん連れおでかけ完全ガイド｜温泉・ロープウェイ・授乳室まとめ | ベビーカーナビ",
  description: "箱根で赤ちゃん・子連れでおでかけするための完全ガイド。箱根ロープウェイ・大涌谷・箱根湯本・芦ノ湖の授乳室・ベビーカー対応を徹底解説。赤ちゃん歓迎の温泉宿情報も。",
  keywords: ["箱根 子連れ", "箱根 赤ちゃん", "箱根 授乳室", "箱根 ベビーカー", "箱根 温泉 赤ちゃん", "箱根ロープウェイ 子連れ", "箱根 日帰り 子連れ", "箱根 おでかけ"],
  openGraph: {
    title: "箱根 子連れ・赤ちゃん連れおでかけ完全ガイド | ベビーカーナビ",
    description: "箱根ロープウェイ・大涌谷・芦ノ湖の子連れ情報。赤ちゃん歓迎の温泉宿も紹介します。",
    url: "https://stroller-navi.vercel.app/articles/hakone-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function HakoneGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "箱根 子連れ・赤ちゃん連れおでかけ完全ガイド",
    "description": "箱根ロープウェイ・大涌谷・芦ノ湖・温泉の赤ちゃん連れ対応情報を徹底解説",
    "url": "https://stroller-navi.vercel.app/articles/hakone-guide",
    "datePublished": "2026-07-01",
    "dateModified": "2026-07-01",
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "箱根ロープウェイに赤ちゃん連れで乗れますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "乗れます。ゴンドラ内は立ちスペースがあり、ベビーカーは折り畳んで乗車します。赤ちゃんは抱っこで乗ることになります。大涌谷付近は硫黄の匂いが強いため、敏感な赤ちゃんは短時間の滞在がおすすめです。" }
      },
      {
        "@type": "Question",
        "name": "箱根温泉は赤ちゃんも入れますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "一般的に3ヶ月以降の赤ちゃんは入浴可能とされていますが、温泉の泉質・温度・硫黄分によって向き不向きがあります。子連れ歓迎を明示している宿を選び、入浴前に宿に確認しましょう。" }
      },
      {
        "@type": "Question",
        "name": "箱根の授乳室はどこにありますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "箱根湯本駅周辺のショッピングエリア「箱根湯本ユネッサン」・箱根町総合観光案内所などに授乳室があります。主要ホテルや旅館にも授乳スペースがあることが多いです。" }
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">お役立ち記事</Link>
            <span className="mx-1.5">›</span>
            <span>箱根子連れガイド</span>
          </nav>
          <h1 className="text-lg font-black leading-tight">
            【2026年最新】箱根 子連れ・赤ちゃん連れ<br />おでかけ完全ガイド
          </h1>
          <p className="text-[11px] opacity-80 mt-2">ロープウェイ・大涌谷・芦ノ湖・温泉 / 読了時間：約10分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年7月" readTime="約10分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📋 この記事でわかること</h2>
              <ol className="space-y-2 text-sm text-brand-700">
                {["箱根観光の子連れ基本情報とおすすめエリア", "箱根ロープウェイ・大涌谷の乗り方・注意点", "芦ノ湖・海賊船の子連れ情報", "箱根の授乳室・おむつ替え場所まとめ", "赤ちゃん歓迎の温泉選び方", "東京・横浜からのアクセスと移動のコツ"].map((item, i) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-400 font-bold">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">箱根は子連れ旅行の定番リゾート</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                神奈川県の西部、富士山を望む箱根は東京から約1時間半でアクセスできる人気リゾートエリアです。温泉・ロープウェイ・美術館・芦ノ湖など、家族で楽しめるコンテンツが充実しており、<strong>赤ちゃん連れ旅行の目的地として人気ナンバーワン</strong>クラスの場所です。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                エリアが広く起伏があるため、事前に「どこで何をするか」を絞っておくのがポイント。初めての赤ちゃん連れ箱根なら、<strong>箱根湯本エリアか芦ノ湖エリアに的を絞る</strong>のがおすすめです。
              </p>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🚡 箱根ロープウェイ・大涌谷の子連れ情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                箱根観光のハイライトの一つ、箱根ロープウェイ。桃源台〜姥子〜大涌谷〜早雲山を結ぶ全長4kmのロープウェイからは富士山・芦ノ湖・大涌谷の絶景が楽しめます。
              </p>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-800 mb-2">✅ 乗車のポイント</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・ゴンドラ（約18人乗り）にベビーカーは折り畳んで持ち込み可</li>
                    <li>・赤ちゃんは抱っこ紐で抱えて乗車</li>
                    <li>・所要時間は各区間10〜15分で赤ちゃんも飽きにくい</li>
                    <li>・眺めが良く、富士山が見えれば感動間違いなし</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-800 mb-2">⚠️ 大涌谷の注意点</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>・火山ガス（硫黄臭）が強い。呼吸器が弱い赤ちゃんは短時間に</li>
                    <li>・ガス規制で立入禁止になることがある（公式サイトで事前確認）</li>
                    <li>・地面が不整地・坂道あり。ベビーカーよりも抱っこ紐が安全</li>
                    <li>・黒たまご（名物）は赤ちゃんには与えないこと</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">⛵ 芦ノ湖・海賊船の子連れ情報</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                富士山を背景にした芦ノ湖は箱根観光のシンボル。元箱根港・箱根港・桃源台港を結ぶ「箱根海賊船」は、大人気の観光スポットです。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>船内は広くベビーカーで乗船可能（折り畳み不要な場合も）</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>所要時間約30〜40分。船内にトイレあり</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>各港にトイレ・休憩所あり（おむつ替え台は要確認）</span></li>
                <li className="flex gap-2"><span className="text-green-500">✓</span><span>湖畔のカフェ・レストランは子連れ対応が多め</span></li>
                <li className="flex gap-2"><span className="text-amber-500">⚠</span><span>混雑時は乗船待ちが長くなる。箱根フリーパスでスムーズに</span></li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🍼 授乳室・おむつ替え場所まとめ</h2>
              <div className="space-y-2">
                {[
                  { place: "箱根湯本駅構内", info: "改札外にベビールームあり。おむつ替え台・授乳スペース完備" },
                  { place: "箱根町港 観光案内所", info: "芦ノ湖畔の案内所内。おむつ替え台設置あり" },
                  { place: "元箱根港周辺", info: "売店・レストラン内のトイレにおむつ替え台あり（店舗による）" },
                  { place: "大涌谷 観光センター", info: "売店・食堂の近くにトイレ・おむつ替え台あり" },
                  { place: "箱根の各ホテル・旅館", info: "ロビーのトイレに授乳室・おむつ替え台を設けている施設が多い" },
                ].map((item) => (
                  <div key={item.place} className="border border-gray-100 rounded-xl p-3">
                    <p className="text-xs font-bold text-gray-800 mb-1">📍 {item.place}</p>
                    <p className="text-xs text-gray-600">{item.info}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">♨️ 赤ちゃん歓迎の温泉の選び方</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                箱根温泉は赤ちゃんの「初温泉デビュー」の地として選ぶ親御さんも多いスポット。ただし温泉の泉質によって赤ちゃんへの影響が異なります。
              </p>
              <div className="bg-blue-50 rounded-xl p-4 mb-3">
                <p className="text-xs font-bold text-blue-800 mb-2">🛁 赤ちゃんに向いている温泉の泉質</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>・<strong>単純温泉</strong>：刺激が少なくマイルド。赤ちゃんに最も向いている</li>
                  <li>・<strong>塩化物泉</strong>：塩分で肌を守る効果あり。低刺激でOK</li>
                  <li>・<strong>硫黄泉</strong>（大涌谷系）：刺激強め。赤ちゃんには不向き</li>
                  <li>・<strong>強酸性泉</strong>：肌への刺激が強くNG</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-bold text-xs">赤ちゃん連れ宿を選ぶポイント</p>
                <ul className="text-xs space-y-1">
                  <li>・「赤ちゃん歓迎」「ベビーベッド貸出」を明示しているか確認</li>
                  <li>・おむつ替えスペース・電子レンジ（ミルク温め）の有無を確認</li>
                  <li>・家族風呂（貸切温泉）があると安心して入浴できる</li>
                  <li>・離乳食対応メニューや食事時間の融通が利くか</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🗺️ 子連れおすすめモデルコース</h2>
              <div className="space-y-3 mb-4">
                <p className="text-xs font-bold text-gray-500">【1泊2日】東京発・箱根子連れ旅行コース</p>
                <p className="text-xs font-bold text-brand-600">1日目</p>
                {[
                  { time: "10:00", place: "箱根湯本着", desc: "荷物をホテルに預け、湯本温泉街を散策。甘酒・湯もちなど試食" },
                  { time: "12:00", place: "湯本でランチ", desc: "駅前の飲食店で早めのランチ（子連れ対応店を選ぶ）" },
                  { time: "14:00", place: "強羅・仙石原方面へ", desc: "バスで移動。仙石原のすすき草原（秋）や箱根ガラスの森を散策" },
                  { time: "16:00", place: "ホテルチェックイン", desc: "早めにチェックインして赤ちゃんを休ませる" },
                  { time: "18:00", place: "夕食・温泉", desc: "家族風呂か貸切湯で赤ちゃん初温泉デビュー" },
                ].map((step) => (
                  <div key={step.time} className="flex gap-3">
                    <span className="text-brand-600 font-bold text-xs w-12 shrink-0 pt-0.5">{step.time}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{step.place}</p>
                      <p className="text-xs text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
                <p className="text-xs font-bold text-brand-600 mt-2">2日目</p>
                {[
                  { time: "9:00", place: "朝風呂・朝食", desc: "ゆっくり朝食を取って赤ちゃんのペースで出発準備" },
                  { time: "10:30", place: "箱根ロープウェイ", desc: "早雲山〜大涌谷。富士山が見える確率が高い午前中に" },
                  { time: "12:00", place: "桃源台でランチ", desc: "芦ノ湖畔のレストランで食事。子連れメニューあり" },
                  { time: "13:30", place: "海賊船 芦ノ湖遊覧", desc: "桃源台〜元箱根港。湖上から富士山を望む絶景体験" },
                  { time: "15:00", place: "帰路", desc: "小田急ロマンスカーで新宿へ（指定席でゆったり）" },
                ].map((step) => (
                  <div key={step.time} className="flex gap-3">
                    <span className="text-brand-600 font-bold text-xs w-12 shrink-0 pt-0.5">{step.time}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{step.place}</p>
                      <p className="text-xs text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">🚃 東京からのアクセス</h2>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-xl p-3.5 text-xs text-gray-700">
                  <p className="font-bold mb-1">小田急ロマンスカー（新宿〜箱根湯本）</p>
                  <p>約85分。全席指定で赤ちゃん連れにも快適。荷物が多い子連れ旅行に最適</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3.5 text-xs text-gray-700">
                  <p className="font-bold mb-1">JR東海道新幹線（東京〜小田原）</p>
                  <p>東京〜小田原 約35分。小田原から箱根登山電車で箱根湯本まで約15分</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3.5 text-xs text-gray-700">
                  <p className="font-bold text-green-800 mb-1">💡 箱根フリーパスがおすすめ</p>
                  <p>ロープウェイ・海賊船・バスが乗り放題。子連れ旅行は距離が読めないので乗り降り自由なフリーパスが安心</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-50 to-orange-50 rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold mb-3">まとめ：箱根子連れ旅行のポイント</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-brand-500 font-bold">1.</span><span>大涌谷の硫黄臭は敏感な赤ちゃんに注意。短時間で</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">2.</span><span>授乳室は箱根湯本駅と各港の案内所を活用</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">3.</span><span>温泉は単純泉・塩化物泉が赤ちゃんに向いている</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">4.</span><span>宿は「赤ちゃん歓迎」「貸切湯あり」を選ぶ</span></li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">5.</span><span>箱根フリーパスで移動を自由に。ロマンスカーは事前予約</span></li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📖 関連記事</h2>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { href: "/articles/baby-onsen", text: "赤ちゃん連れ温泉旅行完全ガイド" },
                  { href: "/articles/kamakura-guide", text: "鎌倉 子連れおでかけガイド" },
                  { href: "/articles/yokohama-guide", text: "横浜 子連れおでかけガイド" },
                  { href: "/articles/stroller-shinkansen", text: "新幹線でのベビーカー・赤ちゃん乗車ガイド" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-brand-600 hover:underline flex gap-2 items-center">
                    <span className="text-gray-300">›</span>{item.text}
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
