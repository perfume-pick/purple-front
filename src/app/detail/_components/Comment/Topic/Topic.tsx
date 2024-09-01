import { S } from "./styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMemo, useState } from "react";
import PercentGraph from "./PercentGraph";

function Topic() {
  const [isOpen, setIsOpen] = useState(false);
  // 임시 데이터
  // TODO: isOpen으로 화살표 state를 공용으로 해놔서 추후 수정 필요.(다같이 열리고 닫힘)
  const graphData = [
    {
      name: "지속력",
      data: [
        {
          content: "오래가는 편이에요",
          percent: 90,
        },
        {
          content: "엄청 오래가요",
          percent: 5,
        },
        {
          content: "보통이에요",
          percent: 50,
        },
      ],
    },
    {
      name: "시야주",
      data: [
        {
          content: "보통이에요",
          percent: 55,
        },
        {
          content: "약한 편이에요",
          percent: 45,
        },
      ],
    },
    {
      name: "계절감/시간",
      data: [
        {
          content: "봄",
          percent: 65,
        },
        {
          content: "여름",
          percent: 75,
        },
        {
          content: "낮",
          percent: 23,
        },
        {
          content: "아침",
          percent: 35,
        },
      ],
    },
  ];

  const modifiedArray = useMemo(() => {
    const topicData = [...graphData];
    topicData.map(sorting =>
      sorting.data.sort((a, b) => b.percent - a.percent),
    );
    return topicData;
  }, [graphData]);

  return (
    <S.Wrapper>
      {modifiedArray.map((topic, idx) => (
        <S.BlockWrap key={idx} onClick={() => setIsOpen(prev => !prev)}>
          <S.Wrap>
            <S.Category dis={idx === 0}>{topic.name}</S.Category>
            <S.Content>{topic.data[0].content}</S.Content>
            <PercentGraph graphData={topic.data[0].percent} idx={0} />
            <S.Percent>{topic.data[0].percent}%</S.Percent>
            {isOpen ? (
              <ExpandLessIcon style={{ fontSize: "2.7rem" }} />
            ) : (
              <ExpandMoreIcon style={{ fontSize: "2.7rem" }} />
            )}
          </S.Wrap>
          {isOpen && (
            <>
              {topic.data.slice(1).map((datas, idx) => (
                <S.Details key={idx}>
                  <S.DetailItem></S.DetailItem>
                  <S.Title>{datas.content}</S.Title>
                  <PercentGraph graphData={datas.percent} idx={idx + 1} />
                  <S.Percent>{datas.percent}%</S.Percent>
                </S.Details>
              ))}
            </>
          )}
        </S.BlockWrap>
      ))}
    </S.Wrapper>
  );
}

export default Topic;
