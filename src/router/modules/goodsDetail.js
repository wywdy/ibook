
export default [
    {
        // path: '/fore/productDetail/:pid',
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: () => import(/* webpackChunkName: "about" */ '../../views/goodsDetail.vue'),
        meta: {
            title: '商品详情'
        }
    },
]