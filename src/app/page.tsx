import PublicBanners from "@/components/banner";
import { getPerfumePreference } from "@/service/server/serverTest";

export default async function MainPage() {
  {
    /* TODO: 서버사이드 api 호출 test (추후 삭제) */
  }
  const response = await getPerfumePreference();
  console.log(response?.data);

  return <PublicBanners />;
}
