import { useQuery } from "@tanstack/react-query";
import { S } from "./styles";
import { useRouter } from "next/navigation";
import { getUserReviewCount } from "@/service/client/userInfo";

const ReviewPerfume = () => {
  const router = useRouter();
  const { data: review } = useQuery({
    queryKey: ["userReviewCount"],
    queryFn: getUserReviewCount,
  });

  const userReviewCount = review?.currentUserReviewCounts ?? 0;
  const hasUserReview = userReviewCount > 0;
  console.log(hasUserReview);

  const handleReviewButtonClick = () => {
    if (hasUserReview) return router.push("/myPage/myCommentsPage");

    router.push("/");
  };

  return (
    <>
      <S.Wrapper hasUserReview={hasUserReview}>
        {hasUserReview ? (
          <>
            <S.TitleContainer>
              <S.TitleBox>
                <span>평가한 향수</span>
                <br />
                <S.DescriptionBox>
                  <S.EmphasizeText>{userReviewCount}개</S.EmphasizeText>
                  의 향수를
                  <br />
                  뿌려봤어요
                </S.DescriptionBox>
              </S.TitleBox>
            </S.TitleContainer>
            <S.BarContainer>
              <S.BarBox isDisabled>
                <S.Message>{review?.averageUserReviewCounts}개</S.Message>
                <S.Bar />
                <span>평균</span>
              </S.BarBox>
              <S.BarBox>
                <S.MyBar />
                <span>나</span>
              </S.BarBox>
            </S.BarContainer>
          </>
        ) : (
          <S.ReviewPerfumeButtonBox>
            <S.ReviewPerfumeNothingTitle>
              아직 평가한 향수가 없어요!
            </S.ReviewPerfumeNothingTitle>
            <S.ReviewPerfumeNothingSubTitle>
              새로운 향수를 시작해보세요
            </S.ReviewPerfumeNothingSubTitle>
          </S.ReviewPerfumeButtonBox>
        )}
      </S.Wrapper>
      <S.ReviewPerfumeButton
        onClick={handleReviewButtonClick}
        hasUserReview={hasUserReview}
      >
        내 평가 전체보기
      </S.ReviewPerfumeButton>
    </>
  );
};

export default ReviewPerfume;
