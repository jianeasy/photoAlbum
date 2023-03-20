import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          navigate("/upload");
        }}
      >
        上传一张照片
      </div>
      <div
        onClick={() => {
          navigate("/photo");
        }}
      >
        列表
      </div>

    </div>
  );
};

export default Header;
