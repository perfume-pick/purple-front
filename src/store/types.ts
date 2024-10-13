import { DetailPerfumeInfo } from "@/types/res/perfume";

export type PerfumeDetailStore = {
  currentPerfumeInfo: DetailPerfumeInfo;
  updatePerfumeInfo: (newPerfumeInfo: DetailPerfumeInfo) => void;
  removePerfumeInfo: () => void;
};
