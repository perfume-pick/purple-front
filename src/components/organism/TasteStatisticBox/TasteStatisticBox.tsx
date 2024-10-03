import React, { useEffect, ReactNode } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, Plugin, registerables } from "chart.js";
import { S } from "./styles";

Chart.register(...registerables);

{
  /* TODO: 실 데이터로 변경 시 정해진 chartData type 파일에 정리  */
}
type chartData = {
  tasteName: string;
  ranking: number;
  score: number;
  percentageScore: number;
  color: string;
};

type Props = {
  chartData: chartData[];
  reviewsNum: number;
  children?: ReactNode;
};

const TasteStatisticBox = ({ chartData, reviewsNum, children }: Props) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const plugins: Plugin<"doughnut">[] = [
    {
      id: "tasteStatic",
      beforeDraw: (chart: Chart<"doughnut">) => {
        const { width, height, ctx } = chart;
        ctx.restore();

        // text1 스타일 설정
        const text1 = `${reviewsNum}개`;
        ctx.font = "bold 20px sans-serif";
        ctx.textBaseline = "middle";
        const text1X = Math.round((width - ctx.measureText(text1).width) / 2);
        const text1Y = height / 2;
        ctx.fillText(text1, text1X, text1Y);

        // text2 스타일 설정
        const text2 = "평가";
        ctx.font = "14px sans-serif";
        ctx.textBaseline = "middle";
        const text2X = Math.round((width - ctx.measureText(text2).width) / 2);
        const text2Y = height / 2 + 16;
        ctx.fillText(text2, text2X, text2Y);

        ctx.save();
      },
    },
  ];

  const data = {
    datasets: [
      {
        data: [42, 33, 25],
        backgroundColor: ["#FF6384", "#FFCE56", "#FF9F40"],
      },
    ],
  };

  useEffect(() => {
    const percentageList = chartData.map(data => data.percentageScore);
    const backgroundColor = chartData.map(data => data.color);

    data.datasets[0].data = percentageList;
    data.datasets[0].backgroundColor = backgroundColor;
  }, [chartData, data.datasets]);

  return (
    <S.Wrapper>
      <div style={{ width: "15rem", height: "15rem" }}>
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
      <ul>
        {chartData.map((item, index) => {
          return (
            <S.ChartLineText key={index}>
              <div>
                <div style={{ background: item.color }}></div>
                <span>{`${item.ranking}위 ${item.tasteName}`}</span>
              </div>
              <span>{`${item.score}점 (${item.percentageScore}%)`}</span>
            </S.ChartLineText>
          );
        })}
      </ul>
      {children}
    </S.Wrapper>
  );
};

export default TasteStatisticBox;
