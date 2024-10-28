import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { forwardRef } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { S } from "./styles";
import { getReviews, getStatistics } from "@/service/client/perfumeDetail";
import { EvaluationStatisticInfo } from "@/types/res/perfumeDetail";
import { USER_COMMENT_FILTER_LIST } from "@/constant/dropdown/commentFilterList";
import { usePerfumeDetailStore } from "@/store/perfumeDetailStore";
import { PerfumeDetailStore } from "@/store/types";
import { DetailPerfumeInfo } from "@/types/res/perfume";
import { Review } from "@/types/res/review";
import { EvaluationOptionInfo } from "@/types/res/perfumeDetail";
import Topic from "./Topic/Topic";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import RatingDistributionChart from "./RatingDistributionChart/RatingDistributionChart";
import CommentBox from "@/components/organism/CommentBox/CommentBox";

interface DetailCommentProps {
  perfumeId: string;
}

const DetailComment = forwardRef<HTMLDivElement, DetailCommentProps>(
  ({ perfumeId }, ref) => {
    const router = useRouter();

    const currentPerfumeInfo: DetailPerfumeInfo = usePerfumeDetailStore(
      (state: PerfumeDetailStore) => state.currentPerfumeInfo,
    );
    // 코멘트 토픽 조회
    const { data: statisticsInfo } = useQuery({
      queryKey: ["statisticsInfo", perfumeId],
      queryFn: () => getStatistics(perfumeId),
      enabled: !!perfumeId,
      // retry: false,
    });

    // 코멘트 토픽 조회
    const { data: reviewsInfo } = useQuery({
      queryKey: ["reviewsInDetail", perfumeId],
      queryFn: () =>
        getReviews(
          perfumeId,
          USER_COMMENT_FILTER_LIST.filter(item => item.title === "최신순")[0]
            .code,
        ),
      enabled: !!perfumeId,
      retry: false,
    });

    const handleClickCommentPage = () => {
      router.push(`/detail/comments?perfumeId=${perfumeId}`);
    };

    return (
      <S.Wrapper ref={ref}>
        <S.TotalComment>
          <S.CommentWrap>
            <S.CommentTitle>
              <span>코멘트 토픽</span>
            </S.CommentTitle>
            <S.CommentMsg>퍼픽 유저들이 꼽은 향수 특징이에요</S.CommentMsg>
          </S.CommentWrap>
        </S.TotalComment>
        <S.AverageScoreWrap>
          <S.Score>
            <div>{currentPerfumeInfo.averageScore ?? 0}</div>
            <ReadonlyRating
              rate={currentPerfumeInfo.averageScore ?? 0}
              size={23}
              gap={0.7}
            />
          </S.Score>
          <S.ChartWrap>
            <RatingDistributionChart
              chartData={statisticsInfo?.starRatingStatistics ?? []}
            />
          </S.ChartWrap>
        </S.AverageScoreWrap>
        <S.TopicWrap>
          {statisticsInfo &&
            statisticsInfo.evaluationStatistics.map(
              (item: EvaluationStatisticInfo) => {
                return (
                  item.evaluationOptions.filter(
                    (option: EvaluationOptionInfo) => {
                      option.votePercent > 0;
                    },
                  ).length > 0 && (
                    <Topic
                      key={item.fieldCode}
                      fieldName={item.fieldName}
                      evaluationOptions={item.evaluationOptions}
                    />
                  )
                );
              },
            )}
        </S.TopicWrap>
        <S.TotalComment>
          <S.CommentWrap onClick={handleClickCommentPage}>
            <S.CommentTitle>
              <span>코멘트</span>
              <span>({reviewsInfo && reviewsInfo.reviews.length})</span>
            </S.CommentTitle>
            <S.CommentMsg>
              동일한 제품에 대해 작성된 코멘트로, 향수 용량은 다를 수 있습니다.
            </S.CommentMsg>
          </S.CommentWrap>
          <ArrowForwardIosIcon
            style={{ color: "#9b9b9e", fontSize: "1.2rem" }}
          />
        </S.TotalComment>
        {reviewsInfo?.reviews.map((review: Review) => {
          return (
            <CommentBox
              key={review.reviewId}
              reviewInfo={review}
              perfumeId={perfumeId}
            />
          );
        })}
        <S.CommentButtonWrap>
          <button>
            {" "}
            {reviewsInfo && reviewsInfo?.reviews.length}개 코멘트 전체보기
          </button>
        </S.CommentButtonWrap>
      </S.Wrapper>
    );
  },
);

DetailComment.displayName = "DetailComment";
export default DetailComment;
