import { S } from "./styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Topic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.BlockWrap onClick={() => setIsOpen(prev => !prev)}>
        <S.Category>지속력</S.Category>
        <S.Content>오래가는 편이에요</S.Content>
        <S.Graph>그래프</S.Graph>
        <S.Percent>90%</S.Percent>
        {isOpen ? (
          <ExpandLessIcon style={{ fontSize: "2.7rem" }} />
        ) : (
          <ExpandMoreIcon style={{ fontSize: "2.7rem" }} />
        )}
      </S.BlockWrap>
    </S.Wrapper>
  );
}

export default Topic;
