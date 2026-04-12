// ベビーカーナビ 型定義

export interface BabySpot {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: "spot";
  tags: string[];
  desc: string;
  age_min: number;
  age_max: number;
  age_tips: Record<string, string>;
  region?: string;
  category?: "indoor" | "outdoor" | "both";
  is_user_submitted?: boolean;
}

export interface BarrierFreeToilet {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: "toilet";
  desc: string;
  region?: string;
}

export type MapItem = BabySpot | BarrierFreeToilet;

export interface Review {
  id: string;
  spot_id: number;
  user_id: string;
  user_name: string;
  rating: number;
  text: string;
  baby_age: string | null;
  created_at: string;
}

export interface BabyProfile {
  id: string;
  user_id: string;
  name: string;
  birth_date: string;
  created_at: string;
}

export interface Favorite {
  id: string;
  user_id: string;
  spot_id: number;
  created_at: string;
}

export interface UserSubmittedSpot {
  id: string;
  name: string;
  lat: number;
  lng: number;
  tags: string[];
  desc: string;
  submitted_by: string;
  submitted_by_name: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

export type TravelModeOption = "walking" | "transit";

export interface TransitSegment {
  type: "walking" | "transit";
  instruction: string;
  distance: string;
  duration: string;
  lineName?: string;
  lineColor?: string;
  departureStop?: string;
  arrivalStop?: string;
  numStops?: number;
  barrierFreeTips: string[];
}

export interface RouteInfo {
  distance: string;
  duration: string;
  elevators: number;
  slopes: number;
  steps: number;
  tips: string[];
  polyline: string | null;
  legs: google.maps.DirectionsLeg[] | null;
  travelMode: TravelModeOption;
  segments: TransitSegment[];
}

export type AgeRangeKey = "0-3" | "4-6" | "7-12" | "13-24" | "25-36";

export interface AgeRange {
  key: AgeRangeKey;
  label: string;
  min: number;
  max: number;
  emoji: string;
  color: string;
}

export interface UserState {
  user: { id: string; email: string } | null;
  babyProfile: BabyProfile | null;
  babyMonths: number | null;
  isLoading: boolean;
}
