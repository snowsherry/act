<template>
    <div class="button" @click="handleButtonClick" :class="`${type} ${size}`">{{txt}}</div>
</template>

<script>
    export default {
        name: "index",
        props:{
            type:{
                type:String,
                default:""// get(领取) invite finish
            },
            txt:{
                type:String,
                default:"确定"
            },
            size:{
                type:String,
                default: "small"//small normal large
            },
            clickEvent:{//回调的函数
                type:Function
            },
            clickAble:{
                type:Boolean,
                default:true,
            }
        },
        methods:{
            handleButtonClick(){
                if(this.type=='finish') return;
                this.clickEvent&&this.clickEvent();
            }
        }
    }
</script>

<style scoped lang="less">
.small{
    width: 72px;
    height: 28px;
    border-radius: 4px;
    text-align: center;
    line-height: 28px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
    &.invite{
        background:#FFA500 ;
    }
    &.finish{
        background: #C6D0DB;

    }
    &.get{
      background: #E73D4D;
    }
}
    .large{
        height: 44px;width: 345px; background:#E73D4D ; border-radius: 4px;
        text-align: center; line-height: 44px;
        font-size:16px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
    .middle{
        width:287px;
        height:45px;
        border-radius:5px;
        text-align: center;
        line-height: 45px;
        &.red{
            background:linear-gradient(140deg,rgba(255,89,68,1) 0%,rgba(255,0,8,1) 100%);
            box-shadow:0px 3px 7px 0px rgba(255,142,0,0.43);
            font-size:17px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            margin: 0 auto;
        }
    }
</style>