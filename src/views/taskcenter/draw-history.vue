<template>
    <div class="draw-history">
        <div class="draw-list" v-if="list">
            <div class="draw-item" v-for="i in 4">
                <div class="draw-item-left">
                    <h2>微信提现（用户昵称）</h2>
                    <P class="date">申请时间：2019-08-15 14:34</P>
                    <p class="wechat">提现微信号：哈哈哈哈哈</p>
                </div>
                <div class="draw-item-right">
                    <div class="status">处理中</div>
                    <div class="amount"><span>10</span>元</div>
                </div>
            </div>
        </div>
        <div class="empty" v-else>
            <empty-record :txt="'暂无记录'"></empty-record>
        </div>
    </div>
</template>

<script>
    import emptyRecord from '../../components/empty-record'
    export default {
        name: "drawHistory",
        data(){
            return {
                list:null,
            }
        },
        components:{
            emptyRecord
        }
    }
</script>

<style scoped lang="less">
    .draw-history{
        min-height: 100vh;
        background:#F2F6F9 ;
    }
    .draw-item{
        width: 100%;
        box-sizing: border-box;
        padding: 22px 15px;
        border-bottom: 1px solid #F2F6F9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
        .draw-item-left{
            h2{
                font-size:15px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(36,42,50,1);
                line-height:15px;
                margin-bottom:10px;
            }
            .date{
                font-size:11px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(147,158,170,1);
                line-height:12px;
                margin-bottom:8px ;
            }
            .wechat{
                font-size:11px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(147,158,170,1);
                line-height:12px;
            }

        }
        .draw-item-right{
            text-align: right;
            .status{
                font-size:15px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,165,0,1);
                line-height:15px;
                margin-bottom:14px ;
                &.done{
                color: #478ACD;
                }
                &.failed{
                    color: #939EAA;
                }
            }
            .amount{
                font-size:15px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(58,62,66,1);
                span{
                    font-size:24px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(255,165,0,1);
                    line-height:24px;
                    margin-right:3px ;
                }

            }
        }
    }
    .empty{ padding-top: 148px;}
</style>