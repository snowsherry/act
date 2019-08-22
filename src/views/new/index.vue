<template>
    <div class="new">
        <div class="logo"></div>
        <div class="box will-open" v-if="!opened">
            <h2>恭喜您 <br />获得一个新人专享红包</h2>
            <p class="tip">立刻打开即可获得</p>
            <div class="open-btn" @click="goOpen"></div>
        </div>
        <div class="box opened" v-else>
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
</template>

<script>
    import {goWxAuthor,getAccessToken} from '../../api/wx'
    export default {
        name: "index",
        data(){
            return {
                opened:false,
                code:"",
            }
        },
        beforeMount(){
            let query=this.$route.query;
            if(query&&query.code){
                this.code=query.code;
                //获取用户的信息
                getAccessToken(this.code).then(res=>{
                    console.log('res',res);
                }).catch(e=>{
                    console.error(e);
                });
            }
        },
        methods:{
            goOpen(){
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
</style>