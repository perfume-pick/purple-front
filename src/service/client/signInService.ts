import clientHttp from "@/utils/http/clientHttp";
import { OauthType } from "@/constant/auth.const";
import { AuthLoginTryDTO, AuthJwtTokenDTO } from "@/types/authTypes";
import { FullRestResponse, RestResponseType } from "@/types/res/response";
import { OriginUrl } from "@/types/req/signin";

export async function clientCreateLoginTry(type: OauthType, originUrl: string) {
  const response = await clientHttp.post<
    OriginUrl,
    FullRestResponse<RestResponseType<AuthLoginTryDTO>>
  >(`/perpicks/auth/login-try/${type}`, {
    frontUrl: originUrl,
  });
  return response.data;
}

export async function getJwtToken(
  type: string,
  code: string,
  originUrl: string,
) {
  return await clientHttp.post<OriginUrl, AuthJwtTokenDTO>(
    `/perpicks/auth/login/${type}?code=${code}`,
    {
      frontUrl: originUrl,
    },
  );
}

export async function setCookie(token: string) {
  return await fetch("/api/setCookie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  }).then(res => res.json());
}
