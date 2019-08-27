<template>
    <div class="post" id="post" v-if="show">
        <div class="post-content post1" id="post1" :class="[{'fade':fade}]">
            <div class="title">年轻人爱用的资讯行情APP</div>
            <div class="logo"><img src="../../assets/image/post/logo.png" width="138"></div>
            <div class="slogans">
                <div class="slogan-part" v-for="slogan in slogans">{{slogan}}</div>
            </div>
            <div class="bottom">
                <div class="bottom-box"></div>
            </div>
        </div>
        <div class="post-content post2"></div>
        <img :src="imgData" v-if="imgData">
    </div>
</template>

<script>
    import html2canvas from  'html2canvas';
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
            }
        },
        mounted(){
        },
        methods:{
            setImg(){
                this.show=true;
                console.log('5666');
                let options={
                    scale:1
                };
                let that=this;
                this.$nextTick(()=>{

                    console.log('gggg')
                    html2canvas(document.getElementById('post1'),options).then(function(canvas) {
                        console.log('data url',canvas.toDataURL('image/png'))
                        that.imgData=canvas.toDataURL('image/png');
                        that.show=false;
                        //that.fade=false;
                        /* //that.drawed=true;
                         //window.open(canvas.toDataURL('image/png'))*/
                    });
                })

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
    }
    .post-content{
        position: relative;
        &.fade{
            top:100vh;
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
                    box-sizing: border-box;
                   height: 24px;
                    padding: 0 10px;
                    line-height: 24px;
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
                background: url('../../assets/image/post/bottom.png');
                background-size: cover;
                position: relative;
                overflow: hidden;
                .bottom-box{
                    width:338px;
                    height: 100px;
                    background: #ffffff;
                    margin: 300px auto 0;
                    border-radius: 6px;

                }
            }

        }
    }
</style>