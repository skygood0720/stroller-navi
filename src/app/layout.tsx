import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ベビーカーナビ | 子連れ・赤ちゃん連れおでかけ・授乳室検索",
    template: "%s | ベビーカーナビ",
  },
  description:
    "赤ちゃん・子連れのおでかけをもっと安心に。全国500以上の授乳室・おむつ替え・エレベーター完備スポット、バリアフリートイレ、子連れOKレストランを無料で検索。東京・大阪・横浜・全国対応。",
  keywords: [
    "子連れおでかけ", "赤ちゃん おでかけ", "授乳室 場所", "おむつ替え スポット",
    "ベビーカー バリアフリー", "ベビーカー 電車", "子連れ ランチ", "授乳室 東京",
    "ベビーカー 公園", "子連れ 観光", "おでかけスポット 赤ちゃん", "0歳 おでかけ",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ベビーカーナビ",
  },
  alternates: {
    canonical: "https://stroller-navi.vercel.app",
  },
  openGraph: {
    title: "ベビーカーナビ | 子連れ・赤ちゃん連れおでかけ・授乳室検索",
    description: "全国500以上の授乳室・おむつ替え・エレベーター完備スポットを無料検索。赤ちゃんとのおでかけをもっと安心に。子連れランチ・バリアフリートイレも網羅。",
    url: "https://stroller-navi.vercel.app",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://stroller-navi.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ベビーカーナビ - 全国500以上の子連れおでかけスポット情報",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ベビーカーナビ | 子連れ・赤ちゃん連れおでかけ・授乳室検索",
    description: "全国500以上の授乳室・おむつ替え・エレベーター完備スポットを無料検索。子連れランチ・バリアフリートイレも網羅。",
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
import CookieConsent from "@/components/CookieConsent";

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ベビーカーナビ",
              "alternateName": "Stroller Navi",
              "description": "赤ちゃん・子連れのおでかけをもっと安心に。全国500以上の授乳室・おむつ替え・エレベーター完備スポットを無料検索。",
              "url": "https://stroller-navi.vercel.app",
              "inLanguage": "ja",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://stroller-navi.vercel.app/spots?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ベビーカーナビ",
              "url": "https://stroller-navi.vercel.app",
              "logo": "https://stroller-navi.vercel.app/icon-192.svg",
              "sameAs": [],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "ベビーカーで電車に乗るときはたたむ必要がありますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "国土交通省の公式見解では、ベビーカーは折りたたまずに乗車できます。ただし混雑時は周囲への配慮が必要です。エレベーターのある駅を選ぶと移動がスムーズです。",
                  },
                },
                {
                  "@type": "Question",
                  "name": "赤ちゃんはいつからおでかけできますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "一般的に生後1ヶ月健診後から短時間の外出が可能とされています。ただし人混みや長時間の外出は避け、月齢に合わせた場所を選ぶことが大切です。",
                  },
                },
                {
                  "@type": "Question",
                  "name": "授乳室はどこで探せますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ベビーカーナビでは全国500以上の授乳室・おむつ替え台のある施設を掲載しています。百貨店・ショッピングモール・駅ビル・公園管理棟などに多く設置されています。",
                  },
                },
                {
                  "@type": "Question",
                  "name": "子連れで行けるレストランはどう探せますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ベビーカーナビでは子連れOKのレストラン情報を90件以上掲載。ベビーチェア・個室・授乳室近くのお店を検索できます。",
                  },
                },
                {
                  "@type": "Question",
                  "name": "0歳の赤ちゃんと行けるスポットはありますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい。ベビーカーナビでは月齢0〜36ヶ月のフィルターで絞り込めます。水族館・屋内遊び場・広い公園など赤ちゃんも楽しめるスポットが多数掲載されています。",
                  },
                },
              ],
            },
          ]) }}
        />
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
      <body className="font-sans antialiased pb-16">
        {children}
        <BottomNav />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
