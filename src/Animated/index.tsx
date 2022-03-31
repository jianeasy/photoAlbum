import React, { useState } from "react";
import styles from "./index.module.scss";

export default function Animated() {
  const [navList] = useState([{ title: "产品" }, { title: "解决方案" }]);
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {navList.map((navItem) => {
          return (
            <div
              className={styles.navItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {navItem.title}
            </div>
          );
        })}
      </div>
      {isVisible && <div className={styles.dropWrapper}></div>}
    </div>
  );
}
