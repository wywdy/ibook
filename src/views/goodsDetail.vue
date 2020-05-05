<template>
    <div style="width: 1210px;margin:auto;margin-top: 15px">
        <!-- 分类-->
        <div class="nav-type">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">图书</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/about' }">文学</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">中国现当代随笔</el-breadcrumb-item>
                <el-breadcrumb-item>丰子恺万般滋味,都是生活</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--  书籍信息-->
        <div class="book-msg">
            <!--  书籍图片展示350px-->
            <div class="img-book">
                <div>
                    <div class="img-big" style="width: 350px;height: 350px">
                        <pic-zoom :url="imgurl" style="width: 100%;height: 100%" :scale="3"> </pic-zoom>
                    </div>
                    <div class="img-small">                    
                        <li v-for="(item,index) in imgList" :key="index" @mouseenter='getIndex(index)'>
                            <img :src="item.url" style="width: 68px; height: 68px">            
                        </li>
                                 
                    </div>
                    <div class="book-share">
                        <div class="icon-share">
                            <i class="el-icon-circle-plus"><span>分享</span></i>
                        </div>
                        <div class="icon-collection">
                            <i class="el-icon-star-on" @click="collection" :class="{'activeSelecte':isSelected}"></i><span>{{collectionPer}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--        书籍名称等 680 -->
            <div class="book-msg-title">
                <!--   书籍名字 推荐介绍-->
                <div class="book-title">
                    <div class="book-title-name">
                                <span>
                                    愿所有相遇，都恰逢其时
                                </span>
                    </div>
                    <div class="book-title-desc">
                                <span>
                                    （随书附赠：精美书签。一切都是*好的安排，结束的，已然结束；相逢的，终将遇见，不早不晚。41篇暖意萦怀的生活感悟，让你不畏将来，不念过去，在忙乱的世界中守住内心的安定和富足）
                                </span>
                    </div>
                </div>
                <!--  书籍价格 作者 降价通知等-->
                <div>
                    <div class="book-title">
                        <!--   name--params,query  path--query-->
                        <div class="book-desc-item">
                            <div class="word-space">作者</div>
                            :
                            <router-link :to="{path: 'tj',query:{ aid: 1}}" class="book-desc-item-author">
                                陈北投
                            </router-link>
                            著
                        </div>
                        <div class="book-desc-item">
                            <div class="word-space">出版社</div>
                            :
                            <router-link :to="{path: 'tj',query:{ pid: 1}}" class="book-desc-item-author">人民文学出版社
                            </router-link>
                        </div>
                        <div class="book-desc-item">
                            <div class="word-space">出版时间</div>
                            : 2018年10月4日
                        </div>
                    </div>
                    <!--  降价通知   -->
                    <div class="book-desc-item1 book-desc-item-price">
                        <div>折扣价 <span><el-button type="text" @click="dialogVisible = true">降价通知</el-button>
                            <el-dialog
                                    title="当此商品在90天内满足您的期望价格时，您将会收到手机短信通知 (需填写手机号码)"
                                    :visible.sync="dialogVisible"
                                    width="30%"
                                    :before-close="handleClose">
                                <el-form label-width="120px" :model="jiangjiaForm" :rules="rules" ref="jiangjiaForm">
                                        <el-form-item label="当前售价">
                                            <span class="el-form-item-price">￥139.00</span>
                                        </el-form-item>
                                        <el-form-item label="期望价格" prop="qiwangprice">
                                            <el-input size="small" v-model="jiangjiaForm.qiwangprice"
                                                      auto-complete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="手机号码" prop="phonenum">
                                            <el-input size="small" v-model="jiangjiaForm.phonenum"
                                                      auto-complete="off"></el-input>
                                        </el-form-item>
                                 </el-form>
                                  <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisible = false;getDiscountNotice()">确 定</el-button>
                                  </span>
                                 </el-dialog>
                        </span>
                        </div>
                        <div class="book-desc-item-price-discount">￥<span>139.00 <span>(9.79折)</span></span></div>
                        <div>定价<span class="orig-price">￥142.00</span></div>
                    </div>
                    <hr class="book-title-hr">
                </div>
                <!--书籍活动-->
                <div class="book-title activity">
                    <div class="book-desc-item">
                        <div class="word-space">促销</div>
                        :<span class="activity-item">满额减</span></div>
                    <div style="display: flex;flex-direction: column">
                        <div class="activity-item-int">图书单笔满66减5，满100减15！</div>
                        <div class="activity-item-int">图书单笔满66减5，满100减15！</div>
                    </div>
                </div>
                <!--   配送地址-->
                <div class="book-title choose-address-row">
                    <div class="choose-address">
                        <div class="word-space">配送至</div>
                        <div style="position: relative;left: 71px;top: -26px;">:
                            <el-cascader
                                    size="small"
                                    :options="options"
                                    v-model="selectedOptions"
                                    @change="addressChange">
                            </el-cascader>
                        </div>
                    </div>
                    <div style="margin-left: 5px;position: relative;left: 75px;">有货</div>
                </div>
                <div class="book-title">
                    <div class="book-desc-item">
                        <div class="word-space">服务</div>
                        :由"xx网"直接销售和发货，并提供售后服务
                    </div>
                </div>
                <!--    加入购物车-->
                <div class="cart">
                    <div class="cart-count">
                        <el-input-number v-model="count" controls-position="right" @change="handleChange"
                                         :min="1"></el-input-number>
                    </div>
                    <div class="cart-add" @click="addToCart">
                        <el-button icon="fa fa-cart-plus"> 加入购物车</el-button>
                    </div>
                    <div class="cart-buy" @click="buyNow">
                        <el-button>立即购买</el-button>
                    </div>
                </div>

            </div>
            <!--    180-->
            <div class="rightHot">
                <div>
                    同类热销榜
                </div>
                <div>
                    <div v-for="(rightItem,id) in recommendHot" :key="id" class="rightItem">
                        <a href="">
                            <div class="rightImg">
                                <img :src="rightItem.imgSrc" alt="">
                            </div>
                            <div class="rightContent">
                                <div class="rightBName">{{rightItem.bookName}}</div>
                                <div class="bookPrice"><span>{{rightItem.nowPrice}}</span><span>{{rightItem.originPrice}}</span>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <!--   信息选项卡-->
        <div class="book-tab">
            <!--            180-->
            <div class="rightHot" style="height: 635px">
                <div>
                    同类热销榜
                </div>
                <div>
                    <div v-for="(rightItem,id) in recommendHot" :key="id" class="rightItem">
                        <a href="">
                            <div class="rightImg">
                                <img :src="rightItem.imgSrc" alt="">
                            </div>
                            <div class="rightContent">
                                <div class="rightBName">{{rightItem.bookName}}</div>
                                <div class="bookPrice"><span>{{rightItem.nowPrice}}</span><span>{{rightItem.originPrice}}</span>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <!-- 选项卡 -->
            <div class="tab">
                <el-tabs v-model="activeBook" type="card" @tab-click="handleClick">
                    <el-tab-pane label="商品详情" name="first">
                        <div class="detail-box">
                            <div class="detail-box-first">
                                <div>
                                    <div>开 本：<span>16开</span></div>
                                    <div>纸 张：<span>纯质纸</span></div>
                                    <div>包 装：<span>平装-胶订</span></div>
                                    <div>是否套装：<span>是</span></div>
                                    <div>国际标准书号ISBN：<span>9787508696362</span></div>
                                </div>
                                <div>所属分类：<span><router-link :to="{ path: '/about' }">图书</router-link>><router-link
                                        :to="{ path: '/about' }">历史</router-link>><router-link :to="{ path: '/about' }">世界史</router-link>><router-link
                                        :to="{ path: '/about' }">世界通史</router-link></span></div>
                            </div>
                            <div class="detail-box-second">
                                <!-- 产品特色-->
                                <div class="detail-box-second-item" ref="tese" id="#anchor-0">
                                    <!-- 公用标题-->
                                    <div class="detail-box-second-titleall">
                                        <div class="detail-box-second-title">
                                            <div>产品特色</div>
                                        </div>
                                        <div class="detail-box-second-title-tri"></div>
                                    </div>
                                    <!--内容-->
                                    <div class="detail-box-second-note">
                                        <img src="./../assets/img/imgdetail.jpg" alt="">
                                    </div>
                                </div>
                                <!-- 编辑推荐-->
                                <div class="detail-box-second-item" ref="bianji" id="#anchor-1">
                                    <!-- 公用标题-->
                                    <div class="detail-box-second-titleall">
                                        <div class="detail-box-second-title">
                                            <div>编辑推荐</div>
                                        </div>
                                        <div class="detail-box-second-title-tri"></div>
                                    </div>
                                    <!--内容-->
                                    <div class="detail-box-second-note">
                                        <div v-for="(item,index) in editList" :key="index"
                                             class="detail-box-second-note-item">
                                            <i class="el-icon-star-on"></i>
                                            <span>{{item.editDes}}</span>
                                        </div>
                                    </div>

                                </div>
                                <!-- 内容简介-->
                                <div class="detail-box-second-item" ref="neirong" id="#anchor-2">
                                    <!-- 公用标题-->
                                    <div class="detail-box-second-titleall">
                                        <div class="detail-box-second-title">
                                            <div>内容简介</div>
                                        </div>
                                        <div class="detail-box-second-title-tri"></div>
                                    </div>
                                    <!--内容-->
                                    <div class="detail-box-second-note">
                                        {{brieflyList.brieflyDes}}
                                    </div>
                                </div>
                                <!-- 作者简介-->
                                <div class="detail-box-second-item" ref="zuozhe" id="#anchor-3">
                                    <!-- 公用标题-->
                                    <div class="detail-box-second-titleall">
                                        <div class="detail-box-second-title">
                                            <div>作者简介</div>
                                        </div>
                                        <div class="detail-box-second-title-tri"></div>
                                    </div>
                                    <!--内容-->
                                    <div class="detail-box-second-note">
                                        {{authorbriefList.authorbriefDes}}
                                    </div>
                                </div>
                                <!-- 目录-->
                                <div class="detail-box-second-item" ref="mulu" id="#anchor-4">
                                    <!-- 公用标题-->
                                    <div class="detail-box-second-titleall">
                                        <div class="detail-box-second-title">
                                            <div>目录</div>
                                        </div>
                                        <div class="detail-box-second-title-tri"></div>
                                    </div>
                                    <!--内容-->
                                    <div class="detail-box-second-note">
                                        {{listingsList.listingsDes}}
                                    </div>
                                </div>
                                <!-- 前言-->
                                <div class="detail-box-second-item" ref="qianyan" id="#anchor-5">
                                    <!-- 公用标题-->
                                    <div class="detail-box-second-titleall">
                                        <div class="detail-box-second-title">
                                            <div>前言</div>
                                        </div>
                                        <div class="detail-box-second-title-tri"></div>
                                    </div>
                                    <!--内容-->
                                    <div class="detail-box-second-note">

                                    </div>
                                </div>
                                <!-- 媒体评论-->
                                <div class="detail-box-second-item" ref="meiti" id="#anchor-6">
                                    <!-- 公用标题-->
                                    <div class="detail-box-second-titleall">
                                        <div class="detail-box-second-title">
                                            <div>媒体评论</div>
                                        </div>
                                        <div class="detail-box-second-title-tri"></div>
                                    </div>
                                    <!--内容-->
                                    <div class="detail-box-second-note">
                                        <div v-for="(item,index) in mediaList" :key="index"
                                             class="detail-box-second-note-item">
                                            <div style="margin-bottom: 2px">
                                                {{item.mediaDes}}
                                            </div>
                                            <div style="margin-bottom: 15px">
                                                — — {{item.prefaceName}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="commentAll" name="second">
                        <div class="commit">
                            <span>{{commentAll}}</span>
                            <div class="write">
                                <span><el-button type="text" @click="dialogCommentVisible = true">写评论</el-button>
                                    <el-dialog
                                            title="评论"
                                            :visible.sync="dialogCommentVisible"
                                            width="30%"
                                            :before-close="handleClose">
                                        <div class="el-dialog-div" style="text-align: left;">我对本书的评价是：</div>
                                        <!--  星级评价-->
                                        <div style="display:flex;flex-direction: row;align-items: center;margin-bottom: 5px;">
                                            <div class="el-dialog-div">
                                                    <!-- 星级评分0-10 -->
                                                <!--                                                <el-rate-->
                                                <!--                                                        v-model="writescore"-->
                                                <!--                                                        allow-half-->
                                                <!--                                                        text-color="#ff9900"-->
                                                <!--                                                        score-template="{writescoreValue}">-->
                                                <!--                                                </el-rate>-->
                                                <!-- 星级评分0-5-->
                                                 <el-rate
                                                         v-model="writescore"
                                                         allow-half
                                                         text-color="#ff9900"
                                                         score-template="{writescoreValue}">
                                                </el-rate>
                                            </div>
                                            <!-- 星级评分0-10  v-text="writescoreValue=writescore*2-->
                                            <div v-text="writescoreValue=writescore"
                                                 class="type-commit-item-left-score-double"></div>
                                            <span style="color:#f7ba2a;margin-left: 2px;line-height: 25px;">分</span>
                                        </div>
                                        <!--  内容-->
                                        <div class="el-dialog-div">
                                            <el-input
                                                    type="textarea"
                                                    maxlength="2000"
                                                    :autosize="{ minRows: 4}"
                                                    placeholder="这本书的作者、内容、文笔给你留下了怎样的印象？是否值得推荐给其他书友？写下你的书评吧~"
                                                    v-model="textarea">
                                            </el-input>
                                            <span>2000</span>
                                        </div>
                                        <span slot="footer" class="dialog-footer">
                                            <el-button @click="dialogCommentVisible = false">取 消</el-button>
                                            <el-button type="primary"
                                                       @click="dialogCommentVisible = false;writeCommit()">发 表</el-button>
                                        </span>
                                    </el-dialog>
                                </span>
                            </div>
                        </div>
                        <!--   圆环-->

                        <!--    分类评论-->
                        <div class="type-commit">
                            <el-tabs type="border-card">
                                <el-tab-pane :label="all">
                                    <!-- 评论内容-->
                                    <div class="type-commit-item" v-for="(item, index) in curData" :key="index">
                                        <!--  左边内容-->
                                        <div class="type-commit-item-left">
                                            <!--     评价分数-->
                                            <div style="display:flex;flex-direction: row;align-items: center">
                                                <div class="type-commit-item-left-score">
                                                    <!-- 星级评分0-10 -->
                                                    <!--                                                    <el-rate-->
                                                    <!--                                                            v-model="score"-->
                                                    <!--                                                            disabled-->
                                                    <!--                                                            allow-half-->
                                                    <!--                                                            text-color="#ff9900"-->
                                                    <!--                                                            score-template="{scoreValue}">-->
                                                    <!--                                                    </el-rate>-->
                                                    <!-- 星级评分0-5 -->
                                                    <el-rate
                                                            v-model="score"
                                                            disabled
                                                            allow-half
                                                            text-color="#ff9900"
                                                            score-template="{scoreValue}">
                                                    </el-rate>
                                                </div>
                                                <!-- 星级评分0-10  v-text="scoreValue=score*2-->
                                                <div v-text="scoreValue=score"
                                                     class="type-commit-item-left-score-double"></div>
                                                <span style="color:#f7ba2a;margin-left: 2px">分</span>
                                            </div>
                                            <!--内容-->
                                            <div class="view">
                                                <div class="text more" ref="more">
                                                    占位
                                                </div>
                                                <div class="content">
                                                    <div class="text">
                                                        <div :class="{'retract': item.status}"
                                                             :style="{'max-height':item.status ? textHeight: ''}"
                                                             ref="txtcontainer">
                                                            {{item.desc}}
                                                        </div>
                                                        <div class="btn">
                                                            <p v-if="item.status" @click="item.status = false">展开</p>
                                                            <p v-if="item.status == false" @click="item.status = true">
                                                                收起</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!--    时间-->
                                            <div class="type-commit-item-left-time">
                                                <span>2018-12-21 10:21:11</span>
                                            </div>
                                        </div>
                                        <!--   右边头像-->
                                        <div class="type-commit-item-right">
                                            <div class="type-commit-item-right-img">
                                                <img src="./../assets/img/photo1.png" alt="">
                                            </div>
                                            <div class="type-commit-item-right-name">
                                                <span>l***n(匿名)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 分页-->
                                    <div class="type-commit-page">
                                        <!--                                        :total="totalDataNum"-->
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page.sync="pageNow"
                                                :page-sizes="[1, 2, 3]"
                                                :page-size="pagesize"
                                                layout="total, sizes, prev, pager, next, jumper"
                                                :total="4">
                                        </el-pagination>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane :label="haoping">
                                    <!-- 评论内容-->
                                    <div class="type-commit-item" v-for="(item, index) in curData" :key="index">
                                        <!--  左边内容-->
                                        <div class="type-commit-item-left">
                                            <!--     评价分数-->
                                            <div style="display:flex;flex-direction: row;align-items: center">
                                                <div class="type-commit-item-left-score">
                                                    <el-rate
                                                            v-model="score"
                                                            disabled
                                                            allow-half
                                                            text-color="#ff9900"
                                                            score-template="{scoreValue}">
                                                    </el-rate>
                                                </div>
                                                <div v-text="scoreValue=score*2"
                                                     class="type-commit-item-left-score-double"></div>
                                                <span style="color:#f7ba2a;margin-left: 2px">分</span>
                                            </div>
                                            <!--内容-->
                                            <div class="view">
                                                <div class="text more" ref="more">
                                                    占位
                                                </div>
                                                <div class="content">
                                                    <div class="text">
                                                        <div :class="{'retract': item.status}"
                                                             :style="{'max-height':item.status ? textHeight: ''}"
                                                             ref="textContainer">
                                                            {{item.desc}}
                                                        </div>
                                                        <div class="btn">
                                                            <p v-if="item.status" @click="item.status = false">展开</p>
                                                            <p v-if="item.status == false" @click="item.status = true">
                                                                收起</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!--    时间-->
                                            <div class="type-commit-item-left-time">
                                                <span>2018-12-21 10:21:11</span>
                                            </div>
                                        </div>
                                        <!--   右边头像-->
                                        <div class="type-commit-item-right">
                                            <div class="type-commit-item-right-img">
                                                <img src="./../assets/img/photo1.png" alt="">
                                            </div>
                                            <div class="type-commit-item-right-name">
                                                <span>l***n(匿名)</span>
                                            </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane :label="zhongping">
                                    <!-- 评论内容-->

                                </el-tab-pane>
                                <el-tab-pane :label="chaping">
                                    <!-- 评论内容-->

                                </el-tab-pane>
                            </el-tabs>
                            <!--                            <el-select v-model="value8" filterable placeholder="请选择">-->
                            <!--                                <el-option-->
                            <!--                                        v-for="item in options"-->
                            <!--                                        :key="item.value"-->
                            <!--                                        :label="item.label"-->
                            <!--                                        :value="item.value">-->
                            <!--                                </el-option>-->
                            <!--                            </el-select>-->
                        </div>

                    </el-tab-pane>
                    <el-tab-pane :label="askAll" name="third">
                        <div class="commit">
                            <span>{{askAll}}</span>
                            <div class="write">
                                <span><el-button type="text" @click="dialogAskVisible = true">我要提问</el-button>
                                    <el-dialog
                                            title="提问"
                                            :visible.sync="dialogAskVisible"
                                            width="30%"
                                            :before-close="handleClose">
                                        <div class="el-dialog-div" style="text-align: left;">我对本书的问题是：</div>
                                        <!--  内容-->
                                        <div class="el-dialog-div">
                                            <el-input
                                                    type="textarea"
                                                    maxlength="500"
                                                    :autosize="{ minRows: 4}"
                                                    placeholder="关于这本书，有什么问题是问题你想要了解的?"
                                                    v-model="textareaAsk">
                                            </el-input>
                                            <span>500</span>
                                        </div>
                                        <span slot="footer" class="dialog-footer">
                                            <el-button @click="dialogAskVisible = false">取 消</el-button>
                                            <el-button type="primary" @click="dialogAskVisible = false;writeQuestion()">发 表</el-button>
                                        </span>
                                    </el-dialog>
                                </span>
                            </div>
                        </div>
                        <div v-if="isAskque" style="height: 1000px">
                            暂无问答
                        </div>
                        <div v-else>

                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <!-- 浏览足迹-->
        <div class="browse">
            <div class="browse-title">
                <div class="browse-title-line"></div>
                <div>您的浏览历史</div>
                <div class="browse-title-line"></div>
            </div>
            <div class="browse-book">
                <div class="browse-book-item" v-for="(item,index) in footprints" :key="index">
                    <router-link :to="{name: 'productDetail',params:{pid:item.bid}}">
                        <div class="browse-book-item-img" :title="browseTitle">
                            <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                            <div class="browse-book-item-img-show">
                                {{item.comment}}条评论
                            </div>
                        </div>
                        <div class="browse-book-item-price">￥{{item.price}}</div>
                        <div class="browse-book-item-name" :title="browseTitle">
                            {{item.name}}
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <!--        顶部固定-->
        <div class="displayTop" :style="topFixed">
            <div class="top-tab">
                <div class="top-tab-item">
                    <div class="top-tab-item-tab">
                        <el-tabs v-model="activeBook" type="card" @tab-click="handleClick">
                            <el-tab-pane label="商品详情" name="first"></el-tab-pane>
                            <el-tab-pane :label="commentAll" name="second"></el-tab-pane>
                            <el-tab-pane label="商品问答(0)" name="third"></el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
                <div class="top-tab-item">
                    <div class="top-tab-price">
                        折扣价：<span>￥139.00</span>
                    </div>
                    <div class="cart-add" @click="addToCart">
                        <el-button icon="fa fa-cart-plus"> 加入购物车</el-button>
                    </div>
                </div>
            </div>
        </div>
        <!--        侧边固定-->
        <div class="displayRight" :style="rightFixed">
            <div class="right-tab-title">
                <div class="right-tab-justify">快速直达</div>
            </div>
            <div class="right-tab-item">
                <div class="right-tab-item-tab" v-for="(item,index) in rightTab" :key="index"
                     :class="{active : activeBtn == index}" @click="goAnchor('#anchor-'+index,index)">
                    <i class="fa fa-circle"></i>
                    <div class="right-tab-justify">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import picZoom from "vue-piczoom"
    import picZoom from '@/components/picZoom'
    // import schart from '@/components/circleCanvas'
    import {
        provinceAndCityData,
        regionData,
        provinceAndCityDataPlus,
        regionDataPlus,
        CodeToText,
        TextToCode
    } from 'element-china-area-data'

    export default {
        name: "goodsDetail",
        data() {
            // 期望价格的校验方法
            let validateQiwangprice = (rule, value, callback) => {
                if (value === "") {
                    return callback(new Error("请输入您所期望的价格"));
                }
                if (/^\d+(\.{0,1}\d+){0,1}$/.test(value)) {
                    this.$refs.jiangjiaForm.validateField("checkPass");
                    return callback();
                } else {
                    return callback(
                        new Error("请输入大于0的数字值")
                    );
                }
            };
            // 电话号码的校验方法
            let validatePhonenum = (rule, value, callback) => {
                if (value === "") {
                    return callback(new Error("请输入电话号码"));
                }
                const phonenum = /^1[3|4|5|6|7|8][0-9]{9}$/;
                if (phonenum.test(value)) {
                    this.$refs.jiangjiaForm.validateField("checkPass");
                    return callback();
                } else {
                    return callback(
                        new Error("电话号码格式不正确,请输入11位数字值")
                    );
                }
            };
            return {
                goods: [],
                //浏览历史
                footprints: [
                    {
                        b_id: "0001",
                        name: "古诗词课",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        price: "46.40",
                        comment: '9012'
                    },
                    {
                        b_id: "0002",
                        name: "古诗词课1",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        price: "46.41",
                        comment: '9012'
                    },
                    {
                        b_id: "0001",
                        name: "古诗词课",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        price: "46.40",
                        comment: '9012'
                    },
                    {
                        b_id: "0001",
                        name: "古诗词课",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        price: "46.40",
                        comment: '9012'
                    },
                    {
                        b_id: "0001",
                        name: "古诗词课",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        price: "46.40",
                        comment: '9012'
                    },
                    {
                        b_id: "0001",
                        name: "古诗词课",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        price: "46.40",
                        comment: '9012'
                    },
                ],
                //浏览历史鼠标文本提示
                browseTitle: '三体',
                //评论显示与隐藏
                curData: [
                    {desc: '人物、情节、环境是小说的三要素。情节一般包括开端、发展、高潮、结局四部分，有的包括序幕、尾声。环境包括自然环境和社会环境。 小说按照篇幅及容量可分为长篇、中篇、短篇和微型小说（小小说）。按照表现的内容可分为神话、仙侠、武侠、科幻、悬疑、古传、当代、浪漫青春、游戏竞技等。按照体制可分为章回体小说、日记体小说、书信体小说、自传体小说。按照语言形式可分为文言小说和白话小说。'},
                    {desc: '小说刻画人物的方法：心理描写、动作描写、语言描写、外貌描写、神态描写，同时，小说是一种写作方法。'},
                    {desc: '小说刻画人物的方法：心理描写、动作描写、语言描写、外貌描写、神态描写，同时，小说是一种写作方法。'},
                    {desc: '与其他文学样式相比，小说的容量较大，它可以细致地展现人物性格和人物命运，可以表现错综复杂的矛盾冲突，同时还可以描述人物所处的社会生活环境。优势是可以提供整体的、广阔的社会生活。'},
                    {desc: '纯文学中的小说体裁讲究纯粹性。“谎言去尽之谓纯。”(出自墨人钢《就是》创刊题词)便是所谓的“纯”。也就是说，小说在构思及写作的过程中能去尽政治谎言、道德谎言、商业谎言、维护阶级权贵谎言、愚民谎言等谎言，使呈现出来的小说成品具备纯粹的艺术性。小说的纯粹性是阅读者最重要的审美期待之一。随着时代的发展，不光是小说，整个文学的纯粹性逾来逾成为整个世界对文学审美的一个重要核心。'}
                ],
                textHeight: null,
                //商品问答
                askAll: '商品问答(0)',
                //问答数组
                askList: [],
                //商品评论总数
                commentAll: '商品评论(9012)',
                //评论分类数量
                all: '全部(9012)',
                haoping: '好评(7012)',
                zhongping: '中评(2000)',
                chaping: '差评(0)',
                imgList: [
                    {url: require('../assets/img/wxLogin.png')},
                    {url: require('../assets/img/photo1.png')},
                    {url: require('../assets/img/wxLogin.png')},
                    {url: require('../assets/img/wxLogin.png')},
                    {url: require('../assets/img/wxLogin.png')},
                ],
                //大图片默认显示第一张
                imgurl: require('../assets/img/wxLogin.png'),
                //地址
                options: regionData,
                //存的是地区码  不是汉字
                selectedOptions: [],
                //收藏
                collectionList: [],
                //收藏人数
                collectionPer: '收藏(957人气)',
                //收藏变化
                isSelected:false,
                //降价通知填写信息
                dialogVisible: false,
                jiangjiaForm: {
                    qiwangprice: '',
                    phonenum: '',
                },
                rules: {
                    qiwangprice: [{required: true,validator: validateQiwangprice, trigger: "blur"}],
                    phonenum: [{required: true,validator: validatePhonenum, trigger: "blur"}]
                },
                //购买数量
                count: '1',
                //选项卡激活项
                activeBook: 'first',
                //顶部固定  侧边固定
                topFixed: {display: 'none'},
                topFixedb: {display: 'block'},
                topFixedn: {display: 'none'},
                rightFixed: {display: 'none'},
                rightFixedb: {display: 'block'},
                rightFixedn: {display: 'none'},
                //评价分数
                scoreValue: '',  //用以存放score x 2的值
                score: 0.5,
                //写评论弹出框
                dialogCommentVisible: false,
                //写问答弹出框
                dialogAskVisible: false,
                //写评论分数
                writescoreValue: '',  //用以存放writescore x 2的值
                writescore: 5,
                //写评论内容
                textarea: '',
                //写问题
                textareaAsk: '',
                //分页
                pageNow: 1, //当前页
                pagesize: 1,  //每页条数
                totalDataNum: 0,  //评论总数
                totalData: [], //把获取的评论数据获取放在这里
                totalDataGood: [], //把获取的好评数据获取放在这里
                totalDataMiddle: [],  //把获取的中评数据获取放在这里
                totalDataBad: [], //把获取的差评数据获取放在这里
                //编辑推荐
                editList: [
                    {editDes: '引发全球大讨论的思想炸弹，《人类简史》《未来简史》《今日简史》，新锐历史学家尤瓦尔·赫拉利系列烧脑神书，颠覆你的世界观！'},
                    {editDes: '《人类简史》第十届文津图书奖获奖作品！'},
                    {editDes: '比尔•盖茨、马克•扎克伯格、丹尼尔•卡尼曼、奥巴马、罗振宇、张颐武、陈嘉映、傅盛齐力推荐的怪才历史学家！'},
                    {editDes: '智人之所以能够崛起成为地球的主宰者，主要原因在于其具备了虚构故事的能力。'},
                    {editDes: '人类迎来第二次认知革命，人工智能和算法将战胜人类，99%的人将沦为无用阶层！'},
                    {editDes: '新技术赋予了人类重新设计生命的能力。科技颠覆、生态崩溃与核战争已迫在眉睫，我们的当务之急，是重新设计生命，重建人类的全球认同！'}
                ],
                //内容简介
                brieflyList: {
                    brieflyDes: '《人类简史》探讨了人类从哪里来，颠覆了我们关于人类进化的认知，理清了影响人类发展的重大脉络。人类究竟是怎么回事？我们是无以伦比的智慧动物吗？时代要进入后人类时代了吗？尤瓦尔·赫拉利在《人类简史》中，融合了生物学、历史学、社会学、心理学、哲学、经济学、政治学等多个学科前沿知识，打破了学科和思维局限，对人类历史提出了新的诠释。\n' +
                        '\n' +
                        '《未来简史》聚焦人类往何处去，刷新了我们对未来的想象，掀起了全球关于人工智能讨论的新思潮。进入21世纪后，曾经长期威胁人类生存、发展的瘟疫、饥荒和战争已经被攻克，智人面临着新的待办议题：永生不老、幸福快乐和成为具有“神性”的人类。在解决这些新问题的过程中，科学技术的发展将颠覆我们很多当下认为无需佐证的“常识”，比如人文主义所推崇的自由意志将面临严峻挑战，机器将会代替人类做出更明智的选择。更重要的，当以大数据、人工智能为代表的科学技术发展的日益成熟，人类将面临着从进化到智人以来的巨大改变，绝大部分人将沦为“无价值的群体”，只有少部分人能进化成特质发生改变的“神人”。我们该何去何从？\n' +
                        '\n' +
                        '《今日简史》则将目光转到当下，直面今天关乎我们每个人命运的问题和挑战。尤瓦尔•赫拉利认为，在当前这样一个分化的世界，我们对旧故事已失去信心，对新故事亦远未达成共识。当前人类社会面临着科技颠覆、生态崩溃和核战争三大挑战。“国家”这一身份认同已不足以应对今天的挑战，任何一个国家都无法独立解决全球性问题。人工智能和生物技术正在颠覆原有的社会结构和分配方式，数据成为*重要的资源。当数据巨头比我们更了解自己，当“在线”成为一种生存方式，如何规范数据的所有权？能否建立起一个维护人类自由和平等的全球社群？人工智能和生物技术已使人类掌握了重塑和重新设计生命的能力。我们该如何运用这种能力，上演另一出全新大戏？\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '在一个信息爆炸却多半无用的世界，清晰的见解就成了一种力量。尤瓦尔•赫拉利在“人类简史三部曲”——《人类简史》《未来简史》《今日简史》中没有简单给出答案，而是引发了我们进一步思考。'
                },
                //作者简介
                authorbriefList: {authorbriefDes: '尤瓦尔·赫拉利（Yuval Noah Harari），畅销书《人类简史》《未来简史》作者，牛津大学历史学博士，耶路撒冷希伯来大学教授，全球瞩目的新锐历史学家。其关注的领域横跨历史学、人类学、生态学、基因学等，他从宏观角度切入的研究往往得到颇具新意而又耐人寻味的观点，引发全球广泛关注。'},
                //目录
                listingsList: {
                    listingsDes: '《人类简史》\n' +
                        '\n' +
                        '推荐序  高毅\n' +
                        '\n' +
                        '第一部分认知革命\n' +
                        '\n' +
                        '1. 人类：一种也没什么特别的动物\n' +
                        '\n' +
                        '2. 知善恶树\n' +
                        '\n' +
                        '3. 亚当和夏娃的一天\n' +
                        '\n' +
                        '4. 毁天灭地的人类洪水\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '第二部分农业革命\n' +
                        '\n' +
                        '5. 史上最大骗局\n' +
                        '\n' +
                        '6. 盖起金字塔\n' +
                        '\n' +
                        '7. 记忆过载\n' +
                        '\n' +
                        '8. 历史从无正义\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '第三部分人类的融合统一\n' +
                        '\n' +
                        '9. 历史的方向\n' +
                        '\n' +
                        '10. 金钱的味道\n' +
                        '\n' +
                        '11. 帝国的愿景\n' +
                        '\n' +
                        '12. 宗教的法则\n' +
                        '\n' +
                        '13. 成功的秘密\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '第四部分科学革命\n' +
                        '\n' +
                        '14. 发现自己的无知\n' +
                        '\n' +
                        '15. 科学与帝国的联姻\n' +
                        '\n' +
                        '16. 资本主义教条\n' +
                        '\n' +
                        '17. 工业的巨轮\n' +
                        '\n' +
                        '18. 一场永远的革命\n' +
                        '\n' +
                        '19. 从此过着幸福快乐的日子\n' +
                        '\n' +
                        '20. 智人末日\n' +
                        '\n' +
                        '后记：变成神的这种动物\n' +
                        '\n' +
                        '参考书目\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '《未来简史》\n' +
                        '\n' +
                        '第1章人类的新议题\n' +
                        '\n' +
                        '第一部分智人征服世界\n' +
                        '\n' +
                        '第2章人类世\n' +
                        '\n' +
                        '第3章人类的特质\n' +
                        '\n' +
                        '第二部分智人为世界赋予意义\n' +
                        '\n' +
                        '第4章虚构的力量\n' +
                        '\n' +
                        '第5章科学与宗教之争\n' +
                        '\n' +
                        '第6章与“现代”的契约\n' +
                        '\n' +
                        '第7章人文主义革命\n' +
                        '\n' +
                        '第三部分智人失去控制权\n' +
                        '\n' +
                        '第8章实验室里的定时炸弹                  \n' +
                        '\n' +
                        '第9章大分离 \n' +
                        '\n' +
                        '第10章意识的海洋                       \n' +
                        '\n' +
                        '第11章数据主义                                 \n' +
                        '\n' +
                        '图片来源                                                    \n' +
                        '\n' +
                        '致谢                                                         \n' +
                        '\n' +
                        '注释   \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '《今日简史》\n' +
                        '\n' +
                        '序\n' +
                        '\n' +
                        '第一部分科技颠覆\n' +
                        '\n' +
                        '第1章理想的幻灭：从旧故事到新故事\n' +
                        '\n' +
                        '第2章就业：等你长大，可能没有工作\n' +
                        '\n' +
                        '第3章自由：数据霸权与社会公平\n' +
                        '\n' +
                        '第4章平等：谁该拥有数据\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '第二部分政治挑战\n' +
                        '\n' +
                        '第5章社群：人类身体的价值\n' +
                        '\n' +
                        '第6章文明：世界的大同\n' +
                        '\n' +
                        '第7章民族主义：无法解决全球性问题\n' +
                        '\n' +
                        '第8章宗教：神祇只是为国家服务\n' +
                        '\n' +
                        '第9章文化认同：开放与宽容\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '第三部分绝望与希望\n' +
                        '\n' +
                        '第10章恐怖主义：切忌反应过度\n' +
                        '\n' +
                        '第11章战争：永远不要低估人类的愚蠢\n' +
                        '\n' +
                        '第12章谦逊：地球不是绕着你转\n' +
                        '\n' +
                        '第13章神：不要妄称神的名\n' +
                        '\n' +
                        '第14章世俗主义：面对你的不完美\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '第四部分真相\n' +
                        '\n' +
                        '第15章无知：你知道的比你想象的少\n' +
                        '\n' +
                        '第16章正义：人类的道德困境\n' +
                        '\n' +
                        '第17章后真相时代：谎言万世永存\n' +
                        '\n' +
                        '第18章未来不是科幻小说：无法逃离的母体\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '第五部分生存下去\n' +
                        '\n' +
                        '第19章教育：改变是唯一不变的事\n' +
                        '\n' +
                        '第20章意义：人生不是虚构的故事\n' +
                        '\n' +
                        '第21章重新认识自己：人类心智的奥秘\n' +
                        '\n' +
                        '致谢\n' +
                        '\n' +
                        '注 释'
                },
                //前言
                prefaceList: [],
                //媒体评论
                mediaList: [
                    {mediaDes: '我会把《人类简史》推荐给所有对人类历史感兴趣的读者，你会发现这本书令你难以撒手。', prefaceName: '比尔·盖茨，微软公司联合创始人'},
                    {mediaDes: '《人类简史》是一部有关人类文明的宏大历史叙述。我非常期待了解这些别开生面的见解。', prefaceName: '马克·扎克伯格，Facebook创始人兼CEO'},
                    {
                        mediaDes: '尤瓦尔·赫拉利的书十分有趣并令人兴奋……他告诉我们人类是怎样在地球上生存的，农业以及科学存在的时间是如此之短，以至于我们不应该将之视为理所当然。',
                        prefaceName: '奥巴马，第44任美国总统'
                    },
                    {
                        mediaDes: '《未来简史》是一部震撼人心，同时又趣味盎然的作品。重点是，这本书会颠覆你的思考方式。',
                        prefaceName: '丹尼尔·卡尼曼，诺贝尔经济学奖得主、《思考，快与慢》作者'
                    },
                    {
                        mediaDes: '人类正面临全新的问题，解决全新的问题需要全新的公司和全新的思路。这本《今日简史》就是我们这一代人可以去解决的那些大问题的21条清单，是21个千亿乃至万亿美金的机会。',
                        prefaceName: '罗振宇，罗辑思维、得到App创始人'
                    },
                    {
                        mediaDes: '有多少历史学家对当前生物学的进展信手拈来？有多少宗教哲学家了解现代科学对人的“意识”的理解？有多少经济学家能同时用历史、心理和动物学的理论解释，让大规模人群合作，和小团队互动，有什么本质的区别？非得有一位像赫拉利这样通才式的学者，才能把这一切综合起来，让我们对现代世界有深入的见识。',
                        prefaceName: '万维钢，科学作家，得到《精英日课》专栏作者'
                    }
                ],
                //侧边固定
                rightTab: ['产品特色', '编辑推荐', '内容简介', '作者简介', '目录', '前言', '媒体评论'],
                activeBtn: 0,
                //防止点击与滑动冲突
                isScroll: true,
                //判断问答有无内容
                isAskque: true,
                //侧边推荐
                recommendHot: [
                   {
                        bookName: '肖申克的救赎（修订版）',
                        imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                        originPrice: "26.6",
                        nowPrice: "38.00"
                    },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        },
                        {
                            bookName: '肖申克的救赎（修订版）',
                            imgSrc: '//img2.winxuancdn.com/8322/1201818322_49_0_800x800.jpg?1551773360102&imageMogr2/thumbnail/55x55',
                            originPrice: "26.6",
                            nowPrice: "38.00"
                        }
                ]
            }
        },
        components: {
            picZoom,
            // schart,
            provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode
        },
        methods: {
            //点击小图片时将图片路径赋值给大图
            getIndex(index) {
                this.imgurl = this.imgList[index].url;
            },
            //评论显示与隐藏
            // 计算文字 显示展开 收起
            calculateText() {
                // 获取一行文字的height 计算当前文字比较列表文字
                let oneHeight = this.$refs.more.scrollHeight;
                console.log('oneHeight', oneHeight);
                let twoHeight = oneHeight * 2 || 40;
                this.textHeight = `${twoHeight}px`;
                let txtDom = this.$refs.txtcontainer;
                console.log('txtDom', txtDom)
                for (let i = 0; i < txtDom.length; i++) {
                    let curHeight = txtDom[i].offsetHeight
                    // vm.$set实例方法 vm.$set( target, propertyName/index, value )
                    if (curHeight > twoHeight) {
                        //Object.assign({},obj,obj1);//花括号叫目标对象，后面的obj、obj1是源对象。
                        // 对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的
                        //Object.assign 不会跳过那些值为 [null] 或 [undefined]的源对象。
                        this.$set(this.curData, i, Object.assign({}, this.curData[i], {status: true}))
                    } else {
                        this.$set(this.curData, i, Object.assign({}, this.curData[i], {status: null}))
                    }
                }
            },
            //地址
            addressChange(arr) {
                console.log(arr);
                console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]);
                let province = CodeToText[arr[0]], city = CodeToText[arr[1]], area = CodeToText[arr[2]];
                console.log(this.selectedOptions)
                console.log(province)
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            //收藏
            collection() {
                let that = this;
                that.isSelected=!that.isSelected
                this.$axios.post('/api/addFavorite', this.qs.stringify({
                        'pid': that.$route.query.pid,
                        'token': sessionStorage.getItem('token')
                    })
                )
                // then()中的回调函数中的this，不是指向VUE组件实例化对象。
                    .then((res) => {
                        console.log('axios.post()==res:', res);
                        console.log('axios.post():', res.data);
                        // //获取评论判断长度
                        // if (res.data.data[0].length > 0) {
                        //     this.totalData=
                        //     res.data.data[0];
                        //     this.totalDataNum=res.data.data[0].lengt,h;
                        // } else {
                        //     this.totalData=[];
                        //     this.totalDataNum=0;
                        // }
                        //    获取问答长度 无 则isAskque=true
                    });
            },
            //获取降价通知填写信息
            getDiscountNotice() {
                let that=this;
                console.log(that.jiangjiaForm.qiwangprice)
                console.log(that.jiangjiaForm.phonenum)
                this.$refs["jiangjiaForm"].validate(valid=>{
                    if(valid){
                        this.$axios.post(`/api/login/${that.code}/${that.code64}`,
                            this.qs.stringify({
                                "qiwangprice": that.jiangjiaForm.qiwangprice,
                                "phonenum": that.jiangjiaForm.phonenum
                            })
                    ).then((res)=>{
                                if (res.data.code === 200) {
                                    this.$message({
                                        type: 'success',
                                        message: '信息保存成功！'
                                    })
                                } else {
                                    this.$message({
                                        type: 'info',
                                        message: res.data.msg
                                    })
                                }

                        })
                            .catch((res)=>{
                                console.log(res)
                            })
                    }
                    else{
                        return false;
                    }
                })

            },
            //加入购物车数量
            handleChange(value) {
                console.log(value);
            },
            //加入购物车
            addToCart() {
                let that = this;
                let count = this.count;
                console.log(count)
                this.$axios.get('/api/cart/addBuyerCart', {
                    params: {
                        'productId': that.$route.query.pid,
                        'amount': that.count,
                        'token': sessionStorage.getItem('token')
                    }
                })
                // then()中的回调函数中的this，不是指向VUE组件实例化对象。
                    .then((res) => {
                        console.log('axios.get()==res:', res);
                        console.log('axios.get():', res.data);
                        // //获取评论判断长度
                        // if (res.data.data[0].length > 0) {
                        //     this.totalData=
                        //     res.data.data[0];
                        //     this.totalDataNum=res.data.data[0].lengt,h;
                        // } else {
                        //     this.totalData=[];
                        //     this.totalDataNum=0;
                        // }
                        //    获取问答长度 无 则isAskque=true
                    });
            },
            //立即购买
            buyNow(index) {

            },
            //选项卡各项内容
            handleClick(tab, event) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                console.log(tab, event);
                console.log('tab.index', tab.index);
                if (tab.index == 1 || tab.index == 2) {
                    this.rightFixed = this.rightFixedn;
                }
                if (tab.index == 0 && scrollTop > 780) {
                    this.rightFixed = this.rightFixedb
                }
            },
            //顶部 侧边 滑动
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                //isScroll 用于避免锚点事件触发页面滚动
                if (!this.isScroll) return;

                let tese = this.$refs.tese.getBoundingClientRect().top;
                let bianji = this.$refs.bianji.getBoundingClientRect().top;
                let neirong = this.$refs.neirong.getBoundingClientRect().top;
                let zuozhe = this.$refs.zuozhe.getBoundingClientRect().top;
                let mulu = this.$refs.mulu.getBoundingClientRect().top;
                let qianyan = this.$refs.qianyan.getBoundingClientRect().top;
                let meiti = this.$refs.meiti.getBoundingClientRect().top;
                //元素高
                let meitil = this.$refs.meiti.offsetHeight;
                console.log('tese', tese)
                console.log('bianji', bianji)
                console.log('neirong', neirong)
                console.log('zuozhe', zuozhe)
                console.log('mulu', mulu)
                console.log('qianyan', qianyan)
                console.log('meiti', meiti)
                console.log('meitil', meitil)
                console.log(scrollTop)
                if (scrollTop > 670) {
                    this.topFixed = this.topFixedb
                } else if (scrollTop < 670) {
                    this.topFixed = this.topFixedn
                }

                if (this.activeBook == 'first') {
                    if (scrollTop > 780) {
                        this.rightFixed = this.rightFixedb
                    } else if (scrollTop < 784) {
                        this.rightFixed = this.rightFixedn
                    }
                }
                if ((tese + scrollTop) < scrollTop && scrollTop < (bianji + scrollTop)) {
                    this.activeBtn = 0;
                } else if ((bianji + scrollTop) < scrollTop && scrollTop < (neirong + scrollTop)) {
                    this.activeBtn = 1;
                } else if ((neirong + scrollTop) < scrollTop && scrollTop < (zuozhe + scrollTop)) {
                    this.activeBtn = 2;
                } else if ((zuozhe + scrollTop) < scrollTop && scrollTop < (mulu + scrollTop)) {
                    this.activeBtn = 3;
                } else if ((mulu + scrollTop) < scrollTop && scrollTop < (qianyan + scrollTop)) {
                    this.activeBtn = 4;
                } else if ((qianyan + scrollTop) < scrollTop && scrollTop < (meiti + scrollTop)) {
                    this.activeBtn = 5;
                } else if ((meiti + scrollTop) < scrollTop && scrollTop < (meitil + scrollTop + meiti)) {
                    this.activeBtn = 6;
                }
            },
            //侧边固定
            //锚点跳转
            goAnchor(selector, index) {
                let that = this
                this.activeBtn = index;
                console.log(index)
                console.log(selector)
                //给定一个标识，锚点事件不触发滚动
                this.isScroll = false;
                // 不行 Cannot read property 'scrollIntoView' of null
                // this.$el.querySelector(selector).scrollIntoView(true);
                if (index == 0) {
                    document.getElementById('#anchor-0').scrollIntoView(true)
                    // this.isScroll = true;
                } else if (index == 1) {
                    this.activeBtn = index;
                    document.getElementById('#anchor-1').scrollIntoView(true)
                    // this.isScroll = true;
                } else if (index == 2) {
                    document.getElementById('#anchor-2').scrollIntoView(true)
                    // this.isScroll = true;
                } else if (index == 3) {
                    document.getElementById('#anchor-3').scrollIntoView(true)
                    // this.isScroll = true;
                } else if (index == 4) {
                    document.getElementById('#anchor-4').scrollIntoView(true)
                    // this.isScroll = true;
                } else if (index == 5) {
                    document.getElementById('#anchor-5').scrollIntoView(true)
                    // this.isScroll = true;
                } else {
                    document.getElementById('#anchor-6').scrollIntoView(true)
                    // this.isScroll = true;
                }
                this.isScroll = true;
            },
            //写评论
            writeCommit() {
                console.log(this.writescoreValue)
                console.log(this.textarea)
                let that = this
                this.$axios.post('/api/addReview/pid', this.qs.stringify({
                        pid: that.$route.query.pid,
                        content: that.textarea,
                        rank: that.writescore,
                        token: sessionStorage.getItem('token')
                    })
                )
                // then()中的回调函数中的this，不是指向VUE组件实例化对象。
                    .then((res) => {
                        console.log('axios.post()==res:', res);
                        console.log('axios.post():', res.data);
                        // //获取评论判断长度
                        // if (res.data.data[0].length > 0) {
                        //     this.totalData=
                        //     res.data.data[0];
                        //     this.totalDataNum=res.data.data[0].lengt,h;
                        // } else {
                        //     this.totalData=[];
                        //     this.totalDataNum=0;
                        // }
                        //    获取问答长度 无 则isAskque=true
                    });
            },
            //写提问
            writeQuestion() {
                console.log(this.textareaAsk)
                let that = this
                // this.$axios({
                //     url:'/api/problem',
                //     method:'post',
                //     data:{
                //         problem:that.textareaAsk
                //     }
                // }).then(function (res) {
                //     console.log('提问成功')
                // })
            },
            //分页
            handleSizeChange(val) {
                this.pageNow = 1;
                this.pagesize = val;
                console.log(`每页 ${val} 条`);
                console.log(this.$route);
                this.getPageData();
            },
            handleCurrentChange(val) {
                this.pageNow = val;
                console.log(`当前页: ${val}`);
                this.getPageData();
            },
            getPageData() {
                // this.$axios.get('/api/goodsDetal', {
                //     params: {
                //         pageSize: this.pagesize,
                //         pageIndex: this.pageNow,
                //     }
                // })
                // then()中的回调函数中的this，不是指向VUE组件实例化对象。
                //     .then((res) => {
                //         console.log(this);
                //         console.log(this.$router)
                //         console.log('axios.get()==res:', res);
                //         console.log('axios.get():', res.data);
                // this.goods=res.data.data[0];
                // //获取评论判断长度
                // if (res.data.data[0].length > 0) {
                //     this.totalData=res.data.data[0];
                //     this.totalDataNum=res.data.data[0].length;
                //     for(let i=0;i<res.data.data[0].length;i++){
                //         console.log(res.data.data[0][i]);
                //         if(res.data.data[0][i].score=='10'){
                //             this.totalDataGood.push(res.data.data[0][i])
                //         }else if(res.data.data[0][i].score<'10' && res.data.data[0][i].score>'4'){
                //             this.totalDataMiddle.push(res.data.data[0][i])
                //         }else{
                //             this.totalDataBad.push(res.data.data[0][i])
                //         }
                //     }
                //     let allNum=res.data.data[0].length,goodNum=this.totalDataGood.length,
                //         meddileNum=this.totalDataMiddle.length,badNum=this.totalDataBad.length;
                //     this.commentAll=`商品评论(${allNum} )`;
                //     this.all=`全部(${allNum} )`;
                //     this.haoping=`好评(${goodNum} )`;
                //     this.zhongping=`中评(${meddileNum} )`;
                //     this.chaping=`差评(${badNum} )`;
                // } else {
                //     this.totalData=[];
                //     this.totalDataNum=0;
                // }
                // });

            }
        },
        created() {
            this.getPageData();
            this.$nextTick(() => {
                this.calculateText()
                console.log(this.curData)
            });
            //console.log('动态路由传参数：',this.$route.params);
            //   // 通过this.$route获取当前组件的路由信息；如请求地址，请求参数：
            //   //   console.log('route:',this.$route)
            //     console.log('route params:',this.$route.params.tjname) // 张3
            //     console.log('route query:',this.$route.query.tjname) // 张3
            //获取id
            // var bid = this.$route.params.bid;
            console.log(this)
            console.log(sessionStorage.getItem('token'))
            var token=sessionStorage.getItem('token')
            // `/api/fore/productDetail/${bid}`
            this.$axios.get('/api/productDetail/1', {
                params: {}
            })
            // then()中的回调函数中的this，不是指向VUE组件实例化对象。
                .then((res) => {
                    console.log('axios.get()==res:', res);
                    console.log('axios.get():', res.data);
                    // //获取评论判断长度
                    // if (res.data.data[0].length > 0) {
                    //     this.totalData=
                    //     res.data.data[0];
                    //     this.totalDataNum=res.data.data[0].length;
                    // } else {
                    //     this.totalData=[];
                    //     this.totalDataNum=0;
                    // }
                    //    获取问答长度 无 则isAskque=true
                    //收藏人数
                    //   let collectionNum=res.data.data[0].length
                    // this.collectionPer=`收藏(${collectionNum}人气)`;
                });

        },
        mounted() {
            console.log(this)
            //修改按钮图标
            let increase = document.getElementsByClassName('el-input-number__increase')[0];
            let decrease = document.getElementsByClassName('el-input-number__decrease')[0];
            let i = increase.children[0];
            console.log(i)
            let d = decrease.children[0];
            i.className = 'el-icon-plus';
            d.className = 'el-icon-minus';


            //顶部 侧边固定 滚动监听事件
            window.addEventListener('scroll', this.handleScroll);

            //分类评论
            this.curData.forEach((ele, index) => {
                this.$set(this.curData, index, Object.assign({}, ele, {status: null}))
                console.log(this.curData)
            });
            // DOM 加载完执行
            this.$nextTick(() => {
                this.calculateText()
                console.log(this.curData)
            });
            window.onresize = () => {
                this.curData.forEach((ele, index) => {
                    this.$set(this.curData, index, Object.assign({}, ele, {status: null}))
                    console.log(this.curData)
                })
                setTimeout(() => {
                    this.calculateText()
                    console.log(this.curData)
                }, 0)
            }

        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
        }
    }
</script>

<style lang="less">
    //侧边推荐
    .rightHot {
        width: 180px;
        border: 1px solid #edecec;
        box-sizing: border-box;
        &>div:first-child{
            height: 28px;
            line-height: 28px;
            background: #f7f7f7;
            border-bottom: 1px solid #edecec;
            text-align: center;
        }
    }

    //收藏
    .activeSelecte{
        color: red;
    }
    //浏览足迹
    .browse {
        margin-top: 20px;

        & .browse-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            & .browse-title-line {
                width: 550px;
                border-bottom: 1px solid black;
            }
        }

        & .browse-book {
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            & .browse-book-item {
                width: 170px;
                font-size: 14px;
                text-align: left;
                display: flex;
                flex-direction: column;
                margin-top: 20px;

                & a {
                    text-decoration: none;
                    list-style: none;
                }

                & .browse-book-item-img-show {
                    position: relative;
                    bottom: 23px;
                    text-align: center;
                    background-color: rgba(255, 255, 255, 0.59);
                    opacity: 0;
                    color: white;
                }

                & .browse-book-item-img {
                    width: 170px;
                    height: 170px;
                    margin-bottom: 5px;

                    & img {
                        width: 100%;
                        height: 100%;
                    }

                    &:hover .browse-book-item-img-show {
                        opacity: 1;
                    }
                }

                & .browse-book-item-price {
                    color: red;
                    margin-bottom: 3px;
                }

                & .browse-book-item-name {
                    width: 100%;
                    overflow: hidden;
                    height: 23px;
                    color: black;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

        }
    }

    //侧边固定
    .displayRight {
        width: 100px;
        /*background-color: #00a2d4;*/
        z-index: 10;
        position: fixed;
        top: 55px;
        right: 155px;
        font-size: 14px;
        color: #bababa;

        & .right-tab-item-tab {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 10px;
            margin-top: 10px;
            cursor: pointer;
        }

        & .right-tab-justify {
            margin: auto;
            width: 57px;
            text-align: justify;
            text-justify: distribute-all-lines; /*ie6-8*/
            text-align-last: justify; /* ie9*/
            -moz-text-align-last: justify; /*ff*/
            -webkit-text-align-last: justify; /*chrome 20+*/
        }

        & > div {
            padding: 3px 5px;
        }

        & .right-tab-title {
            border-bottom: 1px solid lightgrey;
        }

        & i {
            margin-right: -10px;
            font-size: 12px;
            color: lightgrey;
        }

        & .active {
            color: red;

            & i {
                color: white;
            }
        }
    }

    //顶部固定
    .displayTop {
        z-index: 10;
        position: fixed;
        top: 0;
        background-color: white;
        width: 1210px;
    }

    .top-tab {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        border: 1px solid #cccccc;
        border-top: 2px solid red;
        border-radius: 0 0 5px 5px;
        padding: 5px 0;

        & .top-tab-item {
            display: flex;
            flex-direction: row;
            align-items: center;

            & div {
                margin-right: 8px;
            }
        }

        & .top-tab-price {
            font-size: 14px;

            & span {
                font-size: 20px;
                color: red;
            }
        }
    }

    .top-tab-item-tab {
        position: relative;
        right: 320px;

        & .el-tabs--card > .el-tabs__header {
            border: 0;
            margin: 0;

            & .el-tabs__nav {
                border: 0;
            }

            & .el-tabs__item {
                border: 0;
            }

            & .el-tabs__nav-wrap {
                margin-bottom: 0;
            }
        }
    }

    //商品详情
    .detail-box {
        width: 931px;
        /*background-color: #bcfcff;*/
        border-right: 1px solid lightgrey;

        & .detail-box-first {
            text-align: left;
            width: 100%;
            display: flex;
            flex-direction: column;
            /*background-color: yellow;*/
            font-size: 14px;
            margin-bottom: 20px;

            & > div:first-child > div {
                float: left;
                width: 33%;
                /*background-color: #0c79cc;*/
                margin-bottom: 7px;
            }

            & > div:nth-child(2) > span > a {
                text-decoration: none;
                list-style: none;
                margin-right: 3px;
            }
        }

        & .detail-box-second {
            & .detail-box-second-item {
                margin-bottom: 25px;
            }

            & .detail-box-second-titleall {
                display: flex;
                flex-direction: row;
                border-bottom: 2px solid lightgrey;
                border-left: 2px solid red;
                text-align: left;
                margin-bottom: 25px;

                & .detail-box-second-title {
                    & > div {
                        /*两端对齐*/
                        background-color: lightgrey;
                        padding: 7px 5px 5px;
                        width: 56px;
                        font-size: 14px;
                        text-align: justify;
                        text-justify: distribute-all-lines; /*ie6-8*/
                        text-align-last: justify; /* ie9*/
                        -moz-text-align-last: justify; /*ff*/
                        -webkit-text-align-last: justify; /*chrome 20+*/
                        line-height: 1;
                    }
                }

                & .detail-box-second-title-tri {
                    width: 0;
                    height: 0;
                    border-width: 0 26px 26px 0;
                    border-style: solid;
                    border-color: transparent transparent lightgrey;
                }
            }

            & .detail-box-second-note {
                width: 801px;
                font-size: 14px;
                margin: auto;
                text-align: left;

                & .el-icon-star-on {
                    font-size: 17px;
                }

                & .detail-box-second-note-item {
                    width: 801px;
                    margin-bottom: 5px;

                    & span {
                        margin-left: 2px;
                        text-align: left;
                    }
                }

            }
        }
    }


    //评论显示与隐藏
    .content {
        display: flex;
        margin-bottom: 30px;
    }

    .text {
        position: relative;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 2px;
        color: #666666;
    }

    .retract {
        position: relative;
        overflow: hidden;
    }

    .retract:after {
        content: '...';
        position: absolute;
        bottom: 0;
        right: 2px;
        width: 25px;
        padding-left: 30px;
        background: linear-gradient(to right, transparent, #fff 45%);
    }

    .btn {
        position: absolute;
        right: 0;
        bottom: -30px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 2px;
        color: #FFAD41;
        cursor: pointer;
    }

    .more {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 2px;
        color: #666666;
        display: none;
    }

    //写评论
    .commit {
        & .write {
            & .el-button {
                width: 80px;
            }

            & .el-dialog__body {
                font-size: 16px;
                text-align: right;

                & .el-dialog-div > span {
                    font-size: 12px;
                }

                & .el-rate {
                    & .el-rate__icon {
                        font-size: 24px;
                    }
                }
            }

            & .type-commit-item-left-score-double {
                color: #f7ba2a;
            }
        }
    }

    //分类评论
    .type-commit-item {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid lightgrey;
        margin-top: 15px;
        margin-bottom: 15px;

        & .type-commit-item-left {
            /*background-color: yellow;*/
            display: flex;
            flex-direction: column;
            text-align: left;
            padding-right: 20px;
            font-size: 14px;
            line-height: 1.7;
            width: 921.55px;

            & .type-commit-item-left-score-double {
                color: #f7ba2a;
                margin-left: 7px;
            }

            & .type-commit-item-left-score {
                & .el-rate {
                    height: 27px;

                    & .el-rate__icon {
                        font-size: 24px;
                        margin-right: 0;
                    }

                    & .el-rate__text {
                        font-size: 16px;
                        margin-left: 7px;
                    }
                }
            }

            & .type-commit-item-left-comment {
                margin-bottom: 10px;
                display: -webkit-box;
                -webkit-box-orient: vertical;

            }

            & .type-commit-item-left-time {
                margin-bottom: 15px;
            }
        }

        & .type-commit-item-right {
            /*background-color: #0afff4;*/
            display: flex;
            flex-direction: column;
            font-size: 14px;
            align-items: center;
            width: 80px;

            & .type-commit-item-right-img {
                width: 80px;
                height: 80px;
                margin-bottom: 15px;

                & img {
                    width: 100%;
                    height: 100%;
                    border-radius: 40px;
                }
            }

            & .type-commit-item-right-name {
                display: inline-block;
                white-space: nowrap;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-left: 5px;
            }
        }
    }

    .type-commit-page {
        text-align: right;

        & .el-input {
            left: 0;
        }
    }

    //商品选项卡
    .tab {
        margin-left: 25px;
        width: 100%;

        & .commit {
            border-top: 1px solid lightgrey;
            border-bottom: 1px solid lightgrey;
            background-color: #F5F7FA;
            padding: 10px 15px;
            font-size: 16px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;

            & .write {
                & .el-button {
                    line-height: 0.5;
                    background-color: #ff2832;
                    color: white;

                    &:hover {
                        color: black;
                    }
                }
            }
        }
    }

    .el-tabs__item:hover, .el-tabs__item.is-active {
        color: red;
    }

    .el-tabs__item {
        font-size: 17px;
    }

    .book-tab {
        display: flex;
        flex-direction: row;
    }

    .type-commit {
        & .el-tabs--border-card {
            border-top: 1px solid lightgrey;
            border-bottom: 1px solid lightgrey;
            border-right: 0;
            border-left: 0;

            & > .el-tabs__header {
                height: 54.4px;
                border-bottom: 1px solid lightgrey;

                & .el-tabs__item {
                    line-height: 54.4px;
                }

                & .el-tabs__item.is-active {
                    color: red;
                    height: 54.4px;
                    border: 0;
                }

                & .el-tabs__item:not(.is-disabled):hover {
                    color: red;
                }
            }
        }
    }

    //数量按钮
    .cart-count .el-input-number {
        width: 85px !important;
    }

    .cart-count .el-input-number__decrease,
    .cart-count .el-input-number__increase {
        width: 30px !important;
    }

    .cart-count .el-input-number.is-controls-right .el-input__inner {
        padding-left: 0 !important;
        padding-right: 30px !important;
    }

    //加入购物车按钮
    .cart {
        display: flex;
        flex-direction: row;
        padding-left: 15px;
        margin-top: 25px;
        align-items: center;

        & > div {
            padding-right: 10px;
        }

        & .cart-buy .el-button {
            color: #ff2832;
            background-color: #ffedee;
            border: 1px solid #ff2832;
            font-size: 16px;
            padding: 12px 15px;

            &:hover, &:active {
                color: #ff2832;
                background-color: rgba(255, 192, 203, 0.69);
            }
        }
    }

    .cart-add .el-button {
        color: white;
        background-color: #ff2832;
        font-size: 16px;
        padding: 12px 15px;

        &:hover, &:active {
            color: white;
            background-color: #f52630;
        }
    }

    //字体两边对齐
    .word-space {
        text-align: justify;
        text-justify: distribute-all-lines; /*ie6-8*/
        text-align-last: justify; /* ie9*/
        -moz-text-align-last: justify; /*ff*/
        -webkit-text-align-last: justify; /*chrome 20+*/
        width: 70px;
    }

    /*.word-space:after{*/
    /*    content:".";*/
    /*    display: inline-block;*/
    /*    width:100%;*/
    /*    overflow:hidden;*/
    /*    height:0;*/
    /*}*/

    //降价通知弹框
    .el-dialog-div {
        margin-bottom: 5px;
    }

    .el-form-item-price {
        color: #e52222;
        font-size: 14px;
    }

    .el-dialog__body {
        padding: 10px 20px;
    }

    .book-desc-item1 .el-input {
        position: relative;
        left: 7px;
        width: 80%;
    }

    .el-input__inner {
        width: 100%;
    }

    //书籍信息
    .book-msg {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        margin-bottom: 75px;
    }

    .img-book {
        /*background-color: gray;*/
        width: 350px;
    }

    .img-small {
        width: 350px;
        height: 70px;
        margin-top: 5px;
        margin-right: 1px;

        & li {
            float: left;
            height: 69px;
            list-style: none;
            padding-left: 1px;

            &:hover {
                border: 1px solid rgba(201, 201, 201, 0.56);
            }
        }

        & li:first-child {
            padding-left: 2px;
        }
    }

    .book-share {
        padding-left: 2px;
        padding-right: 3px;
        margin-top: 5px;

        & .icon-share {
            float: left;
            cursor: pointer;

            & span {
                font-size: 14px;
            }
        }

        & .icon-collection {
            float: right;
            cursor: pointer;

            & span {
                font-size: 14px;
                line-height: 1;
            }

            & i {
                font-size: 19px;
            }

        }
    }

    .book-msg-title {
        /*background-color: rgba(230, 255, 15, 0.38);*/
        width: 680px;
    }

    .book-title {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 5px;
        line-height: 1.5;
        text-align: left;
    }

    .book-title-name {
        font-weight: bold;
        font-size: 18px;
    }

    .book-title-desc {
        font-size: 16px;
        margin-top: 5px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(201, 201, 201, 0.56);
    }

    .book-desc-item {
        font-size: 14px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;

        & .book-desc-item-author {
            text-decoration: none;
            list-style: none;
            color: #1a66b3;
            padding-right: 10px;
        }
    }

    .book-desc-item1 {
        font-size: 14px;
        margin-bottom: 5px;

        & .book-desc-item-author {
            text-decoration: none;
            list-style: none;
            color: #1a66b3;
            padding-right: 10px;
        }
    }

    .book-desc-item-price {
        background-color: #fcfaf7;
        width: 652px;
        margin-left: 10px;
        border-radius: 5px;
        text-align: left;
        padding-left: 5px;
        color: #ababab;
        & .el-dialog__headerbtn{
            right:15px;
        }

        & .book-desc-item-price-discount {
            color: #e52222;
            font-size: 14px;
            margin-top: -8px;
            margin-bottom: 5px;

            & > span {
                font-size: 26px;

                & > span {
                    font-size: 16px;
                }
            }
        }

        & .orig-price {
            text-decoration: line-through;
            color: #a2a2a2;
        }
    }

    .book-title-hr {
        width: 650px;
        border-width: 1px 0 0 0;
        border-color: rgba(224, 224, 224, 0.5);
        margin-top: 15px;
    }

    .activity {
        display: flex;
        flex-direction: row;
    }

    .activity-item {
        background-color: #ff6666;
        color: white;
        padding: 5px 5px;
        border-radius: 5px;
        font-size: 13px;
        height: 14px;
        line-height: 14px;
    }

    .activity-item-int {
        margin-left: 5px;
    }

    .choose-address {
        font-size: 14px;
        height: 30px;
    }

    .choose-address-row {
        display: flex;
        flex-direction: row;
    }



</style>