import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type Props = {
  chartData: {
    rate: number;
    percentage: number;
    userNumber: number;
  }[];
};

const RatingDistributionChart = ({ chartData }: Props) => {
  const modifiedArray = useMemo(() => {
    const newArray = [...chartData];
    // 배열을 변경하는 로직
    newArray.sort((a, b) => b.percentage - a.percentage);
    return newArray;
  }, [chartData]);

  return (
    <S.ChartWrap>
      {modifiedArray.map((chartItem, index) => (
        <li key={chartItem.rate}>
          {index === 0 && <S.Tooltip>NN</S.Tooltip>}
          <S.LineChart className={index === 0 ? "first" : ""}>
            <S.LineChartInner
              heightPercent={chartItem.percentage}
            ></S.LineChartInner>
          </S.LineChart>
          <S.ChartText
            className={index === 0 ? "first" : ""}
          >{`${chartItem.rate}점`}</S.ChartText>
        </li>
      ))}
    </S.ChartWrap>
  );
};

export default RatingDistributionChart;

const ChartWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

const Tooltip = styled.div`
  position: relative;
  padding: 0.2rem 0.4rem;
  height: 2.6rem;
  width: 2.6rem;
  line-height: 1.44rem;
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.white};
  background: url("/assets/images/text_bubble.png") no-repeat center top / 100%;
  margin-bottom: 0.4rem;
`;

const LineChart = styled.div`
  position: relative;
  width: 0.4rem;
  height: 100%;
  background: #eeeeee;
  border-radius: 2px;

  &.first {
    height: 50%;
    & > div {
      height: 100%;
      background: ${theme.color.primary};
    }
  }
`;

const LineChartInner = styled.div<{ heightPercent: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ heightPercent }) => `${heightPercent}%`};
  border-radius: 2px;
  background-color: #bcbcbc;
`;

const ChartText = styled.span`
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.textDisabled};
  line-height: 1.44rem;
  padding-top: 0.4rem;

  &.first {
    color: ${theme.color.primary};
  }
`;

const S = {
  ChartWrap,
  Tooltip,
  LineChart,
  LineChartInner,
  ChartText,
};
