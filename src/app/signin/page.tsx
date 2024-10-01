"use client";

import OAuthLoginButton from "@/components/atom/OAuthLoginButton";
import { S } from "./styles";
import { clientCreateLoginTry } from "@/service/client/signInService";
import { OauthType } from "@/constant/auth.const";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logoImg from "/public/assets/images/logo.png";
import TokenClientService from "@/utils/tokenService.client";

export default function SignInPage() {
  const router = useRouter();
  const onClickLoginType = async (type: OauthType) => {
    deleteToken();

    const { data } = await clientCreateLoginTry(type);
    router.push(data.responseData.uri);
  };

  return (
    <S.Wrapper>
      {/* <img src={logoImg} alt="로고이미지" /> */}
      <Image src={logoImg} layout="intrinsic" width="auto" height="auto" />
      <OAuthLoginButton type={OauthType.KAKAO} onClick={onClickLoginType} />
    </S.Wrapper>
  );
}

const deleteToken = () => {
  if (TokenClientService.getToken()) {
    TokenClientService.removeToken();
  }
  fetch("/api/delete-token", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
