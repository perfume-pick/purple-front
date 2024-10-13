import clientHttp from "@/utils/http/clientHttp";
import { OauthType } from "@/constant/auth.const";
import { AuthLoginTryDTO, AuthJwtTokenDTO } from "@/types/authTypes";
import { FullRestResponse, RestResponseType } from "@/types/res/response";

export async function clientCreateLoginTry(type: OauthType) {
  const response = await clientHttp.post<
    never,
    FullRestResponse<RestResponseType<AuthLoginTryDTO>>
  >(`/perpicks/auth/login-try/${type}`);
  return response.data;
}

export async function getJwtToken(type: string, code: string) {
  return await clientHttp.post<never, AuthJwtTokenDTO>(
    `/perpicks/auth/login/${type}?code=${code}`,
    null,
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
