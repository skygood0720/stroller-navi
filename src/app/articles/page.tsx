import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "お役立ち記事 | ベビーカーナビ",
  description: "赤ちゃんとのおでかけに役立つ情報を子育て経験者の視点でお届け。ベビーカー選び、授乳室の使い方、雨の日のおでかけ先など。",
};

const ARTICLES = [
  {
    slug: "shinjuku-guide",
    title: "【2026年】新宿エリア 子連れおでかけ完全ガイド｜授乳室・ランチ・遊び場まとめ",
    description: "新宿駅周辺の授乳室5選、子連れランチ7選、無料の遊び場、百貨店ベビー設備ランキング、モデルコースを完全網羅。",
    date: "2026年4月20日",
    tags: ["新宿", "授乳室", "子連れランチ"],
    emoji: "🗼",
  },
  {
    slug: "stroller-guide",
    title: "ベビーカーでのおでかけ完全ガイド",
    description: "ベビーカーでの外出を快適にするための準備・ルート選び・施設選びのポイントを詳しく解説します。",
    date: "2026年4月15日",
    tags: ["ベビーカー", "おでかけ準備", "バリアフリー"],
    emoji: "🚼",
  },
  {
    slug: "nursing-room-tips",
    title: "授乳室の見つけ方と上手な使い方｜新米ママのための完全マニュアル",
    description: "外出先での授乳室の探し方、あると便利な持ち物、知っておきたいマナーを詳しく解説します。",
    date: "2026年4月10日",
    tags: ["授乳室", "おむつ替え", "外出準備"],
    emoji: "🍼",
  },
  {
    slug: "rainy-day-spots",
    title: "雨の日でも大丈夫！赤ちゃんと楽しめる室内スポット特集",
    description: "天候に左右されない室内おでかけスポットを厳選。ショッピングモール、水族館、科学館など。",
    date: "2026年4月5日",
    tags: ["雨の日", "室内", "おすすめスポット"],
    emoji: "☔",
  },
  {
    slug: "baby-first-outing",
    title: "赤ちゃんの初めてのおでかけ｜月齢別おすすめスポットと注意点",
    description: "0ヶ月から3歳まで、月齢に合わせたおでかけ先の選び方と持ち物チェックリスト。",
    date: "2026年3月28日",
    tags: ["初めて", "月齢別", "準備"],
    emoji: "👶",
  },
  {
    slug: "restaurant-tips",
    title: "ベビーカーで入れるレストランの見分け方｜子連れランチ攻略法",
    description: "入店前にチェックすべきポイント、予約のコツ、持ち物リストなど子連れ外食のテクニック。",
    date: "2026年3月20日",
    tags: ["レストラン", "子連れランチ", "外食"],
    emoji: "🍽️",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <Link href="/" className="text-xs text-white/70 hover:text-white mb-2 inline-block">← ベビーカーナビ トップへ</Link>
          <h1 className="text-xl font-black">お役立ち記事</h1>
          <p className="text-[11px] opacity-80 mt-1">子育て経験者の視点で、赤ちゃんとのおでかけに役立つ情報をお届け</p>
        </header>
        <main className="p-5 space-y-3">
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`}
              className="block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">{a.emoji}</span>
                <div className="flex-1">
                  <h2 className="text-sm font-bold mb-1 leading-snug">{a.title}</h2>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{a.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400">{a.date}</span>
                    {a.tags.map((t) => (
                      <span key={t} className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
