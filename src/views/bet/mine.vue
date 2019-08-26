<template>
    <div class="mine">
        <div class="header">
            <div class="top">
                <div class="top-left">
                    <div class="avatar"></div>
                    <div class="info">
                        <h4>自由自在的猪</h4>
                        <h5>历史最佳排名 23</h5>
                    </div>
                </div>
                <div class="top-right">
                    <h5>代表高校</h5>
                    <div class="school">上海财经大学</div>
                </div>
            </div>
            <div class="summary">
                <div class="summary-item">
                    <h4>3<span>次</span></h4>
                    <h5>当日机会</h5>
                </div>
                <div class="summary-item">
                    <h4><img src="../../assets/image/star-big.png">11</h4>
                    <h5>当日机会</h5>
                </div>
                <div class="summary-item">
                    <h4>46%</h4>
                    <h5>赛季胜率</h5>
                </div>
            </div>
        </div>
        <div class="bet-history">
            <div class="season-list" v-for="j in 3">
                <div class="season-date">
                    <div class="red-line"></div>
                    <div class="date">8月2日-8月9日赛季</div>
                    <div class="star"><img src="../../assets/image/icon-star-s.png">+12</div>
                    <div class="coin"><img src="../../assets/image/icon-coin-s.png">+40</div>
                    <div class="icon on"></div>
                </div>
                <div class="result">
                    <span class="d1">预言次数：4次</span>
                    <span class="d2">胜率：50%</span>
                    <span class="d3">瓜分成功：+10万金币</span>
                </div>
                <div class="bet-list">
                    <div class="bet-list-item" v-for="i in 5">
                        <div class="s1">
                            <h2>阿里健康</h2>
                            <p>8月8日 13:38点</p>
                        </div>
                        <div class="s2">100金币预测看跌</div>
                        <div class="s3" v-if="i%2==1">
                            <img src="../../assets/image/icon-coin-s.png">
                            +4000
                        </div>
                        <div class="s3" v-else></div>
                        <div class="s4" :class="[{'success':i%2==1}]">失败</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    import  {SET_NAV} from '../../store/bet'
    export default {
        name: "mine",
        methods:{
            ...mapMutations('bet',{
                setNav:SET_NAV
            }),
            closePopBox(){

            }
        },
        beforeMount(){
            this.setNav('mine');
        }
    }
</script>

<style scoped lang="less">
    .mine{
        min-height: 100vh;
        padding-bottom: 50px;
        box-sizing: border-box;
        .header{
            width: 100%;
            margin-bottom: 25px;
            .top{
               height: 120px;
                box-sizing: border-box;
                padding:24px 15px;
                background:linear-gradient(134deg,rgba(10,0,180,1) 0%,rgba(77,67,255,1) 100%);
                display: flex;
                justify-content: space-between;
                .top-left{
                    display: flex;
                    justify-content: flex-start;
                    align-items:center ;
                    height: 48px;
                    .avatar{
                       width: 48px;
                        height: 48px;
                        margin-right: 10px;
                        background: #ffffff;
                        border-radius: 100%;
                    }
                    .info{
                            height: 48px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            h4{
                                font-size:16px;
                                font-family:PingFangSC;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                                line-height:16px;
                                margin-bottom: 9px;
                            }
                            h5{
                                font-size:12px;
                                font-family:PingFangSC;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                            }
                    }
                }
                .top-right{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 48px;
                    align-items: flex-end;
                    h5{
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        margin-bottom: 9px;
                    }
                    .school{
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(255,165,0,1);
                    }
                }

            }
            .summary{
                width: 345px;
                height: 72px;
                margin: -36px auto 25px;
                background: #ffffff;
                border-radius: 7px;
                box-shadow:0px 2px 12px 0px rgba(6,0,95,0.17);
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 16px 36px;
                .summary-item{
                    h4{
                        text-align: center;
                        margin-bottom: 6px;
                        font-size:22px;
                        font-family:DIN;
                        font-weight:500;
                        color:rgba(58,62,66,1);
                        line-height:22px;
                        span{
                            font-size: 12px;
                            vertical-align: middle;
                        }
                        img{
                            width: 20px; height: 19px;margin-right: 4px;
                        }
                    }
                    h5{
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(147,158,170,1);
                        line-height:12px;
                    }
                }
            }

        }
        .bet-history{
            .season-list{
                @s1:116px;
               // @s2:100px;
                @s2:126px;
                @s3:80px;
                .season-date{
                    height: 38px;
                    background:#F2F6F9 ;
                    display: flex;
                    align-items: center;
                    .red-line{
                        width: 3px;
                        height: 14px;
                        background: #EA3424;
                        margin-right: 10px;
                    }
                    .date{
                        width: 222px;
                        font-size:14px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(58,62,66,1);
                    }
                    .star{
                        width: 56px;
                        img{
                            width: 16px;
                            margin-right: 4px;
                            vertical-align: bottom;
                        }
                        font-size:13px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(255,165,0,1);
                        line-height:13px;
                    }
                    .coin{
                        width: 56px;
                        font-size:13px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(255,165,0,1);
                        line-height:13px;
                        img{
                            margin-right: 4px;
                            width: 15px;
                            vertical-align: bottom;
                        }
                    }
                    .icon{
                        width: 10px;
                        height: 5px;
                        background: url('../../assets/image/bet/icon-up.png');
                        background-size: cover;
                        &.on{
                            transform: rotateZ(180deg);
                        }
                    }

                }
                .result{
                   display: flex;
                    width: 349px;
                    margin: 0 auto;
                    padding: 12px 0;
                    box-sizing: border-box;
                    border-bottom: 1px solid #EDEDED;
                    border-top: 1px solid #EDEDED;
                    font-size:12px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(94,101,108,1);
                    line-height:12px;
                    .d1{
                        width: @s1;
                    }
                    .d2{
                       width: 100px;
                    }
                    .d3{
                        flex: 1 1 auto;
                    }
                }
                .bet-list{
                    .bet-list-item{
                        width: 100%;
                        padding: 15px 12px ;
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid #F2F6F9;
                        .s1{
                            width: @s1;
                            font-size:11px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(147,158,170,1);
                            line-height:11px;
                            h2{
                                font-size:15px;
                                font-family:PingFangSC;
                                font-weight:500;
                                color:rgba(58,62,66,1);
                                line-height:15px;
                                margin-bottom: 8px;
                            }
                        }
                        .s2{
                            width: @s2;
                            font-size:14px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(94,101,108,1);
                            line-height:14px;
                        }
                        .s3{
                            width: @s3;
                            font-size:13px;
                            font-family:PingFangSC;
                            font-weight:500;
                            color:rgba(255,165,0,1);
                            img{
                                width: 15px;
                                margin-right: 2px;
                                vertical-align: sub;
                            }
                        }
                        .s4{
                            flex: 1 1 auto;
                            text-align: right;
                            font-size:14px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(94,101,108,1);
                            line-height:14px;
                            &.success{
                                color:rgba(255,165,0,1);
                            }

                        }
                    }
                }
            }
        }
    }
</style>