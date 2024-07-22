import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.white};
  border-radius: 0.6rem;
  overflow: hidden;
  width: 100%;
  margin: 2rem 0;
  box-shadow: 0px 1px 15px 0px #d9d9d9;
`;

const BannerImg = styled.img`
  aspect-ratio: 1.44;
  width: 100%;
`;

const ContentWrap = styled.div`
  height: 14.2rem;
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  & > span {
    color: ${theme.color.textDisabled};
  }
`;

const Title = styled.div`
  color: ${theme.color.textColor[100]};
  font-size: ${theme.fontSize.md};
  line-height: 2.1rem;
  font-weight: ${theme.fontWeight.bold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Score = styled.div`
  display: flex;
  color: ${theme.color.textDisabled};
`;

const CategoryWrap = styled.div`
  display: flex;
  margin-left: 0.5rem;

  & > span {
    margin-left: 0.5rem;
  }
`;

const BannerInfo = styled.div`
  margin-top: auto;
  font-size: ${theme.fontSize.sm};
  color: ${theme.color.textColor[200]};
  line-height: 2.2rem;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const S = {
  Wrapper,
  BannerImg,
  ContentWrap,
  BannerInfo,
  Title,
  Score,
  CategoryWrap,
};
