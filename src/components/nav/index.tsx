import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const list = [
    { name: "ImageList", path: "file" },
    { name: "file", path: "setting" },
  ];
  return (
    <div className={styles.container}>
      {list.map((item) => {
        const { path, name } = item;
        return (
          <div key={name} className={styles.item}>
            <Link to={path}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
