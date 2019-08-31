import axios from 'axios';
let baseUrl=process.env.NODE_ENV!=='development'?'http://10.0.2.98:8081/admin':'/admin';

export const getSeasonDetail=(data)=>{
  return  axios.request({
        method:"post",
        url:baseUrl+'/season/get-season-detail?isSign='+data.isSign,
       // data:data
    })
}