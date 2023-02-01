import { ReactNode, ReactComponentElement, FC } from 'react'


export interface ResponseType {
    code: number;
    data: any;
    token?: string | number;
    message?: string | number;
    success: boolean

}

export interface ReduxAction {
    type: string;
    payload: unknown
}

export interface loginFromData {
    userName: string;
    password: string;
}


export interface userInfo {
    userName: string;
    type: string;
}



export interface route {
    path: string;
    component: FC | null | JSX.Element,
    children?: route[] | undefined,
    options?: {

    }
}