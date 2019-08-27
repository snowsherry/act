<template>
    <div class="coin-history">
        <div class="coin-list" v-if="list">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="getData"
            >
                <coin-item v-for="item in list" :item="item"></coin-item>
            </van-list>

        </div>
        <div class="empty" v-else>
            <empty-record :txt="'暂无记录'"></empty-record>
        </div>
    </div>
</template>

<script>
    import coinItem from '../../components/coin-history-item'
    import emptyRecord from '../../components/empty-record'
    import {GetCoinHistory} from '../../api/coin'
    import Vue from 'vue';
    import { List } from 'vant';

    Vue.use(List);
    export default {
        name: "coin-history",
        components:{
            emptyRecord,
            coinItem
        },
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
            finished(){
                return this.pageIndex>=this.pages;
            }
        },
        methods:{
            getData(){
                if(this.pageIndex>=this.pages){
                    return;
                }else{
                    this.GetCoinHistory();
                }
            },
            GetCoinHistory(){
                GetCoinHistory({
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
.coin-history{
    min-height: 100vh; padding-bottom:80px ; box-sizing: border-box;
    background:#F2F6F9 ;
    .coin-list{
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        background: #ffffff;
    }
}
.empty{ padding-top: 148px;}
</style>