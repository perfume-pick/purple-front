import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type Props = {
  children: ReactNode;
};

const HeaderBottomContents = ({ children }: Props) => {
  return <S.Wrapper className="contents-wrap">{children}</S.Wrapper>;
};

export default HeaderBottomContents;

const Wrapper = styled.div`
  padding-top: 4.8rem;
  background-color: ${theme.color.white};
`;

const S = {
  Wrapper,
};
