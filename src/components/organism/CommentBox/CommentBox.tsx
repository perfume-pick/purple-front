"use client";

import { useState, useEffect, useRef } from "react";
import { S } from "./styles";
import dayjs from "dayjs";
import StarIcon from "@mui/icons-material/Star";
import { COMMENT_BOX_FILTER } from "@/constant/dropdown/commentFilterList";
import { Review } from "@/types/res/review";
import FavoritButtons from "../../atom/FavoriteButton/FavoritButtons";
import MoreButton from "@/components/molecule/MoreButton/MoreButton";

type Props = {
  reviewInfo: Review;
};

const CommentBox = ({ reviewInfo }: Props) => {
  const [isShowAllText, setIsShowAllText] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isTextOverflow, setIsTextOverflow] = useState(false);
  const reviewTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsFavorite(reviewInfo.isLiked);
    setFavoriteCount(reviewInfo.likeCount);
  }, [reviewInfo]);

  // 더보기 버튼 표시 여부 계산 함수
  const checkTextOverflow = () => {
    const element = reviewTextRef.current;
    if (element) {
      const style = window.getComputedStyle(element);
      const lineHeight = parseFloat(style.lineHeight);
      const elementHeight = element.clientHeight;
      const maxLineCount = 4; // 기준 줄 수
      const currentLineCount = elementHeight / lineHeight;

      // 현재 줄 수가 기준을 넘는지 확인
      setIsTextOverflow(currentLineCount > maxLineCount);
    }
  };

  useEffect(() => {
    checkTextOverflow();
  }, [reviewInfo.content]);

  const handleFavoriteClick = () => {
    {
      /*TODO: 좋아요 api가 나오지 않아, 추후 api 연결 필요 */
    }
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
            src={reviewInfo.imageUrl ?? "/assets/images/user_avatar.png"}
            alt="purfume image"
          />
          <S.ProfileTextWrap>
            <p>
              {reviewInfo.nickname}
              <span>{formattedDate(reviewInfo.date)}</span>
            </p>
            <S.StarWrap>
              {[...Array(reviewInfo.score)].map((_, index) => {
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
      <S.ReviewText
        ref={reviewTextRef}
        className={isShowAllText ? "" : "brief-text"}
      >
        {reviewInfo.content}
      </S.ReviewText>
      <S.BottomButtons>
        <FavoritButtons
          clickFavorite={handleFavoriteClick}
          isClicked={isFavorite}
          favoriteCount={favoriteCount}
        />
        {isTextOverflow && (
          <span onClick={() => setIsShowAllText(prev => !prev)}>
            {isShowAllText ? "간략히" : "더보기"}
          </span>
        )}
      </S.BottomButtons>
    </S.Wrapper>
  );
};

export default CommentBox;

const formattedDate = (dateString: string): string => {
  return dayjs(dateString).format("YYYY.MM.DD");
};
