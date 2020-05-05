<template>
    <div class="Subcategories">
        <el-container>
            <el-header class="sc-header">
                <el-breadcrumb separator="/" class="sc-br">
                    <el-breadcrumb-item><el-link href="/AllCategories">全部分类</el-link></el-breadcrumb-item>
                    <el-breadcrumb-item><el-link @click="isSc(null)" :disabled="scid==null">{{acname()}}</el-link></el-breadcrumb-item>
                    <el-breadcrumb-item v-if="scid!=null"><el-link disabled>{{sclist()[scid].categoryName}}</el-link></el-breadcrumb-item>
                </el-breadcrumb>
                <div v-if="scid==null">
                    <ul>
                        <li v-for="(item,index) in sclist()"><el-link @click="isSc(index)">{{item.categoryName}}</el-link></li>
                    </ul>
                </div>
            </el-header>
            <el-main>
                <div>
                    <div class="sc-limit">
                        <b>折扣：</b>
                        <el-select v-model="scZ" size="small" placeholder="请选择">
                            <el-option label="不限" value="1"></el-option>
                            <el-option label="7折以上" value="2"></el-option>
                            <el-option label="5-7折" value="3"></el-option>
                            <el-option label="5折以下" value="4"></el-option>
                        </el-select>
                        <b>价格：</b>
                        <el-select v-model="scP" size="small" placeholder="请选择">
                            <el-option label="不限" value="1"></el-option>
                            <el-option label="100元以上" value="2"></el-option>
                            <el-option label="50-99元" value="3"></el-option>
                            <el-option label="30-49元" value="4"></el-option>
                            <el-option label="10-29元" value="5"></el-option>
                            <el-option label="0-9元" value="6"></el-option>
                        </el-select>
                    </div>
                    <div class="sc-conditions">
                        <el-tabs is="ul" v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane is="li" label="综合排序" name="first">综合排序</el-tab-pane>
                            <el-tab-pane is="li" label="销量" name="second">销量<i class="el-icon-sort-down"></i></el-tab-pane>
                            <el-tab-pane is="li" label="价格" name="third">价格<i class="el-icon-sort"></i></el-tab-pane>
                            <el-tab-pane is="li" label="折扣" name="fourth">折扣<i class="el-icon-sort-down"></i></el-tab-pane>
                            <el-tab-pane is="li" label="出版时间" name="five">出版时间<i class="el-icon-sort-down"></i></el-tab-pane>
                            <el-tab-pane is="li" label="好评率" name="sex">好评率<i class="el-icon-sort-down"></i></el-tab-pane>
                            <el-tab-pane is="li" label="只显示有货"><el-checkbox v-model="hasStock">只显示有货</el-checkbox></el-tab-pane>
                            <el-tab-pane is="li" label="网格/列表" class="sc-ol">
                                <el-radio-group v-model="scOrder" class="nobd">
                                    <el-radio-button label="1">
                                        <a class="el-icon-menu">网格</a>
                                    </el-radio-button>
                                    <el-radio-button label="2">
                                        <a class="el-icon-notebook-2">列表</a>
                                    </el-radio-button>
                                </el-radio-group>
                            </el-tab-pane>
                            <el-tab-pane is="li" label="换页" v-model="nowPage,allPage">
                                <span class="el-icon-arrow-left" @click="scPre(nowPage)" :disabled="preDisabled"></span>
                                <span class="sc-nowPage">{{nowPage}}</span>
                                <span v-model="allPage">/{{allPage}}</span>
                                <span class="el-icon-arrow-right" @click="scNext(nowPage,allPage)" :disabled="nextDisabled"></span></el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="sc-books" v-show="scOrder==1">
                        <div v-for="books in bookList">
                            <div class="book-items">
                                <el-avatar shape="square" :size="200" fit="fit" :src="books.children.cover"></el-avatar>
                                <div class="bookName"><el-link :to="{name:'productDetail',params:{pid:books.b_id}}"><b>{{books.children.name}}</b></el-link></div>
                                <div>
                                    <b class="Red">{{books.children.price}}</b><s class="old-price">原价:{{books.children.oldPrice}}</s>
                                </div>
                                <el-button icon="el-icon-shopping-cart-2" class="add-cart" @click="addCart(books.b_id)">加入购物车</el-button>
                                <el-button icon="el-icon-plus" class="collect" @click="collect(books.b_id)">收藏</el-button>
                                <div class="hd-box">
                                    <div><el-link>{{books.children.author}}</el-link></div>
                                    <div class="book-score">
                                        <el-rate v-model="books.children.score" disabled></el-rate>
                                    </div>
                                    <div>出版社：<el-link>{{books.children.press}}</el-link></div>
                                    <div>出版日期：{{books.children.birthday}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-books-list" v-show="scOrder==2">
                        <div v-for="books in bookList">
                            <div class="book-items-list">
                                <div class="book-img">
                                    <el-avatar shape="square" :size="200" fit="fit" :src="books.children.cover"></el-avatar>
                                </div>
                                <div class="book-msg">
                                    <div class="bookName"><el-link :to="{name:'productDetail',params:{pid:books.b_id}}"><b>{{books.children.name}}</b></el-link></div>
                                    <div>
                                        <b class="Red">{{books.children.price}}</b><span>定价:<s>{{books.children.oldPrice}}</s></span>
                                    </div>
                                    <div><span>作者：</span><el-link>{{books.children.author}}</el-link></div>
                                    <div><span>出版社：</span><el-link>{{books.children.press}}</el-link></div>
                                    <div><span>出版日期：</span>{{books.children.birthday}}</div>
                                    <div class="book-score">
                                        <span>顾客评价：</span><el-rate v-model="books.children.score" disabled></el-rate>
                                    </div>
                                </div>
                                <div class="book-btn">
                                    <div>
                                        <el-button icon="el-icon-shopping-cart-2" class="add-cart" @click="addCart(books.b_id)">加入购物车</el-button>
                                    </div>
                                    <div>
                                        <el-button icon="el-icon-plus" class="collect" @click="collect(books.b_id)">收藏1111</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <el-pagination
                                background
                                @current-change="handleCurrentChange"
                                :current-page.sync="nowPage"
                                :page-size="pageSize"
                                layout="prev, pager, next"
                                :total="bookList.length">
                        </el-pagination>
                    </div>
                </div>
            </el-main>
            <el-footer class="sc-footer">
                <h4>浏览足迹</h4>
                <div class="sc-history">
                    <div class="footprints" v-for="foot in footprints">
                        <el-avatar shape="square" :size="160" fit="fit" :src="foot.cover" lazy></el-avatar>
                        <div class="bookName"><el-link><b>{{foot.name}}</b></el-link></div>
                        <div>
                            <b class="Red">{{foot.price}}</b>
                        </div>
                    </div>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Subcategory",
        created() {
            this.acid=this.$route.query.ac
            this.scid=this.$route.query.sc

            //请求分类列表
            this.$axios.get('/api/fore/book/getBookType', {
                params: {}
            })
                .then(res => {
                    // console.log('axios.get()==res:bokktype', res);
                    // console.log('axios.get():', res.data);
                    if (res.status === 200) {
                        this.bigTypeName = res.data
                        console.log(this.bigTypeName)
                        console.log(this.acid,this.scid)
                        console.log(this.acname,this.bigTypeName[this.acid].categoryName,this.sclist,this.bigTypeName[this.acid].categoryVo)
                    }
                })
                .catch((res)=>{
                    console.log(res)
                })

            //请求跳转对应分类的书籍列表
            /*this.$axios.get('/api/fore/getBookByCategoryId/0', {
                params: {}
            })
                .then(res => {
                    console.log('axios.get()==res:books', res);
                    console.log('axios.get():', res.data);
                    if (res.code === 200) {
                        this.bookList = res.data
                    }
                })
                .catch((res)=>{
                    console.log(res)
                })*/
            this.updateBookList()
        },
        data() {
            return {
                acid:null,              //一级分类id
                scid:null,              //次级分类id
                bigTypeName:[
                    {id: 1, categoryName: "社科", categoryImageSrc: "65d4300d-a44a-4ce6-a344-81fedfcc7bf8.jpg",
                        categoryVo:[
                        {categoryName: "哲学", categoryId: 11, categoryImageSrc: null}
                        ]}
                        ],      //分类列表

                bookList:[
                    {b_id:"0001",children:{name:"古诗词课",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:["生活","读书","新知三"],birthday:"2018年01月"}},
                    {b_id:"0002",children:{name:"古诗词课1",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹1",price:"￥46.41",oldPrice:"￥58.01",score:4,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:1.5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:3,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0020",children:{name:"古诗词课20",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},

                    {b_id:"0101",children:{name:"古诗词2",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:["生活","读书","新知三"],birthday:"2018年01月"}},
                    {b_id:"0102",children:{name:"古诗词课21",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹1",price:"￥46.41",oldPrice:"￥58.01",score:4,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0101",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:1.5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课2",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:3,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0020",children:{name:"古诗词课20",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},

                    {b_id:"0001",children:{name:"古诗词课3",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:["生活","读书","新知三"],birthday:"2018年01月"}},
                    {b_id:"0002",children:{name:"古诗词课31",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹1",price:"￥46.41",oldPrice:"￥58.01",score:4,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课33",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:1.5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:3,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0020",children:{name:"古诗词课20",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                    {b_id:"0001",children:{name:"古诗词课0",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",author:"叶嘉莹",price:"￥46.40",oldPrice:"￥58.00",score:5,press:"生活.读书.新知三",birthday:"2018年01月"}},
                ],         //书本列表
                scZ:'1',                //折扣选择器：1不限(默认)，2:>7折,3:5-7折,4:<5折
                scP:'1',                //价格选择器：1不限(默认)，2:>100,3:50-99,4:30-49,5:10-29,6:0-9
                activeName:"first",     //排序方式
                hasStock:false,         //只显示有货，默认不勾选
                scOrder:'2',            //图书排列展示方式，1：网格，2：列表

                nowPage:1,              //当前页
                pageSize:20,            //每页大小，20条
                preDisabled:true,       //上一页是否禁用，默认true
                nextDisabled:false,     //下一页是否禁用，默认false
                footprints:[
                    {b_id:"0001",name:"古诗词课",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",price:"￥46.40"},
                    {b_id:"0002",name:"古诗词课1",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",price:"￥46.41"},
                    {b_id:"0001",name:"古诗词课",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",price:"￥46.40"},
                    {b_id:"0001",name:"古诗词课",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",price:"￥46.40"},
                    {b_id:"0001",name:"古诗词课",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",price:"￥46.40"},
                    {b_id:"0001",name:"古诗词课",cover:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",price:"￥46.40"},
                ],       //用户足迹的虚拟数据
            }
        },
        computed:{
            allPage:function () {
                return Math.ceil(this.bookList.length/this.pageSize)
            },
        },
        methods:{
            //分类头相关
            acname:function () {
                return this.bigTypeName[this.acid].categoryName
            },
            sclist:function () {
                return this.bigTypeName[this.acid].categoryVo
            },

            //请求跳转对应分类的书籍列表
            updateBookList:function(bigTypeIndex,CategoryIndex,zk,pc,hasStock){
                this.$axios.get('/api/fore/getBookByCategoryId', {
                    params: {bigTypeIndex:bigTypeIndex,CategoryIndex:CategoryIndex,zk:zk,pc:pc,hasStock:hasStock}
                })
                    .then(res => {
                        console.log('axios.get()==res:books', res);
                        // console.log('axios.get():', res.data);
                        if (res.data.code === 200) {
                            // this.bookList = res.data
                        }
                    })
                    .catch((res)=>{
                        console.log(res)
                    })
            },
            /*findBook:function(id){
                this.$axios.get('/api/fore/findBookByType', {
                    params: {id:0,current:this.nowPage,size:this.pageSize}
                })
                    .then(res => {
                        console.log('axios.get()==res:findBooks', res);
                        // console.log('axios.get():', res.data);
                        if (res.data.code === 200) {
                            // this.bookList = res.data
                        }
                    })
                    .catch((res)=>{
                        console.log(res)
                    })
            },*/
            //次级分类跳转
            isSc(ctid){
                this.scid=ctid
                // this.updateBookList(this.acid,ctid,this.scZ,this.scP,this.hasStock)
            },

            //上一页
            scPre(nowPage){
                if(nowPage==1){()=>{this.preDisabled=false}}
                else{
                    if(nowPage<=1){
                        nowPage=1;
                    }else{
                        nowPage--;
                    }
                    this.nowPage=nowPage;
                }
            },
            //下一页
            scNext(nowPage,allPage){
                if(nowPage==allPage){()=>{this.nextDisabled=true}}
                else{
                    if(nowPage>=allPage){
                        nowPage=allPage;
                    }else{
                        nowPage++;
                    }
                    this.nowPage=nowPage;
                }
            },

            //加入购物车
            addCart(bid){
                let that=this;
                // Bus.$emit('add-cart',bid)
                this.$axios.get('/api/fore/cart/addBuyerCart', {
                    params: {productId:bid,amount:1}
                })
                    .then(res => {
                        console.log('axios.get()==res:addS', res);
                        if (res.data.code === 200) {
                            // this.bookList = res.data
                        }
                    })
                    .catch((res)=>{
                        console.log(res)
                    })
            },
            //加入收藏
            collect(bid){
                // Bus.$emit('collect',bid)
                let that=this;
                // Bus.$emit('add-cart',bid)
                this.$axios.get('/api/fore/addFavorite', {
                    params: {pIds:bid}
                })
                    .then(res => {
                        console.log('axios.get()==res:addC', res);
                        if (res.data.code === 200) {
                            // this.bookList = res.data
                        }
                    })
                    .catch((res)=>{
                        console.log(res)
                    })
            },

            //排序方式
            handleClick(activeName){
                // this.findBook(activeName)
            },
            //分页换页
            handleCurrentChange(nowPage,pagesize){
                // this.findBook(current,size)
            },
        }
    }
</script>

<style scoped lang="less">
    .Red{
        color: red;
    }
    .Subcategories{
        width: 1210px;
        margin: 0 auto;
        & .sc-header {
            padding: 10px;
            border-bottom: 1px solid #b4b4b4;
            .sc-br{
                width: 400px;
                height: 40px;
                line-height: 30px;
                float: left;
            }
            ul{
                width: 750px;
                float: left;
                margin: 0;
                text-align: right;
                li{
                    margin:0 10px;
                    float: left;
                    list-style:none;
                }
            }
        }
    }
    .sc-limit{
        display: flex;
        align-items: center;
        b{
            margin: 10px 0 10px 32px;
        }
        .el-select{
            width: 120px;
            margin-right: 40px;
        }
    }
    .sc-conditions{
        ul{
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: 0;
        }
        & li{
            display: flex;
            justify-content: center;
            align-items: center;
            flex:1;
            list-style: none;
            border: 1px solid #9b9b9b;
            height: 40px;
            line-height: 40px;
            text-align: center;
            &>.sc-nowPage{
                color: red;
            }
            &>a{
                display: block;
                width: 100%;
                text-decoration: none;
                &:active{
                    color: red;
                }
            }
        }
        .sc-ol{
            flex-grow: 1.31;
        }
    }
    .sc-books{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        & .old-price{
            font-size: 0.6em;
            margin-left: 50px;
            color: #2c3e50;
        }
        & .add-cart{
            background-color: red;
            color: white;
            width: 120px;
            padding: 12px 17px;
        }
        & .collect{
            background-color: #cdcdcd;
            color: #444444;
            width: 80px;
            padding: 12px 17px;
        }
        & .hd-box{
            display: none;
            width: 220px;
            position: absolute;
            background-color: #ebebeb;
        }
        & .book-items{
            width: 220px;
            margin:5px;
            border-bottom: 1px solid #9b9b9b;
            &:hover{
                background-color: #ebebeb;
                position: relative;
                z-index: 99;
                & .hd-box{
                    display: block;
                }
            }
        }
    }
    .sc-books-list{
        display: flex;
        flex-direction: column;
        & .book-items-list{
            display: flex;
            flex-direction: row;
            width: 1200px;
            height: 212px;
            margin:5px;
            border-bottom:1px solid #9b9b9b;
            .book-msg{
                width: 500px;
                div{
                    text-align: start;
                    margin-left: 30px;
                }
                & b{
                    font-size: 1.5em;
                    line-height: 2em;
                    margin-right: 50px;
                }
                & span{
                    display: inline-block;
                    min-width: 100px;
                    line-height: 30px;
                }
                .book-score{
                    span,.el-rate{
                        float: left;
                        margin-left: 0;
                    }
                    .el-rate{
                        font-weight: bold;
                    }
                }
            }
            .book-btn{
                padding: 50px;
                & .add-cart{
                    color: white;
                    background-color: #ff0000;
                }
                & .collect{
                    color: red;
                    margin: 8px;
                    background-color: #e1e1e1;

                }
            }
        }
    }
    .pagination{
        margin:20px auto 30px;
        text-align: center;
    }
    .sc-footer{
        height: 280px !important;
        border: 1px solid #9b9b9b;
        &>h4{
            background-color: #cdcdcd;
            margin:0 -20px;
            padding: 6px;
        }
        &>.sc-history{
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            &>.footprints{
                width: 160px;
                margin:20px;
            }
        }
    }
</style>