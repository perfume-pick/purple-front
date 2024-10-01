"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
// import { TOKEN_SAVE_KEY } from "@/constant/session";
// import TokenService from "@/utils/tokenService";

export default function LoginSuccess() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tokenValue = params.get("token");
    if (tokenValue) {
      // window.localStorage.setItem(TOKEN_SAVE_KEY, tokenValue);
      // TokenService.setToken(tokenValue);
      return router.replace("/"); // go to main page if login success
    } else {
      // error case when failed login
    }
  }, []);
  return null;
}
