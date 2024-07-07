import { DropdownType } from "@/types/dropdownTypes";

export const COMMENT_FILTER_LIST: DropdownType[] = [
  {
    title: "최근 등록순",
    code: "RECENTLY_REG",
  },
  {
    title: "좋아요 많은순",
    code: "MOST_LIKED",
  },
  {
    title: "내 평가 높은순",
    code: "MY_HIGH_RATED",
  },
  {
    title: "내 평가 낮은순",
    code: "MY_LOW_RATED",
  },
];

export const USER_COMMENT_FILTER_LIST: DropdownType[] = [
  {
    title: "좋아요순",
    code: "MOST_LIKED",
  },
  {
    title: "최신순",
    code: "RECENTLY_REG",
  },
  {
    title: "별점높은순",
    code: "HIGH_RATED",
  },
  {
    title: "별점낮은순",
    code: "LOW_RATED",
  },
];

export const COMMENT_BOX_FILTER: string[] = ["코멘트 수정", "코멘트 삭제"];
