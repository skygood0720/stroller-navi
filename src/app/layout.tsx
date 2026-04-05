import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ベビーカーナビ | バリアフリールート検索",
  description:
    "ベビーカーで安心して外出するためのバリアフリールート検索アプリ。エレベーター・スロープのある経路、授乳室・おむつ替えスポット、バリアフリートイレ情報を提供します。",
  keywords: ["ベビーカー", "バリアフリー", "ルート検索", "授乳室", "おむつ替え", "東京"],
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
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
