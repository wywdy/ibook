<template>
    <div>
         <div class="floorBox">
             <div class="floorTitle"><i class="icon el-icon-star-off"></i><span>{{floor.id}}F</span><span>{{floor.floorTitle}}</span></div>
             <div class="floorInfoBox">
                 <div class="left">
                     <div class="tab-cont" v-for="(item,index) in floor.floorBooks" :key="index" ref="tabItem">
                         <div class="img"><a><img :src="item.bImg" alt=""></a></div>
                         <div class="bName"><a href="#">{{item.bName}}</a></div>
                         <div class="info">{{item.bIntro}}</div>
                         <div class="price">
                             <span class="selling" style="color: #db2a41;font-size: 24px;font-weight: 600">￥{{item.selling}}</span>
                             <span class="pricing" style="text-decoration: line-through;color: #666;font-size: 14px;vertical-align: bottom">￥{{item.pricing}}</span>
                             <el-button class="addCarts" size="mini"><i class="icon el-icon-shopping-cart-2"></i>加入购物车</el-button>
                         </div>
                     </div>
                 </div>
                 <div class="right">
                     <div class="cell" v-for="(item,index) in floor.floorBooks" :key="index" @mouseover="signChange(index)" ref="cellItem" :data-id="index">
                         <div class="bImg"><a href="#"><img :src="item.bImg" alt=""></a></div>
                         <div class="bName">{{item.bName}}</div>
                         <div class="price">
                             <span class="selling" style="color: #db2a41;font-size: 18px;font-weight: 600">￥{{item.selling}}</span>
                             <span class="pricing" style="text-decoration: line-through;color: #666;font-size: 14px">￥{{item.pricing}}</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "FloorBook",
        props:['floor'],
        data(){
            return{
                // floorList:[
                //     {id:1,floorTitle:'青春文学',floorBooks:[
                //             {bId:1,bImg:'/img/floorImg/1.jpg',bName:'为了你，我愿意热爱整个世界',bIntro:'作家富豪榜靠前唐家三少 出道十二年挚爱新作！献给相信爱情、坚持梦想的你！感动千万人的真爱告白，我们从未如此相信爱情！',
                //                 selling:'24.8',pricing:'36.00'},
                //             {bId:2,bImg:'/img/floorImg/2.jpg',bName:'再美也美不过想象',bIntro:'《再美也美不过想象》是微博上用冷幽默讲暖故事的高手、韩寒主编【一个】APP高赞人气作家耀一首部情感小说结集。平凡的故事，虐心的结局，篇篇直戳泪点。',
                //                 selling:'21.4',pricing:'35.00'}]},
                //     {id:2,floorTitle:'情感小说',floorBooks:[
                //             {bId:3,bImg:'/img/floorImg/3.jpg',bName: '陆垚知马俐',bIntro:'',
                //                 selling:'30.7',pricing:'39.80'}]},
                //     {id:3,floorTitle:'外国文学',floorBooks:[
                //             {bId:4,bImg:'/img/floorImg/4.jpg',bName: '湖畔/东野圭吾',bIntro:'★东野圭吾专享一部以家庭亲情与子女教育为背景的作品\n' +
                //                     '★超越《白夜行》的黑暗绝望，挑战人伦道德底线的突破之作！',
                //                 selling:'20.2',pricing:'32.00'},
                //             {bId:5,bImg:'/img/floorImg/5.jpg',bName: '分歧者',bIntro:'好莱坞同名大片《分歧者》2014优选震撼热映！继《暮光之城》《饥饿游戏》之后令优选青少年读者狂野尖叫！',
                //                 selling:'18.9',pricing:'29.00'},
                //             {bId:6,bImg:'/img/floorImg/6.jpg',bName: '春琴抄',bIntro:'《春琴抄》收录谷崎润一郎名作《春琴抄》《痴人之爱》',
                //                 selling:'38.7',pricing:'45.00'},
                //         ]},
                //     {id:4,floorTitle:'网红漫画',floorBooks:[
                //             {bId:7,bImg:'/img/floorImg/7.jpg',bName: '就喜欢你看不惯我又干不掉我的样子（2）',bIntro:'',
                //                 selling:'38.2',pricing:'46.00'},
                //             {bId:8,bImg:'/img/floorImg/8.jpg',bName: '其实你很好,你自己却不知道',bIntro:'《其实你很好，你自己却不知道》，想告诉每一个你：每个人都不完美，当你多去发现自己的优点，试着更喜欢自己一点，你会发现，你远比自己想象的更加美好。',
                //                 selling:'20.2',pricing:'36.00'},
                //             {bId:9,bImg:'/img/floorImg/9.jpg',bName: '如梦令',bIntro:'从未披露过的民国奇闻，封存许久的旧时秘辛。同名巨制影视剧即将开拍！夏天岛实力超群的美少女漫画组合再现乱世长卷。漫画巨匠姚非拉鼎力推荐，各大平台千万点赞！',
                //                 selling:'17.9',pricing:'29.80'},
                //             {bId:10,bImg:'/img/floorImg/10.jpg',bName: '头条都是他',bIntro:'《头条都是他》是《快把我哥带走》的作者幽·灵全新连载作品，超过5亿次阅读的热门漫画，上百万微博粉丝疯狂追更，还有众多小鲜肉明星也在追更。',
                //                 selling:'23.9',pricing:'39.80'},
                //         ]},
                // ],
            }
        },
        mounted(){
            //默认显示第一张图片
            this.$refs.cellItem[0].style.borderTop='2px solid  #db2a41';
            this.$refs.tabItem[0].style.display='block';
        },
        methods: {
            signChange(index) {
                for(let i=0;i<this.floor.floorBooks.length;i++){
                    if(i!==index){
                        this.$refs.cellItem[i].style.borderTop='1px solid #e8e8e8';
                        this.$refs.tabItem[i].style.display='none';
                    }
                }
                this.$refs.cellItem[index].style.borderTop='2px solid  #db2a41';
                this.$refs.tabItem[index].style.display='block';
            },
        },
    }
</script>

<style scoped lang="less">
.floorBox{
    width: 1210px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    &>.floorTitle{
        text-align: left;
        font-size: 18px;
        color: black;
        font-weight: 400;
        padding-bottom: 10px;
        &>i{
            font-size: 22px;
            color: black;
            padding-right: 5px;
        }
        &>span{
            padding-right: 5px;
        }
    }
}
.floorInfoBox{
    display: flex;
    flex-direction: row;
    &>.left{
        width: 400px;
        height: 480px;
        overflow: hidden;
        border: 1px solid #e8e8e8;
        background-color: white;
        &>.tab-cont{
            width: 348px;
            height: 440px;
            margin: 20px 26px;
            &>.img{
                width: 266px;
                height: 266px;
                margin-right: auto;
                margin-left: auto;
                &>a>img{
                    width: 100%;
                    height: 100%;
                }
            }
            &>.bName{
                padding-top: 10px;
                padding-bottom: 5px;
                font-size: 16px;
                text-align: left;
                &>a:link,
                &>a:visited,
                &>a:active{
                    color: black;
                    text-decoration: none;
                }
                &>a:hover{
                    text-decoration: underline;
                }
            }
            &>.info{
                font-size: 14px;
                color: #8e8e8e;
                height: 60px;
                margin-bottom: 15px;
                text-align: left;
            }
            &>.price{
                position: relative;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-content: flex-start;
                &>span:first-child{
                    text-align: left;
                    width: 100px;
                }
                &>span:nth-child(2){
                    width: 50px;
                    line-height: 38px;
                    display: inline-block;
                }
                &>.addCarts{
                    position: absolute;
                    left: 204px;
                    bottom: 0px;
                    background-color: #db3134;
                    font-size: 18px;
                    font-weight: 600;
                    color: white;
                    &>span>i{
                        padding-right: 5px;
                    }
                }
            }
        }
    }
    &>.right{
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        &>.cell{
            border: 1px solid #e8e8e8;
            width: 200px;
            background-color: white;
            height: 238px;
            &>.bImg{
                width: 150px;
                height: 150px;
                margin: 5px auto;
                &>a>img{
                    width: 100%;
                    height: 100%;
                }
            }
            &>.bName{
                width: 160px;
                margin: 0px auto 5px;
                text-align: left;
                color: black;
                font-size: 14px;
                height: 40px;
            }
            &>.price{
                width: 160px;
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