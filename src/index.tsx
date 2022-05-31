import React from "react";
import Animated from "./components/styleDemo/Animated";
import Flip from "./components/flipAnimated";
import Count from './components/Count';
import sort_ from "./hooks/sort";
export default function App() {
  const arr = [2, 4, 1, 6, 3, 7, 5, 8, 9]
  sort_(0, arr.length - 1, arr)
  console.log('arr sort',arr.toString());
  
  return <div style={{ width: '100vm' }}>
    <Count />
  </div>
}