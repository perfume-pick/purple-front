"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { DropdownType } from "@/types/dropdownTypes";
import { useEffect, useRef, useState } from "react";

type Props = {
  selectedCode: string;
  filterList: DropdownType[];
  handleChangeSelectedFilter: (code: string) => void;
};

const Dropdown = ({
  selectedCode,
  filterList,
  handleChangeSelectedFilter,
}: Props) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const dropDownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      const { target } = e;
      if (
        isShowDropdown &&
        dropDownRef.current &&
        !dropDownRef.current.contains(target as HTMLElement)
      ) {
        setIsShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", outSideClick);
  }, [isShowDropdown]);

  const handleClickFilterItem = (code: string) => {
    setIsShowDropdown(false);
    handleChangeSelectedFilter(code);
  };

  return (
    <S.Wrapper>
      <p onClick={() => setIsShowDropdown(prev => !prev)}>
        {filterList.filter(filter => filter.code === selectedCode)[0].title}
      </p>
      <S.FilterList
        className={isShowDropdown ? "active" : ""}
        ref={dropDownRef}
      >
        {filterList.map((filter: DropdownType) => {
          return (
            <li
              key={filter.code}
              className={filter.code === selectedCode ? "selected" : ""}
              onClick={() => handleClickFilterItem(filter.code)}
            >
              {filter.title}
            </li>
          );
        })}
      </S.FilterList>
    </S.Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  & > p {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.textColor[100]};
  }
`;

const FilterList = styled.ul`
  position: absolute;
  right: 0;
  top: 0;
  width: 10.4rem;
  background: ${theme.color.white};
  border: 1px solid #dbdbdb;
  border-radius: 0.6rem;
  display: none;

  &.active {
    display: block;
  }

  & > li {
    padding: 0.8rem 1rem;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.textDisabled};

    &.selected {
      font-weight: ${theme.fontWeight.semiBold};
      color: ${theme.color.textColor[100]};
    }
  }
`;

const S = {
  Wrapper,
  FilterList,
};
