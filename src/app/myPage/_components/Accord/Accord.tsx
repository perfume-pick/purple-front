import { useState } from "react";
import { S } from "./styles";

const Accord = () => {
  const [selectedId, setSelectedId] = useState<"like" | "dislike">(tabs[0].id);

  const accordPerfumeTotal = accords.reduce(
    (acc, cur) => acc + cur.perfumeCount,
    0,
  );

  return (
    <S.Wrapper>
      <S.TitleTabContainer>
        <S.Title>어코드</S.Title>
        <S.TabContainer>
          {tabs.map(({ id, label }) => (
            <S.Tab
              key={id}
              onClick={() => setSelectedId(id)}
              isSelected={selectedId === id}
            >
              {label}
            </S.Tab>
          ))}
        </S.TabContainer>
      </S.TitleTabContainer>
      <S.ProgressBarTitle>
        평가한 향수에서 주로 이런 어코드를 좋아했어요!
      </S.ProgressBarTitle>
      <S.ProgressBarContainer>
        {accords.map(({ perfumeCount, id }) => (
          <S.ProgressBar
            key={id}
            width={`${(perfumeCount / accordPerfumeTotal) * 100}%`}
            backgroundColor={accordColors[id]}
          />
        ))}
      </S.ProgressBarContainer>
      <S.ProgressBarSegmentContainer>
        {accords.map(({ perfumeCount, label, id }) => (
          <S.ProgressBarSegment key={id}>
            <S.ProgressBarSegmentLabelBox>
              <S.ProgressBarSegmentColorCircle
                backgroundColor={accordColors[id]}
              />
              <span>{label}</span>
            </S.ProgressBarSegmentLabelBox>
            <S.ProgressBarSegmentCountText>
              {perfumeCount}개 (
              {Math.floor((perfumeCount / accordPerfumeTotal) * 100)})
            </S.ProgressBarSegmentCountText>
          </S.ProgressBarSegment>
        ))}
        <S.ProgressBarSegmentDescription>
          * 어코드가 포함된 향수 개수(선호/불호 어코드 비중)
        </S.ProgressBarSegmentDescription>
      </S.ProgressBarSegmentContainer>
    </S.Wrapper>
  );
};

const tabs = [
  { id: "like", label: "선호" },
  { id: "dislike", label: "불호" },
] as const;

const accords = [
  { perfumeCount: 7, label: "플로랄", id: "floral1" },
  { perfumeCount: 2, label: "플로랄", id: "floral2" },
  { perfumeCount: 1, label: "플로랄", id: "floral3" },
] as const;

const accordColors = {
  floral1: "#ff4647",
  floral2: "#6bc060",
  floral3: "#c446ff",
} as const;

export default Accord;
