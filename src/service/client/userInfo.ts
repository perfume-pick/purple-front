import clientHttp from "@/utils/http/clientHttp";

const endPoint = {
  UPDATE_NICKNAME: "/perpicks/users/profile",
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

async function updateUserNickname(payload: {
  nickname: string;
  isChanged: boolean; // 닉네임만 변경하는 경우에는 false
  picture: string | null;
}) {
  const { nickname, isChanged, picture } = payload;
  const response = await clientHttp.patch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.UPDATE_NICKNAME}?nickname=${nickname}&isChanged=${isChanged}`,
    {
      picture,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response;
}

export { updateUserNickname };
