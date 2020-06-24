import { useReducer, useCallback, useMemo } from "react";
import Axios, { AxiosResponse } from "axios";
import deepObjectMerge from "./deepObjectMerge";

import { CustomizeType, customizeOptions, AxiosArg } from "./config";

const initialResponse = { data: undefined, error: undefined, loading: false };
const actions = {
  init: "init",
  success: "success",
  fail: "fail",
};

function responseReducer(_state: any, action: any) {
  switch (action.type) {
    case actions.init:
      return { ..._state, error: undefined, loading: true };
    case actions.success:
      return { data: action.payload, error: undefined, loading: false };
    case actions.fail:
      return { data: undefined, error: action.payload, loading: false };
    default:
      return initialResponse;
  }
}

interface UseAxiosReturn<Req, Res> {
  request: (payLoadExtra?: Partial<Req>) => Promise<Res>;
  data: Res | undefined;
  error: any;
  loading: boolean;
}

function getParams(method: string, payLoadStr: string, payLoadExtra?: object) {
  const obj = deepObjectMerge(JSON.parse(payLoadStr), payLoadExtra || {});

  if (method === "GET") {
    return { params: obj };
  } else if (method === "POST") {
    return { data: obj };
  } else {
    return {};
  }
}

const useAxios = <Req extends any, Res extends any>({
  url,
  type,
  method = "GET",
  payLoad,
  options,
}: // customHandler = () => {},
AxiosArg<Req, Res>): UseAxiosReturn<Req, Res> => {
  const [results, dispatch] = useReducer(responseReducer, initialResponse);
  // 初始数据
  const payLoadStr = useMemo(() => JSON.stringify(payLoad || {}), [payLoad]);
  // 构建请求
  const request = useCallback<(payLoadExtra?: Partial<Req>) => Promise<Res>>(
    (payLoadExtra) => {
      dispatch({ type: actions.init });
      // const handle = (res: Res | undefined, err: any) => {
      //     customHandler ? customHandler(res, err) : () => {};
      // };
      // handle(undefined, undefined);
      return Axios({
        withCredentials: true,
        url,
        method,
        ...getParams(method, payLoadStr, payLoadExtra),
        ...customizeOptions[CustomizeType[type || "default"]],
        ...options,
      })
        .then(({ data }: AxiosResponse<Res>) => {
          // handle(data, undefined);
          dispatch({ type: actions.success, payload: data });
          return data;
        })
        .catch((error) => {
          // handle(undefined, error);
          dispatch({ type: actions.fail, payload: error });
          return error;
        });
    },
    [method, options, payLoadStr, type, url]
  );

  return {
    request,
    ...results,
  };
};
export default useAxios;
