import React from "react";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

type Props = {
  progressValue: number;
  height?: string;
  barColor?: string;
};

const ProgressBar = ({
  progressValue,
  height = "0.8rem",
  barColor = "#ff4647",
}: Props) => {
  return (
    <S.ProgressBarWrap style={{ height: `${height}` }}>
      <ProgressBarInner
        style={{ width: `${progressValue}%`, backgroundColor: barColor }}
      ></ProgressBarInner>
    </S.ProgressBarWrap>
  );
};

export default ProgressBar;

const ProgressBarWrap = styled.div`
  width: 100%;
  height: 0.8rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${theme.color.grayColor[500]};
`;

const ProgressBarInner = styled.div`
  height: 100%;
  background-color: #ff4647;
`;

const S = {
  ProgressBarWrap,
};
