import React, { useCallback, useEffect, useState } from 'react'

const Count = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const getCount1 = useCallback(() => {
        console.log('get count1');
        return count1
    }, [count1])
    const getCount2 = useCallback(() => {
        console.log('get count2');
        return count2
    }, [count2])

    const updateCount1 = () => {
        console.log('update count1');
        setCount1(() => (count1 + 1))
    }

    const updateCount2 = () => {
        console.log('update count2');
        setCount2(() => (count2 + 1))
    }
    
    return (
        <div>
            <div>count1={getCount1()}</div>
            <div>count2={getCount2()}</div>

            <button onClick={updateCount1}>update count1</button>
            <button onClick={updateCount2}>update count2</button>
        </div>

    )
}
export default Count