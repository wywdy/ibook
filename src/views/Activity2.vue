<template style="width: 1200px">
    <div>

        <div class="banner-1">
            <img src="../assets/banner2.jpg" alt="">
        </div>
        <div style="background-color: #40316a;padding-bottom: auto">

            <div class="activitytab">
                <a name="1-3grade">1-3年级</a>
                <a href="#4-6grade">4-6年级</a>
                <a href="#7-9grade">7-9年级</a>
            </div>
            <div class="activityframe1">
                <div v-for="item in Banner1" class="activityshop1">
                    <router-link
                                 :to="{path:'/#',query:{data:item}}">
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

            <div class="activitytab2">
                <a href="#1-3grade">1-3年级</a>
                <a name="4-6grade">4-6年级</a>
                <a href="#7-9grade">7-9年级</a>
            </div>
            <div class="activityframe1">
                <div v-for="item in Banner1" class="activityshop1">
                    <router-link
                                 :to="{path:'/#',query:{data:item}}">
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

            <div class="activitytab3">
                <a href="#1-3grade">1-3年级</a>
                <a href="#4-6grade">4-6年级</a>
                <a name="7-9grade">7-9年级</a>
            </div>
            <div class="activityframe1">
                <div v-for="item in Banner1" class="activityshop1">
                    <router-link
                                 :to="{path:'/#',query:{data:item}}">
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


    </div>
</template>

<script>

    export default {
        name: "Activity2",

        data() {
            return {
                Banner1: [
                    {
                        id: 1,
                        imgUrl: 'img/banner2-1.jpg',
                        title: '快乐读书吧·名著阅读课程化丛书•读读童谣和儿歌(1-4册)',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 2,
                        imgUrl: 'img/banner2-2.jpg',
                        title: '快乐读书吧名著阅读课程化丛书•一起长大的玩具+愿望的实现+七色花+神笔马良 2年级下/快乐读书吧丛书',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 3,
                        imgUrl: 'img/banner2-3.jpg',
                        title: '快乐读书吧·名著阅读课程化丛书 和大人一起读 1年级/上册(4册)',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 4,
                        imgUrl: 'img/banner2-4.jpg',
                        title: '快乐读书吧.名著阅读课程化丛书•和大人一起读.1年级.上册(全4册)+读读童谣和儿歌(1-4册)',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 5,
                        imgUrl: 'img/banner2-5.jpg',
                        title: '孤独的小螃蟹+小鲤鱼跳龙门+一只想飞的猫+小狗的小房子+歪脑袋木头桩/2年级上/快乐读书吧.名著阅读课程化丛书',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 6,
                        imgUrl: 'img/banner2-5.jpg',
                        title: '稻草人+安徒生童话+格林童话/3年级上/快乐读书吧·名著阅读课程化丛书',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 7,
                        imgUrl: 'img/banner2-4.jpg',
                        title: '快乐读书吧·名著阅读课程化丛书 七色花',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 8,
                        imgUrl: 'img/banner2-3.jpg',
                        title: '愿望的实现/快乐读书吧丛书',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 9,
                        imgUrl: 'img/banner2-2.jpg',
                        title: '快乐读书吧名著阅读课程化丛书•一起长大的玩具:2年级下/快乐读书吧丛书',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                    {
                        id: 10,
                        imgUrl: 'img/banner2-1.jpg',
                        title: '快乐读书吧·名著阅读课程化丛书伊索寓言 3年级 下册',
                        Presentprice: '25.60',
                        Originalprice: '￥35.00'
                    },
                ]
            }
        },

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

    .activitytab,
    .activitytab2,
    .activitytab3{
        text-align: center;
    }

    .activitytab > a,
    .activitytab2 > a,
    .activitytab3>a{
        width: 165px;
        height: 70px;
        color: #fffc00;
        display: inline-block;
        text-align: center;
        line-height: 70px;
        font-size: 22px;
        font-weight: bold;
    }

    .activitytab a:nth-child(1),
    .activitytab2 a:nth-child(2),
    .activitytab3 a:nth-child(3){
        background-image: url("../../public/img/banner-tab1.png");
    }

    .activitytab a:nth-child(2),
    .activitytab a:nth-child(3),
    .activitytab2 a:nth-child(1),
    .activitytab2 a:nth-child(3),
    .activitytab3 a:nth-child(1),
    .activitytab3 a:nth-child(2){
        background-image: url("../../public/img/banner-tab2.png");
    }

    .activitytab a:nth-child(2):hover,
    .activitytab a:nth-child(3):hover,
    .activitytab2 a:nth-child(1):hover,
    .activitytab2 a:nth-child(3):hover,
    .activitytab3 a:nth-child(1):hover,
    .activitytab3 a:nth-child(2):hover{
        background-image: url("../../public/img/banner-tab1.png");
    }

    .activityframe1 {
        padding-bottom: 850px;
        padding-left: 13.5%;
    }

    .activityshop1 {
        float: left;
        background-color: white;
        margin: 10px;
    }

    .activityname1 {
        text-align: left;
        margin-left: 25px;
        margin-bottom: 50px;
        overflow: hidden;
        width: 140px;
        height: 40px;
    }

    .activitymoeny1 {
        text-align: left;
        padding-left: 25px;
    }

    .activitymoeny1 span:nth-child(1) {
        color: red;
        font-size: 14px;
    }

    .activitymoeny1 span:nth-child(2) {
        font-size: 26px;
        color: red;
    }

    .activitymoeny1 span:nth-child(3) {
        color: #999;
        line-height: 35px;
        text-decoration: line-through;
    }


    .activitymoeny1 > div {
        margin-bottom: 10px;
    }

    .activitymoeny1 > div > button {
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