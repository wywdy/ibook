<template>
    <div class="all-categories">
        <el-container>
            <el-header class="ac-header">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>全部分类</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main>
                <div v-for="(item,index1) in bigTypeName">
                    <div class="ac-cls">
                        <router-link :to="{path:'Subcategory',query: {ac:index1,sc:null}}"><span class="ac-cls-fcs" v-model="item.categoryName">{{item.categoryName}}</span></router-link>
                        <ul v-for="(items,index2) in item.categoryVo">
                            <li v-model="items.categoryName"><router-link :to="{path:'Subcategory',query:{ac:index1,sc:index2}}">{{items.categoryName}}</router-link></li>
                        </ul>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "AllCategories",
        data(){
            return{
                // bigTypeName:[
                //     {typeId3:1,typeName1:'社科',typeItem:[
                //             {typeId2:1,typeId1:1,typeName2:'哲学'},
                //             {typeId2:2,typeId1:1,typeName2:'历史'},
                //             {typeId2:3,typeId1:1,typeName2:'地理'},
                //             {typeId2:4,typeId1:1,typeName2:'军事'},
                //             {typeId2:5,typeId1:1,typeName2:'政治'},
                //             {typeId2:6,typeId1:1,typeName2:'婚姻家庭'},
                //             {typeId2:7,typeId1:1,typeName2:'成功学'},
                //             {typeId2:8,typeId1:1,typeName2:'社科'},
                //             {typeId2:9,typeId1:1,typeName2:'公务员考试'},
                //             {typeId2:10,typeId1:1,typeName2:'经济'},
                //             {typeId2:11,typeId1:1,typeName2:'法律'},
                //             {typeId2:12,typeId1:1,typeName2:'管理'},
                //         ]},
                //     {typeId3:2,typeName1:'文教',typeItem:[
                //             {typeId2:13,typeId1:2,typeName2:'小学课本'},
                //             {typeId2:14,typeId1:2,typeName2:'中学课本'},
                //             {typeId2:15,typeId1:2,typeName2:'高中课本'},
                //             {typeId2:16,typeId1:2,typeName2:'小学教辅'},
                //             {typeId2:17,typeId1:2,typeName2:'初中教辅'},
                //             {typeId2:18,typeId1:2,typeName2:'高中教辅'},
                //             {typeId2:19,typeId1:2,typeName2:'课外读物'},
                //             {typeId2:20,typeId1:2,typeName2:'工具书'},
                //             {typeId2:21,typeId1:2,typeName2:'成人教育'},
                //             {typeId2:22,typeId1:2,typeName2:'教学教具'},
                //             {typeId2:23,typeId1:2,typeName2:'学生字帖'},
                //             {typeId2:24,typeId1:2,typeName2:'外语'},
                //             {typeId2:25,typeId1:2,typeName2:'教育理论'},
                //             {typeId2:26,typeId1:2,typeName2:'地图'},
                //             {typeId2:27,typeId1:2,typeName2:'文娱体育'},
                //             {typeId2:28,typeId1:2,typeName2:'语言文字'},
                //         ]},
                //     {typeId3:3,typeName1:'文学',typeItem:[
                //             {typeId2:29,typeId1:3,typeName2:'古典文学'},
                //             {typeId2:30,typeId1:3,typeName2:'四大名著'},
                //             {typeId2:31,typeId1:3,typeName2:'历史古籍'},
                //             {typeId2:32,typeId1:3,typeName2:'民间文学'},
                //             {typeId2:33,typeId1:3,typeName2:'现当代文学'},
                //             {typeId2:34,typeId1:3,typeName2:'名著读物'},
                //             {typeId2:35,typeId1:3,typeName2:'名人传记'},
                //             {typeId2:36,typeId1:3,typeName2:'科幻小说'},
                //             {typeId2:37,typeId1:3,typeName2:'武侠小说'},
                //             {typeId2:38,typeId1:3,typeName2:'幽默漫画'},
                //             {typeId2:39,typeId1:3,typeName2:'作家作品集'},
                //             {typeId2:40,typeId1:3,typeName2:'小说'},
                //             {typeId2:41,typeId1:3,typeName2:'诗歌散文'},
                //             {typeId2:42,typeId1:3,typeName2:'外国文学'},
                //         ]},
                //     {typeId3:4,typeName1:'科技',typeItem:[
                //             {typeId2:43,typeId1:4,typeName2:'轻工'},
                //             {typeId2:44,typeId1:4,typeName2:'机械工程'},
                //             {typeId2:45,typeId1:4,typeName2:'电子技术'},
                //             {typeId2:46,typeId1:4,typeName2:'水利电力'},
                //             {typeId2:47,typeId1:4,typeName2:'基础科学'},
                //             {typeId2:48,typeId1:4,typeName2:'计算机'},
                //             {typeId2:49,typeId1:4,typeName2:'建筑'},
                //             {typeId2:50,typeId1:4,typeName2:'农业科技'},
                //             {typeId2:51,typeId1:4,typeName2:'交通运输'},
                //             {typeId2:52,typeId1:4,typeName2:'计量标准'},
                //             {typeId2:53,typeId1:4,typeName2:'冶金、地质'},
                //             {typeId2:54,typeId1:4,typeName2:'综合工具书'},
                //             {typeId2:55,typeId1:4,typeName2:'化工'},
                //             {typeId2:56,typeId1:4,typeName2:'汽摩维修'},
                //             {typeId2:57,typeId1:4,typeName2:'卫生保健'},
                //             {typeId2:58,typeId1:4,typeName2:'中医'},
                //             {typeId2:59,typeId1:4,typeName2:'西医'},
                //         ]},
                //     {typeId3:5,typeName1:'童书',typeItem:[
                //             {typeId2:60,typeId1:5,typeName2:'幼儿启蒙（0-6岁）'},
                //             {typeId2:61,typeId1:5,typeName2:'智力开发（0-6岁）'},
                //             {typeId2:62,typeId1:5,typeName2:'中外名著（0-6岁）'},
                //             {typeId2:63,typeId1:5,typeName2:'注音读物（0-6岁）'},
                //             {typeId2:64,typeId1:5,typeName2:'幼儿绘本（0-6岁）'},
                //             {typeId2:65,typeId1:5,typeName2:'幼儿童书（0-6岁）'},
                //             {typeId2:66,typeId1:5,typeName2:'注音读物（6岁以上）'},
                //             {typeId2:67,typeId1:5,typeName2:'童话故事（6岁以上）'},
                //             {typeId2:68,typeId1:5,typeName2:'儿童文学（6岁以上）'},
                //             {typeId2:69,typeId1:5,typeName2:'少儿读物（6岁以上）'},
                //             {typeId2:70,typeId1:5,typeName2:'兴趣培养（6岁以上）'},
                //             {typeId2:71,typeId1:5,typeName2:'少儿科普（6岁以上）'},
                //             {typeId2:72,typeId1:5,typeName2:'少儿英语（6岁以上）'},
                //             {typeId2:73,typeId1:5,typeName2:'少儿童书（6岁以上）'},
                //             {typeId2:74,typeId1:5,typeName2:'点读图书'},
                //         ]},
                //     {typeId3:6,typeName1:'大中专教材',typeItem:[
                //             {typeId2:75,typeId1:6,typeName2:'文科'},
                //             {typeId2:76,typeId1:6,typeName2:'理科'},
                //             {typeId2:77,typeId1:6,typeName2:'公共课'},
                //             {typeId2:78,typeId1:6,typeName2:'高职'},
                //             {typeId2:79,typeId1:6,typeName2:'中职'},
                //         ]},
                //     {typeId3:7,typeName1:'艺术',typeItem:[
                //             {typeId2:80,typeId1:7,typeName2:'美术'},
                //             {typeId2:81,typeId1:7,typeName2:'设计'},
                //             {typeId2:82,typeId1:7,typeName2:'收藏'},
                //             {typeId2:83,typeId1:7,typeName2:'年历'},
                //             {typeId2:84,typeId1:7,typeName2:'书法'},
                //             {typeId2:85,typeId1:7,typeName2:'音乐'},
                //         ]},
                //     {typeId3:8,typeName1:'家居休闲',typeItem:[
                //             {typeId2:86,typeId1:8,typeName2:'家居生活指南'},
                //             {typeId2:87,typeId1:8,typeName2:'家居装修'},
                //             {typeId2:88,typeId1:8,typeName2:'家居风水'},
                //             {typeId2:89,typeId1:8,typeName2:'收藏/鉴赏'},
                //             {typeId2:90,typeId1:8,typeName2:'消遣游戏'},
                //             {typeId2:91,typeId1:8,typeName2:'私家车'},
                //             {typeId2:92,typeId1:8,typeName2:'时尚'},
                //         ]},
                //     {typeId3:9,typeName1:'期刊杂志',typeItem:[
                //             {typeId2:93,typeId1:9,typeName2:'健康体育'},
                //             {typeId2:94,typeId1:9,typeName2:'影视娱乐'},
                //             {typeId2:95,typeId1:9,typeName2:'政治军事'},
                //             {typeId2:96,typeId1:9,typeName2:'时尚生活'},
                //             {typeId2:97,typeId1:9,typeName2:'文学'},
                //             {typeId2:98,typeId1:9,typeName2:'社会万象'},
                //             {typeId2:99,typeId1:9,typeName2:'电脑与网络'},
                //             {typeId2:100,typeId1:9,typeName2:'管理财经'},
                //         ]},
                //     {typeId3:10,typeName1:'烹饪美食',typeItem:[
                //             {typeId2:101,typeId1:10,typeName2:'中华菜系'},
                //             {typeId2:102,typeId1:10,typeName2:'主食食谱'},
                //             {typeId2:103,typeId1:10,typeName2:'养生与美容'},
                //             {typeId2:104,typeId1:10,typeName2:'厨房秘笈'},
                //             {typeId2:105,typeId1:10,typeName2:'烘焙食品'},
                //             {typeId2:106,typeId1:10,typeName2:'药膳食疗'},
                //             {typeId2:107,typeId1:10,typeName2:'茶酒饮品'}
                //         ]}
                // ],
                bigTypeName:[{id: 1, categoryName: "社科", categoryImageSrc: "65d4300d-a44a-4ce6-a344-81fedfcc7bf8.jpg", categoryVo:[{categoryName: "哲学", categoryId: 11, categoryImageSrc: null}]}],
            }
        },
        created() {
            this.$axios.get('/api/fore/book/getBookType', {
                params: {}
            })
                .then(res => {
                    // console.log('axios.get()==res:bokktype', res);
                    // console.log('axios.get():', res.data);
                    if (res.status === 200) {
                        this.bigTypeName = res.data
                    }
                })
                .catch((res)=>{
                    console.log(res)
                })
        },
    }
</script>

<style scoped lang="less">
    .all-categories {
        width: 1210px;
        margin: 0 auto;
        text-align: center;
        & .ac-header {
            height: 40px !important;
            padding: 10px;
            border-bottom: 1px solid #b4b4b4;
        }

        .ac-cls {
            width: 120px;
            margin: 0 auto;
            float: left;

            & .ac-cls-fcs {
                display: inline-block;
                width: 110px;
                background-color: #e43c3f;
                border-radius: 4px;
                margin: 10px 5px;
                padding: 10px 0;
                font-size: 18px;
                font-weight: bold;

                &:hover {
                    background-color: #ff0000;
                    color: white;
                }
            }

            & > ul {
                padding: 0;

                & li {
                    list-style: none;
                    margin: 10px auto;
                }
            }

            a{
                color: #2c3e50;
                &:hover{
                    color: red;
                }

            }

            &:hover {
                background-color: #cccccc;
            }

        }
    }
</style>