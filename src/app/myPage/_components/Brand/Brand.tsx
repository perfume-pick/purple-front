import { S } from "./styles";

const Brand = () => {
  const brandPerfumeTotal = brands.reduce(
    (acc, cur) => acc + cur.perfumeCount,
    0,
  );

  return (
    <S.Wrapper>
      <S.Title>브랜드</S.Title>
      <S.BrandSegmentContainer>
        {brands.map(({ id, label, perfumeCount }, index) => (
          <S.BrandSegment key={id}>
            <S.BrandSegmentLeftBox>
              <img alt="medal rank" src={brandMedal[index]} />
              <span>{label}</span>
            </S.BrandSegmentLeftBox>
            <div>
              <S.BrandCount isFirst={index === 0}>
                {perfumeCount}개
              </S.BrandCount>{" "}
              <S.BrandRatio isFirst={index === 0}>
                ({Math.floor((perfumeCount / brandPerfumeTotal) * 100)}%)
              </S.BrandRatio>
            </div>
          </S.BrandSegment>
        ))}
        <S.BrandDescription>* 브랜드별 향수 평가 수</S.BrandDescription>
      </S.BrandSegmentContainer>
    </S.Wrapper>
  );
};

const brands = [
  { id: "zomalon1", label: "조말론", perfumeCount: 10 },
  { id: "zomalon2", label: "조말론", perfumeCount: 10 },
  { id: "zomalon3", label: "조말론", perfumeCount: 10 },
] as const;

const brandMedal = [
  "/assets/images/gold_medal.png",
  "/assets/images/silver_medal.png",
  "/assets/images/bronze_medal.png",
];

export default Brand;
