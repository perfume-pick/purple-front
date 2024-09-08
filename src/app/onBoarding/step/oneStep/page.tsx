"use client";

import { S } from "../styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ONBOARDING_ALERT } from "@/constant/alert/alertText";
import { getPerfumeBrands } from "@/service/client/onBoarding";
import ConfirmAlert from "@/components/alert/ConfirmAlert";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import Card from "./_components/Card/Card";

const OneStep = () => {
  const router = useRouter();
  const [openAlert, setOpenAlert] = useState(false);
  const [perfumeBrands, setPerfumeBrands] = useState([]);
  const [selectedBrandList, setSelectedBrandList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPerfumeBrands();
      const {
        data: {
          responseData: { perfumeBrands },
        },
      } = response;
      setPerfumeBrands(perfumeBrands);
    };

    fetchData();
  }, []);

  const handleClickCard = (brandName: string) => {
    const hasValue = selectedBrandList.some(name => brandName === name);

    if (hasValue) {
      setSelectedBrandList(
        selectedBrandList.filter(item => item !== brandName),
      );
    } else {
      setSelectedBrandList(prev => [...prev, brandName]);
    }
  };

  const handleClickNextBtn = () => {
    const selectPerfumesArrayString = selectedBrandList.join("/");
    if (selectedBrandList.length > 0) {
      router.push(
        `/onBoarding/step/twoStep?selectedBrands=${selectPerfumesArrayString}`,
      );
    } else {
      setOpenAlert(true);
    }
  };

  return (
    <>
      {/* TODO : 모바일 헤더 템플릿 삭제 시 한번 더 수정 필요 */}
      <NavHeader style={{ justifyContent: "end" }}>
        {/* TODO : 브랜드 카드 선택 시 '건너뛰기' -> '다음으로' 로 변경 해야함 */}
        <span onClick={handleClickNextBtn} style={{ fontWeight: "bold" }}>
          {selectedBrandList.length > 0 ? "다음으로" : "건너뛰기"}
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
            <div className="middle-line"> | </div>
            <div>STEP 1</div>
          </S.StepWrap>
          <S.StepTitleWrap>
            <h1>
              보유하고 있는 브랜드를
              <br /> 선택해주세요.
            </h1>
            <h2>
              얼마나 많은 향을 시향해보셨나요?
              <br /> %NAME%님의 향수 취향이 궁금해요!
            </h2>
          </S.StepTitleWrap>
        </S.Wrapper>
        <S.CardWrap>
          {perfumeBrands.map(({ brandName, imageUrl }, index) => {
            return (
              <Card
                key={index}
                brandName={brandName}
                imageUrl={imageUrl}
                isSelected={selectedBrandList.some(item => item === brandName)}
                handleClickCard={() => handleClickCard(brandName)}
              />
            );
          })}
        </S.CardWrap>
      </HeaderBottomContents>
    </>
  );
};
export default OneStep;
