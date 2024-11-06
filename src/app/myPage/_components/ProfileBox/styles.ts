import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-top: 2.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const TextWrap = styled.div`
  width: calc(100% - 6rem);
  height: 4.5rem;
  padding-left: 1.2rem;
  font-size: ${theme.fontSize.base};
  line-height: 1.6rem;

  p {
    width: 70%;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.8rem;

    & > p {
      font-size: ${theme.fontSize.base};
      font-weight: ${theme.fontWeight.bold};
    }
  }
  & > p {
    font-size: ${theme.fontSize.xs};
    color: #919193;
  }
`;

export const S = {
  Wrapper,
  Container,
  TextWrap,
};
