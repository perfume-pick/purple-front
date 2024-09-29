"use client";

import { getJwtToken } from "@/service/client/signInService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";

type Req = {
  params: {
    type: string;
  };
  searchParams: {
    code: string;
    state: string;
  };
};

const KakaoCallbackPage = (req: Req, res: any) => {
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

        // const baseUrl = "http://localhost:3000";
        await fetch(`/api/set-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jwtToken }),
        }).then(res => {
          if (res.ok) {
            localStorage.setItem(TOKEN_SAVE_KEY, jwtToken);

            if (isSignUp) {
              router.push("/onBoarding/nickName");
            } else {
              router.push("/");
            }
          }
        });
      } catch (error) {
        {
          /* TODO: 404 페이지 이동 필요 */
        }
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

  return <div>카카오 로그인 중...</div>;
};

export default KakaoCallbackPage;
