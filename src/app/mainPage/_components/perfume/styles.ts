import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";

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
  box-shadow: 0px 5px 10px 0px #f5f5f5;
  cursor: pointer;
`;

const PerfumeContainer = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
`;

const PerfumeImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.div`
  height: 14.2rem;
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4rem;
  & > span {
    color: ${theme.color.textDisabled};
    font-size: ${theme.fontSize.xs};
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
  gap: 0.4rem;
  align-items: center;
`;

const CategoryWrap = styled.div`
  display: flex;
  margin-left: 0.5rem;

  & > span {
    margin-left: 0.5rem;
  }
`;

const PerfumeInfo = styled.div`
  margin-top: 0.8rem;
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
  PerfumeContainer,
  PerfumeImg,
  ContentWrap,
  PerfumeInfo,
  Title,
  Score,
  CategoryWrap,
};
