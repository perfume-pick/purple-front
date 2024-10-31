import { create } from "zustand";
import { CommentRegForm } from "@/types/res/commentRegForm";

// 스토어 타입 정의
interface CommentRegStore {
  commentEvaluationForm: CommentRegForm | null;
  updateCommentEvaluationForm: (newForm: CommentRegForm) => void;
}

// 스토어 생성
export const useCommentRegStore = create<CommentRegStore>(set => ({
  commentEvaluationForm: null,

  updateCommentEvaluationForm: (newForm: CommentRegForm) =>
    set(() => ({ commentEvaluationForm: newForm })),
}));
