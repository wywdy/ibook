<template>
    <div class="home" :id="time">
        <div class="banner">
            <div class="block">
                <el-carousel trigger="click" height="480px" :interval=bannerTime>
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <div class="bannerItem"><a href="/Activity"><img :src="item.bannerSrc" alt=""></a></div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div>
            <div class="mainContainer">
                <div class="spike">
                    <div class="spike-title">
                        <div>
                            <i class="el-icon-alarm-clock"></i>秒杀 <span class="timeLine">{{spikeTime}} 点场</span>
                        </div>
                        <div class="time-box" >
                            <span v-html="pad(hou,2)"></span>
                            <span class="timeGap">:</span>
                            <span v-html="pad(min,2)"></span>
                            <span class="timeGap">:</span>
                            <span v-html="pad(sec,2)"></span>
                        </div>
                        <div class="fastS">抢购中,手快有,手慢无哦!</div>
                    </div>
                    <div class="spike-content">
                        <li v-for="(item,index) in focusList.slice(0,5)" class="spikeItem">
                            <router-link to="/miaosha">
                                <div><img src="//img2.winxuancdn.com/6886/1201556886_0_1_800x800.jpg?1514961165328&imageMogr2/thumbnail/200x200" alt=""></div>
                                <div>￥{{item.originPrice}}</div>
                                <div>￥{{item.nowPrice}}</div>
                                <span class="circleColor">
                                秒杀
                                <br>
                                特惠
                            </span>
                            </router-link>
                        </li>
                    </div>
                </div>
                <div class="hotRe">
                    <div class="hotRe-title">
                        <span><i class="el-icon-thumb"></i>热门推荐</span>
                        <span class="fastS">请在 热门搜索 先积分兑换礼券，再下单，优惠更多。</span>
                    </div>
                    <div class="hotRe-content">
                        <li v-for="(item,index) in hotReList" class="hotReItem">
                            <a href="/hottui">
                                <div>{{item.title1}}</div>
                                <div>{{item.title2}}</div>
                                <div><img src="http://img0.winxuancdn.com/8124/1201308124_49_0_800x800.jpg?1545964990677&imageMogr2/thumbnail/350x350&t=202003261730" alt=""></div>
                            </a>
                        </li>
                    </div>
                </div>
                <div class="focus">
                    <div class="focus-title">
                        <h3>
                            <i class="el-icon-view"></i>文轩聚焦
                        </h3>
                        <div>倾情推荐时下最热门图书</div>
                    </div>
                    <div class="focus-content">
                        <li class="focus-item" v-for="(item,index) in focusList" :key="index">
                            <div>
                                <div class="img">
                                    <a :href="item.bookId"><img :src="item.imgSrc" alt=""></a>
                                </div>
                                <div class="bookName"><a :href="item.bookId">{{item.bookName}}</a></div>
                                <div class="bookPrice"><span>￥{{item.originPrice}}</span>
                                    <span>￥ {{item.nowPrice}}</span></div>
                                <div class="mask"><a href="">{{item.bookIntro}}</a></div>
                            </div>
                        </li>

                    </div>
                </div>
                <!--                特色推荐模块-->
                <next></next>
                <!--                作家模块-->
                <div class="writer">
                    <div class="c-1">
                        <div class="c-1-title"><i></i>作家推荐</div>
                        <div class="c-1-banner">
                            <div class="c-1-bannerImg">
                                <a href=""> <img
                                        src="http://static.winxuancdn.com/topic/subject/201811/18dc/se/208-350.jpg?202003201458"
                                        alt=""></a>
                            </div>
                            <div class="c-1-bannerContent">
                                <a href="">【热荐】南京大屠杀</a>
                                <a href="">【热荐】2018中国好书</a>
                                <a href="">【热荐】缅怀余光中</a>
                                <a href="">【热荐】治愈心灵好书</a>
                            </div>
                        </div>
                    </div>
                    <div class="c-2">
                        <div class="c-2-tab">
                            <li class="c-2-writerName" v-for="(item,index) in writerList"
                                @mouseover="signChange(index,0)">{{item.writerName}}
                            </li>
                            <div class="sign" ref="sign1"><b></b></div>
                        </div>
                        <div class="c-2-main">
                            <div class="c-2-content" v-for="(item,index) in writerList">
                                <div class="c-2-writer">
                                    <div><a href=""><img :src="item.writerPhoto" alt=""></a></div>
                                    <div>
                                        <a href=""><h3>{{item.writerName}}</h3></a>
                                        <p>{{item.writerIntro}}</p>
                                    </div>
                                </div>
                                <div class="c-2-about">
                                    <div>相关作品</div>
                                    <div class="c-2-aboutList">
                                        <li class="c-2-item" v-for="(aItem,idx) in item.writerWorks">
                                            <div>
                                                <div class="c-2-bImg">
                                                    <a href=""><img :src="aItem.bookImgSrc" alt=""></a>
                                                </div>
                                                <div class="c-2-bName">
                                                    <a href="">{{aItem.bookName}}</a>
                                                </div>
                                                <div class="bookPrice">
                                                    <span>{{aItem.originPrice}}</span>
                                                    <span>{{aItem.nowPrice}}</span>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="c-3">
                        <div class="c-3-title">
                            人气作家
                        </div>
                        <div class="c-3-content">
                            <li v-for="(item ,index) in hotWriter">
                                <a href="">{{item}}</a>
                            </li>
                        </div>
                    </div>
                </div>
<!--                出版社模块-->

                <div class="publish">
                    <div class="c-1">
                        <div class="c-1-title"><i></i>品牌出版</div>
                        <div class="c-1-banner">
                            <div class="c-1-bannerImg">
                                <a href=""> <img
                                        src="http://static.winxuancdn.com/topic/subject/201811/18dc/se/208-350.jpg?202003201458"
                                        alt=""></a>
                            </div>
                            <div class="c-1-bannerContent">
                                <a href="">【热荐】南京大屠杀</a>
                                <a href="">【热荐】2018中国好书</a>
                                <a href="">【热荐】缅怀余光中</a>
                                <a href="">【热荐】治愈心灵好书</a>
                            </div>
                        </div>
                    </div>
                    <div class="c-2">
                        <div class="c-2-tab">
                            <li class="c-2-publishName" v-for="(item,index) in writerList"
                                @mouseover="signChange(index,1)">{{item.writerName}}
                            </li>
                            <div class="sign" ref="sign2"><b></b></div>
                        </div>
                        <div class="c-2-main">
                            <div class="c-2-content-b" v-for="(item,index) in writerList">
                                <div class="c-2-writer">
                                    <div><a href=""><img :src="item.writerPhoto" alt=""></a></div>
                                    <div>
                                        <a href=""><h3>{{item.writerName}}</h3></a>
                                        <p>{{item.writerIntro}}</p>
                                    </div>
                                </div>
                                <div class="c-2-about">
                                    <div>相关书籍</div>
                                    <div class="c-2-aboutList">
                                        <li class="c-2-item" v-for="(aItem,idx) in item.writerWorks">
                                            <div>
                                                <div class="c-2-bImg">
                                                    <a href=""><img :src="aItem.bookImgSrc" alt=""></a>
                                                </div>
                                                <div class="c-2-bName">
                                                    <a href="">{{aItem.bookName}}</a>
                                                </div>
                                                <div class="bookPrice">
                                                    <span>{{aItem.originPrice}}</span>
                                                    <span>{{aItem.nowPrice}}</span>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="c-3">
                        <div class="c-3-title">
                            知名出版社
                        </div>
                        <div class="c-3-content">
                            <li v-for="(item ,index) in hotPublish">
                                <a href="">{{item}}</a>
                            </li>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import next from '@/components/next.vue'
    export default {
        name: 'Home',
        data() {
            return {
                //秒杀时间
                hou:'',
                min:'',
                sec:'',
                time:'24:00:00',//秒杀场次
                actEndTime: '',
                //秒杀时间结束
                spikeTime:'00',//秒杀 场次
                hotReList:[
                    {acId:1,title1:'流浪地球',title2:'小说抢先看',acImg:'1pp'},
                    {acId:1,title1:'流浪地球',title2:'小说抢先看',acImg:'1pp'},
                    {acId:1,title1:'流浪地球',title2:'小说抢先看',acImg:'1pp'},
                    {acId:1,title1:'流浪地球',title2:'小说抢先看',acImg:'1pp'},
                    {acId:1,title1:'流浪地球',title2:'小说抢先看',acImg:'1pp'}
                ],
                bannerTime: 5000,
                hotWriter: ['马尔克斯', '马尔克斯', '马尔克斯', '马尔克斯', '马尔克斯', '马尔克斯', '马尔克斯', '马尔克斯'],
                hotPublish:['重庆出版社','新经典文化','机械工业出版社','电子工业出版社','博集天卷文化传媒'],
                bannerList: [{
                    bannerId: 1,
                    bannerSrc: 'http://static.winxuancdn.com/topic/subject/202003/yzt/2000-480.jpg?202003151708'
                },
                    {
                        bannerId: 2,
                        bannerSrc: 'http://static.winxuancdn.com/topic/subject/202002/wg/2000-480-1.jpg?202003151708'
                    },
                    {
                        bannerId: 3,
                        bannerSrc: 'http://static.winxuancdn.com/topic/subject/202002/rj/2000-480.jpg?202003151708'
                    },
                    {
                        bannerId: 4,
                        bannerSrc: 'http://static.winxuancdn.com/topic/subject/202002/20ck/2000-480-3.jpg?202003151708'
                    },
                    {
                        bannerId: 5,
                        bannerSrc: 'http://static.winxuancdn.com/topic/subject/202002/9/2000-480-2.jpg?202003151708'
                    }],
                focusList: [{
                    bookId: 1,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 2,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 3,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 4,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 5,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 6,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 7,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 8,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 9,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }, {
                    bookId: 10,
                    bookName: '新型冠状病毒感染的肺炎防控知识问答',
                    nowPrice: '14.30',
                    originPrice: '19.80',
                    imgSrc: 'http://img0.winxuancdn.com/2729/1202202729_0_0_original_800x800.jpg?1581040702935&imageMogr2/thumbnail/600x600',
                    bookIntro: '聚焦疫情焦点，采取问答形式，对各类高风险场所如何开展防控提供可操作性强的科学指导。内容规范，图文并茂，深入浅出。'
                }],
                writerList: [{
                    writerName: '杨绛',
                    writerPhoto: 'http://static.winxuancdn.com/topic/subject/201608/zz/yangj2.png?202003201458',
                    writerIntro: "杨绛（1911—2016），原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡。1932年毕业于苏州东吴大学，当年考入清华大学研究生院。1935年与钱锺书结婚。杨绛的**部作品为短篇小说《璐璐，不用愁！》，。二十世纪四十年代初，她连续创作了喜剧《称心如意》和《弄真成假》。1981年出版散文代表作《干校六记》。1988年出版小说代表作《洗澡》，另著有《我们仨》《将饮茶》等。作为翻译家，杨绛成就卓著，翻译了文学名著《堂吉诃德》、《小癞子》、法国《吉尔·布拉斯》以及古希腊柏拉图的对话录《斐多》等。",
                    writerWorks: [{
                        bookName: '我们仨',
                        bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                        nowPrice: '14.30',
                        originPrice: '19.80'
                    }, {
                        bookName: '我们仨',
                        bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                        nowPrice: '14.30',
                        originPrice: '19.80'
                    }, {
                        bookName: '我们仨',
                        bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                        nowPrice: '14.30',
                        originPrice: '19.80'
                    }, {
                        bookName: '我们仨',
                        bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                        nowPrice: '14.30',
                        originPrice: '19.80'
                    }]
                },
                    {
                        writerName: '东野圭吾',
                        writerPhoto: 'http://static.winxuancdn.com/topic/subject/201608/zz/yangj2.png?202003201458',
                        writerIntro: "杨绛（1911—2016），原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡。1932年毕业于苏州东吴大学，当年考入清华大学研究生院。1935年与钱锺书结婚。杨绛的**部作品为短篇小说《璐璐，不用愁！》，。二十世纪四十年代初，她连续创作了喜剧《称心如意》和《弄真成假》。1981年出版散文代表作《干校六记》。1988年出版小说代表作《洗澡》，另著有《我们仨》《将饮茶》等。作为翻译家，杨绛成就卓著，翻译了文学名著《堂吉诃德》、《小癞子》、法国《吉尔·布拉斯》以及古希腊柏拉图的对话录《斐多》等。",
                        writerWorks: [{
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }]
                    },
                    {
                        writerName: '马尔克斯',
                        writerPhoto: 'http://static.winxuancdn.com/topic/subject/201608/zz/yangj2.png?202003201458',
                        writerIntro: "杨绛（1911—2016），原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡。1932年毕业于苏州东吴大学，当年考入清华大学研究生院。1935年与钱锺书结婚。杨绛的**部作品为短篇小说《璐璐，不用愁！》，。二十世纪四十年代初，她连续创作了喜剧《称心如意》和《弄真成假》。1981年出版散文代表作《干校六记》。1988年出版小说代表作《洗澡》，另著有《我们仨》《将饮茶》等。作为翻译家，杨绛成就卓著，翻译了文学名著《堂吉诃德》、《小癞子》、法国《吉尔·布拉斯》以及古希腊柏拉图的对话录《斐多》等。",
                        writerWorks: [{
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }]
                    },
                    {
                        writerName: '曹文轩',
                        writerPhoto: 'http://static.winxuancdn.com/topic/subject/201608/zz/yangj2.png?202003201458',
                        writerIntro: "杨绛（1911—2016），原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡。1932年毕业于苏州东吴大学，当年考入清华大学研究生院。1935年与钱锺书结婚。杨绛的**部作品为短篇小说《璐璐，不用愁！》，。二十世纪四十年代初，她连续创作了喜剧《称心如意》和《弄真成假》。1981年出版散文代表作《干校六记》。1988年出版小说代表作《洗澡》，另著有《我们仨》《将饮茶》等。作为翻译家，杨绛成就卓著，翻译了文学名著《堂吉诃德》、《小癞子》、法国《吉尔·布拉斯》以及古希腊柏拉图的对话录《斐多》等。",
                        writerWorks: [{
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }]
                    },
                    {
                        writerName: '毕淑敏',
                        writerPhoto: 'http://static.winxuancdn.com/topic/subject/201608/zz/yangj2.png?202003201458',
                        writerIntro: "杨绛（1911—2016），原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡。1932年毕业于苏州东吴大学，当年考入清华大学研究生院。1935年与钱锺书结婚。杨绛的**部作品为短篇小说《璐璐，不用愁！》，。二十世纪四十年代初，她连续创作了喜剧《称心如意》和《弄真成假》。1981年出版散文代表作《干校六记》。1988年出版小说代表作《洗澡》，另著有《我们仨》《将饮茶》等。作为翻译家，杨绛成就卓著，翻译了文学名著《堂吉诃德》、《小癞子》、法国《吉尔·布拉斯》以及古希腊柏拉图的对话录《斐多》等。",
                        writerWorks: [{
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }]
                    },
                    {
                        writerName: '刘同',
                        writerPhoto: 'http://static.winxuancdn.com/topic/subject/201608/zz/yangj2.png?202003201458',
                        writerIntro: "杨绛（1911—2016），原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡。1932年毕业于苏州东吴大学，当年考入清华大学研究生院。1935年与钱锺书结婚。杨绛的**部作品为短篇小说《璐璐，不用愁！》，。二十世纪四十年代初，她连续创作了喜剧《称心如意》和《弄真成假》。1981年出版散文代表作《干校六记》。1988年出版小说代表作《洗澡》，另著有《我们仨》《将饮茶》等。作为翻译家，杨绛成就卓著，翻译了文学名著《堂吉诃德》、《小癞子》、法国《吉尔·布拉斯》以及古希腊柏拉图的对话录《斐多》等。",
                        writerWorks: [{
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }]
                    },
                    {
                        writerName: '杨冰阳',
                        writerPhoto: 'http://static.winxuancdn.com/topic/subject/201608/zz/yangj2.png?202003201458',
                        writerIntro: "杨绛（1911—2016），原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡。1932年毕业于苏州东吴大学，当年考入清华大学研究生院。1935年与钱锺书结婚。杨绛的**部作品为短篇小说《璐璐，不用愁！》，。二十世纪四十年代初，她连续创作了喜剧《称心如意》和《弄真成假》。1981年出版散文代表作《干校六记》。1988年出版小说代表作《洗澡》，另著有《我们仨》《将饮茶》等。作为翻译家，杨绛成就卓著，翻译了文学名著《堂吉诃德》、《小癞子》、法国《吉尔·布拉斯》以及古希腊柏拉图的对话录《斐多》等。",
                        writerWorks: [{
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }, {
                            bookName: '我们仨',
                            bookImgSrc: '//img0.winxuancdn.com/9505/1201689505_0_2_800x800.jpg?1555310067146&imageMogr2/thumbnail/200x200',
                            nowPrice: '14.30',
                            originPrice: '19.80'
                        }]
                    }]
            }
        },
        methods: {
            signChange(index,type) {
                if (!type){
                    let left = 100 * index + 10;
                    let oSign = this.$refs.sign1;
                    oSign.style.left = left + 'px';
                    //原始做法
                    let oBooks = document.querySelectorAll('.c-2-content');
                    let oName = document.querySelectorAll('.c-2-writerName');
                    for (let i = 0; i < oBooks.length; i++) {
                        oBooks[i].style.display = 'none'
                        oName[i].style.color = 'black'
                    }
                    oBooks[index].style.display = 'block';
                    oName[index].style.color = 'red';
                    //vue做法
                }
               else {
                    let left = 100 * index + 10;
                    let oSign = this.$refs.sign2;
                    oSign.style.left = left + 'px';
                    //原始做法
                    let oBooks = document.querySelectorAll('.c-2-content-b');
                    let oName = document.querySelectorAll('.c-2-publishName');
                    for (let i = 0; i < oBooks.length; i++) {
                        oBooks[i].style.display = 'none'
                        oName[i].style.color = 'black'
                    }
                    oBooks[index].style.display = 'block';
                    oName[index].style.color = 'red';
                    //vue做法
                }
            },
            countDown(it) {
                let that=this;
                var interval = setInterval(() => {
                    let newTime = new Date().getTime();
                    let endTime = new Date(this.actEndTime).getTime();
                    if (endTime - newTime > 0) {
                        let time = (endTime - newTime) / 1000;
                        that.hou = parseInt(time/ 3600);
                        that.min = parseInt(time% 3600 / 60);
                        that.sec = parseInt(time % 3600 % 60);
                    } else { // 活动已结束，全部设置为'00'
                        that.hou = 0;
                        that.min = 0;
                        that.sec = 0;
                        clearInterval(interval);
                    }
                }, 1000);
            },
            pad(num, n) {
                return (Array(n).join(0) + num).slice(-n);
            }
        },
        computed:{
        },
        created() {
            this.actEndTime=new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+this.time;
            this.countDown();
        },
        components: {
            next,
        }
    }
</script>
<style scoped lang="less">
    .hotReItem{
        height: 220px!important;
        &>a>div:first-child{
            color: #000 ;
            font-size: 18px;
            font-weight: bold;
            margin-top: 4px;
        }
        img{
            width: 120px !important;
            height: 120px !important;
            margin-bottom: 20px;
        }
        &>a>div:nth-child(2){
            background: #d1fff5;
            color: #03655a;
            display: inline-block;
            font-size: 16px;
            border-radius: 10px;
            padding: 0 10px;
            margin-top: 4px;
            margin-bottom: 15px;
        }
    }
    .timeGap{
        width: 10px !important;
        background-color: white !important;
        color: black !important;
    }
    .fastS{
        display: inline-block;
        padding-left: 18px;
        margin-top: 4px;
        color: #999;
        font-size: 13px;
    }
    .spike-title,.hotRe-title{
        margin-top: 20px;
        i{
            margin-right: 12px;
            font-size: 24px;
        }
        margin-bottom: 15px;
    }
    .circleColor{
        width: 54px;
        height: 54px;
        position: absolute;
        right: 26px;
        top:calc(50% - 27px);
        font-size: 16px;
        line-height: 18px;
        color: #fff;
        background-color: #ff8a3c;
        border-radius: 50%;
        display: flex;
        align-items: center;
        -webkit-box-align: center;
        justify-content: center;
    }
    .hotRe-content,.spike-content{
        height: 240px;
        li{
            float: left;
            width: 184px;
            height: 200px;
            padding: 0 28px;
            display: inline;
            background: #fff;
            border: 1px solid #f1f1f1;
            margin: 0 -1px -1px 0;
            text-align: center;
            img{
                width: 160px;
                height: 160px;
            }
        }
    }
 .spikeItem{
     position: relative;
     padding-top: 30px !important;
     &>a>div:nth-child(2){
         color: #ff0000;
         font-size: 21px;
         line-height: 19px;
         font-weight: bold;
     }
     &>a>div:nth-child(3){
         color: #9A9A9A;
         font-size: 14px;
         text-decoration: line-through;
     }
 }
    .time-box{
        span{
            margin-top: -3px;
            width: 28px;
            height: 28px;
            margin-left: 3px;
            display: inline-block;
            line-height: 28px;
            vertical-align: middle;
            text-align: center;
            border-radius: 4px;
            font-size: 18px;
            background-color: #3d3d3d;
            color: #fff;
        }
    }
    .timeLine{
        line-height: 25px;
        margin-right:10px;
        background-color: #ff0000;
        color: #fff;
        padding: 2px 9px;
        font-size: 18px;
    }
    .spike-title{
        &>div{
            display: inline-block;
        }
    }
    .c-1 {
        width: 210px;
        float: left;
    }

    .c-2 {
        width: 790px;
        float: left;
    }

    .c-2-tab {
        position: relative;
        color: #000;
        font-size: 15px;

    }

    .c-2-tab > li {
        width: 100px;
        text-align: center;
        height: 30px;
        display: table-cell;
        vertical-align: bottom;
        cursor: pointer;
    }

    .c-2-content,.c-2-content-b {
        border: 1px solid #edecec;
        padding-bottom: 15px;
    }

    .c-2-writer {
        padding: 10px;
        margin-bottom: 7px;
        height: 156px;
        display: flex;

        & > div:first-child {
            border: 1px solid #edecec;
            width: 154px;
            height: 154px;
            margin-right: 10px;
        }

        & p {
            width: 600px;
            color: #999;
            font-size: 12px;
            height: 114px;
            overflow: hidden;
            line-height: 24px;
        }

        & h3 {
            margin: 5px 0 10px;
            color: #000;
            font-size: 18px;
            font-weight: 700;
        }
    }

    .c-2-item {


    }

    .sign {
        position: absolute;
        top: 30px;
        left: 210px;
        height: 8px !important;
        border-bottom: 1px solid red;
        width: 80px !important;
        transition: left 0.5s;

        & > b {
            border-style: dashed dashed solid;
            border-width: 4px;
            position: absolute;
            top: 0;
            left: 37px;
            border-color: transparent transparent #e4393c;
        }
    }

    .c-2-main > div {
        display: none;
    }

    .c-2-main > div:first-child {
        display: block;
    }

    .c-2-about > div:first-child {
        height: 46px;
        line-height: 46px;
        margin-left: 10px;
    }

    .c-2-aboutList {
        display: flex;

        & > li {
            width: 161px;
            height: 238px;
            padding: 10px 11px;
            margin-left: 10px;
            border: 1px solid #efefef;
        }

        & .c-2-bImg {
            width: 160px;
            height: 160px;
            margin-bottom: 8px;
            padding-top: 10px;
        }

        & .bookPrice {
            margin-top: 0;
        }

        & .c-2-bName {
            height: 40px;
            line-height: 20px;
            margin-bottom: 4px;

            & a {
                color: #666;
                font-size: 13px;
            }
        }

        & img {
            width: 160px;
            height: 160px;
        }
    }

    .c-3-content {
        padding-top: 10px;
        border: 1px solid #f1f1f1;
        border-left: 0;
        height: 494px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        font-size: 13px;
        & > li {
            width: 65px;
            height: 40px;
            line-height: 40px;
            margin-left: 30px;
        }
        & a {
            color: #999;
        }
    }

    /*.c-2-aboutList>li{*/
    /*    float: left;*/

    /*}*/

    .c-3 {
        width: 210px;
        float: left;
    }

    .c-1-title, .c-2-tab, .c-3-title {
        height: 50px;
    }

    .c-1-title {
        line-height: 50px;
        font-size: 18px;
        font-weight: 400;
    }

    .c-3-title {
        padding: 17px 0;
        line-height: 16px;
        height: 16px;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
    }

    .c-1-bannerContent > a {
        display: block;
    }

    .el-carousel__container {
        height: 480px !important;
    }

    .bannerItem {

        & img {
            min-width: 1210px;
            height: 480px;
        }
    }

    .mainContainer {
        width: 1210px;
        margin: auto;
    }

    //focus
    .focus-title {
        height: 50px;
        line-height: 50px;
        width: 100%;

    }

    .focus-title > h3 {
        float: left;
        font-size: 18px;
        font-weight: 400;

        & > i {
            margin-right: 12px;
            font-size: 24px;
        }


    }

    .focus-title > div {
        float: left;
        font-size: 12px;
        color: #999;
        padding-left: 18px;


    }

    .focus-content {
        overflow: hidden;
        border-bottom: 1px solid #f1f1f1;
    }

    .focus-item {
        float: left;
        width: 184px;
        height: 260px;
        position: relative;
        padding: 0 28px;
        display: inline;
        background: #fff;
        border: 1px solid #f1f1f1;
        margin: 0 -1px -1px 0;
        overflow: hidden;
        font-size: 13px;

        & .bookName > a {
            color: #666;
            text-align: left;
            font-size: 13px;
        }

        & .img {
            width: 160px;
            height: 160px;
            margin-bottom: 8px;
            padding-top: 10px;

        }

        & img {
            height: 160px;
            width: 160px;

        }
    }

    .bookPrice {
        height: 20px;
        margin-top: 15px;
    }

    .bookPrice > span:first-child {
        color: #db2a41;
        font-size: 14px;

        float: left;
    }

    .bookPrice > span:last-child {
        color: #b5b2b3;
        text-decoration: line-through;
        float: right;
    }

    .focus-item:hover .mask {
        bottom: 0;
    }

    .mask {
        position: absolute;
        bottom: -89px;
        left: 0;
        height: 89px;
        width: 242px;
        background: #333;
        transition: bottom .6s;
        opacity: 0.9;

        & > a {
            display: block;
            margin: 10px 14px auto;
            color: #fff;
            font-size: 12px;
            line-height: 18px;
            height: 72px;
            overflow: hidden;
            text-decoration: none;
            text-align: left;
        }
    }


</style>
