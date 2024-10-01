"use client";

import Banner from "@/components/banner/banner";
import { S } from "../../styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { useEffect, useState } from "react";
// import dayjs from "dayjs";
import { useRouter } from "next/navigation";

function NoteMainPage() {
  const route = useRouter();

  return (
    <S.BannerWrap>
      <S.PreferenceNoteWrap>
        <S.LikeNote>
          <span>코쿵</span>님이 좋아하는 노트 계열은?
        </S.LikeNote>
        {/* TODO: 데이터 들어오는거에 따라 변경예정 */}
        <S.NoteRanking>
          <span>1위 시트러스</span>
          <span>2위 플로럴</span>
          <span>3위 구아망드</span>
        </S.NoteRanking>
        <S.PreferenceInfo>
          <div>07.23 10:00기준</div>
          <S.MyPreference>
            <div onClick={() => route.push("/myPage")}>내 취향 보기</div>
            <KeyboardArrowRightIcon />
          </S.MyPreference>
        </S.PreferenceInfo>
      </S.PreferenceNoteWrap>
      {/* 임시 테스트. map돌리는곳. 나중에 api 연동하면 데이터로 교체하고 삭제. */}
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </S.BannerWrap>
  );
}
export default NoteMainPage;
