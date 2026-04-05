import type { AgeRange, BabySpot, BarrierFreeToilet } from "@/types";

export const AGE_RANGES: AgeRange[] = [
  { key: "0-3", label: "0〜3ヶ月", min: 0, max: 3, emoji: "👶", color: "#FFB3BA" },
  { key: "4-6", label: "4〜6ヶ月", min: 4, max: 6, emoji: "🍼", color: "#FFDFBA" },
  { key: "7-12", label: "7〜12ヶ月", min: 7, max: 12, emoji: "🧸", color: "#BAE1FF" },
  { key: "13-24", label: "1〜2歳", min: 13, max: 24, emoji: "👣", color: "#BAFFC9" },
  { key: "25-36", label: "2〜3歳", min: 25, max: 36, emoji: "🎈", color: "#E8BAFF" },
];

export const BABY_SPOTS: BabySpot[] = [
  {
    id: 1, name: "東京ミッドタウン", lat: 35.6654, lng: 139.7311, type: "spot",
    tags: ["授乳室", "おむつ替え", "エレベーター"],
    desc: "全フロアバリアフリー対応。B1F・3Fに授乳室あり",
    age_min: 0, age_max: 36,
    age_tips: {
      "0-3": "授乳室が個室で安心",
      "4-6": "離乳食持ち込みOKのカフェ多数",
      "7-12": "芝生広場でハイハイOK",
      "13-24": "キッズスペースでのびのび",
      "25-36": "21_21 DESIGN SIGHTで感性刺激",
    },
  },
  {
    id: 2, name: "六本木ヒルズ", lat: 35.6605, lng: 139.7292, type: "spot",
    tags: ["授乳室", "ベビーカー貸出", "エレベーター"],
    desc: "ヒルサイドB2Fにベビールーム完備",
    age_min: 0, age_max: 36,
    age_tips: {
      "0-3": "静かな授乳室あり",
      "4-6": "ベビーカー貸出で手ぶらOK",
      "7-12": "毛利庭園でお散歩デビュー",
      "13-24": "展望台で景色を楽しめる",
      "25-36": "森美術館のキッズプログラム",
    },
  },
  {
    id: 3, name: "表参道ヒルズ", lat: 35.6657, lng: 139.7101, type: "spot",
    tags: ["スロープ", "エレベーター", "おむつ替え"],
    desc: "スパイラルスロープでベビーカー移動が楽",
    age_min: 4, age_max: 36,
    age_tips: {
      "4-6": "スロープが緩やかで快適",
      "7-12": "B3Fキッズエリアで遊べる",
      "13-24": "スパイラルスロープを歩く練習に",
      "25-36": "キッズ向けショップ多数",
    },
  },
  {
    id: 4, name: "KITTE丸の内", lat: 35.6787, lng: 139.7651, type: "spot",
    tags: ["授乳室", "おむつ替え", "エレベーター"],
    desc: "5Fにキッズスペースと授乳室",
    age_min: 0, age_max: 36,
    age_tips: {
      "0-3": "5F授乳室が広くて清潔",
      "4-6": "屋上庭園で外気浴",
      "7-12": "キッズスペースにおもちゃあり",
      "13-24": "東京駅の電車が見える屋上が人気",
      "25-36": "旧郵便局の建築見学も",
    },
  },
  {
    id: 5, name: "銀座三越", lat: 35.6718, lng: 139.7669, type: "spot",
    tags: ["授乳室", "ベビーカー貸出", "おむつ替え"],
    desc: "9Fベビー休憩室が充実",
    age_min: 0, age_max: 36,
    age_tips: {
      "0-3": "9F授乳室に体重計・ミルク用お湯あり",
      "4-6": "離乳食が買えるデパ地下",
      "7-12": "9Fおもちゃ売り場で試し遊び",
      "13-24": "屋上テラスで遊べる",
      "25-36": "キッズ向けイベント定期開催",
    },
  },
  {
    id: 6, name: "東京スカイツリータウン", lat: 35.7101, lng: 139.8107, type: "spot",
    tags: ["授乳室", "エレベーター", "おむつ替え"],
    desc: "ソラマチ内に複数の授乳室",
    age_min: 0, age_max: 36,
    age_tips: {
      "0-3": "各フロア授乳室で安心",
      "4-6": "すみだ水族館の暗めの照明が落ち着く",
      "7-12": "ソラマチひろばでハイハイ",
      "13-24": "水族館のペンギンに夢中",
      "25-36": "プラネタリウムデビューにおすすめ",
    },
  },
  {
    id: 7, name: "新宿タカシマヤ", lat: 35.6875, lng: 139.7024, type: "spot",
    tags: ["授乳室", "おむつ替え", "エレベーター"],
    desc: "9Fにベビー休憩室",
    age_min: 0, age_max: 24,
    age_tips: {
      "0-3": "9Fベビー休憩室が静かで◎",
      "4-6": "ベビーフード試食コーナーあり",
      "7-12": "キッズスペースでつかまり立ち",
      "13-24": "屋上ガーデンでお散歩",
    },
  },
  {
    id: 8, name: "ららぽーと豊洲", lat: 35.6554, lng: 139.7955, type: "spot",
    tags: ["授乳室", "ベビーカー貸出", "エレベーター", "おむつ替え"],
    desc: "各フロアに授乳室・おむつ替えスペース",
    age_min: 0, age_max: 36,
    age_tips: {
      "0-3": "全フロアに授乳室完備",
      "4-6": "ベビーカー貸出無料",
      "7-12": "キッザニア東京で見学デビュー",
      "13-24": "屋外デッキで水遊び（夏季）",
      "25-36": "キッザニアで職業体験デビュー",
    },
  },
];

export const TOILETS: BarrierFreeToilet[] = [
  { id: 101, name: "東京駅 バリアフリートイレ", lat: 35.6812, lng: 139.7671, type: "toilet", desc: "丸の内地下改札外" },
  { id: 102, name: "新宿駅 多機能トイレ", lat: 35.6896, lng: 139.7006, type: "toilet", desc: "南口改札外1F" },
  { id: 103, name: "渋谷駅 バリアフリートイレ", lat: 35.6580, lng: 139.7016, type: "toilet", desc: "東口地下広場" },
  { id: 104, name: "品川駅 多機能トイレ", lat: 35.6284, lng: 139.7387, type: "toilet", desc: "港南口1F" },
  { id: 105, name: "池袋駅 バリアフリートイレ", lat: 35.7295, lng: 139.7109, type: "toilet", desc: "東口地下通路" },
  { id: 106, name: "上野公園 バリアフリートイレ", lat: 35.7146, lng: 139.7732, type: "toilet", desc: "噴水広場横" },
  { id: 107, name: "代々木公園 多機能トイレ", lat: 35.6716, lng: 139.6949, type: "toilet", desc: "原宿門近く" },
  { id: 108, name: "日比谷公園 バリアフリートイレ", lat: 35.6738, lng: 139.7560, type: "toilet", desc: "有楽門入口付近" },
];

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
