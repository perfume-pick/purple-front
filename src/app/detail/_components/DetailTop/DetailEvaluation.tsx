// import Rating from "@/components/atom/Rating/Rating";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getMyReview } from "@/service/client/perfumeDetail";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import { COMMENT_STAR_RATING_MESSAGE_LIST } from "@/constant/comment/starRatingText";

type Props = {
  perfumeId: string;
};

function DetailEvaluation({ perfumeId }: Props) {
  const router = useRouter();
  const [ratingMessage, setRatingMessage] = useState("");

  // 향수 리뷰 조회
  const { data: myReviewInfo } = useQuery({
    queryKey: ["myReviewInfo", perfumeId],
    queryFn: () => getMyReview(perfumeId),
    enabled: !!perfumeId,
    retry: false,
  });

  useEffect(() => {
    // 별점 갯수에 맞는 텍스트 업데이트
    const starRating = myReviewInfo?.review.score
      ? Math.ceil(myReviewInfo?.review.score)
      : 0;
    const matchedItem = COMMENT_STAR_RATING_MESSAGE_LIST.filter(
      item => item.value === starRating,
    )[0];

    setRatingMessage(
      matchedItem ? matchedItem.text : COMMENT_STAR_RATING_MESSAGE_LIST[0].text,
    );
  }, [myReviewInfo]);

  const handleClickStarRating = () => {
    router.push(`/commentPage?perfumeId=${perfumeId}`, { scroll: false });
  };

  return (
    <S.Wrapper>
      <span>평가하기</span>
      <S.RatingWrap>
        <ReadonlyRating
          rate={myReviewInfo?.review.score ?? 0}
          size={40}
          gap={0.7}
          onClick={handleClickStarRating}
        />
        <S.Score>
          <span>
            {myReviewInfo?.review?.score != null
              ? myReviewInfo.review.score % 1 === 0
                ? myReviewInfo.review.score.toFixed(1)
                : myReviewInfo.review.score
              : null}
          </span>
          <span>/ 5.0</span>
        </S.Score>
      </S.RatingWrap>
      <S.ClickGuide>
        <div>{ratingMessage}</div>
      </S.ClickGuide>
    </S.Wrapper>
  );
}
export default DetailEvaluation;
