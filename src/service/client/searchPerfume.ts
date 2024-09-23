import clientHttp from "@/utils/http/clientHttp";
import { RestResponseType } from "@/types/res/response";
import { DetailPerfumeInfo } from "@/types/res/perfume";

const endPoint = {
  GET_SEARCH_PERFUME: "/perpicks/search/perfumes",
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

export { getSearchPerfumes };
