import { NextRequest, NextResponse } from "next/server";
import TokenService from "@/utils/tokenService";

export async function POST(req: NextRequest) {
  try {
    const { jwtToken } = await req.json();
    const res = NextResponse.json(true, { status: 200 });

    TokenService.setToken(jwtToken, req, res);

    return res;
  } catch (error) {
    return NextResponse.json(false, { status: 500 });
  }
}
