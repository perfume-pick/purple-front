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
