<template>
    <div class="counts">
            <span>{{txts[0]}}</span>
            <div class="nums">
                <span class="num" v-for="i in nums">{{i}}</span>
            </div>
            <span>{{txts[1]}}</span>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            txt:{
                type:String
            },
            count:{
                type:Number
            }

        },
        computed:{
            txts(){
                return    this.txt.split('-');
            },
            nums(){
                if(this.count===undefined||this.count===null) return null;
                return this.count.toString();
            }
        }
    }
</script>

<style scoped lang="less">
    .counts{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:13px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        height: 26px;
        .nums{
            display: flex;
        }
        .num{
            width: 18px; height: 26px; background: #000000; border-radius: 2px;
            text-align: center;
            font-size:22px;
            // font-family:DIN;
            line-height: 26px;
            font-weight:500;
            color:rgba(255,187,63,1);
            margin-left: 5px;
            &:first-child{
                margin-left: 10px;
            }
            &:last-child{
                margin-right:10px ;
            }
        }

    }
</style>