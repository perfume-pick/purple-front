import clientHttp from "@/utils/http/clientHttp";
import {
  RecommendPerfumeByAccord,
  RecommendPerfumeByComment,
} from "@/types/res/recommend";

const endPoint = {
  GET_RECOMMEND_PERFUMES_BY_ACCORD:
    "/perpicks/recommends/user-accords/perfumes",
  GET_RECOMMEND_PERFUMES_BY_COMMENT:
    "/perpicks/recommends/review-counts/perfumes",
};

// 코멘트 전체 조회
async function getRecommendPerfumesByAccord() {
  const { data } = await clientHttp.get<RecommendPerfumeByAccord[]>(
    endPoint.GET_RECOMMEND_PERFUMES_BY_ACCORD,
  );

  return data;
}

async function getRecommendPerfumesByComment() {
  const { data } = await clientHttp.get<RecommendPerfumeByComment>(
    endPoint.GET_RECOMMEND_PERFUMES_BY_COMMENT,
  );

  return data;
}

export { getRecommendPerfumesByAccord, getRecommendPerfumesByComment };
