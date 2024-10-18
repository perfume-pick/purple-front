import { S } from "./styles";
import { useRouter } from "next/navigation";

const ReviewPerfume = () => {
  const router = useRouter();

  return (
    <>
      <S.Wrapper>
        <S.TitleContainer>
          <S.TitleBox>
            <span>평가한 향수</span>
            <br />
            <S.DescriptionBox>
              <S.EmphasizeText>00개</S.EmphasizeText>의 향수를
              <br />
              뿌려봤어요
            </S.DescriptionBox>
          </S.TitleBox>
        </S.TitleContainer>
        <S.BarContainer>
          <S.BarBox isDisabled>
            <S.Message>35개</S.Message>
            <S.Bar />
            <span>평균</span>
          </S.BarBox>
          <S.BarBox>
            <S.MyBar />
            <span>나</span>
          </S.BarBox>
        </S.BarContainer>
      </S.Wrapper>
      <S.ReviewPerfumeButton
        disabled
        onClick={() => router.push("/myPage/evaluationPerfumePage")}
      >
        내 평가 전체보기
      </S.ReviewPerfumeButton>
    </>
  );
};

export default ReviewPerfume;
