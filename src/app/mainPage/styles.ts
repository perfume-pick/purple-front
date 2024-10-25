import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  justify-content: center;
  background-color: ${theme.color.white};
  overflow-y: hidden;
`;

const SearchBarContainer = styled.div`
  margin: 1.6rem;
`;

const BannerWrap = styled.div`
  padding: 2rem;
`;

const SelectBtnWrapper = styled.div`
  display: flex;
`;

const PreferenceNoteWrap = styled.div`
  box-shadow: 0px 5px 10px 0px #f5f5f5;
  border-radius: 0.4rem;
  padding: 1.5rem;
`;

const LikeNote = styled.div`
  margin: 0.5rem 0;
  & > span {
    font-weight: ${theme.fontWeight.semiBold};
  }
`;

const NoteRanking = styled.div`
  display: flex;
  margin: 1rem 0;
  & > * {
    background-color: pink;
    border-radius: 2.2rem;
    font-size: ${theme.fontSize.xs};
    font-weight: ${theme.fontWeight.semiBold};
    padding: 0.8rem;
    margin-right: 2rem;
  }
`;

const PreferenceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSize.sm};
  color: ${theme.color.textDisabled};
`;

const MyPreference = styled.div`
  display: flex;
  cursor: pointer;

  & > div {
    margin-right: 0.5rem;
  }
`;

export const S = {
  Wrapper,
  SearchBarContainer,
  BannerWrap,
  SelectBtnWrapper,
  PreferenceNoteWrap,
  LikeNote,
  NoteRanking,
  PreferenceInfo,
  MyPreference,
};
