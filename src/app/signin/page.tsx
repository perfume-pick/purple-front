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
    const { responseData } = await clientCreateLoginTry(
      type,
      window.location.origin,
    );
    router.push(responseData.uri, { scroll: false });
  };

  return (
    <S.Wrapper>
      <Image
        src={logoImg}
        width={100}
        height={100}
        style={{ height: "auto" }}
        alt="로고 이미지"
        priority
      />
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
