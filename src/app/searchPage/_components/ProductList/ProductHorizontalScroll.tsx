import React from "react";
import ProductCard from "@/components/molecule/ProductCard/ProductCard";
import { S } from "./styles";
import { VisitHistory } from "@/types/res/searchPerfume";

type Props = {
  perfumeList: VisitHistory[];
};

const ProductHorizontalScroll = ({ perfumeList }: Props) => {
  return (
    <S.Wrapper>
      <ul>
        {perfumeList &&
          perfumeList.map((item: VisitHistory) => {
            return (
              <ProductCard
                key={item.order}
                type="SCROLL"
                perfumeInfo={item.perfume}
              />
            );
          })}
      </ul>
    </S.Wrapper>
  );
};

export default ProductHorizontalScroll;
