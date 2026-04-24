"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";

const AVAILABLE_TAGS = ["授乳室", "おむつ替え", "エレベーター", "ベビーカー貸出", "スロープ", "キッズスペース", "フードコート"];

export default function SpotSubmitForm({ onClose, onSubmitted }: { onClose: () => void; onSubmitted: () => void }) {
  const { user } = useAppStore();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("位置情報が利用できません");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setUseCurrentLocation(true);
      },
      () => alert("位置情報を取得できませんでした")
    );
  };

  const handleSubmit = async () => {
    if (!name || !desc) return;

    // 住所からジオコーディング、または現在地の座標を使用
    let lat = coords?.lat || 35.6762;
    let lng = coords?.lng || 139.6503;

    if (address && !useCurrentLocation) {
      try {
        const geocoder = new google.maps.Geocoder();
        const result = await geocoder.geocode({ address });
        if (result.results[0]) {
          lat = result.results[0].geometry.location.lat();
          lng = result.results[0].geometry.location.lng();
        }
      } catch {
        alert("住所から位置を特定できませんでした。現在地ボタンを使うか、もう一度お試しください。");
        return;
      }
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/user-spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          lat,
          lng,
          tags: selectedTags,
          desc,
          submitted_by: user?.id || "anonymous",
          submitted_by_name: user?.email || "匿名",
        }),
      });

      const data = await res.json();
      if (data.spot) {
        alert("✅ スポットの投稿を受け付けました！\n管理者の承認後にアプリに反映されます。");
        onSubmitted();
        onClose();
      } else {
        alert("投稿に失敗しました。もう一度お試しください。");
      }
    } catch {
      alert("エラーが発生しました");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-end justify-center"
      onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[480px] max-h-[85vh] bg-white rounded-t-3xl p-5 pb-8 overflow-y-auto shadow-2xl"
        style={{ animation: "slideUp 0.3s ease-out" }}>
        <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-black flex items-center gap-2">📍 スポットを投稿</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">✕</button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">スポット名 *</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="例: ○○ショッピングモール"
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-500 focus:outline-none bg-gray-50" />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">説明 *</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="授乳室やエレベーターの情報など" rows={3}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-500 focus:outline-none bg-gray-50 resize-y" />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1">場所</label>
            <div className="flex gap-2">
              <input value={address} onChange={(e) => { setAddress(e.target.value); setUseCurrentLocation(false); }}
                placeholder="住所を入力"
                className="flex-1 px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-500 focus:outline-none bg-gray-50" />
              <button onClick={handleGetLocation}
                className="px-3 py-2.5 rounded-xl border border-brand-500 text-brand-500 text-xs font-bold whitespace-nowrap hover:bg-brand-50 transition">
                📍 現在地
              </button>
            </div>
            {useCurrentLocation && coords && (
              <p className="text-[10px] text-green-600 mt-1 font-medium">
                ✅ 現在地を取得しました（{coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}）
              </p>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1.5">設備タグ</label>
            <div className="flex flex-wrap gap-1.5">
              {AVAILABLE_TAGS.map((tag) => (
                <button key={tag} onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition
                    ${selectedTags.includes(tag)
                      ? "bg-brand-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleSubmit} disabled={!name || !desc || submitting}
            className={`w-full py-3.5 rounded-xl text-white text-sm font-bold transition mt-2
              ${name && desc && !submitting
                ? "bg-gradient-to-r from-brand-500 to-brand-700 hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"
              }`}>
            {submitting ? "投稿中..." : "スポットを投稿する"}
          </button>
        </div>
      </div>
    </div>
  );
}
