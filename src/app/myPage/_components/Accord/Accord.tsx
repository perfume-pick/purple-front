import { useState } from "react";
import { S } from "./styles";

const Accord = () => {
  const [selectedId, setSelectedId] = useState<"like" | "dislike">(tabs[0].id);

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
    </S.Wrapper>
  );
};

const tabs = [
  { id: "like", label: "선호" },
  { id: "dislike", label: "불호" },
] as const;

export default Accord;
