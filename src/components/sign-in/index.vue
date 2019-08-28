<template>
    <div class="sign-in">
        <div class="sign-in-top">
            <div class="tip">已连续签到{{days}}天</div>
            <div class="sign-btn" @click="goSign" v-if="!signed">签到</div>
            <div class="sign-btn done" v-else>已签到</div>
        </div>
        <!--<div class=""></div>-->
        <div class="sign-days">
            <div class="sign-item" v-for="(coin,k) in coinSteps" :key="coin" :class="[{'has':(k+1)<=days}]">
                <div class="sign-item-top">
                    <div class="wrapper"></div>
                    <div class="inner">{{coin}}</div>
                </div>
                <p>{{(k+1)<=days?'已签':`${k+1}天`}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {SignIn,GetSignInfo} from "../../api/mission";
    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast);
    export default {
        name: "index",
        data(){
            return {
                signed:false,
                sigining:false,
                coinSteps:[200,300,400,500,600,700,800],
                days:0,
            }
        },
        props:{
            clickEvent:{
                type:Function,
            }

        },
        methods:{
            goSign(){
                if(this.sigining) return;
                this.sigining=true;
                SignIn().then(res=>{
                    console.log('sign-res',res)
                    this.sigining=false;
                    if(res.data.code==0){
                        //签到成功
                        this.signed=true;
                        this.days=this.days+1;
                        Toast.success('签到成功');

                    }
                    }).catch(e=>{
                        console.error(e)
                    })
                }
        },
        beforeMount(){
            GetSignInfo().then(res=>{
                console.log('GetSignInfo',res)
                if(res.data.code==0){
                    let data=res.data.data;
                    this.signed=data.todaySign;
                    this.days=data.doubleHit;
                }
            })
        }
    }
</script>

<style scoped lang="less">
    .sign-in{
        width:351px;
        height:120px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);
    }
    .sign-in-top{
        @sign-in-top-height:22px;
        height: @sign-in-top-height;
        //width: 100%;
        //box-sizing: border-box;
        padding: 9px 0;
        width: 323px; margin: 0 auto;
        display: flex; justify-content: space-between; align-items: center;
        border-bottom: 2px dashed #F2F6F9;
        .tip{
            height:13px;
            font-size:13px;
            font-weight:400;
            color:rgba(255,165,0,1);
        }
        .sign-btn{
            width: 60px; height: @sign-in-top-height;
            border-radius: 11px;
            background: #EA3424;
            text-align: center;
            line-height: @sign-in-top-height;
            color: #ffffff;
            font-size: 13px;
            &.done{
                background: #C6D0DB;
            }
        }

    }
    .sign-days{
        width: 100%;
        box-sizing: border-box;
        padding: 0 9px;
        display: flex;
        justify-content: space-between;
        margin: 14px auto 0;


        .sign-item{
            @sign-item-width:36px;
            width:  @sign-item-width;
            .sign-item-top{
                width:  @sign-item-width;
                height:  @sign-item-width;
                border-radius: 100%;
                overflow: hidden;
                position: relative;
                .wrapper{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background:linear-gradient(180deg,rgba(255,224,81,1) 0%,rgba(255,184,66,1) 100%);
                    left: 0;
                    top:0;
                    opacity: 0.2;
                }
                .inner{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    border-radius: 30px;
                    left:3px;
                    top:3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background:linear-gradient(180deg,rgba(255,224,81,1) 0%,rgba(255,184,66,1) 100%);
                    font-size:12px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                }
            }
            p{
                text-align: center;
                line-height: 16px;
                font-size:12px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(255,165,0,1);
            }
            &.has{
                .sign-item-top{
                    .wrapper{
                        background:rgba(242,246,249,1);
                        opacity: 1;
                    }
                    .inner{
                        background:linear-gradient(180deg,rgba(218,218,218,1) 0%,rgba(171,171,171,1) 100%);
                    }
                }
                p{
                    color:#939EAA ;
                }
            }
        }

    }
</style>