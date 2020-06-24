import { AxiosRequestConfig } from "axios";
import qs from "qs";

export enum CustomizeType {
  json,
  form,
  body,
  default,
}

export interface AxiosArg<Req, Res> {
  url?: string;
  type?: keyof typeof CustomizeType;
  method?: "GET" | "POST" | "PUT";
  payLoad?: Req;
  options?: AxiosRequestConfig;
  // customHandler?: (error: any, response: Res | undefined) => void;
}

export const customizeOptions: {
  [key in CustomizeType]: AxiosRequestConfig;
} = {
  [CustomizeType.json]: {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  },
  [CustomizeType.form]: {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    transformRequest: (data = {}) => qs.stringify(data),
  },
  [CustomizeType.body]: {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    transformRequest: (data = {}) =>
      qs.stringify({ ...data, body: JSON.stringify(data.body || {}) }),
  },
  [CustomizeType.default]: {},
};
