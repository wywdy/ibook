<template>
    <div class="usershop">
        <p class="title">已购商品（共{{ shopnum }}件）</p>
        <el-row class="sea">
            <el-col :span="24">
                <span>商品名称:</span>
                <input type="text">
                <span>购买时间从:</span>
                <input type="text">
                <!--<el-date-picker
                        v-model="value1"
                        type="datetime"
                        placeholder="选择日期时间">
                </el-date-picker>-->
                <span>到</span>
                <input type="text">
                <!--<el-date-picker
                        v-model="value2"
                        type="datetime"
                        placeholder="选择日期时间">
                </el-date-picker>-->
                <input type="button" value="查询">
            </el-col>
            <el-col :span="24">
               <div class="btn">
                   <button type="button">全部商品</button>
                   <select name="" id="">
                       <option value="1">按购买时间排序</option>
                       <option value="2">按价格排序</option>
                       <option value="3">按折扣排序</option>
                   </select>
               </div>
            </el-col>
        </el-row>
        <el-table
                :data="userShopData"
                stripe
                style="width: 100%">
            <el-table-column
                    label="商品"
                    width="220"
                     align="left">
                <template slot-scope="scope">
                    <img :src="scope.row.imgsrc" alt="" style="vertical-align: middle">
                    <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="文轩价"
                    >
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="购买时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="orderid"
                    label="订单号"
                   >
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                    >详情</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="del(scope.$index)"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "userShop",
        data(){
            return {
                shopnum:0,
                value1:"",
                value2:"",
                userShopData:[
                    {imgsrc:"/img/PTimages/x1.jpg",title:"三体",time:"2020-03-12",orderid:"101000210",price:49},
                    {imgsrc:"/img/PTimages/x2.jpg",title:"史记",time:"2020-03-24",orderid:"102110101",price:66}
                ]
            }
        },
        methods:{
            del(index){
                Vue.delete(this.tableData,index)
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
    .usershop{
        .sea{
            font-size: 13px;
        
            span,input{
                float: left;
                margin:10px 5px;
            }
            .btn{
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
        }

    }
</style>