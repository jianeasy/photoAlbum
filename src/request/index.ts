import axios from 'axios';

import { loginFromData , userInfo} from 'src/types';



export const login = (params:loginFromData)=>{
    return axios.post('login', params)
}

