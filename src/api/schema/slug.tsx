export interface RequestSlug {}
export interface DocDetailSerializer {
  // • title - 标题
  title: string;
  // • body - 正文 Markdown 源代码
  body: string;
  // • body_html - 转换过后的正文 HTML
  body_html: string;
  // • body_lake - 语雀 lake 格式的文档内容
  body_lake: string;
}
export interface ResponseSlug {
  data: DocDetailSerializer;
}
