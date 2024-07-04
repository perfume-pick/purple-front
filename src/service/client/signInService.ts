import clientHttp from "@/utils/http/clientHttp";
import { OauthType } from "@/constant/auth.const";
import { AuthLoginTryDTO } from "@/dto/authDTO";

export async function clientCreateLoginTry(type: OauthType) {
  console.log(type);
  return await clientHttp.post<never, AuthLoginTryDTO>(
    `/perpicks/auth/login-try/${type}`,
  );
}
