import  axios from 'axios';
let baseUrl=process.env.NODE_ENV=='production'?"https://account.aigauss.com/api/":'/account/';
export  const SendConfirmationCode=(data)=>{
    return axios.request({
        method:'post',
        url:baseUrl+'SendConfirmationCode',
        data:data
    })
}
