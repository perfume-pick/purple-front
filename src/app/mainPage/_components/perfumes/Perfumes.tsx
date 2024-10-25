import CommentPerfumes from "../commentPerfumes/CommentPerfumes";
import { useRecommendPerfumeType } from "@/store/recommendPerfumeTypeStore";

const Perfumes = () => {
  const { perfumeType } = useRecommendPerfumeType();

  return <>{perfumeType === "comment" ? <CommentPerfumes /> : null}</>;
};

export default Perfumes;
