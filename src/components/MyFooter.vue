<template>
    <div>
        <div class="footerImg">
            <div></div>
        </div>
        <div class="footerText">
            <div class="footerText-nav">
                <li><a href="/description/aboutIBook" target="_blank">关于ibook</a></li>
                <li><s></s><a href="/description/contact" target="_blank">联系ibook</a></li>
                <li><s></s><a href="/description/cooperative" target="_blank">加入ibook</a></li>
                <li><s></s><a href="/description/join" target="_blank">合作伙伴</a></li>
            </div>
            <div class="footerText-middle">
                <li><a href=""><img src="http://static.winxuancdn.com/topic/subject/201705/gawj.png" style="float: left">川公网安备 51010602000457号 </a></li>
                <li><s></s>增值电信业务经营许可证：川B2-20100040</li>
                <li><s></s><a href="">出版物经营许可证</a></li>
                <li><s></s>蜀ICP备11014037号</li>
            </div>
            <div class="footerText-bottom">
                <li>Copyright(C) <a href="">ibook网</a> 2000-2020 版权所有</li>
                <li><s></s>客服热线：400-072-0808</li>
            </div>
            <div class="footerText-img">
                <img src="http://static.winxuancdn.com/topic/subject/201605/dy/scgswjlogo.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style scoped lang="less">
    .footerImg{
        overflow: hidden;
        min-width: 1210px;
        background-color: #ececec;
        margin-top: 30px;
        &>div{
            background-image: url(http://static.winxuancdn.com/css/v2/images/foot-service.png);
            height: 83px;
            margin: auto;
            width: 1210px;
        }
    }

    li{
        float: left;
        line-height: 25px;
        height: 25px;
        padding: 1px 13px 0 14px;
        position: relative;
        font-size: 13px;
        color: #666;
        &>s{
            border-left: 1px solid #dcdcdc;
            height: 13px;
            left: 0;
            line-height: 0;
            position: absolute;
            top: 6px;
        }
        &>a{
            color: #666;
            cursor: pointer;
        }
        &>a:hover{
            color: red;
            text-decoration: underline;
        }

    }

    .footerText-nav{
        margin: 30px auto 0;
        width: 332px;
        height: 30px;
    }
    .footerText-middle{
        margin: 10px auto 0;
        width: 780px;
        height: 30px;
        & a:nth-child(1):hover{
            text-decoration: none;
        }
    }
    .footerText-bottom{
        margin: 10px auto 0;
        width: 453px;
        height: 30px;
        & a{
            margin: 0 5px;
        }
    }
    .footerText-img{
        margin: 0 auto;
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
</style>