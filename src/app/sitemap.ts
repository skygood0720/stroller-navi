import { MetadataRoute } from "next";
import { ALL_SPOTS } from "@/lib/spots-data";

const BASE_URL = "https://stroller-navi.vercel.app";

const REGIONS = ["東京", "北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄"];

const ARTICLE_SLUGS = [
  "shinjuku-guide",
  "shibuya-guide",
  "ikebukuro-guide",
  "odaiba-guide",
  "kichijoji-guide",
  "ueno-guide",
  "osaka-guide",
  "kyoto-guide",
  "yokohama-guide",
  "stroller-guide",
  "nursing-room-tips",
  "rainy-day-spots",
  "restaurant-tips",
  "baby-first-outing",
  "train-stroller-manner",
  "zero-age-outing",
  "fukuoka-guide",
  "sapporo-guide",
  "nagoya-guide",
  "shinjuku-station-guide",
  "shibuya-station-guide",
  "ikebukuro-station-guide",
  "tokyo-station-guide",
  "summer-indoor-spots",
  "autumn-outing-spots",
  "free-kids-spots-tokyo",
  "shopping-mall-stroller",
  "1year-old-outing",
  "stroller-shinkansen",
  // 新規追加
  "spring-outing-spots",
  "winter-outing-spots",
  "sendai-guide",
  "hiroshima-guide",
  "okinawa-guide",
  "2year-old-outing",
  "stroller-choosing-guide",
  "water-play-spots",
  "saitama-guide",
  "disney-stroller",
  // ─── 第2弾追加記事 ───
  "asakusa-guide",
  "kobe-guide",
  "chiba-guide",
  "3year-old-outing",
  "airplane-with-baby",
  "baby-onsen",
  "kawasaki-guide",
  "anpanman-museum",
  "tokyo-aquarium-guide",
  "baby-camping",
  "stroller-repair-guide",
  "baby-weaning-outing",
  // ─── 絵本特集記事 ───
  "ehon-0sai",
  "ehon-nemuri",
  "ehon-kotoba",
  // ─── エリア別ランチ・カフェ記事 ───
  "shibuya-lunch",
  "ikebukuro-lunch",
  "yokohama-lunch",
  "kids-cafe-tokyo",
  "kosodate-center-tokyo",
  // ─── 全国エリア別ランチ記事 ───
  "shinjuku-lunch",
  "osaka-lunch",
  "nagoya-lunch",
  // ─── 観光地子連れガイド ───
  "kanazawa-guide",
  "nara-guide",
  "kamakura-guide",
  "hakone-guide",
  // ─── 季節・行事コンテンツ ───
  "halloween-baby",
  "christmas-baby",
  "shichigosan-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/spots`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/spots/ranking`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${BASE_URL}/spots/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE_URL}/weaning-tracker`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/milestone`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/diary`,           lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/baby-goods`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/baby-goods/ehon`, lastModified: now, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const regionPages: MetadataRoute.Sitemap = REGIONS.map((region) => ({
    url: `${BASE_URL}/spots/region/${encodeURIComponent(region)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const spotPages: MetadataRoute.Sitemap = ALL_SPOTS.map((spot) => ({
    url: `${BASE_URL}/spots/${spot.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const SPOT_TAGS = ["授乳室", "おむつ替え", "ベビーカー貸出", "エレベーター", "スロープ", "キッズスペース", "バリアフリー"];
  const tagPages: MetadataRoute.Sitemap = SPOT_TAGS.map((tag) => ({
    url: `${BASE_URL}/spots/tag/${encodeURIComponent(tag)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [...staticPages, ...regionPages, ...tagPages, ...spotPages, ...articlePages];
}
