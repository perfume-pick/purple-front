import { NextRequest, NextResponse } from "next/server";
import TokenService from "@/utils/tokenService";

export async function DELETE(req: NextRequest) {
  try {
    const res = NextResponse.json(true, { status: 200 });
    TokenService.removeToken(req, res);

    return res;
  } catch (error) {
    return NextResponse.json(false, { status: 500 });
  }
}
