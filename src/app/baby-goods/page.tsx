import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import AmazonProductCard, { AmazonProduct } from "@/components/AmazonProductCard";
import { AMAZON_ASSOCIATE_ID } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "赤ちゃん・ベビーカーおすすめ商品【2026年】| ベビーカーナビ",
  description: "ベビーカーナビ編集部が厳選した赤ちゃんのおでかけに役立つおすすめ商品。ベビーカー・抱っこ紐・マザーズバッグ・知育おもちゃをカテゴリ別に紹介。",
  keywords: ["ベビーカー おすすめ", "赤ちゃん おでかけ グッズ", "マザーズバッグ おすすめ", "抱っこ紐 おすすめ", "ベビー 知育おもちゃ", "チャイルドシート おすすめ"],
  openGraph: {
    title: "赤ちゃん・ベビーカーおすすめ商品【2026年】",
    description: "おでかけに役立つベビーグッズをカテゴリ別に厳選紹介。",
    url: "https://stroller-navi.vercel.app/baby-goods",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "website",
  },
};

// ──────────────────────────────────────────
// 商品データ
// ASINは実際のAmazon商品ページのURLから確認してください
// 例: amazon.co.jp/dp/【ASIN】
// ──────────────────────────────────────────

const STROLLER_PRODUCTS: AmazonProduct[] = [
  {
    asin: "B0975WYY47",
    name: "コンビ スゴカルα 4キャス compact エッグショック HU",
    description: "新生児から使えるA型ベビーカー。独自クッション「エッグショック」で赤ちゃんの頭部を振動から保護。4輪が自動で向きを変える「4キャス」で段差乗り越えがスムーズ。コンパクト折りたたみで改札も通りやすい。",
    priceRange: "50,000〜65,000円",
    tags: ["A型", "新生児〜", "オート4輪", "コンパクト折りたたみ"],
    emoji: "🚼",
    ageTag: "0ヶ月〜",
    recommend: "電車・バス移動が多いパパママに大人気。エレベーター探しが不要になる「4輪フリー機能」が段差の多い駅でも活躍します。",
  },
  {
    asin: "B0BRZ5RJHB",
    name: "アップリカ ラクーナクッション フリー AB（ブラック）",
    description: "「4輪フリー」機能で横移動・方向転換がラクなA型ベビーカー。赤ちゃんの自然な姿勢をサポートする「メディカル成長マモール」搭載。軽量設計で片手でもたためる。",
    priceRange: "48,000〜62,000円",
    tags: ["A型", "4輪フリー", "軽量", "両対面"],
    emoji: "☀️",
    ageTag: "1ヶ月〜",
    recommend: "混雑したショッピングモールや駅構内で威力を発揮する4輪フリー機能が特に好評。改札の多い都市部のおでかけに最適です。",
  },
  {
    searchKeyword: "アップリカ マール ベビーカー 2025",
    name: "アップリカ マール（フラッグシップモデル）",
    description: "2025年1月発売のアップリカ最上位モデル。走行性・安全性・快適性をすべて最高水準で実現。独自の「オメガクッション」で路面からの振動を大幅カット。ベビーカーナビスコアも最高クラス。",
    priceRange: "90,000〜100,000円",
    tags: ["A型", "最上位モデル", "高走行性", "新生児〜"],
    emoji: "👑",
    ageTag: "0ヶ月〜",
    recommend: "長く使い続けたい方・毎日のおでかけに妥協したくない方へ。価格はプレミアムですが満足度も最上位です。",
  },
  {
    searchKeyword: "コンビ F2 Plus ベビーカー B型 軽量",
    name: "コンビ F2 Plus（B型軽量ベビーカー）",
    description: "約2.9kgの超軽量B型ベビーカー。腰がすわった生後7ヶ月から使えてコンパクト。ワンタッチ折りたたみで改札・電車移動がスムーズ。リーズナブルな価格で2台目にも最適。",
    priceRange: "12,000〜18,000円",
    tags: ["B型", "超軽量2.9kg", "7ヶ月〜", "折りたたみ"],
    emoji: "⚡",
    ageTag: "7ヶ月〜",
    recommend: "帰省・旅行用の2台目、または身軽に動きたい日のサブ機として。Amazonでのコスパ評価が非常に高いモデルです。",
  },
  {
    searchKeyword: "ベビーカー レインカバー A型 B型 対応 防風 透明",
    name: "ベビーカー用 レインカバー（A型・B型対応）",
    description: "突然の雨から赤ちゃんを守る透明PVC素材のレインカバー。視界を確保しながらしっかり雨・風をブロック。ワンタッチで取り付けできてバッグに入るコンパクトサイズ。",
    priceRange: "3,000〜6,000円",
    tags: ["雨の日必須", "防風", "着脱簡単"],
    emoji: "☔",
    recommend: "梅雨・急な雨に備えてベビーカーポケットに常備しておくと安心。対応機種をかならず確認して購入しましょう。",
  },
  {
    searchKeyword: "ベビーカー フットマフ 冬 防寒 ボア",
    name: "ベビーカー用 フットマフ（防寒ボアカバー）",
    description: "秋冬のおでかけに欠かせないボア素材のフットマフ。赤ちゃんの足元をすっぽり包み込み、ベビーカーのベルトを通したまま装着OK。取り外せばひざかけとしても使用可能。",
    priceRange: "4,000〜9,000円",
    tags: ["秋冬必須", "防寒", "ベルト対応", "2way"],
    emoji: "🧸",
    ageTag: "0ヶ月〜",
    recommend: "北海道・東北や冬の外出には必需品。ダウン素材は軽くて保温性◎。ファスナー開閉で温度調節できるものが便利です。",
  },
];

const OUTING_PRODUCTS: AmazonProduct[] = [
  {
    asin: "B07HBGFVFQ",
    name: "エルゴベビー ADAPT カプア（0ヶ月〜インサート不要）",
    description: "新生児からインサート不要で使えるエルゴベビーのロングセラーモデル。前向き・対面・おんぶの3ポジション対応。通気性に優れた素材で夏でも快適。腰・肩への負担を分散する人間工学設計。",
    priceRange: "22,000〜28,000円",
    tags: ["新生児〜インサート不要", "3ポジション", "腰ベルト付き"],
    emoji: "👶",
    ageTag: "0ヶ月〜",
    recommend: "ベビーカーが使えない混雑場所や階段での移動に。エルゴは抱き心地の良さがクチコミで高評価。新生児からインサート不要なのも嬉しいポイント。",
  },
  {
    searchKeyword: "マザーズバッグ リュック 大容量 防水",
    name: "マザーズリュック 大容量・防水タイプ",
    description: "おむつ・着替え・授乳グッズがすっきり入る大容量リュック。ベビーカーのフックにかけやすい形状、防水素材で急な雨にも対応。",
    priceRange: "5,000〜15,000円",
    tags: ["大容量", "防水", "リュック型"],
    emoji: "👜",
    recommend: "両手がフリーになるリュックタイプは赤ちゃんを抱っこしながらの移動に最適です。",
  },
  {
    searchKeyword: "授乳ケープ 360度 ワンタッチ",
    name: "授乳ケープ（360度カバー・ワンタッチタイプ）",
    description: "外出先での授乳時に使う多機能ケープ。360度しっかりカバーしながら通気性を確保。ワンタッチで装着でき、コンパクトに折りたためて持ち運び楽々。",
    priceRange: "2,000〜5,000円",
    tags: ["外出授乳", "360度カバー", "コンパクト"],
    emoji: "🤱",
    recommend: "授乳室が見つからない場面でも安心。薄手で夏でも使いやすいタイプを選ぼう。",
  },
  {
    searchKeyword: "携帯 おむつ替えシート 防水 持ち運び",
    name: "携帯おむつ替えシート（防水・折りたたみ）",
    description: "どこでもおむつ替えができる防水ポータブルシート。床や公園のベンチにそのまま敷いて使えて、使用後はくるっと丸めてコンパクトに。",
    priceRange: "1,500〜3,500円",
    tags: ["防水", "折りたたみ", "どこでも使える"],
    emoji: "🛋️",
    recommend: "おむつ替え台がない場所でも安心。外出先で一枚あると非常に重宝します。",
  },
  {
    searchKeyword: "ベビー 日よけ ストローラー カバー",
    name: "ベビーカー用 日よけカバー・UVカット",
    description: "紫外線をカットしてくれるベビーカー日よけカバー。UPF50+の高遮光素材で日差しの強い夏のおでかけに最適。通気性も確保されている。",
    priceRange: "2,000〜5,000円",
    tags: ["UVカット", "夏必須", "通気性"],
    emoji: "⛱️",
    ageTag: "0ヶ月〜",
    recommend: "日差しの強い季節のおでかけ前に準備しておくと安心。標準シェードを補完する形で使えます。",
  },
  {
    searchKeyword: "保冷バッグ ベビー 離乳食 哺乳瓶",
    name: "ベビー用 保冷・保温バッグ",
    description: "ミルク・離乳食・飲み物を適温で持ち運べる保冷バッグ。哺乳瓶サイズに対応したポケット付き。撥水素材で汚れても拭き取りやすい。",
    priceRange: "1,500〜4,000円",
    tags: ["保冷・保温", "哺乳瓶対応", "撥水"],
    emoji: "🧊",
    recommend: "夏の外出時は特にミルクや飲み物の温度管理が重要。コンパクトなものをマザーズバッグに常備しておくと◎",
  },
];

const SAFETY_PRODUCTS: AmazonProduct[] = [
  {
    searchKeyword: "チャイルドシート 新生児 回転式 ISOFIX",
    name: "回転式チャイルドシート（ISOFIX対応）",
    description: "新生児から使える回転式チャイルドシート。ISOFIX取付で取り付けかんたん・確実。360度回転するので乗せ降ろしが楽。安全基準R129適合。",
    priceRange: "30,000〜80,000円",
    tags: ["ISOFIX", "回転式", "新生児〜"],
    emoji: "🚗",
    ageTag: "0ヶ月〜",
    recommend: "車での移動が多いファミリーは最優先で揃えたいアイテム。回転式は乗せ降ろしのストレスが激減します。",
  },
  {
    searchKeyword: "赤ちゃん 虫除け スプレー 天然成分",
    name: "ベビー用 虫除けスプレー（天然成分）",
    description: "赤ちゃんにも安心な天然成分ベースの虫除けスプレー。ディートフリーで生後3ヶ月から使用可能。公園や自然スポットでのお散歩に。",
    priceRange: "800〜2,000円",
    tags: ["ディートフリー", "天然成分", "3ヶ月〜"],
    emoji: "🌿",
    ageTag: "3ヶ月〜",
    recommend: "春〜秋の公園お散歩に必携。スプレータイプとシールタイプを使い分けると便利です。",
  },
  {
    searchKeyword: "ベビー 日焼け止め SPF50 低刺激",
    name: "ベビー用 日焼け止め SPF50+",
    description: "紫外線吸収剤フリーの低刺激タイプ。赤ちゃんの敏感な肌にも使えるSPF50+の日焼け止め。ウォータープルーフで汗や水でも落ちにくい。",
    priceRange: "1,000〜2,500円",
    tags: ["SPF50+", "低刺激", "ウォータープルーフ"],
    emoji: "🌞",
    ageTag: "6ヶ月〜",
    recommend: "外出前に忘れずに塗って。赤ちゃん用は顔にも使えるタイプを選ぶと便利です。",
  },
  {
    searchKeyword: "赤ちゃん ヘッドガード 転倒防止 リュック",
    name: "転倒防止 ヘッドガードリュック",
    description: "ちょこちょこ歩き始めた赤ちゃんの後頭部をガードするリュック型クッション。転倒時の頭部への衝撃を和らげる。かわいいデザインで嫌がりにくい。",
    priceRange: "2,000〜4,500円",
    tags: ["転倒防止", "後頭部ガード", "ファーストウォーク"],
    emoji: "🪖",
    ageTag: "6ヶ月〜",
    recommend: "つかまり立ち・伝い歩き期の赤ちゃんに。公園や室内での自由遊びが安心になります。",
  },
  {
    searchKeyword: "ベビー帽子 UVカット 夏 日除け",
    name: "ベビー用 UVカット帽子（あご紐付き）",
    description: "夏のおでかけに必須のUVカット帽子。広いつばで顔・首をしっかりガード。あご紐付きで風で飛ばされにくい。速乾・通気性の良い素材。",
    priceRange: "1,500〜3,500円",
    tags: ["UVカット", "あご紐付き", "速乾"],
    emoji: "👒",
    ageTag: "3ヶ月〜",
    recommend: "夏のベビーカーお散歩に帽子は必需品。サイズ調整できるタイプだと長く使えます。",
  },
];

const TOY_PRODUCTS: AmazonProduct[] = [
  {
    asin: "B01N0VQZYQ",
    name: "アンパンマン おしゃべりいっぱい! ことばずかんSuperDX",
    description: "1冊でひらがな・カタカナ・英語・数字など1,800語以上を収録した人気知育おもちゃ。ペンでタッチするだけでアンパンマンがお話し・歌ってくれる。電車・おでかけ中のご機嫌取りにも大活躍。",
    priceRange: "6,000〜8,000円",
    tags: ["1歳〜", "ひらがな・英語", "1800語収録", "タッチペン"],
    emoji: "📖",
    ageTag: "1歳〜",
    recommend: "「なんでも知りたい！」期の1〜3歳に大人気。ひらがな・英語・数字を楽しく学べると口コミ評価が非常に高い、定番知育おもちゃです。",
  },
  {
    searchKeyword: "フィッシャープライス プレイジム 新生児",
    name: "フィッシャープライス プレイジム",
    description: "新生児から遊べる定番プレイジム。カラフルなおもちゃがぶら下がりグーでつかむ練習に。音楽・ライト付きで五感を刺激。折りたためてコンパクト収納。",
    priceRange: "5,000〜10,000円",
    tags: ["新生児〜", "五感刺激", "音楽・ライト付"],
    emoji: "🎪",
    ageTag: "0ヶ月〜",
    recommend: "寝返りを打てるようになるまでのご機嫌タイムに大活躍。おでかけ先にも持っていけるサイズ感が◎",
  },
  {
    searchKeyword: "積み木 木製 知育玩具 カラフル",
    name: "木製カラフル積み木セット",
    description: "口に入れても安心な天然木・無害塗料の積み木。大きさ・形・色が様々でつかむ力・認識力を育てる。布袋付きで持ち運び・収納しやすい。",
    priceRange: "3,000〜8,000円",
    tags: ["知育", "天然木", "おでかけOK"],
    emoji: "🧱",
    ageTag: "6ヶ月〜",
    recommend: "シンプルだから長く遊べる定番おもちゃ。おでかけ先のカフェや待ち時間にも活躍します。",
  },
  {
    searchKeyword: "ベビー 絵本 はじめて しかけ絵本",
    name: "はじめての絵本セット（0〜2歳向け）",
    description: "色鮮やかな絵と大きな文字・シンプルなストーリーで赤ちゃんの興味を引きつける絵本。ボードブック素材で舐めても安心。",
    priceRange: "1,500〜5,000円",
    tags: ["0歳〜", "ボードブック", "語彙発達"],
    emoji: "📚",
    ageTag: "0ヶ月〜",
    recommend: "読み聞かせは言語発達に効果的。おでかけのバッグに1冊入れておくと待ち時間に重宝します。",
  },
  {
    searchKeyword: "赤ちゃん おもちゃ 歯固め シリコン 0歳",
    name: "シリコン製 歯固めおもちゃ",
    description: "歯が生え始める時期のむずがゆさを解消する歯固め。食品グレードシリコン製で安全。色々な形のものが入ったセットタイプが人気。",
    priceRange: "1,000〜3,000円",
    tags: ["歯固め", "食品グレード", "BPAフリー"],
    emoji: "🦷",
    ageTag: "3ヶ月〜",
    recommend: "外出中のぐずり対策にも。冷蔵庫で冷やすとより気持ちよいです。",
  },
  {
    searchKeyword: "知育玩具 1歳 2歳 型はめ パズル",
    name: "型はめパズル・知育おもちゃ（1〜3歳）",
    description: "形・色の認識力を育てる型はめパズル。大きめのピースで誤飲の心配が少なく、持ちやすいつまみ付き。数字・アルファベット・動物など種類豊富。",
    priceRange: "2,000〜6,000円",
    tags: ["1歳〜", "形認識", "指先訓練"],
    emoji: "🧩",
    ageTag: "1歳〜",
    recommend: "1〜3歳の指先の発達に効果的。おでかけ先で座って遊ばせるのにも向いています。",
  },
  {
    searchKeyword: "ベビー 音楽 おもちゃ 太鼓 楽器",
    name: "ベビー楽器おもちゃセット",
    description: "たたく・ふる・転がすなど多彩な遊び方ができる楽器おもちゃセット。音を出す楽しさから聴覚発達を促す。鮮やかな色で視覚刺激にも。",
    priceRange: "2,500〜6,000円",
    tags: ["聴覚刺激", "6ヶ月〜", "多彩な音"],
    emoji: "🎵",
    ageTag: "6ヶ月〜",
    recommend: "公園やカフェでも楽しく遊べる。音が出るおもちゃは赤ちゃんの反応が一番良いアイテムです。",
  },
];

// カテゴリ定義
const CATEGORIES = [
  {
    id: "stroller",
    title: "🚼 ベビーカー本体・アクセサリー",
    subtitle: "選び方のポイント：軽さ・折りたたみやすさ・乗り心地のバランスを重視",
    products: STROLLER_PRODUCTS,
    color: "brand",
    bgColor: "bg-brand-50",
    borderColor: "border-brand-200",
    textColor: "text-brand-700",
  },
  {
    id: "outing",
    title: "👜 お出かけグッズ",
    subtitle: "選び方のポイント：持ち運びやすさ・使い勝手・洗いやすさをチェック",
    products: OUTING_PRODUCTS,
    color: "blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    id: "safety",
    title: "🛡️ 安全・快適グッズ",
    subtitle: "選び方のポイント：安全規格適合・肌への安全性・使いやすさを確認",
    products: SAFETY_PRODUCTS,
    color: "green",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
  },
  {
    id: "toys",
    title: "🧸 おもちゃ・知育グッズ",
    subtitle: "選び方のポイント：月齢に合ったもの・安全基準・素材をチェック",
    products: TOY_PRODUCTS,
    color: "purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
  },
];

export default function BabyGoodsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "赤ちゃん・ベビーカーおすすめ商品",
    "description": "ベビーカーナビ編集部が厳選した赤ちゃんのおでかけに役立つおすすめ商品。",
    "url": "https://stroller-navi.vercel.app/baby-goods",
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        {/* ヘッダー */}
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>おすすめ商品</span>
          </nav>
          <div className="text-4xl mb-3">🛒</div>
          <h1 className="text-xl font-black leading-snug">
            赤ちゃんのおでかけ<br />おすすめ商品【2026年版】
          </h1>
          <p className="text-xs text-white/80 mt-2">ベビーカーナビ編集部が厳選したベビーグッズをカテゴリ別に紹介</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-8">
          {/* アフィリエイト開示（法的必須） */}
          <div className="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              当サイトはAmazonアソシエイト・プログラムの参加者です。当ページ内のリンクからAmazonでお買い物いただくと、
              売上の一部がサイト運営費として還元されます（お客様の購入価格に変わりはありません）。
              掲載商品はベビーカーナビ編集部が独自に選定しており、メーカーからの依頼・金銭的提供は受けておりません。
            </p>
          </div>

          {/* カテゴリナビ */}
          <nav className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-bold text-gray-500 mb-3">カテゴリから探す</p>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-orange-50 rounded-xl p-3 transition text-xs font-bold text-gray-700 hover:text-orange-600"
                >
                  <span className="text-xl">{cat.title.split(" ")[0]}</span>
                  <span className="leading-snug">{cat.title.split(" ").slice(1).join(" ")}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* 絵本特集バナー */}
          <Link
            href="/baby-goods/ehon"
            className="flex items-center gap-4 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-4 hover:border-violet-400 transition"
          >
            <span className="text-4xl">📚</span>
            <div className="flex-1">
              <p className="text-sm font-black text-violet-800">月齢別おすすめ絵本 50冊</p>
              <p className="text-[11px] text-violet-600 mt-0.5">0ヶ月〜3歳まで月齢ごとに厳選！読み聞かせで語彙・感性を育てよう</p>
              <p className="text-[10px] text-violet-400 mt-1">0〜3ヶ月 / 4〜6ヶ月 / 7〜12ヶ月 / 1〜2歳 / 2〜3歳 →</p>
            </div>
          </Link>

          {/* 各カテゴリ */}
          {CATEGORIES.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-4">
              <div className={`${cat.bgColor} border ${cat.borderColor} rounded-2xl p-4 mb-4`}>
                <h2 className="text-base font-black">{cat.title}</h2>
                <p className={`text-[11px] ${cat.textColor} mt-1`}>{cat.subtitle}</p>
              </div>
              <div className="space-y-3">
                {cat.products.map((product) => (
                  <AmazonProductCard key={product.name} product={product} />
                ))}
              </div>
            </section>
          ))}

          {/* 関連記事へのリンク */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">📖 関連お役立ち記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/stroller-guide", emoji: "🚼", title: "ベビーカーでのおでかけ完全ガイド", desc: "準備・ルート選び・施設選びのポイント" },
                { href: "/articles/zero-age-outing", emoji: "🌱", title: "0歳の赤ちゃんはいつから外出できる？", desc: "月齢別おでかけ完全ガイド・持ち物チェックリスト" },
                { href: "/articles/nursing-room-tips", emoji: "🍼", title: "授乳室の見つけ方と上手な使い方", desc: "外出先での授乳・おむつ替えを完全解説" },
                { href: "/articles/train-stroller-manner", emoji: "🚃", title: "ベビーカーで電車に乗るときのマナー", desc: "たたむ必要はある？エレベーターの探し方" },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-orange-50 rounded-xl p-3 transition"
                >
                  <span className="text-2xl">{a.emoji}</span>
                  <div>
                    <p className="text-xs font-bold">{a.title}</p>
                    <p className="text-[10px] text-gray-500">{a.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* スポット検索CTA */}
          <div className="text-center pb-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 近くのおでかけスポットを探す
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
