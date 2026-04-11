"use client";

import { useRef, useEffect, useState } from "react";
import { useGoogleMap } from "@/lib/useGoogleMap";
import { BABY_SPOTS, TOILETS } from "@/lib/constants";
import { useAppStore } from "@/lib/store";
import type { MapItem, BabySpot } from "@/types";

export default function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoaded, setMarkers, getUserLocation, panTo, userLocation } =
    useGoogleMap(containerRef);
  const { setSelectedItemId } = useAppStore();
  const [userSpots, setUserSpots] = useState<BabySpot[]>([]);

  // Fetch user-submitted spots for map
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/user-spots?status=approved");
        const data = await res.json();
        if (data.spots) {
          setUserSpots(data.spots.map((s: any) => ({
            id: typeof s.id === "string" ? Math.abs(s.id.split("").reduce((a: number, c: string) => a + c.charCodeAt(0), 0) * 100) : s.id,
            name: s.name,
            lat: s.lat,
            lng: s.lng,
            type: "spot" as const,
            tags: s.tags || [],
            desc: s.desc,
            age_min: 0,
            age_max: 36,
            age_tips: {},
            is_user_submitted: true,
          })));
        }
      } catch {}
    })();
  }, []);

  // Place markers when map loads or user spots change
  useEffect(() => {
    if (!isLoaded) return;
    const items: MapItem[] = [...BABY_SPOTS, ...userSpots, ...TOILETS];
    setMarkers(items, (item) => {
      setSelectedItemId(item.id);
    });
  }, [isLoaded, setMarkers, setSelectedItemId, userSpots]);

  const handleLocate = async () => {
    try {
      await getUserLocation();
    } catch {
      alert("位置情報を取得できませんでした");
    }
  };

  return (
    <div className="relative w-full" style={{ height: 340 }}>
      <div ref={containerRef} className="w-full h-full" />

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

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 text-xs z-10 shadow">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-brand-500 font-bold">●</span>
          <span>ベビーカースポット</span>
        </div>
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-toilet-500 font-bold">●</span>
          <span>バリアフリートイレ</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-green-500 font-bold">●</span>
          <span>ユーザー投稿</span>
        </div>
      </div>

      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur
        rounded-full px-4 py-1.5 text-xs font-semibold shadow z-10 whitespace-nowrap">
        📍 ベビーカーフレンドリーマップ
      </div>

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
