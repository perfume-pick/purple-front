export interface ratingInfo {
  perfumeId: number;
  perfumeName: string;
  score: number;
}

export interface setOnboardingRatingRequestDTO {
  ratingInfos: ratingInfo[];
}
