import type { AgeRange } from "@/types";
import { ALL_SPOTS, ALL_TOILETS, ALL_RESTAURANTS } from "@/lib/spots-data";
export type { SpotCategory, SpotWithCategory } from "@/lib/spots-data";

export const AGE_RANGES: AgeRange[] = [
  { key: "0-3", label: "0〜3ヶ月", min: 0, max: 3, emoji: "👶", color: "#FFB3BA" },
  { key: "4-6", label: "4〜6ヶ月", min: 4, max: 6, emoji: "🍼", color: "#FFDFBA" },
  { key: "7-12", label: "7〜12ヶ月", min: 7, max: 12, emoji: "🧸", color: "#BAE1FF" },
  { key: "13-24", label: "1〜2歳", min: 13, max: 24, emoji: "👣", color: "#BAFFC9" },
  { key: "25-36", label: "2〜3歳", min: 25, max: 36, emoji: "🎈", color: "#E8BAFF" },
];

export const REGIONS = [
  "すべて", "東京", "北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄",
] as const;
export type Region = typeof REGIONS[number];

// Re-export spot data
export const BABY_SPOTS = ALL_SPOTS;
export const TOILETS = ALL_TOILETS;
export const RESTAURANTS = ALL_RESTAURANTS;

export function getMonthsOld(birthDate: string): number {
  const now = new Date();
  const b = new Date(birthDate);
  return (now.getFullYear() - b.getFullYear()) * 12 + now.getMonth() - b.getMonth();
}

export function getAgeRange(months: number): AgeRange {
  return AGE_RANGES.find((r) => months >= r.min && months <= r.max) || AGE_RANGES[AGE_RANGES.length - 1];
}

export function getAgeRangeKey(months: number): string {
  return getAgeRange(months).key;
}

export function formatBabyAge(months: number): string {
  if (months < 12) return `${months}ヶ月`;
  const years = Math.floor(months / 12);
  const remaining = months % 12;
  return remaining ? `${years}歳${remaining}ヶ月` : `${years}歳`;
}
