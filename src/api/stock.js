import  axios from 'axios'
import {baseUrlStock,AxiosRequst} from './base'
export  const getStockTargets=()=>{// 获取待猜股票
    return AxiosRequst({
        method:"get",
        url:baseUrlStock+"/guess/targets"
    })
}

export  const getVoteRate=(market,code)=>{//获取多空比例
    let url=baseUrlStock+`/guess/percentage/${market}/${code}`;
    return AxiosRequst({
        method:"get",
        url:url,
    })
}
export  const getTodayBet=()=>{// 获取待猜股票
    return AxiosRequst({
        method:"get",
        url:baseUrlStock+"/records/current"
    })
}

export const getCalcProfit=(data)=>{
    return AxiosRequst({
        method:"post",
        url:baseUrlStock+"/profit/calc",
        data:data
    })
}
export const goVote=(data)=>{
    return AxiosRequst({
        method:"post",
        url:baseUrlStock+"/guess/vote",
        data:data
    })
}
export const goTodayVoteRecord=()=>{
    return AxiosRequst({
        method:"get",
        url:baseUrlStock+"/records/current",
    })
}
export const getLeftChance=()=>{
    return AxiosRequst({
        method:"get",
        url:baseUrlStock+"/guess/left",
    })
}

export  const getRankTotal=()=>{
    return AxiosRequst({
        method:"get",
        url:baseUrlStock+"/rank/personal/regular",
    })
}
export const getRankChallenge=(type)=>{
    return AxiosRequst({
        method:"get",
        //http://10.0.2.98:8083/rank/personal/challenge/{type} Starts||Rate
        url:baseUrlStock+`/rank/personal/challenge/${type}`,
    })
}

export const getRankTeam=(type)=>{
    return AxiosRequst({
        method:"get",
        //http://10.0.2.98:8083/rank/personal/challenge/{type} Starts||Rate
        url:baseUrlStock+`/rank/team/${type}`,
    })
}
export const getSeasonDetail=(id)=>{
    return AxiosRequst({
        method:"get",
        //http://10.0.2.98:8083/rank/personal/challenge/{type} Starts||Rate
        url:baseUrlStock+`/records/season/${id}`,
    })
}
