"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { S } from "../styles";
import { Card } from "./_components/Card/Card";
import { useState } from "react";
import ConfirmAlert from "@/components/alert/ConfirnAlert";
import { ONBOARDING_ALERT } from "@/constant/alert/alertText";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";

const OneStep = () => {
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      {/* TODO : 모바일 헤더 템플릿 삭제 시 한번 더 수정 필요 */}
      <NavHeader style={{ justifyContent: "end" }}>
        {/* TODO : 브랜드 카드 선택 시 '건너뛰기' -> '다음으로' 로 변경 해야함 */}
        <span onClick={() => setOpenAlert(true)} style={{ fontWeight: "bold" }}>
          건너뛰기
        </span>
      </NavHeader>
      <HeaderBottomContents>
        {openAlert && (
          <ConfirmAlert
            setOpenAlert={setOpenAlert}
            message={ONBOARDING_ALERT}
          />
        )}
        <S.Wrapper>
          <S.StepWrap>
            <div>취향 분석</div>
            {/* TODO : 글자 사이 스타일 | 수정 */}
            <div> | </div>
            <div>STEP 1</div>
          </S.StepWrap>
          <S.StepTitleWrap>
            <div>
              보유하고 있는 브랜드를
              <br /> 선택해주세요.
            </div>
            <div>내가 기린 그림은 진짜 잘 그린 기린입니다.</div>
          </S.StepTitleWrap>
        </S.Wrapper>
        <S.CardWrap>
          <Card />
          <Card />
          <Card />
        </S.CardWrap>
      </HeaderBottomContents>
    </>
  );
};
export default OneStep;
