"use client";
import axios from "axios";
import { httpConfigHelper, httpParserHelper } from "@/utils/http/helper";

const clientHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

clientHttp.interceptors.request.use(httpConfigHelper, () => {});
clientHttp.interceptors.response.use(httpParserHelper, error => {
  /*
   * 토큰 만료일 때
   * if(error.status === 401) {
   * 리프레시 토큰이 유효하지 않은 경우, 로그아웃 처리
   *   window.localStorage.removeItem(TOKEN_SAVE_KEY);
   * }
   * 401(아마도) 에러 발생했을때 로컬 스토리지에서 jwt 토큰삭제. + 액세스 토큰
   * UI 적인건 개별 컴포넌트 혹은 페이지에서 처리.
   * */
  //   const refreshToken = localStorage.getItem('refreshToken');
  //       try {
  //         const response = await axios.post('https://your-api-endpoint.com/refresh-token', { token: refreshToken });
  //         const { accessToken, refreshToken: newRefreshToken } = response.data;
  //         localStorage.setItem('accessToken', accessToken);
  //         localStorage.setItem('refreshToken', newRefreshToken);
  //         api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  //         return api(originalRequest);
  //       } catch (refreshError) {
  //         // 리프레시 토큰이 유효하지 않은 경우, 로그아웃 처리
  //         localStorage.removeItem('accessToken');
  //         localStorage.removeItem('refreshToken');
  //         // 필요 시 로그인 페이지로 리디렉션
  //         window.location.href = '/login';
  //         return Promise.reject(refreshError);
  //       }
});

export default clientHttp;
