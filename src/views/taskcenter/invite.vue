<template>
    <div class="invite">
        <div class="box summary">
            <div class="total-get">
                <p class="s-title">累计获得</p>
                <div class="money-amount m-invite">
                    <span>{{totalCoin}}</span>
                    <span class="rmb">约{{totalCoin  | ExchangeToMoney(rate)}}元</span>
                </div>
            </div>
            <div class="will-get">
                <div class="will-get-left">
                    <p class="s-title">即将获得金币</p>
                    <div class="money-amount m-invite">
                        <span>{{couldGetCoin}}</span>
                        <span class="rmb">约{{couldGetCoin |  ExchangeToMoney(rate)}}元</span>
                    </div>
                </div>
                <div class="total">
                    <div class="line"></div>
                    <div class="person">
                        <p class="s-title">总邀请人数</p>
                        <p class="renshu"><span>{{invitePerson}}</span>人</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="seperate-line"></div>
        <div class="box invite-list">
            <div class="user-item" v-for="item  in invitePersonList">
                <div class="user-item-left">
                    <div class="avatar"><img :src="item.userAvtar" width="40" height="40"></div>
                    <div class="user-info">
                        <p class="nickname">{{item.userName}}</p>
                        <p class="info">{{item.userName}}参与猜涨跌后你可再获得<span>3</span>元</p>
                    </div>
                </div>
                <div class="user-item-right">
                    <span class="amount">+3</span>
                    <span>/9元</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {GetInviteList} from '../../api/mission'
    import {mapGetters,mapState} from 'vuex'
    export default {
        name: "draw",
        data(){
            return {
                couldGetCoin:0,
                invitePerson:0,
                invitePersonList:[],
                totalCoin:0,
            }
        },
        beforeMount(){
            this.GetInviteList();
        },
        computed:{
            ...mapState('user',{
                rate:"rate"
            }),
        },
        methods:{
            GetInviteList(){
                GetInviteList().then(res=>{
                    if(res.data.code==0){
                        let data=res.data.data;
                        this.couldGetCoin=data.couldGetCoin;
                        this.invitePerson=data.invitePerson;
                        this.invitePersonList=data.invitePersonList;
                        this.totalCoin=data.totalCoin;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../style/common";
.invite{
    min-height: 100vh;
    padding-bottom:60px ;
    box-sizing: border-box;
    .box{
        width: 100%;
        box-sizing: border-box;
        padding:0 15px ;
    }
    .s-title{
        font-size:13px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(119,119,119,1);
        margin-bottom: 9px;
    }
    .summary{
        width: 100%;
    }
    .total-get{
        padding:24px 0 14px ;
        border-bottom: 1px solid #F2F6F9;
    }
    .will-get{
        margin:16px 0 20px ;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .will-get-left{
            width: 190px;
        }
        .total{
            display: flex;
            align-items: center;
            .line{
                height: 32px;
                width: 1px;
                background: #F2F6F9;
                margin-right:16px ;
            }
            .person{
                .renshu{
                    margin-top: 8px;
                    color: #478ACD;
                    font-size: 15px;
                    span{
                        font-size: 24px;
                        vertical-align: baseline;
                    }
                }
            }

        }
    }
    .invite-list{
        .user-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            border-bottom: 1px solid #F2F6F9;
            .user-item-left{
                width: 260px;
                display: flex;
                align-items: center;
                .avatar{
                    width: 40px; height: 40px; border-radius: 40px; overflow: hidden;background:#D8D8D8 ;
                    margin-right:8px; ;
                }
                .user-info{
                    .nickname{
                        width: 120px;

                        text-overflow:ellipsis;
                        overflow:hidden;
                        white-space:nowrap;

                        font-size:15px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(36,42,50,1);
                        margin-bottom:8px ;
                    }
                    .info{
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(94,101,108,1);
                        span{
                            color: #FFA500;
                        }
                    }
                }
            }
            .user-item-right{
                    font-size:14px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(147,158,170,1);
                    line-height:14px;
                    .amount{
                        font-size:28px;
                        font-family:DIN;
                        font-weight:500;
                        color:rgba(255,165,0,1);
                        line-height:28px;
                        margin-right:6px ;
                        vertical-align: baseline;
                    }
            }
        }
    }
}
</style>