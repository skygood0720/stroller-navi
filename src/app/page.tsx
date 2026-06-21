"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase";
import { useAppStore } from "@/lib/store";
import { BABY_SPOTS, TOILETS, RESTAURANTS, REGIONS, getMonthsOld, getAgeRange, getAgeRangeKey } from "@/lib/constants";
import { Stars, TagPill, EmptyState } from "@/components/ui";
import AuthModal from "@/components/AuthModal";
import SiteFooter from "@/components/SiteFooter";
import FamilyShareModal from "@/components/FamilyShareModal";
import { getFamilyCode } from "@/lib/family";
import type { MapItem } from "@/types";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });
const RouteSearch = dynamic(() => import("@/components/RouteSearch"), { ssr: false });
const BabyProfile = dynamic(() => import("@/components/BabyProfile"), { ssr: false });
const ReviewSection = dynamic(() => import("@/components/ReviewSection"), { ssr: false });
const SpotSubmitForm = dynamic(() => import("@/components/SpotSubmitForm"), { ssr: false });
const WeatherRecommend = dynamic(() => import("@/components/WeatherRecommend"), { ssr: false });
const TripPlan = dynamic(() => import("@/components/TripPlan"), { ssr: false });
const NearbySpots = dynamic(() => import("@/components/NearbySpots"), { ssr: false });
const SpotPhotos = dynamic(() => import("@/components/SpotPhotos"), { ssr: false });
const OnboardingScreen = dynamic(() => import("@/components/OnboardingScreen"), { ssr: false });
const MyStatsModal = dynamic(() => import("@/components/MyStatsModal"), { ssr: false });

// ボトムナビ用タブ（5つ）
const BOTTOM_TABS = [
  { key: "map",      label: "マップ",   icon: (active: boolean) => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={active ? "#FF7043" : "none"} stroke={active ? "#FF7043" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5" fill={active ? "#fff" : "none"} stroke={active ? "#FF7043" : "#9CA3AF"}/>
    </svg>
  )},
  { key: "spots",    label: "スポット", icon: (active: boolean) => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={active ? "#FF7043" : "none"} stroke={active ? "#FF7043" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )},
  { key: "route",    label: "ルート",   icon: (active: boolean) => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={active ? "#FF7043" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,11 22,2 13,21 11,13" fill={active ? "#FF7043" : "none"}/>
    </svg>
  )},
  { key: "articles", label: "記事",     icon: (active: boolean) => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={active ? "#FF7043" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  )},
  { key: "more",     label: "もっと",   icon: (active: boolean) => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={active ? "#FF7043" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" fill={active ? "#FF7043" : "#9CA3AF"}/><circle cx="19" cy="12" r="1" fill={active ? "#FF7043" : "#9CA3AF"}/><circle cx="5" cy="12" r="1" fill={active ? "#FF7043" : "#9CA3AF"}/>
    </svg>
  )},
];

// 内部タブキー（コンテンツ制御用）
const TABS = [
  { key: "map" }, { key: "spots" }, { key: "route" }, { key: "baby" },
  { key: "restaurant" }, { key: "toilet" }, { key: "plan" }, { key: "articles" },
];

export default function HomePage() {
  const {
    user, setUser, babyProfile, babyMonths, setBabyProfile,
    activeTab, setActiveTab, selectedItemId, setSelectedItemId,
    reviewsBySpot, favoriteSpotIds, setFavoriteSpotIds, toggleFavorite,
    visitedSpotIds, setVisitedSpotIds, toggleVisited,
    selectedRegion, setSelectedRegion,
  } = useAppStore();

  const [authOpen, setAuthOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [detailTab, setDetailTab] = useState<"info" | "reviews">("info");
  const [showSpotForm, setShowSpotForm] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [userSpots, setUserSpots] = useState<any[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMyStats, setShowMyStats] = useState(false);
  const [familyCode, setFamilyCodeState] = useState<string | null>(null);
  const [showFamilyModal, setShowFamilyModal] = useState(false);

  const supabase = createClient();

  // Check first visit for onboarding + load family code
  useEffect(() => {
    const onboarded = localStorage.getItem("stroller-navi-onboarded");
    if (!onboarded) setShowOnboarding(true);
    const hintDone = localStorage.getItem("stroller-navi-hint-dismissed");
    if (hintDone) setHintDismissed(true);

    const code = getFamilyCode();
    setFamilyCodeState(code);
    if (code) {
      fetch(`/api/family/visited?room_code=${code}`)
        .then((r) => r.json())
        .then(({ visited }: { visited?: { spot_id: number }[] }) => {
          if (Array.isArray(visited) && visited.length > 0) {
            const ids = new Set<number>(visited.map((v) => v.spot_id));
            setVisitedSpotIds(ids);
          }
        })
        .catch(() => {});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          // Fetch visited spots
          try {
            const res = await fetch(`/api/visited-spots?user_id=${session.user.id}`);
            const data = await res.json();
            if (data.visited) {
              setVisitedSpotIds(new Set(data.visited.map((v: any) => v.spot_id)));
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

  // Toggle visited spot with API
  const handleToggleVisited = useCallback(async (spotId: number) => {
    const code = getFamilyCode();
    if (!user && !code) {
      setAuthOpen(true);
      return;
    }
    const isVisited = visitedSpotIds.has(spotId);
    toggleVisited(spotId);

    // 家族コードがあれば家族テーブルに同期
    if (code) {
      try {
        if (isVisited) {
          await fetch(`/api/family/visited?room_code=${code}&spot_id=${spotId}`, { method: "DELETE" });
        } else {
          await fetch("/api/family/visited", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ room_code: code, spot_id: spotId }),
          });
        }
      } catch {}
    }

    // ログイン済みの場合は個人テーブルにも同期
    if (user) {
      try {
        if (isVisited) {
          await fetch(`/api/visited-spots?user_id=${user.id}&spot_id=${spotId}`, { method: "DELETE" });
        } else {
          await fetch("/api/visited-spots", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: user.id, spot_id: spotId }),
          });
        }
      } catch {
        if (!code) toggleVisited(spotId); // ログインのみの場合だけrevert
      }
    }
  }, [user, visitedSpotIds, toggleVisited, setAuthOpen]);

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
    age_tips: {} as Record<string, string>,
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

  const regionFilteredRestaurants = RESTAURANTS.filter(
    (r) => selectedRegion === "すべて" || r.region === selectedRegion
  );

  const getAvgRating = (spotId: number): string | null => {
    const r = reviewsBySpot[spotId];
    if (!r || r.length === 0) return null;
    return (r.reduce((s, v) => s + v.rating, 0) / r.length).toFixed(1);
  };

  const selectedItem: MapItem | null = selectedItemId
    ? ([...allSpots, ...TOILETS, ...RESTAURANTS] as MapItem[]).find((i) => i.id === selectedItemId) || null
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

  const handleOnboardingFinish = (gotoTab?: string) => {
    setShowOnboarding(false);
    if (gotoTab) setActiveTab(gotoTab);
  };

  const handleHintDismiss = () => {
    setHintDismissed(true);
    localStorage.setItem("stroller-navi-hint-dismissed", "1");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col max-w-[480px] mx-auto relative">

      {/* ─── Onboarding (first visit only) ─── */}
      {showOnboarding && <OnboardingScreen onFinish={handleOnboardingFinish} />}

      {/* ─── Header ─── */}
      <header className="sticky top-0 z-[9] px-4 pt-4 pb-3
        bg-gradient-to-r from-[#FF7043] via-[#FF6D3F] to-[#FF8A65] text-white
        shadow-[0_2px_16px_rgba(255,112,67,0.35)]">
        <div className="flex items-center gap-2.5">
          {/* Logo */}
          <div className="w-9 h-9 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-inner shrink-0 text-lg">
            🚼
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-[17px] font-black tracking-wide leading-none">ベビーカーナビ</h1>
            <p className="text-[10px] opacity-75 mt-0.5 font-medium">赤ちゃんとのおでかけを、もっと安心に</p>
          </div>
          {/* Baby chip */}
          {babyProfile && ageRange && (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-2.5 py-1 flex items-center gap-1 shrink-0">
              <span className="text-sm leading-none">{ageRange.emoji}</span>
              <span className="text-[11px] font-bold">{babyProfile.name}</span>
            </div>
          )}
          {/* Feedback */}
          <button onClick={() => setShowFeedback(true)} aria-label="ご意見"
            className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 active:scale-95 transition shrink-0 text-sm">
            💬
          </button>
          {/* Auth */}
          {user ? (
            <button onClick={handleLogout}
              className="bg-white/20 backdrop-blur-sm rounded-xl px-2.5 py-1.5 text-[10px] font-bold hover:bg-white/30 active:scale-95 transition shrink-0">
              ログアウト
            </button>
          ) : (
            <button onClick={() => setAuthOpen(true)}
              className="bg-white/95 text-brand-600 rounded-xl px-3 py-1.5 text-[10px] font-black hover:opacity-90 active:scale-95 transition shrink-0 shadow-sm">
              ログイン
            </button>
          )}
        </div>
      </header>

      {/* ─── Content ─── */}
      <div className="flex-1 overflow-auto pb-24">

        {/* ═══ MAP TAB ═══ */}
        {activeTab === "map" && (
          <div>
            {/* Baby profile hint banner */}
            {!babyProfile && !hintDismissed && (
              <div className="mx-4 mt-3 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="text-2xl shrink-0">👶</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-rose-600 leading-snug">
                    赤ちゃんを登録するとおすすめが届く！
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">月齢ぴったりのスポットやアドバイスが表示されます</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => setActiveTab("baby")}
                    className="bg-rose-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-rose-600 transition"
                  >
                    登録する →
                  </button>
                  <button
                    onClick={handleHintDismiss}
                    className="text-gray-400 hover:text-gray-600 transition p-0.5"
                    aria-label="閉じる"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

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

            {/* Quick stats - gradient cards */}
            <div className="grid grid-cols-2 gap-2.5 px-4 pt-3">
              <button
                onClick={() => { setActiveTab("spots"); setShowFavoritesOnly(false); setShowMoreMenu(false); }}
                className="bg-gradient-to-br from-[#FF7043] to-[#E64A19] rounded-2xl p-4 text-white shadow-md shadow-orange-200/60 active:scale-95 transition text-left"
              >
                <div className="text-3xl font-black leading-none">{regionFilteredSpots.length}</div>
                <div className="text-xs font-bold mt-1.5 opacity-90">🍼 おすすめスポット</div>
                <div className="text-[10px] opacity-60 mt-0.5">タップして一覧へ →</div>
              </button>
              <button
                onClick={() => { setActiveTab("restaurant"); setShowMoreMenu(false); }}
                className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white shadow-md shadow-amber-200/60 active:scale-95 transition text-left"
              >
                <div className="text-3xl font-black leading-none">{regionFilteredRestaurants.length}</div>
                <div className="text-xs font-bold mt-1.5 opacity-90">🍽️ 子連れグルメ</div>
                <div className="text-[10px] opacity-60 mt-0.5">タップして一覧へ →</div>
              </button>
              <button
                onClick={() => { setActiveTab("toilet"); setShowMoreMenu(false); }}
                className="bg-gradient-to-br from-violet-500 to-purple-700 rounded-2xl p-4 text-white shadow-md shadow-purple-200/60 active:scale-95 transition text-left"
              >
                <div className="text-3xl font-black leading-none">{regionFilteredToilets.length}</div>
                <div className="text-xs font-bold mt-1.5 opacity-90">🚻 BFトイレ</div>
                <div className="text-[10px] opacity-60 mt-0.5">タップして一覧へ →</div>
              </button>
              {user ? (
                <button
                  onClick={() => { setActiveTab("spots"); setShowFavoritesOnly(true); setShowMoreMenu(false); }}
                  className="bg-gradient-to-br from-rose-400 to-pink-600 rounded-2xl p-4 text-white shadow-md shadow-rose-200/60 active:scale-95 transition text-left"
                >
                  <div className="text-3xl font-black leading-none">{favoriteSpotIds.size}</div>
                  <div className="text-xs font-bold mt-1.5 opacity-90">❤️ お気に入り</div>
                  <div className="text-[10px] opacity-60 mt-0.5">タップして一覧へ →</div>
                </button>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="bg-gradient-to-br from-teal-400 to-emerald-600 rounded-2xl p-4 text-white shadow-md shadow-teal-200/60 active:scale-95 transition text-left"
                >
                  <div className="text-3xl font-black leading-none">👤</div>
                  <div className="text-xs font-bold mt-1.5 opacity-90">ログインする</div>
                  <div className="text-[10px] opacity-60 mt-0.5">お気に入り保存に →</div>
                </button>
              )}
              <button
                onClick={() => setShowMyStats(true)}
                className="col-span-2 bg-gradient-to-br from-brand-500 to-indigo-600 rounded-2xl p-4 text-white shadow-md shadow-brand-200/60 active:scale-95 transition text-left flex items-center gap-4"
              >
                <div>
                  <div className="text-3xl font-black leading-none">{visitedSpotIds.size}</div>
                  <div className="text-xs font-bold mt-1.5 opacity-90">👣 訪問済みスポット</div>
                  <div className="text-[10px] opacity-60 mt-0.5">マイ記録・バッジを見る →</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-2xl">{visitedSpotIds.size === 0 ? "🌱" : visitedSpotIds.size < 5 ? "🍼" : visitedSpotIds.size < 10 ? "⭐" : visitedSpotIds.size < 20 ? "🏅" : visitedSpotIds.size < 30 ? "🏆" : "👑"}</div>
                  <div className="text-[9px] opacity-70 mt-0.5">現在のバッジ</div>
                </div>
              </button>
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
              const isVisited = visitedSpotIds.has(spot.id);
              return (
                <div key={spot.id}
                  onClick={() => { setSelectedItemId(spot.id); setDetailTab("info"); }}
                  className={`bg-white rounded-2xl p-4 shadow cursor-pointer hover:shadow-md transition
                    ${isVisited ? "border-l-4 border-emerald-400" : ""}`}>
                  <div className="flex justify-between items-start mb-1.5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold truncate">{spot.name}</h4>
                        {isVisited && (
                          <span className="text-[9px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-medium shrink-0">
                            ✅ 行った
                          </span>
                        )}
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

        {/* ═══ RESTAURANT TAB ═══ */}
        {activeTab === "restaurant" && <RestaurantTab
          restaurants={regionFilteredRestaurants}
          regions={REGIONS}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          setSelectedItemId={setSelectedItemId}
          setDetailTab={setDetailTab}
        />}

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

        {/* ═══ ARTICLES TAB ═══ */}
        {activeTab === "articles" && (
          <div className="p-4 space-y-3">
            <div className="bg-emerald-50/50 rounded-2xl p-3.5 flex items-center gap-2.5">
              <span className="text-2xl">📚</span>
              <div>
                <div className="text-sm font-bold text-emerald-600">お役立ち記事</div>
                <div className="text-[11px] text-gray-500">子連れおでかけに役立つ情報まとめ</div>
              </div>
            </div>

            {/* エリアガイド */}
            <h3 className="text-xs font-bold text-gray-500 mt-2 px-1">📍 エリア別ガイド</h3>
            <a href="/articles/shinjuku-guide"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🗼</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">【2026年最新】新宿エリア 子連れおでかけ完全ガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">授乳室5選・子連れランチ7選・無料遊び場・百貨店ランキング・モデルコース</p>
                  <div className="flex gap-1">
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">新宿</span>
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">授乳室</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/articles/shibuya-guide"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🌿</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">【2026年最新】渋谷エリア 子連れおでかけ完全ガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">無料遊び場5選・屋上庭園4選・ランチ6選・授乳室MAP</p>
                  <div className="flex gap-1">
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">渋谷</span>
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">代官山</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/articles/ikebukuro-guide"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🐧</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">【2026年最新】池袋エリア 子連れおでかけ完全ガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">サンシャイン水族館・プラネタリウム・無料遊び場・ランチ</p>
                  <div className="flex gap-1">
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">池袋</span>
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">サンシャイン</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/articles/odaiba-guide"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🎡</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">【2026年最新】お台場・豊洲 子連れおでかけ完全ガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">レゴランド・リトルプラネット・科学館・ランチ・授乳室MAP</p>
                  <div className="flex gap-1">
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">お台場</span>
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">豊洲</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/articles/kichijoji-guide"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🌳</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">【2026年最新】吉祥寺エリア 子連れおでかけ完全ガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">井の頭公園・ジブリ美術館・カフェランチ・授乳室</p>
                  <div className="flex gap-1">
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">吉祥寺</span>
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">井の頭公園</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/articles/ueno-guide"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🐼</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">【2026年最新】上野エリア 子連れおでかけ完全ガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">動物園・国立科学博物館・子ども図書館・ランチ・授乳室</p>
                  <div className="flex gap-1">
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">上野</span>
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">パンダ</span>
                  </div>
                </div>
              </div>
            </a>

            {/* 全国エリアガイド */}
            <h3 className="text-xs font-bold text-gray-500 mt-4 px-1">🗾 全国エリアガイド</h3>
            {[
              { href: "/articles/osaka-guide", emoji: "🏯", title: "大阪 子連れおでかけ完全ガイド", desc: "USJ・海遊館・キッズプラザ・授乳室まとめ", tags: ["大阪", "USJ"] },
              { href: "/articles/kyoto-guide", emoji: "⛩️", title: "京都 子連れおでかけ完全ガイド", desc: "ベビーカーOK・NG観光地を正直解説", tags: ["京都", "嵐山"] },
              { href: "/articles/yokohama-guide", emoji: "🎡", title: "横浜 子連れおでかけ完全ガイド", desc: "みなとみらい・八景島・ズーラシア", tags: ["横浜", "みなとみらい"] },
              { href: "/articles/fukuoka-guide", emoji: "🎏", title: "福岡 子連れおでかけ完全ガイド", desc: "キャナルシティ・マリンワールド・アンパンマンミュージアム", tags: ["福岡", "博多"] },
              { href: "/articles/sapporo-guide", emoji: "🦅", title: "札幌 子連れおでかけ完全ガイド", desc: "円山動物園・冬の室内スポット情報付き", tags: ["札幌", "北海道"] },
              { href: "/articles/nagoya-guide", emoji: "🏯", title: "名古屋 子連れおでかけ完全ガイド", desc: "レゴランド・東山動植物園・名古屋港水族館", tags: ["名古屋", "レゴランド"] },
            ].map((a) => (
              <a key={a.href} href={a.href}
                className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
                <div className="flex gap-3">
                  <span className="text-3xl">{a.emoji}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold leading-snug mb-1">{a.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">{a.desc}</p>
                    <div className="flex gap-1">
                      {a.tags.map((t) => (
                        <span key={t} className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* おでかけノウハウ */}
            <h3 className="text-xs font-bold text-gray-500 mt-4 px-1">💡 おでかけノウハウ</h3>
            {[
              { href: "/articles/train-stroller-manner", emoji: "🚃", title: "ベビーカーで電車に乗るときのマナー", desc: "たたむ必要はある？優先スペース・エレベーターの使い方" },
              { href: "/articles/zero-age-outing", emoji: "🌱", title: "0歳の赤ちゃんはいつから外出できる？", desc: "月齢別おでかけ完全ガイド・持ち物チェックリスト" },
              { href: "/articles/stroller-guide", emoji: "🚼", title: "ベビーカーでのおでかけ完全ガイド", desc: "準備チェックリスト・施設の見分け方・電車移動のコツ" },
              { href: "/articles/nursing-room-tips", emoji: "🍼", title: "授乳室の見つけ方と上手な使い方", desc: "新米ママのための完全マニュアル。探し方、持ち物、マナー" },
              { href: "/articles/rainy-day-spots", emoji: "☔", title: "雨の日でも大丈夫！室内スポット特集", desc: "天候に左右されない室内おでかけスポットを厳選" },
              { href: "/articles/baby-first-outing", emoji: "👶", title: "赤ちゃんの初めてのおでかけガイド", desc: "月齢別おすすめスポットと注意点・持ち物チェックリスト" },
              { href: "/articles/restaurant-tips", emoji: "🍽️", title: "ベビーカーで入れるレストランの見分け方", desc: "子連れランチ攻略法。入店前チェックポイント、予約のコツ" },
            ].map((a) => (
              <a key={a.href} href={a.href}
                className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
                <div className="flex gap-3">
                  <span className="text-3xl">{a.emoji}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold leading-snug mb-1">{a.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* おすすめ商品バナー */}
            <a href="/baby-goods"
              className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 hover:border-orange-400 transition mt-2">
              <span className="text-3xl">🛒</span>
              <div>
                <div className="text-xs font-bold text-orange-800">おすすめベビーグッズ一覧</div>
                <div className="text-[10px] text-orange-600">ベビーカー・抱っこ紐・知育おもちゃをまとめてチェック</div>
              </div>
              <span className="ml-auto text-orange-500 text-xs font-bold">→</span>
            </a>

            {/* 全記事リンク */}
            <a href="/articles"
              className="block text-center py-3 rounded-xl border border-brand-200 text-brand-500 text-xs font-bold hover:bg-brand-50 transition mt-2">
              すべての記事を見る（40本）→
            </a>
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
                  ${selectedItem.type === "spot" ? "bg-orange-50" : selectedItem.type === "restaurant" ? "bg-amber-50" : "bg-purple-50"}`}>
                  {selectedItem.type === "spot" ? "🍼" : selectedItem.type === "restaurant" ? "🍽️" : "🚻"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">{selectedItem.name}</h3>
                    {selectedItem.type === "spot" && <FavButton spotId={selectedItem.id} size="lg" />}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {selectedItem.type === "restaurant" && "cuisine" in selectedItem ? (
                      <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">
                        {(selectedItem as any).cuisine}
                      </span>
                    ) : getAvgRating(selectedItem.id) ? (
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

            {/* Sub-tabs (spot only) */}
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
            {detailTab === "info" && (() => {
              const item = selectedItem as any;
              return (
              <>
                {/* Spot photos from Google Places */}
                <SpotPhotos spotName={item.name} lat={item.lat} lng={item.lng} />

                <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.desc}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.map((t: string) => <TagPill key={t} label={t} />)}
                  </div>
                )}
                {item.region && (
                  <div className="mb-3">
                    <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded font-medium">
                      📍 {item.region}
                    </span>
                    {item.cuisine && (
                      <span className="text-[10px] text-orange-600 bg-orange-50 px-2 py-1 rounded font-medium ml-1.5">
                        🍽️ {item.cuisine}
                      </span>
                    )}
                  </div>
                )}

                {/* Basic info (address, hours, website, price, tabelog) */}
                {(item.address || item.hours || item.website || item.price_range || item.tabelog_url) && (
                  <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1.5">
                    {item.address && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">📍 住所</span>
                        <span className="text-gray-700">{item.address}</span>
                      </div>
                    )}
                    {item.hours && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">🕒 営業</span>
                        <span className="text-gray-700">{item.hours}</span>
                      </div>
                    )}
                    {item.price_range && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">💰 予算</span>
                        <span className="text-gray-700">{item.price_range}</span>
                      </div>
                    )}
                    {item.website && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">🔗 HP</span>
                        <a href={item.website} target="_blank" rel="noopener noreferrer"
                          className="text-brand-500 hover:underline break-all">
                          公式サイトを開く →
                        </a>
                      </div>
                    )}
                    {item.tabelog_url && (
                      <div className="flex gap-2 text-[11px]">
                        <span className="text-gray-400 shrink-0 w-14">📝 食べログ</span>
                        <a href={item.tabelog_url} target="_blank" rel="noopener noreferrer"
                          className="text-orange-500 hover:underline">
                          {item.tabelog_url.includes('/rstLst/') ? '食べログで検索 →' : '食べログで見る →'}
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {item.age_tips && babyProfile && ageKey && item.age_tips[ageKey] && (
                  <div className="bg-pink-50/60 border border-pink-100/50 rounded-xl p-3.5 mb-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-base">{ageRange?.emoji}</span>
                      <span className="text-xs font-bold text-baby-300">
                        {babyProfile.name}ちゃん（{ageRange?.label}）へのおすすめ
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">💡 {item.age_tips[ageKey]}</p>
                  </div>
                )}

                {/* 行った！ボタン（スポットのみ） */}
                {selectedItem.type === "spot" && (() => {
                  const isVisited = visitedSpotIds.has(selectedItem.id);
                  return (
                    <button
                      onClick={() => handleToggleVisited(selectedItem.id)}
                      className={`w-full py-3 rounded-xl text-sm font-bold transition mb-2.5 flex items-center justify-center gap-2
                        ${isVisited
                          ? "bg-emerald-500 text-white shadow-md shadow-emerald-200/60"
                          : "border-2 border-dashed border-emerald-400 text-emerald-600 hover:bg-emerald-50"
                        }`}
                    >
                      {isVisited ? "✅ 行ったことがある！" : "👣 ここに行ったことがある"}
                    </button>
                  );
                })()}

                <div className="flex gap-2.5">
                  <button
                    onClick={() => {
                      setActiveTab("map");
                      setSelectedItemId(null);
                      setDetailTab("info");
                      const query = encodeURIComponent(selectedItem.name);
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${query}`,
                        "_blank"
                      );
                    }}
                    className="flex-1 py-3 rounded-xl border-[1.5px] border-brand-500
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

                {/* SNS Share buttons */}
                {(() => {
                  const spotTags = "tags" in selectedItem ? (selectedItem.tags as string[]).slice(0, 3).join(" ") : "";
                  const shareText = encodeURIComponent("🚼 " + selectedItem.name + "\n" + selectedItem.desc + (spotTags ? "\n設備: " + spotTags : "") + "\n\n#ベビーカーナビ #子連れおでかけ");
                  const shareUrl = "https://stroller-navi.vercel.app/spots/" + (selectedItem.type === "spot" ? selectedItem.id : "");
                  const encodedUrl = encodeURIComponent(shareUrl);
                  const SNS_SHARE = [
                    {
                      label: "X",
                      bg: "bg-black",
                      href: `https://x.com/intent/post?text=${shareText}&url=${encodedUrl}`,
                      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                    },
                    {
                      label: "LINE",
                      bg: "bg-[#06C755]",
                      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
                      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>,
                    },
                    {
                      label: "Facebook",
                      bg: "bg-[#1877F2]",
                      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg>,
                    },
                    {
                      label: "はてブ",
                      bg: "bg-[#00A4DE]",
                      href: `https://b.hatena.ne.jp/entry/s/stroller-navi.vercel.app/spots/${selectedItem.type === "spot" ? selectedItem.id : ""}`,
                      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M20.47 0C22.42 0 24 1.58 24 3.53v16.94C24 22.42 22.42 24 20.47 24H3.53C1.58 24 0 22.42 0 20.47V3.53C0 1.58 1.58 0 3.53 0h16.94zm-3.705 14.47c-.78 0-1.41.63-1.41 1.41s.63 1.41 1.41 1.41 1.41-.63 1.41-1.41-.63-1.41-1.41-1.41zm-10.795.47v2.35h4.928c1.287 0 2.116-.064 2.7-.22.944-.253 1.62-1.055 1.62-2.126 0-.796-.417-1.63-1.128-2.017v-.032c.554-.382.9-1.02.9-1.716 0-.891-.49-1.652-1.255-1.987-.563-.25-1.16-.282-2.353-.282H5.97v5.83zm2.194-4.024h2.21c.994 0 1.482.362 1.482 1.02 0 .705-.52 1.02-1.65 1.02H8.164v-2.04zm0 3.716h2.447c1.034 0 1.572.37 1.572 1.083 0 .676-.506 1.04-1.605 1.04H8.164v-2.123zM16.765 8.4h-2.19v6.07h2.19V8.4zm-1.095-3.87c-.78 0-1.41.63-1.41 1.41s.63 1.41 1.41 1.41 1.41-.63 1.41-1.41-.63-1.41-1.41-1.41z" /></svg>,
                    },
                  ];
                  return (
                    <div className="mt-3">
                      <p className="text-[10px] text-gray-400 text-center mb-2">📤 シェアする</p>
                      <div className="flex items-center gap-2">
                        {SNS_SHARE.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${s.label}でシェア`}
                            className={`flex-1 h-9 rounded-xl ${s.bg} flex items-center justify-center gap-1 hover:opacity-80 active:scale-95 transition`}
                          >
                            {s.icon}
                            <span className="text-[9px] font-bold text-white">{s.label}</span>
                          </a>
                        ))}
                        {/* Copy link */}
                        <button
                          onClick={async () => {
                            try { await navigator.clipboard.writeText(shareUrl); }
                            catch {
                              const el = document.createElement("textarea");
                              el.value = shareUrl;
                              document.body.appendChild(el);
                              el.select();
                              document.execCommand("copy");
                              document.body.removeChild(el);
                            }
                            setShareCopied(true);
                            setTimeout(() => setShareCopied(false), 2000);
                          }}
                          aria-label="リンクをコピー"
                          className={`flex-1 h-9 rounded-xl flex items-center justify-center gap-1 transition active:scale-95 ${shareCopied ? "bg-green-500" : "bg-gray-100 hover:bg-gray-200"}`}
                        >
                          {shareCopied ? (
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                          ) : (
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-500"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>
                          )}
                          <span className={`text-[9px] font-bold ${shareCopied ? "text-white" : "text-gray-500"}`}>
                            {shareCopied ? "コピー済" : "コピー"}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </>
              );
            })()}

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

      {/* Feedback Modal */}
      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} userEmail={user?.email} />}

      {/* My Stats Modal */}
      {showMyStats && <MyStatsModal onClose={() => setShowMyStats(false)} />}

      {/* Family Share Modal */}
      {showFamilyModal && (
        <FamilyShareModal
          currentCode={familyCode}
          onClose={() => setShowFamilyModal(false)}
          onCodeChange={(code) => {
            setFamilyCodeState(code);
            if (code) {
              fetch(`/api/family/visited?room_code=${code}`)
                .then((r) => r.json())
                .then(({ visited }: { visited?: { spot_id: number }[] }) => {
                  if (Array.isArray(visited) && visited.length > 0) {
                    setVisitedSpotIds(new Set<number>(visited.map((v) => v.spot_id)));
                  }
                })
                .catch(() => {});
            }
          }}
        />
      )}

      {/* SEO Content - visible to search engines */}
      <section className="px-4 py-6 bg-white border-t border-gray-100">
        <div className="max-w-lg mx-auto space-y-4">
          <h2 className="text-base font-bold text-gray-800">ベビーカーナビとは</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            ベビーカーナビは、赤ちゃん連れのパパ・ママが安心しておでかけできるよう、全国のバリアフリー情報をまとめた無料のWebアプリケーションです。東京都内を中心に、全国370以上のおすすめスポット、90以上のベビーカーOKレストラン、100以上の授乳室・多目的トイレ情報を掲載しています。
          </p>
          <h3 className="text-sm font-bold text-gray-700">主な機能</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            天気に合わせたおすすめスポットの自動提案、現在地から近い順のスポット・レストラン検索、赤ちゃんの月齢に合わせたおすすめポイント表示、おでかけプラン自動生成、Google マップ連携のルート検索、口コミ・写真投稿など、子連れのおでかけを便利にする機能が満載です。
          </p>
          <h3 className="text-sm font-bold text-gray-700">掲載エリア</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            東京（186スポット）、神奈川・埼玉・千葉（関東）、北海道、東北、中部、近畿、中国、四国、九州・沖縄の全国をカバー。特に東京都内は授乳室84件、レストラン83件と充実しています。
          </p>
          <h3 className="text-sm font-bold text-gray-700">お役立ち記事</h3>
          <div className="space-y-1.5">
            <a href="/articles/shinjuku-guide" className="block text-xs text-brand-500 hover:underline">→ 新宿エリア 子連れおでかけ完全ガイド</a>
            <a href="/articles/shibuya-guide" className="block text-xs text-brand-500 hover:underline">→ 渋谷エリア 子連れおでかけ完全ガイド</a>
            <a href="/articles/ikebukuro-guide" className="block text-xs text-brand-500 hover:underline">→ 池袋エリア 子連れおでかけ完全ガイド</a>
            <a href="/articles/odaiba-guide" className="block text-xs text-brand-500 hover:underline">→ お台場・豊洲エリア 子連れおでかけ完全ガイド</a>
            <a href="/articles/stroller-guide" className="block text-xs text-brand-500 hover:underline">→ ベビーカーでのおでかけ完全ガイド</a>
            <a href="/articles/nursing-room-tips" className="block text-xs text-brand-500 hover:underline">→ 授乳室の見つけ方と上手な使い方</a>
            <a href="/articles/rainy-day-spots" className="block text-xs text-brand-500 hover:underline">→ 雨の日でも大丈夫！室内スポット特集</a>
            <a href="/articles/baby-first-outing" className="block text-xs text-brand-500 hover:underline">→ 赤ちゃんの初めてのおでかけガイド</a>
            <a href="/articles/restaurant-tips" className="block text-xs text-brand-500 hover:underline">→ ベビーカーで入れるレストランの見分け方</a>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <SiteFooter />

      {/* ─── "もっと" overlay drawer ─── */}
      {showMoreMenu && (
        <div className="fixed inset-0 z-[50] flex items-end justify-center"
          onClick={() => setShowMoreMenu(false)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          <div onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[480px] bg-white rounded-t-3xl p-5 pb-8 shadow-2xl animate-slide-up">
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-5" />
            <h4 className="text-xs font-bold text-gray-400 mb-3 px-1">その他のメニュー</h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { key: "restaurant", emoji: "🍽️", label: "グルメ",        bg: "from-amber-400 to-orange-500",   href: null },
                { key: "toilet",     emoji: "🚻", label: "トイレ",        bg: "from-violet-500 to-purple-700",  href: null },
                { key: "plan",       emoji: "📅", label: "プラン作成",    bg: "from-teal-400 to-emerald-600",   href: null },
                { key: "baby",       emoji: "👶", label: "赤ちゃん登録", bg: "from-rose-400 to-pink-600",      href: null },
                { key: "_fav",       emoji: "❤️", label: "お気に入り",   bg: "from-red-400 to-rose-600",       href: null },
                { key: "_stats",     emoji: "📊", label: "マイ記録",      bg: "from-brand-400 to-brand-600",    href: null },
                { key: "_weaning",   emoji: "🥄", label: "離乳食",        bg: "from-yellow-400 to-orange-400",  href: "/weaning-tracker" },
                { key: "_family",    emoji: "👨‍👩‍👧", label: familyCode ? "共有中" : "家族共有",  bg: familyCode ? "from-green-400 to-emerald-600" : "from-indigo-400 to-violet-600", href: null },
                { key: "_feedback",  emoji: "💬", label: "ご意見",        bg: "from-sky-400 to-blue-600",       href: null },
              ].map((item) => {
                const cls = `bg-gradient-to-br ${item.bg} text-white rounded-2xl py-4 flex flex-col items-center gap-1.5 active:scale-95 transition shadow-sm`;
                if (item.href) {
                  return (
                    <a key={item.key} href={item.href}
                      onClick={() => setShowMoreMenu(false)}
                      className={cls}
                    >
                      <span className="text-2xl leading-none">{item.emoji}</span>
                      <span className="text-[11px] font-bold">{item.label}</span>
                    </a>
                  );
                }
                return (
                  <button key={item.key}
                    onClick={() => {
                      setShowMoreMenu(false);
                      if (item.key === "_fav") { setActiveTab("spots"); setShowFavoritesOnly(true); }
                      else if (item.key === "_feedback") setShowFeedback(true);
                      else if (item.key === "_stats") setShowMyStats(true);
                      else if (item.key === "_family") setShowFamilyModal(true);
                      else setActiveTab(item.key);
                    }}
                    className={cls}
                  >
                    <span className="text-2xl leading-none">{item.emoji}</span>
                    <span className="text-[11px] font-bold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── Bottom Navigation Bar ─── */}
      <nav className="fixed bottom-0 left-0 right-0 z-[40] max-w-[480px] mx-auto
        bg-white/95 backdrop-blur-md border-t border-gray-100
        shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-safe">
        <div className="flex">
          {BOTTOM_TABS.map((tab) => {
            const isActive = tab.key === "more"
              ? showMoreMenu
              : activeTab === tab.key && !showMoreMenu;
            return (
              <button key={tab.key}
                onClick={() => {
                  if (tab.key === "more") {
                    setShowMoreMenu((prev) => !prev);
                  } else {
                    setShowMoreMenu(false);
                    setActiveTab(tab.key);
                  }
                }}
                className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition active:scale-90"
              >
                {tab.icon(isActive)}
                <span className={`text-[10px] font-bold transition-colors ${isActive ? "text-[#FF7043]" : "text-gray-400"}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

// ─── Feedback Modal Component ───
function FeedbackModal({ onClose, userEmail }: { onClose: () => void; userEmail?: string }) {
  const [category, setCategory] = useState("機能リクエスト");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = ["機能リクエスト", "スポット追加希望", "バグ報告", "レストラン追加希望", "その他"];

  const handleSubmit = async () => {
    if (!text) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, text, user_email: userEmail || null }),
      });
      const data = await res.json();
      if (data.feedback) {
        setSubmitted(true);
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
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
      <div onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="w-full max-w-[480px] max-h-[85vh] bg-white rounded-t-3xl p-5 pb-8 overflow-y-auto shadow-2xl"
        style={{ animation: "slideUp 0.3s ease-out" }}>
        <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-black flex items-center gap-2">💬 ご要望・ご意見</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">✕</button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🎉</div>
            <h4 className="text-base font-bold mb-2">ありがとうございます！</h4>
            <p className="text-sm text-gray-500 mb-4">
              ご要望を受け付けました。<br />
              より良いアプリ作りの参考にさせていただきます。
            </p>
            <button onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-bold hover:opacity-90 transition">
              閉じる
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">カテゴリ</label>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <button key={c} onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition
                      ${category === c ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">ご要望・ご意見 *</label>
              <textarea
                value={text}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                placeholder="「こんな機能がほしい」「ここが使いにくい」「このスポットを追加してほしい」など、なんでもお聞かせください！"
                rows={4}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-500 focus:outline-none bg-gray-50 resize-y"
              />
            </div>

            <p className="text-[11px] text-gray-400">
              ※ お返事はできかねますが、すべて目を通しアプリの改善に活用いたします。
            </p>

            <button onClick={handleSubmit} disabled={!text || submitting}
              className={`w-full py-3.5 rounded-xl text-white text-sm font-bold transition
                ${text && !submitting
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"}`}>
              {submitting ? "送信中..." : "送信する"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Restaurant Tab with distance sort ───
function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function fmtDist(km: number) { return km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`; }

function RestaurantTab({ restaurants, regions, selectedRegion, setSelectedRegion, setSelectedItemId, setDetailTab }: any) {
  const [userLoc, setUserLoc] = useState<{ lat: number; lng: number } | null>(null);
  const [sortBy, setSortBy] = useState<"distance" | "name">("distance");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => setUserLoc({ lat: p.coords.latitude, lng: p.coords.longitude }),
        () => setSortBy("name")
      );
    } else { setSortBy("name"); }
  }, []);

  const sorted = useMemo(() => {
    if (sortBy === "distance" && userLoc) {
      return [...restaurants]
        .map((r: any) => ({ ...r, _dist: getDistanceKm(userLoc.lat, userLoc.lng, r.lat, r.lng) }))
        .sort((a: any, b: any) => a._dist - b._dist);
    }
    return restaurants;
  }, [restaurants, sortBy, userLoc]);

  return (
    <div className="p-4 space-y-3">
      <div className="bg-orange-50/50 rounded-2xl p-3.5 flex items-center gap-2.5">
        <span className="text-2xl">🍽️</span>
        <div>
          <div className="text-sm font-bold text-orange-500">ベビーカーOKなレストラン</div>
          <div className="text-[11px] text-gray-500">キッズメニュー・ベビーチェア情報付き</div>
        </div>
      </div>

      {/* Sort toggle */}
      <div className="flex gap-2">
        <button onClick={() => setSortBy("distance")}
          className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition
            ${sortBy === "distance" ? "bg-orange-500 text-white" : "bg-white text-gray-500 border border-gray-200"}`}>
          📍 近い順
        </button>
        <button onClick={() => setSortBy("name")}
          className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition
            ${sortBy === "name" ? "bg-orange-500 text-white" : "bg-white text-gray-500 border border-gray-200"}`}>
          あ行順
        </button>
      </div>

      {/* Region filter */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {regions.map((region: string) => (
          <button key={region} onClick={() => setSelectedRegion(region)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition
              ${selectedRegion === region
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}>
            {region}
          </button>
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <div className="text-3xl mb-2">🍽️</div>
          <p className="text-sm font-bold">この地域のレストラン情報はまだありません</p>
        </div>
      )}
      {sorted.map((r: any) => (
        <div key={r.id}
          className="bg-white rounded-2xl p-3.5 shadow cursor-pointer hover:shadow-md transition"
          onClick={() => { setSelectedItemId(r.id); setDetailTab("info"); }}>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-bold">{r.name}</h3>
                <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">
                  {r.cuisine}
                </span>
              </div>
              <p className="text-[11px] text-gray-500">{r.desc}</p>
            </div>
            <div className="flex flex-col items-end gap-1 ml-2 shrink-0">
              {r._dist != null && (
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  {fmtDist(r._dist)}
                </span>
              )}
              {r.price_range && (
                <span className="text-[10px] text-gray-400">💰 {r.price_range}</span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-1.5">
            {r.tags.slice(0, 4).map((t: string) => (
              <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">
                {t}
              </span>
            ))}
          </div>
          {r.address && <p className="text-[10px] text-gray-400">📍 {r.address}</p>}
          <div className="flex gap-3 mt-1">
            {r.tabelog_url && (
              <a href={r.tabelog_url} target="_blank" rel="noopener noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="text-[10px] text-orange-500 hover:underline inline-block">
                📝 {r.tabelog_url.includes('/rstLst/') ? '食べログで検索 →' : '食べログで見る →'}
              </a>
            )}
            {r.website && (
              <a href={r.website} target="_blank" rel="noopener noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="text-[10px] text-brand-500 hover:underline inline-block">
                🔗 公式サイト →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

