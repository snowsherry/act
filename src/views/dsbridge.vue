<template>
    <div class="dsbridge">
        <h4>Dsbridge Test</h4>
        <div class="content">
            <van-button type="default" @click="getToken">获取token</van-button>
            <van-button type="primary" @click="callShare">呼起分享</van-button>
            <van-button type="info" @click="setShare">分享开关</van-button>
            <van-button type="warning" @click="setRefresh">刷新开关</van-button>
            <van-button type="danger">关闭弹窗</van-button>
            <van-button type="default" @click="openUrl">新窗口打开</van-button>
            <van-button type="primary" @click="closeSelf">关闭本窗口</van-button>
        </div>
    </div>
</template>

<script>
    import *  as dsEvent from '../dsbridge'
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);
    export default {
        name: "dsbridge",
        data(){
          return {
              shareEnable:true,
              refreshEnable:true,

          }
        },
        beforeMount(){
            this.setShare();
            this.setRefresh();
        },
        methods:{
            closeSelf(){
                dsEvent.closeSelf();
            },
            callShare(){
                dsEvent.shareBase64Image();
            },
            getToken(){
                console.log(typeof dsEvent.getToken, dsEvent.getToken());
                alert('44444',dsEvent.getToken());
            },
            setShare(){
                dsEvent.navigationRightShare(this.shareEnable);
                this.shareEnable=!this.shareEnable;
            },
            setRefresh(){
                dsEvent.navigationRightShare(this.refreshEnable);
                this.refreshEnable=!this.refreshEnable;
            },
            openUrl(){
                let  url=process.env.VUE_APP_BASE_URL;
                dsEvent.closeSelf();
                dsEvent.openUrl(url);
            }
        }
    }
</script>

<style  lang="less">
    h4{
        text-align: center;
        line-height: 60px;
    }
    .content{
        width: 340px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .van-button{
            margin: 10px;
        }

    }
</style>