import  axios from 'axios';
export  const nonceStr='xyjnb';
export  const appId='wxd11569992f19c317';
export  const getSignature=(data)=>{
  return  axios.request({
        method:"post",
        url:'http://localhost:8001/getSignature',
        data:data
    })
}