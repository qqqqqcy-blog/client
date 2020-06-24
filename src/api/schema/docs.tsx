export interface RequestReposDocs {}

export interface tocItem {
  // • title - 标题
  title: string;
  // • slug - 文档 Slug
  slug: string;
  // • description - 简介
  description: string;
  // • status - 状态 [1 - 发布, 0 - 未发布]
  status: 0 | 1;
}
export interface ResponseReposDocs {
  data: tocItem[];
}
