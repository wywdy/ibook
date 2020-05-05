<template>
    <div class="userinfo">
        <p class="title">我的资料</p>
        <el-row>
            <el-col :span="24">
                <div class="btn">
                    <button type="button">基本信息</button>
                </div>
            </el-col>
        </el-row>
        <section>
            <div>
                     <span>登录名:</span>
                     <div>{{ $store.state.user }}</div>
            </div>
            <div>
                <span>昵称:</span>
                <div><input type="text"></div>
            </div>
            <div>
                <span>真实姓名:</span>
                <div><input type="text"></div>
            </div>
            <div>
                <span>性别:</span>
                <div>
                    <input type="radio" name="sex" value="man"><label>男</label><input type="radio" name="sex" value="woman"><label>女</label>
                </div>
            </div>
            <div>
                <span>生日:</span>
                <div><input type="date"></div>
            </div>
            <div>
                <span>居住地:</span>
                <div><input type="text"></div>
            </div>
            <div>
                <span>身份:</span>
                <div>
                    <input type="radio" name="sf">在校学生
                    <input type="radio" name="sf">教师
                    <input type="radio" name="sf">上班族
                    <input type="radio" name="sf">自由职业
                </div>
            </div>
            <div>
                <span>月收入:</span>
                <div>
                    <select name="" id="">
                        <option>请选择</option>
                        <option value="1">2000-300</option>
                        <option value="2">3000-6000</option>
                        <option value="3">2000以下</option>
                    </select>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // import VDistpicker from 'v-distpicker'
    export default {
        name: "UserInfo",
        data(){
            return {
                userform:{

                    name:""
                }
            }
        },
      //  components: { VDistpicker }
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
    .userinfo{
        .btn {
            margin-top: 20px;
            overflow: hidden;
            border-bottom: 2px solid red;

            button {
                background: #e71208;
                width: 120px;
                height: 34px;
                line-height: 34px;
                border-style: solid;
                outline: none;
                color: #fff;
                float: left;
            }
        }
        section{
            &>div{
                width: 80%;
                height: 40px;
                border-bottom: 1px solid gainsboro;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    display: block;
                    width: 120px;
                    text-align: right;
                }
                &>div{
                    width: 340px;
                    select{
                        width: 180px;
                    }
                }
            }
        }
    }

</style>