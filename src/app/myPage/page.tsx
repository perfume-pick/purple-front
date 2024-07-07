"use client";

import { S } from "./styles";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import ProfileBox from "./_components/ProfileBox/ProfileBox";
import PurfumeScroll from "./_components/PurfumeScroll/PurfumeScroll";
import TasteStatisticBox from "@/components/organism/TasteStatisticBox/TasteStatisticBox";
import Link from "next/link";
import NavHeaderInner from "../../components/navHeaderLayout/NavHeaderInner";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";

const MyPage = () => {
  const route = useRouter();
  // const [pageButtonList, setPageButtonList] = useState([
  //   {
  //     title: "평가향수",
  //     countNum: 22,
  //     path: "/evaluationPerfumePage",
  //   },
  //   {
  //     title: "작성한 코멘트",
  //     countNum: 55,
  //     path: "/myCommentsPage",
  //   },
  // ]);
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
    <S.Wrapper>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="마이페이지" />
      </NavHeader>
      <HeaderBottomContents>
        <S.ProfileBoxOuter>
          <ProfileBox onClick={() => route.push("/myPage/profileSetting")} />
        </S.ProfileBoxOuter>
        <S.Title>취향통계</S.Title>
        <S.TasteStatisticsWrap>
          <TasteStatisticBox chartData={tempChartData} reviewsNum={30}>
            <Link href="/myPage/tasteAnalysisPage">취향 분석 보기</Link>
          </TasteStatisticBox>
        </S.TasteStatisticsWrap>
        {/* TODO: pageButtonList 데이터로 변경 필요 */}
        {[
          {
            title: "평가향수",
            countNum: 22,
            path: "/evaluationPerfumePage",
          },
          {
            title: "작성한 코멘트",
            countNum: 55,
            path: "/myCommentsPage",
          },
        ].map((button, index) => {
          return (
            <S.TitleButton key={index}>
              <Link href={`/myPage/${button.path}`}>
                <p>
                  {button.title}
                  <span>({button.countNum})</span>
                </p>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: "2.4rem", color: "#919193" }}
                />
              </Link>
            </S.TitleButton>
          );
        })}
        <PurfumeScroll />
      </HeaderBottomContents>
    </S.Wrapper>
  );
};

export default MyPage;
