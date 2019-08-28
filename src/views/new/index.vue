<template>
    <div class="new">
        <div class="logo"></div>
        <div class="box will-open" v-if="!authored">
            <h2>恭喜您 <br />获得一个新人专享红包</h2>
            <p class="tip">立刻打开即可获得</p>
            <div class="open-btn" @click="goOpen"></div>
        </div>
        <div class="box opened" v-else>
            <div class="part1" v-if="!binded">
                <div class="sp phone">
                    <input  type="text" placeholder="请输入手机号码" maxlength="11" v-model="phone"/>
                </div>
                <div class="sp verifyCode">
                    <input  type="text" placeholder="请输入验证码" maxlength="6" v-model="verifyCode"/>
                    <div class="get-verify-code">
                        <span @click="getVerifyCode" v-show="!isCountDown">获取验证码</span>
                        <van-count-down v-show="isCountDown"
                                :time="time"
                                format="ss 秒"
                                ref="countDown"
                                :auto-start="false" @finish="finished"

                        />
                    </div>
                </div>
                <div class="get-btn" @click="goUpdateMobile">立即领取</div>
            </div>
            <div class="part2" v-else>
                <h4>恭喜你，成功获取财神红包</h4>
                <div class="amount">
                    <div class="number">20.00</div>
                    <div class="amount-right">
                        <div class="max"></div>
                        <div class="yuan">元</div>
                    </div>
                </div>
                <div class="down-btn">下载APP体验并提现</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {goWxAuthor,getAccessToken} from '../../api/wx'
    import {InviteByWechat,BindMobile} from '../../api/mission'
    import {SendConfirmationCode} from '../../api/account'
    import Vue from 'vue';
    import { Toast,CountDown} from 'vant';

    Vue.use(Toast).use(CountDown);
    export default {
        name: "index",
        data(){
            return {
                authored:true,//授权
                binded:false,//绑定号码
                opened:false,
                code:"",
                inviteCode:"",
                phone:'',
                verifyCode:'',
                isUpdate:false,//是否正在提交
                //倒计时
                time:60*1000,
                isCountDown:false,

            }
        },
        beforeMount(){
            let query=this.$route.query;
            this.inviteCode=query.inviteCode;
            if(query&&query.code){
                this.code=query.code;
                console.log('555')
                //获取用户的信息
               /* getAccessToken(this.code).then(res=>{
                    console.log('res',res);
                }).catch(e=>{
                    console.error(e);
                });*/
                InviteByWechat({
                    appId:'wxa0640e322b3416ee',
                    code:this.code,
                    inviteCode:this.inviteCode
                }).then(res=>{
                    console.log('res is',res);
                })
            }
        },
        methods:{
            goOpen(){
                this.authored=true;
                return;
                if(this.code){//已经登陆有code了
                    //开启红包 带上用户的信息

                }else{//未登陆
                    let state='test';
                    let url=window.location.href;
                    /*  console.log('url',url);
                      return;*/
                    goWxAuthor(url,state);
                }

            },
            getVerifyCode(){
                if(!this.checkPhone()) return;
                SendConfirmationCode({
                    mobile: `+86|${this.phone}`
                }).then(res=>{
                   if(res.data.code===0){
                       Toast.success({
                           duration:1000,
                           message:"验证码已发送"
                       })
                   }else{
                       Toast.fail({
                           duration:1000,
                           message:res.data.message
                       })
                   }


                });
                this.isCountDown=true;
                this.$refs.countDown.start();
            },
            finished(){
                this.$refs.countDown.reset();
                this.isCountDown=false;
            },
            goUpdateMobile(){
                if(!this.checkPhone()||!this.checkVerifyCode()) return;//验证
                if(this.isUpdate) return;
                this.isUpdate=true;
                //接口提交
                /*
                * {
                  "mobile" : "+86|15651803502",
                  "confirmCode" : "0000",
                  "token" : ""
                }*/
                let auth="";
                Toast.loading({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    message: '正在绑定'
                });
                BindMobile({
                    mobile:'+86|'+this.phone,
                    confirmCode:this.verifyCode,
                    token:""
                },auth).then(res=>{
                    this.isUpdate=false;
                    Toast.success({
                        duration:1000,
                        message:"绑定成功"
                    })
                    this.binded=true;
                    Toast.clear()
                });


            },
            checkPhone(){
                let regExp=/^1\d{10}$/;
                if(!this.phone||!regExp.test(this.phone)){
                    Toast.fail({
                        message:"请输入正确的手机号码",
                        duration:1000
                    })
                    return false;
                }
                return true;
            },
            checkVerifyCode(){
                let regExp=/^\d{4,6}$/;
                if(!this.verifyCode||!regExp.test(this.verifyCode)){
                    Toast.fail({
                        message:"请输入验证码",
                        duration:1000
                    })
                    return false;
                }
                return true;
            },


        }
    }
</script>

<style scoped lang="less">
    .new{
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        padding-top: 312px;
        background: url('../../assets/image/new/red-bag-bg.png') no-repeat;
        background-size: 100% auto;
        //background-color:#BD2736;
        position: relative;
        .logo{
            width: 105px;
            height: 24px;
            background: url('../../assets/image/logo.png'); background-size: cover;
            position: absolute;
            left: 18px;
            top:18px;
        }
        .will-open{
            text-align: center;
            h2{
                font-size:24px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(242,230,199,1);
                line-height:33px;
            }
            .tip{
                font-size:18px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:18px;
                margin:18px 0 35px ;
            }
            .open-btn{
                    width: 118px; height: 118px;background: url('../../assets/image/new/open.png');
                    background-size: cover;
                    margin: 0 auto;
            }
        }
        .opened{
            .part1{
                .sp{
                    width: 266px;
                    height: 48px;
                    background: #ffffff;
                    border-radius: 28px;
                    overflow: hidden;
                    margin: 0 auto 8px;
                    input{
                        border: none;
                        height: 100%;
                        box-sizing: border-box;
                        padding:0 0 0 28px;
                        outline: none;
                        &::placeholder{
                            font-size:14px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(147,158,170,1);
                        }

                    }
                    &.phone{
                        inpu{width: 100%;}
                    }
                    &.verifyCode{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        input{width: 120px;}
                        .get-verify-code{
                            margin-right: 20px;
                            font-size:14px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(234,52,36,1);

                            &.getting{

                            }
                        }

                    }
                }
                .get-btn{
                    width: 266px;
                    margin: 20px auto 0;
                    height: 48px;
                    background:linear-gradient(132deg,rgba(242,232,203,1) 0%,rgba(248,207,148,1) 100%);
                    border-radius:28px;
                    font-size:16px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(179,61,64,1);
                    line-height: 48px;
                    text-align: center;

                }
            }
            .part2{
                text-align: center;
                h4{
                    font-size:16px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(242,230,199,1);
                    line-height:22px;
                }
                .amount{
                    margin: 8px auto 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 56px;
                    .number{
                        font-size:56px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(242,230,199,1);
                        line-height:56px;
                    }
                    .amount-right{
                        height: 56px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .max{
                           width: 29px; height: 16px;
                            background: url("../../assets/image/new/icon-max.png");
                            background-size: cover;
                            margin-bottom: 6px;
                        }
                        .yuan{
                            font-size:16px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(242,230,199,1);
                            //line-height:22px;
                        }

                    }
                }
                .down-btn{
                    width: 266px;
                    height: 50px;
                    text-align: center;
                    margin: 0 auto;
                    font-size:16px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(179,61,64,1);
                    line-height:50px;
                    background:linear-gradient(132deg,rgba(242,232,203,1) 0%,rgba(248,207,148,1) 100%);
                    border-radius:28px;
                }
            }
        }

    }
</style>