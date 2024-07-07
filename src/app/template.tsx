"use client";
import { FC, useMemo } from "react";
import { theme } from "@/styles/theme";
import useDeviceType, { MAX_MOBILE_WIDTH } from "@/hook/screen/useDeviceType";
import { EmptyPropsChildren } from "@/constant/commonTypes";
import { AppBar } from "@mui/material";
import styled from "@emotion/styled";

export default function Template({ children }: { children: React.ReactNode }) {
  const { isMobile } = useDeviceType();

  const Wrapper = useMemo(() => {
    return isMobile ? MobileTemplate : MobileTemplate;
  }, [isMobile]);

  return <Wrapper>{children}</Wrapper>;
}
/*
// not allowed pc layout not now
const PCTemplate: FC<EmptyPropsChildren> = ({ children }) => {
  return <>{children}</>;
};
 */

const MobileTemplate: FC<EmptyPropsChildren> = ({ children }) => {
  return (
    <Main>
      <Header>
        {/* TODO : appbar 필요없으면 지울 예정 */}
        <AppBar />
      </Header>
      <Section>{children}</Section>
      <Footer></Footer>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};

  @media (min-width: 441px) {
    width: 440px;
    margin: 0 auto;
  }
`;

const Header = styled.header``;

const Section = styled.section`
  flex: 1;
  width: 100%;
  max-width: ${MAX_MOBILE_WIDTH};
`;

const Footer = styled.footer``;
