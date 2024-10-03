// import Rating from "@/components/atom/Rating/Rating";
import { S } from "./styles";

function DetailEvaluation() {
  return (
    <S.Wrapper>
      <span>평가하기</span>
      <div>평가하기의 부연설명</div>
      <S.RatingWrap>
        {/* <Rating /> */}
        <S.Score>
          <span>0.0</span>
          <span>/ 5.0</span>
        </S.Score>
      </S.RatingWrap>
      <S.ClickGuide>
        <div>별을 클릭하세요</div>
      </S.ClickGuide>
    </S.Wrapper>
  );
}
export default DetailEvaluation;
