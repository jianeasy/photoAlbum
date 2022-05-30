import React, { useState } from 'react'
import styles from './index.module.scss'

export default function Flip() {
    const [list, setList] = useState([1, 2, 3, 4, 5])
    const handleAdd = () => {
        setList([...list, 0])
    }
    const handleDelete = () => {
        setList([...list.slice(1)])
    }
    return (
        <div className={styles.container}>
            <div className={styles.options}>
                <div onClick={handleAdd} className={styles.add}>添加</div>
                <div onClick={handleDelete} className={styles.minus}>删除</div>
            </div>
            <div className={styles.list}>
                {
                    list.map((item, i) => {
                        return <div className={styles.item} key={i}>
                            {`第${i}条`}
                        </div>
                    })
                }
            </div>


        </div>
    )
}