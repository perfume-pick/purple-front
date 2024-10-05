export interface PerfumeAccordsNote {
  accords: AccordInfo[];
  notes: NoteInfo[];
}

interface AccordInfo {
  order: number;
  accordName: string;
  accordValue: number;
}

interface NoteInfo {
  name: string;
  type: "TOP" | "BOTTOM" | "MIDDLE";
}

export interface FragranticaEvaluation {
  fragranticaEvaluation: FragranticaEvaluationItem[];
}

interface FragranticaEvaluationItem {
  fieldCode: string;
  fieldName: string;
  mostVotedOptions: mostVotedOptionInfo[];
}

interface mostVotedOptionInfo {
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

interface EvaluationStatisticInfo {
  fieldCode: string;
  fieldName: string;
  evaluationOptions: EvaluationOptionInfo[];
}

interface EvaluationOptionInfo {
  order: number;
  optionCode: string;
  optionName: string;
  votePercent: number;
}
