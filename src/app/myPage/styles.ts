import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-bottom: 2.4rem;
`;

const Title = styled.span`
    display: block;
    padding: 1.6rem;
    font-weight: ${theme.fontWeight.semiBold};
`;

const TitleButton = styled.div`
  display: flex;
  border-top: 3px solid #F9F9F9;
  border-bottom: 3px solid #F9F9F9;
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
    padding-bottom: 4.4rem;
`;

const HeaderInner = styled.div`
  text-align: center;
  span {
    font-size: 1.7rem;
  }
`;

const TasteStatisticsWrap = styled.div`
  padding: 0 1.6rem;
  margin-bottom: 2.4rem;
`;

export const S = {
    Title,
    ProfileBoxOuter,
    HeaderInner,
    TitleButton,
    TasteStatisticsWrap,
    Wrapper
};
