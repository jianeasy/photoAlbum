import { ReduxAction } from "@types"


const SET_TOKEN = 'set_token'  // save token action

const initUserData = {
    token:''

}
export default ( state = initUserData, action:ReduxAction  )=>{
    const { type, payload   }=action
    switch(type){
        case SET_TOKEN:
            return {
                ...state,
                token: payload
            }
        default:
            return {
                ...state
            }
    }

}