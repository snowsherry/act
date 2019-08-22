<template>
    <div class="item" :class="`${type} ${direction} ${own}`" v-if="type=='personal'">
        <div class="s1">
            <img src="../../assets/image/rank/medal-gold.png" v-if="itemInfo.rank===1">
            <img src="../../assets/image/rank/medal-silver.png" v-else-if="itemInfo.rank===2">
            <img src="../../assets/image/rank/medal-bronze.png" v-else-if="itemInfo.rank===3">
            <span v-else>{{itemInfo.rank}}</span>
        </div>
        <div class="s2">
            <img src="../../assets/image/logo.png">
            {{itemInfo.name}}
        </div>
        <div class="s3">
            <img src="../../assets/image/rank/star.png">
            {{itemInfo.starNum}}
        </div>
        <div class="s4">
            {{itemInfo.rate}}%
        </div>
    </div>
</template>

<script>
    export default {
        name: "item",
        props:{
            type:{
                type:String,//大方向 personal school
            },
            direction:{
                type:String, //高校排行榜： 个人摘星 个人胜率  战队摘星 战队胜率
                default:""
            },
            own:{ //所属者 个人还是单列
                type:String,//mine other
                default:""

            },
            itemInfo:{
                type:Object
            }
        }
    }
</script>

<style scoped lang="less">
  .item{
      width: 345px;
      height: 56px;
      box-sizing: border-box;
      padding:0 22px 0 6px ;
      background:rgba(255,255,255,1);
      border-radius:4px;
      &.personal{
            display: flex;
            align-items: center;
            margin-bottom: 5px;
          .s1{
              width:36px;
              margin-right: 10px;
              text-align: center;
              font-size:16px;
              font-family:DIN;
              font-weight:500;
              color:rgba(147,158,170,1);
              img{
                width: 18px;
                height: 23px;
              }
          }
          .s2{
             width:130px;
              img{
                  width: 32px;
                  height: 32px;
                  border-radius: 100%;
                  margin-right: 6px;
                  overflow: hidden;
                  vertical-align: middle;
              }
              font-size:13px;
              font-family:PingFangSC;
              font-weight:400;
              color:rgba(36,42,50,1);
          }
          .s3{
              font-size:18px;
              font-family:DIN;
              font-weight:500;
              color:rgba(94,101,108,1);
              width: 80px;
              img{
                  width: 16px;
                  height: 15px;
                 // margin-right: 3px;
                  overflow: hidden;
              }
          }
          .s4{
              flex: 1 1 auto;
              text-align: right;
              font-size:18px;
              font-family:DIN;
              font-weight:500;
              color:rgba(234,52,36,1);
              line-height:18px;
          }
          &.mine{
              margin-bottom:16px;
              .s1{
                  color: #3A3E42;
              }
          }

      }
  }
</style>