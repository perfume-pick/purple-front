import { useQuery } from "@tanstack/react-query";
import { S } from "./styles";
import { getTop3ReviewBrands } from "@/service/client/userInfo";

const Brand = () => {
  const { data: brands } = useQuery({
    queryKey: ["top3ReviewBrands"],
    queryFn: getTop3ReviewBrands,
  });

  const { reviewedBrandDTOs } = brands ?? { reviewedBrandDTOs: [] };

  const brandPerfumeTotal =
    reviewedBrandDTOs.reduce((acc, cur) => acc + cur.reviewCounts, 0) ?? 0;

  const sorted = reviewedBrandDTOs.sort((a, b) => a.order - b.order);

  return (
    <S.Wrapper>
      <S.Title>브랜드</S.Title>
      <S.BrandSegmentContainer>
        {
          sorted.length > 0
            ? sorted.map(({ brandName, reviewCounts }, index) => (
                <S.BrandSegment key={brandName}>
                  <S.BrandSegmentLeftBox>
                    <img alt="medal rank" src={brandMedal[index]} />
                    <span>{brandName}</span>
                  </S.BrandSegmentLeftBox>
                  <div>
                    <S.BrandCount isFirst={index === 0}>
                      {reviewCounts}개
                    </S.BrandCount>{" "}
                    <S.BrandRatio isFirst={index === 0}>
                      ({Math.floor((reviewCounts / brandPerfumeTotal) * 100)}%)
                    </S.BrandRatio>
                  </div>
                </S.BrandSegment>
              ))
            : "브랜드가 없습니다. 평가해주세요" //! 브랜드가 없는경우 기획에 물어보기
        }
        <S.BrandDescription>* 브랜드별 향수 평가 수</S.BrandDescription>
      </S.BrandSegmentContainer>
    </S.Wrapper>
  );
};

const brandMedal = [
  "/assets/images/gold_medal.png",
  "/assets/images/silver_medal.png",
  "/assets/images/bronze_medal.png",
];

export default Brand;
