import { USER } from '../types';


export const CHANGE_IMAGELIST = 'CHANGE_IMAGELIST'
export const ADD_USER = 'ADD_USER'

// action creator
export const changeImageList = (imageList: string[]) =>{
    return{
        type: CHANGE_IMAGELIST,
        imageList,
    }
}


export const addUser = (user: USER) =>{
    return {
        type: ADD_USER,
        user,
    }
}