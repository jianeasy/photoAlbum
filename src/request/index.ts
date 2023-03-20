import axios from 'axios';
import { loginFromData, userInfo, ResponseType, Photo } from '@types';

const mode = process.env.NODE_ENV

const getBaseUrl = (mode: string) => {
    if (mode === 'development') {
        return 'http://localhost:3333/dev'
    } else if (mode === 'product') {
        return 'http://101.43.68.207:3003/api'
    } else {
        return ''
    }
}

const request = axios.create({
    baseURL: getBaseUrl(mode),
    timeout: 5 * 1000,
    // headers: {
    //     'content-type': ''
    // }
})

request.interceptors.request.use()
request.interceptors.response.use((response) => {
    const { data } = response
    return data
})

export const login = async (data: loginFromData) => {
    return await request.post('login', data)
}
export const addPhoto = async (data: Photo) => {
    return await request.post('photo', data)
}
export const getPhotoList = async (data: { pageIndex: number; pageSize: number }) => {
    return await request.post('photo/list', data)
}
export const getLargeList = async (data: { pageIndex: number; pageSize: number }) => {
    const a = new Promise((resolve, reject) => {
        setTimeout(() => {
            const { pageIndex, pageSize } = data
            const list = new Array(pageSize)

            for (let i = 0; i < pageSize; i++) {
                list[i] = {
                    id: pageIndex + i,
                    message: `第${pageIndex + i}条数据`,

                }
            }
            resolve(list)

        }, 500)
    })
    return await a

}