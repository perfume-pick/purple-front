import {
  DetailReviewReg,
  DetailReviewRegWithoutPerfumeId,
  SimpleReviewReg,
  SimpleReviewRegWithoutPerfumeId,
} from "@/types/req/commentReg";
import { FullRestResponse, RestResponseType } from "@/types/res/response";
import clientHttp from "@/utils/http/clientHttp";
import axios from "axios";
import { CommentRegForm } from "../../types/res/commentRegForm";

const endPoint = {
  GET_PERFUME_EVALUATION_FORM: "/perpicks/reviews/evaluation-form",
  POST_SIMPLE_REVIEW: "/perpicks/reviews/simple",
  POST_DETAIL_REVIEW: "/perpicks/reviews/detail",
  PATCH_SIMPLE_REVIEW: "/perpicks/reviews/{PERFUME_ID}/simple",
  PATCH_DETAIL_REVIEW: "/perpicks/reviews/{PERFUME_ID}/detail",
  POST_COMPLAIN_REVIEW: "/perpicks/reviews/{PERFUME_ID}/complain",
  DELETE_REVIEW: "/perpicks/reviews/{PERFUME_ID}",
};

// 코멘트 폼 항목 조회
async function getCommentEvaluationForm() {
  const response = await axios.get<
    never,
    FullRestResponse<RestResponseType<CommentRegForm>>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_PERFUME_EVALUATION_FORM}`,
    {
      baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
      headers: {
        Authorization: undefined,
      },
    },
  );
  return response.data;
}

// 간단한 리뷰 작성(신규)
async function postSimpleReview(payload: SimpleReviewReg) {
  const response = await clientHttp.get<SimpleReviewReg, FullRestResponse>(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.POST_SIMPLE_REVIEW}`,
    {
      ...payload,
    },
  );

  return response;
}

// 자세한 리뷰 작성(신규)
async function postDetailReview(payload: SimpleReviewReg) {
  const response = await clientHttp.get<DetailReviewReg, FullRestResponse>(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.POST_DETAIL_REVIEW}`,
    {
      ...payload,
    },
  );

  return response;
}

// 간단한 리뷰 작성(수정)
async function patchSimpleReview(
  queryParams: string,
  payload: SimpleReviewRegWithoutPerfumeId,
) {
  const changedEndPoint = endPoint.PATCH_SIMPLE_REVIEW.replace(
    "{PERFUME_ID}",
    queryParams,
  );

  const response = await clientHttp.get<
    SimpleReviewRegWithoutPerfumeId,
    FullRestResponse
  >(`${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`, {
    ...payload,
  });

  return response;
}

// 자세한 리뷰 작성(수정)
async function patchDetailReview(
  queryParams: string,
  payload: DetailReviewRegWithoutPerfumeId,
) {
  const changedEndPoint = endPoint.PATCH_DETAIL_REVIEW.replace(
    "{PERFUME_ID}",
    queryParams,
  );

  const response = await clientHttp.get<
    DetailReviewRegWithoutPerfumeId,
    FullRestResponse
  >(`${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`, {
    ...payload,
  });

  return response;
}

// 리뷰 삭제
async function deleteReview(queryParams: string) {
  const changedEndPoint = endPoint.DELETE_REVIEW.replace(
    "{PERFUME_ID}",
    queryParams,
  );

  const response = await clientHttp.get<never, FullRestResponse>(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`,
  );

  return response;
}

// 리뷰 신고
async function complainReview(queryParams: string) {
  const changedEndPoint = endPoint.POST_COMPLAIN_REVIEW.replace(
    "{PERFUME_ID}",
    queryParams,
  );

  const response = await clientHttp.get<never, FullRestResponse>(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${changedEndPoint}`,
  );

  return response;
}

export {
  getCommentEvaluationForm,
  postSimpleReview,
  postDetailReview,
  patchSimpleReview,
  patchDetailReview,
  deleteReview,
  complainReview,
};
