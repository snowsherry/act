<template>
    <div class="draw-detail">
        <div class="top">
            <img src="../../assets/image/complete_img.png" width="45">
            <h3>提交成功</h3>
        </div>
        <div class="process">
            <van-steps :active="active">
                <van-step>已提现</van-step>
                <van-step>待审核</van-step>
                <van-step>提现到账</van-step>
            </van-steps>
        </div>
        <div class="info">
            <div class="info-box"></div>
        </div>
        <div class="draw-part">
            <Cbutton :size="'large'" :txt="'完成'"  ></Cbutton>
        </div>
    </div>
</template>

<script>
    import Cbutton from '../../components/button'
    import Vue from 'vue';
    import { Step, Steps } from 'vant';
    Vue.use(Step).use(Steps);
    export default {
        name: "draw-detail",
        components:{
            Cbutton
        },
        data(){
            return {
                active: 1
            }
        }
    }
</script>

<style scoped lang="less">
   .draw-detail {
       min-height: 100vh;
       box-sizing: border-box;
       padding-bottom: 72px;
       overflow: hidden;
       .top{
           margin: 36px 0 40px;
           text-align: center;
           h3{
               font-size:17px;
               font-family:PingFangSC;
               font-weight:600;
               color:rgba(36,42,50,1);
               line-height:24px;
           }

       }
       .process{
           width: 270px;
           margin: 0 auto;
       }
    }
    .draw-part{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 72px;
        width: 100%;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>