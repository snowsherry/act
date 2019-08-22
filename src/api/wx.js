import axios from 'axios'
let baseUrl='/WX';
export  const APPID='wxd11569992f19c317';
export  const goWxAuthor=(url='',state='',hash='')=>{
    //url=encodeURIComponent(url);
    let page=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd11569992f19c317&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=${state}#${hash}`;
    window.location.href=page;
    return;
}
export  const getAccessToken=(code)=>{
 /* return  axios.request({
        method:'post',
        url:'http://localhost:8001/getAccessToken',
          data:{
                code:code
          }
        //url:`${baseUrl}/sns/oauth2/access_token?appid=${APPID}&secret=${SECRET}&code=${code}&grant_type=authorization_code`,
    })*/
}