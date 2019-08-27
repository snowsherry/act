import axios from 'axios';
let baseUrl=process.env.NODE_ENV!=='development'?'http://10.0.17.66/api/getSchoolList':'/getSchoolList';

export const getSchoolList=(params)=>{
    return  axios.request({
        method:"get",
        url:baseUrl,
        params:params
    })
}