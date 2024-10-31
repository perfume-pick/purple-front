"use client";

import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";

import { Perfume as PerfumeType } from "@/types/res/recommend";
import { useRouter } from "next/navigation";
import { usePerfumeDetailStore } from "@/store/perfumeDetailStore";

interface PerfumeProps extends PerfumeType {}

function Perfume({
  perfumeId,
  name,
  brandName,
  imageUrl,
  averageScore,
  accordNames,
}: PerfumeProps) {
  const router = useRouter();

  const { updatePerfumeInfo } = usePerfumeDetailStore();

  const handlePerfumeClick = () => {
    updatePerfumeInfo({
      perfumeId,
      perfumeName: name, //!
      brandName,
      imageUrl,
      averageScore,
      accordName: accordNames?.[0] ?? "", //!
    });
    router.push(`detail?perfumeId=${perfumeId}`);
  };

  return (
    <S.Wrapper onClick={handlePerfumeClick}>
      <S.PerfumeContainer>
        <S.PerfumeImg
          src={imageUrl || ""}
          objectFit="contain"
          alt="perfumeImage"
          fill
        />
      </S.PerfumeContainer>
      <S.ContentWrap>
        <span>{brandName}</span>
        <S.Title>{name}</S.Title>
        <S.Score>
          <Star style={{ color: "red" }} />
          <div>{averageScore.toFixed(1)}</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <span>{accordNames?.join(", ")}</span>
          </S.CategoryWrap>
        </S.Score>
      </S.ContentWrap>
    </S.Wrapper>
  );
}

export default Perfume;
