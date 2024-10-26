import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Wrapper = styled.div`
  padding: 1.6rem;
`;

const ReviewText = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.color.textColor[200]};
  line-height: 2.24rem;
  padding-top: 1.2rem;

  &.brief-text {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-line;
  }
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSize.xs};
  color: ${theme.color.textColor[200]};
  padding-top: 0.4rem;
`;

const BrandCommentTopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileTextWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.textColor[100]};
    font-weight: ${theme.fontWeight.bold};
    & > span {
      font-size: 1rem;
      color: ${theme.color.textDisabled};
      font-weight: ${theme.fontWeight.regular};
      margin-left: 0.4rem;
    }
  }
`;

const StarWrap = styled.ul`
  display: flex;
  flex-direction: row;
`;

const ProfileArea = styled.div`
  display: flex;

  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
  }
`;

const CommentInfoWrap = styled.div`
  display: flex;
`;

const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin: 1rem 0;
`;

const InfoContent = styled.div`
  display: flex;
  font-size: ${theme.fontSize.xs};
  margin: 0.7rem 0;
  & > span {
    color: ${theme.color.textColor[100]};
    width: 35%;
  }
  & > div {
    font-weight: ${theme.fontWeight.semiBold};
  }
`;

const Keyword = styled.div`
  display: flex;
  font-size: ${theme.fontSize.sm};

  & > div {
    margin-right: 1rem;
  }
`;

export const S = {
  Wrapper,
  ReviewText,
  BottomButtons,
  BrandCommentTopArea,
  ProfileTextWrap,
  StarWrap,
  ProfileArea,
  CommentInfoWrap,
  InfoWrap,
  InfoContent,
  Keyword,
};
