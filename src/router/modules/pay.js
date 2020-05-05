export default [
    {
        path: '/paySuccess',
        name: 'PaySuccess',
        component:()=>import('../../views/PaySuccess.vue'),
        meta: {
            title: '支付成功'
        }
    },
    {
        path: '/payError',
        name: 'PayError',
        component:()=>import('../../views/PayError.vue'),
        meta: {
            title: '支付失败'
        }
    }
]