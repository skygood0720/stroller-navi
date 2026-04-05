"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { AGE_RANGES, BABY_SPOTS, getAgeRange, getAgeRangeKey, getMonthsOld, formatBabyAge } from "@/lib/constants";
import { Stars } from "@/components/ui";

export default function BabyProfile() {
  const { user, babyProfile, babyMonths, setBabyProfile, reviewsBySpot } = useAppStore();
  const [name, setName] = useState(babyProfile?.name || "");
  const [birthDate, setBirthDate] = useState(babyProfile?.birth_date || "");
  const [saving, setSaving] = useState(false);

  const ageRange = babyMonths !== null ? getAgeRange(babyMonths) : null;
  const ageKey = babyMonths !== null ? getAgeRangeKey(babyMonths) : null;

  const recommendedSpots = ageKey
    ? BABY_SPOTS.filter((s) => babyMonths! >= s.age_min && babyMonths! <= s.age_max && s.age_tips?.[ageKey])
    : [];

  const getAvgRating = (spotId: number) => {
    const r = reviewsBySpot[spotId];
    if (!r || r.length === 0) return null;
    return (r.reduce((s, v) => s + v.rating, 0) / r.length).toFixed(1);
  };

  const saveBaby = async () => {
    if (!name || !birthDate) return;
    setSaving(true);

    try {
      const res = await fetch("/api/baby-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user?.id || "anonymous",
          name,
          birth_date: birthDate,
        }),
      });
      const data = await res.json();
      if (data.profile) {
        const months = getMonthsOld(birthDate);
        setBabyProfile(data.profile, months);
      }
    } catch (err) {
      console.error("Failed to save baby profile:", err);
    } finally {
      setSaving(false);
    }
  };

  const clearBaby = async () => {
    try {
      await fetch(`/api/baby-profile?user_id=${user?.id || "anonymous"}`, {
        method: "DELETE",
      });
      setBabyProfile(null, null);
      setName("");
      setBirthDate("");
    } catch (err) {
      console.error("Failed to clear baby profile:", err);
    }
  };

  // Registration form
  if (!babyProfile) {
    return (
      <div className="p-4">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="text-center mb-5">
            <div className="text-5xl mb-2">👶</div>
            <h3 className="text-lg font-black">赤ちゃん登録</h3>
            <p className="text-xs text-gray-500 mt-1">
              月齢に合わせたおすすめスポットを表示します
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">お名前</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例: はるちゃん"
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm
                  focus:border-baby-300 focus:outline-none bg-gray-50"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">生年月日</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm
                  focus:border-baby-300 focus:outline-none bg-gray-50"
              />
            </div>
            <button
              onClick={saveBaby}
              disabled={!name || !birthDate || saving}
              className={`w-full py-3.5 rounded-xl text-white text-base font-bold transition mt-1
                ${name && birthDate && !saving
                  ? "bg-gradient-to-r from-baby-300 to-baby-500 hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              {saving ? "登録中..." : "登録する"}
            </button>
          </div>

          {/* Age range preview */}
          <div className="mt-6">
            <h4 className="text-xs font-bold text-gray-500 mb-2.5">月齢別おすすめ機能</h4>
            {AGE_RANGES.map((r) => (
              <div
                key={r.key}
                className="flex items-center gap-2.5 py-2 border-b border-gray-100 last:border-0"
              >
                <span className="text-xl w-7 text-center">{r.emoji}</span>
                <div className="flex-1">
                  <div className="text-xs font-bold">{r.label}</div>
                  <div className="text-[10px] text-gray-400">
                    {r.key === "0-3" && "授乳室・おむつ替え重視"}
                    {r.key === "4-6" && "離乳食OK・ベビーカー貸出"}
                    {r.key === "7-12" && "ハイハイ・つかまり立ちスペース"}
                    {r.key === "13-24" && "安全な遊び場"}
                    {r.key === "25-36" && "体験型・学び型スポット"}
                  </div>
                </div>
                <div
                  className="w-5 h-5 rounded-full opacity-50"
                  style={{ background: r.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Registered profile view
  return (
    <div className="p-4 space-y-4">
      {/* Profile card */}
      <div className="bg-gradient-to-br from-baby-50 to-pink-50 rounded-2xl p-6 shadow-md
        border border-baby-100/50 text-center">
        <div className="text-5xl mb-1">{ageRange?.emoji}</div>
        <h3 className="text-xl font-black">{babyProfile.name}ちゃん</h3>
        <div
          className="inline-block rounded-full px-4 py-1 text-sm font-bold mt-2 mb-2"
          style={{ background: ageRange?.color }}
        >
          {ageRange?.label}（{babyMonths}ヶ月）
        </div>
        <p className="text-xs text-gray-500">生年月日: {babyProfile.birth_date}</p>
        <button
          onClick={clearBaby}
          className="mt-4 px-5 py-2 rounded-lg border border-gray-200 text-xs font-semibold
            text-gray-400 hover:bg-white transition"
        >
          登録情報を削除
        </button>
      </div>

      {/* Recommended spots */}
      <h3 className="text-sm font-bold px-1">
        🎯 {ageRange?.label}におすすめのスポット
      </h3>

      {recommendedSpots.map((s) => {
        const avg = getAvgRating(s.id);
        return (
          <div key={s.id} className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex justify-between items-start mb-1.5">
              <h4 className="text-sm font-bold">{s.name}</h4>
              {avg && (
                <div className="flex items-center gap-1">
                  <Stars rating={Math.round(Number(avg))} size={11} />
                  <span className="text-xs font-bold text-amber-500">{avg}</span>
                </div>
              )}
            </div>
            <div className="bg-baby-50/50 rounded-lg px-3 py-2 mb-2 text-xs text-gray-700 leading-relaxed">
              💡 {s.age_tips?.[ageKey!]}
            </div>
            <div className="flex flex-wrap gap-1">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold
                    bg-amber-50 text-amber-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
