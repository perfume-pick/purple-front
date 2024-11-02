"use client";

import { getJwtToken } from "@/service/client/signInService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TokenClientService from "@/utils/tokenService.client";

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
  const router = useRouter();
  const type = req.params.type;
  const { searchParams } = req;

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await getJwtToken(
          type.toUpperCase(),
          searchParams.code,
        );
        const {
          responseData: { jwtToken, isSignUp },
        } = response.data;

        await fetch(`/api/set-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jwtToken }),
        }).then(res => {
          if (res.ok) {
            TokenClientService.setToken(jwtToken);

            if (isSignUp) {
              router.push("/onBoarding/nickName", { scroll: false });
            } else {
              router.push("/");
            }
          }
        });
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, [router, searchParams.code, type]);

  return <></>;
};

export default KakaoCallbackPage;
