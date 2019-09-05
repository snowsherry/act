<template>
    <div class="card">
        <div class="card1" v-if="type=='personal'&&personalData">
            <div class="top">
                <span class="season">{{personalData.startTime | convertToday}}-{{personalData.endTime | convertToday}}赛季</span>
                <!-- <span class="update">数据更新：07.31 14:15</span>-->
            </div>
            <div class="center">
                <h4>本赛季奖池</h4>
                <div class="pool">
                    <span v-for="i in personalData.award.toString()">{{i}}</span>
                </div>
                <div class="title">赛季结束满10星玩家可参与瓜分</div>
            </div>
        </div>
        <div class="card2" v-if="type=='school'&&schoolData">
            <div class="prize-img"></div>
            <div class="top">
                <span class="season">{{schoolData.startTime | convertToday}}-{{schoolData.endTime | convertToday}}赛季</span>
                <!-- <span class="update">数据更新：07.31 14:15</span>-->
            </div>
        </div>


       <!-- <div class="prize" v-else>
            <div class="prize-item">
                <div class="s1">
                    <img src="../../assets/image/rank/medal-gold.png">
                </div>
                <span>奖励详情从后台抓取奖励详情从后台抓取</span>
            </div>
            <div class="prize-item">
                <div class="s1">
                    <img src="../../assets/image/rank/medal-silver.png">
                </div>
                <span>奖励详情从后台抓取奖励详情从后台抓取</span>
            </div>
            <div class="prize-item">
                <div class="s1">
                    <img src="../../assets/image/rank/medal-bronze.png">
                </div>
                <span>奖励详情从后台抓取奖励详情从后台抓取</span>
            </div>
            <div class="prize-item">
                <div class="s1">
                    4-10名
                </div>
                <span>奖励详情从后台抓取奖励详情从后台抓取</span>
            </div>
        </div>-->
    </div>
</template>

<script>
    import {getSeasonDetail,getAwardDetail} from '../../api/challenge'
    export default {
        name: "card",
        props:{
            type:{
                type:String
            }
        },
        data(){
            return{
                personalData:null,
                schoolData:null,
            }

        },
        filters:{
            convertToday(time){
                    return time.replace(/\s.*?$/g,'').replace(/-/g,'.');
            }
        },
        beforeMount(){
            getSeasonDetail({
                isSign: false
            }).then(res=>{
                console.log("regular",res);
                this.personalData=res.data.data;
            })
            getAwardDetail().then(res=>{
                this.schoolData=res.data.data;
            })
        }
    }
</script>

<style scoped lang="less">
    .card{
        width: 345px;
        //height:162px;
        border-radius:6px;
        overflow: hidden;
            
        .card1{
            background:linear-gradient(134deg,rgba(10,0,180,1) 0%,rgba(77,67,255,1) 100%);
            
        }
        .top{
            width: 100%;
            padding: 10px 12px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(242,246,249,0.1);;
            .season{
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
            .update{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(138,148,255,1);
            }
        }
        .prize{
            padding-top: 15px;
            padding-bottom: 6px;
            .prize-item{
                width: 100%;
                box-sizing: border-box;
                padding:0 0 0 14px ;
                height: 18px;
                margin-bottom: 12px;
                display: flex;
                font-size:13px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height: 24px;
                .s1{
                    width: 50px;
                    img{
                        width: 18px;
                    }
                }

            }
        }
        .center{
            padding-bottom:30px;
            h4{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(138,148,255,1);
                margin: 16px 0 10px; text-align: center;
            }
            .pool{
                display: flex;
                justify-content: center;
                margin-bottom: 16px;
                span{
                    height: 28px;
                    width: 24px;
                    text-align: center;
                    line-height: 28px;
                    background: rgba(0,0,0,0.18);
                    border-radius: 2px;
                    margin-right: 10px;
                    font-size:22px;
                    font-family:DIN;
                    font-weight:500;
                    color:rgba(255,187,63,1);
                }
            }
            .title{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,0.7);

                &:before{
                    content: "";
                    display: block;
                    width:55px;
                    height:1px;
                    //background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    opacity:0.5;
                    margin-right:6px ;
                }
                &:after{
                    content: "";
                    display: block;
                    width:55px;
                    height:1px;
                    background:linear-gradient(90deg,rgba(238,238,238,1) 0%,rgba(255,255,255,0) 100%);
                    opacity:0.5;
                    margin-left:6px ;
                }
            }
        }
        .card2{
            position: relative;
            width: 100%;
            .prize-img{
                background:linear-gradient(134deg,rgba(10,0,180,1) 0%,rgba(77,67,255,1) 100%);
                width: 345px;
                height:190px;
            }
            .top{
                position: absolute;
                left: 0;
                top:0;
                width: 100%;
                padding: 10px 12px;

            }
        }
    }
</style>