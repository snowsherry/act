<template>
    <div class="challenge">
        <div class="top">
            <div class="slogan"></div>
            <Count :txt="'已有-人参与'" :count="rule.userTotal"></Count>
            <div class="box unsgin" v-if="!hasJoin">
                <div class="roof"></div>
                <div class="img"><img :src="rule['imgUrl']"  v-if="rule" width="308" height="146"/></div>
                <Cbutton size="middle" type="red" txt="立即报名" class="big-btn sign-btn" :clickEvent="signIn"></Cbutton>
            </div>
            <div class="box signed" v-else>
                <div class="tick"></div>
                <h2>您已报名成功</h2>
                <h3>代表高校：{{joinInfo.school.name}}</h3>
                <Cbutton size="middle" type="red" txt="前往赛场" class="big-btn sign-btn" :clickEvent="goDown"></Cbutton>
            </div>
        </div>
        <div class="rules">
            <div class="title"><span>大赛流程</span></div>
            <div class="content" v-html="rule['rules']">

            </div>
        </div>
        <div class="popbg" v-show="popBox.show">
            <div class="popbox-mobile" v-show="popBox.mobile.show">
                <div class="content">
                    <div class="close" @click="closePopBox"></div>
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

                    <Cbutton size="middle" type="red" txt="提交申请" class="big-btn sign-btn" :clickEvent="goUpdateMobile"></Cbutton>
                </div>
            </div>
            <div class="popbox-chance" v-show="popBox.school.show">
                <div class="content">
                    <div class="close" @click="closePopBox"></div>
                    <h3>恭喜您获得一次猜涨跌机会 <br />代表你的学校出战，参与高校排行！</h3>
                    <h4>提交学校信息可再获得一次猜涨跌机会</h4>
                    <Cbutton size="middle" type="red" txt="完善我的学校信息" class="big-btn sign-btn" :clickEvent="goSchool"></Cbutton>
                </div>
            </div>
            <div class="popbox-chanceOver" v-show="popBox.chanceOver.show">
                <red-bag :type="'chance'" :close-event="closePopBoxChance"></red-bag>
            </div>
            <div class="popbox-guesseResult" v-show="popBox.guesseResult.show">
                <red-bag :type="'result'" :close-event="closePopBoxResult">></red-bag>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapGetters,mapMutations} from 'vuex'
    import Cbutton from '../../components/button'
    import Count from '../../components/count'
    import {INIT_JOIN_INFO,SET_JOIN_INFO} from '../../store/school'
    import {getSeasonDetail,weChatLogin} from '../../api/challenge'
    import {getParticipantInfo} from "../../api/school";
    import {InviteByWechat,BindMobile} from '../../api/mission'
    import {SendConfirmationCode,WeChatH5Login} from '../../api/account'
    import redBag from '../../components/red-bag'
    import {getCurrentPage,goDownload} from '../../utils'
    import *  as tokenInWechat  from '../../localStorage/token'
    import {goWxAuthor} from '../../api/wx'
    import *  as token from '../../localStorage/token'
    import Vue from 'vue';
    import { Toast,CountDown} from 'vant';

    Vue.use(Toast).use(CountDown);
    export default {
        name: "index",
        components:{
            Cbutton,
            Count,
            redBag
        },
        data(){
            return{
                hasJoin:false,
                binded:false,
                popBox:{
                    show:false,
                    mobile:{
                        show:false,
                    },
                    school:{
                        show:false,
                    },
                    chanceOver:{
                        show:false,
                    },
                    guesseResult:{
                        show:false,
                    }

                },
                rule:{},
                token:tokenInWechat.get(),
                code:"",
                inviteCode:"",
                phone:'',
                verifyCode:'',
                isUpdate:false,//是否正在提交
                //倒计时
                time:60*1000,
                isCountDown:false,
                tokenInWechat:token.get()
            }
        },
        computed:{
            ...mapGetters('school',{
                joinInfo:'getJoinInfo'
            })
        },
        watch:{
            joinInfo:{
                deep:true,
                handler(val){
                    console.log('changed',val)
                }
            }
        },
        beforeMount(){
           /* this.initJoinInfo();//异步的事件哇
            console.log('dddd',this.joinInfo);*/
            this.getParticipantInfo();
            this.getRule();
            //console.log('getCurrentPage',getCurrentPage())
           /* let query=this.$route.query;
            this.inviteCode=query.inviteCode;
            if(query&&query.code){
                this.code=query.code;
                console.log('555')
                //获取用户的信息
                /!* getAccessToken(this.code).then(res=>{
                     console.log('res',res);
                 }).catch(e=>{
                     console.error(e);
                 });*!/
                InviteByWechat({
                    appId:'wxa0640e322b3416ee',
                    code:this.code,
                    inviteCode:this.inviteCode
                }).then(res=>{
                    console.log('res is',res);
                })
            }*/
            if(this.tokenInWechat){//已经微信授权注册了
                //接口获取 是否绑定手机号 是否加入已经战队

                //this.showPopBoxMobile();
            }else{//走微信授权登陆
                let query=this.$route.query;
               // this.inviteCode=query.inviteCode;
                if(query&&query.code){
                    this.code=query.code;
                    //获取用户的信息
                    /* getAccessToken(this.code).then(res=>{
                         console.log('res',res);
                     }).catch(e=>{
                         console.error(e);
                     });*/
                    weChatLogin({
                        //appId:'wxa0640e322b3416ee',
                        code:this.code,
                       // inviteCode:this.inviteCode
                    }).then(res=>{
                        console.log('reigister result is',res);
                        if(res.data.code==19){//已注册并绑定手机号码了
                            this.binded=true;//无法获取token 没法getToken 无法获取战队信息
                        }else if(res.data.code==0){//判断其他信息 也是注册的信息
                            //this.authored=true;
                            let data=res.data.data;
                            token.set(data.token);
                            if(data.hasMobile){
                                this.binded=true;
                            }

                        }
                    })
                }
            }


        },
        methods:{
            goDown(){
                goDownload();
            },
            ...mapMutations('school',{
                setJoinInfo:SET_JOIN_INFO
            }),
            ...mapActions('school',{
                initJoinInfo:INIT_JOIN_INFO
            }),
            getParticipantInfo(){
                getParticipantInfo().then(res=>{
                    let data=res.data;
                    if(data.is_select_team) {
                        this.hasJoin=true;
                        let joinInfo={
                            joined:true,
                            school:{
                                name:data.team_name,
                                code:"",
                            }
                        }
                        this.setJoinInfo(joinInfo);

                    }
                    if(data.is_bind_mobile) {
                        this.binded=true;
                    }

                })
            },
            signIn(){
                if(!this.code&&!this.token){//走授权登陆
                    let url=location.href;
                    /*  console.log('url',url);
                      return;*/
                    goWxAuthor(url);
                    return;
                }
                //this.signed=true;
                //判断是否绑定手机号码
                if(this.binded){
                    this.showPopBoxSchool();
                }else{
                    this.showPopBoxMobile();
                }

            },
            showPopBoxMobile(){
                this.popBox.show=true;
                this.popBox.mobile.show=true;
            },
            closePopBoxMobile(){
                this.popBox.mobile.show=false;
                this.closePopBox();
            },
            showPopBoxSchool(){
                this.popBox.show=true;
                this.popBox.school.show=true;
            },
            closePopBoxSchool(){
                this.popBox.school.show=false;
                this.closePopBox();
            },
            goSchool(){
                this.$router.push('/challenge/school');
            },
            closePopBox(){
                this.popBox.show=false;
            },
            closePopBoxChance(){
                this.popBox.chanceOver.show=false;
                this.closePopBox();
            },
            closePopBoxResult(){
                this.popBox.guesseResult.show=false;
                this.closePopBox();
            },
            getRule(){
                getSeasonDetail({
                    isSign:true
                }).then(res=>{
                    console.log('getSeasonDetail',res);
                    if(res.data.code==0){
                        this.rule=res.data.data;
                    }
                })
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
                    Toast.clear();
                    this.closePopBoxMobile();
                    this.showPopBoxSchool();
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
    @import "../../style/popbox";
.challenge{
    width: 100%;
    min-height: 100vh;
    padding-bottom: 30px;
    overflow-x: hidden;
    background:linear-gradient(136deg,rgba(28,28,77,1) 0%,rgba(60,13,45,1) 100%);
    .top{
        width: 100%;
        min-height: 407px;
        overflow: hidden;
        background: url('../../assets/image/challenge/banner.png') no-repeat;
        background-size: 100% auto;
        .slogan{
            margin: 32px auto 6px;
            width: 315px;
            height: 49px;
            background: url('../../assets/image/challenge/slogan.png');
            background-size: cover;
        }
        .box{
            width: 331px;
            margin: 160px auto 0;
            background: #FFFFFF;
            border-radius: 8px;
            .big-btn{
                margin:0 auto ;
            }
        }
        .unsgin{
            position: relative;
            padding: 40px 0 20px;
            .roof{
                width: 248px;
                height: 47px;
                background: url('../../assets/image/challenge/roof.png');
                background-size: cover;
                position: absolute;
                left: 42px;
                top:-8px;
            }
            .img{
                width: 308px;
                height: 146px;
                background:#979797 ;
                margin:0 auto 8px;

            }

        }
        .signed{
            padding: 32px 0 30px;
            .tick{
                width: 45px;
                height: 56px;
                margin: 0 auto 6px;
                background: url('../../assets/image/icon-tick-red.png');
                background-size: cover;
            }
            h2{font-size:17px;
                font-family:PingFangSC;
                font-weight:600;
                color:rgba(36,42,50,1);
                line-height:24px;
                text-align: center;
            }
            h3{
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,165,0,1);
                line-height:14px;
                margin: 10px auto 26px;
                text-align: center;
            }
        }

    }
    .rules{
        margin-top: 30px;
        .title{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size:16px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:16px;

            &:before{
                content: "";
                display: block;
                width:55px;
                height:1px;
                //background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                opacity:0.5;
                margin-right:10px ;
            }
            &:after{
                content: "";
                display: block;
                width:55px;
                height:1px;
                background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                opacity:0.5;
                margin-left:10px ;
            }
        }
        .content{
            font-size:13px;
            font-family:PingFangSC;
            font-weight:400;
            width: 330px;
            margin:20px auto ;
            color:rgba(255,255,255,1);
            line-height:18px;
            p{
                margin-bottom: 6px;
            }
        }
    }

}
</style>