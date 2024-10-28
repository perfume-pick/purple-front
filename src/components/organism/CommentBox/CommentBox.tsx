"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { S } from "./styles";
import dayjs from "dayjs";
import StarIcon from "@mui/icons-material/Star";
import { COMMENT_BOX_FILTER } from "@/constant/dropdown/commentFilterList";
import { Review } from "@/types/res/review";
import { EvaluationType } from "@/constant/detail.const";
import {
  deleteCommentLike,
  deleteReview,
  setCommentLike,
} from "@/service/client/commentRegistration";
import { useQueryClient } from "@tanstack/react-query";
import FavoritButtons from "../../atom/FavoriteButton/FavoritButtons";
import MoreButton from "@/components/molecule/MoreButton/MoreButton";

type Props = {
  reviewInfo: Review;
  perfumeId: string;
};

const CommentBox = ({ reviewInfo, perfumeId }: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [isShowAllText, setIsShowAllText] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isTextOverflow, setIsTextOverflow] = useState(false);
  const reviewTextRef = useRef<HTMLDivElement | null>(null);

  const {
    content,
    date,
    imageUrl,
    // isComplained,
    isCurrentUserReview,
    isLiked,
    likeCount,
    moodNames,
    nickname,
    perfumeEvaluation,
    reviewId,
    reviewType,
    score,
  }: Review = reviewInfo;

  useEffect(() => {
    setIsFavorite(isLiked);
    setFavoriteCount(likeCount);
  }, [reviewInfo]);

  useEffect(() => {
    checkTextOverflow();
  }, [content]);

  const extractOptionName = (name: string): { optionName: string }[] => {
    const filtered = perfumeEvaluation.find(item =>
      item.fieldName.includes(name),
    );

    if (!filtered) {
      return [];
    }

    if (name === "계절감/시간") {
      return filtered.options;
    } else {
      return [filtered.options[0]];
    }
  };

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
      const isOverflowing = currentLineCount > maxLineCount;
      setIsTextOverflow(isOverflowing);
    }
  };

  useEffect(() => {
    // 화면 렌더링 시점 문제로 더보기가 표시되지 않는 문제가 있어 타이머 설정
    const timer = setTimeout(() => {
      const element = reviewTextRef.current;
      if (!element) {
        return;
      }

      if (!element.classList.contains("brief-text")) {
        element.classList.add("brief-text");
      } else {
        element.classList.remove("brief-text");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isShowAllText]);

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await deleteCommentLike(reviewId);
      } else {
        await setCommentLike(reviewId);
      }
      await updateReviewData();
    } catch (error) {
      console.error("좋아요 처리 중 오류가 발생했습니다:", error);
    }
  };

  const updateReviewData = () => {
    queryClient.setQueryData(["reviewsInDetail", perfumeId], (oldData: any) => {
      if (!oldData) return;

      const updatedReviews = oldData?.reviews.map((review: Review) =>
        review.reviewId === reviewId
          ? {
              ...review,
              isLiked: !isFavorite,
              likeCount: isFavorite
                ? review.likeCount - 1
                : review.likeCount + 1,
            }
          : review,
      );

      return { ...oldData, reviews: updatedReviews };
    });
    setIsFavorite(prev => !prev);
    setFavoriteCount(prev => (isFavorite ? prev - 1 : prev + 1));
  };

  const handleDeleteComment = async (typeText: string) => {
    if (!isCurrentUserReview) {
      return;
    }

    if (typeText === "EDIT_COMMENT") {
      router.push(`/commentPage?perfumeId=${perfumeId}`, { scroll: false });
    } else if (typeText === "DELETE_COMMENT") {
      try {
        await deleteReview(reviewId);
        if (perfumeId) {
          await queryClient.invalidateQueries({
            queryKey: ["myReviewInfo", perfumeId as string],
          });
        }
      } catch (error) {
        console.error("코멘트 처리 중 오류가 발생했습니다:", error);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.BrandCommentTopArea>
        <S.ProfileArea>
          <img
            src={imageUrl ?? "/assets/images/user_avatar.png"}
            alt="purfume image"
          />
          <S.ProfileTextWrap>
            <p>
              {nickname}
              <span>{formattedDate(date)}</span>
            </p>
            <S.StarWrap>
              {[...Array(score)].map((_, index) => {
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
      {reviewType === "DETAIL" && (
        <>
          <S.CommentInfoWrap>
            <S.InfoWrap>
              {Object.values(EvaluationType).map(item => {
                const options = extractOptionName(item);

                return (
                  <S.InfoContent key={item}>
                    <span>{item}</span>
                    <div>
                      {options.length > 0 &&
                        options.map(innerItem => (
                          <span
                            className="info-text"
                            key={innerItem.optionName}
                          >
                            {innerItem.optionName}
                          </span>
                        ))}
                    </div>
                  </S.InfoContent>
                );
              })}
            </S.InfoWrap>
          </S.CommentInfoWrap>
          <S.Keyword>
            {moodNames?.length > 0 &&
              moodNames.map((data, idx) => <div key={idx}>#{data}</div>)}
          </S.Keyword>
        </>
      )}
      <S.ReviewText ref={reviewTextRef}>“{content}”</S.ReviewText>
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
