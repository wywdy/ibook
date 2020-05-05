

export default [
    {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../../views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
]