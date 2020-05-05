<template style="width: 1200px">
    <div>

            <div class="banner-1">
                <img src="../assets/banner1.jpg" alt="">
            </div>

            <div class="activityframe1">
            <div v-for="item in Banner1" class="activityshop1">
                <router-link :to="{path:'/#',query:{data:item}}">
                <img :src="item.imgUrl" alt="">
                <h4 class="activityname1"><b>{{item.title}}</b></h4>
                <div class="activitymoeny1">
                    <span>￥</span>
                    <span>{{item.Presentprice}}</span>
                    <span>{{item.Originalprice}}</span>
                    <div>
                    <button>立即购买</button>
                    </div>
                </div>
                </router-link>
            </div>
            </div>
    </div>
</template>

<script>

    export default {
        name: "Activity",

        /*components:{
            TopBar
        },*/

        data(){
            return{
                Banner1:[
                    {
                        id:1,
                        imgUrl:'img/banner1-1.jpg',
                        title:'百家争鸣',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:2,
                        imgUrl:'img/banner1-2.jpg',
                        title:'从春秋到战国',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:3,
                        imgUrl:'img/banner1-3.jpg',
                        title:'大宋革新',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:4,
                        imgUrl:'img/banner1-4.jpg',
                        title:'奠基者',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:5,
                        imgUrl:'img/banner1-5.jpg',
                        title:'国家',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:6,
                        imgUrl:'img/banner1-6.jpg',
                        title:'汉武的帝国',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:7,
                        imgUrl:'img/banner1-7.jpg',
                        title:'南朝,北朝',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:8,
                        imgUrl:'img/banner1-8.jpg',
                        title:'女皇武则天',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:9,
                        imgUrl:'img/banner1-9.jpg',
                        title:'秦汉魏晋南北朝',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
                    {
                        id:10,
                        imgUrl:'img/banner1-10.jpg',
                        title:'青春志',
                        Presentprice:'25.60',
                        Originalprice:'￥35.00'
                    },
            ]
            }
        }
    }
</script>

<style scoped lang="less">

    .banner-1 {
        overflow: hidden;

        & img {
            overflow: hidden;
            position: relative;
            left: -250px;
        }
    }

    .activityframe1{
        padding-bottom: 800px;
        padding-left: 13.5%;
        background-color: #96422a;
    }

    .activityshop1{
        float: left;
        background-color: white;
        margin: 10px;
        width: 200px;
    }

    .activityname1{
        text-align: left;
        margin-left: 25px;
        margin-bottom: 50px;
    }

   .activitymoeny1{
       text-align: left;
       padding-left: 25px;
   }

    .activitymoeny1 span:nth-child(1){
        color: red;
        font-size: 14px;
    }

    .activitymoeny1 span:nth-child(2){
        font-size: 26px;
        color: red;
    }

    .activitymoeny1 span:nth-child(3){
        color: #999;
        line-height: 35px;
        text-decoration: line-through;
    }


    .activitymoeny1>div{
       margin-bottom: 10px;
    }

    .activitymoeny1>div>button{
        background: #96422a;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        width: 150px;
        height: 36px;
        display: block;
        outline: none;
        border: none;
    }
</style>