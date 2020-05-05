<template>
<el-container >
    <el-header v-if="initType!=1" :style="{'background-image':`url(${hot.bgimgUrl})`}"></el-header>
<!--    <el-header v-if="initType===4" :style="{'background-image':`url(${hot.bgimgUrl})`}"></el-header>-->
    <el-main :style="{'background-color':hot.bgcolor}">
        <el-row class="typebox" v-if="hot.title!=undefined" v-for="(item,index) in hot.title" :key="index">
            <el-col :span="24" >
                <el-row >
                <el-tag
                        v-for="(item,i) in hot.title"
                        :key="i"
                        effect="dark" >
<!--                    <a href="#">0</a>-->

                   <a  class="titlemaodian" :href="'#'+item.miaoname" >{{item.label }}</a>

                    <span v-if="i==index" style="border-top: 10px solid #078DE2;"></span>
                </el-tag>
                </el-row>
<!--                <a href="#liu" style="color: white;font-size: 30px">刘</a>-->
                <el-row class="booklistboxmargin">
                    <el-col :span="18" :offset="3">
                        <div class="remainbook">
                            <div v-for="item in databook[index]" :key="item.id">
                                <div class="bookimgbox">
                                    <router-link to="#"><img :src="item.imgUrl" alt=""></router-link>
<!--                                    <div class="miaoshatextbox">-->
<!--                                        <img src="../assets/images/miaosha/msth1.png" alt="">-->
<!--                                        <div class="miaoshatext"><span>秒杀</span><span>特惠</span></div>-->
<!--                                    </div>-->
                                </div>

                                <h3>
                                    <router-link to="#" v-text="item.name"></router-link>
                                </h3>
                                <div>
                                    <span>￥<span v-text="item.shopPrice"></span></span>
                                    <del>￥<span v-text="item.sourcePrice"></span></del>
                                </div>
                                <div>
                                    <span :style="{'background-color':hot.button}"><i class="el-icon-shopping-cart-full"></i>立即抢</span>
                                </div>
                            </div>
                        </div>
                    </el-col>

                </el-row>
            </el-col>
        </el-row>
         <el-row v-if="initType===1||initType===2">

             <el-row>
                 <el-col :span="18" :offset="3">
                     <div class="remainbook1">
                         <div v-for="item in databook" :key="item.id">
                             <div class="bookimgbox">
                                 <router-link to="#"><img :src="item.imgUrl" alt=""></router-link>
                                 <!--                                    <div class="miaoshatextbox">-->
                                 <!--                                        <img src="../assets/images/miaosha/msth1.png" alt="">-->
                                 <!--                                        <div class="miaoshatext"><span>秒杀</span><span>特惠</span></div>-->
                                 <!--                                    </div>-->
                             </div>

                             <h3>
                                 <router-link to="#" v-text="item.name"></router-link>
                             </h3>
                             <div>
                                 <span>￥<span v-text="item.shopPrice"></span></span>
                                 <del>￥<span v-text="item.sourcePrice"></span></del>
                             </div>
                             <div>
                                 <span :style="{'background-color':hot.button}"><i class="el-icon-shopping-cart-full"></i>立即抢</span>
                             </div>
                         </div>
                     </div>
                 </el-col>

             </el-row>

         </el-row>
        <el-row v-if="initType===4">

            <el-row>
                <el-col :span="18" :offset="3">
                    <div class="remainbook">
                        <div v-for="item in databook" :key="item.id">
                            <div class="bookimgbox">
                                <router-link to="#"><img :src="item.imgUrl" alt=""></router-link>
                                <!--                                    <div class="miaoshatextbox">-->
                                <!--                                        <img src="../assets/images/miaosha/msth1.png" alt="">-->
                                <!--                                        <div class="miaoshatext"><span>秒杀</span><span>特惠</span></div>-->
                                <!--                                    </div>-->
                            </div>

                            <h3>
                                <router-link to="#" v-text="item.name"></router-link>
                            </h3>
                            <div>
                                <span>￥<span v-text="item.shopPrice"></span></span>
                                <del>￥<span v-text="item.sourcePrice"></span></del>
                            </div>
                            <div>
                                <span :style="{'background-color':hot.button}"><i class="el-icon-shopping-cart-full"></i>立即抢</span>
                            </div>
                        </div>
                    </div>
                </el-col>

            </el-row>

        </el-row>
    </el-main>
</el-container>

</template>

<script>
    let hot0={type:'流浪地球',bgimgUrl:require('../assets/images/hottui/hotbt.jpg'),bgcolor:'#284776',
        title:[{label:'刘慈欣',titleId:0,miaoname:'liu'}, {label:'宇宙从何而来',titleId:1,miaoname:'yu'},
            {label:'银河帝国',titleId:2,miaoname:'yin'}
        ],bookdata:[
            { name: "三体全集",
                imgUrl: require("../assets/images/hottui/hot-dq1.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 0,titleId:0},
            { name: "三体",
                imgUrl: require("../assets/images/hottui/hot-dq2.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 1,titleId:0},
            { name: "三体Ⅲ:死神永生 刘慈欣作品（3）",
                imgUrl: require("../assets/images/hottui/hot-dq3.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 2,titleId:0},
            { name: "三体2 黑暗森林 刘慈欣作品",
                imgUrl: require("../assets/images/hottui/hot-dq4.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 3,titleId:0},
            { name: "流浪地球",
                imgUrl: require("../assets/images/hottui/hot-dq5.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 4,titleId:0},
            { name: "宇宙从何而来/傅渥成",
                imgUrl: require("../assets/images/hottui/hot-dq6.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 5,titleId:1},
            { name: "漫步到宇宙尽头",
                imgUrl: require("../assets/images/hottui/hot-dq7.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 6,titleId:1},
            { name: "极简科学起源课",
                imgUrl: require("../assets/images/hottui/hot-dq8.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 7,titleId:1},
            { name: "人的脑洞略大于整个宇宙",
                imgUrl: require("../assets/images/hottui/hot-dq9.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 8,titleId:1},
            { name: "七堂极简物理课",
                imgUrl: require("../assets/images/hottui/hot-dq10.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 9,titleId:1},
            { name: "银河帝国（银河帝国）百万册全新纪念",
                imgUrl: require("../assets/images/hottui/hot-dq11.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 10,titleId:2},
            { name: "银河帝国（机器人五部曲）",
                imgUrl: require("../assets/images/hottui/hot-dq12.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 11,titleId:2},
            { name: "银河帝国（帝国三部曲）",
                imgUrl: require("../assets/images/hottui/hot-dq13.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 12,titleId:2},
            { name: "银河帝国·基地七部曲(共7册)",
                imgUrl: require("../assets/images/hottui/hot-dq14.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 13,titleId:2},
            { name: "银河帝国大全集(15册)",
                imgUrl: require("../assets/images/hottui/hot-dq15.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 14,titleId:2},


        ],button:'#3E5984',hotId:0}
    let hot1={type:'童书精选',bgimgUrl:'',bgcolor:'#FFFFFF'
                ,bookdata:[
                    { name: "有故事的成语•有故事的成语 半小时漫画三十六计",
                        imgUrl: require("../assets/images/hottui/hot-ts1.jpg"),
                        description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 0,titleId:0},
                    { name: "有故事的成语•有故事的成语 半小时漫画水浒 景阳冈武松",
                        imgUrl: require("../assets/images/hottui/hot-ts2.jpg"),
                        description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 1,titleId:0},
                    { name: "有故事的成语•有故事的成语 半小时漫画西游 美猴王大闹",
                        imgUrl: require("../assets/images/hottui/hot-ts3.jpg"),
                        description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 2,titleId:0},
                    { name: "有故事的成语•有故事的成语 半小时漫画三国 桃园结义",
                        imgUrl: require("../assets/images/hottui/hot-ts4.jpg"),
                        description: "",
                        shopPrice: 16.2, sourcePrice: 30.0, id: 3,titleId:0},
                    ],button:'#D9534F',hotId:1}
    let hot2={type:'公共营养师',bgimgUrl:require('../assets/images/hottui/hot-bg-yin.jpg'),bgcolor:'#72AE3D',
                        bookdata:[
                            { name: "公共营养师（第2版）（国家职业资格一级）",
                                imgUrl: require("../assets/images/hottui/hot-yy1.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 0,titleId:0},
                            { name: "公共营养师(基础知识)(第2版)/国家职业资格培训教程",
                                imgUrl: require("../assets/images/hottui/hot-yy2.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 1,titleId:0},
                            { name: "公共营养师(国家职业资格二级)",
                                imgUrl: require("../assets/images/hottui/hot-yy3.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 2,titleId:0},
                            { name: "公共营养师（第2版）（国家职业资格二级）",
                                imgUrl: require("../assets/images/hottui/hot-yy4.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 3,titleId:0},
                            { name: "公共营养师/国家职业资格三级.辅导练习",
                                imgUrl: require("../assets/images/hottui/hot-yy5.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 4,titleId:0},
                            { name: "公共营养师(国家职业资格4级)(第2版)",
                                imgUrl: require("../assets/images/hottui/hot-yy6.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 5,titleId:1},
                            { name: "公共营养师四级培训教材 +配套辅导书籍 公共营养师资格证考试用书四级套装\n",
                                imgUrl: require("../assets/images/hottui/hot-yy7.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 6,titleId:1},
                            { name: "公共营养师教材考试书 公共营养师基础知识 一级教材1级两册公共营养师资格证考试用书" +
                                    "（第2版）（国家职业资格一级）\n",
                                imgUrl: require("../assets/images/hottui/hot-yy8.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 7,titleId:1},
                            { name: "公共营养师教材考试书 公共营养师基础知识 二级教材2",
                                imgUrl: require("../assets/images/hottui/hot-yy8.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 8,titleId:1},
                            { name: "公共营养师教材考试书 公共营养师基础知识 四级教材4",
                                imgUrl: require("../assets/images/hottui/hot-yy8.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 9,titleId:1},
                        ],button:'#72AE3D',hotId:2}
    let hot3={type:'办公书籍学起来',bgimgUrl:require('../assets/images/hottui/hot-bg-ban.jpg'),bgcolor:'#F9EFE5',
        title:[{label:'office办公',titleId:0,miaoname:'office'}, {label:'PS软件学习',titleId:1,miaoname:'PS'},
            {label:'其他',titleId:2,miaoname:'other'}
        ],bookdata:[
            { name: "Word/Excel/PPT办公应用实战秘技250",
                imgUrl: require("../assets/images/hottui/hot-ban1.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 0,titleId:0},
            { name: "Word/Excel/PPT办公应用实战秘技250",
                imgUrl: require("../assets/images/hottui/hot-ban2.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 1,titleId:0},
            { name: "Excel2013函数与公式应用大全",
                imgUrl: require("../assets/images/hottui/hot-ban3.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 2,titleId:0},
            { name: "别怕,Excel VBA其实很简单（第2版）",
                imgUrl: require("../assets/images/hottui/hot-ban4.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 3,titleId:0},
            { name: "PPT设计思维：教你又好又快搞定幻灯片",
                imgUrl: require("../assets/images/hottui/hot-ban5.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 4,titleId:0},
            { name: "EXCEL三大神器(EXCEL13版函数公",
                imgUrl: require("../assets/images/hottui/hot-ban6.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 5,titleId:0},
            { name: "Excel 2013数据透视表应用大全",
                imgUrl: require("../assets/images/hottui/hot-ban7.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 6,titleId:0},
            { name: "和秋叶一起学Excel",
                imgUrl: require("../assets/images/hottui/hot-ban8.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 7,titleId:0},
            { name: "和秋叶一起学PPT：又快又好打造说服力",
                imgUrl: require("../assets/images/hottui/hot-ban9.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 8,titleId:0},
            { name: "抠图+修图+调色+合成+特效Photoshop",
                imgUrl: require("../assets/images/hottui/hot-ban10.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 9,titleId:1},
            { name: "突破平面PHOTOSHOP CS6设计与制作深度剖析(配光盘)/平面设计与制作\n",
                imgUrl: require("../assets/images/hottui/hot-ban11.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 10,titleId:1},
            { name: "数码摄影后期处理秘笈：Photoshop CC",
                imgUrl: require("../assets/images/hottui/hot-ban12.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 11,titleId:1},
            { name: "从零开始：Photoshop ",
                imgUrl: require("../assets/images/hottui/hot-ban13.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 12,titleId:1},
            { name: "选择的艺术Photoshop图像处",
                imgUrl: require("../assets/images/hottui/hot-ban14.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 13,titleId:1},
            { name: "会声会影X9从入门到精通（第5版）",
                imgUrl: require("../assets/images/hottui/hot-ban15.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 14,titleId:2},
            { name: "FL Studio11音乐制作从入门到精通",
                imgUrl: require("../assets/images/hottui/hot-ban16.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 15,titleId:2},
            { name: "UG NX 8.0中文版从入门到精通",
                imgUrl: require("../assets/images/hottui/hot-ban17.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 16,titleId:2},
            { name: "Revit 2015中文版基础教程",
                imgUrl: require("../assets/images/hottui/hot-ban18.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 17,titleId:2},
            { name: "中文版SolidWorks2016完",
                imgUrl: require("../assets/images/hottui/hot-ban19.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 18,titleId:2},
            { name: "轻设计：网页设计中的轻奢主义和禅意思",
                imgUrl: require("../assets/images/hottui/hot-ban20.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 19,titleId:2},
            { name: "轻设计：网页设计中的轻奢主义和禅意思",
                imgUrl: require("../assets/images/hottui/hot-ban21.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 20,titleId:2},
            { name: "中文版3ds Max 2012课堂实录",
                imgUrl: require("../assets/images/hottui/hot-ban22.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 21,titleId:2},
            { name: "中文版PTC Creo4.0完全实战技术手册",
                imgUrl: require("../assets/images/hottui/hot-ban23.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 22,titleId:2},


        ],button:'#67B2FF',hotId:0}
    let hot4={type:'史诗巨献',bgimgUrl:require('../assets/images/hottui/hot-bg-si.jpg'),bgcolor:'#9ABFCF',
        bookdata:[
            { name: "曾国藩(3册)",
                imgUrl: require("../assets/images/hottui/hot-si1.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 0,titleId:0},
            { name: "半小时漫画中国史123+世界史(套装共",
                imgUrl: require("../assets/images/hottui/hot-si13.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 1,titleId:0},
            { name: "南渡北归 增订本(3册)",
                imgUrl: require("../assets/images/hottui/hot-si4.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 2,titleId:0},
            { name: "如果历史是一群喵套装2册/春秋战国篇+夏商周篇\n",
                imgUrl: require("../assets/images/hottui/hot-si4.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 3,titleId:0},
            { name: "鱼羊野史1-6卷套装",
                imgUrl: require("../assets/images/hottui/hot-si10.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 4,titleId:0},
            { name: "欧洲史典藏版套装/新视角全球简史系列",
                imgUrl: require("../assets/images/hottui/hot-si6.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 5,titleId:1},
            { name: "大英博物馆世界简史",
                imgUrl: require("../assets/images/hottui/hot-si7.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 6,titleId:1},
            { name: "丝绸之路：一部全新的世界史",
                imgUrl: require("../assets/images/hottui/hot-si8.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 7,titleId:1},
            { name: "史记/阅古知今系列",
                imgUrl: require("../assets/images/hottui/hot-si9.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 8,titleId:1},
            { name: "中国历史(共10册)/图说天下",
                imgUrl: require("../assets/images/hottui/hot-si10.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 9,titleId:1},
            { name: "中国通史（少年彩图版）",
                imgUrl: require("../assets/images/hottui/hot-si11.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 10,titleId:1},
            { name: "这个历史挺靠谱 ：袁腾飞讲历史",
                imgUrl: require("../assets/images/hottui/hot-si12.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 11,titleId:1},
            { name: "二混子半小时漫历史套装3册/半小时漫画",
                imgUrl: require("../assets/images/hottui/hot-si13.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 12,titleId:1},
            { name: "朕说历史（汉代篇）",
                imgUrl: require("../assets/images/hottui/hot-si9.jpg"),
                description: "",
                shopPrice: 16.2, sourcePrice: 30.0, id: 13,titleId:1},
        ],button:'#9ABFCF',hotId:2}
    export default {
        name: "HotTui",
        data () {
            return {
                initType:0,
                hot:'' ,
                databook:[],
                titlecount:'',


            }
        },
        created(){
            let type=Math.floor(Math.random()*5)
            // let type=4
              // let type=this.$route.query.id
              switch (type) {
                  case 0: this.initType=0;
                          this.hot=hot0
                           break;
                  case 1: this.initType=1;this.hot=hot1
                  break;
                  case 2: this.initType=2;this.hot=hot2;break;
                  case 3: this.initType=3;this.hot=hot3;break;
                  case 4: this.initType=4;this.hot=hot4;break;
              }
        },
        mounted(){
            // this.hot=this.hot1


            // this. gethotlist()

            let titlemaodian=document.getElementsByClassName('titlemaodian')
            let typebox=document.getElementsByClassName('typebox')
            let tag=document.getElementsByClassName('el-tag')
            let booklist=this.hot.bookdata
            if (this.hot.title!=undefined){
            let title=this.hot.title
                let titlecount=this.hot.title.length
            this.titlecount=this.hot.title.length
                for (let i=0;i<title.length;i++){
                    for (let j=0;j<title.length;j++){
                        if (i===j){
                            let ele= typebox[i].children[0].children[0].children[i]
                            ele.children[0].setAttribute('name',title[i].miaoname)
                            ele.children[0].style.color='#FFFC00'
                            ele.children[0].style.backgroundColor='#078DE2'

                        }
                    }
                }
                for (let i=0;i<titlecount;i++){//获取页面的书籍数据
                    let temp=[]

                    for (let k=0;k<booklist.length;k++){
                        // console.log(temp)
                        if (title[i].titleId===booklist[k].titleId){

                            temp.push(booklist[k])
                        }
                    }
                    this.databook.push(temp)
                    // console.log(temp)

                }
            }else {
               this.databook=booklist

            }







        },


        methods: {
            // gethotlist(){
            //  this.$axios({
            //      url:'/api/fore/cart/addBuyerCart',
            //      method:'GET',
            //      params:{productId:1,amount:2}
            //  })
            //      .then((res)=>{
            //          console.log(res)
            //      })
            // }

        }

    }
</script>

<style scoped lang="less">
.el-header{
    width: 100%;
    height: 400px!important;
    /*background-image: url("../assets/images/hottui/hotbt.jpg");*/
    background-position: center;
}
.el-main{
/*height: 1000px;*/
}
    .el-tag{
        margin: 0 5px;
        width: 140px!important;
        height: 50px!important;
        line-height: 50px;
        position: relative;
        padding: 0px;

        &>a{
            display: inline-block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;

            color: white;
            &:link{
                color: white!important;

            }

            &:hover {
                color:#FFFC00 ;
                background-color: #078DE2;
            }

        }

        &>span{
            /*content: "";*/
            display: inline-block;
            position: absolute;
            bottom: -20px;
            left: 60px;
            width: 0;
            height: 10px;
            border-top:10px solid #078DE2;
            border-left:10px solid transparent;
            border-right:10px solid transparent;
        }
    }
.booklistboxmargin{
    margin-top: 15px;
}
.remainbook{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    &>div {
        flex-basis:16.2%;
        width: 16.2%;
        height: 456px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        background-color: white;

        margin: 10px 4.2px;
        padding: 28px 15px 20px;
      & .bookimgbox {
          width: 100%;
            position: relative;
            left: 0px;
            top: 0px;

            & img {
                width: 100%;
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
                font-size: 24px;
                color: white;
                /*background-color: #F61336;*/
                border-radius: 5px;
                padding: 5px 10px;
                text-align: center;
                line-height: 35px;

                & > i {
                    margin-right: 15px;
                }
            }
        }

    }
}
.remainbook1{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    &>div {
        flex-basis:21%;
        width: 21%;
        height: 456px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        background-color: white;
        margin: 10px 5px;
        /*margin-bottom: 10px;*/
        padding: 28px 15px 20px;
        & .bookimgbox {
            width: 100%;
            position: relative;
            left: 0px;
            top: 0px;

            & img {
                width: 100%;
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
                font-size: 24px;
                color: white;
                /*background-color: #F61336;*/
                border-radius: 5px;
                padding: 5px 10px;
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