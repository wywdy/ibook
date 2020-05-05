<template>
    <div class="aboutIBook">
        <div class="header">
            关于ibook
        </div>
        <div class="nr">
            <h5>ibook简介</h5>
            <p>"ibook网"（winxuan.com）是ibook在线电子商务有限公司（简称"ibook在线"）旗下的传统出版物（文化产品）电子商务平台。ibook在线是ibook出版传媒股份有限公司（简称"ibook"）的控股子公司。ibook是我国第一家按照上市公司标准组建的股份制出版发行企业。2007年，在香港联合交易所主板上市(HK:00811)，2016年强势回A(SH:601811)，成为国内首家“A+H”上市的出版发行企业。ibook网作为ibook推出的电子商务品牌，现已成为ibook自零售、中盘、定制之后的第四销售渠道。</p>
        </div>
        <div class="nr">
            <h5>行业地位</h5>
            <p>ibook网是国内最早从事图书电子商务且国内首批获得网络出版许可证的专业电商企业之一，是四川省三大电子商务标杆企业之一；2018年国内电商图书销售规模排名第三，ibook书店系统排名第一。运营至今，ibook网已拥有注册会员2000万余，常备图书品种85万余种；开辟了包括天猫、京东、当当、亚马逊等国内外知名网站在内的多家网络连锁渠道。目前，日均独立访客超40万，日浏览量（PV）超200万，是国内少数几家网上零售规模上10亿的企业之一。</p>
        </div>
        <div class="nr">
            <h5>物流优势</h5>
            <p>ibook网拥有世界先进的ERP-ASP系统，在成都、无锡、天津建有全国性的物流配送体系，面积12.6万平方米。在全国范围以及北美、澳新地区ibook网均支持配送。</p>
        </div>
        <div class="nr">
            <h5>营业执照</h5>
            <img src="/img/Description/1.png" alt="">
            <img src="/img/Description/2.png" alt="">
            <img src="/img/Description/3.jpg" alt="">
            <img src="/img/Description/4.jpg" alt="">
            <img src="/img/Description/5.png" alt="">
            <img src="/img/Description/6.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutIBook"
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
        &>img{
            max-width: 800px;
        }
    }
</style>