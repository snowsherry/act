import  axios from 'axios';
import token from '../dsbridge/token'
let auth=token.get();
import {baseUrlAccount} from "./base";
let baseUrl=baseUrlAccount;
export  const SendConfirmationCode=(data)=>{
    return axios.request({
        method:'post',
        url:baseUrl+'SendConfirmationCode',
        data:data
    })
}

export const getUserInfo=()=>{
    return axios.request({
        headers: {
            Authorization: "Bearer " + auth,
            product:3,
        },
        method:'get',
        url:baseUrl+'GetCurrentUserInfo',
    })
}
export  const WeChatH5Login=(data)=>{
    return axios.request({
            headers: {
                product:0,
            },
            method:'post',
            url:baseUrl+'Extension/WeChatH5Login',
            data:data
        })
}


