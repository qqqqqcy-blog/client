import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useGetReposSlug } from "../../api";
import "./style.scss";

const Article = () => {
  const { id, slug } = useParams();

  const { request, data } = useGetReposSlug(
    {},
    `/api/v2/repos/${id}/docs/${slug}`
  );
  useEffect(() => {
    request({ raw: 1 });
  }, [request]);
  if (!data) return null;
  return (
    <div className="Article">
      <h1 className="Article-title">{data.data.title}</h1>
      <main dangerouslySetInnerHTML={{ __html: data.data.body_html }}></main>
    </div>
  );
};

export default Article;
