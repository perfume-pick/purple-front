"use client";

import { S } from "../styles";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import {
  getSelectedBrandPerfumeList,
  postOnboardingRating,
} from "@/service/client/onBoarding";
import { brandListPerfumeInfo, PerfumeBrands } from "@/types/res/perfume";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import EvaluationBanner from "@/components/Evaluation/EvaluatoinBanner";
import ProgressBar from "@/components/atom/ProgressBar/ProgressBar";
import { RATING_MESSAGE_LIST } from "@/constant/onBoarding/step2RatingMessage";

type filterType = {
  brandName: string;
  isSelected: boolean;
};

const TwoStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBrands = searchParams.get("selectedBrands");

  const [perfumesBrandList, setPerfumesBrandList] = useState<PerfumeBrands[]>(
    [],
  );
  const [filterBtnList, setFilterBtnList] = useState<filterType[]>([]);
  const [selectedRatingCount, setSelectedRatingCount] = useState(0);
  const [ratingMessage, setRatingMessage] = useState("");

  // 데이터 fetching 및 초기 필터 버튼 설정
  useEffect(() => {
    const fetchData = async () => {
      if (!selectedBrands) {
        return;
      }
      const response = await getSelectedBrandPerfumeList(selectedBrands);
      const {
        responseData: { brands },
      } = response;

      const tempBrandPerfumesList = brands.map((item: PerfumeBrands) => {
        const transformedPerfumes = item.perfumes.map(
          (innerItem: brandListPerfumeInfo) => {
            return {
              ...innerItem,
              score: 0,
            };
          },
        );

        return {
          brandName: item.brandName,
          perfumes: transformedPerfumes,
        };
      });

      setPerfumesBrandList(tempBrandPerfumesList);

      // 필터 버튼 리스트 초기화
      const filterList = (
        tempBrandPerfumesList.length > 1
          ? [{ brandName: "전체보기", isSelected: true }]
          : []
      ).concat(
        tempBrandPerfumesList.map((item: PerfumeBrands) => ({
          brandName: item.brandName,
          isSelected: false,
        })),
      );
      setFilterBtnList(filterList);
    };

    fetchData();
  }, [selectedBrands]);

  // 필터링된 향수 리스트
  const filteredPerfumesBrandList = useMemo(() => {
    const selectedBtn = filterBtnList.find(btn => btn.isSelected);
    if (!selectedBtn) return perfumesBrandList;

    if (selectedBtn.brandName === "전체보기") {
      return perfumesBrandList;
    } else {
      return perfumesBrandList.filter(
        brand => brand.brandName === selectedBtn.brandName,
      );
    }
  }, [perfumesBrandList, filterBtnList]);

  const setRating = (newRate: number, brandName: string, perfumeId: string) => {
    setPerfumesBrandList(prevList =>
      prevList.map(brand => {
        if (brand.brandName === brandName) {
          return {
            ...brand,
            perfumes: brand.perfumes.map(perfume =>
              perfume.perfumeId === perfumeId
                ? { ...perfume, score: newRate }
                : perfume,
            ),
          };
        }
        return brand;
      }),
    );
  };

  useEffect(() => {
    // 선택된 별점 갯수 업데이트
    const selectedPerfumeCount = perfumesBrandList.reduce(
      (totalCount, item: PerfumeBrands) => {
        const ratedPerfumesCount = item.perfumes.filter(
          (perfume: brandListPerfumeInfo) => perfume.score && perfume.score > 0,
        ).length;
        return totalCount + ratedPerfumesCount;
      },
      0,
    );
    setSelectedRatingCount(selectedPerfumeCount);

    // 별점 갯수에 맞는 텍스트 업데이트
    const matchedItem = RATING_MESSAGE_LIST.filter(
      item => item.value <= selectedPerfumeCount,
    ).sort((a, b) => b.value - a.value)[0];

    setRatingMessage(matchedItem ? matchedItem.text : "기본 안내 메시지");
  }, [perfumesBrandList]);

  const handleClickFilterBtn = (brandName: string) => {
    setFilterBtnList(prevList =>
      prevList.map(btn => ({
        ...btn,
        isSelected: btn.brandName === brandName,
      })),
    );
  };

  const saveRatingValues = () => {
    const filteredHaveRatingList = perfumesBrandList.flatMap(
      (item: PerfumeBrands) =>
        item.perfumes.filter(
          (perfume: brandListPerfumeInfo) => perfume.score && perfume.score > 0,
        ),
    );

    const params = filteredHaveRatingList.map(perfumeInfo => {
      const { perfumeId, score } = perfumeInfo;
      return {
        perfumeId,
        score: !score ? 0 : score,
      };
    });

    postOnboardingRating(params).then(res => {
      if (res.status === 204) {
        router.push(`/onBoarding/step/success`, { scroll: false });
      }
    });
  };

  return (
    <>
      <NavHeader style={{ justifyContent: "end" }}>
        <S.MovePageBtn
          disabled={selectedRatingCount < 5}
          onClick={saveRatingValues}
        >
          다음으로
        </S.MovePageBtn>
      </NavHeader>
      <HeaderBottomContents>
        <S.Wrapper>
          <S.StepWrap>
            <div>취향 분석</div>
            <div className="middle-line"> | </div>
            <div>STEP 2</div>
          </S.StepWrap>
          <S.ProgressBarArea>
            <b>{selectedRatingCount}개</b>
            <ProgressBar
              progressValue={
                (selectedRatingCount / 5) * 100 > 100
                  ? 100
                  : (selectedRatingCount / 5) * 100
              }
            />
            <p>{ratingMessage}</p>
          </S.ProgressBarArea>
          <S.BottomFilterWrap>
            {filterBtnList.map(el => (
              <S.FilterWrap
                key={el.brandName}
                className={el.isSelected ? "active" : ""}
                onClick={() => handleClickFilterBtn(el.brandName)}
              >
                <div>{el.brandName}</div>
              </S.FilterWrap>
            ))}
          </S.BottomFilterWrap>
          <S.PerfumeListWrap>
            {filteredPerfumesBrandList.map(brand =>
              brand.perfumes.map(perfume => (
                <EvaluationBanner
                  key={perfume.perfumeId}
                  brandName={perfume.brandName}
                  perfumeName={perfume.name}
                  perfumeId={perfume.perfumeId}
                  imageUrl={perfume.imageUrl}
                  rating={perfume.score ?? 0}
                  setRating={setRating}
                />
              )),
            )}
          </S.PerfumeListWrap>
        </S.Wrapper>
      </HeaderBottomContents>
    </>
  );
};

export default TwoStep;
