<template>
    <div class="notice">
        <p class="title">降价通知</p>
        <el-row>
            <el-col :span="24">
                <div class="btn">
                    <button type="button">已降价商品</button>
                    <button type="button">全部商品</button>
                    <select name="" id="">
                        <option value="1">按登记时间排序</option>
                        <option value="1">按商品价格排序</option>
                        <option value="1">按商品折扣排序</option>
                    </select>
                </div>
            </el-col>
        </el-row>
        <el-table
                :data="noticeData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="shopinfo"
                    label="商品信息"
                    width="400"
            >
                <template slot-scope="scope">
                    <img :src="scope.row.imgsrc" alt="" style="vertical-align: middle">
                    <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="文轩价"
                    width="360"
            >
            </el-table-column>
            <el-table-column
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                    >详情</el-button>
                    <el-button
                            size="mini"

                    >购买</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <span>共有{{ noticeData.length }}条记录</span>
            <button type="button">下一页</button>
            <button type="button">上一页</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NoticePrice",
        data(){
            return {
                total:0,
                noticeData:[
                    {imgsrc:"/img/PTimages/x3.jpg",title:"封神演义",price:15.8},
                    {imgsrc:"/img/PTimages/x4.jpg",title:"西游记",price:25},
                    {imgsrc:"/img/PTimages/x5.jpg",title:"水浒传",price:32},
                ]
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
    .notice{
        .btn{
            margin-top: 20px;
            overflow: hidden;
            border-bottom: 2px solid red;
            button{
                background: #e71208;
                width: 120px;
                height: 34px;
                line-height: 34px;
                border-style: solid;
                outline: none;
                color: #fff;
                float: left;
            }
            select{
                float: right;
                color: #727272;
                margin-top: 12px;
                margin-right: 10px;
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