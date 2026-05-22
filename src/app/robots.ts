import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://stroller-navi.vercel.app/sitemap.xml",
    host: "https://stroller-navi.vercel.app",
  };
}
