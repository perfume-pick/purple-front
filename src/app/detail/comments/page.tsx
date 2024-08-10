"use client";

import { S } from "./styles";
import { USER_COMMENT_FILTER_LIST } from "@/constant/dropdown/commentFilterList";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "../../../components/navHeaderLayout/NavHeaderInner";
import FilterBox from "@/components/organism/FilterBox/FilterBox";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import CommentBox from "@/components/organism/CommentBox/CommentBox";

const CommentsPage = () => {
  return (
    <S.Wrapper>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="코멘트" />
      </NavHeader>
      <HeaderBottomContents>
        <FilterBox filterList={USER_COMMENT_FILTER_LIST} />
        <CommentBox />
      </HeaderBottomContents>
    </S.Wrapper>
  );
};

export default CommentsPage;
