import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  & > div {
    & > div:last-child {
      padding-top: 3rem;
    }
  }
`;

const HeaderInner = styled.div`
  text-align: center;
  span {
    font-size: 1.7rem;
  }
`;

const BrandCommentTopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileTextWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.textColor[100]};
    font-weight: ${theme.fontWeight.bold};
    & > span {
      font-size: 1rem;
      color: ${theme.color.textDisabled};
      font-weight: ${theme.fontWeight.regular};
      margin-left: 0.4rem;
    }
  }
`;

const StarWrap = styled.ul`
  display: flex;
  flex-direction: row;
`;

const ProfileArea = styled.div`
  display: flex;

  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
  }
`;

export const S = {
  Wrapper,
  HeaderInner,
  BrandCommentTopArea,
  ProfileTextWrap,
  StarWrap,
  ProfileArea,
};
