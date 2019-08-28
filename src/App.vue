<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import {SET_COIN,SET_USER_INFO} from './store/user'
  import {GetUserCoin} from "./api/coin";

  export  default {
    name:"App",
    methods:{
      ...mapMutations('user',{
        setUserInfo:SET_USER_INFO,
        setCoin:SET_COIN

      })
    },
    beforeCreate(){
      GetUserCoin().then(res=>{
        console.log('GetUserCoin',res);
        if(res.data.code==0){
          let data=res.data.data;
          let coin=data.coin;
          this.setCoin(coin);
          this.setUserInfo(data);
        }
      })
    }
  }
</script>
<style lang="less">
@import "style/reset.css";
</style>
