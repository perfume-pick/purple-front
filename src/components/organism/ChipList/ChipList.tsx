import styled from "@emotion/styled";
import Chip from "@/components/molecule/Chip/Chip";
import { SearchHistory } from "@/types/res/searchPerfume";
import useHorizontalScroll from "@/hook/useHorizontalScroll";

type Props = {
  chipList: SearchHistory[];
  onChipClick: (text: string) => void;
};
const ChipList = ({ chipList, onChipClick }: Props) => {
  const { containerRef, onDragStart, onDragMove, onDragEnd } =
    useHorizontalScroll<HTMLDivElement>();

  return (
    <S.Wrapper
      style={{
        display: "flex",
        gap: "6px",
        overflowX: "hidden",
        textWrap: "nowrap",
      }}
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseLeave={onDragEnd}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
    >
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
