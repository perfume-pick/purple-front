import { S } from "./styles";
import React, { forwardRef } from "react";

const DetailInfo = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <S.Wrapper ref={ref}>
      <S.PersistenceWrap>
        <S.InfoTitle>
          <img src="/assets/images/Vector.png" />
          <span>메인어코드</span>
        </S.InfoTitle>
        <S.GraphWrap>
          <div>
            <span>amber</span>
          </div>
        </S.GraphWrap>
      </S.PersistenceWrap>
      <S.NoteInfoWrap>
        <S.InfoTitle>
          <img src="/assets/images/Vector.png" />
          <span>노트정보</span>
        </S.InfoTitle>
        <S.NoteInfo>
          <S.NoteContent>
            <span>탑 노트 :</span>
            <div>오렌지 블라썸, 만다린</div>
          </S.NoteContent>
          <S.NoteContent>
            <span>미들 노트 : </span>
            <div>튜베로즈, 일랑일랑, 아가베</div>
          </S.NoteContent>
          <S.NoteContent>
            <span>베이스 노트 : </span>
            <div>바닐라, 샌달우드, 화이트머스크</div>
          </S.NoteContent>
        </S.NoteInfo>
      </S.NoteInfoWrap>
    </S.Wrapper>
  );
});
export default DetailInfo;
