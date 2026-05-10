"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase";
import { useAppStore } from "@/lib/store";
import { BABY_SPOTS, TOILETS, RESTAURANTS, REGIONS, getMonthsOld, getAgeRange, getAgeRangeKey } from "@/lib/constants";
import { Stars, TagPill, EmptyState } from "@/components/ui";
import AuthModal from "@/components/AuthModal";
import SiteFooter from "@/components/SiteFooter";
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

const TABS = [
  { key: "map", label: "マップ", icon: "📍" },
  { key: "plan", label: "プラン", icon: "🗓️" },
  { key: "route", label: "ルート", icon: "🧭" },
  { key: "baby", label: "赤ちゃん", icon: "👶" },
  { key: "spots", label: "スポット", icon: "🍼" },
  { key: "restaurant", label: "レストラン", icon: "🍽️" },
  { key: "toilet", label: "トイレ", icon: "🚻" },
  { key: "articles", label: "記事", icon: "📚" },
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
  const [showFeedback, setShowFeedback] = useState(false);

  const supabase = createClient();

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
          <button onClick={() => setShowFeedback(true)}
            className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-white/30 transition"
            title="ご要望・ご意見">
            💬
          </button>
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

            {/* Quick stats - clickable buttons */}
            <div className="flex gap-2 px-4 pt-3 overflow-x-auto">
              <button
                onClick={() => { setActiveTab("spots"); setShowFavoritesOnly(false); }}
                className="flex-shrink-0 min-w-[100px] flex-1 bg-white rounded-xl p-3 shadow flex items-center gap-2
                  hover:shadow-md active:scale-95 transition"
              >
                <span className="text-xl">🍼</span>
                <div className="text-left">
                  <div className="text-lg font-black text-brand-500">{regionFilteredSpots.length}</div>
                  <div className="text-[9px] text-gray-400 font-medium">スポット →</div>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("restaurant")}
                className="flex-shrink-0 min-w-[100px] flex-1 bg-white rounded-xl p-3 shadow flex items-center gap-2
                  hover:shadow-md active:scale-95 transition"
              >
                <span className="text-xl">🍽️</span>
                <div className="text-left">
                  <div className="text-lg font-black text-orange-500">{regionFilteredRestaurants.length}</div>
                  <div className="text-[9px] text-gray-400 font-medium">レストラン →</div>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("toilet")}
                className="flex-shrink-0 min-w-[100px] flex-1 bg-white rounded-xl p-3 shadow flex items-center gap-2
                  hover:shadow-md active:scale-95 transition"
              >
                <span className="text-xl">🚻</span>
                <div className="text-left">
                  <div className="text-lg font-black text-toilet-500">{regionFilteredToilets.length}</div>
                  <div className="text-[9px] text-gray-400 font-medium">トイレ →</div>
                </div>
              </button>
              {user && (
                <button
                  onClick={() => { setActiveTab("spots"); setShowFavoritesOnly(true); }}
                  className="flex-shrink-0 min-w-[100px] flex-1 bg-white rounded-xl p-3 shadow flex items-center gap-2
                    hover:shadow-md active:scale-95 transition"
                >
                  <span className="text-xl">❤️</span>
                  <div className="text-left">
                    <div className="text-lg font-black text-red-400">{favoriteSpotIds.size}</div>
                    <div className="text-[9px] text-gray-400 font-medium">お気に入り →</div>
                  </div>
                </button>
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

            {/* おでかけノウハウ */}
            <h3 className="text-xs font-bold text-gray-500 mt-4 px-1">💡 おでかけノウハウ</h3>
            <a href="/articles/stroller-guide"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🚼</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">ベビーカーでのおでかけ完全ガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">準備チェックリスト・施設の見分け方・電車移動のコツ・おすすめスポットタイプ別ガイド</p>
                  <div className="flex gap-1">
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">ベビーカー</span>
                    <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">バリアフリー</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/articles/nursing-room-tips"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🍼</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">授乳室の見つけ方と上手な使い方</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">新米ママのための完全マニュアル。探し方、持ち物、マナーを解説。</p>
                </div>
              </div>
            </a>

            <a href="/articles/rainy-day-spots"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">☔</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">雨の日でも大丈夫！室内スポット特集</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">天候に左右されない室内おでかけスポットを厳選。</p>
                </div>
              </div>
            </a>

            <a href="/articles/baby-first-outing"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">👶</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">赤ちゃんの初めてのおでかけガイド</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">月齢別おすすめスポットと注意点。持ち物チェックリスト付き。</p>
                </div>
              </div>
            </a>

            <a href="/articles/restaurant-tips"
              className="block bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <span className="text-3xl">🍽️</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold leading-snug mb-1">ベビーカーで入れるレストランの見分け方</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">子連れランチ攻略法。入店前チェックポイント、予約のコツ。</p>
                </div>
              </div>
            </a>

            {/* 全記事リンク */}
            <a href="/articles"
              className="block text-center py-3 rounded-xl border border-brand-200 text-brand-500 text-xs font-bold hover:bg-brand-50 transition mt-2">
              すべての記事を見る →
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

                <div className="flex gap-2.5">
                  <button
                    onClick={() => {
                      // Close modal, switch to map tab, and open Google Maps for the location
                      setActiveTab("map");
                      setSelectedItemId(null);
                      setDetailTab("info");
                      // Also open Google Maps with just the location
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

                {/* Share to X button */}
                <button
                  onClick={() => {
                    const spotTags = "tags" in selectedItem ? (selectedItem.tags as string[]).slice(0, 3).join(" ") : "";
                    const shareText = "🚼 " + selectedItem.name + "\n" + selectedItem.desc + (spotTags ? "\n設備: " + spotTags : "") + "\n\n#ベビーカーナビ #子連れおでかけ";
                    const shareUrl = "https://stroller-navi.vercel.app/spots/" + (selectedItem.type === "spot" ? selectedItem.id : "");
                    window.open("https://x.com/intent/post?text=" + encodeURIComponent(shareText) + "&url=" + encodeURIComponent(shareUrl), "_blank", "width=550,height=420");
                  }}
                  className="w-full py-2.5 rounded-xl border border-gray-200 text-xs font-bold
                    text-gray-500 hover:bg-gray-50 transition flex items-center justify-center gap-1.5 mt-2"
                >
                  𝕏 でシェアする
                </button>
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

