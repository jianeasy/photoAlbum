import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const SwiperDemo = () => {
  const list = [
    { title: "bbbbbbb" },
    { title: "aaaaaaa" },
    { title: "ccccccc" },
  ];
  return (
    <div style={{ width: "300px", height: "300px",margin:'0 auto', backgroundColor: "#666", display: 'flex',  justifyContent: 'center' }}>
      <Swiper

        onSlideChange={() => console.log("slide change")}
        style={{width :'300px',height: '300px', backgroundColor: 'red',display: 'flex', flexDirection:'row', justifyContent: 'center' ,alignItems: 'flex-start'}}
      >
        <SwiperSlide style={{width: '300px', height: '300px', background: '#87ce'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{width: '300px', height: '300px', background: 'green'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{width: '300px', height: '300px', background: 'blue'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{width: '300px', height: '300px', background: '#87cefa'}}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperDemo
