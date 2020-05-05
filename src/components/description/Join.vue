<template>
    <div class="join">
        <div class="header">
            加入ibook
        </div>
        <img src="/img/Description/company.jpg" alt="">
        <div class="nr">
            <h5>福利待遇</h5>
            <p>双休+朝九晚五+五险一金+有竞争力的薪资+完善的培训体系+宽广的晋升空间+其他（工作餐、节日福利、生日福利、年度体检等等）</p>
        </div>
        <div class="nr">
            <h5>我们秉承<br>认真工作</h5>
        </div>
        <div class="img">
            <div>
                <img src="/img/Description/job_001.jpg" alt="">
                <img src="/img/Description/job_002.jpg" alt="">
            </div>
            <div>
                <img src="/img/Description/job_003.jpg" alt="">
                <img src="/img/Description/job_004.jpg" alt="">
            </div>
            <div>
                <img src="/img/Description/job_005.jpg" alt="">
                <img src="/img/Description/job_006.jpg" alt="">
            </div>
        </div>
        <div class="nr">
            <h5>尽情生活</h5>
        </div>
        <div class="img">
            <div>
                <img src="/img/Description/activity_001.jpg" alt="">
                <img src="/img/Description/activity_002.jpg" alt="">
            </div>
            <div>
                <img src="/img/Description/activity_003.jpg" alt="">
                <img src="/img/Description/activity_004.jpg" alt="">
            </div>
        </div>
        <div class="nr">
            <h5>加入我们</h5>
            <p>方式一：请将个人简历以“姓名+部门+职位”为名，发送至人力资源部邮箱hrzx@winshare.com.cn（请勿以附件形式发送简历！）</p>
            <p>方式二：请将个人简历请邮寄到：四川省成都市金牛区蓉北商贸大道文轩路6号2楼 文轩在线 人力资源部（邮编：610081）</p>
            <p>温馨提示：简历中请注明： 1.您所申请的职位 2.您目前或期望的薪资范畴！</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Join"
    }
</script>

<style scoped lang="less">
    .join{
        border: 1px solid #efcfff;
    }
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
    img{
        width: 780px;
        margin: 10px;
    }
    .img{
        width: 800px;
        &>div{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 790px;
            margin: 0 auto;
            &>img{
                display: flex;
                flex-wrap: nowrap;
                width: 390px;
                margin: 5px 2.5px;
            }
        }

    }

</style>