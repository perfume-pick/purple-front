import { FiberManualRecord } from "@mui/icons-material";
import { UserReview } from "@/types/res/userReview";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import { S } from "./styles";
import {
  deleteCommentLike,
  deleteReview,
  setCommentLike,
} from "@/service/client/commentRegistration";
import MoreButton from "@/components/molecule/MoreButton/MoreButton";
import { COMMENT_DELETE_FILTER } from "@/constant/dropdown/commentFilterList";
import { useQueryClient } from "@tanstack/react-query";
import FavoritButtons from "@/components/atom/FavoriteButton/FavoritButtons";
import { useEffect, useRef, useState } from "react";

interface ReviewCardProps extends UserReview {}

const ReviewCard = ({
  score,
  content,
  isLiked,
  likeCount,
  reviewId,
  reviewType,
  perfumeImageUrl,
  brandName,
  perfumeName,
  moodNames,
  perfumeEvaluations,
}: ReviewCardProps) => {
  const queryClient = useQueryClient();
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isOverflowContent, setIsOverflowContent] = useState(false);
  const [showOverflowContent, setShowOverflowContent] = useState(false);

  const handleShowOverflowContentClick = () => {
    setShowOverflowContent(!showOverflowContent);
  };

  const handleMoreButtonClick = async (typeText: string) => {
    try {
      if (typeText === "DELETE_COMMENT") {
        await deleteReview(reviewId);
        await queryClient.invalidateQueries({ queryKey: ["userReviews"] });
      }
    } catch (error) {
      console.error("좋아요 처리 중 오류가 발생했습니다:", error);
    }
  };

  const handleFavoriteClick = async () => {
    try {
      if (isLiked) await deleteCommentLike(reviewId);
      else await setCommentLike(reviewId);

      await queryClient.invalidateQueries({ queryKey: ["userReviews"] });
    } catch (error) {
      console.error("좋아요 처리 중 오류가 발생했습니다:", error);
    }
  };

  const checkTextOverflow = () => {
    const element = contentRef.current;

    if (!element) return;

    const style = window.getComputedStyle(element);
    const lineHeight = parseFloat(style.lineHeight);
    const elementHeight = element.clientHeight;
    const maxLineCount = 3; // 기준 줄 수
    const currentLineCount = elementHeight / lineHeight;

    // 현재 줄 수가 기준을 넘는지 확인
    const isOverflowing = currentLineCount > maxLineCount;
    setIsOverflowContent(isOverflowing);
  };

  useEffect(() => {
    checkTextOverflow();
  }, []);

  return (
    <S.Wrapper>
      <S.ReviewBox>
        <S.MoreButtonBox>
          <MoreButton
            selectList={COMMENT_DELETE_FILTER}
            handleDropdown={handleMoreButtonClick}
          />
        </S.MoreButtonBox>
        <S.PerfumeImage src={perfumeImageUrl} alt="perfume image" />
        <S.ReviewBoxRightSection>
          <div>
            {brandName} <FiberManualRecord style={{ width: "4px" }} />{" "}
            {perfumeName}
          </div>
          <div>
            <ReadonlyRating
              rate={score}
              size={30}
              gap={0.7}
              onClick={() => {}}
            />
          </div>
        </S.ReviewBoxRightSection>
      </S.ReviewBox>
      {reviewType === "DETAIL" ? (
        <div>
          <>
            <S.PerfumeInfoContainer>
              {perfumeEvaluations.map(({ fieldName, options }) => (
                <S.PerfumeInfoBox key={fieldName}>
                  <S.PerfumeFieldName>{fieldName}</S.PerfumeFieldName>
                  <S.PerfumeFieldValue>
                    {options.map(({ optionName }) => (
                      <span key={optionName}>{optionName}</span>
                    ))}
                  </S.PerfumeFieldValue>
                </S.PerfumeInfoBox>
              ))}
            </S.PerfumeInfoContainer>
            <S.Keyword>
              {moodNames.map((data, idx) => (
                <div key={idx}>#{data}</div>
              ))}
            </S.Keyword>
          </>
        </div>
      ) : reviewType === "SIMPLE" ? (
        <div>
          <S.Content showOverflowContent={showOverflowContent} ref={contentRef}>
            {content}
          </S.Content>
          <S.InteractionBox>
            <FavoritButtons
              clickFavorite={handleFavoriteClick}
              isClicked={isLiked}
              favoriteCount={likeCount}
            />
            {isOverflowContent && (
              <S.OverflowText onClick={handleShowOverflowContentClick}>
                {showOverflowContent ? "간략히" : "더보기"}
              </S.OverflowText>
            )}
          </S.InteractionBox>
        </div>
      ) : null}
    </S.Wrapper>
  );
};

export default ReviewCard;
