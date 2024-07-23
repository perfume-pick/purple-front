import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  justify-content: center;
  background-color: ${theme.color.white};
  overflow-y: hidden;
`;

const TopWrap = styled.div`
  padding: 2rem;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  & > img {
    width: 15rem;
  }
`;

const BannerWrap = styled.div`
  padding: 2rem;
`;

const SelectBtnWrapper = styled.div`
  display: flex;
`;

const FocusComponent = styled.div<{ focus: boolean }>`
  display: flex;
  width: 100%;
  background-color: ${theme.color.white};
  justify-content: space-around;
  align-items: center;
  font-size: ${theme.fontSize.base};
  & > div {
    display: flex;
    border-bottom: ${({ focus }) =>
      focus ? `2px solid ${theme.color.primary}` : `1px solid #d2d2d2`};
    font-weight: ${({ focus }) => (focus ? "700" : "")};
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 100%;
    cursor: pointer;
  }
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
  TopWrap,
  LogoWrap,
  BannerWrap,
  SelectBtnWrapper,
  FocusComponent,
  PreferenceNoteWrap,
  LikeNote,
  NoteRanking,
  PreferenceInfo,
  MyPreference,
};
