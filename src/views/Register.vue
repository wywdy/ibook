<template>
    <div>
        <div class="register-wrapper">
            <div id="register">
                <p class="title">注册</p>
                <el-form
                        :model="ruleForm2"
                        status-icon
                        :rules="rules2"
                        ref="ruleForm2"
                        label-width="0"
                        class="demo-ruleForm"
                >
                    <el-form-item prop="tel">
                        <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="smscode" class="code">
                        <el-input v-model="ruleForm2.smscode" placeholder="验证码"></el-input>
                        <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"
                                  placeholder="输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"
                                  placeholder="确认密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
                        <p class="login" @click="gotoLogin">已有账号？立即登录</p>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            // <!--验证手机号是否合法-->
            let checkTel = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'))
                } else if (!this.checkMobile(value)) {
                    callback(new Error('手机号码不合法'))
                } else {
                    callback()
                }
            }
            //  <!--验证码是否为空-->
            let checkSmscode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机验证码'))
                } else {
                    callback()
                }
            }
            // <!--验证密码-->
            let validatePass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"))
                }
                const passwordRule = /^[a-zA-Z0-9_]{3,15}$/;
                if (passwordRule.test(value)) {
                    this.$refs.ruleForm2.validateField("checkPass");
                    return callback();
                } else {
                    return callback(
                        new Error("字母开头,长度4-18之间,允许字母数字和下划线")
                    );
                }
            }
            // <!--二次验证密码-->
            let validatePass2 = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: "",
                    checkPass: "",
                    tel: "",
                    smscode: ""
                },
                rules2: {
                    pass: [{validator: validatePass, trigger: 'change'}],
                    checkPass: [{validator: validatePass2, trigger: 'change'}],
                    tel: [{validator: checkTel, trigger: 'change'}],
                    smscode: [{validator: checkSmscode, trigger: 'change'}],
                },
                buttonText: '发送验证码',
                isDisabled: false, // 是否禁止点击发送验证码按钮
                flag: true
            }
        },
        methods: {
            // <!--发送验证码-->
            sendCode() {
                let that=this
                let tel = this.ruleForm2.tel
                console.log(tel)

                if (this.checkMobile(tel)) {
                    this.$axios.post('/api/posts/sms_send',
                        this.qs.stringify({
                            "tpl_id": '',
                            "key": '',
                            'userTel':that.ruleForm2.tel
                        })
                    ).then((res)=>{
                        console.log('axios.post()==res:',res)
                        console.log('axios.post():',res.data)
                    })
                        .catch((res)=>{
                            console.log(res)
                        })

                    let time = 60
                    this.buttonText = '已发送'
                    this.isDisabled = true
                    if (this.flag) {
                        this.flag = false;
                        let timer = setInterval(() => {
                            time--;
                            this.buttonText = time + ' 秒'
                            if (time === 0) {
                                clearInterval(timer);
                                this.buttonText = '重新获取'
                                this.isDisabled = false
                                this.flag = true;
                            }
                        }, 1000)
                    }
                }
            }
            ,
            // <!--提交注册-->
            submitForm(formName) {
                let that = this;
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$axios.post(`/api/fore/register/${that.ruleForm2.tel}/${that.ruleForm2.pass}/${that.ruleForm2.smscode}`,
                            this.qs.stringify({
                                "userTel": that.ruleForm2.tel,
                                "userPassword": that.ruleForm2.pass,
                                'userSmscode':that.ruleForm2.smscode
                            })
                        ).then((res)=>{
                            // 获取token，并存储
                            console.log(res)
                            console.log('axios.post():',res.data)
                            setTimeout(() => {
                                this.$message({
                                    type: 'success',
                                    message: '注册成功'

                                });
                            }, 400);

                            this.$router.push('/login')
                        })
                            .catch((res)=>{
                                console.log(res)
                            })
                    } else {
                        console.log("注册失败!");
                        return false;
                    }
                })
            }
            ,
            // <!--进入登录页-->
            gotoLogin() {
                this.$router.push({
                    path: "/login"
                });
            }
            ,
            // 验证手机号
            checkMobile(str) {
                let re = /^1\d{10}$/;
                if (re.test(str)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .register-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: url('../../public/img/1.jpg');
        background-position: -320px 0;
    }

    #register {
        max-width: 340px;
        margin: 60px auto;
        background: #fff;
        padding: 20px 40px;
        border-radius: 10px;
        position: relative;
        z-index: 9;
    }

    .title {
        font-size: 26px;
        line-height: 50px;
        font-weight: bold;
        margin: 10px;
        text-align: center;
    }

    .el-form-item {
        text-align: center;
    }

    .login {
        margin-top: 10px;
        font-size: 14px;
        line-height: 22px;
        color: #1ab2ff;
        cursor: pointer;
        text-align: left;
        text-indent: 8px;
        width: 160px;
    }

    .login:hover {
        color: #2c2fd6;
    }

    .code >>> .el-form-item__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .code button {
        margin-left: 20px;
        width: 140px;
        text-align: center;
    }

    .el-button--primary:focus {
        background: #409EFF;
        border-color: #409EFF;
        color: #fff;
    }
</style>