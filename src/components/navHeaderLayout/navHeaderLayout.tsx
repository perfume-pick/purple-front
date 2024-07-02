"use client";

import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import { CSSProperties, ReactNode } from "react";

function NavHeader({
  children,
  style,
  iconColor,
  bgColor,
}: {
  children?: ReactNode;
  style?: CSSProperties;
  iconColor?: string;
  bgColor?: string;
}) {
  const router = useRouter();

  const handleRouterBack = () => {
    router.back();
  };

  const backgroundColor = bgColor || theme.color.white;

  return (
    <S.Wrapper bgColor={backgroundColor}>
      <div onClick={handleRouterBack}>
        <ArrowBackIosNewIcon sx={{ fontSize: "2.4rem", color: iconColor }} />
      </div>
      <div style={style}>
        <div>{children}</div>
      </div>
    </S.Wrapper>
  );
}
export default NavHeader;

const dynamicBgColorStyle = (props: { bgColor: string }) => ({
  backgroundColor: props.bgColor ? props.bgColor : theme.color.white,
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.8rem;
  width: 100%;
  ${dynamicBgColorStyle}

  & > div:first-of-type {
    line-height: 1;
  }

  & > div:last-of-type {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const S = {
  Wrapper,
};
