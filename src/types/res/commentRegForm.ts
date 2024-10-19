export interface CommentRegForm {
  evaluationFields: CommonFields[];
  moods: Mood[];
}

interface CommonFields {
  fieldCode: string;
  fieldName: string;
  evaluationOptions: OptionFields[];
}

export interface OptionFields {
  optionCode: string;
  optionName: string;
}

export interface Mood {
  name: string;
}
