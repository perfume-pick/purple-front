"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import SearchBar from "@/components/atom/SearchBar/SearchBar";
import Banner from "@/components/banner/Banner";

// 임시 테스트. map돌리는곳. 나중에 api 연동하면 데이터로 교체하고 삭제.
function MainPage() {
  const [keyword, setKeyword] = useState("");

  // const handleChipClick = (text: string) => {
  //   setKeyword(text);
  // };

  return (
    <S.Wrapper>
      <S.TopWrap>
        <S.LogoWrap>
          <img src="/assets/images/colorLogo.png" />
        </S.LogoWrap>
        <SearchBar
          placeholderText="나의 향을 검색해보세요"
          inputValue={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </S.TopWrap>
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </S.Wrapper>
  );
}
export default MainPage;

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
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

const S = {
  Wrapper,
  TopWrap,
  LogoWrap,
};
