import clientHttp from "@/utils/http/clientHttp";
import { UpdateNicknameRequestDTO } from "../../types/req/userInfo";

const endPoint = {
  UPDATE_NICKNAME: "/perpicks/users/my/profile",
};

async function updateUserNickname(payload: {
  nickname: string;
  isChanged: boolean; // 닉네임만 변경하는 경우에는 false
  picture: string | null;
}) {
  const { nickname, isChanged, picture } = payload;
  const response = await clientHttp.patch<UpdateNicknameRequestDTO, void>(
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
