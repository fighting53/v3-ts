import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: 'order',
                name: 'order',
                component: () => import(/* webpackChunkName: "about" */ '../views/orderList.vue'),
                meta: {
                    isShown: true,
                    title: ' 订单列表',
                },
            },
            {
                path: 'shop',
                name: 'shop',
                component: () => import(/* webpackChunkName: "about" */ '../views/shopList.vue'),
                meta: {
                    isShown: true,
                    title: '商品列表',
                },
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/loginVue.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
