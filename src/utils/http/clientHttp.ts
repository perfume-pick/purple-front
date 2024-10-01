"use client";
import axios, { AxiosError } from "axios";
import { httpConfigHelper, httpParserHelper } from "@/utils/http/helper";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const originToken = localStorage.getItem(TOKEN_SAVE_KEY);

    const {
      data: {
        responseData: { jwtToken },
      },
    } = await axios.post(
      "/perpicks/auth/refresh",
      {
        jwtToken: originToken,
      },
      {
        baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
      },
    );
    if (jwtToken) {
      localStorage.setItem(TOKEN_SAVE_KEY, jwtToken);
      axios.post("/api/set-token", {
        jwtToken,
      });
    }
    return jwtToken;
  } catch (e) {
    logout();
  }
};

const logout = () => {
  localStorage.removeItem(TOKEN_SAVE_KEY);
  fetch("/api/delete-token", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // 미들웨어에서 인식 못히는지 확인
  setTimeout(() => {
    window.location.href = "/signin";
  }, 1000);
};

const clientHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

// 요청을 보내기 전 실행
clientHttp.interceptors.request.use(httpConfigHelper, () => {});
// 요청을 받은 후 실행
clientHttp.interceptors.response.use(
  httpParserHelper,
  async (error: AxiosError) => {
    const { config } = error;
    const status = error.response ? error.response.status : null;

    // 토큰 만료 시, status 코드가 500대로 와서 임시처리
    // if (config?.sent || status !== 401 || status !== 403) {
    //   return Promise.reject(error);
    // }

    // if (config && config.sent) {
    //   return Promise.reject(error);
    // }

    // 토큰 만료일 때
    try {
      // config.sent = true;
      // 토큰 재설정
      const jwtToken = await getRefreshToken();

      if (jwtToken && config) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }

      // 실패한 요청을 다시 시도
      return clientHttp.request(config);
    } catch (refreshError) {
      logout();
      return Promise.reject(refreshError);
    }
  },
);

export default clientHttp;
