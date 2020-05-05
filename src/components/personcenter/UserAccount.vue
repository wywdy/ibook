<template>
    <div>
      <p class="title">我的账号</p>
      <section>
          <div v-for="item in dataList">
              <p class="info">注册账号</p>
              <div class="bd">
                  <div><img :src="item.imgsrc" alt=""></div>
                  <div class="item">
                        <h4>{{ item.title }}</h4>
                      <div><span class="el-icon-minus">账号注销</span></div>
                  </div>
              </div>
              <p class="info">其他登录方式</p>
              <div v-for="v in item.children" class="bd">
                  <div><img :src="v.imgsrc" alt=""></div>
                  <div class="item">
                      <h4>{{ v.title }}</h4>
                      <div><span class="el-icon-plus">点击绑定</span></div>
                  </div>
              </div>

          </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "UserAccount",
        data(){
            return {
                dataList:[
                    {title:"文轩网账号",imgsrc:"/img/PTimages/logo.png",children:[
                            {title:"微信账号",imgsrc:"/img/PTimages/t1.png"},
                            {title:"qq账号",imgsrc:"/img/PTimages/Q1.png"},
                            {title:"微博账号",imgsrc:"/img/PTimages/W1.png"},
                        ]}
                ]
            }
        }
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
   /* .el-icon-plus{
        color: red;
    }*/
    section{
        width: 80%;
        margin: 0 auto;
        p{
          /*  line-height: 30px;
            height: 30px;*/
            background: #f0f0f0;
            text-align: left;
            font-size: 12px;
        }

        .bd{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .item{
                display: flex;
                flex-basis: 80%;
                justify-content: space-between;
                align-items: center;
                margin: 15px 0;
                span{
                    display: block;
                    font-size: 12px;
                    width: 150px;
                    height: 40px;
                    line-height: 40px;
                    border: 1px solid gray;
                    cursor: pointer;
                }
            }
        }
    }

</style>