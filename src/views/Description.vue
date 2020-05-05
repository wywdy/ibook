<template>
    <div>
        <el-header class="top">
            您现在所在的位置：ibook网>公司信息>{{List}}
        </el-header>
        <el-main>
            <div class="descriptionList">
                <DescriptionList></DescriptionList>
                <div class="show">
                    <router-view/>
                </div>
            </div>
        </el-main>
    </div>
</template>

<script>
    import DescriptionList from "@/components/description/DescriptionList.vue"

    export default {
        name: "Description",
        data(){
            return {
                List:''
            }
        },
        methods:{

        },
        components:{
            DescriptionList,
        }
    }
</script>

<style scoped lang="less">
    .top{
        width: 1210px;
        height: 40px!important;
        line-height: 40px;
        margin: 0 auto;
    }
    .descriptionList{
        width:1210px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .show{
            width: 800px;
            margin-right: 190px;
            /*border: 1px solid #efcfff;*/
        }
    }
</style>