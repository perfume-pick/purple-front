import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { DropdownType } from "@/types/dropdownTypes";
import Dropdown from "@/components/molecule/Dropdown/Dropdown";

type Props = {
  filterList: DropdownType[];
  commentCount: number;
  isDetail: boolean;
  selectedFilter: string;
  handleSetIsDetail: () => void;
  handleChangeSelectedFilter: (code: string) => void;
};

const FilterBox = ({
  filterList,
  commentCount,
  isDetail,
  selectedFilter,
  handleSetIsDetail,
  handleChangeSelectedFilter,
}: Props) => {
  return (
    <S.FilterWrap className="filter-wrap">
      <p>
        전체 <span>{commentCount}</span>건
      </p>
      <S.Filters>
        <input
          type="checkbox"
          id="only-detail"
          checked={isDetail}
          onChange={handleSetIsDetail}
        />
        <label htmlFor="only-detail">자세한 리뷰만</label>
        <Dropdown
          selectedCode={selectedFilter}
          handleChangeSelectedFilter={handleChangeSelectedFilter}
          filterList={filterList}
        />
      </S.Filters>
    </S.FilterWrap>
  );
};

export default FilterBox;

const FilterWrap = styled.div`
  position: sticky;
  z-index: 1;
  top: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  padding: 1.2rem 1.6rem;

  & > p {
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.textColor[100]};

    & > span {
      color: ${theme.color.primary};
    }
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    width: 2rem;
    height: 2rem;
    margin-right: 0.4rem;
  }

  label {
    font-size: ${theme.fontSize.sm};
    margin-right: 1.4rem;
  }
`;

const S = {
  FilterWrap,
  Filters,
};
