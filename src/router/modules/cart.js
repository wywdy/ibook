export default [
    {
        path:'/cart',
        name: 'Cart',
        component: () => import('../../views/ShopCart.vue'),
        meta: {
            title: '购物车'
        }
    },
]