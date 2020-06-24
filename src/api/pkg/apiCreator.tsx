import useAxios from "./useAxios";
// import axios from './axios';
import deepObjectMerge from "./deepObjectMerge";

// export const apiCreator = <Req, Res>(
//     creatorArags: Parameters<typeof axios>[0],
// ) => (payLoad?: Req) =>
//     axios<Req, Res>({
//         ...creatorArags,
//         payLoad: deepObjectMerge(creatorArags.payLoad, payLoad),
//     });

export const hooksApiCreator = <Req, Res>(
  creatorArags: Parameters<typeof useAxios>[0]
) => (payLoad?: Req, url = creatorArags.url) =>
  useAxios<Req, Res>({
    ...creatorArags,
    url,
    payLoad: deepObjectMerge(creatorArags.payLoad, payLoad),
  });
