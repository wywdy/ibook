<template>
        <div>
            <p class="title">帮助指南</p>
            <div class="bz">
                <p><i class="el-icon-caret-right"></i>新手入门</p>
                <div>
                    <p>购物保障</p>
                    <p>购物流程</p>
                    <p>常见问题</p>
                    <p>联系客服</p>
                </div>
            </div>
            <div class="bz">
                <p><i class="el-icon-caret-right"></i>配送服务</p>
                <div>
                    <p>货到付款</p>
                    <p>配送范围和时间</p>
                    <p>配送收费标准</p>
                    <p>快递查询入口</p>
                    <p>验货与签收</p>
                </div>
            </div>
            <div class="bz">
                <p><i class="el-icon-caret-right"></i>支付方式</p>
                <div>
                    <p>货到付款</p>
                    <p>在线支付</p>
                    <p>银行转账/汇款</p>
                    <p>其他支付方式</p>
                </div>
            </div>
            <div class="bz">
                <p><i class="el-icon-caret-right"></i>售后服务</p>
                <div>
                    <p>退换货规则</p>
                    <p>如何申请售后服务</p>
                    <p>退款及提现</p>
                </div>
            </div>
            <div class="bz">
                <p><i class="el-icon-caret-right"></i>我的订单</p>
                <div>
                    <p>下单演示</p>
                    <p>订单状态/查询</p>
                    <p>订单取消</p>
                    <p>发票制度</p>
                    <p>积分规则</p>
                </div>
            </div>
            <div class="bz">
                <p><i class="el-icon-caret-right"></i>服务</p>
                <div>
                    <p>礼券（优惠券）</p>
                    <p>购书卡</p>
                    <p>好书推荐</p>
                    <p>交易条款</p>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "UserHelp"
    }
</script>

<style scoped lang="less">
    .title{
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 14px;
        font-weight: bold;
        line-height: 3;
        border-bottom: 1px solid rgba(114, 114, 114, 0.39);
    }

    .bz{
        text-align: left;
        font-size: 14px;
        height: 60px;
        &>div{
            &>p{
                float: left;
                margin: 0 10px;
                font-size: 13px;
            }
        }
    }
</style>