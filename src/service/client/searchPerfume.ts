import clientHttp from "@/utils/http/clientHttp";
import { FullRestResponse, RestResponseType } from "@/types/res/response";
import { DetailPerfumeInfo } from "@/types/res/perfume";
import { SearchHistory, VisitHistory } from "@/types/res/searchPerfume";

const endPoint = {
  GET_SEARCH_PERFUME: "/perpicks/search/perfumes",
  GET_CURRENT_SEARCH_HISTORY: "/perpicks/users/my/search-histories",
  DELETE_CURRENT_SEARCH_HISTORY: "/perpicks/users/my/search-histories",
  GET_CURRENT_VISIT_HISTORY: "/perpicks/users/my/visit-histories",
  DELETE_CURRENT_VISIT_HISTORY: "/perpicks/users/my/visit-histories",
};

async function getSearchPerfumes(queryParams: string) {
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<{ perfumes: DetailPerfumeInfo[] }>>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_SEARCH_PERFUME}?keyword=${queryParams}`,
  );

  return response.data;
}

async function getCurrentSearchHistory() {
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<{ searchHistories: SearchHistory[] }>>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_CURRENT_SEARCH_HISTORY}`,
  );

  return response.data;
}

async function deleteCurrentSearchHistory() {
  const response = await clientHttp.delete(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.DELETE_CURRENT_SEARCH_HISTORY}`,
  );

  return response;
}

async function getCurrentVisitHistory() {
  const response = await clientHttp.get<
    never,
    FullRestResponse<RestResponseType<{ perfumes: VisitHistory[] }>>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_CURRENT_VISIT_HISTORY}`,
  );

  return response.data;
}

async function deleteCurrentVisitHistory() {
  const response = await clientHttp.delete(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.DELETE_CURRENT_VISIT_HISTORY}`,
  );

  return response;
}

export {
  getSearchPerfumes,
  getCurrentSearchHistory,
  deleteCurrentSearchHistory,
  getCurrentVisitHistory,
  deleteCurrentVisitHistory,
};
