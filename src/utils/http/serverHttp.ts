"use server";
import axios from "axios";
import { httpParserHelper } from "@/utils/http/helper";

const serverHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

serverHttp.interceptors.response.use(httpParserHelper, () => {});

export default serverHttp;
