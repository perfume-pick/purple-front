"use client";

import { useState } from "react";
import { S } from "./styles";
import FavoritButtons from "../../atom/FavoriteButton/FavoritButtons";
import MoreButton from "@/components/molecule/MoreButton/MoreButton";
import StarIcon from "@mui/icons-material/Star";
import { COMMENT_BOX_FILTER } from "@/constant/dropdown/commentFilterList";

/**
 * CommentBox.tsx와 디테일 박스 컴포넌트를 같이 사용할 수 있는 방향으로 잡고
 * 해당 컴포넌트는 추후에 필요없어지면 삭제 예정.
 */
const DetailCommentBox = () => {
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

  const Data = ["키워드1", "키워드2", "키워드3"];

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
      <S.CommentInfoWrap>
        <S.InfoWrap>
          <S.InfoContent>
            <span>지속력</span>
            <div>보통</div>
          </S.InfoContent>
          <S.InfoContent>
            <span>계절감</span>
            <div>가을 겨울 밤</div>
          </S.InfoContent>
        </S.InfoWrap>
        <S.InfoWrap>
          <S.InfoContent>
            <span>시야주</span>
            <div>향여운이 강함</div>
          </S.InfoContent>
          <S.InfoContent>
            <span>성별</span>
            <div>남성에 가까운</div>
          </S.InfoContent>
        </S.InfoWrap>
      </S.CommentInfoWrap>
      {/* 아래는 임시데이터 돌려놓음 */}
      <S.Keyword>
        {Data.map(data => (
          <div>#{data}</div>
        ))}
      </S.Keyword>
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

export default DetailCommentBox;
