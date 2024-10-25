"use client";

import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";

import { Perfume as PerfumeType } from "@/types/res/recommend";

interface PerfumeProps extends PerfumeType {}

function Perfume({
  name,
  brandName,
  imageUrl,
  averageScore,
  accordNames,
}: PerfumeProps) {
  return (
    <S.Wrapper>
      <S.PerfumeImg src={imageUrl} />
      <S.ContentWrap>
        <span>{brandName}</span>
        <S.Title>{name}</S.Title>
        <S.Score>
          <Star style={{ color: "red" }} />
          <div>{averageScore.toFixed(1)}</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <span>
              {accordNames ? accordNames.join(", ") : "어코드가 없습니다."}
            </span>
          </S.CategoryWrap>
        </S.Score>
        <S.PerfumeInfo>향수 정보에 대한 내용이 필요합니다.</S.PerfumeInfo>
      </S.ContentWrap>
    </S.Wrapper>
  );
}

export default Perfume;
