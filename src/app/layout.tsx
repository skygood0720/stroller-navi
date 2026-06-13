import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ベビーカーナビ | バリアフリールート検索",
  description:
    "ベビーカーで安心して外出するためのバリアフリールート検索アプリ。エレベーター・スロープのある経路、授乳室・おむつ替えスポット、バリアフリートイレ情報を提供します。",
  keywords: ["ベビーカー", "バリアフリー", "ルート検索", "授乳室", "おむつ替え", "東京", "子連れ", "おでかけ"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ベビーカーナビ",
  },
  openGraph: {
    title: "ベビーカーナビ | バリアフリールート検索",
    description: "ベビーカーで安心して外出！全国530以上のスポット情報、授乳室・エレベーター・おむつ替え台を完全網羅。子連れおでかけをもっと楽しく。",
    url: "https://stroller-navi.vercel.app",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://stroller-navi.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ベビーカーナビ - 全国530以上のバリアフリースポット情報",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ベビーカーナビ | バリアフリールート検索",
    description: "ベビーカーで安心して外出！全国530以上のスポット情報、授乳室・エレベーター・おむつ替え台を完全網羅。",
    images: ["https://stroller-navi.vercel.app/opengraph-image.png"],
  },
  verification: {
    google: "yEGzkafnTcanZP_K9veaL_401hLNLo46zklyQc4qFpM",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FF8A65",
};

import BottomNav from "@/components/BottomNav";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="ja">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "ベビーカーナビ",
            "alternateName": "Stroller Navi",
            "description": "ベビーカーで安心して外出するためのバリアフリールート検索アプリ。全国470以上のスポット情報を掲載。",
            "url": "https://stroller-navi.vercel.app",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
            "inLanguage": "ja",
          }) }}
        />
        {adsenseId && (
          <meta name="google-adsense-account" content={adsenseId} />
        )}
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js').catch(() => {});
            });
          }
        `}} />
      </head>
      <body className="font-sans antialiased pb-16">
        {children}
        <BottomNav />
        <BackToTop />
      </body>
    </html>
  );
}
