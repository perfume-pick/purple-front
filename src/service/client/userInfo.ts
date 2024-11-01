import clientHttp from "@/utils/http/clientHttp";
import { UpdateNicknameRequestDTO } from "../../types/req/userInfo";
import { FullRestResponse } from "@/types/res/response";
import { Profile, ReviewCount, UserAccords } from "@/types/res/profile";

const endPoint = {
  GET_PROFILE: "/perpicks/users/my/profile",
  GET_REVIEW_COUNT: "/perpicks/users/my/review-counts",
  GET_USER_ACCORDS: "/perpicks/users/my/user-accords",
  UPDATE_NICKNAME: "/perpicks/users/my/profile",
};

async function updateUserNickname(payload: {
  nickname: string;
  isChanged: boolean; // 닉네임만 변경하는 경우에는 false
  picture: string | null;
}): Promise<{ status: number; data: any }> {
  const { nickname, isChanged, picture } = payload;
  const response = await clientHttp.patch<
    UpdateNicknameRequestDTO,
    FullRestResponse
  >(
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

async function getUserProfile() {
  const { data } = await clientHttp.get<Profile>(endPoint.GET_PROFILE);

  const { timeStamp, responseData } = data;

  return { timeStamp, ...responseData };
}

async function getUserReviewCount() {
  const { data } = await clientHttp.get<ReviewCount>(endPoint.GET_REVIEW_COUNT);

  const { timeStamp, responseData } = data;

  return { timeStamp, ...responseData };
}

async function getUserAccords() {
  const { data } = await clientHttp.get<UserAccords>(endPoint.GET_USER_ACCORDS);

  const { timeStamp, responseData } = data;

  return { timeStamp, ...responseData };
}

export {
  updateUserNickname,
  getUserProfile,
  getUserReviewCount,
  getUserAccords,
};
