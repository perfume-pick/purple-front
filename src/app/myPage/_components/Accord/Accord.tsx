import { useState } from "react";
import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getUserAccords } from "@/service/client/userInfo";
import { PERFUME_ACCORD_COLORS } from "@/constant/perfumeAccord/perfumeAccordColors";

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

  const hasAccords = (currentAccords?.length ?? 0) > 0;

  const accordPerfumeTotal =
    currentAccords?.reduce((acc, cur) => acc + cur.count, 0) ?? 0;

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
        {hasAccords
          ? "평가한 향수에서 주로 이런 어코드를 좋아했어요!"
          : "작성한 항목이 아직 없습니다."}
      </S.ProgressBarTitle>
      {hasAccords && (
        <>
          <S.ProgressBarContainer>
            {currentAccords?.map(({ accordName, count }) => (
              <S.ProgressBar
                key={accordName}
                width={`${(count / accordPerfumeTotal) * 100}%`}
                backgroundColor={
                  PERFUME_ACCORD_COLORS.find(
                    accord => accord.accordName === accordName,
                  )?.hexColor || ""
                }
              />
            ))}
          </S.ProgressBarContainer>
          <S.ProgressBarSegmentContainer>
            {currentAccords?.map(
              ({ accordKoreanName, count, accordName, percentage }) => (
                <S.ProgressBarSegment key={accordName}>
                  <S.ProgressBarSegmentLabelBox>
                    <S.ProgressBarSegmentColorCircle
                      backgroundColor={
                        PERFUME_ACCORD_COLORS.find(
                          accord => accord.accordName === accordName,
                        )?.hexColor || ""
                      }
                    />
                    <span>{accordKoreanName}</span>
                  </S.ProgressBarSegmentLabelBox>
                  <S.ProgressBarSegmentCountText>
                    {count}개 ({Math.floor(percentage)}%)
                  </S.ProgressBarSegmentCountText>
                </S.ProgressBarSegment>
              ),
            )}
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

export default Accord;
