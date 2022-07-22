import { createRouter, createWebHistory } from 'vue-router'

// const routes = [
//     {
//         path: '/poc-vue/',
//         name: 'Home',
//         component: () => import("./pages/Home.vue")
//     },
//     {
//         path: '/product/:id',
//         name: 'product',
//         component: () => import('./pages/Product.vue'),
//         props: true
//     },
//     {
//         path: '/product/configuration',
//         name: 'product-configuration',
//         props: true,
//         component: () => import("./components/ProductConfigure.vue"),
//     }
// ]

const routes = [
    {
        path: "/poc-vue",
        component: () => import("./pages/Home.vue"),
        // children: [
        //     {
        //         path: "/",
        //         name: 'Home',
        //         component: () => import("./pages/Home.vue")
        //     },
        //     {
        //         path: '/product/:id',
        //         name: 'product',
        //         component: () => import('./pages/Product.vue'),
        //         props: true
        //     },
        //     {
        //         path: '/product/configuration',
        //         name: 'product-configuration',
        //         props: true,
        //         component: () => import("./components/ProductConfigure.vue"),
        //     }
        // ],
    },

    { path: "/:catchAll(.*)", component: () => import("./components/PageNotFound.vue") }
];

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })
export default router;
