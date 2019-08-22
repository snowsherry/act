<template>
    <div class="rank">
        <van-tabs v-model="active" :line-width="40" :line-height="2" :color="'#1374E5'">
            <van-tab title="个人排行榜">
                <div class="rank-part personal">
                    <Card class="card"></Card>
                    <rankItem :itemInfo="itemInfo" :type="'personal'" :own="'mine'"></rankItem>
                    <rankItem v-for="item in items" :itemInfo="item" :type="'personal'" :own="'other'"></rankItem>
                </div>
            </van-tab>
            <van-tab title="高校排行榜">
                <div class="rank-part school"></div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    Vue.use(Tab).use(Tabs);

    import {mapGetters,mapActions,mapMutations} from 'vuex'
    import {SET_NAV} from '../../store/bet'
    import Card from '../../components/rank/card'
    import rankItem from '../../components/rank/item'
    export default {
        name: "rank",
            data(){
                return {
                    active:0,
                    itemInfo:{
                        rank:1,
                        name:"易秀英",
                        rate:99,
                        starNum:123,
                    },
                    items:null,
                }
            },
        components:{
            Card,
            rankItem
        },
        methods:{
            ...mapMutations('bet',{
                setNav:SET_NAV
            }),
            setItems(){
                    let aim=[];
                    for(let i=0;i<10;i++){
                        aim[i]=Object.assign(
                           this.itemInfo,{
                               rank:i
                            }
                        )
                    }
                    this.items=aim;
            },
        },
        beforeMount() {
            this.setNav('rank');
            //设置Mock数据
            this.setItems();
        }
    }
</script>

<style  lang="less">
    .van-tabs__wrap{
        width: 100%;
        position: fixed;
        left: 0;
        top:0;
    }
    .rank{
        width: 100%;
        min-height: 100vh;
        padding-top: 44px;
        padding-bottom:45px;
        box-sizing: border-box;
        background: #F5F6F8;
        .rank-part{
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
        }
        .personal{
            .card{
                margin:12px auto ;
            }
        }
    }
</style>