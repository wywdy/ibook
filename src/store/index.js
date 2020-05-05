import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'user',
    uid:1,
    token:'',
    shoppingCart:[{
      bookId:'1',
      bookName: '我们仨1',
      bookImgSrc:'testr',
      nowPrice:'23.40',
      bookNumber:2,
      bookState:false
    },{
      bookId:'2',
      bookName: '我们仨2',
      bookImgSrc:'testr',
      nowPrice:'23.40',
      bookNumber:2,
      bookState:true
    }, {
      bookId:'3',
      bookName: '我们仨3',
      bookImgSrc:'testr',
      nowPrice:'23.40',
      bookNumber:2,
      bookState:true
    }, {
      bookId:'4',
      bookName: '我们仨4',
      bookImgSrc:'testr',
      nowPrice:'23.40',
      bookNumber:2,
      bookState:false
    }, {
      bookId:'5',
      bookName: '我们仨5',
      bookImgSrc:'testr',
      nowPrice:'23.40',
      bookNumber:2,
      bookState:true
    }],
  },
  getters:{
    getUser (state) {
      return state.user
    },
    getToken (state) {
      return state.token
    },
    getShoppingCart(state){
      // 获取购物车状态
      return state.shoppingCart;
    },
    getIsAllCheck (state) {
      // 判断是否全选
      let isAllCheck = true;
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i];
        // 只要有一个商品没有勾选立即return false;
        if (!temp.bookState) {
          isAllCheck = false;
          return isAllCheck;
        }
      }
      return isAllCheck;
    },
    getTotalPrice (state) {
      // 购物车勾选的商品总价格
      let totalPrice = 0;
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i];
        if (temp.bookState) {
          totalPrice += temp.nowPrice * temp.bookNumber;
        }
      }
      return totalPrice;
    },
    getPrice (state) {
      // 购物车的商品总价格
      let totalPrice = 0;
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i];
        totalPrice += temp.nowPrice * temp.bookNumber;

      }
      return totalPrice;
    },
    getCheckGoods (state) {
      // 获取勾选的商品信息
      // 用于确认订单页面
      let checkGoods = [];
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i];
        if (temp.bookState) {
          checkGoods.push(temp);
        }
      }
      return checkGoods;
    },
  },
  mutations: {
    updateShoppingCart (state, payload) {
      // 根据商品在购物车的数组的索引和属性更改
      state.shoppingCart[payload.key][payload.prop] = payload.val;
    },
    checkAll (state, data) {
      // 点击全选按钮，更改每个商品的勾选状态
      for (let i = 0; i < state.shoppingCart.length; i++) {
        state.shoppingCart[i].bookState = data;
      }
    },
    deleteShoppingCart (state, id) {
      // 根据购物车id删除购物车商品
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i];
        if (temp.bookId == id) {
          state.shoppingCart.splice(i, 1);
        }
      }
    },
    unshiftShoppingCart (state, data) {
      // 添加购物车
      // 用于在商品详情页点击添加购物车,后台添加成功后，更新vuex状态
      state.shoppingCart.unshift(data);
    },
  },
  actions: {
    updateShoppingCart ({ commit }, payload) {
      commit('updateShoppingCart', payload);
    },
    unshiftShoppingCart ({ commit }, data) {
      commit('unshiftShoppingCart', data);
    },
    checkAll ({ commit }, data) {
      commit('checkAll', data);
    },
    deleteShoppingCart ({ commit }, id) {
      commit('deleteShoppingCart', id);
    },
  },
  modules: {
  }
})
