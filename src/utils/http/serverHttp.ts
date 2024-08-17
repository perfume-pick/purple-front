import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { httpConfigHelper, httpParserHelper } from "@/utils/http/helper";
import { cookies } from "next/headers";
import { TOKEN_SAVE_KEY } from "@/utils/tokenService";
import { NextResponse } from "next/server";

const serverHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

serverHttp.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const cookieStore = cookies();
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
    if (error.response?.status === 401) {
      try {
        const cookieStore = cookies();
        const refreshToken = cookieStore.get(TOKEN_SAVE_KEY)?.value;

        if (refreshToken) {
          // 리프레시 토큰으로 새로운 JWT 토큰 요청
          const response = await serverHttp.post("/perpicks/auth/refresh", {
            token: refreshToken,
          });

          const newJwtToken = response.data.responseData.jwtToken;

          if (response.data && newJwtToken) {
            // 새로운 JWT 토큰을 HTTP Only 쿠키에 설정
            await fetch("/api/set-token", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ newJwtToken }),
            }).then(res => {
              if (res.ok) {
                localStorage.setItem(TOKEN_SAVE_KEY, newJwtToken);
              }
            });

            // 실패한 요청을 재시도
            error.config.headers.Authorization = `Bearer ${newJwtToken}`;
            return serverHttp.request(error.config);
          }
        }

        return serverHttp.request(error.config);
      } catch (refreshError) {
        // 리프레시 토큰이 유효하지 않으면 쿠키 삭제 및 로그인 페이지로 리디렉션
        fetch("/api/delete-token", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        return NextResponse.redirect("/signin");
      }
    }

    return Promise.reject(error);
  },
);

export default serverHttp;
