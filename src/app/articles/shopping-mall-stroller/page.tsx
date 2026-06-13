import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "ベビーカーに優しいショッピングモール15選【関東・関西】授乳室・おむつ替え完備 | ベビーカーナビ",
  description: "ベビーカーで快適に使えるショッピングモールを関東・関西から15施設厳選。授乳室・おむつ替え台・ベビーカー貸出・エレベーター情報を徹底比較。雨の日子連れにも最適。",
  keywords: ["ショッピングモール ベビーカー", "子連れ ショッピングモール", "授乳室 ショッピングモール", "ベビーカー貸出 ショッピングモール", "雨の日 子連れ ショッピング"],
  openGraph: {
    title: "ベビーカーに優しいショッピングモール15選【関東・関西】",
    description: "授乳室・おむつ替え・ベビーカー貸出が充実したショッピングモールを厳選紹介。",
    url: "https://stroller-navi.vercel.app/articles/shopping-mall-stroller",
    type: "article",
  },
};

const MALLS_KANTO = [
  {
    name: "LaLaport TOYOSU（豊洲）",
    area: "東京・豊洲",
    nursing: "◎（完全個室・電子レンジあり）",
    diaper: "◎（各フロア設置）",
    elevator: "◎（各棟エレベーター完備）",
    strollerRental: "あり（無料）",
    babyChair: "◎（飲食エリア全店）",
    desc: "東京最大級のモール。キッズ向けテナント充実。カリヨン広場で子供が走り回れる。授乳室は完全個室で複数あり安心。",
    tips: "週末は混雑するため平日午前中がおすすめ",
  },
  {
    name: "イオンレイクタウン（越谷）",
    area: "埼玉・越谷",
    nursing: "◎（複数か所・授乳ブース完備）",
    diaper: "◎（各フロア）",
    elevator: "◎（複数エレベーター）",
    strollerRental: "あり（無料）",
    babyChair: "◎",
    desc: "国内最大級のショッピングモール。子育て世代に特に人気。ベビー用品テナントも豊富。",
    tips: "授乳室は「ベビールーム」として複数フロアに配置",
  },
  {
    name: "ららぽーと海老名（海老名）",
    area: "神奈川・海老名",
    nursing: "◎（清潔・広め）",
    diaper: "◎（全フロア）",
    elevator: "◎",
    strollerRental: "あり（有料）",
    babyChair: "◎",
    desc: "小田急・JRからアクセス良好。キッズランドや絵本コーナーがあり子連れに人気。週末の混雑少なめ。",
    tips: "2Fのベビールームが特に広くきれい",
  },
  {
    name: "三井アウトレットパーク 木更津（木更津）",
    area: "千葉・木更津",
    nursing: "○（複数か所）",
    diaper: "◎",
    elevator: "○（一部エリア）",
    strollerRental: "あり（無料）",
    babyChair: "○",
    desc: "屋外型アウトレット。平屋建てが多くベビーカーで移動しやすい。天気のいい日のお出かけに最適。",
    tips: "冬は寒いため防寒対策を。春秋がベストシーズン",
  },
  {
    name: "コクーンシティ（大宮）",
    area: "埼玉・さいたま",
    nursing: "◎（電子レンジ・電気ポットあり）",
    diaper: "◎",
    elevator: "◎",
    strollerRental: "あり（無料）",
    babyChair: "◎",
    desc: "大宮駅直結でアクセス抜群。屋内型モールで天候に関係なく快適。授乳室の設備が特に充実。",
    tips: "キッズスペース内の「こどもゾーン」が0〜3歳に人気",
  },
  {
    name: "IKEA港北（横浜）",
    area: "神奈川・横浜",
    nursing: "◎（きれい・広い）",
    diaper: "◎（複数か所）",
    elevator: "◎",
    strollerRental: "あり（無料）",
    babyChair: "◎（レストランに多数）",
    desc: "世界基準のベビーフレンドリー施設。授乳室・おむつ替えが充実。レストランは子連れに特に寛容な雰囲気。",
    tips: "ベビーカーは店内の導線に沿って移動しやすい設計",
  },
  {
    name: "グランベリーパーク（南町田）",
    area: "東京・南町田",
    nursing: "◎",
    diaper: "◎",
    elevator: "◎",
    strollerRental: "あり（有料）",
    babyChair: "◎",
    desc: "アウトレット＋公園（鶴間公園）が隣接。ショッピング後に公園遊びもできる。コドモデパートなどキッズテナント充実。",
    tips: "鶴間公園は無料で遊べる。一日遊べる充実スポット",
  },
  {
    name: "テラスモール湘南（藤沢）",
    area: "神奈川・藤沢",
    nursing: "◎（全フロア設置）",
    diaper: "◎",
    elevator: "◎",
    strollerRental: "あり（無料）",
    babyChair: "◎",
    desc: "湘南最大級。パパも楽しめるスポーツ・アウトドアブランドが充実。授乳室は全フロアに完備。",
    tips: "1F吹き抜けのキッズスペースで子供が遊べる",
  },
];

const MALLS_KANSAI = [
  {
    name: "イオンモール大日（大阪）",
    area: "大阪・守口",
    nursing: "◎（完全個室）",
    diaper: "◎（各フロア）",
    elevator: "◎",
    strollerRental: "あり（無料）",
    babyChair: "◎",
    desc: "大阪北東部最大級のモール。キッズ向けテナントが充実。地下鉄直結でアクセス良好。授乳室は清潔で広い。",
    tips: "平日午前は比較的空いている",
  },
  {
    name: "ららぽーとEXPOCITY（吹田）",
    area: "大阪・吹田",
    nursing: "◎（複数か所・設備充実）",
    diaper: "◎",
    elevator: "◎",
    strollerRental: "あり（無料）",
    babyChair: "◎",
    desc: "ニフレル・大観覧車と隣接する巨大複合施設。1日充分楽しめる。関西最大級の授乳室あり。",
    tips: "ニフレルとセットで楽しむ家族連れが多い",
  },
  {
    name: "神戸ハーバーランド（神戸）",
    area: "兵庫・神戸",
    nursing: "○（umieに設置）",
    diaper: "◎（各施設）",
    elevator: "◎",
    strollerRental: "あり（有料）",
    babyChair: "○",
    desc: "海沿いのロケーションが絶景。umieモールを中心に子連れファミリーに人気。海風が心地よいプロムナードはベビーカー通行可。",
    tips: "天気のいい日はプロムナード散歩がおすすめ",
  },
];

const TIPS = [
  {
    title: "ベビーカー貸出の事前確認を",
    desc: "「無料」「有料（スイカ等）」「要事前予約」でモールにより異なります。週末は台数不足の場合も。公式サイトで確認を。",
    icon: "🛒",
  },
  {
    title: "授乳室の場所を事前にチェック",
    desc: "授乳室は施設の案内板より公式HPの「フロアガイド」→「サービス」から場所を確認するのが早い。混雑時は番号待ちが発生する施設も。",
    icon: "🍼",
  },
  {
    title: "エレベーターの場所を把握する",
    desc: "大型モールはエスカレーターが主流でエレベーターが少ない場合あり。1か所だけ遠いことも。入館時にエレベーター位置を確認しておくと安心。",
    icon: "🛗",
  },
  {
    title: "混雑時間帯を避ける",
    desc: "週末11〜14時は最も混雑。平日午前（10〜12時）か、週末は9〜10時の開店直後が狙い目。授乳室・おむつ替えの待ち時間も減る。",
    icon: "⏰",
  },
];

export default function ShoppingMallStrollerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ベビーカーに優しいショッピングモール15選【関東・関西】",
    "description": "授乳室・おむつ替え台・ベビーカー貸出・エレベーター情報を徹底比較した子連れショッピングモールガイド。",
    "url": "https://stroller-navi.vercel.app/articles/shopping-mall-stroller",
    "datePublished": "2026-06-05",
    "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
    "inLanguage": "ja",
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-violet-500 via-purple-600 to-purple-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>ショッピングモール ベビーカー</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">施設ガイド</span>
            <span className="bg-purple-300/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">🛒 ショッピングモール特集</span>
          </div>
          <h1 className="text-lg font-black leading-snug">
            ベビーカーに優しいショッピングモール15選<br />
            <span className="text-[13px] font-bold opacity-90">【関東・関西】授乳室・おむつ替え完備を徹底比較</span>
          </h1>
        </header>

        <main className="p-5 space-y-6">
          <ArticleAuthor date="2026年6月5日" readTime="8分" category="施設ガイド" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              赤ちゃん連れのショッピングモール選びで大切なのは「授乳室の充実度」「エレベーターの数」「ベビーカー貸出の有無」の3点。このガイドでは<strong>実際に子連れで使いやすいモール</strong>を厳選しました。
            </p>
            <div className="mt-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
              <p className="text-xs font-bold text-purple-800 mb-1">📊 評価基準</p>
              <div className="grid grid-cols-2 gap-1 text-xs text-purple-700">
                <span>◎ = 特に充実・複数設置</span>
                <span>○ = 標準的な設備あり</span>
                <span>△ = 一部設置・要確認</span>
                <span>× = なし・不明</span>
              </div>
            </div>
          </section>

          {/* 関東エリア */}
          <section>
            <h2 className="text-base font-bold mb-3">🏙️ 関東エリア（{MALLS_KANTO.length}施設）</h2>
            <div className="space-y-3">
              {MALLS_KANTO.map((mall, i) => (
                <div key={mall.name} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-black shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{mall.name}</h3>
                      <span className="text-[10px] text-gray-400">{mall.area}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{mall.desc}</p>
                  <div className="grid grid-cols-2 gap-1.5 mb-2">
                    {[
                      { label: "授乳室", val: mall.nursing },
                      { label: "おむつ替え", val: mall.diaper },
                      { label: "エレベーター", val: mall.elevator },
                      { label: "ベビーカー貸出", val: mall.strollerRental },
                    ].map(({ label, val }) => (
                      <div key={label} className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5">
                        <span className="text-[9px] text-gray-500 shrink-0">{label}</span>
                        <span className="text-[10px] font-bold text-gray-800">{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-50 rounded-lg px-3 py-1.5">
                    <p className="text-[10px] text-yellow-800">💡 {mall.tips}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 関西エリア */}
          <section>
            <h2 className="text-base font-bold mb-3">⛩️ 関西エリア（{MALLS_KANSAI.length}施設）</h2>
            <div className="space-y-3">
              {MALLS_KANSAI.map((mall, i) => (
                <div key={mall.name} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-black shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{mall.name}</h3>
                      <span className="text-[10px] text-gray-400">{mall.area}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{mall.desc}</p>
                  <div className="grid grid-cols-2 gap-1.5 mb-2">
                    {[
                      { label: "授乳室", val: mall.nursing },
                      { label: "おむつ替え", val: mall.diaper },
                      { label: "エレベーター", val: mall.elevator },
                      { label: "ベビーカー貸出", val: mall.strollerRental },
                    ].map(({ label, val }) => (
                      <div key={label} className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5">
                        <span className="text-[9px] text-gray-500 shrink-0">{label}</span>
                        <span className="text-[10px] font-bold text-gray-800">{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-50 rounded-lg px-3 py-1.5">
                    <p className="text-[10px] text-yellow-800">💡 {mall.tips}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 活用のコツ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">📋 ショッピングモールを快適に使うコツ</h2>
            <div className="space-y-3">
              {TIPS.map((tip) => (
                <div key={tip.title} className="flex gap-3">
                  <span className="text-2xl shrink-0">{tip.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800 mb-0.5">{tip.title}</p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 関連記事 */}
          <section className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-5 border border-purple-100">
            <h3 className="text-sm font-bold text-purple-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/rainy-day-spots", title: "雨の日でも大丈夫！赤ちゃんと楽しめる室内スポット特集", emoji: "☔" },
                { href: "/articles/restaurant-tips", title: "ベビーカーで入れるレストランの見分け方", emoji: "🍽️" },
                { href: "/articles/nursing-room-tips", title: "授乳室の見つけ方と上手な使い方", emoji: "🍼" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="flex items-center gap-2 text-xs text-purple-700 hover:text-purple-900 hover:underline">
                  <span>{link.emoji}</span>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🏪 全国のスポットをもっと探す</p>
            <p className="text-xs text-gray-500 mb-3">授乳室・ベビーカー貸出で絞り込み検索できます</p>
            <Link href="/spots"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
              スポット一覧を見る →
            </Link>
          </section>

          <ShareButtons title="ベビーカーに優しいショッピングモール15選" url="/articles/shopping-mall-stroller" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
