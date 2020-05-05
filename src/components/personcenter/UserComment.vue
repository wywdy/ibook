<template>
    <div class="comment">
        <p class="title">我的社区评论</p>
        <el-row>
            <el-col :span="24">
                <div class="btn">
                    <button type="button" @click="btn1">商品评论 ({{ plnum.shop }})</button>
                    <button type="button" @click="btn2">我的评论 ({{ plnum.user }})</button>
                    <button type="button" @click="btn3">有用的评论 ({{ plnum.useful }})</button>
                </div>
            </el-col>
        </el-row>
        <el-table
                :data="commentData"
                stripe
                style="width: 100%"
                >
            <el-table-column
                    label="商品名称"
                    width="300"
            >
                    <template slot-scope="scope">
                        <img :src="scope.row.imgsrc" alt="" style="vertical-align: middle">
                        <span>{{ scope.row.shopname }}</span>
                    </template>
            </el-table-column>
            <el-table-column
                    v-for="item in collectoption"
                    :prop="item.propname"
                    :label="item.labelname"
                    :width="item.width"
            >
              <!--  <template slot-scope="scope">
                    <img :src="scope.row.imgsrc" alt="" style="vertical-align: middle">
                    <span>{{ scope.row.title }}</span>
                </template>-->
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="170"
            >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                    >购买</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="del(scope.$index)"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <span>共有{{ commentData.length }}条记录</span>
            <button type="button">下一页</button>
            <button type="button">上一页</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "UserComment",
        data(){
            return {
                total:0,
                plnum:{
                    shop:0,
                    user:0,
                    useful:0
                },
                commentData:[
                    {id:1,imgsrc:"/img/PTimages/x6.jpg",shopname:"java编程",
                        orderid:10001100,shoptime:"2020-03-20",comments:20,pj1:"五星",pj2:"四星",plr:"李白",
                        pltime:"2020-03-27"},
                    {id:1,imgsrc:"/img/PTimages/x7.jpg",shopname:"儒林外史",
                        orderid:10001101,shoptime:"2020-03-21",comments:30,pj1:"四星",pj2:"四星",plr:"杜甫",
                        pltime:"2020-03-26"},
                    {id:1,imgsrc:"/img/PTimages/x8.jpg",shopname:"大国复兴",
                        orderid:10101000,shoptime:"2020-03-22",comments:26,pj1:"三星",pj2:"五星",plr:"王维",
                        pltime:"2020-03-29"},
                ],
                collectoption:[
                    { propname:"orderid",labelname:"订单编号",width:180},
                    { propname:"shoptime",labelname:"购买时间",width:180},
                    { propname:"comments",labelname:"已有评论数",width:150},
                ]
            }
        },
        methods:{
            btn1(){
                this.collectoption=[
                    //{ propname:"shopname",labelname:"商品名称",width:300},
                    { propname:"orderid",labelname:"订单编号",width:180},
                    { propname:"shoptime",labelname:"购买时间",width:180},
                    { propname:"comments",labelname:"已有评论数",width:150},
                ]
            },
            btn2(){
                this.collectoption=[
                   // { propname:"shopname",labelname:"商品名称",width:300},
                    { propname:"pj1",labelname:"评价",width:200},
                    { propname:"pltime",labelname:"评论时间",width:150},
                    { propname:"comments",labelname:"已有评论数",width:160},
                ]
            },
            btn3(){
                this.collectoption=[
                   // { propname:"shopname",labelname:"商品名称",width:300},
                    { propname:"pj2",labelname:"评价",width:200},
                    { propname:"plr",labelname:"评论人",width:150},
                    { propname:"comments",labelname:"评论数",width:160},
                ]
            },
            del(index){
                Vue.delete(this.commentData,index)
            }
        }
    }
</script>

<style scoped lang="less">
    .title{
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 14px;
        font-weight: bold;
        line-height: 3;
        border-bottom: 1px solid rgba(114, 114, 114, 0.39);
    }
    .comment{
        .btn {
            margin-top: 20px;
            overflow: hidden;
            border-bottom: 2px solid red;

            button {
                background: #e71208;
                width: 120px;
                height: 34px;
                line-height: 34px;
                border-style: solid;
                outline: none;
                color: #fff;
                float: left;
                cursor: pointer;
            }
        }
        .pagination{
            margin-top: 20px;
            background: #90e747;
            span{
                float: left;
                color: gray;
                font-size: 12px;
            }
            button{
                outline: none;
                border-style: solid;
                background: none;
                float: right;
                cursor: pointer;
                margin-right: 5px;
                color: #4896ff;
            }
        }
    }

</style>