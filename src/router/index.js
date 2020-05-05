
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 公共页面的路由文件
import HOME from './modules/home'
// 投票模块的路由文件
import Search from './modules/search'
import Channel from './modules/channel'
import CustService from './modules/custservice'
import ErrorSearch from './modules/errorSearch'
import Pay from './modules/pay'
import GoodsDetail from './modules/goodsDetail'
import Description from './modules/description'
import Cart from './modules/cart'
import Order from './modules/Order'
//个人中心路由文件
import PersonCenter from "./modules/personcenter"
//秒杀路由文件
import wz from  './modules/wangzhan'
//活动路由文件
import activity from './modules/activity'
import activity2 from './modules/activity2'
//全部分类页面路由
import AllCategories from './modules/allCategories'
import Subcategory from './modules/subcategory'


// 定义路由
const router = new VueRouter({
  mode: 'history',
  routes: [
    //客服界面
    ...CustService,

    //支付页面
    ...Pay,
    //购物车界面
    ...Cart,
    //订单界面
    ...Order,

    ...Description,

    ...AllCategories,
    ...Subcategory,

    //活动界面
    ...activity,
    ...activity2,

    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/',
      // name: 'defalut',
      redirect: '/home',
      component: () => import(/* webpackChunkName: "about" */ '../views/defaultMain.vue'),
      children:[
        {
          path:"home",
          name:"Home",
          component:()=>import("../views/Home.vue"),
          meta:{
            title:"首页",
          }
        },
        // 频道页面
        ...Channel,
        //秒杀页面
        ...wz,
        //商品详情
        ...GoodsDetail,
        //搜索
        ...Search,
        //错误搜索页面
        ...ErrorSearch,
        //个人中心页面
        ...PersonCenter,
      ],
      meta: {
        title: '首页'
      }
    },
  ]
})

// 路由变化时
router.beforeEach((to, from, next) => {
  if (document.title !== to.meta.title) {
    document.title = to.meta.title;
  }
  if(to.path==='/personCenter'){
    const token=sessionStorage.getItem("token")
    console.log(token);
    if(token){
      next()
    }else {
      next("/")
    }
  }
  next()
})

// 导出
export default router
