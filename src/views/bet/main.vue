<template>
    <div class="main">
        <div class="head">
            <Count :txt="'今日奖池-金币'" :count="10000"></Count>
        </div>
        <div class="stock-box">
            <van-swipe style="height: 468px; border-radius: 8px; overflow: hidden" vertical :show-indicators="false" @change="onChange">
                <van-swipe-item v-for="stockitem  in stockList">
                    <bet-item :item="stockitem" @popBet="showPopBoxBet"></bet-item>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="popbg" v-show="popBox.show">
            <div class="popbox-bet" v-show="popBox.bet.show">
                <div class="content" :class="popBox.bet.direction">
                    <div class="close" @click="closePopBoxBet"></div>
                    <div class="ball">看{{trend}}</div>
                    <h3>预言8月17日“股票名称”涨跌</h3>
                    <h4>我的金币总数：{{coin}}</h4>
                    <div class="line"></div>
                    <h5>选择预言金币</h5>
                    <div class="score-part">
                        <div class="score-part-item" v-for="(score,i) in popBox.bet.socres" :class="[{'selected':i===popBox.bet.cur}]" @click="setCurBet(i)">{{score}}</div>
                    </div>
                    <div class="tip">
                        猜对预计可赢得<span>{{popBox.bet.profit}}</span>金币，加<span>1</span>颗星
                    </div>
                    <div class="bet-btn" @click="Bet">我要看{{trend}}</div>
                </div>
            </div>
            <div class="popbox-chanceOver" v-show="popBox.chanceOver.show">
                <red-bag :type="'chance'" :close-event="closePopBoxChanceOver"></red-bag>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    import {getStockTargets,getVoteRate,getCalcProfit,goVote,goTodayVoteRecord,getLeftChance} from '../../api/stock'
    import {getQuotation} from '../../api/hangqing'
    import  {SET_NAV,GET_CHANCE,SET_CHANCE,ADD_CHANCE} from '../../store/bet'
    import Count from '../../components/count'
    import Vue from 'vue';
    import redBag from '../../components/red-bag'
    import betItem from '../../components/bet-item'
    import { Swipe, SwipeItem,Toast } from 'vant';
    Vue.use(Swipe).use(SwipeItem).use(Toast);
    export default {
        name: "main",
        data(){
            return {
                current:null,//当前展示的StockCode
                stockList:[],
                votedList:[],//已经投票过的列表
                //votedListObj:null,
                popBox:{
                    show:false,
                    bet:{
                        cur:0,
                        socres:[50,100,200,500],
                        direction:'',//raise fall
                        show:false,
                        profit:0,
                        isBetting:false,
                    },
                    chanceOver:{
                        show:false
                    }
                }
            }

        },
        components:{
            Count,
            betItem,
            redBag
        },
        watch:{
            current(val){//当cur变化时 加载行情图 行情 已经设置此时的涨跌比例
                this.getVoteRate();
                this.getSingleQuotation();
                this.setKline();
            },
            betCur:{
                deep:true,
                handler(){
                    let bet=this.popBox.bet;
                    getCalcProfit({
                        symbol:this.curStock.symbol,
                        side:bet.direction=='raise'?'Long':'Short',
                        chips:bet.socres[bet.cur]
                    }).then(res=>{
                        console.log(111);
                        bet.profit=res.data.data;
                    })
                }
            },
            votedList(val){
                console.log('votedList',this.votedList);
                let votedListObj={};
                this.votedList.forEach(item=>{//
                    votedListObj[item.symbol]=item;//key 对象
                })
                console.log('votedListObj',votedListObj);
                this.stockList.forEach((item,key)=>{
                    if(votedListObj[item.symbol]){
                        this.$set(this.stockList[key],'voteInfo',votedListObj[item.symbol]);
                    }
                })
                console.log('llllll');
            }
        },
        computed:{
            ...mapGetters('user',{
                coin:'getCoin'
            }),
            ...mapGetters('bet',{
                chance:'getChance',
            }),
            curStock(){
                return this.stockList.length>0&&this.current!==null?this.stockList[this.current]:null;
            },
            betCur(){
                let cur=this.popBox.bet.cur;
                let direction=this.popBox.bet.direction;
                let current=this.current;
                return {cur,direction,current};
            },
            trend(){
                return this.popBox.bet.direction=='raise'?'涨':'跌';
            },
        },
        methods:{
            ...mapMutations('bet',{
                setNav:SET_NAV,
                setChance:SET_CHANCE,
                addChance:ADD_CHANCE
            }),

            onChange(index){
                this.current = index;
            },
            closePopBox(){

            },
            closePopBoxBet(){
                this.popBox.show=false;
                this.popBox.bet.show=false;
            },
            showPopBoxBet(aim,code){
                if(this.chance<=0){
                   this.showPopBoxChanceOver();
                    return;
                }

                this.popBox.bet.direction=aim;
                this.popBox.show=true;
                this.popBox.bet.show=true;
            },
            showPopBoxChanceOver(){
                this.popBox.show=true;
                this.popBox.chanceOver.show=true;
            },
            closePopBoxChanceOver(){
                this.popBox.show=false;
                this.popBox.chanceOver.show=false;
            },
            setCurBet(i){
              this.popBox.bet.cur=i;
            },
            Bet(){
                if(this.popBox.bet.isBetting) return;//防重复提交
                let bet=this.popBox.bet;
                //检测金币是否足够
                goVote({
                    symbol:this.curStock.symbol,
                    side:bet.direction=='raise'?'Long':'Short',
                    chips:bet.socres[bet.cur]
                }).then(res=>{
                    if(res.data.code==0){
                        Toast.success({
                            duration:1000,
                            message:"投票成功"
                        });
                        this.closePopBoxBet();
                        this.popBox.bet.isBetting=false;//猜奖机会-1 //金币减去
                        this.addChance(-1);
                        //刷新一下当日投票历史接口
                        this.goTodayVoteRecord();
                    }
                })
            },
            getStocksAndVotedInfo(){
               Promise.all([getStockTargets(),goTodayVoteRecord()]).then(dataArr=>{
                   let stockList=dataArr[0].data.data;//都是数组
                   stockList.forEach((item,key)=>{
                       stockList[key].rate=[50,50];
                   })
                   this.stockList=stockList;
                   this.votedList=dataArr[1].data.data;//
                   this.current=0;
                  // this.setInt();
               })
            },
            getStockTargets(){
                getStockTargets().then(res=>{
                    console.log('getStockTargets',res);
                    if(res.data.code===0){
                        let stockList=res.data.data;
                        stockList.forEach((item,key)=>{
                            stockList[key]=Object.assign(item,
                                {
                                    rate:[50,50],
                                })
                        })
                        this.stockList=stockList;
                        this.current=0;
                        //获取行情
                    }
                })
            },
            getQuotation(codes){
                getQuotation(codes).then(res=>{
                    console.log('getQuotation',res)
                })
            },
            getVoteRate(){
                let [code,market]=this.curStock.symbol.split('|');
                getVoteRate(market,code).then(res=>{
                    if(res.data.code==0){
                        let data=res.data.data;
                        let longRate=Math.round(data.long/(data.long+data.short)*100);
                        let shortRate=100-longRate;
                        this.stockList[this.current].rate=[longRate,shortRate];
                    }
                });
            },
            setKline(){
                this.stockList[this.current].kline=`http://fpi.aigauss.com/HB_PicItr/ITR.ashx?imagetype=KSCZD&id=${this.curStock.symbol}&size=600*200&token=21773c00c3024e656115d60c0aac3ea7`;
            },
            getSingleQuotation(){
                getQuotation(this.curStock.symbol).then(res=>{
                    let quotation=res.data[0];
                    //console.log('quotation',quotation)
                    this.stockList[this.current].quotation=quotation;
                })
            },
            goTodayVoteRecord(){
                goTodayVoteRecord().then(res=>{
                   if(res.data.code==0){
                       this.votedList=res.data.data;

                   }
                })
            },
            getLeftChance(){
                getLeftChance().then(res=>{
                    if(res.data.code==0){
                        this.setChance(res.data.data);
                        //this.chance=res.data.data;
                    }
                })
            },
            setInt(){
                let num=0;
                setInterval(()=>{
                    let rate=[num,100-num];
                    //this.stockList[0][rate]=[num,100-num]
                    this.$set(this.stockList[0],'rate',rate);
                    num++;
                },2000)
            }
        },
        beforeMount(){
            this.setNav('main');
            /*this.getStockTargets();
            this.goTodayVoteRecord();*/
            this.getStocksAndVotedInfo();
            this.getLeftChance();
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