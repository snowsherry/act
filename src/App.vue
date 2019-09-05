<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import {SET_COIN,SET_USER_INFO} from './store/user'
  import {GetUserCoin} from "./api/coin";
  import {isWeiXin} from "./utils";
  import {getSignature,appId,nonceStr} from './api/wx-jssdk'
  import wx from 'weixin-js-sdk'

  export  default {
    name:"App",
    methods:{
      ...mapMutations('user',{
        setUserInfo:SET_USER_INFO,
        setCoin:SET_COIN
      }),
      /*Init(){
        if(isWeiXin()){//注入JSSDk配置
          let timestamp=new Date().getTime();
          let data={
            noncestr:nonceStr,
            timestamp:timestamp,
            url:"http://192.168.101.173:8080/campus"
          }
          getSignature(data).then(res=>{
            let signature=res.data;
            wx.config({
              debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: appId, // 必填，公众号的唯一标识
              timestamp:timestamp , // 必填，生成签名的时间戳
              nonceStr: nonceStr, // 必填，生成签名的随机串
              signature: signature,// 必填，签名
              jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','updateAppMessageShareData','updateTimelineShareData'] // 必填，需要使用的JS接口列表
            });

            /!*wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
              wx.updateAppMessageShareData({
                title: '你是真的牛皮', // 分享标题
                desc: '你是真的牛皮-内容', // 分享描述
                link: 'http://192.168.101.173:8080/campus', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://192.168.101.173:8080/logo.png', // 分享图标
                success: function () {
                  // 设置成功
                  alert('分享才刚刚');
                }
              })
            });*!/

          });
          return;

        }else{

        }
      }*/
    },
    created(){
      GetUserCoin().then(res=>{
        console.log('GetUserCoin',res);
        if(res.data.code==0){
          let data=res.data.data;
          let coin=data.coin;
          this.setCoin(coin);
          this.setUserInfo(data);
        }
      })


      //this.Init();

      wx.ready(function(){
       // alert('fffffff','ready');
        /*wx.updateAppMessageShareData({
          title: 'updateAppMessageShareData-你是真的牛皮', // 分享标题
          desc: '你是真的牛皮-内容', // 分享描述
          link: 'http://192.168.101.173:8080/campus', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'http://192.168.101.173:8080/logo.png', // 分享图标
          success: function () {
            // 设置成功
            alert('分享才刚刚');
          }
        });*/
        wx.onMenuShareAppMessage({
          title: 'onMenuShareAppMessage-你是真的牛皮', // 分享标题
          desc: '你是真的牛皮-内容', // 分享描述
          link: 'http://192.168.101.173:8080/campus', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'http://192.168.101.173:8080/logo.png', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户点击了分享后执行的回调函数
            console.log('设置分享朋友成功');
          }
        });

        wx.onMenuShareTimeline({
          title: '你是真的牛皮', // 分享标题
          link: 'http://192.168.101.173:8080/campus', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'http://192.168.101.173:8080/logo.png', // 分享图标
          success: function () {
            // 用户点击了分享后执行的回调函数
            console.log('设置分享朋友圈成功');
          }
        });
      })

    }
  }
</script>
<style lang="less">
@import "style/reset.css";
</style>
