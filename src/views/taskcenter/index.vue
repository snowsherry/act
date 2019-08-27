<template>
    <div class="task-center">
        <div class="head box">
            <div class="head-top">
                <p class="mine">我的金币</p>
                <div class="money">
                    <div class="money-amount">
                        {{coin}}
                       <span class="rmb">约{{coin | ExchangeToMoney(rate)}}元</span>
                    </div>
                    <div class="draw-btn" @click="goDraw">提现兑换</div>
                </div>
            </div>
            <sign-in-item class="sign-in"></sign-in-item>
            <div class="head-bottom">
                <div class="tip">当前汇率：{{rate}}金币=1元</div>
            </div>
        </div>
        <div class="daily-task box">
            <div class="box-title">
                <img src="../../assets/image/icon-tick.png" width="16" height="16">
                <span>任务列表</span>
            </div>
            <div class="task-list">
                <task-item v-for="(item,k) in taskInfo" :key="item.title"
                           :title="item.title"
                           :tip="item.tip"
                           :amount="item.amount"
                           :type="item.type"
                           :has-finish="item.hasFinish"
                           :times="item.times"
                           :txt="item.txt"
                           :clickEvent="()=>{handleTaskClick(k)}"
                ></task-item>
            </div>
        </div>
        <div class="coin-record box">
            <div class="box-title">
                <div>金币任务</div>
                <div class="all" @click="goCoinHistory">全部</div>
            </div>
            <div class="coin-list">
                <coin-item :item="coinItem" v-for="i in 5"></coin-item>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations} from 'vuex'
    import signInItem from '../../components/sign-in'
    import taskItem from '../../components/task-item'
    import coinItem from '../../components/coin-history-item'
    import {SignIn,GetMissionOverview} from '../../api/mission'
    import {GetCoinHistory} from '../../api/coin'
    export default {
        name: "index",
        components:{
            signInItem,
            taskItem,
            coinItem
        },
        computed:{
            ...mapState('user',{
                rate:"rate"
            }),
            ...mapGetters('user',{
                coin:"getCoin"
            })
        },
        beforeMount(){
            this.GetMissionOverview();
            this.getCoinHistory();
        },
        data() {
            return{
                MissionOverview:[],
                taskInfo:[
                    {
                        key:'',
                        title:"分享朋友圈",
                        tip:"通过具有分享页卡到朋友圈，增加积分",
                        type:"coin",
                        amount:500,
                        times:[1,3],
                        hasFinish: false,
                        txt:'立即领取'
                    },
                    {
                        title:"每日猜涨跌",
                        tip:"参与猜涨跌游戏，至少猜测一支股票",
                        type:"coin",
                        amount:500,
                        times:[1,3],
                        hasFinish: false,
                        txt:'立即领取'
                    },
                    {
                        title:"邀请1个好友",
                        tip:"邀请好友下载APP并完成注册",
                        type:"bag",
                        amount:9,
                        times:[],
                        hasFinish: false,
                        txt:'立即邀请'
                    }
                ],
                coinItem:{

                },
                coinHistory:[],
            }
        },
        methods:{
            GetMissionOverview(){
                GetMissionOverview().then(res=>{
                    console.log('GetMissionOverview',res);
                    if(res.data.code==0){
                        this.MissionOverview=res.data.data;
                        this.MissionOverview.forEach((item,k)=>{
                            let singleTask=this.taskInfo[k];
                            let extra={
                                times:[item.curMissionTime,item.missionTimeLimted],
                                hasFinish:item.curMissionTime>=item.missionTimeLimted?true:false,
                                txt:item.curMissionTime>=item.missionTimeLimted?'已完成':singleTask.txt
                            }
                            this.taskInfo[k]=Object.assign(singleTask,extra);
                        })
                    }

                })
            },
            goCoinHistory(){
                this.$router.push('/coin-history');
                return;
            },
            goDraw(){
                this.$router.push('/draw');
                return;
            },
            getCoinHistory(){
                GetCoinHistory({
                    pageIndex:1,
                    pageSize:5
                }).then(res=>{
                    console.log('coin history',res)
                    if(res.data.code==0){
                        this.coinHistory=res.data.data.items;
                    }
                })
            },
            handleTaskClick(k){
                console.log('k',k)
            }
        }
    }
</script>

<style scoped lang="less">
    .task-center{
        background:#F2F6F9 ;
    }
    .blank-bg{
        background:#ffffff ;
    }
    .box{
        background:#ffffff;
    }
    .head{
        width: 100%;
        position: relative;
        .head-top{
            width: 100%;
            height: 187px;
            box-sizing: border-box;
            padding: 30px 15px  0;
            background:linear-gradient(134deg,rgba(255,219,99,1) 0%,rgba(254,204,73,1) 100%);
            .mine{
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(145,98,52,1);
                line-height:14px;
                margin-bottom:10px ;
            }
            .money{
                display: flex;
                justify-content: space-between;
                .money-amount{
                    font-size:38px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(145,98,52,1);
                    line-height:38px;
                    .rmb{
                        display: inline-block;
                        width: 64px;
                        height: 20px;
                        background: url('../../assets/image/bg-money.png');
                        background-size: cover;
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(103,51,1,1);
                        text-align: center;
                        line-height: 20px;
                        vertical-align: top;

                    }
                }
                .draw-btn{
                    width: 86px;
                    height: 30px;
                    border-radius: 3px;
                    border: 1px solid #916234 ;
                    font-size:14px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(145,98,52,1);
                    line-height: 30px;
                    text-align: center;
                }

            }
        }
        .sign-in{
            position: absolute;
            left: 12px;
            top:112px;
        }
        .head-bottom{
            .blank-bg();
            height: 87px; width: 100%;
            box-sizing: border-box; padding-bottom: 13px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .tip{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(147,158,170,1);
                line-height:12px;
                text-align: center;
            }
        }
    }
    .box-title{
        width: 100%;
        padding:16px 15px;
        box-sizing: border-box;
        display: flex;
        border-bottom: 1px solid #F2F6F9;

    }
    .daily-task{
        width: 100%;
        margin: 7px 0;
        .box-title{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                margin-right: 7px;
            }
        }
    }

    .coin-record{
        padding-bottom: 40px;
        .box-title{
            display: flex;
            justify-content: space-between;
            .all{
                width: 40px;
                font-size:13px;
                font-family:PingFangSC;
                line-height: 17px;
                font-weight:400;
                color:rgba(147,158,170,1);
                background: url('../../assets/image/icon-gogo.png') center right no-repeat;
                background-size:auto 9px ;
            }
        }
        .coin-list{
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
        }
    }

</style>