"use client";

import React from "react";
import styled from "@emotion/styled";

type Props = {
  text: string;
};

const NavHeaderInner = ({ text }: Props) => {
  return (
    <S.HeaderInner>
      <span>{text}</span>
    </S.HeaderInner>
  );
};

export default NavHeaderInner;

const HeaderInner = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  span {
    font-size: 1.7rem;
  }
`;

const S = {
  HeaderInner,
};
