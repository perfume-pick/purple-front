export interface ratingInfo {
  perfumeId: number;
  perfumeName: string;
  score: number;
}

export interface postOnboardingRatingRequestDTO {
  ratingInfos: ratingInfo[];
}
