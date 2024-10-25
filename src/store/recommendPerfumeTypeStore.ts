import { create } from "zustand";
import { Taps, TapTypes } from "@/constant/mainPage.const";

interface RecommendPerfumeType {
  perfumeType: TapTypes;
  setPerfumeType: (newPerfumeType: TapTypes) => void;
}

export const useRecommendPerfumeType = create<RecommendPerfumeType>(set => ({
  perfumeType: Taps[0].type,
  setPerfumeType: (newPerfumeType: TapTypes) => {
    set(() => ({ perfumeType: newPerfumeType }));
  },
}));
