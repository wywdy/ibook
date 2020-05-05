<template>
    <div>
        <div>
            <div class="sale">
                <p class="dj" @click="dj1(0)" :class="{on:currentIndex==0}">售后单</p>
                <p>|</p>
                <p class="dj" @click="dj2(1)" :class="{on:currentIndex==1}">咨询单</p>
                <!--            <el-tab-pane label="售后单" name="first" @click="dj1">售后单</el-tab-pane>-->
                <!--            <p>|</p>-->
                <!--            <el-tab-pane label="咨询单" name="second" @click="dj2">咨询单</el-tab-pane>-->
                <div class="tabs-right">
                    <div>
                        <input type="search" placeholder="服务单号/订单号" width="300px"></input>
                        <input type="button" value="搜索" style="border: none">
                    </div>
                </div>
            </div>
            <div v-if="isdj">
                <div>
                    <p class="title">售后单</p>
                    <div class="pagination">
                        <button type="button">下一页</button>
                        <button type="button">上一页</button>
                    </div>
                </div>
                <section class="main">
                    <el-table
                            :data="saleData"
                            style="width: 100%"
                    >

                        <el-table-column
                                label=" 售后单号"
                        >
                        </el-table-column>
                        <el-table-column
                                label="订单号">
                        </el-table-column>
                        <el-table-column
                                label=" 商品信息">
                        </el-table-column>
                        <el-table-column
                                label="申请时间">
                        </el-table-column>
                        <el-table-column
                                label="售后状态">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                >取消</el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="yeshu">共{{countx}}页</div>
                </section>
            </div>
            <div v-else>
                <div>
                    <p class="title">咨询单</p>
                    <div class="pagination">
                        <button type="button">下一页</button>
                        <button type="button">上一页</button>
                    </div>
                </div>
                <section class="main">
                    <el-table
                            :data="saleData"
                            style="width: 100%"
                    >

                        <el-table-column

                                label=" 咨询单号"
                        >
                        </el-table-column>
                        <el-table-column

                                label="订单号">
                        </el-table-column>
                        <el-table-column

                                label=" 商品信息">
                        </el-table-column>
                        <el-table-column

                                label="申请时间">
                        </el-table-column>
                        <el-table-column

                                label="咨询单状态">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                >取消</el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="yeshu">共{{county}}页</div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AfterSale",
        data() {
            return{
                isdj:true,
                countx:0,
                county:1,
                currentIndex:0,
                saleData:[]
            }
        },
        methods:{
            dj1(index) {
                this.currentIndex=index;
                this.isdj=true
                // console.log(this.isdj)
            },
            dj2(index) {
                this.currentIndex=index;
                this.isdj=false
                // console.log(this.isdj)
            }
        }
    }
</script>

<style scoped lang="less">
    .sale{
        height: 30px;
        margin-left: 5px;
        margin-top: 10px;
        p{
            float: left;
            margin: 0;
            padding: 0;
            text-align: center;
            font-size: 18px;
            width: 70px;
            cursor: pointer;
        }
        p:nth-child(2n){
            margin: 0 10px;
            width: 10px;
            cursor: none;
        }
    }
    .on{
        color: #c81518;
        border-bottom: 2px solid #c81518;
    }
    .tabs-right{
        float: right;
        margin-right: 20px;
        input{
            outline: none;
        }
        input[type=search]{
            width: 200px;
        }
        input[type=button]{
            height: 23px;
        }
    }

    .title{
        margin: 0;
        padding: 0;
        text-align: left;
        text-indent: 10px;
        font-size: 14px;
        font-weight: bold;
        line-height: 3;
        float: left;
    }

    .pagination{
        float: right;
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
    .yeshu{
        margin-top: 15px;
        text-align: right;
        font-size: 12px;
        color: #689115;
        margin-right: 20px;
    }
</style>