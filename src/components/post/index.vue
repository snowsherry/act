<template>
    <div class="post" id="post" v-if="show">
        <div class="post-content post1" id="post1" :class="[{'fade':fade}]">
            <div class="title">年轻人爱用的资讯行情APP</div>
            <div class="logo"><img src="../../assets/image/post/logo.png" width="138"></div>
            <div class="slogans">
                <div class="slogan-part" v-for="slogan in slogans">{{slogan}}</div>
            </div>
            <div class="bottom">
                <img src="../../assets/image/post/bottom.png" width="375" class="bottom-img">
                <div class="bottom-box">

                       <img :src='userInfo.avatar' width="25"  class="bottom-box-left" v-if="userInfo">

                    <div class="bottom-box-center">
                        <h4><span>{{userInfo.wechatUserName}}</span>送你一个</h4>
                        <img src="../../assets/image/post/bag-call.png" width="153">
                    </div>
                    <div class="bottom-box-right">
                        <div id="qrcode"></div>
                        <p>扫码领福利</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="post-content post2"></div>
        <img :src="imgData" v-if="imgData">
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import html2canvas from  'html2canvas';
    import vueHtml2canvas from 'vue-html2canvas'
    import QRCode from 'qrcodejs2'
    export default {
        name: "index",
        props:{
            index:Number,
            default:1
        },
        data(){
            return{
                imgData:null,
                slogans:['排雷/诊股/选股','港/美/A实时行情','最新财报解读'],
                fade:true,
                show:false,
                avatar:"http://www.aigauss.com/assets/img/zgs.png"
            }
        },
        computed:{
            ...mapGetters('user',{
                userInfo:'getUserInfo'
            }),
        },
        mounted(){
              this.show=true;
        },
        watch:{
            show(val){
               if(val){
                   console.log('show',this.show);
                   this.$nextTick(()=>{
                       this.qrcode();
                   })

               }
            }
        },
        methods:{
            qrcode() {
                let qrcode = new QRCode('qrcode', {
                    width: 64,
                    height: 64,
                    text: process.env.VUE_APP_BASE_URL+'/new?inviteCode='+this.userInfo.inviteCode, // 二维码地址
                    colorDark : "#000",
                    colorLight : "#fff",
                })
            },
            setImg(){
                this.show=true;
                let options={
                    scale:2,
                    useCORS: true
                };
                let that=this;
                setTimeout(()=>{
                    html2canvas(document.getElementById('post1'),options).then(function(canvas) {
                        console.log('data url',canvas.toDataURL('image/png'))
                        that.imgData=canvas.toDataURL('image/png');
                        that.show=false;
                        //that.fade=false;
                        /* //that.drawed=true;
                         //window.open(canvas.toDataURL('image/png'))*/
                    });
                },200)
                return;
               /* this.$nextTick(()=>{
                    /!*console.log('gggg')
                    html2canvas(document.getElementById('post1'),options).then(function(canvas) {
                        console.log('data url',canvas.toDataURL('image/png'))
                        that.imgData=canvas.toDataURL('image/png');
                        that.show=false;
                        //that.fade=false;
                        /!* //that.drawed=true;
                         //window.open(canvas.toDataURL('image/png'))*!/
                    });*!/
                })*/

            }
        }
    }
</script>

<style scoped lang="less">
    #post{
        position: fixed;
        left: 0;
        top: 0;
        background: #ffffff;
        width: 100%;
        z-index: -1;
    }
    .post-content{
        position: relative;
        &.fade{
           //top:100vh;
        }
        &.post1{
            width: 100%;
            padding: 44px 0 0 0;

            .title{
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(58,62,66,1);
                line-height:14px;
                margin-bottom:14px;
                text-align: center;
            }
            .logo{
                text-align: center;
                margin-bottom: 16px;
            }
            .slogans{
                display: flex;
                justify-content: center;
                margin-bottom: 40px;
                .slogan-part{
                    padding: 2px 10px 6px 10px;
                    line-height: 12px;
                    border-radius: 24px;
                    border: 1px solid #E73D4D;
                    margin: 0 4px;
                    text-align: center;
                    font-size:12px;

                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(231,61,77,1);
                }
            }
            .bottom{
                width: 375px;
                height: 486px;
                //background: url('../../assets/image/post/bottom.png') center top no-repeat;
                /*background-size: cover;*/
                position: relative;
                overflow: hidden;
                .bottom-img{
                   position: absolute;
                    left: 0;
                    top:0;
                    width: 375px;
                    height: 486px;
                    z-index: -1;
                }
                .bottom-box{
                    width:338px;
                    height: 100px;
                    background: #ffffff;
                    margin: 300px auto 0;
                    border-radius: 6px;
                    box-sizing: border-box;
                    padding: 10px 18px 0 12px  ;
                    display: flex;
                    .bottom-box-left{
                        width: 25px;
                        height: 25px;
                        border-radius: 100%;
                        overflow: hidden;
                        margin-right: 5px;
                        display: block;

                    }
                    .bottom-box-center{
                        width: 210px;
                        h4{
                            font-size:13px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(94,101,108,1);
                            line-height:13px;
                            margin: 6px 0 12px;
                            span{
                                font-weight:500;
                                color:rgba(36,42,50,1);
                                margin-right:10px;
                            }
                        }

                    }
                    .bottom-box-right{
                        text-align: center;
                        font-size:11px;
                        font-family:PingFangSC;
                        font-weight:400;
                        color:rgba(36,42,50,1);
                        .img{
                            width: 64px;
                            height: 64px;
                        }

                    }

                }
            }

        }
    }
</style>