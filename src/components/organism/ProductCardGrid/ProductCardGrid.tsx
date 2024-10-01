"use client";

import { DetailPerfumeInfo } from "@/types/res/perfume";
import React from "react";
import ProductCard from "../../molecule/ProductCard/ProductCard";
import { S } from "./styles";

type Props = {
  dataList: DetailPerfumeInfo[];
};

const ProductHorizontalScroll = ({ dataList }: Props) => {
  console.log(dataList);
  return (
    <S.Wrapper>
      <ul>
        {dataList?.map(perfume => {
          return <ProductCard key={perfume.perfumeId} perfumeInfo={perfume} />;
        })}
      </ul>
    </S.Wrapper>
  );
};

export default ProductHorizontalScroll;
