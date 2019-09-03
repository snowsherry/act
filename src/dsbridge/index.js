import dsbridge from 'dsbridge';
import {getDeviceType} from '../init/deviceType';
import base64Sample from './base64Sample'
// 清除右侧的选项， 恢复默认值
export  const getToken=()=>{
    var res=dsbridge.call("token");
    return res;

}
export const navigationClearRight = () => {
    console.log("navigationClearRight");
    dsbridge.call("navigationClearRight")
}


// 显示分享
export const navigationRightShare = (enable=0) => {
    var pars = {
        enable: enable,
    }
    dsbridge.call("navigationRightShare", pars);
}
// 显示刷新
export const navigationRightRefresh = () => {
    var pars = {
        enable: 1,
    }
    dsbridge.call("navigationRightRefresh", pars);
}


// 配置右侧按钮
export const navigationRightText = (text) => {
    console.log("注册按钮");
    dsbridge.call("navigationRightText", {
        enable: 1,
        title: text,
    });
}

// 注册右侧按钮
export const navigationRightAction = (text, cb) => {
    navigationRightText(text);
    dsbridge.register("navigationRightAction", cb);
}
//呼起分享图片
export  const shareBase64Image=()=>{

    dsbridge.call("shareBase64Image", base64Sample);
}
//新窗口打开页面
export  const openUrl=(url)=>{//字符串
    if(getDeviceType()=='app'){
        let params={}
        if(typeof url=='string'){
            params.url=url;
            params.shareIcon=false;
        }else{
            params=url;
        }
        dsbridge.call("openUrl", params);
    }else{
        window.open(url);
    }

}

export  const closeSelf=()=> {
    return dsbridge.call("closeSelf");
}