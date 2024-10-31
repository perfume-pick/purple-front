import clientHttp from "@/utils/http/clientHttp";
import { FullRestResponse, RestResponseType } from "@/types/res/response";
import {
  FragranticaEvaluation,
  PerfumeAccordsNote,
  Statistic,
} from "@/types/res/perfumeDetail";
import { MyReview, Reviews } from "@/types/res/review";

const endPoint = {
  GET_ACCORDS_NOTES: "/perpicks/perfumes/{PERFUME_ID}/accords-notes",
  GET_FRAGRANTICA_EVALUATION:
    "/perpicks/perfumes/{PERFUME_ID}/fragrantica-evaluation",
  GET_STATISTICS: "/perpicks/perfumes/{PERFUME_ID}/statistics",
  GET_REVIEWS: "/perpicks/perfumes/{PERFUME_ID}/reviews",
  POST_VISIT_HISTORY: "/perpicks/users/my/visit-histories/{PERFUME_ID}",
  GET_MY_REVIEW: "/perpicks/users/my/perfumes/{PERFUME_ID}/reviews",
};

// 메인어코드, 노트
async function getAccordsNotes(queryParams: string) {
  const changedEndPoint = endPoint.GET_ACCORDS_NOTES.replace(
    "{PERFUME_ID}",
    queryParams,
  );
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<PerfumeAccordsNote>>
  >(`${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`);

  if (response.data) {
    return response.data.responseData;
  }
}

// 프라그란티카 평가 정보
async function getFragranticaEvaluation(queryParams: string) {
  const changedEndPoint = endPoint.GET_FRAGRANTICA_EVALUATION.replace(
    "{PERFUME_ID}",
    queryParams,
  );
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<FragranticaEvaluation>>
  >(`${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`);

  if (response.data) {
    return response.data.responseData;
  }
}

// 코멘트 토픽
async function getStatistics(queryParams: string) {
  const changedEndPoint = endPoint.GET_STATISTICS.replace(
    "{PERFUME_ID}",
    queryParams,
  );
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<Statistic>>
  >(`${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`);

  if (response.data) {
    return response.data.responseData;
  }
}

// 코멘트 전체 조회
async function getReviews(queryParams: string, sortType: string) {
  const changedEndPoint = endPoint.GET_REVIEWS.replace(
    "{PERFUME_ID}",
    queryParams,
  );
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<Reviews>>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}?sort-type=${sortType}`,
  );

  if (response.data) {
    return response.data.responseData;
  }
}

// 최근 본 상품 기록 저장
async function postVisitHistory(queryParams: string) {
  const changedEndPoint = endPoint.POST_VISIT_HISTORY.replace(
    "{PERFUME_ID}",
    queryParams,
  );
  const response = await clientHttp.post(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`,
  );

  return response.data;
}

// 내 코멘트 조회
async function getMyReview(queryParams: string) {
  const changedEndPoint = endPoint.GET_MY_REVIEW.replace(
    "{PERFUME_ID}",
    queryParams,
  );
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<{ review: MyReview }>>
  >(`${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`);

  if (response.data) {
    return response.data.responseData;
  }
}

export {
  getAccordsNotes,
  getFragranticaEvaluation,
  getStatistics,
  getReviews,
  postVisitHistory,
  getMyReview,
};
