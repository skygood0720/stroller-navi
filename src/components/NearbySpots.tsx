"use client";

import { useState, useEffect } from "react";
import { ALL_SPOTS } from "@/lib/spots-data";
import { useAppStore } from "@/lib/store";

function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)}m`;
  return `${km.toFixed(1)}km`;
}

export default function NearbySpots() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { setSelectedItemId } = useAppStore();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(true);
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLoading(false);
      },
      () => {
        setError(true);
        setLoading(false);
      },
      { timeout: 10000 }
    );
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 animate-pulse">
        <div className="h-4 bg-green-100 rounded w-40 mb-2" />
        <div className="h-3 bg-green-100 rounded w-56" />
      </div>
    );
  }

  if (error || !location) {
    return null;
  }

  const nearbySpots = ALL_SPOTS
    .map((s) => ({ ...s, distance: getDistance(location.lat, location.lng, s.lat, s.lng) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 8);

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100/50">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">📍</span>
        <div>
          <div className="text-sm font-bold text-green-800">現在地から近いスポット</div>
          <div className="text-[11px] text-green-600 font-medium">距離順に表示しています</div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {nearbySpots.map((spot) => (
          <div
            key={spot.id}
            onClick={() => setSelectedItemId(spot.id)}
            className="min-w-[140px] bg-white rounded-xl p-2.5 shadow-sm cursor-pointer
              hover:shadow-md transition border border-green-50"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold truncate flex-1">{spot.name}</span>
            </div>
            <div className="text-[10px] text-gray-500 leading-snug line-clamp-2 mb-1.5">
              {spot.desc.slice(0, 25)}...
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                {formatDistance(spot.distance)}
              </span>
              <span className="text-[9px] text-gray-400">
                {spot.category === "indoor" ? "🏠" : spot.category === "outdoor" ? "🌳" : "🏠🌳"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
