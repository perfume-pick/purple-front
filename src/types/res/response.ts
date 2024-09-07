export interface RestResponseType<T = any> {
  timeStamp: number;
  responseStatus?: number;
  responseData: T;
}
