"use client";

import styled from "@emotion/styled";
import {
  COMMENT_BOX_FILTER,
  COMMENT_FILTER_LIST,
} from "@/constant/dropdown/commentFilterList";
import { useState } from "react";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import CommentBox from "../../../components/organism/CommentBox/CommentBox";
import FilterBox from "@/components/organism/FilterBox/FilterBox";
import MoreButton from "../../../components/molecule/MoreButton/MoreButton";
import NavHeaderInner from "../../../components/navHeaderLayout/NavHeaderInner";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import EditableRating from "../../../components/atom/Rating/EditableRating";

const MyCommentsPage = () => {
  const [rating, setRating] = useState(1.5);

  const handleRateChange = (newRate: number) => {
    setRating(newRate);
  };

  const handleDeleteComment = () => {
    console.log("delete");
  };

  return (
    <>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="작성한 코멘트" />
      </NavHeader>
      <HeaderBottomContents>
        <FilterBox filterList={COMMENT_FILTER_LIST} />
        <CommentBox>
          <S.BrandCommentTopArea>
            <div>
              <img
                src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a"
                alt="purfume image"
              />
              <S.RatingWrap>
                <p>{`${"브랜드명"}﹒${"브랜드명"}`}</p>
                <ReadonlyRating rate={2.5} size={33} gap={0} />
                <EditableRating
                  rate={rating}
                  size={33}
                  gap={0.35}
                  onRateChange={handleRateChange}
                />
              </S.RatingWrap>
            </div>

            <MoreButton
              selectList={COMMENT_BOX_FILTER}
              handleDropdown={handleDeleteComment}
            />
          </S.BrandCommentTopArea>
        </CommentBox>
      </HeaderBottomContents>
    </>
  );
};

export default MyCommentsPage;

const BrandCommentTopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 0.54rem;
    object-fit: cover;
    margin-right: 0.4rem;
  }
  & > div {
    display: flex;
  }
`;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreButtonWrap = styled.div``;

const S = {
  BrandCommentTopArea,
  RatingWrap,
  MoreButtonWrap,
};
