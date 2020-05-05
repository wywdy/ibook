<template>
    <div class="channelContainer">
        <div class="ChannelBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{channelType}}频道</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="box">
            <div class="channelMenu">
                <ChannelMenu v-bind:menuId="channelId"></ChannelMenu>
            </div>
            <div class="channelBannerBox">
                <div class="channelBanner">
                    <el-carousel :interval="5000">
                        <el-carousel-item v-for="item in channelBanner" :key="item">
                            <img :src="item" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
<!--重磅图书-->
        <div class="greatBooks">
            <div><i class="icon el-icon-star-on"></i>重磅图书<span>倾情推荐时下最热门{{channelType}}图书！</span></div>
            <div class="greatBooksList">
                <div class="bookslist" v-for="item in bookList">
                    <div>
                        <a href="#"><img :src="item.bImg" alt=""></a>
                    </div>
                    <div class="bookName">{{item.productName}}</div>
                    <div class="price">
                        <span class="selling" style="color: #db2a41;font-size: 18px;font-weight: 600">￥{{item.productSalePrice}}</span>
                        <span class="pricing" style="text-decoration: line-through;color: #666;font-size: 14px">￥{{item.productPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
<!--特色推荐-->
        <div class="specialRecommend">
            <RecommendNext></RecommendNext>
        </div>
<!--楼层图书-->
        <div class="oneFloor">
            <FloorBook v-bind:floor="floorBook.oneFloor"></FloorBook>
        </div>
        <div class="twoFloor">
            <FloorBook v-bind:floor="floorBook.twoFloor"></FloorBook>
        </div>
        <div class="threeFloor">
            <FloorBook v-bind:floor="floorBook.threeFloor"></FloorBook>
        </div>
        <div class="fourFloor">
            <FloorBook v-bind:floor="floorBook.fourFloor"></FloorBook>
        </div>
    </div>
</template>

<script>
    import RecommendNext from "../components/RecommendNext";
    import ChannelMenu from "../components/ChannelMenu";
    import FloorBook from "../components/FloorBook";
    export default {
        name: "channel",
        components: {FloorBook, ChannelMenu, RecommendNext},
        data(){
            return {
                channelId:'',//频道页ID
                channelType:'文学',//频道类型名称
                channelBanner:['/img/channelBanner/wx1.jpg'],
                bookList:[
                    {bid:1,bImg:'/img/searchBook/1.jpg',bName:'小王子：纪念作者诞辰110周年，63幅作者原绘手稿抢先发售公开，中英法三语彩色典藏纪念版',pricing:20.00,
                        selling:11.4, discount:'5.7折',writer:'(法)圣矣克苏佩里',
                        publish:'中国华侨出版社',publishDate:'2010年08月',evaluate:5,evalNum:4052
                    },
                    {bid:2,bImg:'/img/searchBook/2.jpg',bName:'王子与贫儿',pricing:26.00,
                        selling:15.30, discount:'5.89折',writer:'(美)马克·吐温',
                        publish:'长江文艺出版社',publishDate:'2018年05月',evaluate:5,evalNum:null
                    },
                    {bid:3,bImg:'/img/searchBook/3.jpg',bName:'小王子 典藏版',pricing:38.00,
                        selling:20.90, discount:'5.5折',writer:'(法)安东尼·德·圣埃克苏佩里',
                        publish:'南京大学出版社',publishDate:'2017年04月',evaluate:4,evalNum:null
                    },
                    {bid:4,bImg:'/img/searchBook/4.jpg',bName:'小王子',pricing:36.80,
                        selling:26.50, discount:'7.21折',writer:'马玉',
                        publish:'连环画出版社',publishDate:'2018年08月',evaluate:5,evalNum:78
                    },
                    {bid:5,bImg:'/img/searchBook/5.jpg',bName:'快乐王子',pricing:16.80,
                        selling:9.90, discount:'5.90折',writer:'(英)奥斯卡·王尔德',
                        publish:'长江文艺出版社',publishDate:'2016年07月',evaluate:5,evalNum:58
                    },
                    {bid:6,bImg:'/img/searchBook/6.jpg',bName:'公鸡王子',pricing:38.00,
                        selling:27.70, discount:'7.29折',writer:'双翅目',
                        publish:'东方出版社',publishDate:'2018年03月',evaluate:5,evalNum:0
                    },
                    {bid:7,bImg:'/img/searchBook/7.jpg',bName:'王子和公主',pricing:45.00,
                        selling:27.90, discount:'6.2折',writer:'（日）信实',
                        publish:'辽宁科学技术出版社',publishDate:'2019年05月',evaluate:5,evalNum:12
                    },
                    {bid:8,bImg:'/img/searchBook/8.jpg',bName:'白猫王子及其他',pricing:36.00,
                        selling:25.90, discount:'7.2折',writer:'梁实秋',
                        publish:'四川人民出版社有限公司',publishDate:'2018年08月',evaluate:3,evalNum:null
                    },
                    {bid:9,bImg:'/img/searchBook/9.jpg',bName:'哈利·波特与"混血王子"',pricing:72.00,
                        selling:56.90, discount:'7.91折',writer:'(英)J.K.罗琳(J.K.Rowling)',
                        publish:'人民文学出版社',publishDate:'2018年10月',evaluate:5,evalNum:242
                    },
                    {bid:10,bImg:'/img/searchBook/10.jpg',bName:'小王子"',pricing:20.00,
                        selling:12.40, discount:'6.2折',writer:'(法)圣埃克絮佩里(Antoine de Saint-Exupery) ',
                        publish:'上海译文出版社',publishDate:'2018年06月',evaluate:5,evalNum:121
                    }
                ],
                //一楼、二楼、三楼、四楼等信息
                floorBook:{
                    oneFloor:{id:1,floorTitle:'青春文学',floorBooks:[
                            {bId:1,bImg:'/img/floorImg/1.jpg',bName:'为了你，我愿意热爱整个世界',bIntro:'作家富豪榜靠前唐家三少 出道十二年挚爱新作！献给相信爱情、坚持梦想的你！感动千万人的真爱告白，我们从未如此相信爱情！',
                                selling:'24.8',pricing:'36.00'},
                            {bId:2,bImg:'/img/floorImg/2.jpg',bName:'再美也美不过想象',bIntro:'《再美也美不过想象》是微博上用冷幽默讲暖故事的高手、韩寒主编【一个】APP高赞人气作家耀一首部情感小说结集。平凡的故事，虐心的结局，篇篇直戳泪点。',
                                selling:'21.4',pricing:'35.00'}]},
                    twoFloor:{id:2,floorTitle:'情感小说',
                        floorBooks:[{bId:3,bImg:'/img/floorImg/3.jpg',bName: '陆垚知马俐',bIntro:'',selling:'30.7',pricing:'39.80'}]
                    },
                    threeFloor:{id:3,floorTitle:'外国文学',floorBooks:[
                            {bId:4,bImg:'/img/floorImg/4.jpg',bName: '湖畔/东野圭吾',bIntro:'★东野圭吾专享一部以家庭亲情与子女教育为背景的作品\n' +
                                    '★超越《白夜行》的黑暗绝望，挑战人伦道德底线的突破之作！',
                                selling:'20.2',pricing:'32.00'},
                            {bId:5,bImg:'/img/floorImg/5.jpg',bName: '分歧者',bIntro:'好莱坞同名大片《分歧者》2014优选震撼热映！继《暮光之城》《饥饿游戏》之后令优选青少年读者狂野尖叫！',
                                selling:'18.9',pricing:'29.00'},
                            {bId:6,bImg:'/img/floorImg/6.jpg',bName: '春琴抄',bIntro:'《春琴抄》收录谷崎润一郎名作《春琴抄》《痴人之爱》',
                                selling:'38.7',pricing:'45.00'},
                        ]},
                    fourFloor: {id:4,floorTitle:'网红漫画',floorBooks:[
                            {bId:7,bImg:'/img/floorImg/7.jpg',bName: '就喜欢你看不惯我又干不掉我的样子（2）',bIntro:'',
                                selling:'38.2',pricing:'46.00'},
                            {bId:8,bImg:'/img/floorImg/8.jpg',bName: '其实你很好,你自己却不知道',bIntro:'《其实你很好，你自己却不知道》，想告诉每一个你：每个人都不完美，当你多去发现自己的优点，试着更喜欢自己一点，你会发现，你远比自己想象的更加美好。',
                                selling:'20.2',pricing:'36.00'},
                            {bId:9,bImg:'/img/floorImg/9.jpg',bName: '如梦令',bIntro:'从未披露过的民国奇闻，封存许久的旧时秘辛。同名巨制影视剧即将开拍！夏天岛实力超群的美少女漫画组合再现乱世长卷。漫画巨匠姚非拉鼎力推荐，各大平台千万点赞！',
                                selling:'17.9',pricing:'29.80'},
                            {bId:10,bImg:'/img/floorImg/10.jpg',bName: '头条都是他',bIntro:'《头条都是他》是《快把我哥带走》的作者幽·灵全新连载作品，超过5亿次阅读的热门漫画，上百万微博粉丝疯狂追更，还有众多小鲜肉明星也在追更。',
                                selling:'23.9',pricing:'39.80'},
                        ]},
                }

            }
        },
        methods:{
            send(){
                this.$emit('floorChange',this.twoFloor)
            }
        },
        mounted() {
            //获取频道页导航信息
            let that=this;
            let categoryId=this.$route.params.categoryId;
            this.channelId=categoryId;
            let url='/api/fore/channel/channelMenu/'+categoryId;
            this.$axios.get(url)
                .then((res=>{
                    this.channelType=res.data.categoryName;
                    this.channelBanner.push(res.data.categoryImageSrc);
                    // console.log(res)
                }))
                .catch((err)=>{
                    console.log(err)
                });
            //获取重磅图书推荐
            let url1='/api/fore/channelMenu/'+categoryId;
            this.$axios.get(url1)
                .then((res)=>{
                    console.log(11111111111111)
                    if(res.data.code===200){
                        this.bookList=res.data.data;
                    }
                })
                .catch((err)=>{
                    console.log(err)
                });
            //获得楼层图书推荐
            let url2='/api/fore/getBookByCategoryId/'+categoryId;
            this.$axios.get(url2)
                .then((res)=>{
                    if(res.data.code===200){
                       // this.floorBook=res.data.data;
                       // console.log(this.floorBook)
                    }
                    console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
</script>

<style scoped lang="less">
.channelContainer{
    width: 1210px;
    margin-right: auto;
    margin-left: auto;
}
.ChannelBreadcrumb{
    margin-bottom: 10px;
    height: 34px;
    &  .el-breadcrumb{
        font-size: 18px;
        font-family: "Microsoft Yahei";
        line-height: 34px;
    }
    & .el-breadcrumb__item:last-child {
        font-size: 14px!important;
        line-height: 34px;
    }
}
.box{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
.channelMenu{
    width: 300px;
    height: 300px;
}
.channelBannerBox{
    flex: 1;
}
.channelBanner{
    background-color: #e8e8e8;
    height: 300px;
    & img{
        width: 100%;
        height: 100%;
    }
}
.greatBooks{
        margin-top: 15px;
           &>div:first-child{
               text-align:left;
               font-size: 24px;
               color: black;
               font-weight: 400;
               &>i{
                   font-size: 26px;
                   color: black;
                   padding-right: 5px;
               }
               &>span{
                   font-size: 14px;
                   padding-left: 20px;
                   font-weight: normal;
                   color: #817e7f;
               }
           }
           &>.greatBooksList{
               margin-top: 5px;
               display: flex;
               flex-direction: row;
               flex-wrap: wrap;
               justify-content: flex-start;
               &>.bookslist{
                   width: 240px;
                   height: 270px;
                   border: 1px solid #e8e8e8;
                   &>div:first-child{
                       width: 220px;
                       height: 200px;
                       margin: 5px auto;
                       &>a>img{
                           width: 100%;
                           height: 100%;
                       }
                   }
                   &>.bookName{
                       text-align: left;
                       width: 220px;
                       margin: 5px auto;
                       white-space: nowrap;
                       overflow: hidden;
                       text-overflow: ellipsis;
                       font-size: 14px;
                       color: #666666;
                   }
                   &>.price{
                       width: 220px;
                       margin: 5px auto;
                       display: flex;
                       flex-direction: row;
                       flex-wrap: nowrap;
                       justify-content: space-between;
                   }
               }
           }
    }
</style>