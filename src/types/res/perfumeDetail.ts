export interface PerfumeDetailInfo {
  perfumeId: string;
  perfumeName: string;
  brandName: string;
  imageUrl: string;
  averageScore: number;
  accords: AccordInfo[];
  notes: NoteInfo[];
}

export interface AccordInfo {
  order: number;
  accordName: string;
  accordValue: number;
  accordKoreanName: string;
}

export interface NoteInfo {
  name: string;
  type: NoteType;
  koreanName: string;
}

export type NoteType = "TOP" | "MIDDLE" | "BASE" | "NOT_DEFINED";

export interface FragranticaEvaluation {
  fragranticaEvaluation: FragranticaEvaluationItem[];
}

export interface FragranticaEvaluationItem {
  fieldCode: string;
  fieldName: string;
  mostVotedOptions: mostVotedOptionInfo[];
}

export interface mostVotedOptionInfo {
  optionCode: string;
  optionName: string;
  votePercent: number;
}

export interface Statistic {
  starRatingStatistics: StarRatingStatisticInfo[];
  evaluationStatistics: EvaluationStatisticInfo[];
}

interface StarRatingStatisticInfo {
  score: number;
  votePercent: number;
}

export interface EvaluationStatisticInfo {
  fieldCode: string;
  fieldName: string;
  evaluationOptions: EvaluationOptionInfo[];
}

export interface EvaluationOptionInfo {
  order: number;
  optionCode: string;
  optionName: string;
  votePercent: number;
}
