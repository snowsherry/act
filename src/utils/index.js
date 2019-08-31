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