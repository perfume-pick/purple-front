import { create } from "zustand";
import { PerfumeDetailStore } from "@/store/types";
import { DetailPerfumeInfo } from "@/types/res/perfume";

const initialPerfumeInfo: DetailPerfumeInfo = {
  perfumeId: "",
  perfumeName: "",
  brandName: "",
  imageUrl: "",
  averageScore: 0,
  accordName: "",
};

export const usePerfumeDetailStore = create<PerfumeDetailStore>(set => ({
  currentPerfumeInfo: initialPerfumeInfo,

  updatePerfumeInfo: (newPerfumeInfo: DetailPerfumeInfo) =>
    set(() => ({ currentPerfumeInfo: newPerfumeInfo })),
  removePerfumeInfo: () => set({ currentPerfumeInfo: initialPerfumeInfo }),
}));
