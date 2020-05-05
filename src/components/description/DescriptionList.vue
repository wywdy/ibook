<template>
    <div class="slider">
        <div class="slider-inner">
            <ul>
                <li >
                    <div class="firstname">公司信息</div>
                    <div class="first"  @click="getTitle" v-for="item in dataList">
                        <router-link :to="item.path" class="sec"><i class="el-icon-menu"></i><span>{{item.Name}}</span>
                            <b class="el-icon-d-arrow-right"></b></router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DescriptionList",
        data() {
            return{
                dataList:[
                            {Name:"关于ibook",path:"/description/aboutIBook"},
                            {Name:"联系ibook",path:"/description/contact"},
                            {Name:"合作伙伴",path:"/description/cooperative"},
                            {Name:"加入ibook",path:"/description/join"}
                    ],
                title:''
            }
        },
        methods:{
            getTitle(){
                console.log(item.Name)
                // this.$emit("titleChanged","item.Name")
            }
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
    .slider{
        width: 200px;
        height: 198px;
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