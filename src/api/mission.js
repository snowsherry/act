let baseUrl=process.env.NODE_ENV='production'?'http://10.0.5.35:8080/api/Mission/':'/Mission';
import  axios from 'axios'
let auth='';
export  const SignIn=()=>{
  return  axios.request({
      method:"GET",
      url:baseUrl+'/SignIn',
      headers: {
          Authorization: "Bearer " + auth
      },
      params:{

      },
      data:{

      }
  })
}

export  const GetSignInfo=()=>{
    return  axios.request({
        method:"POST",
        headers:{

        },
        params:{

        },
        data:{

        }
    })
}
export  const ShareWechat=()=>{
    return  axios.request({
        method:"POST",
        headers:{

        },
        params:{

        },
        data:{

        }
    })
}

export  const GenerateInviteCode=()=>{
    return  axios.request({
        method:"POST",
        headers:{

        },
        params:{

        },
        data:{

        }
    })
}