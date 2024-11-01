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
          count: number;
          percentage: number;
        },
      ];
      dislikedAccord: [
        {
          accordName: string;
          count: number;
          percentage: number;
        },
      ];
    };
  };
}
