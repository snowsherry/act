import axios from 'axios';
import {AxiosRequst,baseUrlSchool} from './base'
let baseUrl=baseUrlSchool;

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

export  const getParticipantInfo=()=>{
    return AxiosRequst({
        method:'get',
        url:baseUrl+'/participant',
    })
}