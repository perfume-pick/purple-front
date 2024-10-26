export interface SimpleReviewReg {
  perfumeId: number;
  score: number;
  content: string;
}

export type SimpleReviewRegWithoutPerfumeId = Omit<
  SimpleReviewReg,
  "perfumeId"
>;

export interface DetailReviewReg {
  perfumeId: number;
  score: number;
  content: string;
  evaluationFieldVOs: EvaluationFieldItem[];
  moodNames: string[];
}

export type DetailReviewRegWithoutPerfumeId = Omit<
  DetailReviewReg,
  "perfumeId"
>;

interface EvaluationFieldItem {
  fieldCode: string;
  optionCodes: string[];
}
