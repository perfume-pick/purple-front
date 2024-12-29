export interface Profile {
  timeStamp: string;
  responseData: {
    nickname: string;
    imageUrl: string | null;
    email: string;
  };
}

export interface ReviewCount {
  timeStamp: string;
  responseData: {
    currentUserReviewCounts: number;
    averageUserReviewCounts: number;
  };
}

export interface UserAccords {
  timeStamp: string;
  responseData: {
    userAccord: {
      preferredAccord: [
        {
          accordName: string;
          accordKoreanName: string;
          count: number;
          percentage: number;
        },
      ];
      dislikedAccord: [
        {
          accordName: string;
          accordKoreanName: string;
          count: number;
          percentage: number;
        },
      ];
    };
  };
}

export interface Top3ReviewBrands {
  timeStamp: string;
  responseData: {
    reviewedBrandDTOs: [
      {
        order: number;
        brandName: string;
        reviewCounts: number;
      },
    ];
  };
}
