<template>
        <el-container>
            <!-- 顶部导航栏 -->
            <div class="topbar">
                <TopBar></TopBar>
            </div>
            <!-- 顶部导航栏END -->

            <!-- 顶栏容器 -->
            <el-header>
                <MyHeader></MyHeader>
            </el-header>
            <!-- 顶栏容器END -->


            <!-- 主要区域容器 -->
            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
            <!-- 主要区域容器END -->

            <!-- 底栏容器 -->
            <el-footer>
                <MyFooter></MyFooter>
            </el-footer>
            <!-- 底栏容器END -->
        </el-container>
</template>

<script>
    import TopBar from "@/components/TopBar";
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";
    export default {
        components: {MyFooter, MyHeader, TopBar}
    }
</script>

<style scoped>

</style>