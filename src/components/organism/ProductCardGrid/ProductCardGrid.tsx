"use client";

import { DetailPerfumeInfo } from "@/types/res/perfume";
import React from "react";
import ProductCard from "../../molecule/ProductCard/ProductCard";
import { S } from "./styles";

type Props = {
  dataList: DetailPerfumeInfo[];
  handleClickProductCard?: () => Promise<void>;
};

const ProductHorizontalScroll = ({
  dataList,
  handleClickProductCard,
}: Props) => {
  return (
    <S.Wrapper>
      <ul>
        {dataList?.map(perfume => {
          return (
            <ProductCard
              key={perfume.perfumeId}
              perfumeInfo={perfume}
              handleClickProductCard={handleClickProductCard}
            />
          );
        })}
      </ul>
    </S.Wrapper>
  );
};

export default ProductHorizontalScroll;
