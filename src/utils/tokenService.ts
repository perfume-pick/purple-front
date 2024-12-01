import { NextRequest, NextResponse } from "next/server";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";

interface TokenServiceType {
  setToken(token: string, req: NextRequest, res: NextResponse): void;
  getToken(req: NextRequest, res: NextResponse): string | undefined;
  removeToken(req: NextRequest, res: NextResponse): void;
}

const TokenService: TokenServiceType = {
  setToken(token: string, req: NextRequest, res: NextResponse): void {
    setCookie(TOKEN_SAVE_KEY, token, {
      req,
      res,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 2, // 2 days
      path: "/",
    });
  },

  getToken(req: NextRequest, res: NextResponse): string | undefined {
    return getCookie(TOKEN_SAVE_KEY, { req, res });
  },

  removeToken(req: NextRequest, res: NextResponse): void {
    deleteCookie(TOKEN_SAVE_KEY, { req, res });
  },
};

export default TokenService;
