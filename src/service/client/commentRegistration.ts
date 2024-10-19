import { FullRestResponse, RestResponseType } from "@/types/res/response";
// import clientHttp from "@/utils/http/clientHttp";
import axios from "axios";
import { CommentRegForm } from "../../types/res/commentRegForm";

const endPoint = {
  GET_PERFUME_EVALUATION_FORM: "/perpicks/reviews/evaluation-form",
};

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

export { getCommentEvaluationForm };
