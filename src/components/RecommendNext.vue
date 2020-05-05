<template>
    <div class="container">
        <div class="box">
            <div class="title">
                <div class="mainTitle"><h3><i class="icon el-icon-star-on"></i><slot name="recommendTitle">特色推荐</slot></h3></div>
                <div class="tab">
                    <div @mouseover="signChange(0)">新品速递</div>
                    <div @mouseover="signChange(1)">超值低价</div>
                    <div @mouseover="signChange(2)">重磅套装</div>
                    <div @mouseover="signChange(3)">主编推荐</div>
                    <div class="sign"  ref="sign">  <b></b></div>
                </div>
            </div>
            <div class="content">
                <div v-for="(item,index) in bookData" :key="index" class="bookBox">
                    <div v-for="(bItem,idx) in bookData[index].data" class="bookItem">
                        <div class="bookImg"><img :src="bItem.imgSrc" alt=""></div>
                        <div class="bookName">{{bItem.bookName}}</div>
                        <div class="price">
                            <span class="selling" style="color: #db2a41;font-size: 18px;font-weight: 600">￥{{bItem.nowPrice}}</span>
                            <span class="pricing" style="text-decoration: line-through;color: #666;font-size: 14px">￥{{bItem.originPrice}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "next",
        data(){
            return{
                bookData:[{title:"新品速递",data:[{imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"81年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                    ]},{title:"超值低价",data:[{imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"83年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                    ]},{title:"重磅套装",data:[{imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"84年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                    ]},{title:"主编推荐",data:[{imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"84年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                        {imgSrc:"/img/searchBook/1.jpg",bookName:"82年生的金智英",originPrice:"31",nowPrice:"45"},
                    ]}],
                inHtml:"",
            }
        },
        methods:{
            signChange(index){
                let left=210+100*index;
                let oSign=this.$refs.sign;
                oSign.style.left=left+'px';
                let oBooks=document.querySelectorAll('.bookBox');
                for (let i=0;i<oBooks.length;i++){
                    oBooks[i].style.display='none'
                }
                oBooks[index].style.display='block';
            },

        }
    }
</script>

<style scoped lang="less">
    .box{
        width: 1210px;
        height: 600px;
        margin-top: 30px;
        margin-right: auto;
        margin-left: auto;
    }
    .title{
        position: relative;
        height: 50px;
    }
    .title>div{
        float: left;
    }
    .mainTitle{
        width: 200px;
        font-weight: bolder;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        &>h3{
            display: table-cell;
            vertical-align: bottom;
            font-size: 24px;
            color: black;
            font-weight: 400;
            &>i{
                padding-right: 5px;
            }
        }
    }
    .tab>div{
        width: 100px;
        text-align: center;
        height: 30px;
        display: table-cell;
        vertical-align: bottom;
        cursor:pointer;
        transition: left .5s;
    }
    .sign{
        position: absolute;
        top:30px;
        left: 210px;
        height: 8px !important;
        border-bottom: 1px solid red;
        width: 80px !important;
        &>b{
            border-style: dashed dashed solid;
            border-width: 4px;
            position: absolute;
            top: 0;
            left: 37px;
            border-color: transparent transparent #e4393c;
        }
    }
    .content>div{
        width: 1210px;
        height: 260px;
        display: none;
    }
    .content>div:first-child{
        display: block;
    }
    .bookItem{
        float: left;
        width: 220px;
        height: 259px;
        padding: 0 10px;
        border: 1px solid #f1f1f1;
        margin: 0 -1px -1px 0;
        position: relative;
    }
    .bookImg{
        padding-top: 5px;
        width: 100%;
        height: 200px;
        &>img{
            width: 100%;
            height: 100%;
        }
    }
    .bookName{
        text-align: left;
        width: 220px;
        margin: 5px auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #666666;
    }
    .price{
        width: 220px;
        margin: 5px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }


</style>