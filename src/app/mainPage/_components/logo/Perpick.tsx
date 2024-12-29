import { S } from "./styles";

const PerpickLogo = () => {
  return (
    <S.Wrapper>
      <S.LogoImage
        alt="perpickColorLogo"
        src="/assets/images/colorLogo.png"
        sizes="100%"
        fill
        priority
      />
    </S.Wrapper>
  );
};

export default PerpickLogo;
