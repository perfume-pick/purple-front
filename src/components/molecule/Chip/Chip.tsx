import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type Props = {
  text: string;
  onChipClick: (text: string) => void;
};

const Chip = ({ text, onChipClick }: Props) => {
  return <S.ChipItem onClick={() => onChipClick(text)}>{text}</S.ChipItem>;
};

export default Chip;

const ChipItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  padding: 0 1.2rem;
  border-radius: 20px;
  border: 1px solid ${theme.color.grayColor[200]};
`;

export const S = { ChipItem };
