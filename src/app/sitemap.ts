import { ALL_SPOTS } from "@/lib/spots-data";

const BASE_URL = "https://stroller-navi.vercel.app";

export default function sitemap() {
  const spotPages = ALL_SPOTS.map((spot) => ({
    url: `${BASE_URL}/spots/${spot.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
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
    ...spotPages,
  ];
}
