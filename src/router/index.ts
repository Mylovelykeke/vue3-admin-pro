import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHistory } from "vue-router";
import Layout from '/@/layout/index.vue'

export const constantRoutes: RouteRecordRaw[] = [{
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
        {
            path: 'home',
            name: 'Home',
            meta: { title: '主页' },
            component: () => import('../views/home/home.vue')
        }
    ]
},
{
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('/@/views/login/login.vue')
},
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '404' },
    component: () => import('../views/error-page/NotFound.vue'),
}]


export const asyncRoutes: RouteRecordRaw[] = [{
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
        title: 'permission',
        icon: 'lock',
        roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
        {
            path: 'page',
            component: () => import('/@/views/permission/page'),
            name: 'PagePermission',
            meta: {
                title: 'pagePermission',
                roles: ['admin'] // or you can only set roles in sub nav
            }
        },
        {
            path: 'directive',
            component: () => import('/@/views/permission/directive'),
            name: 'DirectivePermission',
            meta: {
                title: 'directivePermission'
                // if do not set roles, means: this page does not require permission
            }
        },
        {
            path: 'role',
            component: () => import('/@/views/permission/role'),
            name: 'RolePermission',
            meta: {
                title: 'rolePermission',
                roles: ['admin']
            }
        }
    ]
}]

export const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({ left: 0, top: 0 })
})
