import React, { createContext, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { route } from "@types";
import styles from "./index.module.scss";
import { Animated } from "@components";
import Flip from "@components/flipAnimated";
import Count from "@components/Count";
import UserList from "@components/userList";
import ImageList from "@components/imageList";
import Nav from "@components/nav";
import routes from "@config/nav";

export const ThemeContext = createContext("light");
export default function App() {
  const render = (route: any) => {
    console.log("route=>", route);

    if (!route) return null;

    let res = [];
    route.forEach((item: { path: any; component: any; chilren: any }) => {
      console.log(item);

      const { path, component, chilren } = item;
      let el = (
        <Route
          path={path}
          element={component}
          key={path}
          children={render(chilren)}
        />
      );
      res.push(el);
    });
    console.log("res=>", res);

    return res;
  };
  const RouteList = (route: route[]) => {
    return <Routes>{render(route)}</Routes>;
  };
  return (
    <BrowserRouter>
      <div className={styles.app}>
        {/* <ThemeContext.Provider value="dark">
        <UserList />
        /ThemeContext.Provider> */}
        {/* <Nav></Nav> */}
        {/* <ImageList></ImageList> */}
        {RouteList(routes)}
      </div>
    </BrowserRouter>
  );
}
