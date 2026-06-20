import Link from "next/link";

const AREA_GUIDES = [
  { slug: "tokyo", label: "東京", emoji: "🗼", guides: [
    { slug: "shinjuku-guide", name: "新宿" },
    { slug: "shibuya-guide", name: "渋谷" },
    { slug: "ikebukuro-guide", name: "池袋" },
    { slug: "odaiba-guide", name: "お台場" },
    { slug: "kichijoji-guide", name: "吉祥寺" },
    { slug: "ueno-guide", name: "上野" },
    { slug: "tokyo-station-guide", name: "東京駅" },
  ]},
  { slug: "kansai", label: "関西", emoji: "⛩️", guides: [
    { slug: "osaka-guide", name: "大阪" },
    { slug: "kyoto-guide", name: "京都" },
  ]},
  { slug: "kanto", label: "関東", emoji: "🎡", guides: [
    { slug: "yokohama-guide", name: "横浜" },
    { slug: "saitama-guide", name: "さいたま" },
  ]},
  { slug: "kyushu", label: "九州", emoji: "🎏", guides: [
    { slug: "fukuoka-guide", name: "福岡" },
  ]},
  { slug: "hokkaido", label: "北海道", emoji: "🦅", guides: [
    { slug: "sapporo-guide", name: "札幌" },
  ]},
  { slug: "tokai", label: "東海", emoji: "🏯", guides: [
    { slug: "nagoya-guide", name: "名古屋" },
  ]},
  { slug: "tohoku", label: "東北", emoji: "⛄", guides: [
    { slug: "sendai-guide", name: "仙台" },
  ]},
  { slug: "chugoku", label: "中国", emoji: "⛩️", guides: [
    { slug: "hiroshima-guide", name: "広島" },
  ]},
  { slug: "okinawa", label: "沖縄", emoji: "🌺", guides: [
    { slug: "okinawa-guide", name: "沖縄" },
  ]},
];

const HOWTO_ARTICLES = [
  { slug: "train-stroller-manner", name: "ベビーカーで電車に乗るときのマナー", emoji: "🚃" },
  { slug: "zero-age-outing", name: "0歳の赤ちゃんはいつから外出できる？", emoji: "🌱" },
  { slug: "stroller-guide", name: "ベビーカーでのおでかけ完全ガイド", emoji: "🚼" },
  { slug: "nursing-room-tips", name: "授乳室の見つけ方と上手な使い方", emoji: "🍼" },
  { slug: "restaurant-tips", name: "子連れランチ攻略法", emoji: "🍽️" },
  { slug: "rainy-day-spots", name: "雨の日でも楽しめる室内スポット特集", emoji: "☔" },
  { slug: "stroller-choosing-guide", name: "ベビーカーの選び方完全ガイド（A型・B型比較）", emoji: "🛒" },
  { slug: "1year-old-outing", name: "1歳のおでかけ完全ガイド", emoji: "👣" },
  { slug: "2year-old-outing", name: "2歳のおでかけ（イヤイヤ期）", emoji: "💪" },
  { slug: "disney-stroller", name: "ディズニーリゾート子連れガイド", emoji: "🎠" },
];

interface Props {
  currentSlug: string;
}

export default function ArticleAreaNav({ currentSlug }: Props) {
  const allGuides = AREA_GUIDES.flatMap((a) => a.guides.map((g) => g.slug));
  const isAreaGuide = allGuides.includes(currentSlug);

  return (
    <div className="space-y-4">
      {/* 全国エリアガイド */}
      <section className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold mb-3">🗾 全国エリアガイド一覧</h3>
        <div className="flex flex-wrap gap-2">
          {AREA_GUIDES.flatMap((area) =>
            area.guides.map((guide) => (
              guide.slug === currentSlug ? (
                <span
                  key={guide.slug}
                  className="text-xs bg-brand-500 text-white px-3 py-1.5 rounded-full font-bold"
                >
                  {area.emoji} {guide.name}
                </span>
              ) : (
                <Link
                  key={guide.slug}
                  href={`/articles/${guide.slug}`}
                  className="text-xs bg-gray-100 hover:bg-brand-50 text-gray-700 hover:text-brand-600 px-3 py-1.5 rounded-full font-medium transition"
                >
                  {area.emoji} {guide.name}
                </Link>
              )
            ))
          )}
        </div>
      </section>

      {/* おでかけノウハウ */}
      <section className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold mb-3">💡 おでかけノウハウ</h3>
        <div className="space-y-1.5">
          {HOWTO_ARTICLES.filter((a) => a.slug !== currentSlug).map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="flex items-center gap-2 text-xs text-gray-700 hover:text-brand-600 py-1 hover:underline"
            >
              <span>{article.emoji}</span>
              <span>{article.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* おすすめ商品バナー */}
      <Link
        href="/baby-goods"
        className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 hover:border-orange-400 transition"
      >
        <span className="text-3xl">🛒</span>
        <div>
          <p className="text-xs font-bold text-orange-800">おすすめベビーグッズ一覧</p>
          <p className="text-[10px] text-orange-600">ベビーカー・抱っこ紐・知育おもちゃをまとめてチェック →</p>
        </div>
      </Link>

      {/* スポット検索CTA */}
      <div className="text-center">
        <Link
          href="/spots"
          className="inline-block px-5 py-2.5 rounded-xl border-2 border-brand-500 text-brand-600 text-xs font-bold hover:bg-brand-50 transition"
        >
          🗺️ 全国のスポットを地域から探す
        </Link>
      </div>
    </div>
  );
}
