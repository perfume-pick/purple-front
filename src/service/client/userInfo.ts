import clientHttp from "@/utils/http/clientHttp";
import {
  UpdateProfileBody,
  UpdateProfileParams,
  UpdateNicknameRequestDTO,
} from "@/types/req/userInfo";
import { FullRestResponse } from "@/types/res/response";
import {
  Profile,
  ReviewCount,
  UserAccords,
  Top3ReviewBrands,
} from "@/types/res/profile";
import { UserReviews } from "@/types/res/userReview";
import { USER_COMMENT_FILTER_LIST } from "@/constant/dropdown/commentFilterList";

const endPoint = {
  GET_REVIEWS: "/perpicks/users/my/reviews",
  GET_PROFILE: "/perpicks/users/my/profile",
  GET_REVIEW_COUNT: "/perpicks/users/my/review-counts",
  GET_USER_ACCORDS: "/perpicks/users/my/user-accords",
  GET_TOP3_REVIEWED_BRANDS: "/perpicks/users/my/top3-reviewed-brands",
  UPDATE_NICKNAME: "/perpicks/users/my/profile",
  UPDATE_PROFILE: "/perpicks/users/my/profile",
};

type SortType = (typeof USER_COMMENT_FILTER_LIST)[number]["code"];

async function getUserReviews(sortType: SortType) {
  const url = `${endPoint.GET_REVIEWS}?sort-type=${sortType}`;
  const { data } = await clientHttp.get<UserReviews>(url);

  const { timeStamp, responseData } = data;

  console.log(data);

  return { timeStamp, ...responseData };
}

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

async function getTop3ReviewBrands() {
  const { data } = await clientHttp.get<Top3ReviewBrands>(
    endPoint.GET_TOP3_REVIEWED_BRANDS,
  );

  const { timeStamp, responseData } = data;

  return { timeStamp, ...responseData };
}

async function patchProfile({
  params,
  body,
}: {
  params: UpdateProfileParams;
  body: UpdateProfileBody["picture"];
}) {
  const paramString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const url = `${endPoint.UPDATE_PROFILE}?${paramString}`;
  const { data } = await clientHttp.patch<Profile>(url, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const { timeStamp, responseData } = data;

  return { timeStamp, ...responseData };
}

export {
  getUserReviews,
  updateUserNickname,
  patchProfile,
  getUserProfile,
  getUserReviewCount,
  getUserAccords,
  getTop3ReviewBrands,
};
