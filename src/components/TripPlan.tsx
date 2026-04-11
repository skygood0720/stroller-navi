"use client";

import { useState, useMemo } from "react";
import { ALL_SPOTS, type SpotWithCategory } from "@/lib/spots-data";
import { REGIONS } from "@/lib/constants";
import { useAppStore } from "@/lib/store";

const TIME_OPTIONS = [
  { key: "half", label: "半日（2〜3時間）", spots: 2 },
  { key: "full", label: "1日（5〜6時間）", spots: 3 },
  { key: "long", label: "たっぷり（7時間以上）", spots: 4 },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TripPlan() {
  const { selectedRegion, setSelectedRegion, setSelectedItemId, setActiveTab } = useAppStore();
  const [planRegion, setPlanRegion] = useState(selectedRegion === "すべて" ? "関東" : selectedRegion);
  const [timeOption, setTimeOption] = useState("full");
  const [plan, setPlan] = useState<SpotWithCategory[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const spotCount = TIME_OPTIONS.find((t) => t.key === timeOption)?.spots || 3;

  const generatePlan = () => {
    setIsGenerating(true);
    setPlan(null);

    // Simulate brief loading
    setTimeout(() => {
      const regionSpots = ALL_SPOTS.filter((s) => s.region === planRegion);
      const indoorSpots = regionSpots.filter((s) => s.category === "indoor" || s.category === "both");
      const outdoorSpots = regionSpots.filter((s) => s.category === "outdoor" || s.category === "both");

      // Mix indoor and outdoor for a balanced plan
      const shuffledIndoor = shuffleArray(indoorSpots);
      const shuffledOutdoor = shuffleArray(outdoorSpots);

      const selected: SpotWithCategory[] = [];
      let indoorIdx = 0;
      let outdoorIdx = 0;

      for (let i = 0; i < spotCount; i++) {
        if (i % 2 === 0 && outdoorIdx < shuffledOutdoor.length) {
          // Avoid duplicates
          const candidate = shuffledOutdoor[outdoorIdx];
          if (!selected.find((s) => s.id === candidate.id)) {
            selected.push(candidate);
          }
          outdoorIdx++;
        } else if (indoorIdx < shuffledIndoor.length) {
          const candidate = shuffledIndoor[indoorIdx];
          if (!selected.find((s) => s.id === candidate.id)) {
            selected.push(candidate);
          }
          indoorIdx++;
        }
      }

      // Fill remaining if needed
      while (selected.length < spotCount && indoorIdx < shuffledIndoor.length) {
        const c = shuffledIndoor[indoorIdx++];
        if (!selected.find((s) => s.id === c.id)) selected.push(c);
      }
      while (selected.length < spotCount && outdoorIdx < shuffledOutdoor.length) {
        const c = shuffledOutdoor[outdoorIdx++];
        if (!selected.find((s) => s.id === c.id)) selected.push(c);
      }

      setPlan(selected);
      setIsGenerating(false);
    }, 800);
  };

  const openPlanInMaps = () => {
    if (!plan || plan.length === 0) return;
    const origin = encodeURIComponent(plan[0].name);
    const destination = encodeURIComponent(plan[plan.length - 1].name);
    const waypoints = plan.slice(1, -1).map((s) => encodeURIComponent(s.name)).join("|");
    const url = waypoints
      ? `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}&travelmode=walking`
      : `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`;
    window.open(url, "_blank");
  };

  const sharePlan = () => {
    if (!plan) return;
    const text = `🚼 ベビーカーナビ おでかけプラン\n📍 ${planRegion}エリア\n\n${plan.map((s, i) => `${i + 1}. ${s.name}\n   ${s.desc}`).join("\n\n")}\n\n#ベビーカーナビ #子連れおでかけ`;

    if (navigator.share) {
      navigator.share({ title: "ベビーカーナビ おでかけプラン", text });
    } else {
      navigator.clipboard.writeText(text);
      alert("プランをクリップボードにコピーしました！");
    }
  };

  return (
    <div className="space-y-4">
      {/* Plan builder card */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <h3 className="text-base font-bold mb-3 flex items-center gap-2">
          🗓️ おでかけプランを作る
        </h3>

        {/* Region select */}
        <div className="mb-3">
          <label className="text-xs font-bold text-gray-700 block mb-1.5">エリア</label>
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {REGIONS.filter((r) => r !== "すべて").map((region) => (
              <button key={region} onClick={() => setPlanRegion(region)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition
                  ${planRegion === region
                    ? "bg-brand-500 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}>
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Time select */}
        <div className="mb-4">
          <label className="text-xs font-bold text-gray-700 block mb-1.5">おでかけ時間</label>
          <div className="flex gap-2">
            {TIME_OPTIONS.map((opt) => (
              <button key={opt.key} onClick={() => setTimeOption(opt.key)}
                className={`flex-1 py-2.5 rounded-xl text-[11px] font-bold transition
                  ${timeOption === opt.key
                    ? "bg-brand-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button onClick={generatePlan} disabled={isGenerating}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700
            text-white text-sm font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              プランを作成中...
            </>
          ) : (
            <>🎯 おすすめプランを提案</>
          )}
        </button>
      </div>

      {/* Generated plan */}
      {plan && plan.length > 0 && (
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold flex items-center gap-1.5">
              🗺️ {planRegion}の{TIME_OPTIONS.find((t) => t.key === timeOption)?.label}プラン
            </h3>
            <button onClick={generatePlan}
              className="text-[10px] text-brand-500 font-bold hover:underline">
              🔄 別のプラン
            </button>
          </div>

          {/* Plan steps */}
          <div className="space-y-3 mb-4">
            {plan.map((spot, i) => (
              <div key={spot.id} className="flex gap-3">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-brand-500 text-white flex items-center
                    justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < plan.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-200 my-1" />
                  )}
                </div>

                {/* Spot card */}
                <div className="flex-1 bg-gray-50 rounded-xl p-3 cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => { setSelectedItemId(spot.id); setActiveTab("map"); }}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm">
                      {spot.category === "indoor" ? "🏠" : spot.category === "outdoor" ? "🌳" : "🏠🌳"}
                    </span>
                    <span className="text-xs font-bold">{spot.name}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{spot.desc}</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {spot.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button onClick={openPlanInMaps}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600
                text-white text-xs font-bold hover:opacity-90 transition flex items-center justify-center gap-1.5">
              🗺️ Google マップで見る
            </button>
            <button onClick={sharePlan}
              className="flex-1 py-2.5 rounded-xl border-[1.5px] border-brand-500
                text-brand-500 text-xs font-bold hover:bg-brand-50 transition flex items-center justify-center gap-1.5">
              📤 プランを共有
            </button>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-brand-50/50 rounded-2xl p-4">
        <h4 className="text-xs font-bold text-brand-700 mb-2">💡 おでかけプランのコツ</h4>
        <p className="text-xs text-gray-500 leading-7">
          ・授乳やおむつ替えの時間も含めて余裕を持った計画を<br />
          ・お昼寝の時間帯は移動時間に充てると◎<br />
          ・雨の日プランは室内スポットを中心に自動提案<br />
          ・プランはSNSでシェアして他のママパパの参考に
        </p>
      </div>
    </div>
  );
}
