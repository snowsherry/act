<template>
    <div class="draw-detail">
        <div class="top">
            <img src="../../assets/image/complete_img.png" width="45">
            <h3>提交成功</h3>
        </div>
        <div class="process">
            <div class="step">
                <img src="../../assets/image/icon-tick-draw.png" width="24">
                <p>已提交</p>
            </div>
            <div class="line"></div>
            <div class="step">
                <img src="../../assets/image/icon-tick-draw.png" width="24">
                <p>待审核</p>
            </div>
            <div class="line grey">
                <div class="red"></div>
            </div>
            <div class="step">
                <img src="../../assets/image/icon-money.png" width="24">
                <p class="grey">提现到账</p>
            </div>
        </div>
        <div class="info">
            <div class="info-box">
                <div class="triangle"></div>
                <p>
                    <span class="p1">提现方式</span>
                    <span class="p2">微信（用户昵称）</span>
                </p>
                <p>
                    <span class="p1">提现金额</span>
                    <span class="p2 red">{{money}}元</span>
                </p>
                <p>
                    <span class="p1">申请时间</span>
                    <span class="p2">今日 {{date}}</span>
                </p>
            </div>
        </div>
        <div class="draw-part">
            <Cbutton :size="'large'" :txt="'完成'"  ></Cbutton>
        </div>
    </div>
</template>

<script>

    import Cbutton from '../../components/button'
    import Vue from 'vue';
    export default {
        name: "draw-detail",
        components:{
            Cbutton
        },
        data(){
            return {
                money:this.$route.query.money,
                date:this.$route.query.date
            }
        }
    }
</script>

<style scoped lang="less">
   .draw-detail {
       min-height: 100vh;
       box-sizing: border-box;
       padding-bottom: 72px;
       overflow: hidden;
       .top{
           margin: 36px 0 40px;
           text-align: center;
           h3{
               font-size:17px;
               font-family:PingFangSC;
               font-weight:600;
               color:rgba(36,42,50,1);
               line-height:24px;
           }

       }
       .process{
           width: 270px;
           margin: 0 auto;
           display: flex;
           justify-content: center;
           align-items: center;
           .step{
               position: relative;
               width: 24px;
               height: 24px;
              img{
                  width: 24px;
                  height: 24px;
              }
               p{
                   text-align: center;
                   font-size:13px;
                   font-family:PingFangSC;
                   font-weight:500;
                   color:rgba(36,42,50,1);
                   position: absolute;
                   bottom: -24px;
                   left: -18px;
                   width: 60px;
                   text-align: center;
                   &.grey{
                       color:rgba(147,158,170,1);
                   }
               }
           }
           .line{
               width: 80px;
               height: 4px;
               background: #E73D4D;
               border-radius: 2px;
               position: relative;
               overflow: hidden;
               margin: 0 5px;
               &.grey{
                   background: #EAEAEA;
                   .red{
                       width: 40px;
                       height: 100%;
                       left: 0;
                       top:0;
                       background:#E73D4D ;
                   }
               }
           }
       }
    }
   .info{
       .info-box{
           width:345px;
           box-sizing: border-box;
           padding: 30px 0 20px 24px;
           margin:  60px auto 0;
           background:rgba(255,255,255,1);
           box-shadow:0px 0px 12px 0px rgba(0,0,0,0.07);
           position: relative;
           .triangle{
               width: 20px; height: 20px;
               background:rgba(255,255,255,1);
               box-shadow:0px 0px 12px 0px rgba(0,0,0,0.07);
               position: absolute;
               left: 50%;
               margin-left: -10px;
               top:-8px;
               transform: skewY(30deg) rotateZ(30deg);
               z-index: -1;
           }
           p{
               display: flex;
               margin-bottom:20px ;
               &:last-child{
                   margin-bottom: 0;
               }
               .p1{
                   font-size:14px;
                   font-family:PingFangSC;
                   font-weight:400;
                   color:rgba(147,158,170,1);
                   width: 96px;

               }
               .p2{
                   font-size:14px;
                   font-family:PingFangSC;
                   font-weight:400;
                   color:rgba(94,101,108,1);
                   &.red{
                       color:#E73D4D;
                   }

               }

           }
       }
   }
    .draw-part{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 72px;
        width: 100%;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>