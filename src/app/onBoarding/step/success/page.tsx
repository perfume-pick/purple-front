"use client";

import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();
  const handleClickConfirmBtn = () => {
    router.push("/", { scroll: false });
  };
  return (
    <S.Wrapper>
      <S.ContentsWrap>
        <img src="/assets/images/icon_check_big.png" alt="체크아이콘" />
        <S.BigText>향수 평가하기 성공</S.BigText>
        <S.NormalText>
          이제 <p>환급, 부가세, 양도세 상담</p> 등의 다양한 맞춤 서비스를 이용할
          수 있어요!
        </S.NormalText>
      </S.ContentsWrap>
      <S.ButtonWrap>
        <button onClick={handleClickConfirmBtn}>확인</button>
      </S.ButtonWrap>
    </S.Wrapper>
  );
};

export default SuccessPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentsWrap = styled.div`
  width: 70%;
  img {
    width: 30%;
  }
`;

const BigText = styled.h1`
  color: ${theme.color.textColor[100]};
  font-size: ${theme.fontSize.lg};
  padding: 3.2rem 0 1.6rem 0;
`;
const NormalText = styled.h2`
  font-size: ${theme.fontSize.base};
  color: ${theme.color.textDisabled};
  font-weight: ${theme.fontWeight.regular};
  word-break: keep-all;
  line-height: 1.5;

  > p {
    display: inline;
    color: ${theme.color.textColor[100]};
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 1.6rem;

  button {
    width: calc(100% - 3.2rem);
    height: 5rem;
    background-color: ${theme.color.primary};
    padding: 1rem 0;
    border-radius: 1rem;
    font-size: ${theme.fontSize.md};
    color: ${theme.color.white};
    font-weight: ${theme.fontWeight.bold};
  }
`;

const S = {
  Wrapper,
  BigText,
  NormalText,
  ButtonWrap,
  ContentsWrap,
};
