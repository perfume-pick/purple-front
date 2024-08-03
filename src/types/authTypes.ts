export interface AuthLoginTryDTO {
  uri: "string";
}

export interface AuthJwtTokenDTO {
  timeStamp: string;
  responseData: {
    jwtToken: string;
  };
}
