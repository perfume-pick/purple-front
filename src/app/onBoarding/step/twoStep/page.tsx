"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { S } from "../styles";
import EvaluationBanner from "@/components/Evaluation/EvaluatoinBanner";
import { FilterType } from "@/constant/onBoarding.const";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";

const TwoStep = () => {
  return (
    <>
      {/* TODO : 모바일 헤더 템플릿 삭제 시 한번 더 수정 필요 */}
      <NavHeader style={{ justifyContent: "end" }}>
        {/* TODO : 브랜드 카드 선택 시 '건너뛰기' -> '다음으로' 로 변경 해야함 */}
        <span style={{ fontWeight: "bold" }}>다음으로</span>
      </NavHeader>
      <HeaderBottomContents>
        <S.Wrapper>
          <S.StepWrap>
            <div>취향 분석</div>
            {/* TODO : 글자 사이 스타일 | 수정 */}
            <div> | </div>
            <div>STEP 2</div>
          </S.StepWrap>
          <S.StepTitleWrap>
            <div>경험한 향수를 평가해주세요</div>
            <div>N개 이상 선택하면 취향을 분석해드려요!</div>
          </S.StepTitleWrap>
          <div>그래프</div>
          <S.BottomFilterWrap>
            {Object.values(FilterType).map((el, idx) => (
              <S.FilterWrap key={idx}>
                <div>{el}</div>
              </S.FilterWrap>
            ))}
          </S.BottomFilterWrap>
          <EvaluationBanner />
        </S.Wrapper>
      </HeaderBottomContents>
    </>
  );
};
export default TwoStep;
