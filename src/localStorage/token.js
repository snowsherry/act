const tokenInWechat='tokenInWechat';//
export const set=(token)=>{
    localStorage.setItem(tokenInWechat,token);
}
export const get=()=>{
    return localStorage.getItem(tokenInWechat)?localStorage.getItem(tokenInWechat):'';
}
