"use client";

import { S } from "./styles";
import StarIcon from "@mui/icons-material/Star";
import {
  COMMENT_BOX_FILTER,
  USER_COMMENT_FILTER_LIST,
} from "@/constant/dropdown/commentFilterList";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "../../../components/navHeaderLayout/NavHeaderInner";
import FilterBox from "@/components/organism/FilterBox/FilterBox";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import CommentBox from "@/components/organism/CommentBox/CommentBox";
import MoreButton from "@/components/molecule/MoreButton/MoreButton";

const CommentsPage = () => {
  const handleDeleteComment = () => {
    console.log("delete");
  };

  return (
    <S.Wrapper>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="코멘트" />
      </NavHeader>
      <HeaderBottomContents>
        <FilterBox filterList={USER_COMMENT_FILTER_LIST} />
        <CommentBox>
          <S.BrandCommentTopArea>
            <S.ProfileArea>
              <img
                src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a"
                alt="perfume image"
              />
              <S.ProfileTextWrap>
                <p>
                  김복담<span>2024.01.01</span>
                </p>
                <S.StarWrap>
                  {[...Array(5)].map((_, index) => {
                    return (
                      <li key={index}>
                        <StarIcon
                          sx={{ fontSize: "1.672rem", color: "#F7B158" }}
                        ></StarIcon>
                      </li>
                    );
                  })}
                </S.StarWrap>
              </S.ProfileTextWrap>
            </S.ProfileArea>
            <MoreButton
              selectList={COMMENT_BOX_FILTER}
              handleDropdown={handleDeleteComment}
            />
          </S.BrandCommentTopArea>
        </CommentBox>
      </HeaderBottomContents>
    </S.Wrapper>
  );
};

export default CommentsPage;
