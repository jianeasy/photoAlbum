import React, { FC, useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";
import useAxios from "../../hooks/useAxios";
import useIsView from '../../hooks/useIsView';
import _ from "loadsh";

type ImageProps = {
  url: string;
  scrollTop: number;
};
const Image: FC<ImageProps> = (props) => {
  const { url, scrollTop } = props;
  const [isView, setIsView] = useState(false);
    const {isView} = useIsView()
  useEffect(() => {
    // if (scrollTop > imgRef.current.offsetTop) {
    //   imgRef.current.setAttribute("src", url);
    // }
    if (
      scrollTop + document.body.clientHeight + 20 >
      imgRef.current.offsetTop
    ) {
      setIsView(true);
    }
  }, [scrollTop]);
  const imgRef = useRef<HTMLImageElement>(null);
  return <img ref={imgRef} src={isView ? url : "#"} />;
};

const UserList: FC = () => {
  const baseUrl = "http://101.43.68.207:3000";
  const { res } = useAxios({
    url: "http://101.43.68.207:3000/image_urls",
    method: "get",
  });
  const [scrollTop, setScrollTop] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setScrollTop(pageRef.current.scrollTop);
  };
  const [list, setList] = useState(null);
  useEffect(() => {
    if (!res) return;
    const {
      data: { image_urls },
    } = res.data;
    setList(image_urls.map((item: any) => `${baseUrl}${item}`));
  }, [res]);
  return (
    <div
      ref={pageRef}
      className={styles.page}
      onScroll={_.throttle(handleScroll, 300)}
    >
      {list &&
        list.map((item) => {
          //   return <img src={item} key={item} />;
          return <Image url={item} scrollTop={scrollTop} key={item} />;
        })}
    </div>
  );
};

export default UserList;
