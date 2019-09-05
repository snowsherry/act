import axios from 'axios';
import {baseUrlChallenge} from "./base";
let baseUrl=baseUrlChallenge;
export const getSeasonDetail=(data)=>{
  return  axios.request({
        method:"post",
        url:baseUrl+'/season/get-season-detail?isSign='+data.isSign,
       // data:data
    })
}

export const getAwardDetail=(type='ALL')=>{
    return  axios.request({
        method:"get",
        url:baseUrl+'/rank/imgUrl',
        params:{
            type:type
        }
    })
}

export const getTodayCoinPool=()=>{
    return  axios.request({
            method:"post",
            url:baseUrl+'/season/get-award',
        })
}

export  const weChatLogin=(data)=> {
    return  axios.request({
            method:"post",
            url:baseUrl+'/wechat/auth',
            data:data
        })
}
export const getSeasonHistory=()=>{
    return  axios.request({
        method:"post",
        url:baseUrl+'/season/get-season-history',
    })
}
