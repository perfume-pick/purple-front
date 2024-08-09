import { NextRequest, NextResponse } from "next/server";
import clientHttp from "@/utils/http/clientHttp";

type response = {
  timeStamp: string;
  responseData: {
    userSearchHistories: [
      {
        id: number;
        searchName: string;
        searchAt: string;
      },
    ];
  };
};

export async function GET(req: NextRequest) {
  console.log(
    `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}/users/my/search-histories`,
  );
  try {
    const response = await clientHttp.get<never, response>(
      `${process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL}/users/my/search-histories`,
    );

    return response;
  } catch (error) {
    return NextResponse.json(false, { status: 500 });
  }
}
