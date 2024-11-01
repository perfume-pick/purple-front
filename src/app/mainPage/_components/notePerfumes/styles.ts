import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 2rem;
`;

const SelectBtnWrapper = styled.div`
  display: flex;
`;

const PreferenceNoteWrap = styled.div`
  box-shadow: 0px 5px 10px 0px #f5f5f5;
  border-radius: 0.4rem;
  padding: 1.5rem;
  cursor: pointer;
`;

const LikeNote = styled.div`
  margin: 0.5rem 0;
  & > span {
    font-weight: ${props => props.theme.fontWeight.semiBold};
  }
`;

const NoteRanking = styled.div`
  display: flex;
  margin: 1rem 0;
  & > * {
    background-color: pink;
    border-radius: 2.2rem;
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: ${props => props.theme.fontWeight.semiBold};
    padding: 0.8rem;
    margin-right: 2rem;
  }
`;

const PreferenceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.color.textDisabled};
`;

const MyPreference = styled.div`
  display: flex;

  & > div {
    margin-right: 0.5rem;
  }
`;

export const S = {
  Wrapper,
  SelectBtnWrapper,
  PreferenceNoteWrap,
  LikeNote,
  NoteRanking,
  PreferenceInfo,
  MyPreference,
};
