<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import {SET_COIN,SET_INVITE_CODE,SET_WECHAT_NAME} from './store/user'
  import {GetUserCoin} from "./api/coin";

  export  default {
    name:"App",
    methods:{
      ...mapMutations('user',{
        setInviteCode:SET_INVITE_CODE,
        setWeChatName:SET_WECHAT_NAME,
        setCoin:SET_COIN

      })
    },
    beforeCreate(){
      GetUserCoin().then(res=>{
        console.log('GetUserCoin',res);
        if(res.data.code==0){
          let data=res.data.data;
          let coin=data.coin;
          let wechatUserName=data.wechatUserName;
          let userId=data.userId;
          this.setCoin(coin);
          this.setWeChatName(wechatUserName);
        }
      })
    }
  }
</script>
<style lang="less">
@import "style/reset.css";
</style>
