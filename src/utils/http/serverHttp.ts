import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { NextResponse, NextRequest } from "next/server";
import { httpParserHelper } from "@/utils/http/helper";
import { cookies } from "next/headers";
import TokenService, { TOKEN_SAVE_KEY } from "@/utils/tokenService";
import { setCookie, getCookie, deleteCookie, getCookies } from "cookies-next";
// import { logout } from "./logout";

// import { redirect } from "next/navigation";

type response = {
  timeStamp: string;
  responseData: {
    jwtToken: string;
  };
};

const baseUrl = "http://localhost:3000";

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const originToken = cookies().get(TOKEN_SAVE_KEY)?.value;
    console.log("originToken!!!!!");
    console.log(originToken);

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
  console.log("cookie1 -> " + getCookie(TOKEN_SAVE_KEY, { cookies }));

  await fetch(`${baseUrl}/api/delete-token`, {
    method: "DELETE",
  }).then(res => {
    console.log("cookie2 -> " + getCookie(TOKEN_SAVE_KEY, { cookies }));
  });
};

const serverHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

serverHttp.interceptors.request.use(
  (config: AxiosRequestConfig) => {
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

    if (config?.sent) {
      return Promise.reject(error);
    }

    try {
      setTimeout(async () => {
        config.sent = true;
        // 토큰 재설정
        const jwtToken = await getRefreshToken();

        if (jwtToken) {
          config.headers.Authorization = `Bearer ${jwtToken}`;
        }

        // 실패한 요청을 다시 시도
        return serverHttp.request(config);
      }, 10000);
    } catch (refreshError) {
      logout();
      return Promise.reject(refreshError);
    }
  },
);

export default serverHttp;
