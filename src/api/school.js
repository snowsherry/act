import axios from 'axios';
import {AxiosRequst} from './base'
let baseUrl=process.env.NODE_ENV!=='development'?'http://10.0.17.66/api':'/SchoolApi';

export const getSchoolList=(params)=>{
    return  axios.request({
        method:"get",
        url:baseUrl+'/getSchoolList',
        params:params
    })
}
export  const addTeam=(data)=>{
    return AxiosRequst({
        method:'post',
        url:baseUrl+'/addTeam',
        data:data
    })
}
