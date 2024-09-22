export interface PerfumeInfo {
  brandName: string;
  imageUrl: string;
}

export interface PerfumeBrands {
  perfumeInfo: PerfumeInfo[];
}

export interface brandPerfumesDTOs {}

export interface DetailPerfumeInfo extends PerfumeInfo {
  perfumeId: number;
  perfumeName: string;
  score?: number;
}

export interface BrandPerfumeInfo {
  brandName: string;
  perfumes: DetailPerfumeInfo[];
}
