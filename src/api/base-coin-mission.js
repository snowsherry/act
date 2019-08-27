import  axios from 'axios'
import token from '../dsbridge/token'
let auth=token.get();
export  const baseUrlMission=process.env.NODE_ENV=='production'?'http://10.0.5.35:8080/api/Mission':'/Mission';
export  const baseUrlCoin=process.env.NODE_ENV=='production'?'http://10.0.5.35:8080/api/Coin':'/Coin';
export  const AxiosRequst=(config)=>{
    let baseConfig={
        method:"GET",
        headers: {
            Authorization: "Bearer " + auth
        },
        params:{

        },
        data:{

        }
    }
    config=Object.assign(baseConfig,config);
    return axios.request(config)
}