"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  adSlot: string;
  adFormat?: string;
  fullWidth?: boolean;
}

/**
 * Google AdSense バナー広告コンポーネント
 *
 * 使い方:
 * 1. Google AdSense アカウントを作成: https://www.google.com/adsense/
 * 2. サイトを登録して審査を通す
 * 3. 広告ユニットを作成して adSlot を取得
 * 4. .env.local に NEXT_PUBLIC_ADSENSE_CLIENT_ID を設定
 * 5. <AdBanner adSlot="1234567890" /> で表示
 *
 * 審査通過前はプレースホルダーが表示されます
 */
export default function AdBanner({ adSlot, adFormat = "auto", fullWidth = true }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!clientId || !adRef.current) return;

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [clientId]);

  // AdSense未設定時はプレースホルダー表示
  if (!clientId) {
    return (
      <div className="w-full max-w-[480px] mx-auto px-4 py-2">
        <div className="bg-gray-100 rounded-xl py-3 px-4 text-center border border-dashed border-gray-300">
          <p className="text-[10px] text-gray-400 font-medium">
            📢 広告スペース（AdSense設定後に表示されます）
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[480px] mx-auto px-4 py-2">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? "true" : "false"}
      />
    </div>
  );
}
