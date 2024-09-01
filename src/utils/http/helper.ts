import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { RestResponseType } from "@/types/res/response";
// import { getCookie } from "cookies-next";
import { TOKEN_SAVE_KEY } from "@/utils/tokenService";

export function httpConfigHelper(config: InternalAxiosRequestConfig) {
  try {
    const token = window.localStorage.getItem(TOKEN_SAVE_KEY);
    // token && config.headers.set("x-authentication-header", `Bearer ${token}`);
    token && config.headers.set("Authorization", `Bearer ${token}`);
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
}

export function httpParserHelper(response: AxiosResponse<RestResponseType>) {
  const code = response.status;
  // 상태값이 200대로 오지 않는 경우도 있어 임시처리
  // if (code != 200 || code !== 204) {
  //   const error = new Error();
  //   error.name = code;
  //   error.message = "Internal Error";
  //   error.cause = "DEFINED";
  //   throw error;
  // }
  if (code === 500) {
    const error = new Error();
    error.name = code;
    error.message = "Internal Error";
    error.cause = "DEFINED";
    throw error;
  }
  return response;
}
