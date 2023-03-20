import React from "react";

import { route } from "@types";
import ImageList from "../components/imageList";
import Login from "../pages/login";
import Upload from "../pages/Upload";
import ErrorBoundaries from "@components/ErrorBinary";
import PhotoList from "../pages/PhotoList";

const routes: route[] = [
  {
    path: "/",
    component: <div>root</div>,

  },
  { path: '/upload', component: <ErrorBoundaries><Upload></Upload></ErrorBoundaries> },
  { path: "/login", component: <Login></Login> },
  {
    path: "/photo",
    component: <PhotoList />,
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
