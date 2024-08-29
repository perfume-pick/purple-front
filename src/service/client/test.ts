import clientHttp from "@/utils/http/clientHttp";

const endPoint = {
  SEARCH_HISTORY: "/perpicks/users/my/search-histories",
};

type response = {
  timeStamp: string;
  responseData: {
    userSearchHistories: [
      {
        id: number;
        searchName: string;
        searchAt: string;
      },
    ];
  };
};

async function getSearchHistories() {
  const response = await clientHttp.get<never, response>(
    `${endPoint.SEARCH_HISTORY}`,
  );
  return response;
}

export { getSearchHistories };
