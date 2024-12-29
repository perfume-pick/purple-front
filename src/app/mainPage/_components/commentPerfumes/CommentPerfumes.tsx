import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getRecommendPerfumesByComment } from "@/service/client/recommendPerfume";
import Perfume from "../perfume/Perfume";
import { useRecommendPerfumeType } from "@/store/recommendPerfumeTypeStore";

const CommentPerfumes = () => {
  const { perfumeType } = useRecommendPerfumeType();

  const { data } = useQuery({
    queryKey: ["recommendPerfumes", perfumeType],
    queryFn: getRecommendPerfumesByComment,
  });

  const {
    responseData: { perfumes },
  } = data ?? { timeStamp: null, responseData: { perfumes: [] } };

  return (
    <S.Wrapper>
      {perfumes.map((perfume, index) => (
        <Perfume key={perfume.perfumeId} index={index} {...perfume} />
      ))}
    </S.Wrapper>
  );
};

export default CommentPerfumes;
