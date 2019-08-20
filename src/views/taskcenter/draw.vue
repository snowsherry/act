<template>
    <div class="draw">
        <div class="banner">
            <div class="all-coin">
                <p class="s-title">当前金币</p>
                <div class="money-amount m-draw">
                    <span>30000</span>
                    <span class="rmb">约3.00元</span>
                </div>
            </div>
            <div class="history-btn" @click="goDrawHistory">历史记录</div>
        </div>
        <div class="box wechat-name">提现微信账号：微信名</div>
        <div class="box draw-box">
            <h2>提现金额</h2>
            <div class="draw-list">
                <div class="draw-item" v-for=" i in 5">
                    <div class="yuan">5元</div>
                    <div class="coin">消耗：50000金币</div>
                    <div class="tag" v-if="i==1">秒到账</div>
                </div>
            </div>
            <div class="tip">
                邀请<span>1</span>个好友即可获得<span>7000</span>积分，并获得一次<span>5</span>元秒到账 <br />提现机会
            </div>
        </div>
        <div class="rule">提现规则：单人每个月提现最多300元。本活动为财神股票用户提供的专享福利，任何利用活动非法盈利的用户，财神股票有最权拒绝提现。</div>
        <div class="draw-part">
            <Cbutton :size="'large'" :txt="'立即提现'"  ></Cbutton>
        </div>
    </div>
</template>

<script>
    import Cbutton from '../../components/button'
    export default {
        name: "draw",
        components:{
            Cbutton
        },
        methods:{
            goDrawHistory(){
                this.$router.push('/draw-history');
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../style/common";
.draw{
    padding-bottom: 72px;
    .box{
        width: 100%; box-sizing: border-box; padding: 0 15px; background: #ffffff;
    }
    min-height: 100vh;box-sizing: border-box; background:#F2F6F9 ;
    .banner{
        height: 76px; width: 100%; box-sizing: border-box;background:#3A3E42 ;padding: 0 15px;
        display:flex;align-items: center;justify-content: space-between;
        .all-coin{
            .s-title{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(198,208,219,1);
                line-height:12px;
                margin-bottom: 6px;
            }
        }
        .history-btn{
                width: 72px; height: 26px;border-radius: 3px; text-align: center; line-height: 26px;
                border: 1px solid #ffffff;
                color: #FFFFFF;
                font-size: 12px;
        }
    }
    .wechat-name{
        height: 42px; line-height: 42px;
        font-size:13px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(147,158,170,1);
    }
    .draw-box{
        margin-top: 7px;
        padding: 20px 15px;
        .h2{
            font-size:16px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(58,62,66,1);
            line-height:16px;
            //margin-bottom:17px;
        }
        .draw-list{
            display: flex;
            justify-content: space-between;
            padding-top: 2px;
            flex-wrap: wrap;
            .draw-item{
                width:165px;
                height: 50px;
                border: 1px solid #C6D0DB;
                border-radius: 4px;
               // overflow: hidden;
                position: relative;
                margin-top: 15px;
                .yuan{
                    font-size:14px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(58,62,66,1);
                    line-height:14px;
                    text-align: center;
                    margin:9px 0 6px ;
                }
                .coin{
                    font-size:12px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(119,119,119,1);
                    line-height:12px;
                    text-align: center;
                }
                .tag{
                    width:44px;
                    height:15px;
                    background:linear-gradient(140deg,rgba(255,89,68,1) 0%,rgba(255,0,8,1) 100%);
                    border-radius:0px 4px 0px 4px;
                    text-align: center;
                    position: absolute;
                    right: -1px;
                    top:-1px;
                    font-size:10px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:15px;
                }

            }

        }
        .tip{
            width: 100%;
            background:#F8F8F8 ;
            box-sizing: border-box;
            padding: 10px 0 0 13px ;
            margin-top: 15px;
            height: 60px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(119,119,119,1);
            line-height:17px;
            span{
               color: #FFA500;
            }
        }
    }
    .rule{
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
       // height: 140px;
        background:#F2F6F9 ;
        margin-top:20px ;
        font-size:11px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(147,158,170,1);
        line-height:16px;
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
}
</style>