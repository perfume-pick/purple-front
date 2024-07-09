"use client";

import React, { useState, useEffect } from "react";
import Star from "@/components/atom/svg/Star/Star";
import styled from "@emotion/styled";

type Props = {
  rate: number;
  size: number;
  onRateChange: (newRate: number) => void;
};

const EditableRating = ({ rate, size, onRateChange }: Props) => {
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]); // 별점 리스트 상태입니다.

  useEffect(() => {
    setRatesResArr(calcStarRates(rate, size)); // 별점 리스트는 첫 렌더링 때 한번만 상태를 설정해줍니다.
  }, [rate, size]);

  const handleStarClick = (index: number, isHalf: boolean, isEnd: boolean) => {
    let newRate = index + 1;
    if (isEnd) {
      newRate -= 1;
    } else if (isHalf) {
      newRate -= 0.5;
    }
    setRatesResArr(calcStarRates(newRate, size));
    onRateChange(newRate);
  };

  return (
    <S.RatingWrap>
      {ratesResArr.map((value, index) => {
        return (
          <Star
            size={size}
            value={value}
            index={index}
            key={index}
            onClick={(index, isHalf, isEnd) =>
              handleStarClick(index, isHalf, isEnd)
            }
          />
        );
      })}
    </S.RatingWrap>
  );
};

export default EditableRating;

const RatingWrap = styled.div`
  display: flex;
`;

const S = {
  RatingWrap,
};

const NUM_STARS = 5; // 별의 최대 개수

const calcStarRates = (rate: number, size: number) => {
  let tempStarRatesArr = Array(NUM_STARS).fill(0);
  let starVerScore = rate * size;
  let idx = 0;

  while (starVerScore >= size) {
    tempStarRatesArr[idx] = size;
    idx += 1;
    starVerScore -= size;
  }

  if (starVerScore > 0 && idx < NUM_STARS) {
    tempStarRatesArr[idx] = starVerScore;
  }
  return tempStarRatesArr;
};
