<template>
    <div class="card">
        <div class="top">
            <span class="season">2019.07.26-08.02赛季</span>
            <span class="update">数据更新：07.31 14:15</span>
        </div>
        <div class="center">
            <h4>本赛季奖池</h4>
            <div class="pool">
                <span v-for="i in '1000'">{{i}}</span>
            </div>
            <div class="title">赛季结束满10星玩家可参与瓜分</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card",
    }
</script>

<style scoped lang="less">
    .card{
        width: 345px;
        height:162px;
        background:linear-gradient(134deg,rgba(10,0,180,1) 0%,rgba(77,67,255,1) 100%);
        border-radius:6px;
        .top{
            width: 100%;
            padding: 10px 12px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(242,246,249,0.1);;
            .season{
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
            .update{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(138,148,255,1);
            }
        }
        .center{
            h4{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(138,148,255,1);
                margin: 16px 0 10px; text-align: center;
            }
            .pool{
                display: flex;
                justify-content: center;
                margin-bottom: 16px;
                span{
                    height: 28px;
                    width: 24px;
                    text-align: center;
                    line-height: 28px;
                    background: rgba(0,0,0,0.18);
                    border-radius: 2px;
                    margin-right: 10px;
                    font-size:22px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(255,187,63,1);
                }
            }
            .title{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,0.7);

                &:before{
                    content: "";
                    display: block;
                    width:55px;
                    height:1px;
                    //background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    opacity:0.5;
                    margin-right:6px ;
                }
                &:after{
                    content: "";
                    display: block;
                    width:55px;
                    height:1px;
                    background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    opacity:0.5;
                    margin-left:6px ;
                }
            }
        }
    }
</style>