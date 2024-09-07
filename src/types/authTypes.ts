export interface AuthLoginTryDTO {
  uri: "string";
}

export interface AuthJwtTokenDTO {
  data: {
    timeStamp: string;
    responseData: {
      jwtToken: string;
    };
  };
}
