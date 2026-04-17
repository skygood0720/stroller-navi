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
    description: "ベビーカーで安心して外出！全国250以上のスポット情報、天気連動おすすめ、おでかけプラン機能。",
    url: "https://stroller-navi.vercel.app",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ベビーカーナビ",
    description: "ベビーカーで安心して外出！バリアフリールート検索アプリ",
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
        {adsenseId && (
          <>
            <meta name="google-adsense-account" content={adsenseId} />
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
              crossOrigin="anonymous"
            />
          </>
        )}
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js').catch(() => {});
            });
          }
        `}} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
