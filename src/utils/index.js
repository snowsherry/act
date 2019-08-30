export const str_pad_let=(str,amount,padding)=>{
    if(!str) return;
    if (str.length>=amount) return str;
    let paddingLeft=new Array(amount-str.length).fill(padding).join("");
    return paddingLeft+str;

}