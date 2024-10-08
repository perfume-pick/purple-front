"use client";

import { useState } from "react";
import { S } from "./styles";
import FavoritButtons from "../../atom/FavoriteButton/FavoritButtons";
import MoreButton from "@/components/molecule/MoreButton/MoreButton";
import StarIcon from "@mui/icons-material/Star";
import { COMMENT_BOX_FILTER } from "@/constant/dropdown/commentFilterList";

const CommentBox = () => {
  const [isShowAllText, setIsShowAllText] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(2);

  const handleFavoriteClick = () => {
    setIsFavorite(prev => !prev);
    setFavoriteCount(prev => (isFavorite ? prev - 1 : prev + 1));
  };

  const handleDeleteComment = () => {
    console.log("delete");
  };

  return (
    <S.Wrapper>
      <S.BrandCommentTopArea>
        <S.ProfileArea>
          <img
            src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a"
            alt="purfume image"
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
      <S.ReviewText className={isShowAllText ? "" : "brief-text"}>
        “안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한 향기입니다 안개가
        자욱한 시원한 향기입니다 자욱한 시원한 향기입니다안개가 자욱한 시원한
        향기입니다 안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한
        향기입니다 자욱한 시원한 향기입니다 안개가 자욱한 시원한 향기입니다
        안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한 향기입니다 자욱한
        시원한 향기입니다안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한
        향기입니다 안개가 자욱한 시원한 향기입니다 자욱한 시원한 향기입니다”
      </S.ReviewText>
      <S.BottomButtons>
        <FavoritButtons
          clickFavorite={handleFavoriteClick}
          isClicked={isFavorite}
          favoriteCount={favoriteCount}
        />
        <span onClick={() => setIsShowAllText(prev => !prev)}>
          {isShowAllText ? "간략히" : "더보기"}
        </span>
      </S.BottomButtons>
    </S.Wrapper>
  );
};

export default CommentBox;
