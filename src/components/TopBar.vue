<template>
    <div  class="topBar">
        <div class="topBar-content">
            <div class="collectMe">收藏ibook</div>
            <li><s></s><a href="">客户服务</a></li>
            <li><s></s><a href="">帮助中心</a></li>
            <li><s></s><a href="">新手入门</a></li>
            <li><s></s><a href="">购书卡</a></li>
            <li class="myIbook"><s></s><a href="">我的iBook </a><i class="el-icon-arrow-down"></i>
                <ul class="my">
                    <li><router-link to="/personCenter">个人中心</router-link></li>
                    <li><router-link to="/personCenter/usershop">已购商品</router-link></li>
                    <li><router-link to="/personCenter/noticeprice">降价通知</router-link></li>
                    <li><router-link to="/personCenter/usercollect">我的收藏</router-link></li>

                </ul>
            </li>
            <li v-if="!this.$store.getters.getUser">
                <a @click="login">登录</a>
                <s></s>
                <a type="text" @click="register = true">注册</a>
            </li>
            <li v-else>
                {{this.$store.getters.getUser}}
                <a href="/home">退出登录</a>
            </li>
            <li>您好，欢迎光临ibook</li>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped lang="less">
.topBar{
    height: 25px;
    /*background-color: #f9f9f9;*/
    width: 100%;
    min-width: 1210px;
    &>div{
        width: 1210px;
        margin: auto;
        &>li{
            float: right;
            line-height: 25px;
            height: 25px;
            padding: 1px 13px 0 14px;
            position: relative;
            font-size: 12px;
            &>s{
                border-left: 1px solid #dcdcdc;
                height: 13px;
                left: 0;
                line-height: 0;
                position: absolute;
                top: 6px;
            }
            &>a{
                color: rgb(102, 102, 102);;
            }

        }
    }
}
.collectMe{
    float: left;
    font-size: 13px;
    line-height: 25px;
}
    .my{
        padding: 0 3px;
        font-size: 12px;
        position: absolute;
        top: 25px;
        left: 12px;
        width: 70px;
        z-index: 99;
        display: none;
        background-color: white;
        border: 1px solid #e8e8e8;
        box-shadow: 0 0 4px rgba(0,0,0,.12);
        a{
            color: black;
        }
        &>li{
            border-top: 1px solid #ececec;
        }
    }

.el-icon-arrow-down{
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
}
.myIbook:hover .el-icon-arrow-down{
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
}
    .myIbook:hover .my{
        display: block;
    }

</style>