<template>
    <div class="school">
        <div class="school-list">
            <!--<div class="alp-part" v-for=" j in 4">
                <div class="alp">A</div>
                <div class="items">
                    <div class="item" v-for="i in 4">学校名称</div>
                </div>
            </div>-->
            <van-index-bar>
                <div v-for="(list,alpha) in schools">
                <van-index-anchor  :index="alpha"/>
                <van-cell   v-for="schoolItem in list" :title="schoolItem.team_name" @click="handleClick(schoolItem)"/>
                </div>
            </van-index-bar>
        </div>
        <div class="popbg" v-show="popBox.show">
            <div class="popbox-school">
                <div class="content">
                    <div class="close" @click="closePopBox"></div>
                    <h4>您将代表<br /><span>{{selectedSchool?selectedSchool.team_name:''}}</span><br />参与高校争霸赛</h4>
                   <div class="btns">
                       <div class="btn rechoose" @click="closePopBox">重新选择</div>
                       <div class="btn confirm">确认</div>
                   </div>
                    <p class="tip">*温馨提示：学校信息一经确认，不可修改</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getSchoolList} from '../../api/school'
    import Vue from 'vue';
    import { IndexBar, IndexAnchor,Cell} from 'vant';
    Vue.use(IndexBar).use(IndexAnchor).use(Cell);
    export default {
        name: "school",
        data(){
            return {
                schools:null,
                selectedSchool:null,
                popBox:{
                    show:false
                }
            }
        },
        beforeMount(){
            this.getSchool();
        },
        methods:{
            showPopBox(){
                this.popBox.show=true;
            },
            closePopBox(){
                this.popBox.show=false;
            },
            getSchool(){
                getSchoolList().then(res=>{
                    console.log('getSchool',res);
                    this.schools=res.data;
                })
            },
            handleClick(item){
                this.selectedSchool=item;
                this.showPopBox();
            }
        },

    }
</script>

<style  lang="less">
    @import "../../style/popbox";
    .van-index-anchor{
        background:#F0F3F6 !important;
    }
   .school-list{
       padding-bottom:40px;
       .alp-part{

            .alp{
                @height:30px;
                height: @height;
                width: 100%;
                box-sizing: border-box;
                line-height:@height ;
                padding: 0 15px;
                background: #F0F3F6;
                font-size:14px;
                font-family:PingFangSC;
                font-weight:600;
                color:rgba(96,96,96,1);

            }
           .item{
               height: 48px;
               line-height: 48px;
               width: 100%;
               padding: 0 0 0 20px;
               box-sizing: border-box;
               background: #ffffff;
               border: 1px solid #F2F2F2;
               font-size:16px;
               font-family:PingFangSC;
               font-weight:400;
               color:rgba(96,96,96,1);
               &:last-child{
                   border-bottom: none;
               }
           }

       }
   }
</style>