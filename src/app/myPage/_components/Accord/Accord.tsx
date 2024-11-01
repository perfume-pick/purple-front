import { useState } from "react";
import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getUserAccords } from "@/service/client/userInfo";

const Accord = () => {
  const { data: userAccords } = useQuery({
    queryKey: ["userAccords"],
    queryFn: getUserAccords,
  });
  const [selectedId, setSelectedId] = useState<"like" | "dislike">(tabs[0].id);

  const currentAccords =
    userAccords?.userAccord[
      selectedId === "like" ? "preferredAccord" : "dislikedAccord"
    ];

  const accordPerfumeTotal =
    currentAccords?.reduce((acc, cur) => acc + cur.count, 0) ?? 0;

  console.log(currentAccords);

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
      {(currentAccords?.length ?? 0) === 0 ? (
        "어코드가 없습니다 평가해 주세요" //! 어코드가 없는 경우 어떻게 보여줄지. 기획에 물어보기
      ) : (
        <>
          <S.ProgressBarContainer>
            {currentAccords?.map(({ accordName, count }, index) => (
              <S.ProgressBar
                key={accordName}
                width={`${(count / accordPerfumeTotal) * 100}%`}
                backgroundColor={accordColors[index]}
              />
            ))}
          </S.ProgressBarContainer>
          <S.ProgressBarSegmentContainer>
            {currentAccords?.map(({ count, accordName, percentage }, index) => (
              <S.ProgressBarSegment key={accordName}>
                <S.ProgressBarSegmentLabelBox>
                  <S.ProgressBarSegmentColorCircle
                    backgroundColor={accordColors[index]}
                  />
                  <span>{accordName}</span>
                </S.ProgressBarSegmentLabelBox>
                <S.ProgressBarSegmentCountText>
                  {count}개 ({Math.floor(percentage)})
                </S.ProgressBarSegmentCountText>
              </S.ProgressBarSegment>
            ))}
            <S.ProgressBarSegmentDescription>
              * 어코드가 포함된 향수 개수(선호/불호 어코드 비중)
            </S.ProgressBarSegmentDescription>
          </S.ProgressBarSegmentContainer>
        </>
      )}
    </S.Wrapper>
  );
};

const tabs = [
  { id: "like", label: "선호" },
  { id: "dislike", label: "불호" },
] as const;

const accordColors = ["#ff4647", "#6bc060", "#c446ff"] as const;

export default Accord;
