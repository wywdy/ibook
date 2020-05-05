<template>
    <div>
        <h1>axios请求</h1>
        <div>
<!--            <el-button type="primary" @click="userLogin">登录</el-button>-->
<!--            <el-button type="primary" @click="getUser">获取用户</el-button>-->
            <el-button type="primary" @click="getgoodsDetail">商品详情</el-button>
        </div>


        <hr>

    </div>
</template>

<script>
    export default {
        name: "caseSix",
        data (){
            return {
                user: {},
                token: '',//token,可以放VUEX，本地存储等
                goodsInfo:{},
                title: '演示展开收起',
                introduce: '',
                // 是否展示所有文本内容
                showTotal: true,
                // 显示展开还是收起
                exchangeButton: true,
                // 是否显示展开收起按钮
                showExchangeButton: false,
                rem: ''
            }
        },
        methods:{
            // userLogin (){
            //     let that = this;
            //     this.$axios.post('/api/user/login',
            //         this.qs.stringify({
            //             usernameOrTel: 'lisi',
            //             password: '123'
            //         })
            //     )
            //         .then((res)=>{
            //            console.log(res)
            //            console.log(res.headers)
            //             // 获取token，并存储
            //             that.token = res.headers['authenticate']
            //             sessionStorage.setItem('token',res.headers['authenticate'])
            //         })
            //         .catch((res)=>{
            //             console.log(res)
            //         })
            //
            // },
            // getUser(){
            //     this.$axios.get('/api/user'
            //         // ,
            //         // {
            //         //     headers: {
            //         //         //后端自验证token的有效期，失效时，就不能正常调用 接口。
            //         //         // 'authenticate': this.token
            //         //         'authenticate': sessionStorage.getItem('token')
            //         //     }
            //         // }
            //     )
            //         .then((res)=>{
            //             console.log(res)
            //             if(res.data.code === 200){
            //                 alert(res.data.msg);
            //             }
            //         })
            //         .catch((res)=>{
            //             console.log(res)
            //         })
            // },

        },
        mounted () {
            this.init();
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .top-prove {
        height: 100px;
        width: 100%;
        background: #dddddd;
        text-align: center;
        line-height: 100px;
    }
    .total-introduce {
        width: 400px;
        height: auto;
        overflow: hidden;
        font-size: 14px;
        color: #434343;
        margin: 10px;
    .intro-content {
    .merchant-desc {
        width: 100%;
        line-height: 21px;
    }
    }
    .unfold {
        display: block;
        z-index: 11;
        float: right;
        width: 40px;
        height: 21px;
    p {
        margin: 0;
        line-height: 21px;
        color: #7fbe87;
    }
    }
    }
    .detailed-introduce {
        font-size: 14px;
        color: #434343;
        position: relative;
        overflow: hidden;
        margin: 10px;
    .intro-content {
    // 最大高度设为4倍的行间距
    max-height: 84px;
        line-height: 21px;
        word-wrap: break-word;
        /*强制打散字符*/
        word-break: break-all;
        background: #ffffff;
        /*同背景色*/
        color: #ffffff;
        overflow: hidden;
    .merchant-desc {
        width: 100%;
        line-height: 21px;
    }
    &:after,
    // 这是展开前实际显示的内容
      &:before {
           content: attr(title);
           position: absolute;
           left: 0;
           top: 0;
           width: 100%;
           color: #434343
           // overflow: hidden;
       }
    // 把最后最后一行自身的上面三行遮住
      &:before {
           display: block;
           overflow: hidden;
           z-index: 1;
           max-height: 63px;
           background: #ffffff;
       }
    &:after {
         display: -webkit-box;
         -webkit-box-orient: vertical;
         overflow: hidden;
         height: 81px;
         /*截取行数*/
         -webkit-line-clamp: 4;
         text-overflow: ellipsis;
         -webkit-box-sizing: border-box;
         box-sizing: border-box;
         /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
         text-indent: -12em;
         /*尾部留空字符数*/
         padding-right: 4em;
     }
    .unfold {
        z-index: 11;
        width: 40px;
        height: 21px;
        outline: 0;
        position: absolute;
        right: 0;
        bottom: 0;
    p {
        margin: 0;
        line-height: 21px;
        color: #7fbe87;
    }
    }
    }
    }
    .bottom-prove {
        height: 100px;
        width: 100%;
        background: #dddddd;
        text-align: center;
        line-height: 100px;
    }
    .change-buttom {
        font-size: 14px;
        color: #2371be;
    .long {
        text-align: 21px;
        text-align: center;
        height: 21px;
    }
    .short {
        text-align: 21px;
        text-align: center;
        height: 20px;
    }
    }
</style>