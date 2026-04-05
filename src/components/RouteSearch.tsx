"use client";

import { useRef, useState } from "react";
import { useGoogleMap } from "@/lib/useGoogleMap";
import { Spinner } from "@/components/ui";
import type { RouteInfo } from "@/types";

export default function RouteSearch() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const { isLoaded, searchRoute, getUserLocation } = useGoogleMap(mapContainerRef);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLocate = async () => {
    try {
      const loc = await getUserLocation();
      setOrigin(`${loc.lat},${loc.lng}`);
    } catch {
      alert("位置情報を取得できませんでした");
    }
  };

  const handleSearch = async () => {
    if (!origin || !destination) return;
    setIsSearching(true);
    setError(null);
    setRouteInfo(null);

    try {
      // origin が座標文字列の場合はパース
      let originParam: string | google.maps.LatLngLiteral = origin;
      if (/^-?\d+\.?\d*,-?\d+\.?\d*$/.test(origin)) {
        const [lat, lng] = origin.split(",").map(Number);
        originParam = { lat, lng };
      }

      const result = await searchRoute(originParam, destination);
      if (result) {
        setRouteInfo(result);
      } else {
        setError("ルートが見つかりませんでした。地名を変えて再度お試しください。");
      }
    } catch (err) {
      setError("ルート検索でエラーが発生しました。");
    } finally {
      setIsSearching(false);
    }
  };

  const openInGoogleMaps = () => {
    const originEnc = encodeURIComponent(origin);
    const destEnc = encodeURIComponent(destination);
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${originEnc}&destination=${destEnc}&travelmode=walking`,
      "_blank"
    );
  };

  return (
    <div className="p-4 space-y-4">
      {/* Search card */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <h3 className="text-base font-bold mb-3.5 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          バリアフリールート検索
        </h3>

        <div className="space-y-2.5">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-green-500" />
            <input
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="出発地（例: 東京駅）"
              className="w-full pl-8 pr-3 py-3 rounded-xl border border-gray-200 text-sm
                focus:border-brand-500 focus:outline-none bg-gray-50"
            />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-700" />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="目的地（例: KITTE丸の内）"
              className="w-full pl-8 pr-3 py-3 rounded-xl border border-gray-200 text-sm
                focus:border-brand-500 focus:outline-none bg-gray-50"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleLocate}
              className="flex-1 py-2.5 rounded-xl border-[1.5px] border-brand-500
                text-brand-500 text-xs font-bold flex items-center justify-center gap-1.5
                hover:bg-brand-50 transition"
            >
              📍 現在地
            </button>
            <button
              onClick={handleSearch}
              disabled={!origin || !destination || isSearching}
              className={`flex-[1.5] py-2.5 rounded-xl text-white text-sm font-bold
                flex items-center justify-center gap-1.5 transition
                ${origin && destination && !isSearching
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              🔍 ルート検索
            </button>
          </div>
        </div>
      </div>

      {/* Route map display */}
      <div
        ref={mapContainerRef}
        className={`w-full rounded-2xl overflow-hidden shadow-md transition-all ${
          routeInfo ? "h-56" : "h-0"
        }`}
      />

      {/* Loading */}
      {isSearching && (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <Spinner text="ベビーカーに最適なルートを検索中..." />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 rounded-2xl p-4 text-sm text-red-600 font-medium">
          ⚠️ {error}
        </div>
      )}

      {/* Route result */}
      {routeInfo && !isSearching && (
        <div className="bg-white rounded-2xl p-5 shadow-md space-y-4">
          {/* Distance & time */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-brand-50 to-orange-50">
            <span className="text-3xl">🗺️</span>
            <div>
              <div className="text-lg font-black text-brand-700">{routeInfo.distance}</div>
              <div className="text-xs text-gray-500 font-medium">{routeInfo.duration}</div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-2">
            {[
              { label: "エレベーター", value: routeInfo.elevators, emoji: "🛗", color: "text-green-600" },
              { label: "スロープ", value: routeInfo.slopes, emoji: "♿", color: "text-blue-600" },
              {
                label: "階段",
                value: routeInfo.steps,
                emoji: "⚠️",
                color: routeInfo.steps === 0 ? "text-green-600" : "text-red-600",
              },
            ].map((s) => (
              <div key={s.label} className="flex-1 text-center bg-gray-50 rounded-xl py-2.5">
                <div className="text-lg">{s.emoji}</div>
                <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
                <div className="text-[9px] text-gray-500 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Barrier-free badge */}
          {routeInfo.steps === 0 && (
            <div className="bg-green-50 rounded-xl px-3.5 py-2.5 flex items-center gap-2 text-xs font-semibold text-green-700">
              ✅ 階段なし！完全バリアフリールートです
            </div>
          )}

          {/* Tips */}
          <div>
            <h4 className="text-sm font-bold mb-2.5">💡 ルートのポイント</h4>
            {routeInfo.tips.map((tip, i) => (
              <div key={i} className="flex gap-2.5 items-start mb-2">
                <div className="min-w-[22px] h-[22px] rounded-full bg-brand-500 text-white
                  flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>

          {/* Open in Google Maps */}
          <button
            onClick={openInGoogleMaps}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600
              text-white text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Google マップで開く
          </button>
        </div>
      )}

      {/* Feature info */}
      <div className="bg-brand-50/50 rounded-2xl p-4">
        <h4 className="text-xs font-bold text-brand-700 mb-2">🔧 ルート検索の特徴</h4>
        <p className="text-xs text-gray-500 leading-7">
          ・Google Directions API による実際の徒歩ルートを表示<br />
          ・所要時間をベビーカー速度（×1.3倍）で自動補正<br />
          ・経路上のバリアフリー情報を解析<br />
          ・Google マップアプリへワンタップで連携
        </p>
      </div>
    </div>
  );
}
