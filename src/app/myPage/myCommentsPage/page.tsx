"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "@/components/navHeaderLayout/NavHeaderInner";
import { useQuery } from "@tanstack/react-query";
import { getUserReviews } from "@/service/client/userInfo";
import { useState } from "react";
import { USER_COMMENT_FILTER_LIST } from "../../../constant/dropdown/commentFilterList";

import { S } from "./styles";
import ReviewCard from "../_components/ReviewCard/ReviewCard";

const MyCommentsPage = () => {
  const [sortFilter, setSortFilter] = useState(USER_COMMENT_FILTER_LIST[0]);
  const { data } = useQuery({
    queryKey: ["userReviews"],
    queryFn: async () => await getUserReviews(sortFilter.code),
  });

  const { timeStamp, reviews } = data ?? { timeStamp: null, reviews: [] };
  const reviewCount = reviews.length;

  console.log(reviews, sortFilter);

  return (
    <>
      <S.Wrapper>
        <NavHeader style={{ justifyContent: "center" }}>
          <NavHeaderInner text="평가향수" />
        </NavHeader>
        {reviewCount > 0 ? (
          <>
            <S.SnackbarBox>
              <S.Snackbar>
                <div>
                  <span>
                    전체 <S.NumberEmphasize>{reviewCount}</S.NumberEmphasize>건
                  </span>
                </div>
                <span>최근 등록순</span>
              </S.Snackbar>
            </S.SnackbarBox>
            <S.Container>
              {reviews.map(review => (
                <ReviewCard key={review.reviewId} {...review} />
              ))}
            </S.Container>
          </>
        ) : (
          <S.NothingReviews>평가한 향수가 없어요.</S.NothingReviews>
        )}
      </S.Wrapper>
    </>
  );
};

export default MyCommentsPage;
