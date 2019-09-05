<template>
    <div class="mine">
        <div class="header">
            <div class="top">
                <div class="top-left">
                    <div class="avatar"><img :src="userInfo.avatar"  width="48" height="48"></div>
                    <div class="info">
                        <h4>{{userInfo.wechatUserName}}</h4>
                        <!--<h5>历史最佳排名 23</h5>-->
                    </div>
                </div>
                <div class="top-right" v-if="is_select_team">
                    <h5>代表高校</h5>
                    <div class="school">{{team_name}}</div>
                </div>
            </div>
            <div class="summary">
                <div class="summary-item">
                    <h4>{{chance}}<span>次</span></h4>
                    <h5>当日机会</h5>
                </div>
                <div class="summary-item">
                    <h4><img src="../../assets/image/star-big.png">{{seasonList[0]['info']['gain']}}</h4>
                    <h5>已获得（本赛季）</h5>
                </div>
                <div class="summary-item">
                    <h4>{{seasonList[0]['info'].totalCount>0?Math.round(seasonList[0]['info'].correctCount/seasonList[0]['info'].totalCount):0}}%</h4>
                    <h5>赛季胜率</h5>
                </div>
            </div>
        </div>
        <div class="bet-history">
            <div class="season-list" v-for="(season,k) in seasonList">
                <div class="season-date" @click="toggleListShow(k)">
                    <div class="red-line"></div>
                    <div class="date">{{season.startTime | convertToday }}-{{season.endTime | convertToday }}赛季</div>
                    <!--<div class="star"><img src="../../assets/image/icon-star-s.png">+12</div>
                    <div class="coin"><img src="../../assets/image/icon-coin-s.png">+40</div>-->
                    <div class="icon" :class="[{'on':season.show}]"></div>
                </div>
                <div v-if="season.show">
                    <div class="result">
                        <span class="d1">预言次数：{{season.info.totalCount}}次</span>
                        <span class="d2">胜率：{{season.info.totalCount>0?Math.round(season.info.correctCount/season.info.totalCount):0}}%</span>
                        <span class="d3">瓜分成功：+{{season.info.gain}}金币</span>
                    </div>
                    <div class="bet-list"  v-if="season.info.records">
                        <div class="bet-list-item" v-for="historyItem in season.info.records">
                            <div class="s1">
                                <h2>{{historyItem.symbol}}</h2>
                                <p>{{historyItem.createTime}}</p>
                            </div>
                            <div class="s2">{{historyItem.chip}}金币预测看{{historyItem.side=='Long'?'涨':'跌'}}</div>
                            <div class="s3" v-if="historyItem.isCorrect.toLowerCase()=='correct'">
                                <img src="../../assets/image/icon-coin-s.png">
                                +{{historyItem.chip+historyItem.coinsPnl}}
                            </div>
                            <div class="s3" v-else></div>
                            <div class="s4" :class="[{'success':historyItem.isCorrect.toLowerCase()=='correct'}]">{{historyItem.isCorrect.toLowerCase()=='canceled'?'取消':historyItem.isCorrect.toLowerCase()=='correct'?'成功':'失败'}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    import {getParticipantInfo} from "../../api/school";
    import {getSeasonHistory} from "../../api/challenge";
    import {getSeasonDetail} from '../../api/stock'
    import  {SET_NAV} from '../../store/bet'
    export default {
        name: "mine",
        computed:{
            ...mapGetters('user',{
                userInfo:'getUserInfo',
            }),
            ...mapGetters('bet',{
                chance:'getChance',
            }),
        },
        data(){
            return {
                is_select_team:false,
                team_name:'',
                topData:{
                    stars:0,
                    rate:0
                },
                seasonList:[],
            }
        },
        filters:{
            convertToday(time){
                return time.replace(/\s.*?$/g,'').replace(/-/g,'.');
            }
        },
        methods:{
            ...mapMutations('bet',{
                setNav:SET_NAV
            }),
            closePopBox(){

            },
            toggleListShow(i){
                let aim=!this.seasonList[i].show;
                if(aim){
                    if( !this.seasonList[i]['info']){
                        this.getSeasonDetail(i);
                    }
                }
                this.seasonList[i].show=aim;

            },
            getParticipantInfo(){
                getParticipantInfo().then(res=>{
                    let data=res.data;
                    if(data.is_select_team) {
                        this.is_select_team=true;
                        this.team_name=data.team_name;
                    }

                })
            },
            getSeasonHistory(){
                getSeasonHistory(false).then(res=>{
                    console.log('getSeasonHistory',res)
                    let data=res.data.data;
                    let list=[];
                    list=data.list.map((item,k)=>{
                            item.show=false;
                          item.info=null;
                      return item;
                    })
                    this.seasonList=list;
                    if(data.list.length>0){//当
                        this.getSeasonDetail(0);
                    }


                })
            },
            getSeasonDetail(index){
                getSeasonDetail(this.seasonList[index]['id']).then(res=>{
                    let data=res.data.data;
                    this.$set(this.seasonList[index],'info',data);
                   // this.seasonDetailObj[index]=Object.assign(this.seasonDetailObj[index],data);

                })
            }
        },

        beforeMount(){
            this.setNav('mine');
            this.getParticipantInfo();
            this.getSeasonHistory();
        }
    }
</script>

<style scoped lang="less">
    .mine{
        min-height: 100vh;
        padding-bottom: 50px;
        box-sizing: border-box;
        .header{
            width: 100%;
            margin-bottom: 25px;
            .top{
               height: 120px;
                box-sizing: border-box;
                padding:24px 15px;
                background:linear-gradient(134deg,rgba(10,0,180,1) 0%,rgba(77,67,255,1) 100%);
                display: flex;
                justify-content: space-between;
                .top-left{
                    display: flex;
                    justify-content: flex-start;
                    align-items:center ;
                    height: 48px;
                    .avatar{
                       width: 48px;
                        height: 48px;
                        margin-right: 10px;
                        background: #ffffff;
                        border-radius: 100%;
                        overflow: hidden;
                    }
                    .info{
                            height: 48px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            h4{
                                font-size:16px;
                                font-family:PingFangSC;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                                line-height:16px;
                                margin-bottom: 9px;
                            }
                            h5{
                                font-size:12px;
                                font-family:PingFangSC;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                            }
                    }
                }
                .top-right{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 48px;
                    align-items: flex-end;
                    h5{
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        margin-bottom: 9px;
                    }
                    .school{
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(255,165,0,1);
                    }
                }

            }
            .summary{
                width: 345px;
                height: 72px;
                margin: -36px auto 25px;
                background: #ffffff;
                border-radius: 7px;
                box-shadow:0px 2px 12px 0px rgba(6,0,95,0.17);
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 16px 36px;
                .summary-item{
                    h4{
                        text-align: center;
                        margin-bottom: 6px;
                        font-size:22px;
                        font-family:DIN;
                        font-weight:500;
                        color:rgba(58,62,66,1);
                        line-height:22px;
                        span{
                            font-size: 12px;
                            vertical-align: middle;
                        }
                        img{
                            width: 20px; height: 19px;margin-right: 4px;
                        }
                    }
                    h5{
                        font-size:12px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(147,158,170,1);
                        line-height:12px;
                    }
                }
            }

        }
        .bet-history{
            .season-list{
                @s1:116px;
               // @s2:100px;
                @s2:126px;
                @s3:80px;
                .season-date{
                    height: 38px;
                    background:#F2F6F9 ;
                    display: flex;
                    align-items: center;
                    .red-line{
                        width: 3px;
                        height: 14px;
                        background: #EA3424;
                        margin-right: 10px;
                    }
                    .date{
                        width: 222px;
                        font-size:14px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(58,62,66,1);
                    }
                    .star{
                        width: 56px;
                        img{
                            width: 16px;
                            margin-right: 4px;
                            vertical-align: bottom;
                        }
                        font-size:13px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(255,165,0,1);
                        line-height:13px;
                    }
                    .coin{
                        width: 56px;
                        font-size:13px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(255,165,0,1);
                        line-height:13px;
                        img{
                            margin-right: 4px;
                            width: 15px;
                            vertical-align: bottom;
                        }
                    }
                    .icon{
                        width: 10px;
                        height: 5px;
                        background: url('../../assets/image/bet/icon-up.png');
                        background-size: cover;
                        text-align: right;
                        transform: rotateZ(180deg);
                        &.on{
                            transform: rotateZ(0deg);
                        }
                    }

                }
                .result{
                   display: flex;
                    width: 349px;
                    margin: 0 auto;
                    padding: 12px 0;
                    box-sizing: border-box;
                    border-bottom: 1px solid #EDEDED;
                    border-top: 1px solid #EDEDED;
                    font-size:12px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(94,101,108,1);
                    line-height:12px;
                    .d1{
                        width: @s1;
                    }
                    .d2{
                       width: 100px;
                    }
                    .d3{
                        flex: 1 1 auto;
                    }
                }
                .bet-list{
                    .bet-list-item{
                        width: 100%;
                        padding: 15px 12px ;
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid #F2F6F9;
                        .s1{
                            width: @s1;
                            font-size:11px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(147,158,170,1);
                            line-height:11px;
                            h2{
                                font-size:15px;
                                font-family:PingFangSC;
                                font-weight:500;
                                color:rgba(58,62,66,1);
                                line-height:15px;
                                margin-bottom: 8px;
                            }
                        }
                        .s2{
                            width: @s2;
                            font-size:13px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(94,101,108,1);
                            line-height:13px;
                        }
                        .s3{
                            width: @s3;
                            font-size:13px;
                            font-family:PingFangSC;
                            font-weight:500;
                            color:rgba(255,165,0,1);
                            img{
                                width: 15px;
                                margin-right: 2px;
                                vertical-align: sub;
                            }
                        }
                        .s4{
                            flex: 1 1 auto;
                            text-align: right;
                            font-size:13px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(94,101,108,1);
                            line-height:13px;
                            &.success{
                                color:rgba(255,165,0,1);
                            }

                        }
                    }
                }
            }
        }
    }
</style>