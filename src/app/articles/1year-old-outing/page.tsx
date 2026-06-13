import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "1歳のおでかけ完全ガイド【2026年】行き先・持ち物・注意点を月齢別に解説 | ベビーカーナビ",
  description: "1歳（12〜24ヶ月）の赤ちゃんとのおでかけを徹底解説。1歳0ヶ月・6ヶ月・1歳半のおすすめスポット、必須の持ち物リスト、ベビーカーvsだっこひもの選び方、電車・車での移動コツまで。",
  keywords: ["1歳 おでかけ", "1歳 おすすめスポット", "1歳 お出かけ 持ち物", "1歳 電車 おでかけ", "1歳半 おでかけ"],
  openGraph: {
    title: "1歳のおでかけ完全ガイド【2026年】",
    description: "1歳の赤ちゃんとのおでかけを徹底解説。おすすめスポット・持ち物・移動手段の選び方まで。",
    url: "https://stroller-navi.vercel.app/articles/1year-old-outing",
    type: "article",
  },
};

const SPOTS_BY_AGE = {
  "12〜14ヶ月（1歳0ヶ月〜）": {
    color: "pink",
    icon: "🌱",
    desc: "つかまり立ち・伝い歩きが盛んな時期。歩き始めの子も。安全な環境で自由に動ける場所がベスト。",
    spots: [
      { name: "広めの公園（砂場・芝生）", reason: "砂を触る・芝生の感触を体験。五感を刺激するのに最適" },
      { name: "子育て支援センター", reason: "安全なマットや手押し車が揃っており、歩行練習にぴったり" },
      { name: "水族館（暗い環境で光る展示）", reason: "色彩豊かな魚に目を輝かせる。ベビーカーで回れる施設が多い" },
      { name: "区立図書館・おはなし会", reason: "絵本の読み聞かせに集中できる月齢。無料で参加できる場合も多い" },
    ],
  },
  "15〜18ヶ月（1歳3ヶ月〜）": {
    color: "orange",
    icon: "🚶",
    desc: "ほとんどの子が歩き始める時期。「自分で歩きたい！」という意欲が強くなる。動きが増えてくる。",
    spots: [
      { name: "動物園（小動物コーナー）", reason: "ニワトリ・ウサギ・モルモットなど触れ合い体験が喜ばれる" },
      { name: "ショッピングモールのキッズスペース", reason: "安全柵の中で思い切り動き回れる。冷暖房完備で天気を問わない" },
      { name: "屋内型遊び場（キドキドなど）", reason: "柔らかいボールプール・滑り台で体を使って遊べる" },
      { name: "工場見学（無料のもの）", reason: "乗り物・機械への好奇心が育つ。見学型で安全に楽しめる" },
    ],
  },
  "19〜24ヶ月（1歳7ヶ月〜）": {
    color: "blue",
    icon: "🏃",
    desc: "走るようになり、手先も器用になってくる。「これなに？」「あれやりたい！」と意思表示が増える時期。",
    spots: [
      { name: "プレイパーク・冒険遊び場", reason: "木登り・泥遊び・道具遊びができる。創造力を刺激する" },
      { name: "科学館（体験型）", reason: "ボタンを押すと光る・音が出るなど、インタラクティブな展示が大好き" },
      { name: "農業体験・イチゴ狩り・みかん狩り", reason: "自分で取って食べる体験が言語発達・感覚発達に効果的" },
      { name: "電車・バス乗り体験", reason: "乗り物への興味が最高潮。窓から景色を見るだけでも大喜び" },
    ],
  },
};

const PACKING_LIST = {
  "おむつ・衛生用品": [
    "おむつ（外出時間の目安＋2枚）",
    "おしりふき（多めに）",
    "おむつ替えシート（携帯用）",
    "ビニール袋（使用済みおむつ・汚れもの入れ）",
  ],
  "食事・水分補給": [
    "離乳食/幼児食（保温ケース）",
    "スプーン・フォーク（子供用）",
    "スタイ（よだれかけ）2〜3枚",
    "麦茶・水（保温・保冷ボトル）",
    "おやつ（ウェハース・せんべい系）",
    "使い捨てエプロン（外食時に便利）",
  ],
  "着替え・衛生": [
    "着替え一式（2セット：上下＋肌着）",
    "ガーゼハンカチ3〜4枚",
    "ウェットティッシュ（除菌用も）",
    "体温計",
    "保険証・母子手帳（コピー可）",
  ],
  "移動・安全": [
    "ベビーカー（または抱っこひも）",
    "日よけカバー（夏場必須）",
    "レインカバー（天気が不安定な日）",
    "ハーネス（歩き始めの子のお出かけに）",
  ],
};

const TRANSPORT_TIPS = [
  {
    method: "🚃 電車でのおでかけ",
    pros: ["駐車場代がかからない", "混雑を避ければ快適", "電車自体が子供の娯楽に"],
    cons: ["ラッシュ時は避けたい", "荷物が多いと大変", "乗り換えが増えるとつらい"],
    tips: "エレベーター位置を事前確認。ベビーカーナビの駅ガイドで確認できます。",
  },
  {
    method: "🚗 車でのおでかけ",
    pros: ["荷物をたくさん積める", "授乳・おむつ替えが車内で可能", "時間を自由に決められる"],
    cons: ["渋滞のリスク", "駐車場代がかかる", "長時間のドライブはストレスに"],
    tips: "チャイルドシートのフィット確認を。サービスエリアで30分に1回は休憩を。",
  },
  {
    method: "🚌 バス・路面電車でのおでかけ",
    pros: ["電車より乗り降りしやすい場合も", "地域によっては本数が多い", "窓からの眺めが楽しい"],
    cons: ["ベビーカー対応車両が限られる", "路線によってはエレベーターなし", "定員制限がある場合も"],
    tips: "ベビーカー対応バスかどうか事前確認。折りたたみを求められる場合を想定して。",
  },
];

export default function OneYearOldOutingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "1歳のおでかけ完全ガイド【2026年】行き先・持ち物・注意点を月齢別に解説",
    "description": "1歳（12〜24ヶ月）の赤ちゃんとのおでかけを徹底解説。月齢別おすすめスポット、持ち物リスト、移動手段の選び方まで。",
    "url": "https://stroller-navi.vercel.app/articles/1year-old-outing",
    "datePublished": "2026-06-08",
    "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
    "inLanguage": "ja",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "1歳の子はどんなところでのおでかけが楽しいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1歳前半は砂場・水族館・子育て支援センター、1歳後半は動物園・キッズスペース・農業体験がおすすめです。動いて触れる体験が発達に良い刺激になります。",
        },
      },
      {
        "@type": "Question",
        "name": "1歳のおでかけで必要な持ち物は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "おむつ・おしりふき・着替え2セット・離乳食/幼児食・水筒・スプーン・スタイ・ウェットティッシュ・保険証が基本セット。外出時間に合わせて調整を。",
        },
      },
      {
        "@type": "Question",
        "name": "1歳のおでかけはベビーカーと抱っこひもどちらがいい？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "行き先によります。公園・ショッピングモールなど広い場所はベビーカーが楽。電車の乗り換えが多い場合や階段が多い場所は抱っこひものほうが動きやすいです。両方持参する方法も。",
        },
      },
    ],
  };

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    pink: { bg: "bg-pink-50", border: "border-pink-100", text: "text-pink-700", badge: "bg-pink-100 text-pink-800" },
    orange: { bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-700", badge: "bg-orange-100 text-orange-800" },
    blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" },
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-rose-400 via-pink-500 to-pink-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>1歳のおでかけ完全ガイド</span>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">月齢別ガイド</span>
            <span className="bg-pink-300/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">👶 1歳特集</span>
          </div>
          <h1 className="text-lg font-black leading-snug">
            1歳のおでかけ完全ガイド【2026年】<br />
            <span className="text-[13px] font-bold opacity-90">行き先・持ち物・移動のコツを月齢別に解説</span>
          </h1>
        </header>

        <main className="p-5 space-y-6">
          <ArticleAuthor date="2026年6月8日" readTime="10分" category="月齢別ガイド" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              1歳は「歩き始め」「言葉の発達」「好奇心の爆発」と成長が目まぐるしい時期。おでかけが子供の発達に与える刺激は大きいですが、<strong>月齢によっておすすめのスポットや注意点が変わります</strong>。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              この記事では1歳0ヶ月〜1歳11ヶ月の月齢別に、おすすめスポット・持ち物・移動手段の選び方を詳しく解説します。
            </p>
          </section>

          {/* 月齢別スポット */}
          <section>
            <h2 className="text-base font-bold mb-3">👶 月齢別おすすめスポット</h2>
            <div className="space-y-4">
              {Object.entries(SPOTS_BY_AGE).map(([age, data]) => {
                const c = colorMap[data.color];
                return (
                  <div key={age} className={`${c.bg} rounded-2xl p-4 border ${c.border}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{data.icon}</span>
                      <span className={`text-xs font-black ${c.text}`}>{age}</span>
                    </div>
                    <p className={`text-xs ${c.text} mb-3 leading-relaxed`}>{data.desc}</p>
                    <div className="space-y-2">
                      {data.spots.map((s) => (
                        <div key={s.name} className="bg-white/70 rounded-xl px-3 py-2">
                          <p className="text-xs font-bold text-gray-800 mb-0.5">{s.name}</p>
                          <p className="text-[11px] text-gray-600">{s.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 持ち物リスト */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-4">🎒 1歳のおでかけ 持ち物チェックリスト</h2>
            <div className="space-y-4">
              {Object.entries(PACKING_LIST).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-bold text-gray-700 mb-2 border-l-2 border-brand-400 pl-2">{category}</p>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-4 h-4 border border-gray-300 rounded shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-100">
              <p className="text-[11px] text-amber-800">
                💡 <strong>時間別の目安</strong>：1〜2時間のおでかけはコンパクトバッグで。半日以上は上記フルセット推奨。
              </p>
            </div>
          </section>

          {/* 移動手段 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🚃 移動手段の選び方</h2>
            <div className="space-y-4">
              {TRANSPORT_TIPS.map((t) => (
                <div key={t.method} className="border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-bold mb-2">{t.method}</p>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                      <p className="text-[10px] font-bold text-green-700 mb-1">✅ メリット</p>
                      {t.pros.map((p) => <p key={p} className="text-[10px] text-gray-600">・{p}</p>)}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-red-600 mb-1">⚠️ デメリット</p>
                      {t.cons.map((c) => <p key={c} className="text-[10px] text-gray-600">・{c}</p>)}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg px-3 py-1.5">
                    <p className="text-[10px] text-blue-800">💡 {t.tips}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">❓ よくある質問</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. 1歳の子はどんな場所が喜ぶ？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  1歳前半は触って・動いて感じる体験（砂場・プールなど）、1歳後半は動物・乗り物・体験型スポットが特に喜ばれます。自分で動ける環境が重要です。
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. ベビーカーと抱っこひも、どちらがおすすめ？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  平坦な公園・モールはベビーカー。電車乗り換えが多い場合・山道は抱っこひも。1歳以降は「両方持参+途中で歩かせる」が最強の組み合わせです。
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800">Q. 1歳のおでかけはどのくらいの時間が適切？</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  お昼寝のスケジュールに合わせて3〜4時間が目安。午前中（10〜13時）のおでかけが疲れが少なくおすすめです。昼食後は帰宅してお昼寝という流れが子供に優しい。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-100">
            <h3 className="text-sm font-bold text-pink-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/baby-first-outing", title: "赤ちゃんの初めてのおでかけ｜月齢別おすすめスポット", emoji: "👶" },
                { href: "/articles/zero-age-outing", title: "0歳の赤ちゃんはいつから外出できる？月齢別完全ガイド", emoji: "🌱" },
                { href: "/articles/free-kids-spots-tokyo", title: "東京の子供が無料で遊べる場所25選", emoji: "🌳" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="flex items-center gap-2 text-xs text-pink-700 hover:text-pink-900 hover:underline">
                  <span>{link.emoji}</span>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🔍 1歳向けのスポットを探す</p>
            <p className="text-xs text-gray-500 mb-3">エレベーター・授乳室・ベビーカー貸出で絞り込み検索</p>
            <Link href="/spots"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
              スポット一覧を見る →
            </Link>
          </section>

          <ShareButtons title="1歳のおでかけ完全ガイド【2026年】" url="/articles/1year-old-outing" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
