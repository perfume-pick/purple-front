"use client";

import React from "react";
// import TokenService from "@/utils/tokenService";
// import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Req = {
  params: {
    type: string;
    loginResult: string;
  };
  searchParams: {
    token: string;
  };
};

const loginResultpage = (req: Req) => {
  console.log(req);
  const { searchParams, params } = req;
  const router = useRouter();

  const tokenValue = searchParams.token;
  console.log(tokenValue);

  if (params.loginResult === "success" && searchParams.token?.length > 0) {
    // TokenService.setToken(tokenValue);
    // go to main page if login success
    if (typeof window !== "undefined") {
      // 클라이언트 환경에서만 실행될 코드
      return router.replace("/");
    }
  } else {
    // 오류 처리
  }

  //   useEffect(() => {
  //     console.log("useEffect!!!!!!");
  //     console.log(searchParams.token, params.loginResult);
  //     const tokenValue = searchParams.token;

  //     if (params.loginResult === "success" && searchParams.token?.length > 0) {
  //       TokenService.setToken(tokenValue);
  //       return router.replace("/"); // go to main page if login success
  //     } else {
  //       // 오류 처리
  //     }
  //   }, [searchParams.token]);

  return <div>결과</div>;
};

export default loginResultpage;
