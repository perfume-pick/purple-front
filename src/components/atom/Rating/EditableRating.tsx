"use client";

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

type Props = {
  rate: number;
  size: number;
  gap: number;
  onRateChange: (newRate: number) => void;
};

const EditableRating = ({ rate, size, gap, onRateChange }: Props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage((rate / 5) * 100);
  }, [rate]);

  const handleStarClick = (event: React.MouseEvent) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const posX = clientX - left;
    const remToPx = gap * 10;
    const starWidth = (width - remToPx * 4) / 5;
    const totalStarWidth = starWidth + remToPx;
    const newRate = Math.ceil(posX / totalStarWidth); // 1점씩 증가하도록 소수점 반올림

    onRateChange(Math.min(5, Math.max(1, newRate))); // 1점 이상, 5점 이하로 범위 제한
  };

  return (
    <S.RatingWrap size={size} gap={gap} onClick={handleStarClick}>
      {[...Array(5)].map((_, index) => (
        <S.Star key={index} size={size}></S.Star>
      ))}
      <S.RatingBgColorBlock width={percentage} />
    </S.RatingWrap>
  );
};

export default EditableRating;

const RatingWrap = styled.div<{ size: number; gap: number }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  height: ${({ size }) => `${size / 10}rem`};
  column-gap: ${({ gap }) => `${gap}rem`};
`;

const RatingBgColorBlock = styled.div<{ width: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ width }) => `${width}%`}; /* 평점에 따라 너비 조정 */
  height: 100%;
  background-color: #4b3434; /* 채워질 부분의 색상 설정 */
  mix-blend-mode: color-burn;
  opacity: unset;
`;

const Star = styled.div<{ size: number }>`
  width: ${({ size }) => `${size / 10}rem`};
  height: ${({ size }) => `${size / 10}rem`};
  background: url("/assets/images/icon_star.png") no-repeat center top / 100%;
`;

const S = {
  RatingWrap,
  RatingBgColorBlock,
  Star,
};
