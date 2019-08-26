<template>
    <div class="rank">
        <van-tabs v-model="active" :line-width="40" :line-height="2" :color="'#1374E5'">
            <van-tab title="个人排行榜">
                <div class="rank-part personal">
                    <Card class="card" :type="'personal'"></Card>
                    <rankItem :itemInfo="itemInfo" :type="'personal'" :own="'mine'"></rankItem>
                    <rankItem v-for="item in items" :itemInfo="item" :type="'personal'" :own="'other'"></rankItem>
                </div>
            </van-tab>
            <van-tab title="高校排行榜">
                <div class="rank-part school">
                    <div class="school-nav">
                        <div class="school-nav-item cur">个人摘星榜</div>
                        <div class="school-nav-item">个人胜率榜</div>
                        <div class="school-nav-item">战队摘星榜</div>
                        <div class="school-nav-item">战队胜率榜</div>
                    </div>
                    <Card class="card" :type="'school'"></Card>
                </div>
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
        .school{
            .school-nav{
                width: 345px;
                height: 28px;
                display: flex;
                justify-content: space-between;
                background: #E3E3E3;
                border-radius: 14px;
                margin: 15px auto;
                .school-nav-item{
                    width: 81px;
                    height: 100%;
                    font-size:12px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(94,101,108,1);
                    line-height:28px;
                    text-align: center;
                    border-radius: 14px;
                    &.cur{
                        background: #1374E5;
                        color: #FFFFFF;
                    }
                }

            }
        }
    }
</style>