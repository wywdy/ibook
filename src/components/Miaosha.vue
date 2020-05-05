<template>

    <el-container>
        <el-header>
            <el-row class="header-content">
                <el-col :span="9">
                    <!--        过去三天的时间-->
                    <div class="formerly">
                        <div v-on:click="getBook(1)">
                            <div>00:00</div>
                            <div>/已结束/</div>
                        </div>
                        <div v-on:click="getBook(2)">
                            <div>00:00</div>
                            <div>/已结束/</div>
                        </div>
                        <div v-on:click="getBook(3)">
                            <div>00:00</div>
                            <div>/已结束/</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6" class="headermiaoshatime">
                    <div class="time">00:00</div>
                    <span>···抢购进行中···</span>
                    <div><span>距结束:</span> <span>{{hours}}</span>: <span>{{minutes}}</span>: <span>{{seconds}}</span>
                    </div>
                </el-col>
                <el-col :span="9" class="header-content-right">

                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row v-for="item in getbookonetwothreelist" :key="item.id">
                <el-col class="threelistbook" :span="18" :offset="3">
                    <el-row>
                        <el-col :span="8" class="bookimgbox">
                            <router-link to="/goodsDetail"><img :src="item.imgUrl" alt=""></router-link>
                            <div class="miaoshatextbox">
                                <img src="../assets/images/miaosha/msth1.png" alt="">
                                <div class="miaoshatext"><span>秒杀</span><span>特惠</span></div>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="bookdescription">
                                <h2>
                                    <router-link to="#" ><span v-text="item.name" style="display:inline-block;width: 100%"></span></router-link>
                                </h2>
                                <p v-text="item.description"></p>
                                <div>
                                    <span>距结束还剩</span>
                                    <span>{{hours}}</span>时
                                    <span>{{minutes}}</span>分
                                    <span>{{seconds}}</span>秒
                                </div>
                                <div>
                                    <div>
                                        <span>￥<span v-text="item.shopPrice"></span></span>
                                        <del>￥<span v-text="item.sourcePrice"></span></del>
                                    </div>
                                    <span v-on:click="addCar(item.id,$event)" ><i class="el-icon-shopping-cart-full"></i>加入购物车</span>

<!--                                      <div>-->
<!--                                          <div>提示 <i class="el-icon-close"></i></div>-->
<!--                                          <div>-->
<!--                                              <div>已成功加入购物车</div>-->
<!--                                              <div>购物车共有{{carProductCount}}件商品，合计：￥{{}}</div>-->
<!--                                          </div>-->
<!--                                          <div></div>-->
<!--                                      </div>-->
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18" :offset="3">
                <div class="remainbook">
                    <div v-for="item in getbookremainlist" :key="item.id">
                        <div class="bookimgbox">
                            <router-link to="#"><img :src="item.imgUrl" alt=""></router-link>
                            <div class="miaoshatextbox">
                                <img src="../assets/images/miaosha/msth1.png" alt="">
                                <div class="miaoshatext"><span>秒杀</span><span>特惠</span></div>
                            </div>
                        </div>

                        <h3>
                            <router-link to="#" v-text="item.name"></router-link>
                        </h3>
                        <div>
                            <span>￥<span v-text="item.shopPrice"></span></span>
                            <del>￥<span v-text="item.sourcePrice"></span></del>
                        </div>
                        <div>
                        <span v-on:click="addCar(item.id,$event)"><i class="el-icon-shopping-cart-full"></i>加入购物车</span>

                        </div>
                    </div>
                </div>
                </el-col>
            </el-row>

        </el-main>

    </el-container>
</template>

<script>

    export default {
        name: "Miaosha",
        data() {
            return {
                hours: '',
                minutes: '',
                seconds: '',
                getWhichDay: 0,
                getbooklist: [
                    {
                        name: "米切尔·恩德作品典藏 毛毛 时间窃贼和一个小女孩的不",
                        imgUrl: require("../assets/images/miaosha/now1.jpg"), description: "文轩网少儿图书特惠",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 0
                    },
                    {
                        name: "摩根财团：美国一代银行王朝和现代金融业的崛起:1838~1990",
                        imgUrl: require("../assets/images/miaosha/now2.jpg"), description: "1.亚投行首任行长金立群“" +
                            "历时二载，凡三校”呕心校译，撰写万字推荐序，堪称“美国金融史靠前书”。" +
                            "2.华尔街投行摩根大通（JP Morgan）董事长杰米？戴蒙作序推荐。3.美国图书优选奖“国家图\n" +
                            "疫情期间，购书卡&政企书目服务请点击页面右侧在线客服 （09:30-17:00）",
                        shopPrice: 104.9, sourcePrice: 198.0, id: 1
                    },
                    {
                        name: "再见了，坏习惯。我能管好我自己、等等•成长路上没烦",
                        imgUrl: require("../assets/images/miaosha/now3.jpg"), description: "",
                        shopPrice: 25.4, sourcePrice: 138.0, id: 2
                    },
                    {
                        name: "中国式的情与爱",
                        imgUrl: require("../assets/images/miaosha/now4.jpg"), description: "",
                        shopPrice: 25.9, sourcePrice: 48.0, id: 3
                    },
                    {
                        name: "妞妞:一个父亲的札记/周国平",
                        imgUrl: require("../assets/images/miaosha/now5.jpg"), description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 4
                    },
                    {
                        name: "北上",
                        imgUrl: require("../assets/images/miaosha/now6.jpg"), description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 5
                    },
                    {
                        name: "镖人（2）",
                        imgUrl: require("../assets/images/miaosha/now7.jpg"), description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 6
                    },
                    {
                        name: "上海外滩建筑地图",
                        imgUrl: require("../assets/images/miaosha/now8.jpg"), description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 7
                    },
                    {
                        name: "做孩子最好的英语学习规划师：中国儿童英语习得全路线图",
                        imgUrl: require("../assets/images/miaosha/now9.jpg"), description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 8
                    },

                ],
                getbookonetwothree: [],
                getbookremain: []
            }
        },
        computed: {
            getbookonetwothreelist() {
                this.getbookonetwothree = this.getbookonetwothree.concat(this.getbooklist.slice(0, 3))
                // console.log(this.getbookonetwothree)
                return this.getbookonetwothree

            },
            getbookremainlist() {
                this.getbookremain = this.getbookremain.concat(this.getbooklist.slice(3,))
                return this.getbookremain
            }
        },
        mounted() {
            console.log(this.$route.query.id)
            console.log(this.$route.params.id)
            let that = this
            setInterval(function () {
                //得到当天的时间
                let nowdatetime = new Date()
                let year = nowdatetime.getFullYear()//获得当年是哪年
                let month = nowdatetime.getMonth()//获得是几月
                let nowday = nowdatetime.getDate() //获得当天是第几天.就是几号
                let hours = nowdatetime.getHours()//获得当天几点
                let minutes = nowdatetime.getMinutes()//获得当天几点多少分钟
                let seconds = nowdatetime.getSeconds()//获得当天是几点几分几秒
                //得到当天的第二天
                let secondDay = nowday + 1
                let zerotime = new Date(year, month, secondDay, 0, 0, 0)

                let leadTime = zerotime.getTime() - nowdatetime.getTime()//得到距离第二天零点时间的差
                let leadHours = leadTime / 1000 / 3600
                let leadMinutes = leadTime / 1000 % 3600 / 60
                let leadSeconds = leadTime / 1000 % 3600 % 60

                that.hours = Math.floor(leadHours)
                that.minutes = Math.floor(leadMinutes)
                that.seconds = Math.floor(leadSeconds)
                if (that.hours < 10) {
                    if (that.hours === 0) {
                        that.hours = "00"
                    } else {
                        that.hours = "0" + that.hours
                    }

                }
                if (that.minutes < 10) {
                    if (that.minutes === 0) {
                        that.minutes = "00"
                    } else {
                        that.minutes = "0" + that.minutes
                    }

                }
                if (that.seconds < 10) {
                    that.seconds = "0" + that.seconds

                }

            }, 1000)
            that.getjavabook(0)
            // that.getBook(that.getWhichDay)
        },
        methods: {
            getBook(n) {//获取当天前几天的书籍
                let that=this
                that.getjavabook(n)
            },
            getjavabook(n){//获取后台的书籍

            },
            //加入购物车
            addCar(pid,e){
             console.log(e)
             console.log(pid)
               this.$axios({
                   url:'/api/addcar',
                   method: 'get',
                   params: {"pid":pid}
               }).then(function (res) {

               })
            }

        }


    }
</script>

<style scoped lang="less">
    .cart {
        display: flex;
        flex-direction: row;
        padding-left: 15px;
        margin-top: 25px;
        align-items: center;

        & > div {
            padding-right: 10px;
        }

        & .cart-buy .el-button {
            color: #ff2832;
            background-color: #ffedee;
            border: 1px solid #ff2832;
            font-size: 16px;
            padding: 12px 15px;

            &:hover, &:active {
                color: #ff2832;
                background-color: rgba(255, 192, 203, 0.69);
            }
        }
    }

    .cart-add .el-button {
        color: white;
        background-color: #ff2832;
        font-size: 16px;
        padding: 12px 15px;

        &:hover, &:active {
            color: white;
            background-color: #f52630;
        }
    }

    .el-header {
        height: 210px !important;
        width: 100%;
        background-image: url("../assets/images/miaosha/bg.jpg");
        background-position: center;
        padding: 0;

    }

    .header-content {
        margin-top: 110px;

        & > .header-content-right {
            height: 90px;
            border-radius: 10px 0 0 10px;
            background-color: #45C0E2;
        }
    }

    .formerly {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        background-color: #1E0040;
        border-radius: 0 10px 10px 0;
        padding: 15px 0;

        & > div {
            flex-basis: 26%;
            color: white;
            font-size: 25px;
            font-weight: bold;
            line-height: 30px;

            & > div:last-child {
                font-size: 16px !important;
                font-weight: lighter !important;

            }

        }
    }

    .headermiaoshatime {
        margin-top: -20px;

        & > div:first-child {
            font-size: 50px;
            font-weight: bolder;
            color: white;

        }

        & > span {
            background-color: white;
            padding: 3px;
        }

        & > div:nth-of-type(2) {
            color: black;
            font-size: 14px;
            margin-top: 10px;

            & > span {
                color: white !important;

                &:nth-child(1) {
                    background-color: rgba(0, 0, 0, 0) !important;
                }

                background-color: black;
                font-size: 16px !important;
                padding: 3px;
                margin: 0 10px;
            }
        }
    }

    .el-main {
        background-color: #E4393C;
        /*height: 1000px;*/
    }

    .threelistbook {

        height: 360px;
        background-color: white;
        margin-top: 10px;
        padding: 40px 5px;
        /*margin-bottom:15px ;*/
    }

    .bookimgbox {
        position: relative;
        left: 0px;
        top: 0px;

        & img {
            width: 284px;
        }

        & .miaoshatextbox {
            width: 105px;
            height: 105px;
            background-image: url("../assets/images/miaosha/msth1.png");
            position: absolute;
            top: -30px;
            left: 6px;

            & > img {
                width: 100%;
                height: 100%;
            }

            & .miaoshatext {
                width: 100%;
                height: 100%;
                font-size: 18px;
                font-weight: bold;
                color: white;
                position: absolute;
                left: 0px;
                top: 0px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;

            }

        }
    }

    .bookdescription {
        height: 288px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 50px;
        &>h2{
            width: 100%;
            padding: 0px;
            text-align: left!important;
        }
        & > h2 > a {
            display: inline-block;
            text-decoration: none;
            color: black;
            width: 100%;
            text-align: left!important;
        }
        &>P{
            text-align: left!important;
        }

        & > div:nth-of-type(1) {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;

            & > span {
                font-size: 18px;
                font-weight: bold;
                padding-right: 20px;

                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    font-size: 30px !important;
                    color: red !important;
                    padding: 0 20px !important;
                    font-weight: lighter !important;
                }

            }

        }

        & > div:nth-of-type(2) {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;

            & > div:nth-child(1) {
                & > span {
                    color: red;
                    margin-right: 20px;
                    font-size: 20px;

                    & > span {
                        font-size: 35px !important;
                        font-weight: bold;
                    }
                }

            }

            & > span {
                /*width: 100px;*/
                height: 35px;
                font-size: 30px;
                color: white;
                background-color: #F61336;
                border-radius: 5px;
                padding: 5px 8px;
                text-align: center;
                line-height: 35px;

                & > i {
                    margin-right: 15px;
                }
            }
        }

    }
   .remainbook{
       width: 100%;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       justify-content: space-between;
       align-content: center;
       margin-top: 10px;
       &>div {
           flex-basis: 29%;
           height: 456px;
           display: flex;
           flex-direction: column;
           justify-content: space-around;
           align-items: flex-start;
           background-color: white;

           margin-bottom: 10px;
           padding: 28px 15px 20px;
           &>h3{
               padding: 0px;
               width: 100%;
               text-align: left!important;
           }
           & > h3 > a {
               text-decoration: none;
               color: black;
               width: 100%;
               text-align: left!important;
           }

           & >div:nth-of-type(2){
                   & > span {
                       color: red;
                       margin-right: 20px;
                       font-size: 20px;

                       & > span {
                           font-size: 35px !important;
                           font-weight: bold;
                       }
                   }

           }
           & >div:nth-of-type(3){
               width: 100%;
               text-align: center;
               & > span {
                   /*width: 100px;*/
                   height: 35px;
                   font-size: 30px;
                   color: white;
                   background-color: #F61336;
                   border-radius: 5px;
                   padding: 5px 20px;
                   text-align: center;
                   line-height: 35px;

                   & > i {
                       margin-right: 15px;
                   }
               }
           }

       }
   }
</style>