export interface Reviews {
  reviews: Review[];
}

interface ReviewCommonFields {
  reviewId: string;
  reviewType: "SIMPLE" | "DETAIL";
  score: number;
  content: string;
  perfumeEvaluation: PerfumeEvaluationInfo[];
  moodNames: string[];
}

type ExtendReview<T> = ReviewCommonFields & T;

export type Review = ExtendReview<{
  nickname: string;
  imageUrl: string;
  date: string;
  isComplained: boolean;
  isLiked: boolean;
  likeCount: number;
  isCurrentUserReview: boolean;
}>;

export type MyReview = ReviewCommonFields;

interface PerfumeEvaluationInfo {
  fieldName: string;
  options: { optionName: string }[];
}
