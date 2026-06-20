import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "【2026年】川崎・ラゾーナ 子連れおでかけ完全ガイド｜授乳室・ランチ・ミュージアム",
  description: "川崎でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。ラゾーナ川崎・川崎市立日本民家園・藤子・F・不二雄ミュージアムのベビー設備を徹底解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/kawasaki-guide" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

function SC({ name, area, baby, stroller, tags, tip }: { name: string; area: string; baby: string; stroller: string; tags: string[]; tip: string }) {
  return (
    <div className="border border-gray-100 rounded-xl p-4 mb-3">
      <div className="flex items-start justify-between mb-1">
        <p className="font-bold text-sm">{name}</p>
        <span className="text-[10px] bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full font-bold shrink-0 ml-2">{area}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tags.map((t) => <span key={t} className="text-[9px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>)}
      </div>
      <p className="text-xs text-gray-600 mb-1">🍼 授乳室: {baby}</p>
      <p className="text-xs text-gray-600 mb-2">🚼 ベビーカー: {stroller}</p>
      <p className="text-[11px] text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg">💡 {tip}</p>
    </div>
  );
}

export default function KawasakiGuide() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>川崎ガイド</span>
          </nav>
          <div className="text-4xl mb-2">🌆</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】川崎・ラゾーナ<br />子連れおでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">ラゾーナ・藤子ミュージアム・授乳室｜ベビーカー情報完全網羅</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-violet-800 mb-1">📍 川崎子連れポイントまとめ</p>
            <ul className="text-xs text-violet-700 space-y-1">
              <li>✅ ラゾーナ川崎は日本最大級のショッピングモール・授乳室多数</li>
              <li>✅ 川崎駅は新幹線・私鉄が集中。バリアフリーエレベーター完備</li>
              <li>✅ 藤子・F・不二雄ミュージアムは整理券制で混雑が少ない</li>
              <li>✅ 等々力緑地公園はベビーカーで歩きやすい広大な公園</li>
            </ul>
          </div>

          <S t="🛍️ ラゾーナ川崎プラザ（子連れ天国）">
            <SC
              name="ラゾーナ川崎プラザ"
              area="川崎駅西口"
              baby="授乳室8か所（各フロア）、おむつ替え台完備"
              stroller="ベビーカー貸出あり、全フロアエレベーターあり"
              tags={["授乳室8か所", "ベビーカー貸出", "フードコート充実", "ファッション"]}
              tip="川崎駅直結で雨の日でも傘なしでアクセス可能。フードコート（1F）はベビーチェア多数・子ども向けメニュー豊富。"
            />
          </S>

          <S t="🐱 藤子・F・不二雄ミュージアム">
            <SC
              name="川崎市 藤子・F・不二雄ミュージアム"
              area="向ヶ丘遊園（バス）"
              baby="授乳室あり（2F）"
              stroller="館内ほぼ全域ベビーカーOK・スロープあり"
              tags={["ドラえもん", "整理券制", "屋内", "1歳〜"]}
              tip="ドラえもん・パーマン・キテレツ大百科などのキャラクターが好きな子に最高の空間。入場は日時指定チケットが必要。事前購入必須。川崎駅からシャトルバスあり。"
            />
          </S>

          <S t="🌿 公園・屋外スポット">
            <SC
              name="等々力緑地（とどろきりょくち）"
              area="武蔵小杉〜中原"
              baby="管理棟トイレにおむつ替え台あり"
              stroller="ほぼ全域ベビーカーOK・舗装済み"
              tags={["無料", "広大", "スポーツ公園", "陸上競技場隣接"]}
              tip="川崎フロンターレのホームスタジアム隣接の大型公園。広大な芝生広場でピクニックが楽しめます。複数の遊具エリアあり。"
            />
            <SC
              name="川崎市立日本民家園"
              area="向ヶ丘遊園"
              baby="授乳室あり（ガイダンス棟）"
              stroller="一部砂利道あり（ベビーカー走行は注意）"
              tags={["古民家", "屋外博物館", "文化財", "1歳〜"]}
              tip="昔の日本の民家が移築・復元されたユニークな施設。広い敷地でのびのびと過ごせます。坂道があるため体力が必要。"
            />
          </S>

          <S t="🍽️ 子連れランチおすすめ">
            {[
              { name: "ラゾーナ川崎フードコート（1F）", desc: "ベビーチェア完備・子ども向けメニュー豊富。土日は混雑するため11時台の早めの利用がおすすめ。", price: "500〜1,500円" },
              { name: "川崎駅エキナカ（アトレ川崎）", desc: "改札内外にレストランが集中。ベビーカーで食事しやすい席が多い。", price: "800〜2,000円" },
              { name: "武蔵小杉周辺のカフェ", desc: "タワーマンション街として整備された武蔵小杉エリアは子育て世帯向けのカフェが充実。", price: "700〜1,500円" },
            ].map((r) => (
              <div key={r.name} className="border border-gray-100 rounded-xl p-3 mb-2">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-bold">{r.name}</p>
                  <span className="text-[10px] text-gray-500">{r.price}</span>
                </div>
                <p className="text-xs text-gray-600">{r.desc}</p>
              </div>
            ))}
          </S>

          <S t="📅 モデルコース（川崎 日帰り）">
            <ol className="space-y-3">
              {[
                { time: "10:00", text: "川崎駅着 → ラゾーナ川崎プラザ（ショッピング・授乳）" },
                { time: "11:30", text: "フードコートでランチ（ベビーチェアあり）" },
                { time: "13:00", text: "等々力緑地（広い芝生でのんびり）または" },
                { time: "13:00", text: "→ 藤子・F・不二雄ミュージアム（要事前チケット）" },
                { time: "15:30", text: "帰路、または川崎駅周辺カフェで休憩" },
              ].map((s, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 text-[11px] font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full h-fit">{s.time}</span>
                  <span className="text-gray-700">{s.text}</span>
                </li>
              ))}
            </ol>
          </S>

          <ArticleAreaNav currentSlug="kawasaki-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
