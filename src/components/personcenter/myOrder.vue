<template>
    <div class="order">
       <p class="title">图书订单</p>
        <section class="main">
            <div class="tabs">
                <div class="tabs-left">
                    <div><span>全部订单</span></div>
                    <div><span @click="waitprice">待付款</span>(<b>{{ getawit }}</b>)</div>
                    <div><span @close="waitreceive">待收货</span>(<b>{{  getreceive }}</b>)</div>
                    <div><span @click="finish">已完成</span></div>
                </div>
                <div class="tabs-right">
                      <div>
                          <input type="search" placeholder="订单号/收货人/收货人手机" width="300px"></input>
                          <input type="button" value="搜索" style="border: none">
                      </div>
                </div>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    >
                <el-table-column
                        prop="orderinfo"
                        label=" 订单详情"
                        width="240"
                       >
                    <template slot-scope="scope">
                        <img :src="scope.row.orderinfo.imgsrc" alt="" style="vertical-align: middle">
                        <span>{{ scope.row.orderinfo.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="收货人">
                </el-table-column>
                <el-table-column
                        prop="pricemethod"
                        label=" 付款方式">
                </el-table-column>
                <el-table-column
                        prop="sprice"
                        label="实付款">
                </el-table-column>
                <el-table-column
                        label="订单状态">
                    <template slot-scope="scope">
                        <el-tag type="warning" v-if="scope.row.orderstate===0">待付款</el-tag>
                        <el-tag type="danger" v-else-if="scope.row.orderstate===1">待收货</el-tag>
                        <el-tag type="success" v-else>已收货</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                             >详情</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="del(scope.$index, scope.row)"
                                >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <button type="button">下一页</button>
                <button type="button">上一页</button>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "myOrder",
        data(){
            return {
                waitNum:0,
                receiveNum:0,
                pagenum:1,
                value:"",
                tableData:[
                    {id:1,orderinfo:{imgsrc:"/img/PTimages/x1.jpg",title:"三体"},name:"张三丰",pricemethod:"支付宝",sprice:49,orderstate:0},
                    {id:2,orderinfo:{imgsrc:"/img/PTimages/x2.jpg",title:"史记"},name:"乔峰",pricemethod:"银联",sprice:66,orderstate:1},
                    {id:3,orderinfo:{imgsrc:"/img/PTimages/x6.jpg",title:"java编程"},name:"张无忌",pricemethod:"微信",sprice:192,orderstate:0},
                    {id:4,orderinfo:{imgsrc:"/img/PTimages/x7.jpg",title:"儒林外史"},name:"杨过",pricemethod:"支付宝",sprice:56,orderstate:2},
                    {id:5,orderinfo:{imgsrc:"/img/PTimages/x8.jpg",title:"大国复兴"},name:"郭靖",pricemethod:"QQ钱包",sprice:98,orderstate:1},
                ],
                options: [{
                    value: '1',
                    label: '最近3个月'
                },
                    {
                        value: '2',
                        label: '几年'
                    },
                    {
                        value: '3',
                        label: '2019年'
                    },
                    {
                        value: '4',
                        label: '2018年'
                    }
                ]
            }
        },
        computed:{
            getawit(){
                let n=0
                for(let i of this.tableData){
                    if(i.orderstate===0){
                         n++
                    }

                }
                this.waitNum=n
                return this.waitNum
            },
            getreceive(){
                let n=0
                for(let i of this.tableData){
                    if(i.orderstate===1){
                        n++
                    }
                }
                this.receiveNum=n
                return this.receiveNum
            }

        },
        methods:{
            del(index,row){
                //console.log(index,row);
                Vue.delete(this.tableData,index)
            },
            waitprice(){
                let newArr=[]
                for(let i of this.tableData){
                    if(i.orderstate===0){
                        newArr.push(i)
                    }

                }
                this.tableData=newArr
            },
            waitreceive(){
                let newArr=[]
                for(let i of this.tableData){
                    if(i.orderstate===1){
                        newArr.push(i)
                    }

                }
                this.tableData=newArr
            },
            finish(){
                let newArr=[]
                for(let i of this.tableData){
                    if(i.orderstate===2){
                        newArr.push(i)
                    }

                }
                this.tableData=newArr
            }
        },
        created() {
            this.$axios.get('http://47.98.250.2:8088/fore/orderinformation1',{
                params:{
                    page:1,
                    limit:5,
                   // token:sessionStorage.getItem("token")
                }
            }).then(res=>{
                console.log("res1",res);
            }).catch(err=>{
                console.log(err);
            })
            this.$axios.get('http://47.98.250.2:8088/fore/selectConllectionByPage',{
                params:{
                    page:1,
                    limit:4,
                    // token:sessionStorage.getItem("token")
                }
            }).then(res=>{
                console.log("res2",res);
            }).catch(err=>{
                console.log(err);
            })
            this.$axios.get('http://47.98.250.2:8088/fore/orderinformation4',{
                params:{
                    page:1,
                    limit:7,
                    // token:sessionStorage.getItem("token")
                }
            }).then(res=>{
                console.log("res3",res);
            }).catch(err=>{
                console.log(err);
            })
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
    .main{
        margin-top: 30px;
        font-size: 12px;
        .tabs{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .tabs-left{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &>div{
                    b{
                        color: red;
                    }
                    margin-right: 10px;
                    padding-right: 10px;
                    border-right: 1px solid gainsboro;
                    span:hover{
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
                &>div:nth-child(4){
                    border-right:none;
                }
            }
            .tabs-right{
                margin-right: 20px;
                input{
                    outline: none;
                }
                input[type=search]{
                    width: 200px;
                }
            }
        }
        .el-table{
            margin-top: 20px;
        }
        .pagination{
            margin-top: 20px;
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