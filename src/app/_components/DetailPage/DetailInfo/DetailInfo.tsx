import { S } from "./styles";

function DetailInfo() {
  return (
    <S.Wrapper>
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
      <S.PersistenceWrap>
        <S.InfoTitle>
          <img src="/assets/images/Vector.png" />
          <span>지속력</span>
        </S.InfoTitle>
        {/* 지속력 그래프 추가해야함 */}
      </S.PersistenceWrap>
    </S.Wrapper>
  );
}
export default DetailInfo;
