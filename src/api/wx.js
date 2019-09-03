import axios from 'axios'
let baseUrl='/WX';
export  const APPID='wx69ab2ec17a1ea685';
export  const goWxAuthor=(url='',state='',hash='')=>{
    //url=encodeURIComponent(url);
    let page=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=${state}#${hash}`;
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