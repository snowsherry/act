import  axios from 'axios'
import  {baseUrlCoin,AxiosRequst} from './base-coin-mission'

export  const Withdraw=(params)=>{
    return  AxiosRequst({
        url:baseUrlCoin+'/Withdraw',
        params:params
    })
}

export  const GetWithdrawHistory=()=>{
    return  AxiosRequst({
        url:baseUrlCoin+'/GetWithdrawHistory',
    })
}

export  const GetCoinHistory=(params)=>{
    return  AxiosRequst({
        url:baseUrlCoin+'/GetCoinHistory',
        params:params
    })
}

export  const GetUserCoin=()=>{
    return  AxiosRequst({
        url:baseUrlCoin+'/GetUserCoin',
    })
}