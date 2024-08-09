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

export async function getSearchHistories() {
  const response = await clientHttp.get<never, response>(
    `${endPoint.SEARCH_HISTORY}`,
  );
  // const response = await fetch("/api/test", {
  //   method: "GET",
  // });
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.SEARCH_HISTORY}`,
  //     {
  //       method: "GET",
  //       credentials: "include",
  //     },
  //   );
  console.log(response);
  return response;
}
