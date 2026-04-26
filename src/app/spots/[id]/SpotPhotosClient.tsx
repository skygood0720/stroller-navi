"use client";
import dynamic from "next/dynamic";
const SpotPhotos = dynamic(() => import("@/components/SpotPhotos"), { ssr: false });

export default function SpotPhotosClient({ spotName, lat, lng }: { spotName: string; lat: number; lng: number }) {
  return <SpotPhotos spotName={spotName} lat={lat} lng={lng} />;
}
