"use client";

import React, { useEffect, useState } from "react";
import Portal from "../alert/Portal";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type Props = {
  text: string;
  setToast: (toastStatus: boolean) => void;
};

const OneLineTextToast = ({ text, setToast }: Props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const activateTimeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(activateTimeout);
  }, [text]);

  useEffect(() => {
    if (isActive) {
      const deactivateTimeout = setTimeout(() => {
        setIsActive(false);
        const hideToastTimeout = setTimeout(() => {
          setToast(false);
        }, 1000);

        return () => clearTimeout(hideToastTimeout);
      }, 2000);

      return () => clearTimeout(deactivateTimeout);
    }
  }, [isActive, setToast]);

  return (
    <Portal>
      <S.ToastWrap className={isActive ? "active" : ""}>{text}</S.ToastWrap>
    </Portal>
  );
};

export default OneLineTextToast;

const ToastWrap = styled.div`
  width: calc(440px - 3.6rem);
  padding: 1.6rem;
  background-color: ${theme.color.primary.coral[100]};
  font-weight: bold;
  text-align: center;
  color: ${theme.color.textColor[200]};
  z-index: 10;
  position: fixed;
  top: -5.6rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.6rem;
  box-shadow: 0px 2px 10px 0px ${theme.color.grayColor[200]};
  transition: all ease-in-out 0.8s;

  @media (max-width: 440px) {
    width: calc(100% - 3.6rem);
  }

  &.active {
    top: 2.4rem;
    transition: all ease-in-out 0.8s;
  }
`;

const S = {
  ToastWrap,
};
