"use client";

import { useState, useEffect } from "react";

interface PhotoData {
  url: string;
  attribution: string;
}

export default function SpotPhotos({ spotName, lat, lng }: { spotName: string; lat: number; lng: number }) {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/place-photo?name=${encodeURIComponent(spotName)}&lat=${lat}&lng=${lng}`
        );
        const data = await res.json();
        setPhotos(data.photos || []);
      } catch {
        setPhotos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [spotName, lat, lng]);

  if (loading) {
    return (
      <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-32 h-24 bg-gray-100 rounded-xl animate-pulse shrink-0" />
        ))}
      </div>
    );
  }

  if (photos.length === 0) return null;

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
        {photos.map((photo, idx) => (
          <div key={idx} className="shrink-0 relative">
            <img
              src={photo.url}
              alt={`${spotName} 写真${idx + 1}`}
              onClick={() => setExpandedIdx(idx)}
              className="w-36 h-28 object-cover rounded-xl cursor-pointer hover:opacity-90 transition shadow-sm"
              loading="lazy"
            />
            {photo.attribution && (
              <span className="absolute bottom-1 right-1 text-[7px] text-white bg-black/40 px-1 py-0.5 rounded">
                📷 {photo.attribution}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen viewer */}
      {expandedIdx !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4"
          onClick={() => setExpandedIdx(null)}
        >
          <img
            src={photos[expandedIdx].url}
            alt={`${spotName} 写真`}
            className="max-w-full max-h-full rounded-lg"
          />
          {photos[expandedIdx].attribution && (
            <span className="absolute bottom-6 text-xs text-white bg-black/50 px-3 py-1 rounded-full">
              📷 {photos[expandedIdx].attribution}
            </span>
          )}
          {/* Navigation */}
          {photos.length > 1 && (
            <>
              {expandedIdx > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setExpandedIdx(expandedIdx - 1); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full text-white text-lg flex items-center justify-center backdrop-blur"
                >
                  ‹
                </button>
              )}
              {expandedIdx < photos.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setExpandedIdx(expandedIdx + 1); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full text-white text-lg flex items-center justify-center backdrop-blur"
                >
                  ›
                </button>
              )}
            </>
          )}
          <button
            onClick={() => setExpandedIdx(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full text-white text-lg flex items-center justify-center backdrop-blur"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
