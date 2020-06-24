export interface RequestRepos {}
export interface BookSerializer {
  // • id - 仓库编号
  id: number;
  // • type - 类型 [Book - 文档]
  // • slug - 仓库路径
  // • name - 名称
  name: string;
  // • namespace - 仓库完整路径 user.login/book.slug
  namespace: string;
  // • user_id - 所属的团队/用户编号
  // • user - <UserSerializer>
  // • description - 介绍
  // • creator_id - 创建人 User Id
  // • public - 公开状态 [1 - 公开, 0 - 私密]
  public: 0 | 1;
  // • likes_count - 喜欢数量
  // • watches_count - 订阅数量
  // • created_at - 创建时间
  // • updated_at - 更新时间
}
export interface ResponseRepos {
  data: BookSerializer[];
}
