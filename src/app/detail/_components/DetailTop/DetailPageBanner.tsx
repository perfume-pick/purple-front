import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { getPerfumeDetail } from "@/service/client/perfumeDetail";
import { useMemo } from "react";

type Props = {
  perfumeId: string;
};

function DetailPageBanner({ perfumeId }: Props) {
  // 향수 상세 정보 조회
  const { data: perfumeDetailInfo } = useQuery({
    queryKey: ["perfumeDetailInfo", perfumeId],
    queryFn: () => getPerfumeDetail(perfumeId),
    enabled: !!perfumeId,
    retry: false,
  });

  const accordName = useMemo((): string => {
    return perfumeDetailInfo?.accords[0]?.accordKoreanName ?? "";
  }, [perfumeDetailInfo]);

  return (
    <S.BannerWrapper>
      <S.BannerImage
        src={perfumeDetailInfo?.imageUrl}
        alt={perfumeDetailInfo?.perfumeName}
      />
      <S.BannerContentWrap>
        <span>{perfumeDetailInfo?.brandName}</span>
        <S.Title>{perfumeDetailInfo?.perfumeName}</S.Title>
        <S.ScoreWrap>
          <Star style={{ color: "red", marginRight: "0.5rem" }} />
          <div>{perfumeDetailInfo?.averageScore}</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <span>{accordName}</span>
          </S.CategoryWrap>
        </S.ScoreWrap>
      </S.BannerContentWrap>
    </S.BannerWrapper>
  );
}
export default DetailPageBanner;
