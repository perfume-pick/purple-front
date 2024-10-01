"use client";

import { S } from "../styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { ONBOARDING_ALERT } from "@/constant/alert/alertText";
import { getPerfumeBrands } from "@/service/client/onBoarding";
import ConfirmAlert from "@/components/alert/ConfirmAlert";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import Card from "./_components/Card/Card";
import { BrandPerfumeInfo } from "@/types/res/perfume";
import { RestResponseType } from "@/types/res/response";

const OneStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nickname = searchParams.get("username");

  const [openAlert, setOpenAlert] = useState(false);
  const [perfumeBrands, setPerfumeBrands] = useState<BrandPerfumeInfo[]>([]);
  const [selectedBrandList, setSelectedBrandList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPerfumeBrands();
      const {
        responseData: { brands },
      } = response;
      setPerfumeBrands(brands);
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
              <br /> {nickname}님의 향수 취향이 궁금해요!
            </h2>
          </S.StepTitleWrap>
        </S.Wrapper>
        <S.CardWrap>
          {perfumeBrands.map(({ name, imageUrl, order }) => {
            return (
              <Card
                key={order}
                brandName={name}
                imageUrl={imageUrl}
                isSelected={selectedBrandList.some(item => item === name)}
                handleClickCard={() => handleClickCard(name)}
              />
            );
          })}
        </S.CardWrap>
      </HeaderBottomContents>
    </>
  );
};
export default OneStep;
