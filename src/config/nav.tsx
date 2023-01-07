import React from "react";

import { route } from "@types";
import ImageList from "../components/imageList";
import Login from "../pages/login";
const routes: route[] = [
  {
    path: "/",
    component: <div>root</div>,
  },
  { path: "/login", component: <Login></Login> },
  {
    path: "/ImageList",
    component: <ImageList />,
  },
  {
    path: "/file",
    component: <div>file</div>,
    children: [
      {
        path: "/file/detail",
        component: <div>file-detail</div>,
      },
    ],
  },
];

export default routes;
