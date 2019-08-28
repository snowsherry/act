
export const SET_COIN='set_coin';
export const ADD_COIN='add_coin';
export const GET_USER_INFO='get_user_info';
export const SET_USER_INFO='set_user_info';
export  default {
    namespaced:true,
    state:{
        rate:10000,//比例
        coin:0,
        userInfo:{},//
        /*
        avatar: "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo0Fuk9h9sUlHmc8gEBU9Y374sfzDA1zCArxQOSpdWOnYSRJxg0ktcXs2OFCwd7smfibAxOcyb70tQ/132"
        coin: 109211111
        inviteCode: "FA327C98843BACAE8BE7B67780C5538C"
        userId: "109ec18c-2d04-4dcb-a80f-30d8fd1d6d5e"
        wechatUserName: "薛勇杰"
       */
    },
    getters:{
        getCoin:state=>state.coin,
        getUserInfo:state=>state.userInfo
    },
    mutations:{
        [SET_COIN]:(state,coin)=>{
            state.coin=coin;
        },
        [ADD_COIN]:(state,num)=>{
            state.coin+=num;
        },
        [SET_USER_INFO]:(state,userInfo)=>{
            state.userInfo=userInfo;
        }
    },
    actions:{
        /*[INIT_USER]:(context,data)=>{
            context.commit(SET_COIN,data.coin)
            context.commit(SET_WECHAT_NAME,data.weChatName)
            //context.commit(SET_COIN,data.coin)
        }*/
    }

}