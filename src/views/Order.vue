<template>
     <div class="order-container">
         <div class="order-head">
         </div>
         <div style="padding-top: 10px;font-size: 12px">请确认如下信息，然后提交订单！</div>
         <h3 class="order-title">收货信息</h3>
         <div class="address-box">
             <p>
                 <input type="radio" name="addressItem" v-model="isUse" value=ad1>everglow
                 四川省 成都市 双流县
                 华阳镇街道
                 棕榈南岸 638632 18940996191  1395959652@qq.com
             </p>
             <p>
                 <input type="radio" name="addressItem" v-model="isUse" value=ad2>everglow
                 四川省 成都市 双流县
                 华阳镇街道
                 棕榈南岸 638632 18940996191  1395959652@qq.com
             </p>
             <p class="new">
                 <input type="radio" name="addressItem" value=true v-model="isUse">使用新的地址
             </p>
             <div  v-if="isUse=='true'"  class="address">
                 <table>
                     <tbody>
                     <tr>
                         <td>收货人姓名</td>
                         <td><input type="text" style="width: 150px" id="receiver"></td>
                     </tr>
                     <tr>
                         <td>省/市</td>
                         <td>
                             <select name="prov" id="prov" style="width: 100px" onchange="showCity(this)">
                                 <option id="proName">请选择省份</option>
                             </select>
                             <select id="city" style="width: 100px" onchange="showCountry(this)">
                                 <option id="cityName">请选择城市</option>
                             </select>
                             <select id="country" onchange="selectCountry(this)" style="width: 100px">
                                 <option id="countryName">请选择区县</option>
                             </select>
                         </td>
                     </tr>
                     <tr>
                         <td>详细地址</td>
                         <td><input type="text" style="width: 450px" id="addr-show"></td>
                     </tr>
                     <tr>
                         <td>手机号码</td>
                         <td><input type="text" id="phoneNumber"></td>
                     </tr>
                     <tr>
                         <td></td>
                         <td><input type="text" value="确认收货信息" class="saveAddress">
                         </td>
                     </tr>
                     </tbody>
                 </table>
             </div>
         </div>
         <h3 class="order-title">
             送货方式
         </h3>
         <div class="express">
             快递
         </div>
         <div class="order-title">
             商品清单
         </div>
         <div class="order-content">
             <p>发货商：文轩网</p>
             <el-table
                     :data="orderData"
                     border
                     style="width: 100%"
                     :header-cell-style="rowClass" :cell-style="cellStyle">
                 <el-table-column
                         prop="bookName"
                         label="商品名称"
                         width="657">
                 </el-table-column>
                 <el-table-column
                         prop="nowPrice"
                         label="现价"
                         width="63">
                 </el-table-column>
                 <el-table-column
                         prop="address"
                         label="优惠"
                         width="63">
                 </el-table-column>
                 <el-table-column
                         prop="bookNumber"
                         label="数量"
                         width="63">
                 </el-table-column>
                 <el-table-column
                         prop="minTotal"
                         label="小计"
                         width="63">
                 </el-table-column>
             </el-table>
         </div>
         <div class="amount">
             <li>商品金额总计:￥{{parseInt(getTotalPrice)}}</li>
             <li style="color: rgb(198, 0, 11);">运费:￥0.00</li>
             <li style="color: rgb(198, 0, 11);">促销优惠: -￥15.00</li>
             <li>您共需支付: <span style="color: rgb(198, 0, 11);">￥{{parseInt(getTotalPrice)}}</span></li>
             <li @click="returnPaySuccess"><input type="button" id="apply" value="提交订单"></li>
         </div>
     </div>
</template>

<script>
    import {mapGetters} from "vuex";


    export default {
        name: "Order",

        data(){
            return{
                orderData:[],
                totalPrice:'',
                isUse:'false'
            }
        },
        watch:{
            isUse:function(){
                // this.answer=[];

                console.log(this.isUse)
                // this.answer.push(this.checkedValue);
            }
        },
        methods: {
            rowClass({row, rowIndex}) {
                console.log(rowIndex) //表头行标号为0
                return 'background:rgb(153, 153, 153);color:white;height:28px;padding:0'
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                    return 'background-color: rgb(244, 240, 241);'
            },
            returnPaySuccess(){
                this.$router.push('/paySuccess')
            }
        },
        computed:{
        ...mapGetters([
                "getShoppingCart",
                "getTotalPrice"
            ])
        },
        mounted() {
            let order=this.$store.getters.getCheckGoods;
            for (let i=0;i<order.length;i++)
            {
                order[i]['minTotal']=parseInt(order[i].nowPrice)*parseInt(order[i].bookNumber)
            }
            this.orderData=order;
        }
    }
</script>

<style scoped lang="less">
    .order-container{
        width: 990px;
        margin: auto;
        font-size: 12px;
    }
.order-head{
    background: #ccc url(http://static.winxuancdn.com/css/v1/images/bread-buy.jpg) no-repeat 0 0;
    height: 33px;
    display: block;
    background-position: 0 -39px;
}
    .address-box{
        background: #f8f8f8;
        padding: 20px 40px;
        overflow: hidden;
    }
    .order-title{
        font-size: 16px;
        font-weight: 700;
        padding: 20px 10px 10px;
    }
    .express{
        background: #f8f8f8;
        padding: 20px 40px;
        overflow: hidden;
    }
    .order-content{
        background: #f8f8f8;
        padding: 20px 40px;
        overflow: hidden;
    }
    .el-table{
        font-size: 12px !important;
    }
    .amount{
        text-align: right;
    }
    .amount>li{
        margin-bottom: 15px;
    }
    #apply{
        line-height: 30px;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        background-color: rgb(220, 0, 11);
        margin-left: 10px;
        padding: 1px 15px;
        border: 0;
    }
    .address{
        margin-top: 30px;
        padding-top: 10px;
        border-top: 1px solid rgba(0,0,0,.1);
    }
    .address tr>td{
        padding-right: 10px;
        padding-bottom: 15px;
    }
    .saveAddress{
        width: 126px;
        height: 28px;
        vertical-align: middle;
        color: white;
        text-align: center;
        border-radius: 10px;
        background-color: #910122 ;
        font-weight: 700;
        cursor: pointer;
        border: none;

    }


</style>