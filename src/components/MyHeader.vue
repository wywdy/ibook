<template>
    <div>
        <div class="mainBanner">
            <a href="">
            </a>
        </div>
        <div class="search">
            <div class="search-box">
                <div class="logo">
                    <a href="">
                        <img src="http://static.winxuancdn.com/css/v2/images/logo.png" alt="" >
                    </a>
                </div>
                <div class="search-content">
                   <div>
                       <input type="text" id="searchText" :placeholder="defaultSearch">
                       <button id="search" @click="returnSearch">搜索</button>
                   </div>
                    <div class="hotSearch">
                       <span>热门搜索:&nbsp;&nbsp;</span>
                        <a v-for="(item,index) in hotSearch" :key="index"  href=""><span>{{item}}<img src="http://static.winxuancdn.com/topic/subject/201605/pc-pl/hot-045.gif" alt=""></span></a>
                    </div>
                </div>
                <div class="cart">
                    <div class="myOrder">
                        <a href="" style="color: black">我的订单</a>
                    </div>
                    <div class="myCart">
                        <i class="el-icon-shopping-cart-2"></i>
                        购物车&nbsp;{{getShoppingCart.length}}
                        <ul class="myCartList":style="{'--height':cartHeight}" v-if="getShoppingCart.length>0">
                            <li v-for="(item,index) in getShoppingCart" class="myCartItem">
                                <div><img src="//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200" alt=""></div>
                                <div>{{item.bookName}}</div>
                                <div>{{item.nowPrice}}x{{item.bookNumber}}元</div>
                                <div>
                                        <i class="el-icon-error" slot="reference" style="font-size: 18px;" @click="deleteItem($event,item.bookId,item.bookId)"></i>
                                </div>
                            </li>
                            <div class="cart-total">
                                <div>
                                    <p>共{{getShoppingCart.length}}件商品</p>
                                    <p>{{getPrice}}元</p>
                                </div>
                                <div>
                                    <a href="/cart" id="buyIt">去购物车结算</a>
                                </div>
                            </div>
                        </ul>
<!--                        <div v-else class="empty" style="color: black">购物车中还没有商品，赶紧选购吧！</div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="nav">
            <div>
                <li class="allType"><a href="/AllCategories">全部商品分类</a><i class="el-icon-caret-bottom" id="showBottom"></i></li>
                <ul class="nav-item">
                    <li v-for="(item,idx) in bigTypeName" :key="idx" class="mainItem">
                        <h3><a :href="item.typeId1" class="redColor">{{item.typeName1}}</a></h3>
                        <div>
                            <a v-for="(smallItem,index) in item.typeItem.slice(0,typeNumber[idx])" :key="index" :href="smallItem.typeId2">{{smallItem.typeName2}}</a>
                        </div>
                        <div class="otherNav">
                            <a v-for="(smallItem,index) in item.typeItem.slice(typeNumber[idx],30)" :key="index" :href="smallItem.typeId2">{{smallItem.typeName2}}</a>

                        </div>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
                <li><a href="/channel/3">文学频道</a></li>
                <li><a href="/channel/1">社科频道</a></li>
                <li><a href="/channel/2">文教频道</a></li>
                <li><a href="/channel/5">少儿频道</a></li>
                <li><a href="/channel/8">生活频道</a></li>
                <li><a href="/channel/4">科技频道</a></li>
                <li><a href="/channel/6">教育频道</a></li>
                <li><a href="/channel/7">艺术频道</a></li>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapActions } from "vuex"
    export default {
        categoryId:'',
        name: "MyHeader",
        data(){
            return{
                defaultSearch:'中国共产党的九十年',
                hotSearch:['开学季领券区','今日秒杀','庆余年','20万图书5折甩','孤独星球'],
                // 每个大类显示的数量
                typeNumber:[4,3,3,3,1,4,4,2,3,2],
                bigTypeName:[
                    {typeId3:1,typeName1:'社科',typeItem:[
                            {typeId2:1,typeId1:1,typeName2:'哲学'},
                            {typeId2:2,typeId1:1,typeName2:'历史'},
                            {typeId2:3,typeId1:1,typeName2:'地理'},
                            {typeId2:4,typeId1:1,typeName2:'军事'},
                            {typeId2:5,typeId1:1,typeName2:'政治'},
                            {typeId2:6,typeId1:1,typeName2:'婚姻家庭'},
                            {typeId2:7,typeId1:1,typeName2:'成功学'},
                            {typeId2:8,typeId1:1,typeName2:'社科'},
                            {typeId2:9,typeId1:1,typeName2:'公务员考试'},
                            {typeId2:10,typeId1:1,typeName2:'经济'},
                            {typeId2:11,typeId1:1,typeName2:'法律'},
                            {typeId2:12,typeId1:1,typeName2:'管理'},
                        ]},
                    {typeId3:2,typeName1:'文教',typeItem:[
                            {typeId2:13,typeId1:2,typeName2:'小学课本'},
                            {typeId2:14,typeId1:2,typeName2:'中学课本'},
                            {typeId2:15,typeId1:2,typeName2:'高中课本'},
                            {typeId2:16,typeId1:2,typeName2:'小学教辅'},
                            {typeId2:17,typeId1:2,typeName2:'初中教辅'},
                            {typeId2:18,typeId1:2,typeName2:'高中教辅'},
                            {typeId2:19,typeId1:2,typeName2:'课外读物'},
                            {typeId2:20,typeId1:2,typeName2:'工具书'},
                            {typeId2:21,typeId1:2,typeName2:'成人教育'},
                            {typeId2:22,typeId1:2,typeName2:'教学教具'},
                            {typeId2:23,typeId1:2,typeName2:'学生字帖'},
                            {typeId2:24,typeId1:2,typeName2:'外语'},
                            {typeId2:25,typeId1:2,typeName2:'教育理论'},
                            {typeId2:26,typeId1:2,typeName2:'地图'},
                            {typeId2:27,typeId1:2,typeName2:'文娱体育'},
                            {typeId2:28,typeId1:2,typeName2:'语言文字'},
                        ]},
                    {typeId3:3,typeName1:'文学',typeItem:[
                            {typeId2:29,typeId1:3,typeName2:'古典文学'},
                            {typeId2:30,typeId1:3,typeName2:'四大名著'},
                            {typeId2:31,typeId1:3,typeName2:'历史古籍'},
                            {typeId2:32,typeId1:3,typeName2:'民间文学'},
                            {typeId2:33,typeId1:3,typeName2:'现当代文学'},
                            {typeId2:34,typeId1:3,typeName2:'名著读物'},
                            {typeId2:35,typeId1:3,typeName2:'名人传记'},
                            {typeId2:36,typeId1:3,typeName2:'科幻小说'},
                            {typeId2:37,typeId1:3,typeName2:'武侠小说'},
                            {typeId2:38,typeId1:3,typeName2:'幽默漫画'},
                            {typeId2:39,typeId1:3,typeName2:'作家作品集'},
                            {typeId2:40,typeId1:3,typeName2:'小说'},
                            {typeId2:41,typeId1:3,typeName2:'诗歌散文'},
                            {typeId2:42,typeId1:3,typeName2:'外国文学'},
                        ]},
                    {typeId3:4,typeName1:'科技',typeItem:[
                            {typeId2:43,typeId1:4,typeName2:'轻工'},
                            {typeId2:44,typeId1:4,typeName2:'机械工程'},
                            {typeId2:45,typeId1:4,typeName2:'电子技术'},
                            {typeId2:46,typeId1:4,typeName2:'水利电力'},
                            {typeId2:47,typeId1:4,typeName2:'基础科学'},
                            {typeId2:48,typeId1:4,typeName2:'计算机'},
                            {typeId2:49,typeId1:4,typeName2:'建筑'},
                            {typeId2:50,typeId1:4,typeName2:'农业科技'},
                            {typeId2:51,typeId1:4,typeName2:'交通运输'},
                            {typeId2:52,typeId1:4,typeName2:'计量标准'},
                            {typeId2:53,typeId1:4,typeName2:'冶金、地质'},
                            {typeId2:54,typeId1:4,typeName2:'综合工具书'},
                            {typeId2:55,typeId1:4,typeName2:'化工'},
                            {typeId2:56,typeId1:4,typeName2:'汽摩维修'},
                            {typeId2:57,typeId1:4,typeName2:'卫生保健'},
                            {typeId2:58,typeId1:4,typeName2:'中医'},
                            {typeId2:59,typeId1:4,typeName2:'西医'},
                        ]},
                    {typeId3:5,typeName1:'童书',typeItem:[
                            {typeId2:60,typeId1:5,typeName2:'幼儿启蒙（0-6岁）'},
                            {typeId2:61,typeId1:5,typeName2:'智力开发（0-6岁）'},
                            {typeId2:62,typeId1:5,typeName2:'中外名著（0-6岁）'},
                            {typeId2:63,typeId1:5,typeName2:'注音读物（0-6岁）'},
                            {typeId2:64,typeId1:5,typeName2:'幼儿绘本（0-6岁）'},
                            {typeId2:65,typeId1:5,typeName2:'幼儿童书（0-6岁）'},
                            {typeId2:66,typeId1:5,typeName2:'注音读物（6岁以上）'},
                            {typeId2:67,typeId1:5,typeName2:'童话故事（6岁以上）'},
                            {typeId2:68,typeId1:5,typeName2:'儿童文学（6岁以上）'},
                            {typeId2:69,typeId1:5,typeName2:'少儿读物（6岁以上）'},
                            {typeId2:70,typeId1:5,typeName2:'兴趣培养（6岁以上）'},
                            {typeId2:71,typeId1:5,typeName2:'少儿科普（6岁以上）'},
                            {typeId2:72,typeId1:5,typeName2:'少儿英语（6岁以上）'},
                            {typeId2:73,typeId1:5,typeName2:'少儿童书（6岁以上）'},
                            {typeId2:74,typeId1:5,typeName2:'点读图书'},
                        ]},
                    {typeId3:6,typeName1:'大中专教材',typeItem:[
                            {typeId2:75,typeId1:6,typeName2:'文科'},
                            {typeId2:76,typeId1:6,typeName2:'理科'},
                            {typeId2:77,typeId1:6,typeName2:'公共课'},
                            {typeId2:78,typeId1:6,typeName2:'高职'},
                            {typeId2:79,typeId1:6,typeName2:'中职'},
                        ]},
                    {typeId3:7,typeName1:'艺术',typeItem:[
                            {typeId2:80,typeId1:7,typeName2:'美术'},
                            {typeId2:81,typeId1:7,typeName2:'设计'},
                            {typeId2:82,typeId1:7,typeName2:'收藏'},
                            {typeId2:83,typeId1:7,typeName2:'年历'},
                            {typeId2:84,typeId1:7,typeName2:'书法'},
                            {typeId2:85,typeId1:7,typeName2:'音乐'},
                        ]},
                    {typeId3:8,typeName1:'家居休闲',typeItem:[
                            {typeId2:86,typeId1:8,typeName2:'家居生活指南'},
                            {typeId2:87,typeId1:8,typeName2:'家居装修'},
                            {typeId2:88,typeId1:8,typeName2:'家居风水'},
                            {typeId2:89,typeId1:8,typeName2:'收藏/鉴赏'},
                            {typeId2:90,typeId1:8,typeName2:'消遣游戏'},
                            {typeId2:91,typeId1:8,typeName2:'私家车'},
                            {typeId2:92,typeId1:8,typeName2:'时尚'},
                        ]},
                    {typeId3:9,typeName1:'期刊杂志',typeItem:[
                            {typeId2:93,typeId1:9,typeName2:'健康体育'},
                            {typeId2:94,typeId1:9,typeName2:'影视娱乐'},
                            {typeId2:95,typeId1:9,typeName2:'政治军事'},
                            {typeId2:96,typeId1:9,typeName2:'时尚生活'},
                            {typeId2:97,typeId1:9,typeName2:'文学'},
                            {typeId2:98,typeId1:9,typeName2:'社会万象'},
                            {typeId2:99,typeId1:9,typeName2:'电脑与网络'},
                            {typeId2:100,typeId1:9,typeName2:'管理财经'},
                        ]},
                    {typeId3:10,typeName1:'烹饪美食',typeItem:[
                            {typeId2:101,typeId1:10,typeName2:'中华菜系'},
                            {typeId2:102,typeId1:10,typeName2:'主食食谱'},
                            {typeId2:103,typeId1:10,typeName2:'养生与美容'},
                            {typeId2:104,typeId1:10,typeName2:'厨房秘笈'},
                            {typeId2:105,typeId1:10,typeName2:'烘焙食品'},
                            {typeId2:106,typeId1:10,typeName2:'药膳食疗'},
                            {typeId2:107,typeId1:10,typeName2:'茶酒饮品'}
                        ]}
                ],
                // cartHeight:'100px'
                //频道页导航
            }
        },
        methods:{
            ...mapActions(["updateShoppingCart", "checkAll", "deleteShoppingCart"]),
            deleteItem(e, id, bookId) {
                this.deleteShoppingCart(id);
            },
            returnSearch(){
                this.$router.push('/search')
            }



        },
        computed:{

            ...mapGetters([
                "getShoppingCart",
                "getTotalPrice",
                "getPrice"
            ]),
            cartHeight(){
                return this.getShoppingCart.length*91+90+'px'
            }

        },
    }
</script>

<style scoped lang="less">

    .mainBanner{
        overflow: hidden;
        min-width: 1210px;
        &>a{
            background-image: url(http://static.winxuancdn.com/topic/subject/202002/20ck/2000-60-3.jpg?202003151708);
            height: 60px;
            display: block;
            width: 100%;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    .search-box{
        padding-top: 23px;
        width: 1210px;
        margin: auto;
        &>div{
            float: left;
        }

    }
    #searchText{
        border-image: none;
        border-style: solid none solid solid;
        border-width: 2px 0 2px 2px;
        color: #b3b3b3;
        font-size: 14px;
        height: 16px;
        padding: 8px;
        width: 396px;
    }
    #search{
        background: #e43c3f;
        border: 0;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        height: 36px;
        line-height: 36px;
        text-align: center;
        width: 80px;
        vertical-align: top;
    }
    .search{
        height: 85px;
    }
    .logo{
       width: 330px;
       text-align: left;
    }
    .search-content{
        padding-top: 4px;
    }
    .hotSearch{
        font-size: 12px;
        text-align: left;
        color: #999;
        height: 14px;
        line-height: 14px;
        overflow: hidden;
        padding-top: 6px;
        &>a{
            margin: 0 6px;
            color: #F00;
            &>span>img{
                vertical-align: middle;
                margin: 2px;
            }
        }
    }
    .allType{
        position: relative;
    }
    #showBottom{
        margin-left: 40px;
    }

    .nav{
        margin-top: 25px;
        background-color: rgb(228, 57, 60);
        height: 40px;
        width: 100%;
        &>div{
            width: 1210px;
            margin: auto;
            position: relative;
            &>li{
                float: left;
                line-height: 40px;
                font-size: 14px;
                color: #fff;
                font-weight: 700;

            }
            &>li:first-child{
                width: 210px;
                text-align: left;
                background-color: #c91518;
                box-sizing: border-box;
            }
        }
    }
    .nav a{
        color: #fff;
        display: inline-block;
        padding: 0 30px;
    }
    .nav-item{
        position: absolute;
        width: 210px;
        z-index: 99;
        left: 0;
        border: 2px solid #e4393c;;
        top: 40px;
        display: none;
        box-sizing: border-box;
        background: #fafafa;
        &>li{
            height: 55px;
            box-sizing: border-box;
            width: 206px;
            border-bottom: 1px dotted #d6d6d6;
            background-color: #f9f9f9;
            text-align: left;
            position: relative;
            & h3{
                height: 30px;
                &>a{
                    border-right: 0 solid #d6d6d6
                }
            }
            & a{
                color: black;
                font-size: 12px;
                padding: 0 8px;
                margin: 5px 0;
                border-right: 1px solid #d6d6d6;
            }
            &>i{
                position: absolute;
               top: 5px;
                right: 5px;
                color: #e4393c;
            }
        }
    }
    .otherNav{
        position: absolute;
        left: 206px;
        top: -1px;
        width: 361px;
        /*border: 1px solid #d5d5d5;*/
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
        z-index: 99;
        padding: 15px 18px;
        display: none;
        background-color: white;
    }

    /*.mainItem:hover{*/
    /*    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);*/
    /*    border: 1px solid #d5d5d5;*/
    /*}*/
    .mainItem:hover{
        background-color: white;
    }
    .mainItem:hover .redColor{
       color: #c91518;
        font-size: 14px;
    }
    .mainItem:hover .otherNav{
        display: block;
    }
    .otherNav:hover{
        display: block;
    }
    .allType:hover + .nav-item{
        display: block;
    }
    .nav-item:hover{
        display: block;
    }
    .cart{
        margin-top: 5px;
        margin-left: 111px;
        text-align: center;
        &>div{
            float: left;
            width: 135px;
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
        }
        &>div:last-child{
            position: relative;
            background-color:  #e43c3f;
            color: white;
            font-size: 14px;
            cursor: pointer;
            i{
                font-size: 18px;
            }
        }
        &>div:first-child{
            background: #f7f7f7;
            border: 1px solid #efefef;
            font-size: 14px;
            margin-right: 5px;
        }

    }
    .myCartList{
        padding-top: 20px;
        width: 275px;
        position: absolute;
        top: 30px;
        left: -140px;
        box-sizing: border-box;
        background-color: white;
        z-index: 100;
        height: 0;
        transition: height .5s;
        overflow: hidden;
        img{
            width: 60px;
            height: 60px;
        }
    }
    .myCart:hover .myCartList{
        height: var(--height);
    }
    .myCart:hover .empty{
        height: 50px;

    }
    .empty{
        height: 0;
        color: black;
        overflow: hidden;
        line-height: 25px;
        transition: height .5s;
        font-size: 12px;

        box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
    }
    .myCartItem{
        height: 70px;
        margin: 10px 20px;
        color: black;
        border-bottom: 1px solid #b0b0b0;;
        &>div{
            float: left;
            height: 70px;
            line-height: 70px;
        }
        &>div:last-child{
            border: 0;
        }
        &>div:nth-child(2){
            width: 70px;
        }
        &>div:last-child{
           margin-left: 20px;
        }
    }
    #buyIt{
        width: 130px;
        padding: 0;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        color: #f5f5f5;
        background: #e43c3f;
        display: block;
    }
    .cart-total{
        color: black;
        padding: 15px 20px;
        background: #fafafa;
        height: 70px;
        box-sizing: border-box;
        p{
            height: 20px;
            line-height: 20px;
        }
        &>div{
            width: 50%;
            float: left;
            &>p:last-child{
                color:#e43c3f ;
            }
        }
    }

</style>