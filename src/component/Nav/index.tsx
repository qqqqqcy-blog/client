import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useGetRepos } from "../../api";
// import { ResponseRepos } from "../../api/schema/repos";

const Nav = function () {
  const [currentName, setCurrentName] = useState("");
  const { request, data } = useGetRepos();
  useEffect(() => {
    request();
  }, [request]);

  const navList = useMemo(() => {
    if (!data) return null;

    return data?.data
      .filter(({ public: isPublic }) => isPublic)
      .map(({ id, name }) => {
        return (
          <li
            key={id}
            className={`Nav-item ${currentName === name ? "active" : ""}`}
          >
            <Link onClick={() => setCurrentName(name)} to={`/home/${id}`}>
              {name}
            </Link>
          </li>
        );
      });
  }, [data, currentName]);

  if (!navList) return null;
  return <ul className="Nav">{navList}</ul>;
};

export default Nav;
