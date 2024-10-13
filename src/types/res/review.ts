export interface Reviews {
  reviews: Review[];
}

export interface Review {
  reviewId: string;
  nickname: string;
  imageUrl: string;
  date: string;
  score: number;
  content: string;
  perfumeEvaluation: PerfumeEvaluationInfo[];
  moodNames: string[];
  isComplained: boolean;
  isLiked: boolean;
  likeCount: number;
  reviewType: string;
}

interface PerfumeEvaluationInfo {
  fieldName: string;
  options: { optionName: string }[];
}
