"use client";

import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type Props = {
  rate: number;
  size: number;
  gap: number;
  onClick?: () => void;
};

const ReadonlyRating = ({ rate, size, gap, onClick }: Props) => {
  const percentage = (rate / 5) * 100;

  return (
    <S.RatingWrap size={size} gap={gap} onClick={onClick}>
      {[...Array(5)].map((_, index) => (
        <S.Star size={size} key={index}></S.Star>
      ))}
      <S.RatingBgColorBlock width={percentage} />
    </S.RatingWrap>
  );
};

export default ReadonlyRating;

const RatingWrap = styled.div<{ size: number; gap: number }>`
  position: relative;
  background: ${theme.color.white};
  display: inline-flex;
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
