export default[
    {
        path: '/custservice',
        name: 'CustService',
        component:()=>import('../../views/CustService.vue'),
        meta: {
            title: '在线客服'
        }
    }
]