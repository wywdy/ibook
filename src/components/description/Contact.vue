<template>
    <div class="contact">
        <div class="header">
            联系ibook
        </div>
        <div class="nr">
            <h5>客服电话</h5>
            <p>电话： 400-072-0808 （只按市话收费）</p>
            <p>工作时间：9:00-22:00</p>
        </div>
        <div class="nr">
            <h5>企业合作</h5>
            <p>ibook购书卡及企业批量购书：028-83157118（工作日，10:00-17:00）</p>
        </div>
        <div class="nr">
            <h5>公司地址</h5>
            <p>公司地址：四川省成都市金牛区蓉北商贸大道二段文轩路6号</p>
            <p>公司传真：028-83157480</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact"
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
        &>h5{
            color: #966666;
            margin-bottom: 5px;
            /*font-weight: 600;*/
        }
        &>p{
            font-size: 12px;
            margin-top: 5px;
        }
    }
</style>