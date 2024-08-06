import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "cookies-next";
import { TOKEN_SAVE_KEY } from "@/utils/tokenService";

// `POST` 메서드 핸들러
export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const res = NextResponse.json(true, { status: 200 });

    setCookie(TOKEN_SAVE_KEY, token, {
      req,
      res,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 2, // 2 days
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(false, { status: 500 });
  }
}
