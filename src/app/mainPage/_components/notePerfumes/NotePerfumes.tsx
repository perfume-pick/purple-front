"use client";

import { S } from "./styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Perfume from "../perfume/Perfume";
import { getRecommendPerfumesByAccord } from "@/service/client/recommendPerfume";
import { useRecommendPerfumeType } from "@/store/recommendPerfumeTypeStore";
import { getUserProfile } from "@/service/client/userInfo";

function formatDateString(dateString: string) {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${month}.${day} ${hours}:${minutes}`;
}

function NotePerfumes() {
  const route = useRouter();
  const { perfumeType } = useRecommendPerfumeType();
  const { data: recommendPerfume } = useQuery({
    queryKey: ["recommendPerfumes", perfumeType],
    queryFn: getRecommendPerfumesByAccord,
  });
  const { data: profile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  const {
    timeStamp,
    responseData: { userAccords, perfumes },
  } = recommendPerfume ?? {
    timeStamp: null,
    responseData: { userAccords: [], perfumes: [] },
  };

  return (
    <S.Wrapper>
      {userAccords.length > 0 && (
        <S.PreferenceNoteWrap onClick={() => route.push("/myPage")}>
          <S.LikeNote>
            <span>{profile?.nickname}</span>님이 좋아하는 노트 계열은?
          </S.LikeNote>
          <S.NoteRanking>
            {userAccords
              .sort((a, b) => a.order - b.order)
              .map(({ accordName, order }) => (
                <span key={order}>{accordName}</span>
              ))}
          </S.NoteRanking>
          <S.PreferenceInfo>
            <div>{timeStamp ? `${formatDateString(timeStamp)}기준` : ""}</div>
            <S.MyPreference>
              <div>내 취향 보기</div>
              <KeyboardArrowRightIcon />
            </S.MyPreference>
          </S.PreferenceInfo>
        </S.PreferenceNoteWrap>
      )}
      {perfumes.map(perfume => (
        <Perfume key={perfume.perfumeId} {...perfume} />
      ))}
    </S.Wrapper>
  );
}
export default NotePerfumes;
