<template>
    <div class="shopaddress">
        <p class="title">我的收货地址</p>
        <div>现有收货地址<span @click="addAddress" class="addAddress">(新增收货地址)</span></div>
<!--        现有地址-->
        <el-card>
            <div class="adress_one">
                <p>收货人：<span>{{ addres_one.name }}</span></p>
                <p>详细地址：<span>{{ addres_one.dz }}</span></p>
                <p>手机号码：<span>{{ addres_one.tel }}</span></p>
                <p>固定号码：<span>{{ addres_one.phone }}</span></p>
                <p>电子邮箱：<span>{{ addres_one.ema }}</span></p>
            </div>
        </el-card>
        <!--        新增地址的弹出框-->
        <el-dialog
                title="收货地址管理"
                :visible.sync="dialogVisible"
                width="40%"
                @close="diagclose"
        >
            <el-form :label-position="labelPosition" label-width="80px" :model="addressform" :rules="rules" ref="addressformref" >
                <el-form-item label="收货人" prop="name">
                    <el-input v-model=" addressform.name"></el-input>
                </el-form-item>
                <el-form-item label="具体地址" prop="address">
                    <el-input v-model=" addressform.address"></el-input>
                </el-form-item>
                <el-form-item label="邮编" prop="code">
                    <el-input v-model=" addressform.code"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="tel">
                    <el-input v-model=" addressform.tel" placeholder="用于发货或送货通知"></el-input>
                </el-form-item>
                <el-form-item label="固定电话" prop="phone">
                    <el-input v-model=" addressform.phone" placeholder="用于送货通知"></el-input>
                </el-form-item>
                <el-form-item label="电子邮件" prop="email">
                    <el-input v-model=" addressform.email" placeholder="用于接收订单执行状态提醒邮件" ></el-input>
                </el-form-item>
                <el-form-item >
                    <el-checkbox v-model="addressform.checked">设为默认地址</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <div class="btn">
                        <el-button plain @click="save">保存收货地址</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ShopAddress",
        data() {
            let checkEmail=(rule,value,cb)=>{
                let regEmail=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
                if(regEmail.test(value)){
                      return cb()
                }else {
                    cb(new Error("请输入合法邮箱"))
                }
            }
            let checkTel=(rule,value,cb)=>{
                let regTel=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(regTel.test(value)){
                    return cb()
                }else{
                    cb(new Error("手机号格式错误"))
                }
            }
            return {
                addres_one:{
                    name:"张三",
                    dz:"四川省 成都市 汽车东站",
                    tel:"152528534990",
                    phone:"18747589812",
                    ema:"2938981467@qq.com"
                },
                dialogVisible: false,
                addressform: {
                    name: '',
                    address: "",
                    code:"",
                    tel:"",
                    phone:"",
                    email:"",
                    checked:false
                },
                rules: {
                    name: [
                        { required: true, message: '请输入收货人姓名', trigger: 'blur' },
                        { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
                    ],
                    address:[
                        { required: true, message: '请输入收货人地址', trigger: 'blur' },
                        { min: 4, max: 50, message: '长度在 4 到 50 个字符', trigger: 'blur' }
                    ],
                    code:[
                        { required: true, message: '请输入邮编', trigger: 'blur' },
                    ],
                    tel:[
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { validator: checkTel, trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '请输入固定号码', trigger: 'blur' },
                        { validator: checkTel, trigger: 'blur' }
                    ],
                    email:[
                        { required: true, message: '请输入电子邮箱', trigger: 'blur' },
                        { validator: checkEmail, trigger: 'blur' }
                    ]

                },
                labelPosition: "right",
                useraddressinfo:[]
            }
        },
        methods: {
            addAddress() {
                this.dialogVisible = true
            },
            save(){
                let that=this
                this.$refs.addressformref.validate((value)=>{
                    console.log(value);
                    console.log("123",that.addressform);
                })

            },
            diagclose(){
                this.$refs.addressformref.resetFields()
            }
        }
    }
</script>

<style scoped lang="less">

    .shopaddress {
        .title {
            margin: 0;
            padding: 0;
            text-align: left;
            font-size: 14px;
            font-weight: bold;
            line-height: 3;
            border-bottom: 1px solid rgba(114, 114, 114, 0.39);
            background: none;
        }

        & > div {
            text-align: left;
            font-size: 12px;

            span {
                margin-left: 10px;
                color: rgb(228, 57, 60);
                font-weight: bold;
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .btn {
            text-align: center;
            margin-left: -80px
        }
    }

    .el-input .input.el-input__inner {
        width: 50% !important;
        height: 30px !important;
    }
    .adress_one{
        &>p{
            width: 40%;
            margin: 10px auto;
            display: flex;
            justify-content: space-between;
            span{
                display: block;
                width: 200px;
            }
        }
    }

</style>