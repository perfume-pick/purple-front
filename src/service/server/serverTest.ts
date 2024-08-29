import serverHttp from "@/utils/http/serverHttp";

const endPoint = {
  PERFUME_PREFERENCE: "/perpicks/perfumes/preference",
};

type response = {
  timeStamp: string;
  responseData: {
    userPreferenceNotes: Array<string>;
    perfumes: Array<string>;
  };
};

async function getPerfumePreference() {
  const response = await serverHttp.get<never, response>(
    `${endPoint.PERFUME_PREFERENCE}`,
  );
  return response;
}

export { getPerfumePreference };
