<template>
   <div class="bookContainer">
       <div class="SearchBreadcrumb">
           <el-breadcrumb separator-class="el-icon-arrow-right">
               <el-breadcrumb-item :to="{ path: '/' }">图书</el-breadcrumb-item>
               <el-breadcrumb-item>搜索 “ {{searchWords}} ”</el-breadcrumb-item>
           </el-breadcrumb>
       </div>
       <div class="SearchTable">
           <div class="sg-selectbox">
               <dl class="sg-selectbox-title">
                   <dd>
                       <span>“ {{searchWords}} ”</span>找到{{searchNum}}件相关商品
                   </dd>
               </dl>
               <dl class="sg-selectbox-row">
                   <dd style="font-weight: 700">图书</dd>
                   <dd class="bookTypeList" v-for=" item in bookType"><a href="#" :title="item">{{item}}</a></dd>
               </dl>
               <dl class="sg-selectbox-row">
                   <dd style="font-weight: 700">折扣</dd>
                   <dd class="bookTypeList" v-for=" item in discountType"><a href="#" :title="item" ref="discountName">{{item}}</a></dd>
               </dl>
               <dl class="sg-selectbox-row">
                   <dd style="font-weight: 700">价格</dd>
                   <dd class="bookTypeList" v-for=" item in priceType"><a href="#" :title="item" ref="priceName">{{item}}</a></dd>
               </dl>
               <dl class="sg-selectbox-row">
                   <dd class="sortType" ref="Synthetical"><a href="#">综合排序</a></dd>
                   <dd class="sortType"><a href="#">销量<i class="icon el-icon-caret-bottom"></i></a></dd>
                   <dd class="sortType"><a href="#">价格<i class="icon el-icon-caret-top"></i></a></dd>
                   <dd class="sortType"><a href="#">折扣<i class="icon el-icon-caret-top"></i></a></dd>
                   <dd class="sortType"><a href="#">出版时间<i class="icon el-icon-caret-bottom"></i></a></dd>
                   <dd class="sortType"><a href="#">好评率<i class="icon el-icon-caret-bottom"></i></a></dd>
                   <dd class="sortType"><a href="#">只显示有货</a></dd>
                   <dd class="sortType" @click="changeLayOutOfGrid" ref="LayoutGrid"><a href="#"><i class="icon el-icon-menu"></i>网格</a></dd>
                   <dd class="sortType" @click="changeLayOutOfList" ref="LayoutList"><a href="#"><i class="icon el-icon-s-unfold"></i>列表</a></dd>
               </dl>
           </div>
       </div>
<!--      网格形式筛选框-->
       <div class="SearchBox" v-if="isGrid&&!isList">
           <div class="bookInfo" v-for="item in bookList">
               <div class="bookInfoImg">
                   <a href="#"><img :src="item.bImg" alt=""></a>
               </div>
               <div class="bookInfoName"><a href="#">{{item.bName}}</a></div>
               <div class="starEval">
                   <el-rate
                           v-model="item.evaluate"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                   </el-rate>
               </div>
               <div class="bookInfoPrice">
                   <span class="sell">￥ {{item.selling}}</span>
                   <span class="origin">￥ {{item.pricing}}</span>
               </div>
               <div class="addCarts">
                   <el-button size="mini"><i class="icon el-icon-shopping-cart-2"></i>加入购物车</el-button>
               </div>
           </div>
       </div>
<!--      列表形式筛选框-->
       <div class="searchListBox" v-else>
           <div class="bookInfo" v-for="item in bookList">
                <div class="bookInfoImg">
               <a href="#">
                   <img :src="item.bImg" alt="">
               </a>
           </div>
                <div class="bookbasicInfo">
                    <div class="bookName">{{item.bName}}</div>
                    <div class="price">
                        <span class="sell">￥ {{item.selling}}</span>
                        <span class="origin">￥ {{item.pricing}}</span>
                        <span class="discount">({{item.discount}})</span>
                    </div>
                    <div class="writer">作者<span>：</span><span>{{item.writer}}</span></div>
                    <div class="publish">出版社 <span>：</span><span>{{item.publish}}</span></div>
                    <div class="publishTime">出版时间 <span>：</span><span>{{item.publishDate}}</span></div>
                    <div class="evaluate">用户评价 <span>：</span>
                        <el-rate
                                v-model="item.evaluate"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                        <span class="evalNum">已有{{item.evalNum}}人评价</span>
                    </div>
                    <div class="btn">
                        <el-button class="addCarts" size="mini"><i class="icon el-icon-shopping-cart-2"></i>加入购物车</el-button>
                        <el-button class="addCollection" size="mini" plain><i class="icon el-icon-plus"></i>收藏</el-button>
                    </div>
                </div>
           </div>
       </div>
<!--       分页-->
       <div>
<!--      此处是分页内容-->
       </div>
<!--       搜索框-->
       <div class="searchSomething">
           <div>
               <div class="searchSomething-img">
                <img src="../../public/img/searchBook/searchLogo.jpg" alt="">
            </div>
                   <el-input :placeholder="searchWords" size="large">
                       <el-button slot="append" icon="el-icon-search" style="color: #db2a41;">搜索</el-button>
                   </el-input>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return {
                searchWords:"王子", //搜索的词条
                searchNum:1003,//搜索到的数量
                bookType:['童书','文学','文教','社科','科技','大中专教材','艺术'],
                discountType:['0-5折','5-7折','7折以上','不限'],
                priceType:['0-9元','10-29元','30-49元','50-99元','100元以上','不限'],
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
                isGrid:true,//是否网格布局形式呈现，默认为是
                isList:false,//是否列表布局形式呈现，默认为否
                isSynthetical:true,//是否综合排列
            }
        },
        mounted() {
            for(let i=0;i<this.$refs.discountName.length;i++){
               if(this.$refs.discountName[i].innerText=='不限'){
                   this.$refs.discountName[i].style.color="#db2a41";
               }
            }
            for(let i=0;i<this.$refs.priceName.length;i++){
                if(this.$refs.priceName[i].innerText=='不限'){
                    this.$refs.priceName[i].style.color="#db2a41";
                }
            }
            //当网格形式或者列表形式的时候，该表列表上样式
            if(this.isGrid===true&&this.isList===false){
               this.$refs.LayoutGrid.style.backgroundColor='white';
               this.$refs.LayoutGrid.children[0].style.color='#db2a41';
            }
            //综合排列时，样式呈现
            if(this.isSynthetical===true){
                this.$refs.Synthetical.style.backgroundColor='white';
                this.$refs.Synthetical.children[0].style.color='#db2a41';
            }
        },
        methods:{
            changeLayOutOfGrid(){
                if(this.isGrid===false&&this.isList===true){
                    this.isGrid=true;
                    this.isList=false;
                    this.$refs.LayoutGrid.style.backgroundColor='white';
                    this.$refs.LayoutGrid.children[0].style.color='#db2a41';
                    this.$refs.LayoutList.style.backgroundColor='#f7f7f7';
                    this.$refs.LayoutList.children[0].style.color='#666666';
                }
            },
            changeLayOutOfList(){
                if(this.isGrid===true&&this.isList===false){
                    this.isGrid=false;
                    this.isList=true;
                    this.$refs.LayoutList.style.backgroundColor='white';
                    this.$refs.LayoutList.children[0].style.color='#db2a41';
                    this.$refs.LayoutGrid.style.backgroundColor='#f7f7f7';
                    this.$refs.LayoutGrid.children[0].style.color='#666666';
                }
            }
        }
    }
</script>

<style scoped lang="less">
.bookContainer{
    width: 1210px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}
.SearchBreadcrumb{
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
.SearchTable{
    margin-top: 10px;
    border: 1px solid #e8e8e8;
    &>.sg-selectbox{
        font-size: 14px;
        margin: 0;
        &>dl{
            height: 30px;
            border-bottom:1px solid #e8e8e8;
            text-align: left;
            line-height: 29px;
            margin-top: 0;
            margin-bottom: 0;
            &>dd{
                margin-left: 20px;
            }
        }
        &>dl:last-child{
            border-bottom:0px solid #e8e8e8;
            background-color: #f7f7f7;
        }
        &>.sg-selectbox-title{
            background-color: #f7f7f7;
            vertical-align: baseline;
            font-weight: 700;
            & span{
                color: #db2a41;
            }
        }
        &>.sg-selectbox-row{
            background-color: white;
            overflow: hidden;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            &>.bookTypeList{
                &>a:link,
                &>a:visited,
                &>a:hover,
                &>a:active{
                    color: #52bae8;
                    cursor: pointer;
                    text-decoration: none;
                }
            }
            &>.sortType{
                margin-left: 0px;
                border-right: 1px solid #e8e8e8;
                padding-left:20px;
                padding-right: 20px;
                background-color: #f7f7f7;
                &>a:link,
                &>a:visited,
                &>a:hover,
                &>a:active{
                    color: #666666;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
            }
            &>.sortType:hover{
                background-color: white;
            }
        }
    }
}
.SearchBox{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: flex-start;
    font-size: 12px;
    &>.bookInfo{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        border: 1px solid #ecebeb;
        width: 220px;
        height: 325px;
        &>.bookInfoImg{
            margin-top: 5px;
            width: 200px;
            height: 200px;
            background-color: #db2a41;
            margin-left: auto;
            margin-right: auto;
            & img{
                width: 100%;
                height: 100%;
            }
        }
        &>.bookInfoName{
            width: 200px;
            margin: 5px auto 5px;
            font-size: 12px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &>a:link,
            &>a:visited,
            &>a:active{
                color: #666666;
                text-decoration: none;
            }
            &>a:hover{
                color: #db2a41;
                text-decoration: underline;
            }
        }
        &>.starEval{
            width: 200px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            & .el-icon-star-on{
                margin-right: 0px!important;
                font-size: 14px;
            }
        }
        &>.bookInfoPrice{
            width: 200px;
            height: 25px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            &>.sell{
                color: #db2a41;
                font-size: 16px;
            }
            &>.origin{
                color: #b5b2b3;
                text-decoration: line-through;
            }
        }
        &>.addCarts{
            width: 200px;
            margin-right: auto;
            margin-left: auto;
            text-align: left;
            &>.el-button{
                color: #db2a41;
                background-color: #f7f7f7;
                &>span>i{
                    font-weight: 700;
                    padding-right: 10px;
                }
            }
        }
    }

}
.searchListBox{
    width: 1190px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    font-size: 14px;
        &>.bookInfo{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            margin-bottom: 20px;
            background-color: white;
            padding-bottom: 15px;
            border-bottom: 1px dotted #dbd8d9;
            &>.bookInfoImg{
                width: 200px;
                height: 200px;
                border: 1px solid #e8e8e8;
                margin-right: 15px;
                &>a>img{
                    padding-top: 5px;
                    width: 95%;
                    height: 95%;
                }
            }
            &>.bookbasicInfo{
                flex: 1;
                text-align: left;
                &>.bookName{
                    color: black;font-weight: 800;
                    padding-top: 10px;
                }
                &>.price{
                    padding-top: 5px;
                    &>.sell{
                        color: #db2a41;
                        font-size: 18px;
                        font-weight: 700;
                        margin-right: 30px;
                    }
                    &>.origin{
                        color: #b0adae;
                        text-decoration: line-through;
                    }
                    &>.discount{
                        color: black;
                    }
                }
                &>.writer{
                    padding-top: 3px;
                    color: #787878;
                    letter-spacing: 16px;
                    &>span{
                        letter-spacing: normal;
                        color: #1d66b2;
                    }
                }
                &>.publish{
                    padding-top: 3px;
                    color: #787878;
                    letter-spacing: 3.5px;
                    &>span{
                        letter-spacing: normal;
                        color: #1d66b2;
                    }
                }
                &>.publishTime{
                    padding-top: 3px;
                    color: #787878;
                }
                &>.evaluate{
                    padding-top: 3px;
                    color: #787878;
                    &>.el-rate{
                        display: inline-block;
                    }
                    &>.evalNum{
                        padding-left: 15px;
                        color: #1d66b2;
                    }
                }
                &>.btn{
                    margin-top: 10px;
                    &>.addCarts{
                        border: 1px solid #d0cdce;
                        color: #de3336;
                        background-color: #f7f7f7;
                        &>span>i{
                            font-weight: 800;
                            padding-right: 8px;
                        }
                    }
                    &>.addCarts:hover{
                        background-color: white;
                    }
                    &>.addCollection{
                        color: #de3336;
                        background-color: #f7f7f7;
                        border: 1px solid #d0cdce;
                        &>span>i{
                            font-weight: 800;
                            padding-right: 8px;
                        }
                    }
                    &>.addCollection:hover{
                        background-color: white;
                    }
                }
            }
        }
}
.searchSomething{
    margin-top: 20px;
    background-color: #e8e8e8;
    width: 100%;
    height: 75px;
    &>div{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        width: 630px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        &>.searchSomething-img{
            width: 60px;
            height: 60px;
            margin-top: 7.5px;
            &>img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>