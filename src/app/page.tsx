import PublicBanners from "@/components/banner";
import serverHttp from "@/utils/http/serverHttp";

export default async function MainPage() {
  {
    /* TODO: 서버사이드 api 호출 test (추후 삭제) */
  }
  const response = await serverHttp.get<never, any>(
    `/perpicks/perfumes/preference`,
  );
  console.log(response.data);

  return <PublicBanners />;
}
