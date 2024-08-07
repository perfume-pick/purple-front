import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { TOKEN_SAVE_KEY, TOKEN_REFRESH_KEY } from "@/utils/tokenService";

// `POST` 메서드 핸들러
export async function POST(req: NextRequest) {
  try {
    const { jwtToken } = await req.json();
    const res = NextResponse.json(true, { status: 200 });
    const { accessToken, refreshToken } = jwtDecode(jwtToken);

    setCookie(TOKEN_SAVE_KEY, accessToken, {
      req,
      res,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 2, // 2 days
      path: "/",
    });

    setCookie(TOKEN_REFRESH_KEY, refreshToken, {
      req,
      res,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(false, { status: 500 });
  }
}
