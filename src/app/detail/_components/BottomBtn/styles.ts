import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.color.white};
  padding: 0 1.6rem;
  border: solid 1px ${theme.color.grayColor[200]};
`;

const HeartBtn = styled.div`
  display: flex;
  width: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.xs};
  color: ${theme.color.textDisabled};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  & > button {
    height: 5rem;
    width: 14rem;
    margin-left: 2rem;
    border: none;
    border-radius: 0.8rem;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.white};
  }

  & > button:first-of-type {
    background-color: ${theme.color.grayColor[200]};
  }

  & > button:last-of-type {
    background-color: ${theme.color.primary.coral[400]};
  }
`;

export const S = {
  Wrapper,
  HeartBtn,
  ButtonWrap,
};
