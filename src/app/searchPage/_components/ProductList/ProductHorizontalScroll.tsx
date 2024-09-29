import React from "react";
import ProductCard from "@/components/molecule/ProductCard/ProductCard";
import { S } from "./styles";
import { VisitHistory } from "@/types/res/searchPerfume";

type Props = {
  perfumeList: VisitHistory[];
};

const ProductHorizontalScroll = (perfumeList: Props) => {
  return (
    <S.Wrapper>
      <ul>
        <ProductCard
          type="SCROLL"
          perfumeInfo={{
            perfumeId: "2024092116592374500",
            perfumeName: "Gabrielle Essence Chanel",
            brandName: "샤넬",
            imageUrl: "https://fimgs.net/mdimg/perfume/m.56076.jpg",
            averageScore: 0,
            accordName: "white floral",
          }}
        />
        <ProductCard
          type="SCROLL"
          perfumeInfo={{
            perfumeId: "2024092116592374500",
            perfumeName: "Gabrielle Essence Chanel",
            brandName: "샤넬",
            imageUrl: "https://fimgs.net/mdimg/perfume/m.56076.jpg",
            averageScore: 0,
            accordName: "white floral",
          }}
        />
        <ProductCard
          type="SCROLL"
          perfumeInfo={{
            perfumeId: "2024092116592374500",
            perfumeName: "Gabrielle Essence Chanel",
            brandName: "샤넬",
            imageUrl: "https://fimgs.net/mdimg/perfume/m.56076.jpg",
            averageScore: 0,
            accordName: "white floral",
          }}
        />
        <ProductCard
          type="SCROLL"
          perfumeInfo={{
            perfumeId: "2024092116592374500",
            perfumeName: "Gabrielle Essence Chanel",
            brandName: "샤넬",
            imageUrl: "https://fimgs.net/mdimg/perfume/m.56076.jpg",
            averageScore: 0,
            accordName: "white floral",
          }}
        />
        <ProductCard
          type="SCROLL"
          perfumeInfo={{
            perfumeId: "2024092116592374500",
            perfumeName: "Gabrielle Essence Chanel",
            brandName: "샤넬",
            imageUrl: "https://fimgs.net/mdimg/perfume/m.56076.jpg",
            averageScore: 0,
            accordName: "white floral",
          }}
        />
      </ul>
    </S.Wrapper>
  );
};

export default ProductHorizontalScroll;
