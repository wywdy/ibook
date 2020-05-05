<template>
    <div class="login-box":style="{height:bodyHeight}">
        <div class="logo">
            <div><img src="/img/logo.png" alt=""></div>
        </div>
        <div class="login-content">
            <div>
                <div class="login">
                    <div class="login-title">登录</div>
                    <div>
                        <el-form :model="loginUser":rules="rules" status-icon ref="ruleForm">
                            <el-form-item prop="userName">
                                <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="loginUser.userName"></el-input>
                            </el-form-item>
                            <el-form-item prop="passWord">
                                <el-input
                                        prefix-icon="el-icon-view"
                                        type="password"
                                        placeholder="请输入密码"
                                        v-model="loginUser.passWord"
                                ></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="code-box">
                        <div>
                            <el-input type="text" v-model="code" placeholder="请输入验证码"></el-input>
                        </div>
                        <div>
                            <img :src="codeSrc" alt="" @click="changeCode">
                        </div>
                    </div>
                    <div class="loginBtn">
                        <input  type="button" value="登录" @click="login">
                    </div>
                    <div class="register">
                        <div>
                                <span>
                                <a href="" class="">立即注册</a>/
                            </span>
                            <span>
                                <a href="">忘记密码？</a>
                            </span>
                        </div>
                    </div>
                    <div class="otherLogin">
                        <span>其他方式登录</span>
                        <div></div>
                    </div>
                    <div class="other">
                        <a href=""><i style="background-position:-19px 0;"></i></a>
                        <a href="" style="background-color: #d32f2f;"><i style="background-position:-38px 0;"></i></a>
                        <a href=""style="background-color: #0ae;"><i style="background-position:-57px 0; width: 25px" ></i></a>
                        <a href="" style="background-color: #00d20d;"><i style="background-position:-83px 0; width: 24px"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Login",
        data(){
            // 用户名的校验方法
            let validateName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error("请输入用户名"));
                }
                const userNameRule = /^[a-zA-Z0-9_]{3,15}$/;
                if (userNameRule.test(value)) {
                    this.$refs.ruleForm.validateField("checkPass");
                    return callback();
                } else {
                    return callback(new Error("长度4-16之间"));
                }
            };
            // 密码的校验方法
            let validatePass = (rule, value, callback) => {
                if (value === "") {
                    return callback(new Error("请输入密码"));
                }
                const passwordRule = /^[a-zA-Z0-9_]{3,15}$/;
                if (passwordRule.test(value)) {
                    this.$refs.ruleForm.validateField("checkPass");
                    return callback();
                } else {
                    return callback(
                        new Error("字母开头,长度4-18之间,允许字母数字和下划线")
                    );
                }
            };
            return{
                bodyHeight: window.innerHeight + 'px',
                code:'',
                code64:'',
                codeSrc:'',
                loginUser:{
                    userName:'',
                    passWord:'',
                },
                rules:{
                    userName: [{ validator: validateName, trigger: "blur" }],
                    passWord: [{ validator: validatePass, trigger: "blur" }]
                }
            }
        },
        methods:{
            login(){
                let that=this;
                this.$refs["ruleForm"].validate(valid=>{
                    if(valid){
                        this.$axios.post(`/api/fore/login/${that.code}/${that.code64}`,
                            {
                                "userNickname": that.loginUser.userName,
                                "userPassword": that.loginUser.passWord
                            }
                        ).then((res)=>{
                            // 获取token，并存储
                            console.log(res)
                            that.$store.commit('setToken',res.data.data.token)
                            sessionStorage.setItem('token',res.data.data.token)
                            this.$router.push('/')
                        })
                            .catch((res)=>{
                                console.log(res)
                            })
                    }
                    else{
                        return false;
                    }
                })
                this.$router.push('/home')
            },
            changeCode(){
                let that = this;
                this.$axios.get('/api/fore/captcha')
                    .then((res)=>{
                        let a;
                        for(var item in res.data.data)
                        {
                            a=item;
                        }
                        that.code64=a;
                        that.codeSrc=res.data.data[a]
                    })
                    .catch((res)=>{
                        console.log(res)
                    })

            }
            // login(){
            //         let that=this;
            //         this.$axios.post('/api/register/112233',
            //             {
            //                 "userNickname": "11",
            //                 "userPassword": "22",
            //                 "userPhone":"18940996191"
            //             }
            //         ).then((res)=>{
            //             // 获取token，并存储
            //             console.log(res)
            //         })
            //             .catch((res)=>{
            //                 console.log(res)
            //             })
            // }

        },
        mounted() {
            let that = this;
            this.$axios.get('/api/fore/captcha')
                .then((res)=>{
                    let a;
                    for(var item in res.data.data)
                    {
                        a=item;
                    }
                    that.code64=a;
                    that.codeSrc=res.data.data[a]
                })
                .catch((res)=>{
                    console.log(res)
                })
        }
    }
</script>

<style scoped lang="less">
    .logo{
        width: 1130px;
        margin: auto;
        &>div{
            width: 200px;
            height: 98px;
            padding-top: 27px;
            box-sizing: border-box;
        }
    }

    .login-content{
        width: 100%;
        height: 588px;
        background-image: url('../../public/img/1.jpg');
        background-position: -320px 0;
        &>div{
            width: 1130px;
            margin: auto;
            position: relative;
            height: 588px;
        }
    }
    .login{
        width: 410px;
        min-height: 556px;
        padding: 0 35px;
        box-sizing: border-box;
        position: absolute;
        background-color: white;
        bottom: 0;
        right: 0;

    }
    .in{
        height: 22px;
        line-height: 22px;
        padding: 13px 16px 13px 14px;
        display: block;
        width: 306px;
        color: #4a4a4a;
        margin-bottom: 15px;
        /*border-color:#ddd ;*/
    }
    .login-title{
        padding: 27px 0 24px;
        text-align: center;
        font-size: 24px;
        color: #666;

    }
    .loginBtn{
        padding-top: 10px;

        input{
            background-color: #ff6700;
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: block;
            margin-bottom: 14px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
            border: 0 none;
        }

    }
    .register>div{
        float: right;
        a{
            color: #999;
        }
    }
    .code-box{
        display: flex;
        justify-content: space-between;
        input{
            height: 40px;
            width: 150px;
        }
        &>div{
            height: 50px;

            width: 150px;
        }
        img{
            width: 140px;
            height: 40px;
        }
    }
    .otherLogin{
        padding-top: 120px;
        font-size: 14px;
        color: #bbb;
        text-align: center;
        span{
            z-index: 99;
            position: relative;
            background-color: white;
        }
        div{
            margin-top: -8px;
            background-color: #e0e0e0;
            height: 1px;
            position: relative;
        }
    }
    .other{
        padding-top: 3px;
        text-align: center;
        margin-top: 20px;
        a{
            display: inline-block;
            width: 30px;
            height: 30px;
            margin: 0 17px;
            border-radius: 50%;
            background-color: #0288d1;
        }
        i{
            background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png);
            width: 18px;
            height: 18px;
            display: inline-block;
            /* margin-right: 10px; */
            /* display: inline-block; */
            vertical-align: middle;
            margin: 4px auto 0;
        }
    }


</style>