import React from "react";

export default (props) => {
  const { children } = props;
  return (
    <div
      onClick={(e) => {
        e.nativeEvent.stopPropagation();
        console.log('点击parent')

      }}
    >
        <div style={{width:'100px'}} onClick={(e)=>{
            console.log('点击')
            e.nativeEvent.stopPropagation();
        }}>点击</div>
      {/* {children} */}
    </div>
  );
};
