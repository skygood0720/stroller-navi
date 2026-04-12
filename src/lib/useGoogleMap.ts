"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import type { MapItem, RouteInfo } from "@/types";

const TOKYO_CENTER = { lat: 35.6762, lng: 139.6503 };

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  version: "weekly",
  libraries: ["places", "geometry"],
});

export function useGoogleMap(containerRef: React.RefObject<HTMLDivElement | null>) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current) return;

    loader.importLibrary("maps").then(({ Map }) => {
      if (!containerRef.current) return;
      mapRef.current = new Map(containerRef.current, {
        center: TOKYO_CENTER,
        zoom: 12,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          { featureType: "poi", stylers: [{ visibility: "simplified" }] },
          { featureType: "transit.station", stylers: [{ visibility: "on" }] },
        ],
      });
      setIsLoaded(true);
    });
  }, [containerRef]);

  // Set markers
  const setMarkers = useCallback(
    (items: MapItem[], onMarkerClick: (item: MapItem) => void) => {
      // Clear old markers
      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];

      if (!mapRef.current || !isLoaded) return;

      items.forEach((item) => {
        const isSpot = item.type === "spot";
        const isUserSpot = isSpot && "is_user_submitted" in item && (item as any).is_user_submitted;

        let fillColor = "#7E57C2"; // toilet purple
        let labelText = "🚻";
        if (isSpot && isUserSpot) {
          fillColor = "#43A047"; // green for user-submitted
          labelText = "📍";
        } else if (isSpot) {
          fillColor = "#FF8A65"; // orange for built-in
          labelText = "🍼";
        }

        const marker = new google.maps.Marker({
          map: mapRef.current!,
          position: { lat: item.lat, lng: item.lng },
          title: item.name,
          label: {
            text: labelText,
            fontSize: "16px",
          },
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor,
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
            scale: 14,
          },
        });

        marker.addListener("click", () => onMarkerClick(item));
        markersRef.current.push(marker);
      });
    },
    [isLoaded]
  );

  // Get user location
  const getUserLocation = useCallback(() => {
    return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setUserLocation(loc);
          mapRef.current?.panTo(loc);
          mapRef.current?.setZoom(15);
          resolve(loc);
        },
        (err) => reject(err),
        { enableHighAccuracy: true }
      );
    });
  }, []);

  // Search route with Directions API
  const searchRoute = useCallback(
    async (
      origin: string | google.maps.LatLngLiteral,
      destination: string | google.maps.LatLngLiteral,
      mode: "walking" | "transit" = "walking"
    ): Promise<RouteInfo | null> => {
      if (!mapRef.current) return null;

      const { DirectionsService, DirectionsRenderer, TravelMode } =
        await loader.importLibrary("routes");

      const service = new DirectionsService();

      // Clear previous route
      if (directionsRendererRef.current) {
        directionsRendererRef.current.setMap(null);
      }

      const renderer = new DirectionsRenderer({
        map: mapRef.current,
        suppressMarkers: false,
        polylineOptions: {
          strokeColor: mode === "transit" ? "#1E88E5" : "#FF7043",
          strokeWeight: 5,
          strokeOpacity: 0.8,
        },
      });
      directionsRendererRef.current = renderer;

      try {
        const travelMode = mode === "transit" ? TravelMode.TRANSIT : TravelMode.WALKING;

        const request: google.maps.DirectionsRequest = {
          origin,
          destination,
          travelMode,
          provideRouteAlternatives: mode === "walking",
          region: "jp",
        };

        // Transit: set departure time to ensure results even during late night
        if (mode === "transit") {
          // If current time is between 0:00-5:00, set departure to 8:00 AM today
          const now = new Date();
          const hour = now.getHours();
          if (hour >= 0 && hour < 5) {
            const departure = new Date();
            departure.setHours(8, 0, 0, 0);
            request.transitOptions = {
              departureTime: departure,
            };
          }
        }

        const result = await service.route(request);
        renderer.setDirections(result);

        const route = result.routes[0];
        const leg = route.legs[0];

        const steps = leg.steps || [];
        let elevators = 0;
        let slopes = 0;
        let stairCount = 0;
        const tips: string[] = [];
        const segments: import("@/types").TransitSegment[] = [];

        steps.forEach((step) => {
          const inst = step.instructions || "";
          const instLower = inst.toLowerCase();

          // Count barrier-free features
          if (instLower.includes("エレベーター") || instLower.includes("elevator")) elevators++;
          if (instLower.includes("スロープ") || instLower.includes("ramp")) slopes++;
          if (instLower.includes("階段") || instLower.includes("stairs")) stairCount++;

          if (mode === "transit") {
            if (step.travel_mode === "WALKING") {
              // Walking segment — apply stroller speed multiplier
              const walkDurationSec = step.duration?.value || 0;
              const strollerDurationMin = Math.ceil(walkDurationSec / 60 * 1.3);
              const barrierFreeTips: string[] = [];

              // Analyze sub-steps for barrier-free info
              if (step.steps) {
                step.steps.forEach((subStep) => {
                  const subInst = subStep.instructions?.toLowerCase() || "";
                  if (subInst.includes("階段") || subInst.includes("stairs")) {
                    barrierFreeTips.push("⚠️ このルートに階段があります。エレベーターを探してください");
                  }
                });
              }

              if (barrierFreeTips.length === 0) {
                barrierFreeTips.push("✅ 段差なしで移動できます");
              }

              segments.push({
                type: "walking",
                instruction: inst.replace(/<[^>]*>/g, ""),
                distance: step.distance?.text || "",
                duration: `約${strollerDurationMin}分（ベビーカー速度）`,
                barrierFreeTips,
              });
            } else if (step.travel_mode === "TRANSIT" && step.transit) {
              const transit = step.transit;
              const lineName = transit.line?.short_name || transit.line?.name || "";
              const lineColor = transit.line?.color || "#1E88E5";
              const departure = transit.departure_stop?.name || "";
              const arrival = transit.arrival_stop?.name || "";
              const numStops = transit.num_stops || 0;

              const barrierFreeTips: string[] = [];
              barrierFreeTips.push(`🛗 ${departure}駅：エレベーターでホームへ移動してください`);
              barrierFreeTips.push(`🛗 ${arrival}駅：エレベーターで改札階へ移動してください`);
              barrierFreeTips.push("🚼 車両の優先席付近またはフリースペースがおすすめです");

              if (numStops <= 2) {
                barrierFreeTips.push("📍 乗車時間が短いのでドア付近が便利です");
              }

              segments.push({
                type: "transit",
                instruction: `${lineName} に乗車`,
                distance: step.distance?.text || "",
                duration: step.duration?.text || "",
                lineName,
                lineColor,
                departureStop: departure,
                arrivalStop: arrival,
                numStops,
                barrierFreeTips,
              });
            }
          }
        });

        // Generate tips
        if (mode === "transit") {
          const walkSegments = segments.filter((s) => s.type === "walking");
          const transitSegments = segments.filter((s) => s.type === "transit");

          if (transitSegments.length > 0) {
            tips.push(`🚃 ${transitSegments.map((s) => s.lineName).join(" → ")} を利用`);
          }
          if (walkSegments.length > 0) {
            tips.push(`🚶 徒歩区間は${walkSegments.length}箇所（ベビーカー速度で計算済み）`);
          }
          tips.push("🛗 各駅でエレベーターを利用してホームへ移動してください");
          if (stairCount === 0) {
            tips.push("✅ 経路案内上に階段の記載はありません");
          } else {
            tips.push(`⚠️ ${stairCount}箇所の階段表記があります。駅員にエレベーターの場所を確認してください`);
          }
        } else {
          if (stairCount === 0) {
            tips.push("階段なしのバリアフリールートです");
          } else {
            tips.push(`${stairCount}箇所の階段があります。迂回ルートを確認してください`);
          }
          tips.push(`総距離: ${leg.distance?.text}`);
          tips.push(`ベビーカー想定所要時間: 約${Math.ceil((leg.duration?.value || 0) / 60 * 1.3)}分`);
        }

        // Calculate total duration with stroller adjustment for walking parts
        let totalDurationText: string;
        if (mode === "transit") {
          // For transit: adjust only walking portions
          let totalSeconds = 0;
          steps.forEach((step) => {
            if (step.travel_mode === "WALKING") {
              totalSeconds += Math.ceil((step.duration?.value || 0) * 1.3);
            } else {
              totalSeconds += step.duration?.value || 0;
            }
          });
          totalDurationText = `約${Math.ceil(totalSeconds / 60)}分（ベビーカー速度で計算）`;
        } else {
          totalDurationText = `約${Math.ceil((leg.duration?.value || 0) / 60 * 1.3)}分（ベビーカー想定）`;
        }

        return {
          distance: leg.distance?.text || "",
          duration: totalDurationText,
          elevators,
          slopes,
          steps: stairCount,
          tips,
          polyline: route.overview_polyline,
          legs: route.legs,
          travelMode: mode,
          segments,
        };
      } catch (err) {
        console.error("Directions API error:", err);
        return null;
      }
    },
    []
  );

  // Pan to location
  const panTo = useCallback(
    (lat: number, lng: number, zoom?: number) => {
      mapRef.current?.panTo({ lat, lng });
      if (zoom) mapRef.current?.setZoom(zoom);
    },
    []
  );

  return { map: mapRef, isLoaded, setMarkers, getUserLocation, searchRoute, panTo, userLocation };
}
