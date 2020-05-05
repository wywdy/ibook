export default [
    {
        path: '/AllCategories',
        name: 'AllCategories',
        component: () => import('../../views/AllCategories.vue'),
        meta: {
            title: '全部分类'
        }
    },
]