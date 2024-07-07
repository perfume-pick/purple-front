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
    background-color: #bc4d0f;
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
  }
`;

export const S = {
  Wrapper,
  InfoTitle,
  GraphWrap,
  NoteInfoWrap,
  PersistenceWrap,
  NoteInfo,
  NoteContent,
};
