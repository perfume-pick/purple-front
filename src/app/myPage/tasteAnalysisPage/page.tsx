"use client";

import { S } from "./styles";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import TasteStatisticBox from "@/components/organism/TasteStatisticBox/TasteStatisticBox";
import NavHeaderInner from "../../../components/navHeaderLayout/NavHeaderInner";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";

const TasteAnalysisPage = () => {
  {
    /* TODO: 임시 데이터 */
  }
  const tempChartData = [
    {
      tasteName: "구르망",
      ranking: 1,
      score: 137,
      percentageScore: 42,
      color: "#FF4647",
    },
    {
      tasteName: "시트러스",
      ranking: 2,
      score: 137,
      percentageScore: 33,
      color: "rgba(255, 0, 0, 0.3)",
    },
    {
      tasteName: "플로럴",
      ranking: 3,
      score: 35,
      percentageScore: 25,
      color: "rgba(255, 0, 0, 0.15)",
    },
  ];

  return (
    <>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="취향분석" />
      </NavHeader>
      <HeaderBottomContents>
        <S.StaticsSection>
          <S.Title>선호노트</S.Title>
          <S.TasteStatisticsWrap>
            <TasteStatisticBox chartData={tempChartData} reviewsNum={30} />
          </S.TasteStatisticsWrap>
        </S.StaticsSection>
        <S.StaticsSection>
          <S.Title>불호노트</S.Title>
          <S.TasteStatisticsWrap>
            <TasteStatisticBox chartData={tempChartData} reviewsNum={30} />
          </S.TasteStatisticsWrap>
        </S.StaticsSection>
        <S.StaticsSection>
          <S.Title>선호 브랜드</S.Title>
          <S.TasteStatisticsWrap>
            <TasteStatisticBox chartData={tempChartData} reviewsNum={30} />
          </S.TasteStatisticsWrap>
        </S.StaticsSection>
      </HeaderBottomContents>
    </>
  );
};

export default TasteAnalysisPage;
