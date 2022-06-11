import React, { createContext, ReactNode } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import styles from "./index.module.scss";
import Animated from "../../components/styleDemo/Animated";
import Flip from "../../components/flipAnimated";
import Count from "../../components/Count";
import UserList from "../../components/userList";
import ImageList from "../../components/imageList";
import Nav from "../../components/nav";

export const ThemeContext = createContext("light");
export default function App() {
  const route = [
    {
      path: "/",
      component: <div className={styles.route}>root</div>,
      chilren: [
        {
          path: "/setting",
          component: <div className={styles.route}>setting</div>,
        },
        {
          path: "/file",
          component: <div className={styles.route}>file</div>,
        },
      ],
    },
  ];
  const render = (route: any) => {
    console.log("route=>", route);

    if (!route) return null;

    let res = [];
    route.forEach((item) => {
      console.log(item);

      const { path, component, chilren } = item;
      let el = (
        <Route path={path} element={component} key={path} children= {render(chilren)} />

      );
      res.push(el);
    });
    console.log('res=>',res);
    
    return res;
  };
  const RouteList = (route) => {
    return <Routes>{render(route)}</Routes>;
  };
  return (
    <HashRouter>
      <div className={styles.app}>
        {/* <ThemeContext.Provider value="dark">
        <UserList />
      </ThemeContext.Provider> */}
        <Nav></Nav>
        {/* <ImageList></ImageList> */}
        {RouteList(route)}
      </div>
    </HashRouter>
  );
}
