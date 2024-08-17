"use client";
import axios, { AxiosError } from "axios";
import { httpConfigHelper, httpParserHelper } from "@/utils/http/helper";
import { TOKEN_SAVE_KEY } from "@/utils/tokenService";

type response = {
  timeStamp: string;
  responseData: {
    jwtToken: string;
  };
};

const clientHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

clientHttp.interceptors.request.use(httpConfigHelper, () => {});
clientHttp.interceptors.response.use(
  httpParserHelper,
  async (error: AxiosError) => {
    /*
     * 토큰 만료일 때
     * if(error.status === 401) {
     * 리프레시 토큰이 유효하지 않은 경우, 로그아웃 처리
     *   window.localStorage.removeItem(TOKEN_SAVE_KEY);
     * }
     * 401(아마도) 에러 발생했을때 로컬 스토리지에서 jwt 토큰삭제. + 액세스 토큰
     * UI 적인건 개별 컴포넌트 혹은 페이지에서 처리.
     * */
    console.log(error.response?.status);
    if (error.response?.status === 401 || error.response?.status === 403) {
      // 토큰 만료일 때
      try {
        // 토큰 재설정
        const originToken = localStorage.getItem(TOKEN_SAVE_KEY);
        console.log(originToken);
        const response = await clientHttp.post<never, response>(
          "/perpicks/auth/refresh",
        );
        console.log(response);
        const jwtToken = response.data.responseData.jwtToken;
        if (response.data && jwtToken) {
          localStorage.setItem(TOKEN_SAVE_KEY, jwtToken);
        }

        // 원래 요청의 Authorization 헤더를 업데이트
        error.config.headers.Authorization = `Bearer ${jwtToken}`;
        // 실패한 요청을 다시 시도
        return clientHttp.request(error.config);
      } catch (refreshError) {
        // 리프레시 토큰이 유효하지 않은 경우, 로그아웃 처리
        localStorage.removeItem(TOKEN_SAVE_KEY);
        fetch("/api/delete-token", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        // 필요 시 로그인 페이지로 리디렉션
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }
  },
);

export default clientHttp;
