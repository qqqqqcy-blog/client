import { hooksApiCreator } from "./pkg/apiCreator";
import { RequestRepos, ResponseRepos } from "./schema/repos";
import { RequestReposDocs, ResponseReposDocs } from "./schema/docs";
import { RequestSlug, ResponseSlug } from "./schema/slug";

// RequestExampleReq, RequestExampleRes 是接口的入参、出参类型
const YUQUE_TOKEN = "ODxMmyNUSKNbL554tQE6vCEV25mGc38xl45m0hwp";
// const USER_AGEN = "qqqqqcy's blog";
// 定义接口

export const useGetRepos = hooksApiCreator<RequestRepos, ResponseRepos>({
  url: `/api/v2/users/qqqqqcy/repos`,
  options: {
    headers: {
      //   "User-Agen": USER_AGEN,
      "X-Auth-Token": YUQUE_TOKEN,
    },
  },
});

export const useGetReposToc = hooksApiCreator<
  RequestReposDocs,
  ResponseReposDocs
>({
  url: `/api/v2/repos/:id/toc`,
  options: {
    headers: {
      //   "User-Agen": USER_AGEN,
      "X-Auth-Token": YUQUE_TOKEN,
    },
  },
});

export const useGetReposSlug = hooksApiCreator<RequestSlug, ResponseSlug>({
  url: `/api/v2/repos/:namespace/docs/:slug`,
  options: {
    headers: {
      //   "User-Agen": USER_AGEN,
      "X-Auth-Token": YUQUE_TOKEN,
    },
  },
});
