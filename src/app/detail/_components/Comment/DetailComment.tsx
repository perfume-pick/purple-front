import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { forwardRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { S } from "./styles";
import Topic from "./Topic/Topic";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import RatingDistributionChart from "./RatingDistributionChart/RatingDistributionChart";
import CommentBox from "@/components/organism/CommentBox/CommentBox";
import DetailCommentBox from "@/components/organism/CommentBox/DetailCommentBox";
import { getReviews, getStatistics } from "@/service/client/perfumeDetail";
import { EvaluationStatisticInfo } from "@/types/res/perfumeDetail";

interface DetailCommentProps {
  perfumeId: string;
}

const DetailComment = forwardRef<HTMLDivElement, DetailCommentProps>(
  ({ perfumeId }, ref) => {
    {
      /**TODO: 코멘트 데이터가 없어, 임시 주석 처리 */
    }
    // 코멘트 토픽 조회
    const { data: statisticsInfo } = useQuery({
      queryKey: ["statisticsInfo", perfumeId],
      queryFn: () => getStatistics(perfumeId),
      enabled: !!perfumeId,
      // retry: false,
    });

    // 코멘트 토픽 조회
    // const { data: reviewsInfo } = useQuery({
    //   queryKey: ["reviewsInfo", perfumeId],
    //   queryFn: () => getReviews(perfumeId),
    //   enabled: !!perfumeId,
    //   retry: false,
    // });

    // console.log(reviewsInfo);

    const chartData = [
      {
        rate: 5,
        percentage: 65,
        userNumber: 100,
      },
      {
        rate: 4,
        percentage: 10,
        userNumber: 100,
      },
      {
        rate: 3,
        percentage: 8,
        userNumber: 100,
      },
      {
        rate: 2,
        percentage: 2,
        userNumber: 100,
      },
      {
        rate: 1,
        percentage: 15,
        userNumber: 100,
      },
    ];

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
            <div>
              {statisticsInfo && statisticsInfo.starRatingStatistics[0].score}
            </div>
            <ReadonlyRating
              rate={
                statisticsInfo && statisticsInfo.starRatingStatistics[0].score
              }
              size={23}
              gap={0.7}
            />
          </S.Score>
          <S.ChartWrap>
            <RatingDistributionChart chartData={chartData} />
          </S.ChartWrap>
        </S.AverageScoreWrap>
        <S.TopicWrap>
          {statisticsInfo &&
            statisticsInfo.evaluationStatistics.map(
              (item: EvaluationStatisticInfo) => {
                return (
                  <Topic
                    key={item.fieldCode}
                    fieldName={item.fieldName}
                    evaluationOptions={item.evaluationOptions}
                  />
                );
              },
            )}
        </S.TopicWrap>
        <S.TotalComment>
          <S.CommentWrap>
            <S.CommentTitle>
              <span>코멘트</span>
              <span>(25)</span>
            </S.CommentTitle>
            <S.CommentMsg>
              동일한 제품에 대해 작성된 코멘트로, 향수 용량은 다를 수 있습니다.
            </S.CommentMsg>
          </S.CommentWrap>
          <ArrowForwardIosIcon
            style={{ color: "#9b9b9e", fontSize: "1.2rem" }}
          />
        </S.TotalComment>
        <CommentBox />
        <CommentBox />
        <DetailCommentBox />
        <S.CommentButtonWrap>
          <button> 23개 코멘트 전체보기</button>
        </S.CommentButtonWrap>
      </S.Wrapper>
    );
  },
);

DetailComment.displayName = "DetailComment";
export default DetailComment;
