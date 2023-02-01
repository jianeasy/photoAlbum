import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import App from "./src/pages/home";

console.log("当前环境-->", process.env.NODE_ENV);

if ((module as any).hot) {
  (module as any).hot.accept((error) => {
    if (error) {
      console.log("热替换出现bug", error);
    } else {
      console.log("hot update success");
    }
  });
}
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
