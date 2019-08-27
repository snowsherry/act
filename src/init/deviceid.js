import Fingerprint2 from "fingerprintjs2";
import md5 from "md5";
const DEVICE_ID='device_id';
export default ()=>{
    Fingerprint2.get(function(result, components) {
        localStorage.setItem(DEVICE_ID, md5(JSON.stringify(result)));
    });
}
export const getDeviceId=()=>{
    return localStorage.getItem(DEVICE_ID);
}