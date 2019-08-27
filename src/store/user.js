export const SET_WECHAT_NAME='set_wechat_name';
export const SET_INVITE_CODE='set_invite_code';
export const SET_COIN='set_coin';
export const ADD_COIN='add_coin';
export const GET_USER_INFO='get_user_info';
export const INIT_USER='init_user';
export  default {
    namespaced:true,
    state:{
        rate:10000,//比例
        weChatName:"",
        coin:0,
        inviteCode:"",
    },
    getters:{
        getWeChatName:state=>state.weChatName,
        getCoin:state=>state.coin,
        getInviteCode:state=>state.inviteCode,
    },
    mutations:{
        [SET_INVITE_CODE]:(state,inviteCode)=>{
            state.inviteCode=inviteCode;
        },
        [SET_COIN]:(state,coin)=>{
            state.coin=coin;
        },
        [ADD_COIN]:(state,num)=>{
            state.coin+=num;
        },
        [SET_WECHAT_NAME]:(state,weChatName)=>{
            state.weChatName=weChatName;
        }
    },
    actions:{
        [INIT_USER]:(context,data)=>{
            context.commit(SET_COIN,data.coin)
            context.commit(SET_WECHAT_NAME,data.weChatName)
            //context.commit(SET_COIN,data.coin)
        }
    }

}