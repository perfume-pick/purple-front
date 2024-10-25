export const Taps = [
  { label: "노트 기반", type: "note" },
  { label: "코멘트 수", type: "comment" },
] as const;

export type TapTypes = (typeof Taps)[number]["type"];
