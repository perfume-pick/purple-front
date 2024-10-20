import { S } from "../styles";
import { DetailPerfumeInfo } from "@/types/res/perfume";
import { usePerfumeDetailStore } from "@/store/perfumeDetailStore";
import { PerfumeDetailStore } from "@/store/types";

const Product = () => {
  const currentPerfumeInfo: DetailPerfumeInfo = usePerfumeDetailStore(
    (state: PerfumeDetailStore) => state.currentPerfumeInfo,
  );
  console.log(currentPerfumeInfo);

  return (
    <S.Wrapper>
      <img
        src={currentPerfumeInfo.imageUrl}
        alt={currentPerfumeInfo.perfumeName}
      />
      <S.TitleWrap>
        <span>{currentPerfumeInfo.brandName}</span>
        <span>{currentPerfumeInfo.perfumeName}</span>
      </S.TitleWrap>
    </S.Wrapper>
  );
};
export default Product;
