<template>
    <div>
        <p class="title">安全中心</p>
        <section class="bdinfo">
            <div>
                <div class="left">
                    <span class="el-icon-shopping-bag-1"></span>
                     <div>
                         <h5>登录密码</h5>
                         <p>建议您定期更改密码以及保证您的帐号安全</p>
                     </div>
                </div>
                <div class="right">
                    <span>修改登录密码</span>
                </div>
            </div>
            <div>
                <div class="left">
                    <span class="el-icon-phone"></span>
                    <div>
                        <h5>绑定手机</h5>
                        <p>若手机号已丢失或使用,请立即修改更换</p>
                    </div>
                </div>
                <div class="right">
                    <span>未绑定</span>
                </div>
            </div>
            <div>
                <div class="left">
                    <span class="el-icon-s-promotion"></span>
                    <div>
                        <h5>绑定邮箱</h5>
                        <p>绑定后可快速找回登录、使用绑定邮箱登录</p>
                    </div>
                </div>
                <div class="right">
                    <span>未绑定</span>
                </div>
            </div>
            <div>
                <div class="left">
                    <span class="el-icon-s-finance"></span>
                    <div>
                        <h5>支付密码</h5>
                        <p>若你忘记支付密码，可通过此进行修改</p>
                    </div>
                </div>
                <div class="right">
                    <span>设置密码</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "SafeCenter"
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
        background: none;
    }
    .bdinfo{
        width: 80%;
        margin: 0 auto;
        &>div{
           display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100px;
            border-bottom: 1px solid gainsboro;
            .left{
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    font-size: 30px;
                    color: red;
                    margin-right: 30px;
                }
                h5,p{
                    text-align: left;
                    margin: 0;
                }
                p{
                    font-size: 14px;
                    color: #828282;
                }

            }
            .right{
                margin-right: 30px;
                cursor: pointer;
                span{
                    display: inline-block;
                    width: 140px;
                    height: 34px;
                    line-height: 34px;
                    border: 1px solid gray;
                    font-size: 14px;
                    color: #000;
                }
            }

        }
    }
</style>