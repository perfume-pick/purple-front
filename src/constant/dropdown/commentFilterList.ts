import { DropdownType } from "@/types/dropdownTypes";

export const COMMENT_FILTER_LIST: DropdownType[] = [
  {
    title: "최근 등록순",
    code: "LATEST",
  },
  {
    title: "좋아요 많은순",
    code: "LIKED",
  },
  {
    title: "내 평가 높은순",
    code: "MY_STAR_RATING_HIGH",
  },
  {
    title: "내 평가 낮은순",
    code: "MY_STAR_RATING_LOW",
  },
];

export const USER_COMMENT_FILTER_LIST: DropdownType[] = [
  {
    title: "좋아요순",
    code: "LIKED",
  },
  {
    title: "최신순",
    code: "LATEST",
  },
  {
    title: "별점높은순",
    code: "STAR_RATING_HIGH",
  },
  {
    title: "별점낮은순",
    code: "STAR_RATING_LOW",
  },
] as const;

export const COMMENT_DELETE_FILTER: DropdownType[] = [
  {
    title: "코멘트 삭제",
    code: "DELETE_COMMENT",
  },
] as const;

export const COMMENT_BOX_FILTER: DropdownType[] = [
  {
    title: "코멘트 수정",
    code: "EDIT_COMMENT",
  },
  ...COMMENT_DELETE_FILTER,
];

export const COMMENT_BOX_FILTER_WITH_REPORT: DropdownType[] = [
  {
    title: "코멘트 신고",
    code: "REPORT_COMMENT",
  },
];

export const COMMENT_BOX_FILTER_WITH_CANCEL_REPORT: DropdownType[] = [
  {
    title: "코멘트 신고 취소",
    code: "CANCEL_REPORT_COMMENT",
  },
];
