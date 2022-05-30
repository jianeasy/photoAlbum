import React, { useMemo, useState } from "react";

const MemoDemo = () => {
    const [count, setCount] = useState
    const isShow = useMemo(() => {
        return <span>{count}</span>
    }, [count])
    return (
        <div>
            <Banner />


        </div>
    )
}

