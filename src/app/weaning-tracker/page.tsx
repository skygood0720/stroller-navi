"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { amazonSearchUrl, amazonUrl } from "@/lib/amazon";

// ─── 型定義 ───────────────────────────────────────────
type Stage = "early" | "middle" | "late" | "final";

interface Food {
  id: string;
  name: string;
  emoji: string;
  stage: Stage;
  allergen?: boolean;
  note?: string;
}

interface AmazonItem {
  name: string;
  emoji: string;
  keyword?: string;
  asin?: string;
  price: string;
}

interface FoodCategory {
  id: string;
  name: string;
  emoji: string;
  foods: Food[];
  amazonItems: AmazonItem[];
}

// ─── 離乳食データ ─────────────────────────────────────
const STAGES: { key: Stage; label: string; period: string; color: string }[] = [
  { key: "early",  label: "初期",  period: "5〜6ヶ月",  color: "bg-green-100 text-green-700 border-green-300" },
  { key: "middle", label: "中期",  period: "7〜8ヶ月",  color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
  { key: "late",   label: "後期",  period: "9〜11ヶ月", color: "bg-orange-100 text-orange-700 border-orange-300" },
  { key: "final",  label: "完了期", period: "1歳〜",     color: "bg-red-100 text-red-700 border-red-300" },
];

const STAGE_BADGE: Record<Stage, string> = {
  early:  "bg-green-100 text-green-700",
  middle: "bg-yellow-100 text-yellow-700",
  late:   "bg-orange-100 text-orange-700",
  final:  "bg-red-100 text-red-700",
};
const STAGE_LABEL: Record<Stage, string> = {
  early: "初期", middle: "中期", late: "後期", final: "完了期",
};

const CATEGORIES: FoodCategory[] = [
  {
    id: "allergen",
    name: "アレルゲン（特に重要・必ず自宅で試して）",
    emoji: "⚠️",
    foods: [
      { id: "egg-yolk",   name: "卵黄",              emoji: "🥚", stage: "early",  allergen: true, note: "よく加熱した固ゆで卵の黄身のみ" },
      { id: "egg-white",  name: "卵白",              emoji: "🥚", stage: "middle", allergen: true, note: "中期以降・少量から" },
      { id: "whole-egg",  name: "全卵（炒り卵等）",  emoji: "🍳", stage: "late",   allergen: true },
      { id: "wheat-udon", name: "小麦（うどん）",    emoji: "🍜", stage: "early",  allergen: true, note: "やわらかく煮てから" },
      { id: "wheat-pan",  name: "小麦（パン）",      emoji: "🍞", stage: "early",  allergen: true },
      { id: "milk-plain", name: "牛乳（加熱）",      emoji: "🥛", stage: "late",   allergen: true, note: "調理用として。飲み物は完了期から" },
      { id: "soba",       name: "そば",              emoji: "🍜", stage: "final",  allergen: true, note: "強いアレルゲン・慎重に" },
      { id: "shrimp",     name: "えび",              emoji: "🦐", stage: "late",   allergen: true, note: "よく加熱・後期以降" },
      { id: "crab",       name: "かに",              emoji: "🦀", stage: "final",  allergen: true, note: "完了期以降" },
      { id: "peanut",     name: "落花生（ピーナッツバター）", emoji: "🥜", stage: "final", allergen: true, note: "粒のままは窒息注意" },
      { id: "walnut",     name: "くるみ",            emoji: "🌰", stage: "final",  allergen: true, note: "ペースト状にして" },
      { id: "soy",        name: "大豆（豆腐・納豆）",emoji: "🫘", stage: "early",  allergen: true },
    ],
    amazonItems: [
      { name: "和光堂 はじめての離乳食 裏ごし野菜セット", emoji: "🥕", keyword: "和光堂 はじめての離乳食 裏ごし セット アレルゲン", price: "1,200〜2,000円" },
      { name: "キユーピー ベビーフード 瓶詰め 初期セット", emoji: "🍼", asin: "B077XGPC5R", price: "1,500〜2,500円" },
      { name: "和光堂 たっぷり手作り応援 米がゆ", emoji: "🍚", keyword: "和光堂 米がゆ 離乳食 初期", price: "600〜1,200円" },
    ],
  },
  {
    id: "grains",
    name: "穀類・パン・麺類",
    emoji: "🍚",
    foods: [
      { id: "rice-10x",    name: "10倍粥（白米）",   emoji: "🍚", stage: "early" },
      { id: "rice-7x",     name: "7倍粥",            emoji: "🍚", stage: "middle" },
      { id: "rice-soft",   name: "軟飯",             emoji: "🍚", stage: "late" },
      { id: "rice-normal", name: "普通飯（ごはん）", emoji: "🍚", stage: "final" },
      { id: "bread",       name: "食パン",           emoji: "🍞", stage: "early",  note: "耳を取り除き、ちぎって水やミルクでのばす" },
      { id: "udon",        name: "うどん",           emoji: "🍜", stage: "early",  note: "やわらかくゆでて刻む" },
      { id: "somen",       name: "そうめん",         emoji: "🍜", stage: "middle" },
      { id: "pasta",       name: "パスタ・マカロニ", emoji: "🍝", stage: "middle" },
      { id: "oatmeal",     name: "オートミール",     emoji: "🌾", stage: "middle", note: "水分多めで煮てとろとろに" },
      { id: "cornflake",   name: "コーンフレーク",   emoji: "🌽", stage: "late",   note: "無糖タイプを牛乳でふやかす" },
    ],
    amazonItems: [
      { name: "和光堂 お米のおかゆ（5種セット）", emoji: "🍚", keyword: "和光堂 お米のおかゆ 離乳食 セット", price: "800〜1,500円" },
      { name: "アサヒグループ食品 和光堂 手作り応援 和風だしパック", emoji: "🍜", keyword: "和光堂 手作り応援 だし 離乳食", price: "400〜800円" },
      { name: "日清 1歳からのかんたんうどん", emoji: "🍜", keyword: "1歳 うどん 離乳食 ベビーフード 麺", price: "500〜1,000円" },
    ],
  },
  {
    id: "vegetables",
    name: "野菜・いも類",
    emoji: "🥕",
    foods: [
      { id: "carrot",      name: "にんじん",        emoji: "🥕", stage: "early" },
      { id: "pumpkin",     name: "かぼちゃ",        emoji: "🎃", stage: "early" },
      { id: "spinach",     name: "ほうれん草",      emoji: "🌿", stage: "early",  note: "アク抜きしてペースト状に" },
      { id: "komatsuna",   name: "小松菜",          emoji: "🌿", stage: "early" },
      { id: "tomato",      name: "トマト",          emoji: "🍅", stage: "early",  note: "皮と種を除いて" },
      { id: "potato",      name: "じゃがいも",      emoji: "🥔", stage: "early" },
      { id: "sweetpotato", name: "さつまいも",      emoji: "🍠", stage: "early" },
      { id: "daikon",      name: "大根",            emoji: "🥬", stage: "early" },
      { id: "cabbage",     name: "キャベツ",        emoji: "🥬", stage: "early" },
      { id: "broccoli",    name: "ブロッコリー",    emoji: "🥦", stage: "early" },
      { id: "onion",       name: "玉ねぎ",          emoji: "🧅", stage: "middle" },
      { id: "corn",        name: "とうもろこし",    emoji: "🌽", stage: "middle", note: "薄皮を取り除いて" },
      { id: "zucchini",    name: "ズッキーニ",      emoji: "🥒", stage: "middle" },
      { id: "asparagus",   name: "アスパラガス",    emoji: "🌿", stage: "middle" },
      { id: "eggplant",    name: "なす",            emoji: "🍆", stage: "late" },
      { id: "greenpepper", name: "ピーマン",        emoji: "🫑", stage: "late" },
      { id: "mushroom",    name: "しいたけ・きのこ", emoji: "🍄", stage: "late",  note: "よく加熱して細かく刻む" },
      { id: "negi",        name: "長ねぎ",          emoji: "🧅", stage: "late" },
    ],
    amazonItems: [
      { name: "キユーピー にんじん・かぼちゃの野菜ピューレ", emoji: "🥕", keyword: "キユーピー 野菜ピューレ 離乳食 にんじん かぼちゃ", price: "1,000〜1,800円" },
      { name: "和光堂 はじめての離乳食 緑黄色野菜セット", emoji: "🥦", keyword: "和光堂 はじめての離乳食 野菜 緑黄色 セット", price: "1,200〜2,000円" },
      { name: "コープ BF やさいのたきよせ（冷凍）", emoji: "🥗", keyword: "生協 コープ 離乳食 野菜 冷凍 ベビーフード", price: "800〜1,500円" },
    ],
  },
  {
    id: "fruits",
    name: "果物",
    emoji: "🍎",
    foods: [
      { id: "apple",      name: "りんご（すりおろし）", emoji: "🍎", stage: "early" },
      { id: "banana",     name: "バナナ",              emoji: "🍌", stage: "early" },
      { id: "strawberry", name: "いちご",              emoji: "🍓", stage: "early",  note: "種をこして" },
      { id: "mikan",      name: "みかん・オレンジ",   emoji: "🍊", stage: "middle", note: "薄皮を除いて" },
      { id: "watermelon", name: "スイカ",             emoji: "🍉", stage: "middle", note: "種を取り除いて" },
      { id: "peach",      name: "もも",               emoji: "🍑", stage: "middle", note: "缶詰より生を" },
      { id: "pear",       name: "なし",               emoji: "🍐", stage: "middle" },
      { id: "grape",      name: "ぶどう",             emoji: "🍇", stage: "late",   note: "皮と種を除いてつぶす" },
      { id: "kiwi",       name: "キウイ",             emoji: "🥝", stage: "late",   note: "アレルギー注意・少量から" },
      { id: "melon",      name: "メロン",             emoji: "🍈", stage: "middle" },
    ],
    amazonItems: [
      { name: "和光堂 はじめての果汁 りんご果汁", emoji: "🍎", keyword: "和光堂 果汁 りんご 離乳食 初期", price: "500〜900円" },
      { name: "キユーピー BF くだものセット", emoji: "🍑", keyword: "キユーピー ベビーフード 果物 くだもの 離乳食", price: "1,000〜1,800円" },
    ],
  },
  {
    id: "fish",
    name: "魚介類",
    emoji: "🐟",
    foods: [
      { id: "white-fish",   name: "白身魚（たら・ひらめ）", emoji: "🐟", stage: "early",  note: "骨を取り除いて" },
      { id: "tuna",         name: "まぐろ（赤身）",        emoji: "🐟", stage: "middle" },
      { id: "salmon",       name: "さけ・サーモン",        emoji: "🐟", stage: "middle" },
      { id: "shirasu",      name: "しらす（塩抜き）",      emoji: "🐟", stage: "early",  note: "必ず塩抜きを" },
      { id: "katsuo",       name: "かつお",               emoji: "🐟", stage: "middle" },
      { id: "saba",         name: "さば",                 emoji: "🐟", stage: "late",   note: "アレルギー注意" },
      { id: "ebi",          name: "えび（加熱）",          emoji: "🦐", stage: "late",   allergen: true },
      { id: "hotate",       name: "ほたて（加熱）",        emoji: "🐚", stage: "late" },
      { id: "asari",        name: "あさり（出汁のみ）",   emoji: "🐚", stage: "late" },
    ],
    amazonItems: [
      { name: "和光堂 BF 白身魚のペースト", emoji: "🐟", keyword: "和光堂 離乳食 白身魚 ペースト ベビーフード", price: "700〜1,200円" },
      { name: "キユーピー 3種の魚と野菜 ベビーフード", emoji: "🐠", keyword: "キユーピー 離乳食 魚 ベビーフード 中期", price: "1,000〜1,800円" },
      { name: "にしき食品 しらすと野菜のペースト", emoji: "🐟", keyword: "しらす 離乳食 ペースト ベビーフード", price: "600〜1,200円" },
    ],
  },
  {
    id: "meat",
    name: "肉類",
    emoji: "🍗",
    foods: [
      { id: "chicken-mince",  name: "鶏ひき肉",       emoji: "🍗", stage: "middle", note: "脂が少ない胸肉を" },
      { id: "chicken-sasami", name: "鶏ささみ",       emoji: "🍗", stage: "middle" },
      { id: "chicken-thigh",  name: "鶏もも肉（脂少なめ）", emoji: "🍗", stage: "late" },
      { id: "pork-mince",     name: "豚ひき肉",       emoji: "🥩", stage: "late",   note: "必ずよく加熱" },
      { id: "beef-mince",     name: "牛ひき肉",       emoji: "🥩", stage: "late",   note: "脂肪の少ない赤身を" },
      { id: "ham-baby",       name: "ベビー用ハム",   emoji: "🥩", stage: "final",  note: "食塩無添加タイプを" },
    ],
    amazonItems: [
      { name: "キユーピー 鶏ささみと野菜のおかゆ", emoji: "🍗", keyword: "キユーピー 離乳食 鶏ささみ 野菜 おかゆ", price: "900〜1,500円" },
      { name: "和光堂 BF 鶏と野菜のポトフ", emoji: "🥘", keyword: "和光堂 離乳食 鶏肉 野菜 ベビーフード 中期", price: "700〜1,300円" },
      { name: "にしき食品 鶏ひき肉と野菜セット", emoji: "🍗", keyword: "離乳食 鶏肉 ひき肉 冷凍 ベビーフード", price: "1,000〜1,800円" },
    ],
  },
  {
    id: "tofu-soy",
    name: "豆腐・大豆製品",
    emoji: "🫘",
    foods: [
      { id: "silken-tofu", name: "絹豆腐（加熱）",  emoji: "🟨", stage: "early",  note: "なめらかで消化しやすい" },
      { id: "firm-tofu",   name: "木綿豆腐（加熱）",emoji: "🟧", stage: "middle" },
      { id: "kinako",      name: "きな粉",          emoji: "🫘", stage: "early",  note: "おかゆやスープに混ぜて" },
      { id: "natto",       name: "納豆（ひきわり）",emoji: "🟤", stage: "middle", note: "ひきわりを刻んでさらに細かく" },
      { id: "edamame",     name: "枝豆（薄皮を除く）", emoji: "🫛", stage: "late" },
      { id: "soymilk",     name: "豆乳（無調整）",  emoji: "🥛", stage: "late",   note: "アレルギー注意・少量から" },
    ],
    amazonItems: [
      { name: "キユーピー 絹ごし豆腐のポタージュ", emoji: "🟨", keyword: "離乳食 豆腐 ポタージュ ベビーフード 初期", price: "700〜1,200円" },
      { name: "和光堂 BF ひきわり納豆入り野菜スープ", emoji: "🟤", keyword: "離乳食 納豆 ベビーフード 中期 野菜", price: "700〜1,200円" },
    ],
  },
  {
    id: "egg-dairy",
    name: "卵・乳製品",
    emoji: "🥛",
    foods: [
      { id: "yogurt-plain", name: "ヨーグルト（プレーン・無糖）", emoji: "🍦", stage: "middle", note: "加熱不要・砂糖なしを" },
      { id: "cheese-proc",  name: "プロセスチーズ（少量）",     emoji: "🧀", stage: "late",   note: "塩分が高いので少量" },
      { id: "milk-cook",    name: "牛乳（調理用・加熱）",       emoji: "🥛", stage: "late",   allergen: true, note: "シチューやホワイトソースで" },
      { id: "milk-drink",   name: "牛乳（飲み物として）",       emoji: "🥛", stage: "final",  allergen: true, note: "1歳以降・1日200ml目安" },
      { id: "butter-small", name: "バター・マーガリン（少量）", emoji: "🧈", stage: "middle", note: "少量で風味付けに" },
    ],
    amazonItems: [
      { name: "明治 ほほえみ 赤ちゃんヨーグルト", emoji: "🍦", keyword: "赤ちゃん ヨーグルト 無糖 プレーン ベビー", price: "300〜600円" },
      { name: "雪印 4種のチーズ ベビー向け", emoji: "🧀", keyword: "ベビー チーズ 赤ちゃん 乳製品 離乳食", price: "400〜800円" },
    ],
  },
  {
    id: "seasoning",
    name: "調味料・だし類",
    emoji: "🧂",
    foods: [
      { id: "dashi-kombu",  name: "昆布だし",      emoji: "🌊", stage: "early" },
      { id: "dashi-katsuo", name: "かつおだし",    emoji: "🍜", stage: "middle" },
      { id: "soy-sauce",    name: "しょうゆ（少量）", emoji: "🫙", stage: "late",   note: "ごく少量。使いすぎ注意" },
      { id: "miso",         name: "みそ（少量）",  emoji: "🍜", stage: "late",   note: "塩分が高いので極少量" },
      { id: "sugar",        name: "砂糖（少量）",  emoji: "🍬", stage: "middle", note: "なるべく控えめに" },
      { id: "oil",          name: "植物油・バター", emoji: "🫙", stage: "middle", note: "少量で口当たりよく" },
      { id: "ketchup",      name: "ケチャップ（後期〜少量）", emoji: "🍅", stage: "late" },
      { id: "mayonnaise",   name: "マヨネーズ（完了期〜）",  emoji: "🫙", stage: "final", note: "卵・大豆アレルギー注意" },
    ],
    amazonItems: [
      { name: "and recipe 赤ちゃん用だしパック", emoji: "🌊", keyword: "赤ちゃん だし パック 無添加 離乳食 昆布", price: "500〜1,000円" },
      { name: "無添加だし離乳食セット", emoji: "🍜", keyword: "無添加 だし 離乳食 昆布 かつお セット", price: "800〜1,500円" },
    ],
  },
];

// ─── Amazon未食材おすすめ商品 ─────────────────────────
const CROSS_PRODUCTS = [
  { name: "キユーピー 瓶詰めシリーズ 8本セット（初期）", emoji: "🍼", keyword: "キユーピー ベビーフード 瓶詰め 初期 セット 8種", price: "1,800〜3,000円", desc: "白身魚・にんじん・かぼちゃ・ほうれん草など初期食材を網羅" },
  { name: "和光堂 BF バラエティセット（中期・後期）", emoji: "🥘", keyword: "和光堂 ベビーフード セット 中期 後期 バラエティ", price: "2,000〜3,500円", desc: "肉・魚・野菜の中期〜後期食材を一気に試せるセット" },
  { name: "にしき食品 フリーズドライ 離乳食 24種セット", emoji: "🍱", keyword: "にしき食品 フリーズドライ 離乳食 セット 24種", price: "3,000〜5,000円", desc: "お湯で戻すだけ。外出先でも使えるフリーズドライタイプ" },
  { name: "the kindest ベビーフード 定期便", emoji: "🌿", keyword: "the kindest ベビーフード 有機 定期 月齢", price: "3,000〜6,000円/月", desc: "有機野菜使用・添加物なし。月齢に合わせた食材を毎月お届け" },
  { name: "コドモビオ 離乳食セット（有機野菜）", emoji: "🥦", keyword: "有機 離乳食 コドモビオ 野菜 セット", price: "2,500〜4,500円", desc: "有機JAS認証の野菜のみ使用。アレルゲン表示が明確で安心" },
];

// ─── ユーティリティ ────────────────────────────────────
const ALL_FOODS = CATEGORIES.flatMap((c) => c.foods.map((f) => ({ ...f, categoryId: c.id })));
const TOTAL = ALL_FOODS.length;
const STORAGE_KEY = "weaning_checked_v1";

function loadChecked(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")); }
  catch { return new Set(); }
}
function saveChecked(checked: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
}

// ─── メインコンポーネント ─────────────────────────────
export default function WeaningTracker() {
  const [checked, setChecked]       = useState<Set<string>>(new Set());
  const [stageFilter, setStageFilter] = useState<Stage | "all">("all");
  const [catFilter, setCatFilter]   = useState<string>("all");
  const [mounted, setMounted]       = useState(false);

  useEffect(() => { setChecked(loadChecked()); setMounted(true); }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      saveChecked(next);
      return next;
    });
  };

  const checkAll = (ids: string[]) => {
    setChecked((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.add(id));
      saveChecked(next);
      return next;
    });
  };

  const pct = mounted ? Math.round((checked.size / TOTAL) * 100) : 0;

  const visibleCategories = useMemo(() => {
    return CATEGORIES
      .map((cat) => ({
        ...cat,
        foods: cat.foods.filter((f) =>
          (stageFilter === "all" || f.stage === stageFilter) &&
          (catFilter  === "all" || cat.id === catFilter)
        ),
      }))
      .filter((cat) => cat.foods.length > 0);
  }, [stageFilter, catFilter]);

  // カテゴリ別達成率
  const catProgress = useMemo(() =>
    CATEGORIES.map((cat) => {
      const done = cat.foods.filter((f) => checked.has(f.id)).length;
      return { id: cat.id, name: cat.name, emoji: cat.emoji, done, total: cat.foods.length, pct: Math.round((done / cat.foods.length) * 100) };
    }), [checked]);

  // 未チェック食材があるカテゴリのAmazon商品を表示するかどうか
  const uncheckedCategories = useMemo(() =>
    CATEGORIES.filter((cat) => cat.foods.some((f) => !checked.has(f.id))),
    [checked]);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">

        {/* ヘッダー */}
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>離乳食チェッカー</span>
          </nav>
          <div className="text-4xl mb-2">🥄</div>
          <h1 className="text-xl font-black leading-snug">
            離乳食チェッカー<br />
            <span className="text-base font-bold opacity-90">保育園入園前 食材リスト</span>
          </h1>
          <p className="text-xs text-white/80 mt-2">
            食べた食材をチェックして進捗を管理。未食材の市販ベビーフードも紹介します。
          </p>
        </header>

        <main className="p-5 space-y-5">

          {/* 達成率カード */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-black">📊 全体の達成率</p>
              <p className="text-2xl font-black text-brand-500">{pct}%</p>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-green-400 via-brand-400 to-brand-600 rounded-full transition-all duration-500"
                style={{ width: mounted ? `${pct}%` : "0%" }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>食べた食材: <strong className="text-brand-500">{mounted ? checked.size : 0}</strong></span>
              <span>全{TOTAL}食材</span>
            </div>
            {/* 達成バッジ */}
            <div className="mt-3 text-center">
              {pct === 0 && <p className="text-xs text-gray-400">まずは初期食材から試してみよう 🌱</p>}
              {pct >= 30 && pct < 60 && <p className="text-xs text-green-600 font-bold">🍼 離乳食ビギナー！初期〜中期を攻略中</p>}
              {pct >= 60 && pct < 90 && <p className="text-xs text-orange-600 font-bold">⭐ 離乳食上級者！後期〜完了期へ</p>}
              {pct >= 90 && pct < 100 && <p className="text-xs text-brand-600 font-bold">🏅 あと少し！保育園入園の準備ほぼ完了</p>}
              {pct === 100 && <p className="text-sm text-brand-600 font-black">🎉 全食材制覇！保育園入園準備完了！</p>}
            </div>
          </div>

          {/* カテゴリ別達成率（ミニバー） */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-black text-gray-500 mb-3">カテゴリ別の達成率</p>
            <div className="space-y-2">
              {catProgress.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCatFilter(catFilter === c.id ? "all" : c.id)}
                  className={`w-full text-left transition rounded-lg px-2 py-1 ${catFilter === c.id ? "bg-brand-50" : "hover:bg-gray-50"}`}
                >
                  <div className="flex items-center justify-between text-xs mb-0.5">
                    <span className="font-medium">{c.emoji} {c.name.split("（")[0]}</span>
                    <span className={`font-bold ${c.pct === 100 ? "text-green-500" : "text-gray-500"}`}>
                      {mounted ? `${c.done}/${c.total}` : `0/${c.total}`}
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${c.pct === 100 ? "bg-green-400" : "bg-brand-400"}`}
                      style={{ width: mounted ? `${c.pct}%` : "0%" }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 注意書き */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="text-xs font-black text-red-700 mb-1">⚠️ 離乳食を進める際の注意</p>
            <ul className="text-[11px] text-red-600 space-y-1">
              <li>• 新しい食材は<strong>必ず自宅で・少量から・午前中に</strong>試してください</li>
              <li>• 発疹・嘔吐・顔のむくみなどアレルギー症状が出たらすぐに医師へ</li>
              <li>• アレルゲン食材は保育園でも「自宅で確認済み」が入園条件になる場合があります</li>
              <li>• 月齢の目安は個人差があります。かかりつけ医と相談しながら進めてください</li>
            </ul>
          </div>

          {/* フィルター */}
          <div className="space-y-3">
            {/* 時期フィルター */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setStageFilter("all")}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border transition ${stageFilter === "all" ? "bg-gray-700 text-white border-gray-700" : "bg-white text-gray-600 border-gray-200"}`}
              >
                すべて
              </button>
              {STAGES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setStageFilter(stageFilter === s.key ? "all" : s.key)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border transition ${stageFilter === s.key ? s.color + " border-current" : "bg-white text-gray-600 border-gray-200"}`}
                >
                  {s.label}期（{s.period}）
                </button>
              ))}
            </div>
            {/* カテゴリフィルター */}
            {catFilter !== "all" && (
              <button
                onClick={() => setCatFilter("all")}
                className="text-xs text-brand-500 font-bold hover:underline"
              >
                ← カテゴリ絞り込みを解除
              </button>
            )}
          </div>

          {/* 食材チェックリスト */}
          {visibleCategories.map((cat) => {
            const catCheckedCount = cat.foods.filter((f) => checked.has(f.id)).length;
            const catTotal = cat.foods.length;
            const catAllChecked = catCheckedCount === catTotal;
            const uncheckedFoods = cat.foods.filter((f) => !checked.has(f.id));
            const originalCat = CATEGORIES.find((c) => c.id === cat.id)!;

            return (
              <section key={cat.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* カテゴリヘッダー */}
                <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-black flex items-center gap-1.5">
                      <span>{cat.emoji}</span>
                      <span>{cat.name}</span>
                    </h2>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {mounted ? catCheckedCount : 0}/{catTotal}品 達成
                    </p>
                  </div>
                  {!catAllChecked && (
                    <button
                      onClick={() => checkAll(cat.foods.map((f) => f.id))}
                      className="text-[10px] border border-gray-200 text-gray-500 px-2 py-1 rounded-lg hover:bg-gray-50 transition shrink-0"
                    >
                      全チェック
                    </button>
                  )}
                  {catAllChecked && (
                    <span className="text-[10px] bg-green-100 text-green-600 font-bold px-2 py-1 rounded-lg">✅ 完了</span>
                  )}
                </div>

                {/* 食材リスト */}
                <div className="divide-y divide-gray-50">
                  {cat.foods.map((food) => {
                    const isChecked = mounted && checked.has(food.id);
                    return (
                      <button
                        key={food.id}
                        onClick={() => toggle(food.id)}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-left transition hover:bg-gray-50 active:scale-[0.99] ${isChecked ? "opacity-70" : ""}`}
                      >
                        {/* チェックボックス */}
                        <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition ${isChecked ? "bg-green-500 border-green-500 text-white" : "border-gray-300"}`}>
                          {isChecked && <span className="text-xs">✓</span>}
                        </span>
                        {/* 食材名 */}
                        <span className="text-lg shrink-0">{food.emoji}</span>
                        <div className="flex-1">
                          <p className={`text-sm font-bold ${isChecked ? "line-through text-gray-400" : "text-gray-800"}`}>
                            {food.name}
                            {food.allergen && <span className="ml-1 text-[9px] text-red-500 font-black">⚠️アレルゲン</span>}
                          </p>
                          {food.note && <p className="text-[10px] text-gray-400 mt-0.5">{food.note}</p>}
                        </div>
                        {/* 時期バッジ */}
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${STAGE_BADGE[food.stage]}`}>
                          {STAGE_LABEL[food.stage]}期
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* 未チェック食材がある場合のAmazon商品 */}
                {mounted && uncheckedFoods.length > 0 && originalCat.amazonItems.length > 0 && (
                  <div className="px-5 py-4 bg-orange-50 border-t border-orange-100">
                    <p className="text-[11px] font-black text-orange-700 mb-2">
                      🛒 まだ試していない食材入り ベビーフード
                    </p>
                    <div className="space-y-2">
                      {originalCat.amazonItems.map((item) => {
                        const href = item.asin
                          ? `https://www.amazon.co.jp/dp/${item.asin}?tag=babynabi-22`
                          : amazonSearchUrl(item.keyword ?? item.name);
                        return (
                          <a
                            key={item.name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:shadow-md transition border border-orange-100"
                          >
                            <span className="text-2xl shrink-0">{item.emoji}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold leading-snug">{item.name}</p>
                              <p className="text-[10px] text-orange-600 font-bold">参考価格 {item.price}</p>
                            </div>
                            <span className="text-[10px] bg-orange-500 text-white px-2 py-1 rounded font-bold shrink-0">Amazon</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            );
          })}

          {/* 未食材がある場合のクロスAmazon商品 */}
          {mounted && uncheckedCategories.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-sm font-black mb-1">🛒 まだ試していない食材が入ったおすすめベビーフード</h2>
              <p className="text-[11px] text-gray-500 mb-4">複数の食材を一度に試せるセット商品をまとめました</p>
              <div className="space-y-3">
                {CROSS_PRODUCTS.map((p) => {
                  const href = amazonSearchUrl(p.keyword ?? p.name);
                  return (
                    <a
                      key={p.name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-start gap-3 bg-orange-50 hover:bg-orange-100 border border-orange-100 rounded-xl p-4 transition group"
                    >
                      <span className="text-3xl shrink-0">{p.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-bold leading-snug mb-0.5">{p.name}</p>
                        <p className="text-[11px] text-gray-600 mb-1">{p.desc}</p>
                        <p className="text-[10px] text-orange-600 font-bold">参考価格 {p.price}</p>
                      </div>
                      <span className="text-[10px] bg-orange-500 text-white px-2 py-1.5 rounded-lg font-bold shrink-0 group-hover:bg-orange-600 transition">
                        🛒 Amazon
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          )}

          {/* 全部食べたら */}
          {mounted && checked.size === TOTAL && (
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-white text-center shadow-lg">
              <div className="text-5xl mb-3">🎉</div>
              <p className="text-xl font-black">全食材制覇おめでとう！</p>
              <p className="text-sm mt-1 opacity-90">保育園入園の食材準備が完了しました</p>
              <Link href="/articles/baby-weaning-outing" className="inline-block mt-4 bg-white text-green-600 text-xs font-bold px-5 py-2.5 rounded-xl">
                離乳食おでかけガイドを見る →
              </Link>
            </div>
          )}

          {/* 関連記事 */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-black mb-3">📚 離乳食・おでかけ関連記事</h2>
            <div className="space-y-2">
              {[
                { href: "/articles/baby-weaning-outing", emoji: "🥄", title: "離乳食中の赤ちゃんとおでかけ", desc: "外食・ベビーフード活用術" },
                { href: "/articles/zero-age-outing", emoji: "🌱", title: "0歳の赤ちゃんはいつから外出できる？", desc: "月齢別おでかけ完全ガイド" },
                { href: "/articles/1year-old-outing", emoji: "👶", title: "1歳のおでかけ完全ガイド", desc: "おすすめスポット・持ち物チェックリスト" },
                { href: "/baby-goods", emoji: "🛒", title: "赤ちゃんおすすめ商品", desc: "ベビーカー・知育おもちゃ・お出かけグッズ" },
              ].map((a) => (
                <Link key={a.href} href={a.href}
                  className="flex items-center gap-2.5 bg-gray-50 hover:bg-brand-50 rounded-xl px-4 py-3 transition">
                  <span className="text-lg">{a.emoji}</span>
                  <div>
                    <p className="text-xs font-bold">{a.title}</p>
                    <p className="text-[10px] text-gray-500">{a.desc}</p>
                  </div>
                  <span className="ml-auto text-gray-300 text-xs">→</span>
                </Link>
              ))}
            </div>
          </section>

        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
