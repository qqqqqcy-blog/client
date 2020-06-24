export interface RequestReposDocs {}

export interface tocItem {
  // • title - 标题
  title: string;
  // • slug - 文档 Slug
  slug: string;
  // • description - 简介
  description: string;
}
export interface ResponseReposDocs {
  data: tocItem[];
}
