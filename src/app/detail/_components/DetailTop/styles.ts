import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

// DetailPageBanner

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 4.6rem;
  border-bottom: 5px solid ${theme.color.grayColor[100]};
`;

const BannerImage = styled.img`
  width: 100%;
  height: 40rem;
`;

const BannerContentWrap = styled.div`
  width: 100%;
  display: flex;
  background-color: ${theme.color.white};
  flex-direction: column;
  padding: 2rem;

  & > span {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.textDisabled};
  }
`;

const Title = styled.div`
  font-size: ${theme.fontSize.big};
  font-weight: ${theme.fontWeight.bold};
`;

const ScoreWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.color.textDisabled};
  font-size: ${theme.fontSize.xs};
`;

const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize.xs};
  margin-left: 0.5rem;

  & > span {
    margin-left: 0.5rem;
    color: ${theme.color.textDisabled};
  }
`;

// DetailEvaluation

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  background-color: ${theme.color.white};
  margin: 0.5rem 0;
  border-bottom: 5px solid ${theme.color.grayColor[100]};

  & > span {
    font-size: ${theme.fontSize.base};
    font-weight: ${theme.fontWeight.bold};
  }

  & > div {
    font-size: ${theme.fontSize.sm};
  }
`;

const RatingWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Score = styled.div`
  display: flex;
  font-size: ${theme.fontSize.big};
  font-weight: ${theme.fontWeight.bold};
  margin-left: 1rem;

  & > span:last-child {
    color: ${theme.color.textDisabled};
    margin-left: 1rem;
  }
`;

const ClickGuide = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.semiBold};
  margin-top: 1rem;
`;

export const S = {
  BannerWrapper,
  BannerImage,
  Title,
  BannerContentWrap,
  Wrapper,
  ScoreWrap,
  CategoryWrap,
  RatingWrap,
  Score,
  ClickGuide,
};
