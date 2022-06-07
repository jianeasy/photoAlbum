import React, { FC, useCallback, useEffect, useMemo, useState, useContext } from "react";
import useAxios from "../../hooks/useAxios";
import ThemeContext from '../../index';

const UserList: FC = () => {
  console.log("render");
  const theme = useContext(ThemeContext)
  const { loading, res, err } = useAxios({
    url: "http://101.43.68.207:3000/user/list",
    method: "get",
  });
  const [list, setList] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!res) return;
    console.log("res=", res);
    setList(res.data.data);
  }, [res]);
  const handleClick = useCallback((name: string) => {
    console.log("click user name: " + name);
  }, []);
  const memoValue = useMemo(() => {
    console.log("执行memo函数");
    return 8 * count;
  }, [list]);
  const fn = () => {
    console.log("执行普通函数");
    return 6 * 6;
  };
  const value = fn();
  return (
    <div>
      {list &&
        list.map((item) => {
          return (
            <User key={item.name} name={item.name} onClick={handleClick} />
          );
        })}
      <div>{memoValue}</div>
      <div>{`普通value:${value}`}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        重新请求data{count}
      </button>
    </div>
  );
};
export default UserList;

interface UserProps {
  name: string;
  onClick: (name: string) => void;
}
const User: FC<UserProps> = (props) => {
  const { name, onClick } = props;
  const handleClick = (e) => {
    console.log(e);
    onClick && onClick(e.target.innerText);
  };
  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {name}
    </div>
  );
};
