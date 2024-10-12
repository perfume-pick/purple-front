export const CommentType = {
  SIMPLE: "간단한 코멘트",
  DETAIL: "자세한 코멘트",
} as const;

export const SeasonOptions = [
  {
    optionCode: "EO301",
    optionName: "봄",
    color: "#9FE584",
  },
  {
    optionCode: "EO302",
    optionName: "여름",
    color: "#FC958A",
  },
  {
    optionCode: "EO303",
    optionName: "가을",
    color: "#F9BE6E",
  },
  {
    optionCode: "EO304",
    optionName: "겨울",
    color: "#78D6F0",
  },
  {
    optionCode: "EO305",
    optionName: "낮",
    color: "#FCF487",
  },
  {
    optionCode: "EO306",
    optionName: "밤",
    color: "#447BA3",
  },
];

export const MoodCheckboxList = {
  CUTE: "귀여운",
  SENSUAL: "관능적인",
  INNOCENT: "청순한",
  ELEGANT: "우아한",
  SEXY: "섹시한",
  SPORTY: "스포티한",
  DIGNIFIED: "중후한",
  MASCULINE: "마초적인",
  CASUAL: "캐쥬얼한",
  COMFORTABLE: "편안한",
  NEAT: "깔끔한",
  SOPHISTICATED: "세련된",
} as const;

export const PersistenceOptions = [
  {
    value: "1",
    optionCode: "EO101",
    optionName: "매우 약해요",
    color: "#BEBDFB",
  },
  {
    value: "2",
    optionCode: "EO102",
    optionName: "약해요",
    color: "#AAA9FF",
  },
  {
    value: "3",
    optionCode: "EO103",
    optionName: "보통이에요",
    color: "#9693FF",
  },
  {
    value: "4",
    optionCode: "EO104",
    optionName: "오래가요",
    color: "#817DFF",
  },
  {
    value: "5",
    optionCode: "EO105",
    optionName: "매우 오래가요",
    color: "#6863FF",
  },
];

export const ResidualScentOptions = [
  {
    value: "1",
    optionCode: "EO201",
    optionName: "향 여운이 약해요",
    color: "#FFE2A9",
  },
  {
    value: "2",
    optionCode: "EO202",
    optionName: "보통이에요",
    color: "#FFD493",
  },
  {
    value: "3",
    optionCode: "EO203",
    optionName: "향 여운이 강해요",
    color: "#FFCB7D",
  },
  {
    value: "4",
    optionCode: "EO204",
    optionName: "향 여운이 매우 강해요",
    color: "#FFB763",
  },
];

export const GenderOptions = [
  {
    value: "1",
    optionCode: "EO401",
    optionName: "남성적이에요",
    color: "#74ACFF",
  },
  {
    value: "2",
    optionCode: "EO402",
    optionName: "남성에 가까워요",
    color: "#9FC5FD",
  },
  {
    value: "3",
    optionCode: "EO403",
    optionName: "중성적이에요",
    color: "#B29FFD",
  },
  {
    value: "4",
    optionCode: "EO404",
    optionName: "여성에 가까워요",
    color: "#FDB09F",
  },
  {
    value: "5",
    optionCode: "EO405",
    optionName: "여성적이에요",
    color: "#FD9F9F",
  },
];

// commentPage 자세한 코멘트 선택 리스트
export const FieldDefinitions = {
  rating: {
    label: "이 향수 어때요?",
    name: "rating",
    type: "number",
  },
  textReview: {
    label: "리뷰 한줄평",
    name: "textReview",
    type: "text",
  },
  persistence: {
    fieldCode: "EF001",
    fieldName: "지속력",
    name: "persistence",
    type: "radio",
    options: PersistenceOptions,
  },
  residualScent: {
    fieldCode: "EF002",
    fieldName: "시야주",
    name: "residualScent",
    type: "radio",
    options: ResidualScentOptions,
  },
  season: {
    fieldCode: "EF003",
    fieldName: "계절감/시간",
    name: "season",
    type: "checkbox",
    options: SeasonOptions,
  },
  gender: {
    fieldCode: "EF004",
    fieldName: "성별",
    name: "gender",
    type: "radio",
    options: GenderOptions,
  },
  mood: {
    label: "향수에 어울리는 분위기",
    name: "mood",
    type: "checkbox",
    options: MoodCheckboxList,
  },
};
