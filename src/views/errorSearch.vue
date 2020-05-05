<template>
    <div class="errorBox">
        <div class="errorImg"><img src="../../public/img/searchBook/searchError.jpg" alt=""></div>
        <div class="contentText">
            <h3>啊哦~抱歉，没有找到与<span style="color: #db2a41">{{searchText}}</span>相关的商品哦~要不您换个关键词我帮您找找看~</h3>
            <div class="suggestion">
                <p style="color: black;font-weight: 700">建议您：</p>
                <p>1.看看输入的文字是否有误</p>
                <p>2.去掉可能不必要的字词，如"的"、"什么"等</p>
                <p>3.如"烈火青春"改成"烈火 青春"或"青春 烈火"</p>
            </div>
            <div class="searchSomething">
                <el-input placeholder="啊哦~没找到？重新搜索吧~" size="large">
                    <el-button slot="append" icon="el-icon-search" style="color: #db2a41;">搜索</el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "errorSearch",
        data(){
            return {
                searchText:'DFC',//搜索字段
            }
        }
    }
</script>

<style scoped lang="less">
    .errorBox{
        margin-top: 30px;
        width: 1208px;
        height: 298px;
        border: 1px solid #e8e8e8;
        margin-left: auto;
        margin-right: auto;
        background-color: #f7f7f7;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        &>.errorImg{
            width: 220px;
           margin-top: 48px;
        }
        &>.contentText{
            flex: 1;
            text-align: left;
            &>h3{
                padding-top: 60px;
            }
            &>.suggestion{
               &>p{
                   margin: 0;
                   padding-top: 3px;
                   padding-bottom: 3px;
                   font-size: 14px;
                   color: #8e8e8e;
               }
            }
            &>.searchSomething{
                width: 600px;
                margin-top: 20px;
            }
        }
    }
</style>