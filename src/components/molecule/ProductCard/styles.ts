import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.li`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  width: 14.1rem;

  &.type-grid {
    /* flex: 1 1 50%; */
  }
`;

const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  width: 100%;
  border-radius: 1.2rem;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &.type-scroll {
    width: 14.1rem;
  }

  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const TextBox = styled.div`
  margin-top: 1.2rem;
  padding: 1rem;

  & > span {
    color: ${theme.color.textDisabled};
    font-weight: ${theme.fontWeight.semiBold};
    font-size: ${theme.fontSize.xs};
  }

  & > p {
    text-wrap: wrap;
    word-break: break-all;
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.semiBold};
  }

  &.type-scroll {
    width: 100%;
    /* height: 8.2rem; */
    box-sizing: border-box;

    & > span {
      display: inline-block;
    }

    & > p {
      padding: 0.4rem 0;
      font-weight: ${theme.fontWeight.regular};
    }
  }

  &.type-grid {
    /* height: 8.2rem; */
  }
`;

const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.color.textDisabled};
  font-size: ${theme.fontSize.xs};
`;

export const S = {
  Wrapper,
  ImageBox,
  Card,
  TextBox,
  RatingWrap,
};
