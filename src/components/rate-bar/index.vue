<template>
    <div class="rate-bar">
        <div class="process">
            <div class="r" :style="{'width':rates[0]+'%'}">
                <div class="c" v-if="rates[0]!==0&&rates[0]!=100"></div>
            </div>
            <div class="f" :style="{'width':rates[1]+'%'}"></div>
        </div>
        <div class="rate">
            <div class="raise">{{rates[0]}}%看涨</div>
            <div class="fall">{{rates[1]}}%看跌</div>
        </div>
    </div>
</template>

<script>

    export default {
        /*
        */
        name: "index",
        props:{
           rates:{
               type:Array,
               default:[50,50],
           }
        },
        computed:{
            widths(){

            }
        }
    }
</script>

<style scoped lang="less">
    .rate-bar{
        width: 299px;
        height: 46px;
        .process{
            height: 8px;
            margin-bottom: 9px;
            display: flex;
            justify-content: space-between;
            border-radius:8px ;
            overflow: hidden;
            .r{
                height: 100%;
                background:#FF333A ;
                position: relative;
                .c{
                    position: absolute;
                    right: -2px;
                    top:0;
                    width: 4px;
                    height: 8px;
                    transform: skewX(-30deg);
                    background: #ffffff;
                }
            }
            .f{
                height: 100%;
                background: #18AB55;
            }

        }
        .rate{
            font-size:14px;
            font-family:PingFangSC;
            font-weight:400;
            line-height:15px;
            display: flex;
            justify-content: space-between;
            .raise{
                color:rgba(234,52,36,1);
            }
            .fall{
                color:rgba(24,171,85,1);
            }
        }
    }

</style>