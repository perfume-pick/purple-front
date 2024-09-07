import clientHttp from "@/utils/http/clientHttp";
import axios from "axios";
import { RestResponseType } from "@/types/res/response";
import { perfumeBrands } from "@/types/res/perfume";
import { setOnboardingRatingRequestDTO } from "@/types/req/onboarding";

const endPoint = {
  GET_PERFUME_BRANDS: "/perpicks/perfume-brands",
  SET_RATINGS_ONBOARDING: "/perpicks/ratings/onboarding",
};

async function getPerfumeBrands() {
  const response = await axios.get<never, RestResponseType<perfumeBrands>>(
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

async function setOnboardingRating(payload: setOnboardingRatingRequestDTO) {
  const response = await clientHttp.post<setOnboardingRatingRequestDTO, void>(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}${endPoint.SET_RATINGS_ONBOARDING}`,
    {
      payload,
    },
  );

  return response;
}

export { getPerfumeBrands, setOnboardingRating };
