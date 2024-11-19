"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "@/components/navHeaderLayout/NavHeaderInner";
import { useQuery } from "@tanstack/react-query";
import { getUserReviews } from "@/service/client/userInfo";
import { useState } from "react";
import { USER_COMMENT_FILTER_LIST } from "@/constant/dropdown/commentFilterList";

import { S } from "./styles";
import ReviewCard from "../_components/ReviewCard/ReviewCard";
import Dropdown from "@/components/molecule/Dropdown/Dropdown";

const MyCommentsPage = () => {
  const [sortFilterCode, setSortFilterCode] = useState(
    USER_COMMENT_FILTER_LIST[0].code,
  );
  const { data } = useQuery({
    queryKey: ["userReviews", sortFilterCode],
    queryFn: async () => await getUserReviews(sortFilterCode),
  });

  const { timeStamp, reviews } = data ?? { timeStamp: null, reviews: [] };
  const reviewCount = reviews.length;

  const handleSelectDropBox = (selectedCode: string) => {
    setSortFilterCode(selectedCode);
  };

  console.log(reviews);

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
                <S.DropdownBox>
                  <Dropdown
                    selectedCode={sortFilterCode}
                    handleChangeSelectedFilter={handleSelectDropBox}
                    filterList={USER_COMMENT_FILTER_LIST}
                  />
                </S.DropdownBox>
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
