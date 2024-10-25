export interface UserAccord {
  accordName: string;
  order: 0;
}

export interface Perfume {
  perfumeId: string;
  name: string;
  brandName: string;
  imageUrl: string;
  averageScore: number;
  accordNames: string[] | null;
}

export interface RecommendPerfumeByAccord {
  timeStamp: string;
  responseData: {
    userAccords: UserAccord[];
    perfumes: Perfume[];
  };
}

export interface RecommendPerfumeByComment {
  timeStamp: string;
  responseData: {
    perfumes: Perfume[];
  };
}
