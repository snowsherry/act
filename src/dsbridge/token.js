import dsbridge from 'dsbridge'
import cookie from 'js-cookie'
import {getDeviceType} from '../init/deviceType';
const deviceType=getDeviceType();
const get=()=>{
    return deviceType == "app"?dsbridge.call("token"):cookie.get("token");
}
export  default {
    get
}