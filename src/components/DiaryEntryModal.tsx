"use client";

import { useState } from "react";
import { getFamilyCode } from "@/lib/family";

export interface DiaryEntry {
  id: string;
  device_id: string;
  room_code: string | null;
  spot_id: number | null;
  spot_name: string;
  entry_date: string;
  memo: string;
  sticker: string;
  baby_month: number | null;
  created_at: string;
}

const STICKERS = [
  "🌸", "🎉", "🥰", "😍", "⭐", "🏆",
  "🌈", "🎈", "🍀", "🦁", "🐘", "🐬",
  "🌊", "🌺", "🍼", "🍰", "🌙", "🌞",
  "🦋", "🐣", "🍓", "🥳", "🏅", "💫",
];

function getDeviceId(): string {
  const key = "diary_device_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

interface Props {
  spotName?: string;
  spotId?: number;
  babyMonth?: number | null;
  onClose: () => void;
  onSaved: (entry: DiaryEntry) => void;
}

export { getDeviceId };

export default function DiaryEntryModal({ spotName = "", spotId, babyMonth, onClose, onSaved }: Props) {
  const today = new Date().toISOString().split("T")[0];
  const [name, setName]     = useState(spotName);
  const [date, setDate]     = useState(today);
  const [memo, setMemo]     = useState("");
  const [sticker, setSticker] = useState("🌸");
  const [saving, setSaving] = useState(false);
  const [error, setError]   = useState("");

  const handleSave = async () => {
    if (!name.trim()) { setError("場所の名前を入力してください"); return; }
    setSaving(true);
    setError("");
    const deviceId  = getDeviceId();
    const roomCode  = getFamilyCode();

    try {
      const res = await fetch("/api/diary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          device_id:   deviceId,
          room_code:   roomCode,
          spot_id:     spotId ?? null,
          spot_name:   name.trim(),
          entry_date:  date,
          memo:        memo.trim(),
          sticker,
          baby_month:  babyMonth ?? null,
        }),
      });
      if (!res.ok) throw new Error("保存失敗");
      const { entry } = await res.json();
      onSaved(entry);
      onClose();
    } catch {
      setError("保存に失敗しました。もう一度お試しください。");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[640px] bg-white rounded-t-3xl p-5 pb-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />

        <h2 className="text-base font-black text-center mb-4">📔 おでかけ日記を書く</h2>

        {/* スタンプ選択 */}
        <div className="mb-4">
          <p className="text-[11px] font-bold text-gray-400 mb-2">スタンプ</p>
          <div className="grid grid-cols-8 gap-1.5">
            {STICKERS.map((s) => (
              <button
                key={s}
                onClick={() => setSticker(s)}
                className={`text-2xl h-10 rounded-xl flex items-center justify-center transition ${
                  sticker === s ? "bg-brand-100 ring-2 ring-brand-400 scale-110" : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* 場所 */}
        <div className="mb-3">
          <label className="text-[11px] font-bold text-gray-400 block mb-1">場所</label>
          <input
            type="text"
            value={name}
            onChange={(e) => { setError(""); setName(e.target.value); }}
            placeholder="例: 上野動物園"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-400"
          />
        </div>

        {/* 日付 */}
        <div className="mb-3">
          <label className="text-[11px] font-bold text-gray-400 block mb-1">日付</label>
          <input
            type="date"
            value={date}
            max={today}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-400"
          />
        </div>

        {/* メモ */}
        <div className="mb-4">
          <label className="text-[11px] font-bold text-gray-400 block mb-1">
            ひとこと <span className="font-normal text-gray-300">（任意）</span>
          </label>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="今日の思い出を残そう！初めてゾウを見てびっくりしてたよ 😊"
            rows={3}
            maxLength={200}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:border-brand-400"
          />
          <p className="text-[10px] text-gray-300 text-right">{memo.length}/200</p>
        </div>

        {babyMonth != null && (
          <p className="text-[11px] text-gray-400 text-center mb-3">
            👶 記録時の月齢: <strong>{babyMonth}ヶ月</strong>
          </p>
        )}

        {getFamilyCode() && (
          <p className="text-[11px] text-green-600 text-center mb-3">
            👨‍👩‍👧 家族と共有されます
          </p>
        )}

        {error && <p className="text-xs text-red-500 text-center mb-3">{error}</p>}

        <div className="space-y-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-brand-500 text-white font-black rounded-2xl py-3.5 disabled:opacity-60 text-sm"
          >
            {saving ? "保存中..." : `${sticker} 日記に残す`}
          </button>
          <button onClick={onClose} className="w-full text-sm text-gray-400 py-2">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
}
