export interface Profile {
  timeStamp: string;
  responseData: {
    nickname: string;
    imageUrl: string | null;
    email: string;
  };
}
