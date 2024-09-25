"use client";

import { S } from "./styles";
import EditableRating from "../atom/Rating/EditableRating";

type Props = {
  brandName: string;
  perfumeName: string;
  perfumeId: string;
  imageUrl: string;
  rating: number;
  setRating: (newRate: number, brandName: string, perfumeId: string) => void;
};

function EvaluationBanner({
  brandName,
  perfumeName,
  perfumeId,
  imageUrl,
  rating,
  setRating,
}: Props) {
  const handleRateChange = (newRate: number) => {
    setRating(newRate, brandName, perfumeId);
  };

  return (
    <S.Wrapper>
      <S.BannerImg src={imageUrl} />
      <S.ContentsWrapper>
        <span>{brandName}</span>
        <p>{perfumeName}</p>
        <EditableRating
          rate={rating}
          size={43}
          gap={0.35}
          onRateChange={handleRateChange}
        />
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
export default EvaluationBanner;
