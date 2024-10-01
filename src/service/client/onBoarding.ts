import clientHttp from "@/utils/http/clientHttp";
import axios from "axios";
import { FullRestResponse, RestResponseType } from "@/types/res/response";
import { PerfumeBrands, BrandPerfumeInfo } from "@/types/res/perfume";
import {
  postOnboardingRatingRequestDTO,
  ratingInfo,
} from "@/types/req/onboarding";

const endPoint = {
  GET_PERFUME_BRANDS: "/perpicks/brands",
  SET_RATINGS_ONBOARDING: "/perpicks/onboarding/star-ratings",
  GET_SELECTED_BRANDS_PERFUMES: "/perpicks/brands/perfumes",
};

async function getPerfumeBrands() {
  const response = await axios.get<
    never,
    FullRestResponse<RestResponseType<{ brands: BrandPerfumeInfo[] }>>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_PERFUME_BRANDS}`,
    {
      baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
      headers: {
        Authorization: undefined,
      },
    },
  );
  return response.data;
}

type ApiResponse = {
  status: number;
};

async function postOnboardingRating(
  payload: ratingInfo[],
): Promise<FullRestResponse> {
  const response = await clientHttp.post<
    postOnboardingRatingRequestDTO,
    FullRestResponse
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.SET_RATINGS_ONBOARDING}`,
    {
      starRatingVOs: payload,
    },
  );

  return response;
}

async function getSelectedBrandPerfumeList(selectedPerfumesString: string) {
  const queryParams = selectedPerfumesString
    .split("/")
    .map(brand => `request=${brand}`)
    .join("&");

  const response = await axios.get<
    never,
    FullRestResponse<RestResponseType<{ brands: PerfumeBrands[] }>>
  >(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.GET_SELECTED_BRANDS_PERFUMES}?${queryParams}`,
    {
      baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
      headers: {
        Authorization: undefined,
      },
    },
  );

  return response.data;
}

export { getPerfumeBrands, postOnboardingRating, getSelectedBrandPerfumeList };
