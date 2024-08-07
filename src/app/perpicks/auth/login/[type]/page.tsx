"use client";

import { getJwtToken } from "@/service/client/signInService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
        const jwtToken = response.data.responseData.jwtToken;

        await fetch("/api/set-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jwtToken }),
        }).then(res => {
          if (res.ok) {
            router.push("/");
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
