import { create } from "zustand";
import { CommentRegForm } from "@/types/res/commentRegForm";

export const useCommentRegStore = create(set => ({
  commentEvaluationForm: [],

  updateCommentEvaluationForm: (newForm: CommentRegForm) =>
    set(() => ({ commentEvaluationForm: newForm })),
}));
