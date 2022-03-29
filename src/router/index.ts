import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import Layout from '/@/layout/index.vue'

const routes: RouteRecordRaw[] = [{
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
        {
            path: 'home',
            component: () => import('../views/home/home.vue')
        }
    ]
},
{
    path: '/login',
    component: () => import('/@/views/login/login.vue')
}]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior: () => ({ left: 0, top: 0 })
})