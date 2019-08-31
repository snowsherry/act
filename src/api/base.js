import  axios from 'axios'
import token from '../dsbridge/token'
let auth=token.get();
auth='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMDllYzE4Yy0yZDA0LTRkY2ItYTgwZi0zMGQ4ZmQxZDZkNWUiLCJqdGkiOiJCNzY5RkM3NUIwQ0M2REJEMjhBRUVFOTdGOUIzOTU1RCIsInByb2R1Y3QiOiIzIiwibmJmIjoxNTY3MDYxMTc0LCJleHAiOjE2NDYwMzA3NzQsImlzcyI6InRpZ2Vyb2JvLmNvbSIsImF1ZCI6InRpZ2Vyb2JvIn0.HN39_n8dz3rZqbI68a0CHOvp1dQgkYKBvTTKZ34RC3Q'
export  const baseUrlMission=process.env.NODE_ENV=='production'?'http://10.0.5.35:8080/api/Mission':'/Mission';
export  const baseUrlCoin=process.env.NODE_ENV=='production'?'http://10.0.5.35:8080/api/Coin':'/Coin';
export  const baseUrlStock=process.env.NODE_ENV=='production'?'http://10.0.2.98:8083/':'/bets';
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