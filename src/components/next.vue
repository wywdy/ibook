<template>
    <div class="container">
        <div class="box">
            <div class="title">
                <div class="mainTitle"><h3>特色推荐</h3></div>
                <div class="tab">
                    <!--                    <div  @mouseover="signChange(0)">预售书</div>-->
                    <!--                    <div @mouseover="signChange(1)">新书预定</div>-->
                    <!--                    <div @mouseover="signChange(2)">精品套装</div>-->
                    <!--                    <div @mouseover="signChange(3)">文轩定制</div>-->
                    <!--                    <div @mouseover="signChange(4)">特价书</div>-->
                    <div v-for="(item,index) in bookData" @mouseover="signChange(index)">{{item.title}}</div>
                    <div class="sign" ref="sign"><b></b></div>
                </div>
            </div>
            <div class="content">
                <div v-for="(item,index) in bookData" :key="index" :class="{'displayBlock':isShow[index]}">
                    <div>
                        <div v-for="(bItem,idx) in bookData[index].data" class="bookItem">
                            <a href="">
                                <div>
                                    <div class="img">
                                        <img :src="bItem.imgSrc" alt="">
                                    </div>
                                    <div class="bookName">{{bItem.bookName}}</div>
                                    <div class="bookPrice">
                                        <span>￥{{bItem.nowPrice}}</span> <span>￥{{bItem.originPrice}}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="rightHot">
                        <div>
                            {{item.title}}
                        </div>
                        <div>
                            <div v-for="(rightItem,id) in recommendHot" :key="id" class="rightItem">
                                <a href="">
                                    <div class="rightImg">
                                        <img :src="rightItem.data[id].imgSrc" alt="">
                                    </div>
                                    <div class="rightContent">
                                        <div class="rightBName">{{rightItem.data[id].bookName}}</div>
                                        <div class="bookPrice"><span>{{rightItem.data[id].nowPrice}}</span><span>{{rightItem.data[id].originPrice}}</span>
                                        </div>
                                    </div>
                                </a>

                            </div>
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
        data() {
            return {
                isShow: [true, false, false, false, false],
                display: 'display:block',
                bookData: [{
                    title: "预售书",
                    data: [{
                        imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                        bookName: "82年生的金智英",
                        originPrice: "31",
                        nowPrice: "45"
                    },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "81年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                    ]
                }, {
                    title: "新书预定",
                    data: [{
                        imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                        bookName: "82年生的金智英",
                        originPrice: "31",
                        nowPrice: "45"
                    },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                    ]
                }, {
                    title: "精品套装",
                    data: [{
                        imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                        bookName: "82年生的金智英",
                        originPrice: "31",
                        nowPrice: "45"
                    },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "83年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                    ]
                }, {
                    title: "文轩定制",
                    data: [{
                        imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                        bookName: "82年生的金智英",
                        originPrice: "31",
                        nowPrice: "45"
                    },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "84年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                    ]
                }, {
                    title: "特价书",
                    data: [{
                        imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                        bookName: "82年生的金智英",
                        originPrice: "31",
                        nowPrice: "45"
                    },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "84年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                        {
                            imgSrc: "//img0.winxuancdn.com/4171/1201894171_49_1_original_800x800.jpg?1564648841790&imageMogr2/thumbnail/160x160",
                            bookName: "82年生的金智英",
                            originPrice: "31",
                            nowPrice: "45"
                        },
                    ]
                }],
                recommendHot: [{
                    title: "预售书热销榜",
                    data: [{
                        bookName: '肖申克的救赎（修订版）',
                        imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                        originPrice: "26.6",
                        nowPrice: "38.00"
                    },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        }
                    ]
                }, {
                    title: "新书速递",
                    data: [{
                        bookName: '肖申克的救赎（修订版）',
                        imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                        originPrice: "26.6",
                        nowPrice: "38.00"
                    },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        }
                    ]
                }, {
                    title: "精品套装",
                    data: [{
                        bookName: '肖申克的救赎（修订版）',
                        imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                        originPrice: "26.6",
                        nowPrice: "38.00"
                    },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        }
                    ]
                }, {
                    title: "文轩定制",
                    data: [{
                        bookName: '肖申克的救赎（修订版）',
                        imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                        originPrice: "26.6",
                        nowPrice: "38.00"
                    },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        }
                    ]
                }, {
                    title: "特价书",
                    data: [{
                        bookName: '肖申克的救赎（修订版）',
                        imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                        originPrice: "26.6",
                        nowPrice: "38.00"
                    },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        }
                    ]
                }
                ],
                inHtml: "",
            }
        },
        methods: {
            signChange(index) {
                let left = 210 + 100 * index;
                let oSign = this.$refs.sign;
                oSign.style.left = left + 'px';
                //原始做法
                // let oBooks=document.querySelectorAll('.bookBox');
                // for (let i=0;i<oBooks.length;i++){
                //     oBooks[i].style.display='none'
                // }
                // oBooks[index].style.display='block';
                //vue做法
                for (let a in this.isShow) {
                    this.$set(this.isShow, a, false);
                }
                this.$set(this.isShow, index, true);
            },

        }
    }
</script>

<style scoped lang="less">
    .box {
        width: 1210px;
        height: 580px;
        margin: 20px auto;
    }

    .title {
        position: relative;

        height: 50px;

    }

    .title > div {
        float: left;

    }

    .mainTitle {
        width: 200px;
        font-weight: bolder;
        font-size: 15px;

        & > h3 {
            display: table-cell;
            vertical-align: bottom;
            height: 30px;
        }
    }

    .tab > div {
        width: 100px;
        text-align: center;
        height: 30px;
        display: table-cell;
        vertical-align: bottom;
        cursor: pointer;
        transition: left .5s;
    }

    .sign {
        position: absolute;
        top: 30px;
        left: 210px;
        height: 8px !important;
        border-bottom: 1px solid red;

        width: 80px !important;

        & > b {
            border-style: dashed dashed solid;
            border-width: 4px;
            position: absolute;
            top: 0;
            left: 37px;
            border-color: transparent transparent #e4393c;
        }
    }

    .content > div {
        display: none;

        & > div {
            float: left;
        }

        & > div:first-child {
            width: 1000px;
        }
    }

    .rightHot {
        width: 210px;
        border: 1px solid #edecec;
        box-sizing: border-box;
        &>div:first-child{
            height: 28px;
            line-height: 28px;
            background: #f7f7f7;
            border-bottom: 1px solid #edecec;
            text-align: center;
        }
    }

    .content {
        height: 530px;
    }

    /*.content>div:first-child{*/
    /*    display: block;*/
    /*}*/
    .displayBlock {
        display: block !important;
    }

    .bookItem {
        float: left;
        width: 178px;
        height: 259px;
        padding: 0 34px;
        border: 1px solid #f1f1f1;
        margin: 0 -1px -1px 0;
        position: relative;
       a{
           color: black;
       }
        & img {
            width: 160px;
            height: 160px;
        }

        & .img {
            width: 160px;
            height: 160px;
            margin-bottom: 8px;
            padding-top: 10px;
        }

        & .bookName {
            height: 40px;
            line-height: 20px;
            margin-bottom: 4px;
        }

    }

    .bookPrice > span:first-child {
        color: #db2a41;
        font-size: 14px;
        float: left
    }

    .bookPrice > span:last-child{
        color: #b5b2b3;
        text-decoration: line-through;
        float: right;
        font-size: 14px;
    }

    .rightItem {
        a{

            display: flex;
        }
        display: flex;
        border-bottom: 1px dotted #dcdcdc;
        padding: 8px 0 7px;

        & .rightImg {
            width: 60px;
            height: 60px;
            padding: 8px;
            margin-right: 4px;
            background: #fff;
        }

        & .rightBName {
            height: 36px;
            line-height: 18px;
            font-size: 13px;
            margin-bottom: 8px;
            padding-top: 8px;
        }
        & .bookPrice>span:last-child{
            float: left !important;
            margin-left: 5px;
        }

    }


</style>