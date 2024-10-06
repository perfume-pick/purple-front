import { create } from "zustand";
import { PerfumeDetailStore } from "@/store/types";

export const usePerfumeDetailStore = create<PerfumeDetailStore>(set => ({
  currentPerfumeInfo: {},

  updatePerfumeInfo: (newPerfumeInfo: {}) =>
    set(() => ({ currentPerfumeInfo: newPerfumeInfo })),
  removePerfumeInfo: () => set({ currentPerfumeInfo: {} }),
}));
