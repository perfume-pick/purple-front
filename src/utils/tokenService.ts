import { NextRequest, NextResponse } from "next/server";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const TOKEN_SAVE_KEY = "PERFUME_TOKEN";

interface TokenServiceType {
  setToken(token: string, req: NextRequest, res: NextResponse): void;
  getToken(req: NextRequest, res: NextResponse): string | undefined;
  removeToken(req: NextRequest, res: NextResponse): void;
}

const TokenService: TokenServiceType = {
  setToken(token: string, req: NextRequest, res: NextResponse): void {
    // localStorage.setItem(TOKEN_SAVE_KEY, token);
    setCookie(TOKEN_SAVE_KEY, token, {
      req,
      res,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 2, // 2 days
      path: "/",
    });
  },

  getToken(req: NextRequest, res: NextResponse): string | undefined {
    // return localStorage.getItem(TOKEN_SAVE_KEY);
    return getCookie(TOKEN_SAVE_KEY, { req, res });
  },

  removeToken(req: NextRequest, res: NextResponse): void {
    // localStorage.removeItem(TOKEN_SAVE_KEY);
    deleteCookie(TOKEN_SAVE_KEY, { req, res });
  },
};

export default TokenService;
