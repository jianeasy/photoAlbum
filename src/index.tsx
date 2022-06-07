import React, { createContext } from "react";
import Animated from "./components/styleDemo/Animated";
import Flip from "./components/flipAnimated";
import Count from "./components/Count";
import UserList from "./components/userList";
import ImageList from "./components/imageList";
export const ThemeContext = createContext("light");
export default function App() {
  return (
    <div style={{ width: "100vm" }}>
      {/* <ThemeContext.Provider value="dark">
        <UserList />
      </ThemeContext.Provider> */}
      <ImageList></ImageList>
    </div>
  );
}
