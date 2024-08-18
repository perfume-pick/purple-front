import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { httpParserHelper } from "@/utils/http/helper";
import { cookies } from "next/headers";
import { TOKEN_SAVE_KEY } from "@/utils/tokenService";

type response = {
  timeStamp: string;
  responseData: {
    jwtToken: string;
  };
};

const REFRESH_URL = "/perpicks/auth/refresh";
const cookieStore = cookies();

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const originToken = cookieStore.get(TOKEN_SAVE_KEY)?.value;

    const {
      data: {
        responseData: { jwtToken },
      },
    } = await serverHttp.post<never, response>(REFRESH_URL, {
      jwtToken: originToken,
    });

    if (jwtToken) {
      fetch("/api/set-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwtToken }),
      });
    }
    return jwtToken;
  } catch (e) {
    // 리프레시 토큰이 유효하지 않은 경우, 로그아웃 처리
    fetch("/api/delete-token", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

const serverHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

serverHttp.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = cookieStore.get(TOKEN_SAVE_KEY)?.value;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

serverHttp.interceptors.response.use(
  httpParserHelper,
  async (error: AxiosError) => {
    const { config } = error;
    const status = error.response ? error.response.status : null;

    if (status !== 401 || status !== 403) {
      return Promise.reject(error);
    }

    try {
      config.sent = true;

      // 토큰 재설정
      const jwtToken = await getRefreshToken();

      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }

      // 실패한 요청을 다시 시도
      return serverHttp.request(error.config);
    } catch (refreshError) {
      // 필요 시 로그인 페이지로 리디렉션
      window.location.href = "/signin";
      return Promise.reject(refreshError);
    }
  },
);

export default serverHttp;
