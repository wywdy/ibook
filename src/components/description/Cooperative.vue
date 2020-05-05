<template>
    <div class="cooperative">
        <div class="header">
            合作伙伴
        </div>
        <div class="nr">
            <p v-for="item in cooperative">{{item}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cooperative",
        data(){
            return{
                cooperative:['新华文轩','九月网','华文网上书店','四川文艺出版社','中国新闻出版网','中国青年出版总社','阳光学习网','中国人民大学出版社','对外经济贸易大学出版社','熊本购','搜狐读书','悉尼中文书店','荷兰中文书店',]
            }
        }
    }
</script>

<style scoped lang="less">

    .header{
        background-image: url(/img/Description/header.png);
        background-size: 750px 80px;
        width: 750px;
        height: 80px;
        text-align: left;
        font-size: 25px;
        color: white;
        font-weight: 900;
        text-indent: 80px;
        line-height: 80px;
        font-style: italic;
    }

    .nr{
        text-align: left;
        margin-top: 20px;
        &>p{
            font-size: 12px;
            margin-top: 5px;
            width: 25%;
            float: left;
        }
    }
</style>