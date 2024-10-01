export interface PerfumeInfo {
  brandName: string;
  imageUrl: string;
}

export interface brandListPerfumeInfo extends PerfumeInfo {
  name: string;
  perfumeId: string;
  score?: number;
}

export interface PerfumeBrands {
  brandName: string;
  perfumes: brandListPerfumeInfo[];
}

export interface DetailPerfumeInfo extends PerfumeInfo {
  perfumeId: string;
  perfumeName: string;
  score?: number;
  averageScore?: number;
  accordName?: string;
}

export interface BrandPerfumeInfo {
  name: string;
  imageUrl: string;
  order?: number;
}
