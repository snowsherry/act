<template>
    <div class="draw-history">
        <div class="draw-list" v-if="list">
                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="getData"
                >
                    <div class="draw-item" v-for="item in list" :key="item.id">
                        <div class="draw-item-left">
                            <h2>微信提现（{{item.wechatName}}）</h2>
                            <P class="date">申请时间：{{item.createTime}}</P>
                            <p class="wechat">提现微信号：{{weChatName}}</p>
                        </div>
                        <div class="draw-item-right">
                            <div class="status" v-if="item.auditingStatus===0">处理中</div>
                            <div class="status done" v-else-if="item.auditingStatus==1">已到账</div>
                            <div class="status failed" v-else-if="item.auditingStatus==-1">失败</div>
                            <div class="amount"><span>{{item.money}}</span>元</div>
                        </div>
                    </div>

            </van-list>

            <!--<div class="draw-item" v-for="i in 4">
                <div class="draw-item-left">
                    <h2>微信提现（{{weChatName}}）</h2>
                    <P class="date">申请时间：2019-08-15 14:34</P>
                    <p class="wechat">提现微信号：哈哈哈哈哈</p>
                </div>
                <div class="draw-item-right">
                    <div class="status">处理中</div>
                    <div class="amount"><span>10</span>元</div>
                </div>
            </div>-->
        </div>
        <div class="empty" v-else>
            <empty-record :txt="'暂无记录'"></empty-record>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import emptyRecord from '../../components/empty-record'
    import {GetWithdrawHistory} from '../../api/coin'
    import Vue from 'vue';
    import { List } from 'vant';

    Vue.use(List);
    export default {
        name: "drawHistory",
        data(){
            return {
                list:[],
                pageIndex:0,
                pageSize:10,
                pages:10,
                loading: false,
            }
        },
        computed:{
          ...mapState('user',{
              weChatName:'weChatName'
          }),
            finished(){
              return this.pageIndex>=this.pages;
            }
        },
        components:{
            emptyRecord
        },
        beforeMount(){
        },
        methods:{
            getData(){
                if(this.pageIndex>=this.pages){
                    return;
                }else{
                    this.getDrawHistory();
                }
            },
            getDrawHistory(){
                GetWithdrawHistory({
                    pageIndex:this.pageIndex,
                    pageSize:this.pageSize
                }).then(res=>{
                    let data=res.data.data;
                    this.pages=Math.ceil(data.totalItems/this.pageSize);
                    this.list.push(...data.items)
                    this.loading=false;
                    this.pageIndex++;
                })
            }
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