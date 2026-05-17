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
    slug: "shibuya-guide",
    title: "【2026年】渋谷エリア 子連れおでかけ完全ガイド｜無料遊び場・屋上庭園・ランチまとめ",
    description: "渋谷・表参道・代官山・恵比寿の無料子育て施設、穴場の屋上庭園、子連れランチ、授乳室MAPを完全網羅。",
    date: "2026年4月20日",
    tags: ["渋谷", "代官山", "恵比寿"],
    emoji: "🌿",
  },
  {
    slug: "ikebukuro-guide",
    title: "【2026年】池袋エリア 子連れおでかけ完全ガイド｜サンシャイン完全攻略",
    description: "サンシャイン水族館・プラネタリウム・ナンジャタウン、無料の子育て施設、子連れランチを完全網羅。",
    date: "2026年4月25日",
    tags: ["池袋", "サンシャイン", "水族館"],
    emoji: "🐧",
  },
  {
    slug: "odaiba-guide",
    title: "【2026年】お台場・豊洲エリア 子連れおでかけ完全ガイド｜室内遊び場が充実！",
    description: "レゴランド・リトルプラネット・科学館・水族館、子連れランチ、授乳室情報を完全網羅。雨の日にも最適。",
    date: "2026年4月25日",
    tags: ["お台場", "豊洲", "室内遊び場"],
    emoji: "🎡",
  },
  {
    slug: "kichijoji-guide",
    title: "【2026年】吉祥寺エリア 子連れおでかけ完全ガイド｜井の頭公園・カフェ・授乳室",
    description: "井の頭公園・ジブリ美術館・自然文化園、おしゃれカフェランチ、授乳室を完全網羅。",
    date: "2026年4月28日",
    tags: ["吉祥寺", "井の頭公園", "ジブリ"],
    emoji: "🌳",
  },
  {
    slug: "ueno-guide",
    title: "【2026年】上野エリア 子連れおでかけ完全ガイド｜動物園・博物館・パンダ",
    description: "上野動物園・国立科学博物館・子ども図書館、子連れランチ、授乳室MAPを完全網羅。パンダコースも。",
    date: "2026年4月28日",
    tags: ["上野", "動物園", "博物館"],
    emoji: "🐼",
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
  {
    slug: "osaka-guide",
    title: "【2026年】大阪 子連れおでかけ完全ガイド｜授乳室・ランチ・USJ・ベビーカー情報",
    description: "大阪でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。USJのベビーカー情報も詳しく解説。",
    date: "2026年5月1日",
    tags: ["大阪", "USJ", "子連れ"],
    emoji: "🏯",
  },
  {
    slug: "kyoto-guide",
    title: "【2026年】京都 子連れおでかけ完全ガイド｜ベビーカーOK・NG観光地を正直解説",
    description: "京都水族館・梅小路公園・嵐山など、ベビーカーで行きやすいスポットと注意が必要な観光地を正直に紹介。",
    date: "2026年5月1日",
    tags: ["京都", "嵐山", "授乳室"],
    emoji: "⛩️",
  },
  {
    slug: "yokohama-guide",
    title: "【2026年】横浜 子連れおでかけ完全ガイド｜みなとみらい・八景島・ズーラシア",
    description: "横浜みなとみらいの授乳室・八景島シーパラダイス・ズーラシア、子連れランチを完全網羅。",
    date: "2026年5月5日",
    tags: ["横浜", "みなとみらい", "水族館"],
    emoji: "🎡",
  },
  {
    slug: "train-stroller-manner",
    title: "ベビーカーで電車に乗るときのマナーと注意点｜たたむ必要はある？",
    description: "国土交通省の公式見解をもとに解説。折りたたむべき？エレベーターの探し方、混雑時のコツ、優先スペースの使い方まで。",
    date: "2026年5月10日",
    tags: ["電車", "マナー", "エレベーター"],
    emoji: "🚃",
  },
  {
    slug: "zero-age-outing",
    title: "0歳の赤ちゃんはいつから外出できる？月齢別おでかけ完全ガイド",
    description: "生後1ヶ月・2ヶ月・3ヶ月からの外出タイミング、持ち物チェックリスト、0歳向けおすすめスポットを月齢別に解説。",
    date: "2026年5月10日",
    tags: ["0歳", "外出", "月齢別"],
    emoji: "🌱",
  },
  {
    slug: "fukuoka-guide",
    title: "【2026年】福岡 子連れおでかけ完全ガイド｜授乳室・キャナルシティ・マリンワールド",
    description: "福岡でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。キャナルシティ・マリンワールド・アンパンマンミュージアムのベビーカー情報。",
    date: "2026年5月17日",
    tags: ["福岡", "キャナルシティ", "九州"],
    emoji: "🎏",
  },
  {
    slug: "sapporo-guide",
    title: "【2026年】札幌 子連れおでかけ完全ガイド｜授乳室・円山動物園・冬のおでかけ",
    description: "札幌でベビーカーで行けるスポット・授乳室・子連れ情報を完全網羅。冬の室内スポット情報も詳しく解説。",
    date: "2026年5月17日",
    tags: ["札幌", "円山動物園", "北海道"],
    emoji: "🦅",
  },
  {
    slug: "nagoya-guide",
    title: "【2026年】名古屋 子連れおでかけ完全ガイド｜授乳室・レゴランド・東山動植物園",
    description: "名古屋でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。レゴランド・東山動植物園・名古屋港水族館のベビーカー情報。",
    date: "2026年5月17日",
    tags: ["名古屋", "レゴランド", "東海"],
    emoji: "🏯",
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
