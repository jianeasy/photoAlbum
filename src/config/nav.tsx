import React from "react";


import ImageList from "../components/imageList";
import Login from '../pages/login';
const routes = [
  {
    path: "/",
    component: <div>root</div>,
  },
  { path: '/login', components:<Login></Login>},
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
