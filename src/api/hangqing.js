import  axios from 'axios'
export  const getQuotation=(code)=>{//可以批量查询codes ，分割开
    let pars={
        method:"get",
        url:`http://nujump.aigauss.com/HB_Jumper/nu.ashx?cmd=${code}&sty=ACOSFDTA&st=z&sic=-1,1,10&flt=transhb&js=(x)&cb=`,
    }
    return axios(pars)
}