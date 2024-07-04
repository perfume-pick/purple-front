"use client";
// import serverHttp from "@/utils/http/serverHttp";
import { AuthLoginTryDTO } from "@/dto/authDTO";
import clientHttp from "@/utils/http/clientHttp";

import { useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect } from "react";
// import { TOKEN_SAVE_KEY } from "@/constant/session";
import TokenService from "@/utils/tokenService";

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
  console.log(req);
  //   const { searchParams } = req;
  //   const data = await serverHttp.post<never, AuthLoginTryDTO>(
  //     `/perpicks/auth/login/${searchParams.code}`,
  //   );
  //   console.log(data);

  const params = useSearchParams();
  // const router = useRouter();

  useEffect(() => {
    const code = params.get("code");
    const type = req.params.type;
    if (code) {
      // window.localStorage.setItem(TOKEN_SAVE_KEY, tokenValue);
      //   TokenService.setToken(tokenValue);
      const { searchParams } = req;
      console.log(clientHttp);
      clientHttp
        .post<
          never,
          AuthLoginTryDTO
        >(`/perpicks/auth/login/${type.toUpperCase()}?code=${searchParams.code}`)
        .then((res: any) => {
          console.log(res);
        });
      //   return router.replace("/"); // go to main page if login success
    } else {
      // error case when failed login
    }
  }, []);

  return <div>카카오 로그인 중...</div>;
};

export default KakaoCallbackPage;
