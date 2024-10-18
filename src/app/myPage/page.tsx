"use client";

import { S } from "./styles";
import ProfileBox from "./_components/ProfileBox/ProfileBox";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import MyPageNavHeader from "./_components/NavHeader/NavHeader";
import ReviewPerfume from "./_components/ReviewPerfume/ReviewPerfume";

const MyPage = () => {
  return (
    <S.Wrapper>
      <MyPageNavHeader />
      <HeaderBottomContents>
        <ProfileBox />
        <ReviewPerfume />
      </HeaderBottomContents>
    </S.Wrapper>
  );
};

export default MyPage;
