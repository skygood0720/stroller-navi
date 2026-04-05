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

        const marker = new google.maps.Marker({
          map: mapRef.current!,
          position: { lat: item.lat, lng: item.lng },
          title: item.name,
          label: {
            text: isSpot ? "🍼" : "🚻",
            fontSize: "16px",
          },
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: isSpot ? "#FF8A65" : "#7E57C2",
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
      destination: string | google.maps.LatLngLiteral
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
          strokeColor: "#FF7043",
          strokeWeight: 5,
          strokeOpacity: 0.8,
        },
      });
      directionsRendererRef.current = renderer;

      try {
        const result = await service.route({
          origin,
          destination,
          travelMode: TravelMode.WALKING,
          provideRouteAlternatives: true,
          region: "jp",
        });

        renderer.setDirections(result);

        const route = result.routes[0];
        const leg = route.legs[0];

        const steps = leg.steps || [];
        let elevators = 0;
        let slopes = 0;
        let stairCount = 0;
        const tips: string[] = [];

        steps.forEach((step) => {
          const inst = step.instructions?.toLowerCase() || "";
          if (inst.includes("エレベーター") || inst.includes("elevator")) elevators++;
          if (inst.includes("スロープ") || inst.includes("ramp")) slopes++;
          if (inst.includes("階段") || inst.includes("stairs")) stairCount++;
        });

        if (stairCount === 0) {
          tips.push("階段なしのバリアフリールートです");
        } else {
          tips.push(`${stairCount}箇所の階段があります。迂回ルートを確認してください`);
        }
        tips.push(`総距離: ${leg.distance?.text}`);
        tips.push(`ベビーカー想定所要時間: 約${Math.ceil((leg.duration?.value || 0) / 60 * 1.3)}分`);

        return {
          distance: leg.distance?.text || "",
          duration: `約${Math.ceil((leg.duration?.value || 0) / 60 * 1.3)}分（ベビーカー想定）`,
          elevators,
          slopes,
          steps: stairCount,
          tips,
          polyline: route.overview_polyline,
          legs: route.legs,
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
