import React from "react";
import ProductCard from "@/components/molecule/ProductCard/ProductCard";
import { S } from "./styles";
import { VisitHistory } from "@/types/res/searchPerfume";
import useHorizontalScroll from "@/hook/useHorizontalScroll";

type Props = {
  perfumeList: VisitHistory[];
};

const ProductHorizontalScroll = ({ perfumeList }: Props) => {
  const { containerRef, onDragStart, onDragMove, onDragEnd } =
    useHorizontalScroll<HTMLDivElement>();

  return (
    <S.Wrapper
      style={{
        display: "flex",
        gap: "6px",
        overflowX: "hidden",
        textWrap: "nowrap",
      }}
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseLeave={onDragEnd}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
    >
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
