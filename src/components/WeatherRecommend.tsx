"use client";

import { useState, useEffect } from "react";
import { ALL_SPOTS, type SpotWithCategory } from "@/lib/spots-data";
import { useAppStore } from "@/lib/store";

interface WeatherData {
  temp: number;
  weatherCode: number;
  isRainy: boolean;
  description: string;
  emoji: string;
}

function getWeatherInfo(code: number): { description: string; emoji: string; isRainy: boolean } {
  if (code === 0) return { description: "快晴", emoji: "☀️", isRainy: false };
  if (code <= 3) return { description: "晴れ/くもり", emoji: "⛅", isRainy: false };
  if (code <= 49) return { description: "くもり/霧", emoji: "☁️", isRainy: false };
  if (code <= 69) return { description: "雨", emoji: "🌧️", isRainy: true };
  if (code <= 79) return { description: "雪", emoji: "🌨️", isRainy: true };
  if (code <= 99) return { description: "雷雨", emoji: "⛈️", isRainy: true };
  return { description: "不明", emoji: "❓", isRainy: false };
}

export default function WeatherRecommend() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<{ lat: number; lng: number }>({ lat: 35.6762, lng: 139.6503 });
  const { selectedRegion, setSelectedItemId } = useAppStore();

  useEffect(() => {
    // Try to get user location, fallback to Tokyo
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => {} // silently fail, use default Tokyo
      );
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current=temperature_2m,weather_code&timezone=Asia/Tokyo`
        );
        const data = await res.json();
        if (data.current) {
          const info = getWeatherInfo(data.current.weather_code);
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            weatherCode: data.current.weather_code,
            ...info,
          });
        }
      } catch {
        // Fallback
        setWeather({ temp: 20, weatherCode: 0, isRainy: false, description: "晴れ", emoji: "☀️" });
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [location]);

  if (loading || !weather) {
    return (
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-4 animate-pulse">
        <div className="h-4 bg-sky-100 rounded w-32 mb-2" />
        <div className="h-3 bg-sky-100 rounded w-48" />
      </div>
    );
  }

  // Filter spots based on weather
  const regionSpots = ALL_SPOTS.filter(
    (s) => selectedRegion === "すべて" || s.region === selectedRegion || !s.region
  );

  let recommendedSpots: SpotWithCategory[];
  let message: string;

  if (weather.isRainy) {
    recommendedSpots = regionSpots.filter((s) => s.category === "indoor");
    message = "雨の日でも安心！室内スポットがおすすめ";
  } else if (weather.temp >= 30) {
    recommendedSpots = regionSpots.filter((s) => s.category === "indoor" || s.category === "both");
    message = "暑い日は涼しい室内スポットへ";
  } else if (weather.temp <= 5) {
    recommendedSpots = regionSpots.filter((s) => s.category === "indoor");
    message = "寒い日はあったかい室内スポットで遊ぼう";
  } else {
    recommendedSpots = regionSpots.filter((s) => s.category === "outdoor" || s.category === "both");
    message = "お出かけ日和！外遊びスポットがおすすめ";
  }

  const displaySpots = recommendedSpots.slice(0, 6);

  return (
    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-4 border border-sky-100/50">
      {/* Weather header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{weather.emoji}</span>
          <div>
            <div className="text-sm font-bold text-sky-800">
              今日の天気: {weather.description} {weather.temp}°C
            </div>
            <div className="text-[11px] text-sky-600 font-medium">{message}</div>
          </div>
        </div>
        <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold
          ${weather.isRainy ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>
          {weather.isRainy ? "🏠 室内" : "🌳 屋外"}おすすめ
        </div>
      </div>

      {/* Recommended spots */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {displaySpots.map((spot) => (
          <div
            key={spot.id}
            onClick={() => setSelectedItemId(spot.id)}
            className="min-w-[135px] bg-white rounded-xl p-2.5 shadow-sm cursor-pointer
              hover:shadow-md transition border border-sky-50"
          >
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs">{spot.category === "indoor" ? "🏠" : spot.category === "outdoor" ? "🌳" : "🏠🌳"}</span>
              <span className="text-[11px] font-bold truncate">{spot.name}</span>
            </div>
            <div className="text-[10px] text-gray-500 leading-snug line-clamp-2">
              {spot.desc.slice(0, 30)}...
            </div>
            {spot.region && (
              <span className="inline-block mt-1 text-[8px] text-sky-500 bg-sky-50 px-1.5 py-0.5 rounded font-medium">
                {spot.region}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
