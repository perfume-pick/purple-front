import { FiberManualRecord } from "@mui/icons-material";
import { UserReview } from "@/types/res/userReview";
import ReadonlyRating from "@/components/atom/Rating/ReadonlyRating";
import { S } from "./styles";
import DetailReviewCard from "./DetailReviewCard";
import SimpleReviewCard from "./SimpleReviewCard";

interface ReviewCardProps extends UserReview {}

const ReviewCard = ({
  score,
  reviewId,
  reviewType,
  perfumeImageUrl,
  brandName,
  perfumeName,
}: ReviewCardProps) => {
  return (
    <S.Wrapper>
      <S.ReviewBox>
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
