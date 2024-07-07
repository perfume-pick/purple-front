"use client";

import React, { useState, useEffect } from "react";
import Star from "@/components/atom/svg/Star/Star";
import styled from "@emotion/styled";

const AVR_RATE = 2; // 평균 평점.
const STAR_SIZE = 40; // 별의 최대 크기
const NUM_STARS = 5; // 별의 최대 개수

const calcStarRates = () => {
  let tempStarRatesArr = Array(NUM_STARS).fill(0);
  let starVerScore = (AVR_RATE / NUM_STARS) * (STAR_SIZE * NUM_STARS); // 평점을 별의 전체 크기로 변환
  let idx = 0;

  while (starVerScore > STAR_SIZE) {
    tempStarRatesArr[idx] = STAR_SIZE;
    idx += 1;
    starVerScore -= STAR_SIZE;
  }

  if (idx < NUM_STARS) {
    tempStarRatesArr[idx] = starVerScore;
  }

  return tempStarRatesArr;
};

const Rating_2 = () => {
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]); // 별점 리스트 상태입니다.

  useEffect(() => {
    setRatesResArr(calcStarRates()); // 별점 리스트는 첫 렌더링 때 한번만 상태를 설정해줍니다.
  }, []);

  return (
    <S.RatingWrap>
      {ratesResArr.map((value, index) => {
        return (
          <Star size={STAR_SIZE} value={value} index={index} key={index} />
        );
      })}
    </S.RatingWrap>
  );
};

export default Rating_2;

const RatingWrap = styled.div`
  display: flex;
`;

const S = {
  RatingWrap,
};
