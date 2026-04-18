"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase";
import { useAppStore } from "@/lib/store";
import { BABY_SPOTS, TOILETS, REGIONS, getMonthsOld, getAgeRange, getAgeRangeKey } from "@/lib/constants";
import { Stars, TagPill, EmptyState } from "@/components/ui";
import AuthModal from "@/components/AuthModal";
import AdBanner from "@/components/AdBanner";
import type { MapItem } from "@/types";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });
const RouteSearch = dynamic(() => import("@/components/RouteSearch"), { ssr: false });
const BabyProfile = dynamic(() => import("@/components/BabyProfile"), { ssr: false });
const ReviewSection = dynamic(() => import("@/components/ReviewSection"), { ssr: false });
const SpotSubmitForm = dynamic(() => import("@/components/SpotSubmitForm"), { ssr: false });
const WeatherRecommend = dynamic(() => import("@/components/WeatherRecommend"), { ssr: false });
const TripPlan = dynamic(() => import("@/components/TripPlan"), { ssr: false });
const NearbySpots = dynamic(() => import("@/components/NearbySpots"), { ssr: false });

const TABS = [
  { key: "map", label: "マップ", icon: "📍" },
  { key: "plan", label: "プラン", icon: "🗓️" },
  { key: "route", label: "ルート", icon: "🧭" },
  { key: "baby", label: "赤ちゃん", icon: "👶" },
  { key: "spots", label: "スポット", icon: "🍼" },
  { key: "toilet", label: "トイレ", icon: "🚻" },
];

export default function HomePage() {
  const {
    user, setUser, babyProfile, babyMonths, setBabyProfile,
    activeTab, setActiveTab, selectedItemId, setSelectedItemId,
    reviewsBySpot, favoriteSpotIds, setFavoriteSpotIds, toggleFavorite,
    selectedRegion, setSelectedRegion,
  } = useAppStore();

  const [authOpen, setAuthOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [detailTab, setDetailTab] = useState<"info" | "reviews">("info");
  const [showSpotForm, setShowSpotForm] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [userSpots, setUserSpots] = useState<any[]>([]);

  const supabase = createClient();
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER || "";

  // Fetch user-submitted spots
  const fetchUserSpots = useCallback(async () => {
    try {
      const res = await fetch("/api/user-spots?status=approved");
      const data = await res.json();
      if (data.spots) setUserSpots(data.spots);
    } catch {}
  }, []);

  useEffect(() => { fetchUserSpots(); }, [fetchUserSpots]);

  // Auth listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser({ id: session.user.id, email: session.user.email || "" });
          try {
            const res = await fetch(`/api/baby-profile?user_id=${session.user.id}`);
            const data = await res.json();
            if (data.profile) {
              const months = getMonthsOld(data.profile.birth_date);
              setBabyProfile(data.profile, months);
            }
          } catch {}
          // Fetch favorites
          try {
            const res = await fetch(`/api/favorites?user_id=${session.user.id}`);
            const data = await res.json();
            if (data.favorites) {
              setFavoriteSpotIds(new Set(data.favorites.map((f: any) => f.spot_id)));
            }
          } catch {}
        } else {
          setUser(null);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [supabase, setUser, setBabyProfile, setFavoriteSpotIds]);

  // Toggle favorite with API
  const handleToggleFavorite = useCallback(async (spotId: number) => {
    if (!user) {
      setAuthOpen(true);
      return;
    }
    const isFav = favoriteSpotIds.has(spotId);
    toggleFavorite(spotId);

    try {
      if (isFav) {
        await fetch(`/api/favorites?user_id=${user.id}&spot_id=${spotId}`, { method: "DELETE" });
      } else {
        await fetch("/api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: user.id, spot_id: spotId }),
        });
      }
    } catch {
      toggleFavorite(spotId); // revert on error
    }
  }, [user, favoriteSpotIds, toggleFavorite, setAuthOpen]);

  // Computed
  const ageRange = babyMonths !== null ? getAgeRange(babyMonths) : null;
  const ageKey = babyMonths !== null ? getAgeRangeKey(babyMonths) : null;

  // Merge built-in spots with user-submitted spots
  const userSpotsAsBabySpots = userSpots.map((s) => ({
    id: typeof s.id === "string" ? Math.abs(s.id.split("").reduce((a: number, c: string) => a + c.charCodeAt(0), 0) * 100 + userSpots.indexOf(s)) : s.id,
    name: s.name,
    lat: s.lat,
    lng: s.lng,
    type: "spot" as const,
    tags: s.tags || [],
    desc: s.desc,
    age_min: 0,
    age_max: 36,
    age_tips: {},
    region: undefined,
    is_user_submitted: true,
    _dbId: s.id,
  }));

  const allSpots = [...BABY_SPOTS, ...userSpotsAsBabySpots];

  const regionFilteredSpots = allSpots.filter(
    (s) => selectedRegion === "すべて" || s.region === selectedRegion || !s.region
  );

  const filteredSpots = regionFilteredSpots.filter(
    (s) =>
      (s.name.includes(searchFilter) || s.tags.some((t: string) => t.includes(searchFilter))) &&
      (!showFavoritesOnly || favoriteSpotIds.has(s.id))
  );

  const regionFilteredToilets = TOILETS.filter(
    (t) => selectedRegion === "すべて" || t.region === selectedRegion
  );

  const getAvgRating = (spotId: number): string | null => {
    const r = reviewsBySpot[spotId];
    if (!r || r.length === 0) return null;
    return (r.reduce((s, v) => s + v.rating, 0) / r.length).toFixed(1);
  };

  const selectedItem: MapItem | null = selectedItemId
    ? ([...allSpots, ...TOILETS] as MapItem[]).find((i) => i.id === selectedItemId) || null
    : null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setBabyProfile(null, null);
    setFavoriteSpotIds(new Set());
  };

  // Favorite heart button component
  const FavButton = ({ spotId, size = "sm" }: { spotId: number; size?: "sm" | "lg" }) => {
    const isFav = favoriteSpotIds.has(spotId);
    return (
      <button
        onClick={(e) => { e.stopPropagation(); handleToggleFavorite(spotId); }}
        className={`transition-transform active:scale-125 ${size === "lg" ? "text-xl" : "text-base"}`}
        title={isFav ? "お気に入り解除" : "お気に入り登録"}
      >
        {isFav ? "❤️" : "🤍"}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col max-w-[480px] mx-auto relative">

      {/* ─── Header ─── */}
      <header className="px-5 pt-[18px] pb-3 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg backdrop-blur">
            🚼
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-black tracking-wide">ベビーカーナビ</h1>
            <p className="text-[11px] opacity-80 font-medium">バリアフリールート検索</p>
          </div>
          {babyProfile && ageRange && (
            <div className="bg-white/20 rounded-full px-3 py-1 text-[11px] font-semibold">
              {ageRange.emoji} {babyProfile.name}
            </div>
          )}
          {user ? (
            <button onClick={handleLogout}
              className="bg-white/20 rounded-full px-3 py-1 text-[10px] font-semibold hover:bg-white/30 transition">
              ログアウト
            </button>
          ) : (
            <button onClick={() => setAuthOpen(true)}
              className="bg-white/20 rounded-full px-3 py-1 text-[10px] font-semibold hover:bg-white/30 transition">
              ログイン
            </button>
          )}
        </div>
      </header>

      {/* ─── Ad Banner ─── */}
      <AdBanner adSlot={adSlot} />

      {/* ─── Tab Navigation ─── */}
      <nav className="flex bg-white border-b border-gray-100 sticky top-0 z-[8] overflow-x-auto">
        {TABS.map((tab) => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)}
            className={`min-w-[64px] flex-1 py-2.5 flex flex-col items-center gap-1 text-[10px] font-medium
              border-b-[3px] transition-colors whitespace-nowrap
              ${activeTab === tab.key
                ? "border-brand-500 text-brand-700 font-bold bg-brand-50/50"
                : "border-transparent text-gray-400"
              }`}>
            <span className="text-sm">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      {/* ─── Content ─── */}
      <div className="flex-1 overflow-auto">

        {/* ═══ MAP TAB ═══ */}
        {activeTab === "map" && (
          <div>
            <MapView />

            {/* Weather-based recommendations */}
            <div className="px-4 pt-3">
              <WeatherRecommend />
            </div>

            {/* Nearby spots */}
            <div className="px-4 pt-3">
              <NearbySpots />
            </div>

            {/* Region filter */}
            <div className="px-4 pt-3">
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {REGIONS.map((region) => (
                  <button key={region} onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition
                      ${selectedRegion === region
                        ? "bg-brand-500 text-white"
                        : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                      }`}>
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Age-based recommendation */}
            {babyProfile && ageRange && ageKey && (
              <div className="px-4 pt-3">
                <div className="bg-pink-50/60 rounded-2xl p-3 border border-pink-100/50">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-base">{ageRange.emoji}</span>
                    <span className="text-xs font-bold text-baby-300">
                      {babyProfile.name}ちゃん（{ageRange.label}）におすすめ
                    </span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {regionFilteredSpots
                      .filter((s) => babyMonths! >= s.age_min && babyMonths! <= s.age_max && s.age_tips?.[ageKey as string])
                      .slice(0, 4)
                      .map((s) => (
                        <div key={s.id}
                          onClick={() => { setSelectedItemId(s.id); setDetailTab("info"); }}
                          className="min-w-[140px] bg-white rounded-xl p-2.5 shadow cursor-pointer hover:shadow-md transition">
                          <div className="flex justify-between items-start">
                            <div className="text-xs font-bold mb-1 truncate flex-1">{s.name}</div>
                            <FavButton spotId={s.id} />
                          </div>
                          <div className="text-[10px] text-gray-500 leading-snug">
                            💡 {(s.age_tips?.[ageKey as string] || "").slice(0, 20)}...
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quick stats */}
            <div className="flex gap-2 px-4 pt-3">
              {[
                { n: regionFilteredSpots.length, l: "スポット", c: "text-brand-500", e: "🍼" },
                { n: regionFilteredToilets.length, l: "トイレ", c: "text-toilet-500", e: "🚻" },
              ].map((s) => (
                <div key={s.l} className="flex-1 bg-white rounded-xl p-3 shadow flex items-center gap-2">
                  <span className="text-xl">{s.e}</span>
                  <div>
                    <div className={`text-lg font-black ${s.c}`}>{s.n}</div>
                    <div className="text-[9px] text-gray-400 font-medium">{s.l}</div>
                  </div>
                </div>
              ))}
              {user && (
                <div className="flex-1 bg-white rounded-xl p-3 shadow flex items-center gap-2 cursor-pointer hover:shadow-md transition"
                  onClick={() => { setActiveTab("spots"); setShowFavoritesOnly(true); }}>
                  <span className="text-xl">❤️</span>
                  <div>
                    <div className="text-lg font-black text-red-400">{favoriteSpotIds.size}</div>
                    <div className="text-[9px] text-gray-400 font-medium">お気に入り</div>
                  </div>
                </div>
              )}
            </div>

            {/* Top rated */}
            <div className="px-4 pt-3 pb-6">
              <h3 className="text-sm font-bold mb-2">⭐ 高評価スポット</h3>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {regionFilteredSpots
                  .filter((s) => getAvgRating(s.id))
                  .sort((a, b) => Number(getAvgRating(b.id)) - Number(getAvgRating(a.id)))
                  .slice(0, 4)
                  .map((s) => (
                    <div key={s.id}
                      onClick={() => { setSelectedItemId(s.id); setDetailTab("reviews"); }}
                      className="min-w-[145px] bg-white rounded-xl p-2.5 shadow cursor-pointer hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <div className="text-xs font-bold mb-1 flex-1">{s.name}</div>
                        <FavButton spotId={s.id} />
                      </div>
                      <div className="flex items-center gap-1">
                        <Stars rating={Math.round(Number(getAvgRating(s.id)))} size={11} />
                        <span className="text-[11px] font-bold text-amber-500">{getAvgRating(s.id)}</span>
                        <span className="text-[10px] text-gray-400">({(reviewsBySpot[s.id] || []).length})</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══ PLAN TAB ═══ */}
        {activeTab === "plan" && (
          <div className="p-4">
            <TripPlan />
          </div>
        )}

        {/* ═══ ROUTE TAB ═══ */}
        {activeTab === "route" && <RouteSearch />}

        {/* ═══ BABY TAB ═══ */}
        {activeTab === "baby" && <BabyProfile />}

        {/* ═══ SPOTS TAB ═══ */}
        {activeTab === "spots" && (
          <div className="p-4 space-y-3">
            {/* Search */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="スポット名・タグで検索..."
                className="w-full pl-9 pr-3 py-3 rounded-xl border border-gray-200 text-sm
                  focus:border-brand-500 focus:outline-none bg-white" />
            </div>

            {/* Region filter */}
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {REGIONS.map((region) => (
                <button key={region} onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition
                    ${selectedRegion === region
                      ? "bg-brand-500 text-white"
                      : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                    }`}>
                  {region}
                </button>
              ))}
            </div>

            {/* Tag filters + Favorites toggle */}
            <div className="flex flex-wrap gap-1.5">
              {user && (
                <button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition
                    ${showFavoritesOnly
                      ? "bg-red-400 text-white"
                      : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                    }`}>
                  ❤️ お気に入り
                </button>
              )}
              {["授乳室", "おむつ替え", "エレベーター", "ベビーカー貸出", "スロープ"].map((tag) => (
                <TagPill key={tag} label={tag} active={searchFilter === tag}
                  onClick={() => setSearchFilter(searchFilter === tag ? "" : tag)} />
              ))}
            </div>

            {/* Add spot button */}
            <button onClick={() => user ? setShowSpotForm(true) : setAuthOpen(true)}
              className="w-full py-3 rounded-xl border-2 border-dashed border-brand-400 bg-brand-50/30
                text-brand-600 text-sm font-bold hover:bg-brand-50 transition flex items-center justify-center gap-2">
              📍 新しいスポットを投稿する
            </button>

            {/* Spot cards */}
            {filteredSpots.length === 0 && (
              <EmptyState emoji="🔍" title={showFavoritesOnly ? "お気に入りスポットがありません" : "該当するスポットがありません"}
                sub={showFavoritesOnly ? "スポットのハートをタップしてお気に入り登録しましょう" : "検索条件を変えてみてください"} />
            )}
            {filteredSpots.map((spot) => {
              const avg = getAvgRating(spot.id);
              const reviewCount = (reviewsBySpot[spot.id] || []).length;
              return (
                <div key={spot.id}
                  onClick={() => { setSelectedItemId(spot.id); setDetailTab("info"); }}
                  className="bg-white rounded-2xl p-4 shadow cursor-pointer hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-1.5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold truncate">{spot.name}</h4>
                        {spot.region && (
                          <span className="text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded font-medium shrink-0">
                            {spot.region}
                          </span>
                        )}
                        {spot.is_user_submitted && (
                          <span className="text-[9px] text-brand-500 bg-brand-50 px-1.5 py-0.5 rounded font-medium shrink-0">
                            👤 投稿
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {avg && (
                        <div className="flex items-center gap-1">
                          <Stars rating={Math.round(Number(avg))} size={11} />
                          <span className="text-[11px] font-bold text-amber-500">{avg}</span>
                          <span className="text-[10px] text-gray-400">({reviewCount})</span>
                        </div>
                      )}
                      <FavButton spotId={spot.id} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{spot.desc}</p>
                  {babyProfile && ageKey && spot.age_tips?.[ageKey as string] && (
                    <div className="bg-pink-50/50 rounded-lg px-2.5 py-1.5 mb-2 text-[11px] text-baby-300 font-medium">
                      {ageRange?.emoji} {(spot.age_tips as Record<string,string>)[ageKey as string]}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {spot.tags.map((t) => <TagPill key={t} label={t} />)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ═══ TOILET TAB ═══ */}
        {activeTab === "toilet" && (
          <div className="p-4 space-y-3">
            <div className="bg-purple-50/50 rounded-2xl p-3.5 flex items-center gap-2.5">
              <span className="text-2xl">🚻</span>
              <div>
                <div className="text-sm font-bold text-toilet-500">バリアフリートイレ</div>
                <div className="text-[11px] text-gray-500">おむつ替え台・ベビーチェア付き</div>
              </div>
            </div>

            {/* Region filter for toilets */}
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {REGIONS.map((region) => (
                <button key={region} onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition
                    ${selectedRegion === region
                      ? "bg-toilet-500 text-white"
                      : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                    }`}>
                  {region}
                </button>
              ))}
            </div>

            {regionFilteredToilets.length === 0 && (
              <EmptyState emoji="🚻" title="この地域のトイレ情報はまだありません" />
            )}
            {regionFilteredToilets.map((t) => (
              <div key={t.id}
                onClick={() => { setSelectedItemId(t.id); setDetailTab("info"); }}
                className="bg-white rounded-2xl p-4 shadow flex items-center gap-3.5
                  cursor-pointer hover:shadow-md transition">
                <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-toilet-500 shrink-0">
                  🚻
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold truncate">{t.name}</h4>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[11px] text-gray-500">{t.desc}</p>
                    {t.region && <span className="text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded font-medium">{t.region}</span>}
                  </div>
                </div>
                <span className="text-teal-400 shrink-0">🧭</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── Detail Modal ─── */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-end justify-center"
          onClick={() => { setSelectedItemId(null); setDetailTab("info"); }}>
          <div onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[480px] max-h-[85vh] bg-white rounded-t-3xl p-5 pb-8
              overflow-y-auto shadow-2xl animate-[slideUp_0.3s_ease-out]">
            <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>

            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2.5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl
                  ${selectedItem.type === "spot" ? "bg-orange-50" : "bg-purple-50"}`}>
                  {selectedItem.type === "spot" ? "🍼" : "🚻"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">{selectedItem.name}</h3>
                    {selectedItem.type === "spot" && <FavButton spotId={selectedItem.id} size="lg" />}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {getAvgRating(selectedItem.id) ? (
                      <>
                        <Stars rating={Math.round(Number(getAvgRating(selectedItem.id)))} size={13} />
                        <span className="text-xs font-bold text-amber-500">{getAvgRating(selectedItem.id)}</span>
                        <span className="text-[11px] text-gray-400">({(reviewsBySpot[selectedItem.id] || []).length}件)</span>
                      </>
                    ) : (
                      <span className="text-[11px] text-gray-400">まだ口コミなし</span>
                    )}
                  </div>
                </div>
              </div>
              <button onClick={() => { setSelectedItemId(null); setDetailTab("info"); }}
                className="text-gray-400 hover:text-gray-600 transition p-1">✕</button>
            </div>

            {/* Sub-tabs */}
            {selectedItem.type === "spot" && (
              <div className="flex gap-1 mb-4">
                {(["info", "reviews"] as const).map((t) => (
                  <button key={t} onClick={() => setDetailTab(t)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition
                      ${detailTab === t ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-400"}`}>
                    {t === "info" ? "施設情報" : `口コミ (${(reviewsBySpot[selectedItem.id] || []).length})`}
                  </button>
                ))}
              </div>
            )}

            {/* Info tab */}
            {detailTab === "info" && (
              <>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{selectedItem.desc}</p>
                {"tags" in selectedItem && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {selectedItem.tags.map((t) => <TagPill key={t} label={t} />)}
                  </div>
                )}
                {"region" in selectedItem && selectedItem.region && (
                  <div className="mb-3">
                    <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded font-medium">
                      📍 {selectedItem.region}
                    </span>
                  </div>
                )}

                {/* Basic info (address, hours, website) */}
                {"address" in selectedItem && (selectedItem.address || selectedItem.hours || selectedItem.website) && (
                  <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1.5">
                    {selectedItem.address && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">📍 住所</span>
                        <span className="text-gray-700">{selectedItem.address}</span>
                      </div>
                    )}
                    {selectedItem.hours && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">🕒 営業</span>
                        <span className="text-gray-700">{selectedItem.hours}</span>
                      </div>
                    )}
                    {selectedItem.website && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">🔗 HP</span>
                        <a
                          href={selectedItem.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-500 hover:underline break-all"
                        >
                          公式サイトを開く →
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {"age_tips" in selectedItem && babyProfile && ageKey && selectedItem.age_tips?.[ageKey as string] && (
                  <div className="bg-pink-50/60 border border-pink-100/50 rounded-xl p-3.5 mb-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-base">{ageRange?.emoji}</span>
                      <span className="text-xs font-bold text-baby-300">
                        {babyProfile.name}ちゃん（{ageRange?.label}）へのおすすめ
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">💡 {(selectedItem.age_tips as Record<string,string>)[ageKey as string]}</p>
                  </div>
                )}

                <div className="flex gap-2.5">
                  <button className="flex-1 py-3 rounded-xl border-[1.5px] border-brand-500
                    text-brand-500 text-sm font-bold hover:bg-brand-50 transition">
                    📍 マップで見る
                  </button>
                  <button
                    onClick={() => {
                      const dest = encodeURIComponent(selectedItem.name);
                      window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=walking`, "_blank");
                    }}
                    className="flex-[1.2] py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600
                      text-white text-sm font-bold hover:opacity-90 transition flex items-center justify-center gap-1.5">
                    🧭 ここへナビ
                  </button>
                </div>
              </>
            )}

            {/* Reviews tab */}
            {detailTab === "reviews" && selectedItem.type === "spot" && (
              <ReviewSection spotId={selectedItem.id} />
            )}
          </div>
        </div>
      )}

      {/* Spot Submit Form */}
      {showSpotForm && (
        <SpotSubmitForm
          onClose={() => setShowSpotForm(false)}
          onSubmitted={() => { fetchUserSpots(); }}
        />
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
