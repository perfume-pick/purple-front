import { S } from "./styles";

const PercentGraph = ({
  graphData,
  idx,
}: {
  graphData: number;
  idx?: number;
}) => {
  return (
    <>
      <S.Graph>
        <S.GraphWidth
          className={idx !== 0 ? "first" : ""}
          percent={graphData}
        ></S.GraphWidth>
      </S.Graph>
    </>
  );
};
export default PercentGraph;
