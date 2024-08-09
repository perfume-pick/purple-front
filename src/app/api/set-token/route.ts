import { NextRequest, NextResponse } from "next/server";
import TokenServiceType from "@/utils/TokenService";

export async function POST(req: NextRequest) {
  try {
    const { jwtToken } = await req.json();
    const res = NextResponse.json(true, { status: 200 });

    TokenServiceType.setToken(jwtToken, req, res);

    return res;
  } catch (error) {
    return NextResponse.json(false, { status: 500 });
  }
}
