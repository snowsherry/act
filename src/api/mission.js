import  axios from 'axios'
import  {baseUrlMission,AxiosRequst} from './base-coin-mission'
export  const SignIn=()=>{
  return  AxiosRequst({
      url:baseUrlMission+'/SignIn',
  })
}

export  const GetSignInfo=()=>{
    return  AxiosRequst({
        url:baseUrlMission+'/GetSignInfo',
    })
}
export  const ShareWechat=()=>{
    return  AxiosRequst({
        url:baseUrlMission+'/ShareWechat',
    })
}

export  const GenerateInviteCode=()=>{
    return  AxiosRequst({
        url:baseUrlMission+'/GenerateInviteCode',
    })
}
export  const GetMissionOverview=()=>{
    return  AxiosRequst({
        url:baseUrlMission+'/GetMissionOverview',
    })
}

export  const GetInviteList=()=>{
    return  AxiosRequst({
        url:baseUrlMission+'/GetInviteList',
    })
}


export const InviteByWechat=(data)=>{
    return axios.request({
        method:'post',
        url:baseUrlMission+'/InviteByWechat',
        data:data
    })
}
