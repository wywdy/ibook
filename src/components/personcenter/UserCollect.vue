<template>
    <div class="collect">
        <p class="title">我的收藏</p>
         <el-row>
             <el-col :span="24">
                 <div class="btn">
                     <button type="button">全部商品</button>
                     <select name="" id="">
                         <option value="1">按收藏时间排序</option>
                         <option value="1">按商品价格排序</option>
                         <option value="1">按商品折扣排序</option>
                     </select>
                 </div>
             </el-col>
         </el-row>
        <el-table
                :data="userCollectData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="shopinfo"
                    label="商品信息"
                    width="420"
                    >
            <!--    <template slot-scope="scope">
                    <div class="wrap">
                        <input type="check">
                        <img :src="shopinfo.imgsrc" alt="">
                        <div>
                            <h5>{{ shopinfo.bookName }}</h5>
                            <p>{{ shopinfo.collectTime }}</p>
                        </div>
                    </div>
                </template>-->
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="文轩价"
                    width="400"
            >
            </el-table-column>
            <el-table-column
                    label="操作"
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
            <span>共有{{ userCollectData.length }}条记录</span>
            <button type="button">下一页</button>
            <button type="button">上一页</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "UserCollect",
        data(){
            return{
                total:0,
                userCollectData:[
                    { shopinfo:"三体"/*{bookName:"三体全套",collectTime:"2020-03-20",imgsrc:"/img/PTimages/x1.jpg"}*/,price:59},
                    { shopinfo:"史记"/*{bookName:"三体全套",collectTime:"2020-03-21",imgsrc:"/img/PTimages/x2.jpg"}*/,price:76},
                    { shopinfo:"三国志"/*{bookName:"三体全套",collectTime:"2020-03-22",imgsrc:"/img/PTimages/x2.jpg"}*/,price:42},
                    { shopinfo:"百年孤独"/*{bookName:"三体全套",collectTime:"2020-03-23",imgsrc:"/img/PTimages/x2.jpg"}*/,price:99},
                    { shopinfo:"红楼梦"/*{bookName:"三体全套",collectTime:"2020-03-24",imgsrc:"/img/PTimages/x2.jpg"}*/,price:123},
                ],
                mockData:[
                    {}
                ]
            }
        },
        methods:{
            del(index){
                Vue.delete(this.userCollectData,index)
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
    .collect{
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