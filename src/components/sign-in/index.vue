<template>
    <div class="sign-in">
        <div class="sign-in-top">
            <div class="tip">已连续签到1天</div>
            <div class="sign-btn">签到</div>
        </div>
        <div class=""></div>
        <div class="sign-days">
            <div class="sign-item" v-for="i in 7">
                <div class="sign-item-top">
                    <div class="wrapper"></div>
                    <div class="inner">126</div>
                </div>
                <p>2天</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
    .sign-in{
        width:351px;
        height:120px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);
    }
    .sign-in-top{
        @sign-in-top-height:22px;
        height: @sign-in-top-height;
        //width: 100%;
        //box-sizing: border-box;
        padding: 9px 0;
        width: 323px; margin: 0 auto;
        display: flex; justify-content: space-between; align-items: center;
        border-bottom: 2px dashed #F2F6F9;
        .tip{
            height:13px;
            font-size:13px;
            font-weight:400;
            color:rgba(255,165,0,1);
        }
        .sign-btn{
            width: 60px; height: @sign-in-top-height;
            border-radius: 11px;
            background: #EA3424;
            text-align: center;
            line-height: @sign-in-top-height;
            color: #ffffff;
            font-size: 13px;
            .done{
                background: #C6D0DB;
            }
        }

    }
    .sign-days{
        width: 100%;
        box-sizing: border-box;
        padding: 0 9px;
        display: flex;
        justify-content: space-between;
        margin: 14px auto 0;


        .sign-item{
            @sign-item-width:36px;
            width:  @sign-item-width;
            .sign-item-top{
                width:  @sign-item-width;
                height:  @sign-item-width;
                border-radius: 100%;
                overflow: hidden;
                position: relative;
                .wrapper{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background:linear-gradient(180deg,rgba(255,224,81,1) 0%,rgba(255,184,66,1) 100%);
                    left: 0;
                    top:0;
                    opacity: 0.2;
                }
                .inner{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    border-radius: 30px;
                    left:3px;
                    top:3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background:linear-gradient(180deg,rgba(255,224,81,1) 0%,rgba(255,184,66,1) 100%);
                    font-size:12px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                }
            }
            p{
                text-align: center;
                line-height: 16px;
                font-size:12px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(255,165,0,1);
            }
        }

    }
</style>