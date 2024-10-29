"use client";

import { S } from "./styles";
import { USER_COMMENT_FILTER_LIST } from "@/constant/dropdown/commentFilterList";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "@/service/client/perfumeDetail";
import { Review } from "@/types/res/review";
import { useMemo, useState } from "react";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "@/components/navHeaderLayout/NavHeaderInner";
import FilterBox from "@/components/organism/FilterBox/FilterBox";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import CommentBox from "@/components/organism/CommentBox/CommentBox";

const CommentsPage = () => {
  const searchParams = useSearchParams();
  const perfumeId = searchParams.get("perfumeId");

  const [isDetail, setIsDetail] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    USER_COMMENT_FILTER_LIST[0].code,
  );

  // 코멘트 토픽 조회
  const { data: reviewsInfo } = useQuery({
    queryKey: ["reviewsInDetailComments", perfumeId, selectedFilter],
    queryFn: () => {
      if (perfumeId && selectedFilter) {
        return getReviews(perfumeId, selectedFilter);
      }
      return Promise.resolve(null);
    },
    enabled: !!perfumeId,
    retry: false,
  });

  const filteredReviews = useMemo(() => {
    return isDetail
      ? reviewsInfo?.reviews.filter(
          (review: Review) => review.reviewType === "DETAIL",
        )
      : reviewsInfo?.reviews;
  }, [isDetail, reviewsInfo?.reviews]);

  const handleSetIsDetail = () => setIsDetail(prev => !prev);

  const handleChangeSelectedFilter = (code: string) => setSelectedFilter(code);

  return (
    <S.Wrapper>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="코멘트" />
      </NavHeader>
      <HeaderBottomContents>
        <FilterBox
          filterList={USER_COMMENT_FILTER_LIST}
          commentCount={reviewsInfo?.reviews.length ?? 0}
          isDetail={isDetail}
          selectedFilter={selectedFilter}
          handleSetIsDetail={handleSetIsDetail}
          handleChangeSelectedFilter={handleChangeSelectedFilter}
        />
        {filteredReviews && filteredReviews.length > 0
          ? filteredReviews.map((review: Review) => (
              <CommentBox
                key={review.reviewId}
                reviewInfo={review}
                perfumeId={perfumeId ?? ""}
              />
            ))
          : null}
      </HeaderBottomContents>
    </S.Wrapper>
  );
};

export default CommentsPage;
