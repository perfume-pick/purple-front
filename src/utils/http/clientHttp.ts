"use client";
import axios, { AxiosError } from "axios";
import { httpConfigHelper, httpParserHelper } from "@/utils/http/helper";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";

let isRefreshing = false; // 리프레시 토큰이 진행 중인지 여부
let refreshSubscribers: ((token: string) => void)[] = []; // 대기 중인 요청을 저장하는 큐

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

// 리프레시가 완료되면 대기 중인 요청들을 처리
const onTokenRefreshed = (newToken: string) => {
  refreshSubscribers.forEach(callback => callback(newToken));
  refreshSubscribers = [];
};

// 리프레시 대기 중인 요청을 추가
const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
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
    // const status = error.response ? error.response.status : null;

    // 토큰 만료 시, status 코드가 500대로 와서 임시처리
    // if (status !== 401 || status !== 403) {
    //   return Promise.reject(error);
    // }

    // if (config && config.sent) {
    //   return Promise.reject(error);
    // }

    // 토큰 만료일 때
    // if (error.response?.status === 401) {
    if (!isRefreshing) {
      // 토큰 리프레시가 진행 중이 아니면 리프레시 시작
      isRefreshing = true;
      try {
        const jwtToken = await getRefreshToken();

        if (jwtToken) {
          onTokenRefreshed(jwtToken);
          isRefreshing = false;
        }
      } catch (refreshError) {
        isRefreshing = false;
        logout();
        return Promise.reject(refreshError);
      }
    }

    // 대기 중인 요청을 큐에 추가
    return new Promise(resolve => {
      addRefreshSubscriber((newToken: string) => {
        if (config) {
          config.headers.Authorization = `Bearer ${newToken}`;
          resolve(clientHttp.request(config));
        }
      });
    });
    // }

    // return Promise.reject(error);
  },
);

export default clientHttp;
