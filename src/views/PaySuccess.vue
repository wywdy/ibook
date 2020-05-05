<template>
    <div class="paySuccessBox">
        <div class="Successicon"> <el-button type="danger" icon="el-icon-check" circle></el-button></div>
        <p class="successText">订单支付成功！</p>
        <div>感谢您的购买，我们会尽快为您处理。</div>
        <div class="Myorder"><el-button type="danger" @click="returnOrder">我的订单</el-button></div>
        <div class="returnHome"><el-button @click="returnHome">返回首页</el-button></div>
    </div>
</template>

<script>
    export default {
        name: "PaySuccess",
        methods:{
            //返回首页
            returnHome(){
                this.$router.push('/')
            },
            returnOrder(){
                this.$router.push('/personcenter/myorder')
            }
        }
    }
</script>

<style scoped lang="less">
    .paySuccessBox{
        margin-top: 10px;
        width: 1208px;
        height: 298px;
        border: 1px solid #e8e8e8;
        margin-left: auto;
        margin-right: auto;
        background-color: #f7f7f7;
        &>.Successicon{
            margin: 20px 0px;
        }
        &>.successText{
            color: #db2a41;
            font-size: 20px;
        }
        &>.Myorder{
            margin-top: 20px;
            margin-bottom: 20px;
            &>button{
                width: 160px;
            }
        }
        &>.returnHome{
            &>button{
                width: 160px;
            }
        }
    }

</style>