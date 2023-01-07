import React from 'react';
import ReactDom from 'react-dom';
import App from '@/pages/home/index';

if((module as any).hot){
    (module as any).hot.accept(error=>{
        if(error){
            console.log("热替换出现bug", error);
        }else{
            console.log('hot update success')
        }
    })
    
}
ReactDom.render(<App />, document.getElementById('app'));



