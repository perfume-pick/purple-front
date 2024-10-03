import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";

export interface RestResponseType<T = any> {
  timeStamp: number;
  responseStatus?: number;
  responseData: T;
}

export interface FullRestResponse<T = any> extends RestResponseType<T> {
  config: AxiosRequestConfig;
  headers: AxiosResponseHeaders;
  request?: any;
  status: number;
  statusText: string;
  data: T;
}
