"use client";

// import OAuthLoginButton from "@/components/atom/OAuthLoginButton";
import { S } from "./styles";
// import { clientCreateLoginTry } from "@/service/client/signInService";
// import { OauthType } from "@/constant/auth.const";

export default function SignInPage() {
  // const onClickLoginType = async (type: OauthType) => {
  //   const { uri } = await clientCreateLoginTry(type);
  //   window.open(uri);
  // };

  return (
    <S.Wrapper>
      <img src="/assets/images/logo.png" alt="로고이미지" />
      {/* <OAuthLoginButton type={OauthType.KAKAO} onClick={onClickLoginType} /> */}
    </S.Wrapper>
  );
}
