import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import StrollerScoreCard from "@/components/StrollerScoreCard";
import { ALL_SPOTS } from "@/lib/spots-data";
import { calcStrollerScore, sortByScore, ScoreRank } from "@/lib/stroller-score";

export const metadata: Metadata = {
  title: "ベビーカーフレンドリースコア ランキング | ベビーカーナビ",
  description: "ベビーカーナビ編集部が独自採点したベビーカーフレンドリースコア上位スポット。エレベーター・授乳室・おむつ替え・スロープ設備を総合評価。",
  keywords: ["ベビーカー おすすめ スポット ランキング", "バリアフリー 子連れ 施設", "授乳室 完備 スポット"],
  openGraph: {
    title: "ベビーカーフレンドリースコア ランキング | ベビーカーナビ",
    description: "エレベーター・授乳室・スロープなど設備を総合評価したベビーカーナビ独自ランキング",
    url: "https://stroller-navi.vercel.app/spots/ranking",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "website",
  },
};

const RANK_FILTERS: { rank: ScoreRank | "ALL"; label: string; color: string }[] = [
  { rank: "ALL", label: "すべて", color: "bg-gray-100 text-gray-700" },
  { rank: "S",   label: "Sランク（最適）", color: "bg-emerald-100 text-emerald-700" },
  { rank: "A",   label: "Aランク（優良）", color: "bg-blue-100 text-blue-700" },
  { rank: "B",   label: "Bランク（良好）", color: "bg-amber-100 text-amber-700" },
];

const REGION_LIST = ["東京", "北海道", "関東", "近畿", "九州・沖縄", "中部", "東北", "中国", "四国"];

export default function RankingPage() {
  // スコア計算 & ソート
  const spotsWithScore = sortByScore(ALL_SPOTS).map((spot) => ({
    spot,
    score: calcStrollerScore(spot.tags),
  }));

  // Sランクスポット（Top）
  const sRankSpots  = spotsWithScore.filter(({ score }) => score.rank === "S");
  const aRankSpots  = spotsWithScore.filter(({ score }) => score.rank === "A");
  const totalScored = spotsWithScore.length;

  // 地域別TOP3
  const regionTop = REGION_LIST.map((region) => {
    const top = spotsWithScore
      .filter(({ spot }) => spot.region === region)
      .slice(0, 3);
    return { region, top };
  }).filter(({ top }) => top.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ベビーカーフレンドリースコア ランキング",
    "description": "ベビーカーナビ編集部が独自採点した全国スポットのバリアフリーランキング",
    "url": "https://stroller-navi.vercel.app/spots/ranking",
    "numberOfItems": sRankSpots.length,
    "itemListElement": sRankSpots.slice(0, 10).map(({ spot, score }, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://stroller-navi.vercel.app/spots/${spot.id}`,
      "name": spot.name,
      "description": `スコア: ${score.total}点 (${score.rankLabel})`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        {/* ヘッダー */}
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/spots" className="hover:text-white">スポット一覧</Link>
            <span className="mx-1.5">›</span>
            <span>ランキング</span>
          </nav>
          <div className="text-3xl mb-2">🏆</div>
          <h1 className="text-xl font-black leading-snug">
            ベビーカーフレンドリースコア<br />ランキング
          </h1>
          <p className="text-xs text-white/80 mt-2 leading-relaxed">
            エレベーター・授乳室・おむつ替え・スロープなど設備を総合評価した
            ベビーカーナビ独自の採点です
          </p>
          <div className="flex gap-3 mt-3">
            <div className="bg-white/20 rounded-xl px-3 py-1.5 text-center">
              <p className="text-lg font-black">{totalScored}</p>
              <p className="text-[10px] text-white/70">採点スポット数</p>
            </div>
            <div className="bg-white/20 rounded-xl px-3 py-1.5 text-center">
              <p className="text-lg font-black">{sRankSpots.length}</p>
              <p className="text-[10px] text-white/70">Sランク施設</p>
            </div>
            <div className="bg-white/20 rounded-xl px-3 py-1.5 text-center">
              <p className="text-lg font-black">{aRankSpots.length}</p>
              <p className="text-[10px] text-white/70">Aランク施設</p>
            </div>
          </div>
        </header>

        <main className="p-5 space-y-8">

          {/* 採点基準の説明 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-bold mb-3">📊 採点基準について</h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              ベビーカーフレンドリースコアは、各スポットの設備情報をもとにベビーカーナビ編集部が独自に算出した100点満点の評価です。
              エレベーターの有無・授乳室の充実度・おむつ替え設備・スロープなどを総合的に採点しています。
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { emoji: "🛗", label: "エレベーター動線", pt: "最大30点" },
                { emoji: "🍼", label: "授乳室の充実度",   pt: "最大25点" },
                { emoji: "👶", label: "おむつ替え設備",   pt: "最大20点" },
                { emoji: "♿", label: "スロープ・段差なし", pt: "最大15点" },
                { emoji: "✨", label: "追加設備",          pt: "最大10点" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2.5">
                  <span className="text-base">{item.emoji}</span>
                  <div>
                    <p className="text-[10px] font-bold text-gray-700">{item.label}</p>
                    <p className="text-[10px] text-gray-400">{item.pt}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {[
                { rank: "S", label: "最適", range: "85点以上", color: "bg-emerald-100 text-emerald-700" },
                { rank: "A", label: "優良", range: "65〜84点", color: "bg-blue-100 text-blue-700" },
                { rank: "B", label: "良好", range: "40〜64点", color: "bg-amber-100 text-amber-700" },
                { rank: "C", label: "要確認", range: "39点以下", color: "bg-gray-100 text-gray-600" },
              ].map((r) => (
                <div key={r.rank} className={`rounded-lg p-2 text-center ${r.color}`}>
                  <p className="text-base font-black">{r.rank}</p>
                  <p className="text-[9px] font-bold">{r.label}</p>
                  <p className="text-[9px] opacity-70">{r.range}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sランクスポット */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-black text-emerald-600">S</span>
              <h2 className="text-base font-bold">Sランク施設（85点以上）</h2>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold ml-auto">
                {sRankSpots.length}件
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              エレベーター・授乳室・おむつ替えが揃った最高レベルのバリアフリー施設
            </p>
            <div className="space-y-3">
              {sRankSpots.map(({ spot, score }, index) => (
                <Link
                  key={spot.id}
                  href={`/spots/${spot.id}`}
                  className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-emerald-100 hover:border-emerald-300"
                >
                  {/* 順位 */}
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-black shrink-0">
                    {index + 1}
                  </div>
                  {/* 情報 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-800 truncate">{spot.name}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {spot.region && `📍 ${spot.region} ・ `}
                      {spot.tags.slice(0, 3).join(" / ")}
                    </p>
                  </div>
                  {/* スコア */}
                  <div className="shrink-0 text-right">
                    <p className="text-xl font-black text-emerald-600">{score.total}</p>
                    <p className="text-[10px] text-gray-400">点</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Aランクスポット */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-black text-blue-600">A</span>
              <h2 className="text-base font-bold">Aランク施設（65〜84点）</h2>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold ml-auto">
                {aRankSpots.length}件
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              主要設備が揃っており、赤ちゃん連れでも快適に過ごせる優良施設
            </p>
            <div className="space-y-2">
              {aRankSpots.slice(0, 20).map(({ spot, score }) => (
                <Link
                  key={spot.id}
                  href={`/spots/${spot.id}`}
                  className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition border border-blue-100 hover:border-blue-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-gray-800 truncate">{spot.name}</p>
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full font-bold shrink-0">A</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {spot.region && `📍 ${spot.region} ・ `}
                      {spot.tags.slice(0, 2).join(" / ")}
                    </p>
                  </div>
                  <span className="text-base font-black text-blue-600 shrink-0">{score.total}点</span>
                </Link>
              ))}
              {aRankSpots.length > 20 && (
                <p className="text-xs text-gray-400 text-center pt-2">
                  他 {aRankSpots.length - 20} 件 → 各スポットページでスコアを確認できます
                </p>
              )}
            </div>
          </section>

          {/* 地域別TOP3 */}
          <section>
            <h2 className="text-base font-bold mb-4">🗾 地域別 ベスト3</h2>
            <div className="space-y-4">
              {regionTop.map(({ region, top }) => (
                <div key={region} className="bg-white rounded-2xl p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-700 mb-3">📍 {region}</h3>
                  <div className="space-y-2">
                    {top.map(({ spot, score }, i) => (
                      <Link
                        key={spot.id}
                        href={`/spots/${spot.id}`}
                        className="flex items-center gap-3 hover:opacity-80 transition"
                      >
                        <span className="text-sm font-black text-gray-400 w-4 shrink-0">
                          {i + 1}
                        </span>
                        <p className="text-xs text-gray-700 flex-1 truncate">{spot.name}</p>
                        <div className={`shrink-0 text-xs font-black px-2 py-0.5 rounded-full ${
                          score.rank === "S" ? "bg-emerald-100 text-emerald-700" :
                          score.rank === "A" ? "bg-blue-100 text-blue-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>
                          {score.rank} {score.total}点
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={`/spots/region/${encodeURIComponent(region)}`}
                    className="text-[11px] text-brand-500 hover:underline mt-3 inline-block"
                  >
                    {region}のスポットをすべて見る →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-50 to-emerald-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-gray-700 mb-3">
              🗺️ 地域から絞り込んでスポットを探す
            </p>
            <Link
              href="/spots"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              スポット一覧へ
            </Link>
          </section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
