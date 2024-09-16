import clientHttp from "@/utils/http/clientHttp";
import axios from "axios";
import { RestResponseType } from "@/types/res/response";
import { PerfumeBrands, BrandPerfumeInfo } from "@/types/res/perfume";
import {
  postOnboardingRatingRequestDTO,
  ratingInfo,
} from "@/types/req/onboarding";

const endPoint = {
  GET_PERFUME_BRANDS: "/perpicks/perfume-brands",
  SET_RATINGS_ONBOARDING: "/perpicks/ratings/onboarding",
  GET_SELECTED_BRANDS_PERFUMES: "/perpicks/perfumes/perfume-brands",
};

async function getPerfumeBrands() {
  const response = await axios.get<
    never,
    RestResponseType<{ brandPerfumesDTOs: BrandPerfumeInfo[] }>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_PERFUME_BRANDS}`,
    {
      baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
      headers: {
        Authorization: undefined,
      },
    },
  );

  return response;
}

async function postOnboardingRating(payload: ratingInfo[]) {
  const response = await clientHttp.post<postOnboardingRatingRequestDTO, void>(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.SET_RATINGS_ONBOARDING}`,
    {
      ratingInfos: payload,
    },
  );

  return response;
}

async function getSelectedBrandPerfumeList(selectedPerfumesString: string) {
  const queryParams = selectedPerfumesString
    .split("/")
    .map(brand => `request=${brand}`)
    .join("&");

  const response = await axios.get<never, RestResponseType<PerfumeBrands>>(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_SELECTED_BRANDS_PERFUMES}?${queryParams}`,
    {
      baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
      headers: {
        Authorization: undefined,
      },
    },
  );

  return response;
}

export { getPerfumeBrands, postOnboardingRating, getSelectedBrandPerfumeList };
