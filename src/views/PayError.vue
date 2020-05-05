<template>
    <div class="payErrorBox">
        <div class="Erroricon"> <el-button type="primary" icon="el-icon-close" circle></el-button></div>
        <p class="errorText">订单支付失败！</p>
        <div class="returnHome"><el-button @click="returnHome" type="primary">返回首页</el-button></div>
    </div>
</template>

<script>
    export default {
        name: "PayError",
        methods:{
            returnHome(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped lang="less">
    .payErrorBox{
        margin-top: 10px;
        width: 1208px;
        height: 298px;
        border: 1px solid #e8e8e8;
        margin-left: auto;
        margin-right: auto;
        background-color: #f7f7f7;
        &>.Erroricon{
            margin-top: 50px;
            margin-bottom: 30px;
        }
        &>.errorText{
            color: #52bae8;
            font-size: 20px;
            margin-bottom: 40px;
        }
        &>.returnHome{
            &>button{
                width: 160px;
            }
        }
    }
</style>