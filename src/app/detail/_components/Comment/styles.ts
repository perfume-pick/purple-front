import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

// DetailComment
const Wrapper = styled.div`
  background-color: ${theme.color.white};
`;

const TotalComment = styled.div`
  padding: 2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${theme.color.grayColor[100]};
  border-top: 3px solid ${theme.color.grayColor[100]};
`;

const CommentWrap = styled.div``;

const CommentTitle = styled.div`
  & > span:first-of-type {
    font-weight: ${theme.fontWeight.bold};
    margin-right: 0.5rem;
  }

  & > span:last-of-type {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.textDisabled};
  }
`;

const CommentMsg = styled.div`
  font-size: ${theme.fontSize.xs};
`;

// AverageScore
const AverageScoreWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 8rem;
  padding: 1.5rem 1rem;
  border-bottom: 3px solid ${theme.color.grayColor[100]};
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:first-of-type {
    font-size: 3.2rem;
    font-weight: ${theme.fontWeight.bold};
  }
`;

const OpenTopic = styled.div`
  display: flex;
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.red};
  align-items: center;
  justify-content: center;
  height: 5.6rem;
  border-bottom: 3px solid ${theme.color.grayColor[100]};

  & > div {
    margin-right: 1rem;
  }
`;

const CommentButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem;

  & > button {
    width: 100%;
    height: 5rem;
    border: 1px solid gray;
    border-radius: 1rem;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.textDisabled};
    background-color: ${theme.color.white};
  }
`;

// DetailReview
const ReviewWrapper = styled.div`
  padding: 1.6rem;
  border-bottom: 0.5px solid ${theme.color.grayColor[200]};

  & > span {
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.sm};
  }
`;

const Rating = styled.div`
  font-size: ${theme.fontSize.big};
  margin: 0.5rem 0;
`;

const ReviewContent = styled.div`
  font-size: ${theme.fontSize.sm};
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const S = {
  Wrapper,
  TotalComment,
  CommentWrap,
  CommentTitle,
  CommentMsg,
  AverageScoreWrap,
  Score,
  OpenTopic,
  CommentButtonWrap,
  ReviewWrapper,
  Rating,
  ReviewContent,
};
