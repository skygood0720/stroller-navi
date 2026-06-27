// 記事メタデータ（内部リンク・関連記事ウィジェット用）
export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  tags: string[];          // 検索・マッチング用タグ
  regions: string[];       // 関連地域（スポットのregionと照合）
}

export const ARTICLES_META: ArticleMeta[] = [
  {
    slug: "shinjuku-guide",
    title: "新宿エリア 子連れおでかけ完全ガイド",
    description: "授乳室・子連れランチ・無料遊び場を完全網羅",
    emoji: "🗼",
    tags: ["授乳室", "ランチ", "遊び場", "百貨店"],
    regions: ["東京"],
  },
  {
    slug: "shibuya-guide",
    title: "渋谷エリア 子連れおでかけ完全ガイド",
    description: "無料遊び場・屋上庭園・ランチまとめ",
    emoji: "🌿",
    tags: ["授乳室", "ランチ", "公園", "屋外"],
    regions: ["東京"],
  },
  {
    slug: "ikebukuro-guide",
    title: "池袋エリア 子連れおでかけ完全ガイド",
    description: "サンシャイン完全攻略・水族館・プラネタリウム",
    emoji: "🐧",
    tags: ["水族館", "授乳室", "ランチ", "室内"],
    regions: ["東京"],
  },
  {
    slug: "odaiba-guide",
    title: "お台場・豊洲エリア 子連れおでかけ完全ガイド",
    description: "室内遊び場充実！雨の日にも最適",
    emoji: "🎡",
    tags: ["室内", "水族館", "授乳室", "遊び場"],
    regions: ["東京"],
  },
  {
    slug: "kichijoji-guide",
    title: "吉祥寺エリア 子連れおでかけ完全ガイド",
    description: "井の頭公園・カフェ・授乳室",
    emoji: "🌳",
    tags: ["公園", "授乳室", "カフェ", "屋外"],
    regions: ["東京"],
  },
  {
    slug: "ueno-guide",
    title: "上野エリア 子連れおでかけ完全ガイド",
    description: "動物園・博物館・パンダコース",
    emoji: "🐼",
    tags: ["動物園", "博物館", "授乳室", "屋外"],
    regions: ["東京"],
  },
  {
    slug: "asakusa-guide",
    title: "浅草エリア 子連れおでかけ完全ガイド",
    description: "浅草寺・観光スポット・授乳室",
    emoji: "🏮",
    tags: ["観光", "授乳室", "グルメ"],
    regions: ["東京"],
  },
  {
    slug: "yokohama-guide",
    title: "横浜エリア 子連れおでかけ完全ガイド",
    description: "みなとみらい・動物園・水族館",
    emoji: "⚓",
    tags: ["水族館", "動物園", "授乳室", "室内"],
    regions: ["神奈川"],
  },
  {
    slug: "osaka-guide",
    title: "大阪エリア 子連れおでかけ完全ガイド",
    description: "USJ・海遊館・ショッピングモール",
    emoji: "🦁",
    tags: ["テーマパーク", "水族館", "授乳室"],
    regions: ["大阪"],
  },
  {
    slug: "kyoto-guide",
    title: "京都エリア 子連れおでかけ完全ガイド",
    description: "嵐山・水族館・チョコレートファクトリー",
    emoji: "⛩️",
    tags: ["水族館", "観光", "授乳室"],
    regions: ["京都"],
  },
  {
    slug: "nagoya-guide",
    title: "名古屋エリア 子連れおでかけ完全ガイド",
    description: "レゴランド・港水族館・アンパンマンミュージアム",
    emoji: "🏯",
    tags: ["テーマパーク", "水族館", "授乳室"],
    regions: ["愛知"],
  },
  {
    slug: "fukuoka-guide",
    title: "福岡エリア 子連れおでかけ完全ガイド",
    description: "キャナルシティ・ズーラシア・海の中道",
    emoji: "🌊",
    tags: ["動物園", "ショッピング", "授乳室"],
    regions: ["福岡"],
  },
  {
    slug: "chiba-guide",
    title: "千葉エリア 子連れおでかけ完全ガイド",
    description: "ディズニーランド周辺・マザー牧場・アンパンマン",
    emoji: "🐮",
    tags: ["テーマパーク", "動物", "授乳室", "屋外"],
    regions: ["千葉", "東京"],
  },
  {
    slug: "sapporo-guide",
    title: "札幌エリア 子連れおでかけ完全ガイド",
    description: "円山動物園・サッポロファクトリー・旭山動物園",
    emoji: "❄️",
    tags: ["動物園", "ショッピング", "授乳室", "室内"],
    regions: ["北海道"],
  },
  {
    slug: "sendai-guide",
    title: "仙台エリア 子連れおでかけ完全ガイド",
    description: "アンパンマンミュージアム・動物公園・ズーパラ",
    emoji: "🌸",
    tags: ["動物園", "テーマパーク", "授乳室"],
    regions: ["東北"],
  },
  {
    slug: "stroller-guide",
    title: "ベビーカー選び方完全ガイド",
    description: "A型・B型・3輪タイプの選び方と比較",
    emoji: "🛒",
    tags: ["ベビーカー", "道具", "育児"],
    regions: [],
  },
  {
    slug: "nursing-room-guide",
    title: "授乳室の上手な使い方ガイド",
    description: "外出先での授乳・おむつ替えを快適に",
    emoji: "🍼",
    tags: ["授乳室", "おむつ替え", "育児"],
    regions: [],
  },
  {
    slug: "baby-first-outing",
    title: "赤ちゃんとの初めてのおでかけガイド",
    description: "0〜3ヶ月の外出デビューを成功させる",
    emoji: "👣",
    tags: ["0歳", "初外出", "準備"],
    regions: [],
  },
  {
    slug: "1year-old-outing",
    title: "1歳との公園おでかけガイド",
    description: "1歳の歩き始めに最適なスポット特集",
    emoji: "🦶",
    tags: ["1歳", "公園", "歩き始め"],
    regions: [],
  },
  {
    slug: "2year-old-outing",
    title: "2歳とのおでかけガイド",
    description: "イヤイヤ期を乗り越えるおでかけ術",
    emoji: "😤",
    tags: ["2歳", "イヤイヤ期", "遊び場"],
    regions: [],
  },
  {
    slug: "3year-old-outing",
    title: "3歳とのおでかけガイド",
    description: "幼稚園入園前に行きたいスポット",
    emoji: "🎒",
    tags: ["3歳", "幼稚園", "体験"],
    regions: [],
  },
  {
    slug: "disney-stroller",
    title: "ディズニーランドのベビーカー完全ガイド",
    description: "ベビーカー置き場・授乳室・乗り物攻略",
    emoji: "🏰",
    tags: ["ディズニー", "テーマパーク", "ベビーカー"],
    regions: ["千葉"],
  },
  {
    slug: "anpanman-museum",
    title: "アンパンマンミュージアム完全ガイド",
    description: "各地のアンパンマンミュージアムを攻略",
    emoji: "🍞",
    tags: ["テーマパーク", "室内", "授乳室"],
    regions: ["東北", "東京", "愛知", "福岡"],
  },
  {
    slug: "free-kids-spots-tokyo",
    title: "東京の無料子連れスポット15選",
    description: "お金をかけずに赤ちゃんと楽しめる東京スポット",
    emoji: "🆓",
    tags: ["無料", "東京", "公園", "遊び場"],
    regions: ["東京"],
  },
  {
    slug: "baby-onsen",
    title: "赤ちゃんと温泉旅行ガイド",
    description: "何ヶ月から入れる？パパ・ママも安心の温泉選び",
    emoji: "♨️",
    tags: ["温泉", "旅行", "宿泊"],
    regions: [],
  },
  {
    slug: "airplane-with-baby",
    title: "赤ちゃんと飛行機旅行ガイド",
    description: "国内旅行デビューのコツと準備リスト",
    emoji: "✈️",
    tags: ["飛行機", "旅行", "準備"],
    regions: [],
  },
  {
    slug: "baby-camping",
    title: "赤ちゃんとキャンプガイド",
    description: "0歳・1歳連れのキャンプデビューを成功させる",
    emoji: "⛺",
    tags: ["キャンプ", "屋外", "自然"],
    regions: [],
  },
  {
    slug: "autumn-outing-spots",
    title: "秋のお出かけスポット特集",
    description: "紅葉・どんぐり・芋掘り…秋の子連れおでかけ",
    emoji: "🍂",
    tags: ["秋", "公園", "自然", "屋外"],
    regions: [],
  },
  {
    slug: "baby-weaning-outing",
    title: "離乳食中の外出ガイド",
    description: "外食先での離乳食対策と持参アイデア",
    emoji: "🥄",
    tags: ["離乳食", "外食", "育児"],
    regions: [],
  },
  {
    slug: "restaurant-tips",
    title: "子連れランチの選び方ガイド",
    description: "個室・座敷・キッズメニューのお店の見つけ方",
    emoji: "🍽️",
    tags: ["ランチ", "外食", "個室"],
    regions: [],
  },
  {
    slug: "ehon-0sai",
    title: "0歳赤ちゃんへのおすすめ絵本10選",
    description: "新生児から読める絵本を月齢別に厳選・読み聞かせ方も解説",
    emoji: "📚",
    tags: ["絵本", "0歳", "育児", "読み聞かせ"],
    regions: [],
  },
  {
    slug: "ehon-nemuri",
    title: "寝かしつけに効く絵本10選",
    description: "読んだら眠くなると評判の寝かしつけ絵本ランキング",
    emoji: "🌙",
    tags: ["絵本", "寝かしつけ", "育児"],
    regions: [],
  },
  {
    slug: "ehon-kotoba",
    title: "言葉を育てるおすすめ絵本10選",
    description: "発語を促す絵本の選び方と読み聞かせのコツ",
    emoji: "🗣️",
    tags: ["絵本", "言葉", "発語", "育児"],
    regions: [],
  },
];

// スポットのregionとタグから関連記事を返す
export function getRelatedArticles(region?: string, tags?: string[], limit = 3): ArticleMeta[] {
  const scored = ARTICLES_META.map((a) => {
    let score = 0;
    if (region && a.regions.includes(region)) score += 3;
    if (tags) {
      for (const t of tags) {
        if (a.tags.some((at) => at.includes(t) || t.includes(at))) score += 1;
      }
    }
    return { article: a, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.article);
}
