<template>
    <div class="bet-btn" :class="type">
        <p class="txt">{{percentage}}%股民看{{trend}}</p>
        <div class="btn">看{{trend}}</div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            type:{
                type:String,
                default:"raise"//涨跌raise fall
            },
            percentage:{
                type:Number,
            }
        },
        computed:{
           trend(){
               return this.type=='raise'?'涨':'跌'
           }
        },
    }
</script>

<style scoped lang="less">
    .bet-btn{
        width: 140px;
        height: 92px;
        border-radius:6px;
        .txt{
            font-size:15px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:15px;
            margin: 16px 0 9px;
            opacity: 0.8;
            text-align: center;
        }
        &.raise{
            background:linear-gradient(180deg,rgba(251,65,73,1) 0%,rgba(255,141,47,1) 100%);
            box-shadow:0px 6px 12px 0px rgba(252,68,70,0.36);
            .btn{
                width: 100px; height: 36px;
                margin: 0 auto;
                text-align: center;
                background:rgba(255,255,255,0.8);
                box-shadow:0px 2px 8px 0px rgba(251,69,71,0.66),0px 0px 6px 0px rgba(255,255,255,1);
                border-radius:19px;
                font-size:17px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(251,65,72,1);
                line-height: 36px;
            }
        }
        &.fall{
            background:linear-gradient(180deg,rgba(15,209,95,1) 0%,rgba(135,222,94,1) 100%);
            box-shadow:0px 6px 12px 0px rgba(16,209,95,0.36);
            .btn{
                width: 100px; height: 36px;
                margin: 0 auto;
                text-align: center;
                background:rgba(255,255,255,0.8);
                box-shadow:0px 2px 8px 0px rgba(23,210,95,1),0px 0px 6px 0px rgba(255,255,255,1);
                border-radius:19px;
                font-size:17px;
                font-family:PingFangSC;
                font-weight:500;
                color:#1ED469;
                line-height: 36px;
            }
        }
    }
</style>