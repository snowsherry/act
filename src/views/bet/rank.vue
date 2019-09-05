<template>
    <div class="rank">
        <van-tabs v-model="active" :line-width="40" :line-height="2" :color="'#1374E5'" swipeable animated>
            <van-tab title="个人排行榜">
                <div class="rank-part personal">
                    <Card class="card" :type="'personal'"></Card>
                    <rankItem :itemInfo="rankTotal.current" :type="'personal'" :own="'mine'" v-if="rankTotal&&rankTotal.current"></rankItem>
                    <rankItem v-for="item in rankTotal.list" :itemInfo="item" :type="'personal'" :own="'other'"></rankItem>
                    <!--<rankItem v-for="item in rankTotal.list" :itemInfo="item" :type="'school'" :own="'mine'" :direction="'tr'" ></rankItem>-->
                </div>
            </van-tab>
            <van-tab title="高校排行榜">
                <div class="rank-part school">
                    <div class="school-nav">
                        <div class="school-nav-item" v-for="(item,i) in schoolNavs" :class="[{'cur':i==schoolNavCur}]" @click="selectCur(i)">{{item}}</div>
                    </div>
                    <div class="content" v-show="schoolNavCur==0">
                        <Card class="card" :type="'school'"></Card>
                        <rankItem :itemInfo="personalStar.current" :type="'school'" :own="'mine'"  :direction="'ps'" v-if="personalStar&&personalStar.current"></rankItem>
                        <rankItem v-for="item in personalStar.list" :itemInfo="item" :type="'school'" :own="'other'" :direction="'ps'"></rankItem>
                    </div>
                    <div class="content" v-show="schoolNavCur==1">
                        <Card class="card" :type="'school'"></Card>
                        <rankItem :itemInfo="personalRate.current" :type="'school'" :own="'mine'" :direction="'pr'" v-if="personalRate&&personalRate.current"></rankItem>
                        <rankItem v-for="item in personalRate.list" :itemInfo="item" :type="'school'" :direction="'pr'" :own="'other'"></rankItem>
                    </div>

                    <div class="content" v-show="schoolNavCur==2">
                        <Card class="card" :type="'school'"></Card>
                        <rankItem :itemInfo="teamStar.current" :type="'school'" :own="'mine'" :direction="'ts'" v-if="teamStar&&teamStar.current"></rankItem>
                        <rankItem v-for="item in teamStar.list" :itemInfo="item" :type="'school'" :direction="'ts'" :own="'other'"></rankItem>
                    </div>

                    <div class="content" v-show="schoolNavCur==3">
                        <Card class="card" :type="'school'"></Card>
                        <rankItem :itemInfo="teamRate.current" :type="'school'" :own="'mine'" :direction="'tr'"  v-if="teamRate&&teamRate.current"></rankItem>
                        <rankItem v-for="item in teamRate.list" :itemInfo="item" :type="'school'" :direction="'tr'"  :own="'other'"></rankItem>
                    </div>

                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {getRankTotal,getRankTeam,getRankChallenge} from  '../../api/stock'
    import {getAwardDetail} from '../../api/challenge'
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
                    rankTotal:{
                        current:null,
                        list:[]
                    },
                    personalStar:null,
                    personalRate:null,
                    teamStar:null,
                    teamRate:null,
                    schoolNavCur:0,
                    schoolNavs:[
                        '个人摘星榜',
                        '个人胜率榜',
                        '战队摘星榜',
                        '战队胜率榜'
                    ]
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
            getAwardDetail(){
                getAwardDetail().then(res=>{
                    console.log('res');
                })
            },
            getRankTotal(){
                getRankTotal().then(res=>{
                   if(res.data.code==0){
                       this.rankTotal=res.data.data;
                   }
                })
            },
            selectCur(i){
                this.schoolNavCur=i;
            }
        },
        beforeMount() {
            this.setNav('rank');
            //设置Mock数据
            this.getRankTotal();
            this.getAwardDetail();
            //获取高校排行榜榜单
            getRankChallenge('Stars').then(res=>{
                this.personalStar=res.data.data;
            })
            getRankChallenge('Rate').then(res=>{
                this.personalRate=res.data.data;
            })
            getRankTeam('Stars').then(res=>{
                this.teamStar=res.data.data;
            })

            getRankTeam('Rate').then(res=>{
                this.teamRate=res.data.data;
            })


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