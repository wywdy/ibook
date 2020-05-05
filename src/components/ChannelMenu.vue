<template>
    <div class="menu">
        <div class="menuTitle">{{MenuList.firstTitle}}频道分类导航</div>
        <div class="menuSecond">
            <span v-for="item in MenuList.secondTitle">{{item.secondTitleName}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChannelMenu",
        props:['menuId'],
        data(){
            return {
                MenuList:{firstTitle:'文学',secondTitle:[
                        {secondTitleId:'wx01',secondTitleName:'四大名著'},
                        {secondTitleId:'wx02',secondTitleName:'古典文学'},
                        {secondTitleId:'wx03',secondTitleName:'历史古籍'},
                        {secondTitleId:'wx04',secondTitleName:'民间文学'},
                        {secondTitleId:'wx05',secondTitleName:'现当代文学'},
                        {secondTitleId:'wx06',secondTitleName:'名著读物'},
                        {secondTitleId:'wx07',secondTitleName:'名人传记'},
                        {secondTitleId:'wx08',secondTitleName:'科幻小说'},
                        {secondTitleId:'wx09',secondTitleName:'武侠小说'},
                        {secondTitleId:'wx10',secondTitleName:'幽默漫画'},
                        {secondTitleId:'wx11',secondTitleName:'作家作品集'},
                        {secondTitleId:'wx12',secondTitleName:'小说'},
                        {secondTitleId:'wx13',secondTitleName:'诗歌散文'},
                        {secondTitleId:'wx14',secondTitleName:'外国文学'},
                    ]},
                channelId:''
            }
        },
        mounted() {
            let that=this;
            let categoryId=this.$route.params.categoryId;
            this.channelId=categoryId;
            let url='/api/fore/channel/channelMenu/'+categoryId;
            this.$axios.get(url)
                .then((res=>{
                    if(res.status===200){
                        this.MenuList.firstTitle=res.data.categoryName;
                        let len=res.data.categoryVo.length;
                        let Mlen=this.MenuList.secondTitle.length;
                        let num=Mlen-len;
                        this.MenuList.secondTitle.splice(len,num)
                        for(let i=0;i<this.MenuList.secondTitle.length;i++){
                            this.MenuList.secondTitle[i].secondTitleId=res.data.categoryVo[i].categoryId;
                            this.MenuList.secondTitle[i].secondTitleName=res.data.categoryVo[i].categoryName
                        }
                    }
                }))
                .catch((err)=>{
                    console.log(err)
                })

        }
    }
</script>

<style scoped lang="less">
.menu{
    width: 300px;
    height: 300px;
    background-color: #fff0f4;
    &>.menuTitle{
        height: 35px;
        width: 100%;
        background-color: #f6517a;
        color: white;
        line-height: 35px;
        font-weight: bolder;
    }
    &>.menuSecond{
        font-size: 14px;
        width: 80%;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        padding-top: 5px;
        &>span{
            margin-right: 10px;
            display: block;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            padding-left: 2px;
            padding-right: 2px;
            color: #7b293d;
            text-align: left;
        }
        &>span:hover{
            cursor: pointer;
            background-color: rgba(246, 81, 122, 0.26);
        }
    }
}
</style>