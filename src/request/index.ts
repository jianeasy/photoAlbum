import axios from 'axios';
import { loginFromData, userInfo, ResponseType } from '@types';

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

