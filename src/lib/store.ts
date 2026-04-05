import { create } from "zustand";
import type { BabyProfile, Review } from "@/types";

interface AppStore {
  // Auth
  user: { id: string; email: string } | null;
  setUser: (user: { id: string; email: string } | null) => void;

  // Baby
  babyProfile: BabyProfile | null;
  babyMonths: number | null;
  setBabyProfile: (profile: BabyProfile | null, months: number | null) => void;

  // Reviews (client cache)
  reviewsBySpot: Record<number, Review[]>;
  setReviewsForSpot: (spotId: number, reviews: Review[]) => void;
  addReview: (spotId: number, review: Review) => void;

  // Favorites
  favoriteSpotIds: Set<number>;
  setFavoriteSpotIds: (ids: Set<number>) => void;
  toggleFavorite: (spotId: number) => void;

  // UI
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedItemId: number | null;
  setSelectedItemId: (id: number | null) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  babyProfile: null,
  babyMonths: null,
  setBabyProfile: (profile, months) => set({ babyProfile: profile, babyMonths: months }),

  reviewsBySpot: {},
  setReviewsForSpot: (spotId, reviews) =>
    set((state) => ({
      reviewsBySpot: { ...state.reviewsBySpot, [spotId]: reviews },
    })),
  addReview: (spotId, review) =>
    set((state) => ({
      reviewsBySpot: {
        ...state.reviewsBySpot,
        [spotId]: [...(state.reviewsBySpot[spotId] || []), review],
      },
    })),

  favoriteSpotIds: new Set(),
  setFavoriteSpotIds: (ids) => set({ favoriteSpotIds: ids }),
  toggleFavorite: (spotId) =>
    set((state) => {
      const next = new Set(state.favoriteSpotIds);
      if (next.has(spotId)) next.delete(spotId);
      else next.add(spotId);
      return { favoriteSpotIds: next };
    }),

  activeTab: "map",
  setActiveTab: (tab) => set({ activeTab: tab }),
  selectedItemId: null,
  setSelectedItemId: (id) => set({ selectedItemId: id }),
  selectedRegion: "すべて",
  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));
