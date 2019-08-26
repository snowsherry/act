<template>
    <div class="main">
        <div class="head">
            <Count :txt="'今日奖池-金币'" :count="10000"></Count>
        </div>
        <div class="stock-box">
            <van-swipe style="height: 468px; border-radius: 8px; overflow: hidden" vertical :show-indicators="false">
                <van-swipe-item v-for="i in 3">
                    <bet-item></bet-item>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="popbg" v-show="popBox.show">
            <div class="popbox-bet">
                <div class="content raise">
                    <div class="close" @click="closePopBox"></div>
                    <div class="ball">看涨</div>
                    <h3>预言8月17日“股票名称”涨跌</h3>
                    <h4>我的金币总数：10000</h4>
                    <div class="line"></div>
                    <h5>选择预言金币</h5>
                    <div class="score-part">
                        <div class="score-part-item" v-for="(score,i) in socres" :class="[{'selected':i===0}]">{{score}}</div>
                    </div>
                    <div class="tip">
                        猜对预计可赢得<span>40</span>金币，加<span>1</span>颗星
                    </div>
                    <div class="bet-btn">我要看涨</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    import  {SET_NAV} from '../../store/bet'
    import Count from '../../components/count'
    import Vue from 'vue';
    import betItem from '../../components/bet-item'
    import { Swipe, SwipeItem } from 'vant';
    Vue.use(Swipe).use(SwipeItem);
    export default {
        name: "main",
        data(){
            return {
                socres:[20,50,80,100],
                popBox:{
                    show:false,
                }
            }

        },
        components:{
            Count,
            betItem
        },
        methods:{
            ...mapMutations('bet',{
                setNav:SET_NAV
            }),
            closePopBox(){

            }
        },
        beforeMount(){
            this.setNav('main');
        }
    }
</script>

<style scoped lang="less">
    @import "../../style/popbox";
    .main{
        min-height: 100vh;
        overflow: hidden;
        background:linear-gradient(90deg,rgba(28,28,77,1) 0%,rgba(60,13,45,1) 100%);;
        .head{
            width: 375px; height: 123px; background: url('../../assets/image/bet/haeder.png');
            box-sizing: border-box;
            padding-top: 25px;
            background-size: cover;
            position: absolute;
            left: 0;
            top:0;
        }
        .stock-box{
            width: 335px;margin:60px auto;
            .van-swipe-item{
                background:#ffffff ;
                overflow: hidden;
            }
        }
    }
</style>