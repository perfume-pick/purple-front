import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";
import { usePerfumeDetailStore } from "@/store/perfumeDetailStore";
import { PerfumeDetailStore } from "@/store/types";
import { DetailPerfumeInfo } from "@/types/res/perfume";

function DetailPageBanner() {
  const currentPerfumeInfo: DetailPerfumeInfo = usePerfumeDetailStore(
    (state: PerfumeDetailStore) => state.currentPerfumeInfo,
  );

  return (
    <S.BannerWrapper>
      <S.BannerImage
        src={currentPerfumeInfo.imageUrl}
        alt={currentPerfumeInfo.perfumeName}
      />
      <S.BannerContentWrap>
        <span>{currentPerfumeInfo.brandName}</span>
        <S.Title>{currentPerfumeInfo.perfumeName}</S.Title>
        <S.ScoreWrap>
          <Star style={{ color: "red", marginRight: "0.5rem" }} />
          <div>{currentPerfumeInfo.averageScore}</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <span>{currentPerfumeInfo.accordName}</span>
          </S.CategoryWrap>
        </S.ScoreWrap>
      </S.BannerContentWrap>
    </S.BannerWrapper>
  );
}
export default DetailPageBanner;
