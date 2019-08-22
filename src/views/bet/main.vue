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
            return {}

        },
        components:{
            Count,
            betItem
        },
        methods:{
            ...mapMutations('bet',{
                setNav:SET_NAV
            })
        },
        beforeMount(){
            this.setNav('main');
        }
    }
</script>

<style scoped lang="less">
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