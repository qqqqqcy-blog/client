import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetReposToc } from "../../api";
import { tocItem } from "../../api/schema/docs";
import "./style.scss";
const listMap = {};

const Home = function () {
  const { id = 821089 } = useParams();
  const { request } = useGetReposToc({}, `/api/v2/repos/${id}/docs`);

  const [listSource, setListSource] = useState<tocItem[]>([]);
  useEffect(() => {
    if (listMap[id]) {
      setListSource(listMap[id]);
    } else {
      request().then(({ data }) => {
        listMap[id] = data;
        setListSource(listMap[id]);
      });
    }
  }, [id, request]);

  const list = useMemo(
    () =>
      listSource?.map(({ title, slug, description }) => {
        return (
          <li key={slug}>
            <Link to={`/article/${id}/${slug}`}>
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          </li>
        );
      }),

    [listSource, id]
  );

  return <ul className="Home">{list}</ul>;
};

export default Home;
