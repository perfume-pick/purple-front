"use client";

import OAuthLoginButton from "@/components/atom/OAuthLoginButton";
import { S } from "./styles";
import { OauthType } from "@/constant/session";

export default function SignInPage() {
  return (
    <S.Wrapper>
      <div>Img</div>
      <OAuthLoginButton type={OauthType.KAKAO} />
    </S.Wrapper>
  );
}
