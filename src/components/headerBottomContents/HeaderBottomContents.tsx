import React, { ReactNode } from "react";
import styled from "@emotion/styled";

type Props = {
  children: ReactNode;
};

const HeaderBottomContents = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default HeaderBottomContents;

const Wrapper = styled.div`
  padding-top: 6rem;
`;

const S = {
  Wrapper,
};
