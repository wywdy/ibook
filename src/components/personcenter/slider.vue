<template>
    <div class="slider">
         <div class="slider-inner">
             <ul>
                  <li v-for="item in dataList">
                      <div class="firstname">{{ item.firstName }}</div>
                      <div class="first" v-for="val in item.children">
                          <router-link :to="val.path" class="sec"><i class="el-icon-menu"></i><span>{{val.secondName }}</span>
                          <b class="el-icon-d-arrow-right"></b></router-link>
                      </div>
                  </li>
             </ul>
         </div>
    </div>
</template>

<script>
    export default {
        name: "slider",
        data(){
            return {
                dataList:[
                    {firstName:"订单管理",children:[
                            {secondName:"我的订单",path:"/personCenter/myorder"},
                            {secondName:"售后/退款",path:"/personCenter/aftersale"},
                            {secondName:"帮助",path:"/personCenter/userhelp"},
                        ]
                    },
                    {firstName:"我的商品",children:[
                            {secondName:"已购商品",path:"/personCenter/usershop"},
                            {secondName:"我的收藏",path:"/personCenter/usercollect"},
                            {secondName:"降价通知",path:"/personCenter/noticeprice"},
                        ]
                    },
                    {firstName:"我的账户",children:[
                            {secondName:"个人信息",path:"/personCenter/userinfo"},
                            {secondName:"账号和绑定设置",path:"/personCenter/useraccount"},
                            {secondName:"我的收货地址",path:"/personCenter/shopaddress"},
                            {secondName:"安全中心",path:"/personCenter/safecenter"},
                        ]
                    },
                    {firstName:"我的社区",children:[
                            {secondName:"我的评论",path:"/personCenter/usercomment"},
                        ]
                    },
                ]
            }
        },
        created() {
           /* if(this.$route.fullPath==="/personCenter"){

            }*/
        }
    }
</script>

<style scoped lang="less">
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .el-icon-menu{
        float: left;margin-top: 11px;font-size: 6px;
    }
    .el-icon-d-arrow-right{
        float: right;
        margin-top: 11px;
        margin-right: 20px;
        display: none;
    }
    .router-link-exact-active{
        color: red!important;
    }
    .slider{
        width: 209px;
        border: 1px solid #c4c4c4;
        .slider-inner{
            width: 100%;
            .firstname{
                font-weight: bold;
                font-size: 14px;
                height: 42px;
                line-height: 42px;
                background: rgba(218, 218, 218, 0.23);
                border-bottom: 1px solid rgb(224, 224, 224);
            }
            .sec{
                display: block;
                width: 90%;
                margin: 0 auto;
                height: 34px;
                line-height: 34px;
                font-size: 12px;
                color: rgba(51,51,51);
                padding: 2px 10px;
                border-bottom: 1px dotted gainsboro;
                text-decoration: none;
                &>span{
                  float: left;
                  margin-left: 20px;
                }
                &:hover{
                    color: red;
                    cursor: pointer;
                }
                &:hover>span{
                    text-decoration: underline;
                }
                &:hover>b{
                    display: block;
                    color: #c4c4c4;
                }
            }

        }
    }

</style>