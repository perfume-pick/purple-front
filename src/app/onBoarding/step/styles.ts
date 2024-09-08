import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  padding: 1.6rem 1.6rem 3.2rem 1.6rem;
`;

const StepWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11rem;
  height: 2.8rem;
  border-radius: 5px;
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.semiBold};
  color: ${theme.color.textColor[200]};
  background-color: ${theme.color.grayColor[400]};

  .middle-line {
    color: #d8d8dc;
    padding: 0 0.8rem;
  }
`;

const StepTitleWrap = styled.div`
  height: 11.3rem;
  margin-top: 2rem;

  & > h1 {
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.bold};
    padding-bottom: 0.8rem;
  }

  & > h2 {
    color: ${theme.color.textColor[200]};
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.regular};
    line-height: 1.4;
  }
`;

const CardWrap = styled.div`
  /* TODO : grid로 변경해야함 */
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(3, 33.3%);
`;

const BottomFilterWrap = styled.div`
  display: flex;
`;

const FilterWrap = styled.div`
  display: flex;
  margin: 2rem 0;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.3rem;
    height: 3rem;
    font-size: ${theme.fontSize.xs};
    background-color: ${theme.color.grayColor[500]};
    margin-right: 1rem;
    border-radius: 5px;
  }
`;

export const S = {
  Wrapper,
  StepWrap,
  StepTitleWrap,
  CardWrap,
  BottomFilterWrap,
  FilterWrap,
};
