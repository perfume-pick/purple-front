import clientHttp from "@/utils/http/clientHttp";
import { RestResponseType } from "@/types/res/response";
import { DetailPerfumeInfo } from "@/types/res/perfume";
import { SearchHistory } from "@/types/res/searchPerfume";

const endPoint = {
  GET_SEARCH_PERFUME: "/perpicks/search/perfumes",
  GET_CURRENT_SEARCH_HISTORY: "/perpicks/users/my/search-histories",
  DELETE_CURRENT_SEARCH_HISTORY: "/perpicks/users/my/search-histories",
};

async function getSearchPerfumes(queryParams: string) {
  const response = await clientHttp.get<
    never,
    RestResponseType<{ perfums: DetailPerfumeInfo[] }>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_SEARCH_PERFUME}?keyword=${queryParams}`,
  );

  return response;
}

async function getCurrentSearchHistory() {
  const response = await clientHttp.get<
    never,
    RestResponseType<{ searchHistories: SearchHistory[] }>
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

export {
  getSearchPerfumes,
  getCurrentSearchHistory,
  deleteCurrentSearchHistory,
};
