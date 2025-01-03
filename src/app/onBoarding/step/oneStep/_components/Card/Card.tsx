import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

type Props = {
  brandName: string;
  imageUrl: string;
  isSelected: boolean;
  handleClickCard: () => void;
};

const Card = ({ brandName, imageUrl, isSelected, handleClickCard }: Props) => {
  return (
    <S.Wrapper onClick={handleClickCard}>
      {/* <img src={imageUrl} /> */}
      <S.ImgBox>
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}`}
          alt={`${brandName} 이미지`}
        />
        {isSelected && (
          <img
            className="check-icon"
            src="/assets/images/Check.png"
            alt="check image"
          />
        )}
      </S.ImgBox>
      <span>{brandName}</span>
    </S.Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > span {
    margin: 1.5rem 0;
    color: ${theme.color.black};
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;

    &.check-icon {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      top: 1rem;
      right: 1rem;
    }
  }
`;

const S = {
  Wrapper,
  ImgBox,
};

export default Card;
