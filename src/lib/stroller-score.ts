// ============================================================
// ベビーカーフレンドリースコア 算出ロジック
// 既存のタグ情報から自動計算（全スポット対応）
// ============================================================

export type ScoreRank = "S" | "A" | "B" | "C";

export interface StrollerScore {
  total: number;        // 0-100点
  rank: ScoreRank;      // S/A/B/C
  rankLabel: string;    // "最適" / "優良" / "良好" / "要確認"
  rankColor: string;    // Tailwind クラス
  rankBg: string;
  breakdown: {
    elevator: number;   // 0-30点
    nursing: number;    // 0-25点
    diaper: number;     // 0-20点
    slope: number;      // 0-15点
    extras: number;     // 0-10点
  };
  comment: string;      // 一言コメント
}

/**
 * タグ配列からベビーカーフレンドリースコアを算出する
 * @param tags スポットのタグ配列（例: ["授乳室", "エレベーター", "おむつ替え"]）
 */
export function calcStrollerScore(tags: string[]): StrollerScore {
  const has = (keyword: string) =>
    tags.some((t) => t.includes(keyword));

  // 各項目のスコア計算
  const elevator = has("エレベーター") ? 30 : has("バリアフリー") ? 20 : 0;
  const nursing  = has("授乳室") ? 25 : 0;
  const diaper   = has("おむつ替え") ? 20 : 0;
  const slope    = has("スロープ") ? 10 : has("バリアフリー") && !has("エレベーター") ? 8 : 0;
  // extras: ベビーカー貸出・ベビーチェア・多目的トイレ など
  let extras = 0;
  if (has("ベビーカー貸出")) extras += 4;
  if (has("ベビーチェア"))   extras += 3;
  if (has("多目的トイレ"))   extras += 3;
  extras = Math.min(extras, 10);

  const total = Math.min(elevator + nursing + diaper + slope + extras, 100);

  // ランク判定
  let rank: ScoreRank;
  let rankLabel: string;
  let rankColor: string;
  let rankBg: string;
  let comment: string;

  if (total >= 85) {
    rank = "S";
    rankLabel = "最適";
    rankColor = "text-emerald-700";
    rankBg    = "bg-emerald-50 border-emerald-200";
    comment   = "エレベーター・授乳室・おむつ替えが揃った最高レベルのバリアフリー施設です。";
  } else if (total >= 65) {
    rank = "A";
    rankLabel = "優良";
    rankColor = "text-blue-700";
    rankBg    = "bg-blue-50 border-blue-200";
    comment   = "主要な設備が揃っており、赤ちゃん連れでも安心して過ごせます。";
  } else if (total >= 40) {
    rank = "B";
    rankLabel = "良好";
    rankColor = "text-amber-700";
    rankBg    = "bg-amber-50 border-amber-200";
    comment   = "基本的な設備はありますが、一部の設備が不足している場合があります。";
  } else {
    rank = "C";
    rankLabel = "要確認";
    rankColor = "text-gray-600";
    rankBg    = "bg-gray-50 border-gray-200";
    comment   = "設備情報が少ないスポットです。おでかけ前に公式サイトでご確認ください。";
  }

  return {
    total,
    rank,
    rankLabel,
    rankColor,
    rankBg,
    breakdown: { elevator, nursing, diaper, slope, extras },
    comment,
  };
}

/** スコアが高い順にスポットをソートするための比較関数 */
export function sortByScore<T extends { tags: string[] }>(spots: T[]): T[] {
  return [...spots].sort(
    (a, b) => calcStrollerScore(b.tags).total - calcStrollerScore(a.tags).total
  );
}
