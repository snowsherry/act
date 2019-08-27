const DEVICE_TYPE='device_type';
export default ()=>{
    let ua = navigator.userAgent || "";
    console.log('ua is',ua)
    let type = "web";
    if (ua.indexOf("Tigerobo stockapp") > -1) {
        type = "app";
    }
    localStorage.setItem(DEVICE_TYPE, type)
}
export  const getDeviceType=()=>{
    return localStorage.getItem(DEVICE_TYPE);
}