<template>
    <div class="bet-item">
        <div class="stock-info">
            <div class="avatar"></div>
            <div class="code">
                <h3>波司登</h3>
                <h5>03998.HK</h5>
            </div>
            <div class="tag">服饰</div>
        </div>
        <h4>描述标题描述标题描述标题</h4>
        <p class="desc">
            描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情
        </p>
        <div class="price">
            <span>最新价</span>
            <span class="price-item bad">18.24   -68.23%</span>
            <div class="detail">个股详情 <img src="../../assets/image/bet/icon-arrow-to.png" width="6"> </div>
        </div>
        <div class="k-line"></div>
        <div class="select-area" v-if="!betted">
            <bet-btn :percentage="40" :type="'raise'" :click-event="doBet"></bet-btn>
            <bet-btn :percentage="60" :type="'fall'"  :click-event="doBet"></bet-btn>
        </div>
        <div  v-else>
            <rate-bar :rates="[100,0]"></rate-bar>
            <div class="selected">
                您已选择看<span :class="trend">{{trend=='raise'?'涨':'跌'}}</span>
            </div>
        </div>
        <p class="tip">每个交易日13:00预言截止 16:15公布结果 <br />13:05可预言下个交易日</p>
    </div>
</template>

<script>
    import betBtn from '../../components/bet-btn'
    import rateBar from '../../components/rate-bar'
    export default {
        name: "index",
        components:{
            betBtn,
            rateBar,
        },
        data(){
            return {
                    betted:false,
                    trend:""
            }
        },
        methods:{
            doBet(aim){
                console.log('aim',aim)
                this.betted=true;
                this.trend=aim;
            }
        }
    }
</script>

<style scoped lang="less">
    .bet-item{
        width: 100%; height: 468px;
        box-sizing: border-box;
        padding:15px 18px;
        .stock-info{
            display: flex;
            height: 48px;
            .avatar{
                width: 48px;
                height: 48px;
                background: #D8D8D8;
                margin-right:8px;
            }
            .code{
                    h3{
                        font-size:18px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(36,42,50,1);
                        margin:6px 0 8px ;
                    }
                    h5{
                        font-size:13px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(94,101,108,1);
                    }
            }
            .tag{
                margin: 6px 0 0 4px;
                height: 16px;
                line-height: 16px;
                padding: 0 5px;
                background: #F2F6F9;
                font-size:11px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(71,138,205,1);
                text-align: center;
            }
        }
        h4{
            font-size:15px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(58,62,66,1);
            margin:18px 0  6px;
        }
        .price{
            margin: 12px 0;
            position: relative;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(119,119,119,1);
            .price-item{
                margin-left: 10px;
            }
            .good{

            }
            .bad{
                color:rgba(24,171,85,1);
            }
            .detail{
                position: absolute;
                width:60px ;
                height: 12px;
                right: 0;
                top:0;
                color:rgba(234,52,36,1);
                text-align: right;
                img{
                    //margin-left: 4px;
                    vertical-align: middle;
                }
            }

        }
        .desc{
            height: 75px;
            font-size:13px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(94,101,108,1);
            line-height:19px;
        }
        .k-line{
            width: 300px;
            height: 90px;
            margin: 0 auto 20px;
        }
        .select-area{
            margin: 15px auto;
            display: flex;
            justify-content: space-between;
        }
        .selected{
            margin: 0 auto 15px;
            width:165px;
            height:46px;
            background:rgba(251,251,251,1);
            box-shadow:0px 2px 8px 0px rgba(236,236,236,1),0px 0px 6px 0px rgba(255,255,255,1);
            border-radius:23px;
            line-height: 46px;
            text-align: center;
            font-size:20px;
            font-family:PingFangSC;
            font-weight:500;
            color: #3A3E42;
            .raise{
                color: #EA3424;
            }
            .fall{
               color:  #18AB55
            }

        }
        .tip{
            font-size:11px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(94,101,108,1);
            line-height:14px;
            text-align: center;
            height: 28px;
        }

    }
</style>