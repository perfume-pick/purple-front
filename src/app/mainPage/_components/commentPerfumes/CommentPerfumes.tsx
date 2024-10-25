import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getRecommendPerfumesByComment } from "@/service/client/recommendPerfume";
import Perfume from "../perfume/Perfume";

const CommentPerfumes = () => {
  const { data } = useQuery({
    queryKey: ["recommendPerfumes", "COMMENT"],
    queryFn: getRecommendPerfumesByComment,
  });

  const {
    // timeStamp,
    responseData: { perfumes },
  } = data ?? { timeStamp: null, responseData: { perfumes: [] } };

  console.log(data);

  return (
    <S.Wrapper>
      {perfumes.map(perfume => (
        <Perfume key={perfume.perfumeId} {...perfume} />
      ))}
    </S.Wrapper>
  );
};

export default CommentPerfumes;
