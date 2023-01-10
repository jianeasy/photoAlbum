import { CHANGE_IMAGELIST, ADD_USER } from '../actions';

import {ReduxAction}from '@types'

const defaultState = {
    imageList: [],
    userList: [],
}


export const reducer = (state = defaultState, action: ReduxAction) => {
    const {type, payload} = action
    switch (type) {
        case CHANGE_IMAGELIST:
            return {
                ...state,
                imageList: payload
            }
        case ADD_USER:
            return {
                ...state,
                useList: [
                    ...state.userList,
                    payload
                ]
            }
        default:
            return defaultState;
    }
}