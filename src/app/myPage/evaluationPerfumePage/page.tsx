"use client";

import styled from "@emotion/styled";
import ProductCardGrid from "@/components/organism/ProductCardGrid/ProductCardGrid";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "../../../components/navHeaderLayout/NavHeaderInner";
import FilterBox from "@/components/organism/FilterBox/FilterBox";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";

const EvaluationPerfumePage = () => {
  return (
    <S.Wrapper>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="평가향수" />
      </NavHeader>
      <HeaderBottomContents>
        <FilterBox />
        <ProductCardGrid />
      </HeaderBottomContents>
    </S.Wrapper>
  );
};

export default EvaluationPerfumePage;

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

const S = {
  Wrapper,
  HeaderInner,
};
