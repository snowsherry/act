export const str_pad_let=(str,amount,padding)=>{
    if(!str) return;
    if (str.length>=amount) return str;
    let paddingLeft=new Array(amount-str.length).fill(padding).join("");
    return paddingLeft+str;

}
export  const isWeiXin=()=>{
    let  userAgent = navigator.userAgent.toLowerCase();
    console.log('userAgent',userAgent)
    return userAgent.match(/MicroMessenger/i)=="micromessenger"?true:false;
}
export const getCurrentPage=(hasQuery=true,hasHash=false)=>{
    let url=window.location.href;
    if(!hasQuery){
       return url.replace(/\?.*?$/,'');
    }else if(!hasHash){
        return url.replace(/\#.*?$/,'');
    }
    return url;

}
export  const goDownload=()=>{
    let url='https://sj.qq.com/myapp/detail.htm?apkName=com.tigerobo.exchange';
    window.location.href=url;
}