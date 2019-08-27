<template>
    <div class="challenge">
        <div class="top">
            <div class="slogan"></div>
            <Count :txt="'已有-人参与'" :count="1000"></Count>
            <div class="box unsgin" v-if="!joinInfo.joined">
                <div class="roof"></div>
                <div class="img"><img :src="rule['imgUrl']"  v-if="rule" width="308" height="146"/></div>
                <Cbutton size="middle" type="red" txt="立即报名" class="big-btn sign-btn" :clickEvent="signIn"></Cbutton>
            </div>
            <div class="box signed" v-else>
                <div class="tick"></div>
                <h2>您已报名成功</h2>
                <h3>代表高校：{{joinInfo.school.name}}</h3>
                <Cbutton size="middle" type="red" txt="前往赛场" class="big-btn sign-btn" :clickEvent="goSchool"></Cbutton>
            </div>
        </div>
        <div class="rules">
            <div class="title"><span>大赛流程</span></div>
            <div class="content">
               <P>{{rule['rules']}}</P>
            </div>
        </div>
        <div class="popbg" v-show="popBox.show">
            <div class="popbox-chance">
                <div class="content">
                    <div class="close" @click="closePopBox"></div>
                    <h3>恭喜您获得一次猜涨跌机会 <br />代表你的学校出战，参与高校排行！</h3>
                    <h4>提交学校信息可再获得一次猜涨跌机会</h4>
                    <Cbutton size="middle" type="red" txt="完善我的学校信息" class="big-btn sign-btn" :clickEvent="goSchool"></Cbutton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapGetters,mapMutations} from 'vuex'
    import Cbutton from '../../components/button'
    import Count from '../../components/count'
    import {INIT_JOIN_INFO,SET_JOIN_INFO} from '../../store/school'
    import {getSeasonDetail} from '../../api/challenge'
    export default {
        name: "index",
        components:{
            Cbutton,
            Count
        },
        data(){
            return{
                signed:false,
                popBox:{
                    show:false,
                },
                rule:null,
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
            this.getRule();
        },
        methods:{
            ...mapMutations('school',{
                setJoinInfo:SET_JOIN_INFO
            }),
            ...mapActions('school',{
                initJoinInfo:INIT_JOIN_INFO
            }),
            signIn(){
                this.signed=true;
            },
            goSchool(){
                this.$router.push('/challenge/school');
            },
            closePopBox(){
                this.popBox.show=false;
            },
            getRule(){
                getSeasonDetail({id:1}).then(res=>{
                    console.log('getSeasonDetail',res);
                    if(res.data.code==0){
                        this.rule=res.data.data;
                    }
                })
            }
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