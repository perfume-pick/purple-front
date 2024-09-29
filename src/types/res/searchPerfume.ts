import { DetailPerfumeInfo } from "@/types/res/perfume";

export interface SearchHistory {
  order: number;
  keyword: string;
}

export interface VisitHistory {
  order: number;
  perfume: DetailPerfumeInfo;
}
