<template>
    <div class="task-item">
        <div class="task-item-left">
           <div class="detail">
               <div class="title">{{title}}</div>
               <div class="times" v-if="times.length>0">{{`${times[0]}/${times[1]}`}}</div>
               <div class="amount coin" v-if="type=='coin'">
                   <img src="../../assets/image/icon-coin-s.png" width="15" height="15">
                   +{{amount}}
               </div>
               <div class="amount bag" v-else>
                   <img src="../../assets/image/icon-red-envelope.png" width="13" height="15">
                   +{{amount}}元
               </div>
           </div>
            <div class="tip">{{tip}}</div>
        </div>
       <campus-button :txt="txt"></campus-button>
    </div>
</template>

<script>
    import campusButton from '../../components/button'
    export default {
        name: "task-item",
        components:{
            campusButton
        },
        props:{
            type:{
                type:String,//bag coin
            },
            amount:{
                type:Number,//个数 或者 钱数
            },
            title:{
                type:String,
            },
            tip:{
                type:String,
            },
            times:{
                type:Array,//是否次数
            },
            hasFinish:{//是否完成
                type:Boolean,
                default:false,
            },
            txt:{
                type:String,//按钮文案
            }

        }
    }
</script>

<style scoped lang="less">
    .task-item{
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #F2F6F9;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .task-item-left{
            .detail{
                height: 15px;
                line-height: 15px;
                display: flex;
                align-items: center;
                .title{
                    font-size:15px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(36,42,50,1);
                }

                .times{
                    margin:0 10px 0 7px;
                    font-size:15px;
                   // font-family:DIN;
                    font-weight:500;
                    color:rgba(231,61,77,1);
                    line-height:15px;
                }
                .amount{
                   position: relative;
                    height: 15px;
                    line-height: 15px;
                    text-align: right;
                    padding: 0 10px 0 20px ;
                    margin-left: 7px;
                    border-radius: 15px;
                    font-size: 12px;
                    font-weight: 500;
                    img{
                        position: absolute;
                        left: 0;
                        top:0;
                    }
                    &.coin{
                        background:rgba(255,232,167,0.25); ;
                        color: #FFA500;
                    }
                    &.bag{
                        background:rgba(255,185,192,0.25) ;
                        color:#E73D4D ;
                    }
                }


            }
            .tip{
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(119,119,119,1);
                line-height:16px;
                margin-top: 8px;
            }
        }
        .task-item-right{
            width: 72px;
            height: 26px;
            background:#E73D4D ;
        }
    }
</style>