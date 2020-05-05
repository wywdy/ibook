export default [
    {
        path: '/order',
        name: 'Order',
        component:()=>import('../../views/Order.vue'),
        meta: {
            title: '订单'
        }
    }
]