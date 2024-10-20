import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 11rem 2rem;
  position: relative;
  background-color: ${theme.color.white};
`;

const CommentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.grayColor[500]};
  height: 4.6rem;
  width: 22rem;
  border-radius: 2.4rem;
  font-size: ${theme.fontSize.sm};
  margin: 2rem 0;
  color: ${theme.color.textDisabled};
`;

const CommentBtn = styled.div<{ isSelected: boolean }>`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 2.4rem;
  background-color: ${props => (props.isSelected ? theme.color.primary : "")};
  font-weight: ${props => (props.isSelected ? theme.fontWeight.bold : "")};
  color: ${props => (props.isSelected ? theme.color.white : "")};
`;

const EvaluationWrap = styled.div`
  width: 100%;
  margin: 2rem 0;

  & > span {
    font-size: ${theme.fontSize.base};
    font-weight: ${theme.fontWeight.semiBold};
  }
`;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewWrap = styled.div`
  width: 100%;
`;

const ReviewTitle = styled.div`
  display: flex;
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.semiBold};
  margin: 2rem 0;
`;
const TextAreaWrap = styled.div`
  width: 100%;
  border: none;
  height: 11.4rem;
  box-shadow: 0px 0px 18px -10px #821919;
  border-radius: 2rem;
  padding: 2rem;
  position: relative;
  margin-bottom: 1rem;

  & > textarea {
    width: 100%;
    border: none;
    height: 80%;
    resize: none;
  }

  & > div {
    position: absolute;
    right: 1.5rem;
    bottom: 1rem;
    color: ${theme.color.subPrimary};
  }
`;

const CommentButton = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  height: 11rem;
  background-color: ${theme.color.white};

  @media (min-width: 440px) {
    width: 440px;
  }
`;

export const S = {
  Wrapper,
  CommentWrap,
  CommentBtn,
  EvaluationWrap,
  RatingWrap,
  ReviewWrap,
  ReviewTitle,
  TextAreaWrap,
  CommentButton,
};
