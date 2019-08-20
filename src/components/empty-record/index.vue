<template>
    <div class="empty-record">
        <img src="../../assets/image/general_news_nothing_icon.png" width="64" height="55">
        <P>{{txt}}</P>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            txt:{
                type:String,
                default:"暂无记录"
            }
        }
    }
</script>

<style scoped lang="less">
    .empty-record{
        text-align: center;
        font-size:15px;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(167,177,189,1);
        img{
            margin-bottom:18px ;
        }

    }
</style>