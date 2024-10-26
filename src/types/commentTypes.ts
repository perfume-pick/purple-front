import { OptionFields } from "./res/commentRegForm";

export interface RadioType {
  persistence?: string;
  residualScent?: string;
  gender?: string;
}

export interface CheckboxType {
  mood?: { name: string }[];
  season?: OptionFields[];
}

export interface FieldDefinitionsType {
  rating?: number;
  textReview?: string;
  persistence?: string;
  residualScent?: string;
  season?: string[];
  gender?: string;
  mood?: string[];
}
