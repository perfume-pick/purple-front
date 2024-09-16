import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  height: 11rem;
  background-color: ${theme.color.white};
  /* width: 36rem; */
  width: 100%;
`;
const BannerImg = styled.img`
  object-fit: contain;
  width: 10rem;
  height: 10rem;
`;

const ContentsWrapper = styled.div`
  width: calc(100% - 10rem);
  padding: 0.4rem 0;
  & > span {
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.grayColor[300]};
  }

  & > p {
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.bolder};
    padding-bottom: 0.4rem;
  }
`;

export const S = {
  Wrapper,
  BannerImg,
  ContentsWrapper,
};
