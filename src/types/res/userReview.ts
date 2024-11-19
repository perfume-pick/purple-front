export type UserReviews = {
  timeStamp: string;
  responseData: {
    reviews: UserReview[];
  };
};

export type UserReview = {
  reviewId: string;
  brandName: string;
  perfumeId: string;
  perfumeName: string;
  perfumeImageUrl: string;
  reviewType: "SIMPLE" | "DETAIL" | "ONBOARDING";
  score: number;
  content: string;
  perfumeEvaluations: [
    {
      fieldName: string;
      options: [
        {
          optionName: string;
        },
      ];
    },
  ];
  moodNames: string[];
  isComplained: boolean;
  isLiked: boolean;
  likeCount: number;
  date: string;
};
