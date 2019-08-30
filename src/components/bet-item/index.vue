<template>
    <div class="bet-item">
        <div class="stock-info">
            <div class="avatar"><img :src="item.logoImgUrl" v-if="item.logoImgUrl" width="48" height="48"></div>
            <div class="code">
                <h3>{{item.name}}</h3>
                <h5>{{item.symbol}}</h5>
            </div>
            <div class="tag" v-if="item.labels">{{item.labels}}</div>
        </div>
        <h4>{{item.title}}</h4>
        <p class="desc">
            {{item.content}}
        </p>
        <div class="price">
            <span>最新价</span>
            <span class="price-item" :class="item.quotation.change>=0?'good':'bad'" v-if="item.quotation">{{item.quotation.close}}   {{item.quotation.change>0?`+${item.quotation.changePercent}`:item.quotation.changePercent}}%</span>
            <div class="detail">个股详情 <img src="../../assets/image/bet/icon-arrow-to.png" width="6"> </div>
        </div>
        <div class="k-line">
            <img :src="item.kline" width="300" v-if="item.kline">
        </div>
        <div class="select-area" v-if="item.voteInfo==null">
            <bet-btn :percentage="item.rate[0]" :type="'raise'" :click-event="doBet"></bet-btn>
            <bet-btn :percentage="item.rate[1]" :type="'fall'"  :click-event="doBet"></bet-btn>
        </div>
        <div  v-else>
            <rate-bar :rates='item.rate'></rate-bar>
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
        props:{
            item:{
                type:Object
            }
        },
        data(){
            return {
                    betted:false,
            }
        },
        computed:{
            trend(){
                return this.item.voteInfo==null?'':this.item.voteInfo.side=='Long'?'raise':'fall';
            }
        },
        methods:{
            doBet(aim){
                console.log('aim',aim)
                this.$emit('popBet',aim,this.item.symbol);
                //this.betted=true;
               //this.trend=aim;
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
                img{

                }
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
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
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
                color: #FB4148;
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
            height: 100px;
            margin: 0 auto 10px;
        }
        .select-area{
            margin: 10px auto 15px;
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