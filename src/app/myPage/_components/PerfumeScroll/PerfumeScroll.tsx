import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
// import ProductHorizontalScroll from "../../../searchPage/_components/ProductList/ProductHorizontalScroll";
import Link from "../../../../../node_modules/next/link";

const PurfumeScroll = () => {
  return (
    <>
      <S.TitleWrap>
        <div>
          <span>인생향수</span>
          <span>5</span>
        </div>
        <Link href="/myPage/favoritePerfumes">
          <span>더보기</span>
        </Link>
      </S.TitleWrap>
      {/* <ProductHorizontalScroll /> */}
    </>
  );
};

export default PurfumeScroll;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;

  & > div {
    span {
      font-weight: ${theme.fontWeight.bold};
      &:first-of-type {
        font-weight: ${theme.fontWeight.bold};
      }

      &:last-child {
        font-weight: ${theme.fontWeight.semiBold};
        margin-left: 0.4rem;
        color: ${theme.color.primary};
      }
    }
  }

  & > a > span {
    color: ${theme.color.textDisabled};
  }
`;

const S = {
  TitleWrap,
};
