<template>
    <div class="bet">
        <div class="bet-main">
            <router-view></router-view>
        </div>
        <div class="navs">
            <div class="nav-item" v-for="(item,k) in navs" :class="[{'on':nav==item.path},`nav${k+1}`]" @click="goPage(k)">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "index",
        data(){
            return {
                navs:[
                    {title:'猜涨跌',path:'main'},
                    {title:'排行榜',path:'rank'},
                    {title:'我的',path:'mine'},
                ]
            }
        },
        methods:{
            goPage(k){
                this.cur=k;
                this.$router.push(`/bet/${this.navs[k]['path']}`);
                return;
            }
        },
        computed:{
            ...mapGetters('bet',{
                nav:'getNav'
            })
        }

    }
</script>

<style scoped lang="less">
    .navs{
            width:375px;
            height:45px;
            box-sizing: border-box;
            padding: 4px 60px;
            background:linear-gradient(315deg,rgba(36,32,137,1) 0%,rgba(16,0,99,1) 100%);
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-between ;
            .nav-item{
                width: 36px;
                padding-top: 24px;
                text-align: center;
                color:#ffffff ;
                opacity: 0.5;
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:12px;
                &.nav1{
                    background: url('../../assets/image/bet/n1_on.png') center top no-repeat;
                    background-size: auto 20px
                }
                &.nav2{
                    background: url('../../assets/image/bet/n2_on.png') center top no-repeat;
                    background-size: auto 20px
                }
                &.nav3{
                    background: url('../../assets/image/bet/n3_on.png') center top no-repeat;
                    background-size: auto 20px
                }
                &.on{
                    opacity: 1;
                }
            }

    }
</style>