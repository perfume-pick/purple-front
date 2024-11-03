"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useRef, useState } from "react";
import { DropdownType } from "@/types/dropdownTypes";
import DialogAlert from "@/components/alert/DialogAlert";

type Props = {
  selectList: DropdownType[];
  handleDropdown: (dropdownItem: string) => void;
};

const DIALOG_ALERT_INFO = {
  message: "코멘트를 삭제하시겠습니까?",
  leftText: "취소",
  rightText: "삭제",
  leftBgColor: theme.color.grayColor[500],
  rightBgColor: theme.color.primary.coral[400],
  leftColor: theme.color.textColor[100],
  rightColor: theme.color.white,
};

const MoreButton = ({ selectList, handleDropdown }: Props) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const handleClickBox = (code: string) => {
    console.log(code);
    if (code === "DELETE_COMMENT") {
      setIsOpenDeleteModal(true);
    } else {
      handleDropdown(code);
    }
    setIsShowDropdown(false);
  };

  const handleClickdialogBtn = (code: string) => {
    if (code === "DELETE") {
      handleDropdown("DELETE_COMMENT");
    }
    setIsOpenDeleteModal(false);
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
    <>
      <S.MoreButtonWrap>
        <MoreHorizIcon
          sx={{ fontSize: "2.4rem", color: "#212124" }}
          onClick={() => setIsShowDropdown(prev => !prev)}
        />
        <S.DropdownWrap
          className={isShowDropdown ? "active" : ""}
          ref={dropDownRef}
        >
          {selectList.map((text, index) => {
            return (
              <p key={index} onClick={() => handleClickBox(text.code)}>
                {text.title}
              </p>
            );
          })}
        </S.DropdownWrap>
      </S.MoreButtonWrap>
      {isOpenDeleteModal && (
        <DialogAlert
          messageInfo={DIALOG_ALERT_INFO}
          handleClickdialogBtn={handleClickdialogBtn}
        />
      )}
    </>
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
