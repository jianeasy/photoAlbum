import React, {  useRef, useState } from "react";

import styles from "./index.module.scss";
interface FileInputProps {
  value?: any;
  onChange?: (...args: any) => void;
}
const FileInput = (props: FileInputProps) => {
  const { value, onChange } = props;
  
  const imgRef = useRef(null)
  const [ imageUrl, setImageUrl ] = useState('')
  return (
    <div className={styles.contaier}>
      <input type="file" onInput={(e:any)=>{
        const value = e.target.value
        console.log(value);
        
        setImageUrl(value)
        imgRef.current.setAttritube('src', value)
      }}/>
      <img ref={imgRef} src={imageUrl} width={200}></img>
    </div>
  );
};

export default FileInput;
