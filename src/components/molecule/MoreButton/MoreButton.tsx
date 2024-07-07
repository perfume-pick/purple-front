"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useRef, useState } from "react";

type Props = {
  selectList: string[];
  handleDropdown: () => void;
};

const MoreButton = ({ selectList, handleDropdown }: Props) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const handleClickBox = () => {
    handleDropdown();
    setIsShowDropdown(false);
  };

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

  return (
    <S.MoreButtonWrap>
      <MoreHorizIcon
        sx={{ fontSize: "2.4rem", color: "#212124" }}
        onClick={() => setIsShowDropdown(prev => !prev)}
      />
      <S.DropdownWrap
        className={isShowDropdown ? "active" : ""}
        onClick={handleClickBox}
        ref={dropDownRef}
      >
        {selectList.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </S.DropdownWrap>
    </S.MoreButtonWrap>
  );
};

export default MoreButton;

const MoreButtonWrap = styled.div`
  position: relative;
`;
const DropdownWrap = styled.div`
  position: absolute;
  width: 10rem;
  top: 2.4rem;
  right: 0;
  border: 1px solid #dbdbdb;
  background: ${theme.color.white};
  text-align: center;
  border-radius: 0.6rem;
  font-size: ${theme.fontSize.sm};
  color: ${theme.color.textColor[100]};
  font-weight: ${theme.fontWeight.semiBold};
  display: none;

  &.active {
    display: block;
  }
  & > p {
    padding: 0.8rem 1rem;
    font-size: ${theme.fontSize.sm};
  }
`;

const S = {
  MoreButtonWrap,
  DropdownWrap,
};
