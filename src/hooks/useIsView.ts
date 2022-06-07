import { useEffect, useState } from "react";

type Param = {
    element: HTMLElement;
    scrollTop: number;
}
const useIsView = (props: Param) => {
    const { element, scrollTop } = props
    const [isView, setIsView] = useState(false);

    useEffect(() => {
        // const observer = new IntersectionObserver((entries)=>{
        //     const entry = entries[0]
        //     if(entry.isIntersecting){
        //         setIsView(true)
        //     }
        // })
        // observer.observe(element)
        // return ()=>{
        //     observer.unobserve(element)
        // }
        if (scrollTop + document.body.clientHeight + 20 > element.offsetTop) {
            setIsView(true)
        }
    }, [scrollTop])
    return { isView }
}
export default useIsView