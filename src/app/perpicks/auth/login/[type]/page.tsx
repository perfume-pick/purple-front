"use client";
import { AuthLoginTryDTO } from "@/dto/authDTO";
import clientHttp from "@/utils/http/clientHttp";

import { useEffect } from "react";
// import { TOKEN_SAVE_KEY } from "@/constant/session";

type Req = {
  params: {
    type: string;
  };
  searchParams: {
    code: string;
    state: string;
  };
};

const KakaoCallbackPage = (req: Req) => {
  useEffect(() => {
    const type = req.params.type;
    const { searchParams } = req;

    // 임시 코드
    setTimeout(() => {
      clientHttp
        .post<
          never,
          AuthLoginTryDTO
        >(`/perpicks/auth/login/${type.toUpperCase()}?code=${searchParams.code}`, null)
        .then((res: any) => {
          console.log(res);
        });
    }, 5000);
  }, []);

  return <div>카카오 로그인 중...</div>;
};

export default KakaoCallbackPage;
