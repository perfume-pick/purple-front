// import Rating from "@/components/atom/Rating/Rating";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getMyReview } from "@/service/client/perfumeDetail";
import { useRouter } from "next/navigation";

type Props = {
  perfumeId: string;
};

function DetailEvaluation({ perfumeId }: Props) {
  const router = useRouter();
  // 향수 리뷰 조회
  const { data: myReviewInfo } = useQuery({
    queryKey: ["myReviewInfo", perfumeId],
    queryFn: () => getMyReview(perfumeId),
    enabled: !!perfumeId,
    retry: false,
  });

  const handleClickStarRating = () => {
    router.push(`/commentPage?perfumeId=${perfumeId}`);
  };

  return (
    <S.Wrapper>
      <span>평가하기</span>
      {/* <div>평가하기의 부연설명</div> */}
      <S.RatingWrap>
        {/* <Rating /> */}
        <ReadonlyRating
          rate={myReviewInfo?.review.score ?? 0}
          size={40}
          gap={0.7}
          onClick={handleClickStarRating}
        />
        <S.Score>
          <span>
            {myReviewInfo?.review.score % 1 === 0
              ? myReviewInfo?.review.score.toFixed(1)
              : myReviewInfo?.review.score}
          </span>
          <span>/ 5.0</span>
        </S.Score>
      </S.RatingWrap>
      <S.ClickGuide>
        <div>별을 클릭하세요</div>
      </S.ClickGuide>
    </S.Wrapper>
  );
}
export default DetailEvaluation;
