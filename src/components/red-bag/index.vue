<template>
    <div class="red-bag">
        <div class="content" v-if="type=='chance'">
            <div class="top">
                <h4>今日预言次数<br />已用完</h4>
            </div>
            <div class="center">
                <p>成功邀请好友一起参与</p>
                <div class="invite-btn">预言次数+1</div>
            </div>
            <div class="bottom">
                <div><img src="../../assets/image/post.png" width="40"></div>
                <p>生成海报并分享好友</p>
            </div>
        </div>
        <div class="content" v-else-if="type=='result2'">
            <div class="top">
                <p>8月6日预测结果</p>
                <h4>恭喜您预测成功</h4>
            </div>
            <div class="center">
                <div class="coin-part">
                    <div class="star"><img src="../../assets/image/star-big.png" width="26"><span>+1</span></div>
                    <div class="coin"><img src="../../assets/image/coin-big.png" width="26"><span>+200</span></div>
                </div>
                <p class="tip">每成功邀请一名好友即可增加1次预言机会</p>
            </div>
            <div class="bottom">
                <div><img src="../../assets/image/post.png" width="40"></div>
                <p>生成海报并分享好友</p>
            </div>
        </div>

        <div class="content" v-else-if="type=='result'">
            <div class="top">
                <h4>恭喜您获得一个<br />新人红包！</h4>
            </div>
            <div class="center">
                <p>仅限新用户注册领取</p>
                <div class="invite-btn amount">2.23元</div>
            </div>
            <div class="bottom">
                <div class="go-btn">立即查看</div>
            </div>
        </div>

        <div class="close" @click="handleCloseClick"></div>
    </div>
</template>

<script>
    export default {
        name: "red-bag",
        props:{
            type:{
                type:String,
                default:'',
            },
            closeEvent:{
                type:Function
            }

        },
        methods:{
            handleCloseClick(){
                this.closeEvent&&this.closeEvent();
            }
        }
    }
</script>

<style scoped lang="less">
.red-bag{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content{
        width: 362px;
        height: 403px;
        margin-bottom: 24px;
        background: url('../../assets/image/red-bag-bg.png');
        background-size: cover;
        .top{
            box-sizing: border-box;
            padding: 90px 0 0;
            height: 182px;
            text-align: center;
            //background: rgba(255,255,255,0.2);
            p{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(58,62,66,1);
                line-height:12px;
                margin-bottom: 8px;
            }
            h4{
                font-size:20px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(234,72,77,1);
                line-height:26px;
                letter-spacing:1px;
                text-align: center;
            }
        }
        .center{
            height: 130px;
            box-sizing: border-box;
            text-align: center;
            padding:30px 0  0 ;
            background: rgba(255,255,255,0.2);
            p{
                font-size:14px;
                font-family:STYuanti-SC;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:14px;
                margin-bottom: 12px;
            }
            .invite-btn{
                width:180px;
                height:46px;
                background:rgba(207,49,54,1);
                box-shadow:0px 0px 6px 0px rgba(104,12,21,0.25);
                border-radius:23px;
                text-align: center;
                margin: 0 auto;
                font-size:20px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);
                letter-spacing:1px;
                line-height: 46px;
                &.amount{
                    font-size:30px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(255,199,95,1);
                }
            }
            .coin-part{
                display: flex;
                justify-content: center;
                margin-bottom: 32px;

                .star,.coin{
                    font-size:20px;
                    font-family:PingFangSC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    margin: 0 10px;
                   line-height: 26px;
                    img{margin-right: 8px; vertical-align: sub;}

                }

            }
            .tip{
                text-align: center;
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,198,94,1);

            }
        }
        .bottom{
            img{
                margin-bottom:8px ;
            }
            text-align: center;
            font-size:13px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:13px;
            .go-btn{
                width:162px;
                height:36px;
                background:linear-gradient(132deg,rgba(242,232,203,1) 0%,rgba(248,207,148,1) 100%);
                box-shadow:0px 0px 6px 0px rgba(110,0,0,0.44);
                border-radius:4px;
                margin: 20px auto;
                font-size:15px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(231,61,77,1);
                line-height: 36px;

            }
        }
    }
    .close{
        width: 32px; height: 32px;
        background: url('../../assets/image/icon-close-big.png');
        background-size: cover;
    }
}
</style>