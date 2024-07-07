import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-bottom: 2.4rem;
  background-color: ${theme.color.white};
`;

const Title = styled.span`
  display: block;
  padding: 1.6rem;
  font-weight: ${theme.fontWeight.semiBold};
`;

const TitleButton = styled.div`
  display: flex;
  border-top: 3px solid #f9f9f9;
  border-bottom: 3px solid #f9f9f9;
  padding: 1.6rem;

  & + div {
    border-top: 0;
  }

  & > a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      font-weight: ${theme.fontWeight.bold};
      color: ${theme.color.textColor[100]};
      & > span {
        font-weight: ${theme.fontWeight.regular};
        color: ${theme.color.textDisabled};
        font-size: ${theme.fontSize.sm};
      }
    }
  }
`;

const ProfileBoxOuter = styled.div`
  padding: 2.4rem 0 4.4rem 0;
`;

const TasteStatisticsWrap = styled.div`
  padding: 0 1.6rem;
  margin-bottom: 2.4rem;
`;

export const S = {
  Title,
  ProfileBoxOuter,
  TitleButton,
  TasteStatisticsWrap,
  Wrapper,
};
