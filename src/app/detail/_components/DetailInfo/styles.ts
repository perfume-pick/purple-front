import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: ${theme.color.white};
  padding: 2rem;
`;

const PersistenceWrap = styled.div`
  margin: 2rem 0;
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: ${theme.fontSize.big};
    font-weight: ${theme.fontWeight.semiBold};
    margin-left: 1rem;
  }
`;

const GraphWrap = styled.div`
  margin: 2rem 0;

  & > div {
    display: flex;
    height: 2.4rem;
    align-items: center;
    justify-content: center;
    border-radius: 0 1rem 1rem 0;
  }
`;

// Note Info
const NoteInfoWrap = styled.div``;

const NoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const NoteContent = styled.div`
  display: flex;
  font-size: ${theme.fontSize.base};
  margin-bottom: 2rem;

  & > span {
    margin-right: 1rem;
    color: ${theme.color.textDisabled};
    font-weight: ${theme.fontWeight.semiBold};
    white-space: nowrap;
  }
`;

const EvaluationWrap = styled.div``;

const EvaluationInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const InfoWrap = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;

  & > span {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.grayColor[300]};
    width: 25%;
  }

  & > div {
    &.outer-bar {
      position: relative;
      height: 3.2rem;
      width: 100%;
      border-radius: 2rem;
      background-color: ${theme.color.grayColor[500]};
      padding: 1.5rem;
      overflow: hidden;

      .inner-bar {
        position: absolute;
        left: 0;
        top: 0;
        width: 20%;
        height: 100%;
        background-color: blue;
        border-radius: 2rem;
        align-content: center;

        p {
          text-indent: 1rem;
          color: ${theme.color.white};
        }
      }
    }
  }
`;

const SeasonGraph = styled.div`
  display: flex;
  column-gap: 2.4rem;
`;

export const S = {
  Wrapper,
  InfoTitle,
  GraphWrap,
  NoteInfoWrap,
  PersistenceWrap,
  NoteInfo,
  NoteContent,
  EvaluationWrap,
  EvaluationInfo,
  InfoWrap,
  SeasonGraph,
};
