import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  padding-top: 1.6rem;
`;

const StepWrap = styled.div`
  margin: 0 1.6rem;
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
  margin: 2rem 1.6rem 0 1.6rem;

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

const ProgressBarArea = styled.div`
  padding: 2rem 1.6rem;

  b {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 2.4rem;
    font-weight: ${theme.fontWeight.semiBold};
    padding-bottom: 1.6rem;
    color: ${theme.color.textColor[100]};
  }

  p {
    padding: 1rem 0;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.textColor[200]};
    word-break: keep-all;
  }
`;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
`;

const BottomFilterWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 2rem;
  padding: 0 1.6rem;
`;

const FilterWrap = styled.div`
  display: flex;
  height: 3rem;
  padding: 0.8rem 1.2rem;

  background-color: ${theme.color.grayColor[500]};
  border-radius: 5px;
  & + div {
    margin-left: 1rem;
  }
  &.active {
    background-color: #131313;
    color: ${theme.color.white};
  }

  & > div {
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: ${theme.fontSize.xs};
  }
`;

const PerfumeListWrap = styled.div`
  margin: 0 1.6rem;
  height: calc(100vh - 4.8rem - 19.15rem - 5rem);
  overflow-y: auto;
  > div + div {
    margin-top: 1.6rem;
  }
`;

const MovePageBtn = styled.button`
  font-weight: ${theme.fontWeight.bold};
`;

export const S = {
  Wrapper,
  StepWrap,
  StepTitleWrap,
  CardWrap,
  BottomFilterWrap,
  FilterWrap,
  PerfumeListWrap,
  MovePageBtn,
  ProgressBarArea,
};
