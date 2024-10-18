"use client";

import { S } from "./styles";
import ProfileBox from "./_components/ProfileBox/ProfileBox";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import MyPageNavHeader from "./_components/NavHeader/NavHeader";
import ReviewPerfume from "./_components/ReviewPerfume/ReviewPerfume";
import Accord from "./_components/Accord/Accord";
import Brand from "./_components/\bBrand/Brand";

const MyPage = () => {
  return (
    <S.Wrapper>
      <MyPageNavHeader />
      <HeaderBottomContents>
        <ProfileBox />
        <ReviewPerfume />
        <Accord />
        <Brand />
      </HeaderBottomContents>
    </S.Wrapper>
  );
};

export default MyPage;
