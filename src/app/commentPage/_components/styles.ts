import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 5.4rem;
  display: flex;
  width: 100%;
  background-color: ${theme.color.white};

  & > img {
    width: 5.4rem;
    height: 5.4rem;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  color: ${theme.color.grayColor[300]};

  & > span:last-of-type {
    font-size: ${theme.fontSize.big};
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const S = {
  Wrapper,
  TitleWrap,
};
