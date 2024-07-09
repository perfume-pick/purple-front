"use client";

import React from "react";
import Star from "@/components/atom/svg/Star/Star";
import styled from "@emotion/styled";

type Props = {
  rate: number;
  size: number;
};

const ReadOnlyRating = ({ rate, size }: Props) => {
  const ratesResArr = calcStarRates(rate, size);

  return (
    <S.RatingWrap>
      {ratesResArr.map((value, index) => {
        return <Star size={size} value={value} index={index} key={index} />;
      })}
    </S.RatingWrap>
  );
};

export default ReadOnlyRating;

const RatingWrap = styled.div`
  display: flex;
`;

const S = {
  RatingWrap,
};

const NUM_STARS = 5; // 별의 최대 개수

const calcStarRates = (rate: number, size: number) => {
  let tempStarRatesArr = Array(NUM_STARS).fill(0);
  let starVerScore = (rate / NUM_STARS) * (size * NUM_STARS); // 평점을 별의 전체 크기로 변환
  let idx = 0;

  while (starVerScore > size) {
    tempStarRatesArr[idx] = size;
    idx += 1;
    starVerScore -= size;
  }

  if (idx < NUM_STARS) {
    tempStarRatesArr[idx] = starVerScore;
  }

  return tempStarRatesArr;
};
