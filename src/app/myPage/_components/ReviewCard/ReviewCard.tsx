import { FiberManualRecord } from "@mui/icons-material";
import { UserReview } from "@/types/res/userReview";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import { S } from "./styles";
import DetailReviewCard from "./DetailReviewCard";
import SimpleReviewCard from "./SimpleReviewCard";
import { deleteReview } from "@/service/client/commentRegistration";
import MoreButton from "../../../../components/molecule/MoreButton/MoreButton";
import { COMMENT_DELETE_FILTER } from "../../../../constant/dropdown/commentFilterList";
import { useQueryClient } from "@tanstack/react-query";

interface ReviewCardProps extends UserReview {}

const ReviewCard = ({
  score,
  reviewId,
  reviewType,
  perfumeImageUrl,
  brandName,
  perfumeName,
}: ReviewCardProps) => {
  const queryClient = useQueryClient();

  const handleMoreButtonClick = async (typeText: string) => {
    if (typeText === "DELETE_COMMENT") {
      await deleteReview(reviewId);
      await queryClient.invalidateQueries({ queryKey: ["userReviews"] });
    }
  };

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
        <DetailReviewCard />
      ) : reviewType === "SIMPLE" ? (
        <SimpleReviewCard />
      ) : null}
    </S.Wrapper>
  );
};

export default ReviewCard;
