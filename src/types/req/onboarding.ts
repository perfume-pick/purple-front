export interface ratingInfo {
  perfumeId: string;
  score: number;
}

export interface postOnboardingRatingRequestDTO {
  starRatingVOs: ratingInfo[];
}
