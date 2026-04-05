"use client";

import { useRef, useEffect } from "react";
import { useGoogleMap } from "@/lib/useGoogleMap";
import { BABY_SPOTS, TOILETS } from "@/lib/constants";
import { useAppStore } from "@/lib/store";
import type { MapItem } from "@/types";

export default function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoaded, setMarkers, getUserLocation, panTo, userLocation } =
    useGoogleMap(containerRef);
  const { setSelectedItemId, setActiveTab } = useAppStore();
  const showSpots = useRef(true);
  const showToilets = useRef(true);

  // Place markers when map loads
  useEffect(() => {
    if (!isLoaded) return;
    const items: MapItem[] = [
      ...(showSpots.current ? BABY_SPOTS : []),
      ...(showToilets.current ? TOILETS : []),
    ];
    setMarkers(items, (item) => {
      setSelectedItemId(item.id);
    });
  }, [isLoaded, setMarkers, setSelectedItemId]);

  const handleLocate = async () => {
    try {
      await getUserLocation();
    } catch {
      alert("位置情報を取得できませんでした");
    }
  };

  return (
    <div className="relative w-full" style={{ height: 340 }}>
      {/* Google Map container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Overlay: 現在地ボタン */}
      <button
        onClick={handleLocate}
        className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white shadow-lg
          flex items-center justify-center text-blue-500 hover:bg-blue-50 transition z-10"
        title="現在地を取得"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      </button>

      {/* Overlay: 凡例 */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 text-xs z-10 shadow">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-brand-500 font-bold">●</span>
          <span>ベビーカースポット</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-toilet-500 font-bold">●</span>
          <span>バリアフリートイレ</span>
        </div>
      </div>

      {/* Overlay: タイトル */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur
        rounded-full px-4 py-1.5 text-xs font-semibold shadow z-10 whitespace-nowrap">
        📍 ベビーカーフレンドリーマップ
      </div>

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-green-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-green-200 border-t-brand-500 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-500">マップを読み込み中...</p>
          </div>
        </div>
      )}
    </div>
  );
}
