import React, { useEffect, useState } from "react";
import styles from './index.module.scss'
import { getPhotoList, getLargeList } from '@request'

export default (props) => {
    const [params, setParams] = useState()
    const [dataSource, setDataSource] = useState()
    const [list, setList] = useState([])
    const [contaienrDom, setContaienrDom] = useState(null)
    const getData = async (params: { pageIndex: number; pageSize: number; }) => {
        const res = await getLargeList(params)
        setList(res)
    }

    useEffect(() => {

        getData({ pageIndex: 1, pageSize: 30 })
    }, [])

    return <div className={styles.container} ref={setContaienrDom}>
        {
            list.map(item => {
                return <div className="item">{item.message}</div>
            })
        }

    </div>
}