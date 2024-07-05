import DetailReview from "./DetailReview/DetailReview";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { S } from "./styles";
import { useState } from "react";
import Topic from "./Topic/Topic";

function DetailComment() {
  const [openTopic, setOpenTopic] = useState(false);

  return (
    <S.Wrapper>
      <S.TotalComment>
        <S.CommentWrap>
          <S.CommentTitle>
            <span>코멘트</span>
            <span>(25)</span>
          </S.CommentTitle>
          <S.CommentMsg>
            동일한 제품에 대해 작성된 코멘트로, 향수 용량은 다를 수 있습니다.
          </S.CommentMsg>
        </S.CommentWrap>
        <ArrowForwardIosIcon style={{ color: "#9b9b9e", fontSize: "1.2rem" }} />
      </S.TotalComment>
      <S.AverageScoreWrap>
        <S.Score>
          <div>4.8</div>
          <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
        </S.Score>
        <div>그래프</div>
      </S.AverageScoreWrap>
      <S.OpenTopic onClick={() => setOpenTopic(prev => !prev)}>
        <div>코멘트 토픽 열기</div>
        {openTopic ? (
          <ExpandLessIcon style={{ fontSize: "2.7rem" }} />
        ) : (
          <ExpandMoreIcon style={{ fontSize: "2.7rem" }} />
        )}
      </S.OpenTopic>
      {openTopic && <Topic />}
      {/* TODO: 아래는 임시 컴포넌트. 리뷰 컴포넌트 제작 끝나면 변경 예정 */}
      <DetailReview />
      <DetailReview />
      <DetailReview />
      <S.CommentButtonWrap>
        <button> 23개 코멘트 전체보기</button>
      </S.CommentButtonWrap>
    </S.Wrapper>
  );
}
export default DetailComment;
