import CommentPerfumes from "../commentPerfumes/CommentPerfumes";
import NotePerfumes from "../notePerfumes/NotePerfumes";
import { useRecommendPerfumeType } from "@/store/recommendPerfumeTypeStore";

const Perfumes = () => {
  const { perfumeType } = useRecommendPerfumeType();

  return perfumeType === "note" ? <NotePerfumes /> : <CommentPerfumes />;
};

export default Perfumes;
