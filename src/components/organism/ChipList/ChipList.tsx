import styled from "@emotion/styled";
import Chip from "@/components/molecule/Chip/Chip";
import { SearchHistory } from "@/types/res/searchPerfume";

type Props = {
  chipList: SearchHistory[];
  onChipClick: (text: string) => void;
};
const ChipList = ({ chipList, onChipClick }: Props) => {
  return (
    <S.Wrapper>
      <S.List>
        {chipList?.map((chip, index) => (
          <Chip key={index} text={chip.keyword} onChipClick={onChipClick} />
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default ChipList;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0 1.6rem;
  width: max-content;
  column-gap: 0.8rem;
  margin: 0;
`;

const Wrapper = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const S = {
  List,
  Wrapper,
};
