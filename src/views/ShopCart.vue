<template>
    <div>
        <div class="shopContainer">
            <div class="shopHeader"></div>
            <div class="cart">
                <div class="cartTitle" v-if="getShoppingCart.length>0">
                    <div class="pro-name"style="width:436px">商品</div>
                    <div class="pro-price" style="width:105px">文轩价</div>
                    <div class="pro-integral" style="width:95px">积分</div>
                    <div class="pro-integral" style="width:120px">优惠</div>
                    <div class="pro-num" style="width:130px">数量</div>
                    <div class="pro-action" style="width:90px">操作</div>
                </div>
                <div class="cartCheck">
                    <el-checkbox v-model="isAllCheck">商家：文轩网图书音像</el-checkbox>
                </div>
                <div class="cheap">
                    <span> 以下商品 已购满100元,已减15元现金 </span>
                    <b>￥15</b>
                </div>
                <div class="cartContent">
                    <li class="cartList" v-for="(item,index) in getShoppingCart" :key="item.bookId">
                        <div class="pro-check" style="width: 35px">
                            <el-checkbox :value="item.bookState"  @change="checkChange($event,index)"></el-checkbox>
                        </div>
                        <div class="pro-img" style="width: 65px">

                            <img src="//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200" />

                        </div>
                        <div class="pro-name" style="width: 336px">
                            <a href="">{{item.bookName}}</a>
                        </div>
                        <div class="pro-price" style="width: 106px">{{item.nowPrice}}元</div>
                        <div class="pro-integral" style="width: 96px">{{getShoppingCart[index].bookNumber}}</div>
                        <div class="pro-cheap" style="width: 122px">{{getShoppingCart.length}}</div>
                        <div class="pro-num" style="width: 130px">
                            <el-input-number
                                    size='mini'
                                    :value="item.bookNumber"
                                    @change="handleChange($event,index,item.bookId)"
                                    :min="1"
                                    :max="10"
                            ></el-input-number>
                        </div>
                        <div class="pro-delete" style="width: 98px">
                            <el-popover placement="right">
                                <p>确定删除吗？</p>
                                <div style="text-align: right; margin: 10px 0 0">
                                    <el-button
                                            type="primary"
                                            size="mini"
                                            @click="deleteItem($event,item.bookId,item.bookId)"
                                    >确定</el-button>
                                </div>
                                <i class="el-icon-error" slot="reference" style="font-size: 18px;"></i>
                            </el-popover>
                        </div>
                    </li>
                </div>
                <div class="summary">
                    <p>
                        <span>12件商品  <span style="text-align: right;width: 47px">共计</span></span>

                        <span>¥{{}}</span>
                    </p>
                    <p>
                        <span style="text-align: right">优惠</span>parseInt(getTotalPrice)
                        <span>-¥15.00</span>
                    </p>
                </div>
                <div class="count">
                    <span>合计（不含运费）</span>
                    <span>￥{{parseInt(getTotalPrice)-15}}</span>
                </div>
            </div>
           <div style="position: relative">
               <div class="buyIt" @click="returnOrder">结算</div>
           </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapActions } from "vuex"
    export default {
        name: "ShopCart",
        data(){
            return{
                cartData: [{
                    bookId:'1',
                    bookName: '我们仨1',
                    bookImgSrc:'testr',
                    nowPrice:'23.40',
                    bookNumber:'2',
                    bookState:0
                }, {
                    bookId:'2',
                    bookName: '我们仨2',
                    bookImgSrc:'testr',
                    nowPrice:'23.40',
                    bookNumber:'2',
                    bookState:1
                }, {
                    bookId:'3',
                    bookName: '我们仨3',
                    bookImgSrc:'testr',
                    nowPrice:'23.40',
                    bookNumber:'2',
                    bookState:1
                }, {
                    bookId:'4',
                    bookName: '我们仨4',
                    bookImgSrc:'testr',
                    nowPrice:'23.40',
                    bookNumber:'2',
                    bookState:0
                }, {
                    bookId:'5',
                    bookName: '我们仨5',
                    bookImgSrc:'testr',
                    nowPrice:'23.40',
                    bookNumber:'2',
                    bookState:1
                }],

            }
        },
        methods: {
            ...mapActions(["updateShoppingCart", "checkAll", "deleteShoppingCart"]),
            checkChange(val, key) {
                // 更新vuex中购物车商品是否勾选的状态
                this.updateShoppingCart({ key: key, prop: "bookState", val: val });
            },
            handleChange(currentValue, key, bookId) {
                console.log(currentValue)
                // 当修改数量时，默认勾选
                this.updateShoppingCart({ key: key, prop: "bookState", val: true });
                this.updateShoppingCart({
                    key: key,
                    prop: "bookNumber",
                    val: currentValue
                });
                // 向后端发起更新购物车的数据库信息请求
                // this.$axios
                //     .post("/api/user/shoppingCart/updateShoppingCart", {
                //         user_id: this.$store.getters.getUser.user_id,
                //         product_id: bookId,
                //         num: currentValue
                //     })
                //     .then(res => {
                //         switch (res.data.code) {
                //             case "001":
                //                 // “001”代表更新成功
                //                 // 更新vuex状态
                //                 this.updateShoppingCart({
                //                     key: key,
                //                     prop: "num",
                //                     val: currentValue
                //                 });
                //                 // 提示更新成功信息
                //                 this.notifySucceed(res.data.msg);
                //                 break;
                //             default:
                //                 // 提示更新失败信息
                //                 this.notifyError(res.data.msg);
                //         }
                //     })
                //     .catch(err => {
                //         return Promise.reject(err);
                //     });
            },
            deleteItem(e, id, bookId) {
                this.deleteShoppingCart(id);
            },
            returnOrder(){
                console.log(1111111)
                this.$router.push('/order')
            }
        },
        computed:{
            ...mapGetters([
                "getShoppingCart",
                "getTotalPrice"
            ]),
            isAllCheck: {
                get() {
                    return this.$store.getters.getIsAllCheck;
                },
                set(val) {
                    this.checkAll(val);

                }
            }
        }

    }
</script>

<style scoped lang="less">
.shopHeader{
    margin: 10px 0;
    background: #ccc url(http://static.winxuancdn.com/css/v1/images/bread-buy.jpg) no-repeat 0 0;
    height: 33px;
}
    .shopContainer{
        width: 990px;
        margin: auto;
        min-height: 650px;
    }
    .cartTitle{
        height: 36px;
        border-bottom: 1px solid #ddd;
        clear: both;
        background: #F3F3F3;
    }
    .cartTitle>div{
        float: left;
        border-right: 1px solid #fff;
        font-size: 12px;
        line-height: 36px;
        text-align: center;
    }
    .cartCheck{
        height: 30px;

        line-height: 30px;
        padding: 0 0 0 10px;
        color: #666;
        border-bottom: 1px dashed #ddd;
        background: #F9F9F9;
    }
.cartTitle>div:last-child{
    border-right: 0;
}
.cart{
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
}
  .cartList{
      width: 100%;
      height: 65px;
      overflow: hidden;
      font-size: 12px;
      text-align: center;


      border-bottom: 1px solid #ddd;
      &>div{
          float: left;
      }
      & img{
          height: 55px;
          width: 55px;
          margin: 5px;
      }
  }
    .count{
        height: 40px;
        position: relative;
        background-color: #f3f3f3;
        font-size: 12px;
        color: rgb(0,0,0);
        line-height: 40px;
        span{
            display: inline-block;

        }
        &>span:first-child{
            position: absolute;
            right: 300px;
            top: 0;
            width: 100px;
            text-align: right;
            color: rgb(0, 0, 0);;
            font-weight: bolder;
        }
        &>span:last-child{
            position: absolute;
            right: 50px;
            top: 0;
            width: 100px;
            text-align: right;
            color: #CC0000;
            font-weight: bolder;
            font-size: 18px;
        }
    }
.pro-name{
    text-align: left;

}
    .cheap{
        height: 30px;
        clear: both;
        line-height: 30px;
        padding: 0 0 0 40px;
        background: #E5FDE5;
        position: relative;
        color: #333;
        font-size: 12px;
        border-bottom: 1px solid #ddd;
        & b{
            display: block;
            width: 74px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            background: #0EB40E;
            color: #fff;
            font-size: 12px;
            position: absolute;
            top: 5px;
            left: 660px;
            font-weight: normal;
        }
    }
    .cheap:before{
        display: block;
        content: "";
        width: 38px;
        height: 30px;
        background: #E5FDE5 url(http://static.winxuancdn.com/css/v1/images/icons.png) no-repeat 3px -26px;
        position: absolute;
        left: 0;
        top: 0;
    }
    .pro-check{
        padding-left: 7px;
        box-sizing: border-box;
    }
    .cartList>div{
        line-height: 65px;
    }
    .summary{
        font-size: 12px;
       color: rgb(0, 0, 0);;
        span
        {
            display: inline-block;
        }
        p{
            position: relative;
            height: 25px;
            line-height: 25px;
        }
        &>p>span:first-child{
            position: absolute;
            right: 300px;
            top: 0;
            width: 100px;
        }
        &>p>span:last-child{
            position: absolute;
            right: 50px;
            top: 0;
            width: 100px;
            text-align: right;
        }
    }
    .buyIt{
        line-height: 45px;
        font-size: 18px;
        color: #fff;
        font-weight: 700;
        background-color: rgb(220, 0, 11);
        width: 170px;
        height: 45px;
        text-align: center;
        position: absolute;
        right: 0;
        top:0;
        margin-top: 15px;
    }
    .el-header{
        display: none !important;
    }
</style>