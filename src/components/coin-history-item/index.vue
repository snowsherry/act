<template>
    <div class="coin-history-item">
        <div class="coin-history-item-left">
            <p class="task-type">签到任务</p>
            <p class="date">2019-08-12 17:13</p>
        </div>
        <div class="coin-history-item-right">
            <img src="../../assets/image/icon-coin-s.png" width="20" height="20">
            <span class="amount">+100</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{

        }
    }
</script>

<style scoped lang="less">
.coin-history-item{
    width: 100%;
    padding:15px 0;
    box-sizing: border-box;
    border-bottom:1px solid #F2F6F9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .coin-history-item-left{
        .task-type{
            font-size:13px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(94,101,108,1);
            line-height:13px;
        }
        .date{
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(147,158,170,1);
            line-height:12px;
            margin-top:6px ;
        }
    }
    .coin-history-item-right{
        font-size:15px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,165,0,1);
        line-height:15px;
        img{
            margin-right: 10px;
            vertical-align: sub;
        }

    }
}
</style>