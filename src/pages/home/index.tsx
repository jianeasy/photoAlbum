import React, { createContext, ReactNode, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { route } from "@types";
import styles from "./index.module.scss";
import { Animated } from "@components";
import Flip from "@components/flipAnimated";
import Count from "@components/Count";
import UserList from "@components/userList";
import ImageList from "@components/imageList";
import Nav from "@components/nav";
import routes from "@config/nav";
import Upload from "../Upload";

import { store } from "@redux/store";
import Header from "./header";
export const ThemeContext = createContext("light");

function App() {
  const routePush = useNavigate();

  const [initData, setInitData] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      routePush("/login");
      return;
    }
  }, []);
  const setup = async () => {
    const initData = {};
    return initData;
  };
  useEffect(() => {
    setup().then((data) => {
      setInitData(data);
    });
  }, []);

  const render = (routes: route[]) => {
    if (!routes || !routes.length) return null;
    let res = [];
    routes.forEach((item: route) => {
      const { path, component, children } = item;
      let el = (
        <Route
          path={path}
          element={component}
          key={path}
          children={render(children)}
        />
      );
      res.push(el);
    });
    return res;
  };
  const RouteList = (route: route[]) => {
    return <Routes>{render(route)}</Routes>;
  };
  return (
    <Provider store={store}>
      <Header></Header>
      {RouteList(routes)}
      {/* <div className={styles.content}>{RouteList(routes)}</div> */}
      {/* <Route path="/upload" element={<Upload></Upload>}></Route> */}
    </Provider>
  );
}

export default App;
