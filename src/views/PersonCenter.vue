<template>
    <div class="personCenter">
        <myslider></myslider>
        <div class="show">
            <router-view/>
        </div>
    </div>
</template>

<script>

    import myslider from "@/components/personcenter/slider.vue"
    export default {
        name: "PersonCenter",
        data(){
            return {}
        },
        components:{
            myslider,
        },
        created() {
           if(this.$route.fullPath==="/personCenter"){

           }
        }
    }
</script>

<style scoped lang="less">
   .personCenter{
       width:1210px;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
       .show{
           width: 980px;
           //border: 1px solid red;
       }

   }
</style>