import { CHANGE_IMAGELIST, ADD_USER } from '../actions';


const defaultState = {
    imageList: [],
    userList: [],
}


export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_IMAGELIST:
            return {
                ...state,
                imageList: action.imageList,
            }
        case ADD_USER:
            return {
                ...state,
                useList: [
                    ...state.userList,
                    action.user,
                ]
            }
        default:
            return defaultState;
    }
}