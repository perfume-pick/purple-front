import { OauthType } from "@/constant/auth.const";
import { FC } from "react";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";
import kakaoLogoImg from "/public/assets/images/kakao_logo.png";

interface PropTypes {
  type: OauthType;
  onClick: (type: OauthType) => void;
}

type ButtonAssetTypes = {
  [key in OauthType]: {
    text: string;
    color: string;
    img: string;
  };
};

const buttonAsset: ButtonAssetTypes = {
  [OauthType.KAKAO]: {
    text: "카카오 로그인",
    color: `${theme.color.kakao}`,
    img: "/assets/images/kakao_logo.png",
  },
};

const OAuthLoginButton: FC<PropTypes> = ({ type, onClick }) => {
  const { color, text } = buttonAsset[type];
  return (
    <Wrapper bgColor={color} onClick={() => onClick(type)}>
      <Image src={kakaoLogoImg} alt={text} />
      <LoginText>{text}</LoginText>
    </Wrapper>
  );
};
export default OAuthLoginButton;

const Wrapper = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 0.6rem;
  padding: 1.1rem 1.4rem;
  max-width: 24rem;
  width: 100%;
  display: flex;
  align-items: center;

  > img {
    max-width: 1.8rem;
    max-height: 1.8rem;
    object-fit: cover;
  }
`;

// const LoginLogo = styled.Image`
//   max-width: 1.8rem;
//   max-height: 1.8rem;
//   object-fit: cover;
// `;

const LoginText = styled.span`
  font-size: 1.5rem;
  line-height: 2.2rem;
  flex: 1;
  text-align: center;
`;
