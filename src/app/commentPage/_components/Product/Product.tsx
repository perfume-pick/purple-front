import { S } from "../styles";
import { useQuery } from "@tanstack/react-query";
import { getPerfumeDetail } from "@/service/client/perfumeDetail";

type Props = {
  perfumeId: string;
};

const Product = ({ perfumeId }: Props) => {
  // 향수 상세 정보 조회
  const { data: perfumeDetailInfo } = useQuery({
    queryKey: ["perfumeDetailInfo", perfumeId],
    queryFn: () => getPerfumeDetail(perfumeId),
    enabled: !!perfumeId,
    retry: false,
  });

  return (
    <S.Wrapper>
      <img
        src={perfumeDetailInfo.imageUrl}
        alt={perfumeDetailInfo.perfumeName}
      />
      <S.TitleWrap>
        <span>{perfumeDetailInfo.brandName}</span>
        <span>{perfumeDetailInfo.perfumeName}</span>
      </S.TitleWrap>
    </S.Wrapper>
  );
};
export default Product;
