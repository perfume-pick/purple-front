import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { httpParserHelper } from "@/utils/http/helper";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
// import { logout } from "./logout";
// import { redirect } from "next/navigation";

const baseUrl = "http://localhost:3000";

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const originToken = cookies().get(TOKEN_SAVE_KEY)?.value;

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
      axios.post("/api/set-token", {
        jwtToken,
      });
    }
    return jwtToken;
  } catch (e) {
    logout();
  }
};
const logout = async () => {
  await fetch(`${baseUrl}/api/delete-token`, {
    method: "DELETE",
  }).then(() => {});
};

const serverHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

serverHttp.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getCookie(TOKEN_SAVE_KEY, { cookies });

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
    // logout();
    const { config } = error;
    // const status = error.response ? error.response.status : null;

    // if (config?.sent) {
    //   return Promise.reject(error);
    // }

    try {
      setTimeout(async () => {
        // config.sent = true;
        // 토큰 재설정
        const jwtToken = await getRefreshToken();

        if (jwtToken && config) {
          config.headers.Authorization = `Bearer ${jwtToken}`;
        }

        // 실패한 요청을 다시 시도
        if (config) {
          // config가 존재할 때만 요청 시도
          return serverHttp.request(config);
        } else {
          // config가 undefined일 경우 처리
          return Promise.reject(
            new Error("Request configuration is undefined"),
          );
        }
      }, 10000);
    } catch (refreshError) {
      logout();
      return Promise.reject(refreshError);
    }
  },
);

export default serverHttp;
