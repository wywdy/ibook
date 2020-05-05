export default [
    {
        path: '/channel/:categoryId',
        name: 'Channel',
        component:()=>import('../../views/Channel.vue'),
        meta: {
            title: '频道'
        }
    }
]