import { ALL_SPOTS } from "@/lib/spots-data";

const BASE_URL = "https://stroller-navi.vercel.app";
const REGIONS = ["東京", "北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄"];

export default function sitemap() {
  const spotPages = ALL_SPOTS.map((spot) => ({
    url: `${BASE_URL}/spots/${spot.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const regionPages = REGIONS.map((region) => ({
    url: `${BASE_URL}/spots/region/${encodeURIComponent(region)}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/spots`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...regionPages,
    ...spotPages,
  ];
}
