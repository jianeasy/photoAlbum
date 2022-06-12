import ImageList from "../components/imageList";
import React from "react";
const routes = [
  {
    path: "/",
    component: <div>root</div>,
  },
  {
    path: "/ImageList",
    component: <ImageList />,
  },
  {
    path: "/file",
    component: <div>file</div>,
    chilren: [
      {
        path: "/file/detail",
        component: <div>file-detail</div>,
      },
    ],
  },
];

export default routes;
