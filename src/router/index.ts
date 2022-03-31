import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import Layout from '/@/layout/index.vue'

/**
 *  meta 填充自定义设置
 * 
 * 
 */

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                meta: { title: '主页', icon: 'Location' },
                component: () => import('/@/views/home/home.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: { title: '登录', hidden: true },
        component: () => import('/@/views/login/login.vue')
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     meta: { title: '404', hidden: true },
    //     component: () => import('/@/views/error-page/NotFound.vue'),
    // }
]


export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        name: 'Permission',
        meta: {
            title: 'permission',
            icon: 'Location',
            alwaysShow: true,
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
            {
                path: 'page',
                component: () => import('/@/views/home/home.vue'),
                name: 'PagePermission',
                meta: {
                    title: 'pagePermission',
                    roles: ['admin'] // or you can only set roles in sub nav
                }
            },
            {
                path: 'directive',
                component: () => import('/@/views/home/home.vue'),
                name: 'DirectivePermission',
                meta: {
                    title: 'directivePermission'
                    // if do not set roles, means: this page does not require permission
                }
            },
            {
                path: 'role',
                component: () => import('/@/views/home/home.vue'),
                name: 'RolePermission',
                meta: {
                    title: 'rolePermission',
                    roles: ['admin']
                }
            }
        ]
    },
    {
        path: '/example',
        component: Layout,
        redirect: '/example/list',
        name: 'Example',
        meta: {
            title: 'example',
            icon: 'Location'
        },
        children: [
            {
                path: 'create',
                component: () => import('/@/views/home/home.vue'),
                name: 'CreateArticle',
                meta: { title: 'createArticle', icon: 'Location' }
            },
            {
                path: 'edit/:id(\\d+)',
                component: () => import('/@/views/home/home.vue'),
                name: 'EditArticle',
                meta: { title: 'editArticle', noCache: true, activeMenu: '/example/list', hidden: true },
            },
            {
                path: 'list',
                component: () => import('/@/views/home/home.vue'),
                name: 'ArticleList',
                meta: { title: 'articleList', icon: 'Location' }
            }
        ]
    },

    {
        path: '/tab',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('/@/views/home/home.vue'),
                name: 'Tab',
                meta: { title: 'tab', icon: 'Location' }
            }
        ]
    },

    {
        path: '/error',
        component: Layout,
        redirect: 'noRedirect',
        name: 'ErrorPages',
        meta: {
            title: 'errorPages',
            icon: 'Location'
        },
        children: [
            {
                path: '401',
                component: () => import('/@/views/home/home.vue'),
                name: 'Page401',
                meta: { title: 'page401', noCache: true }
            },
            {
                path: '404',
                component: () => import('/@/views/home/home.vue'),
                name: 'Page404',
                meta: { title: 'page404', noCache: true }
            }
        ]
    },

    {
        path: '/error-log',
        component: Layout,
        children: [
            {
                path: 'log',
                component: () => import('/@/views/home/home.vue'),
                name: 'ErrorLog',
                meta: { title: 'errorLog', icon: 'Location' }
            }
        ]
    },

    {
        path: '/excel',
        component: Layout,
        redirect: '/excel/export-excel',
        name: 'Excel',
        meta: {
            title: 'excel',
            icon: 'Location'
        },
        children: [
            {
                path: 'export-excel',
                component: () => import('/@/views/home/home.vue'),
                name: 'ExportExcel',
                meta: { title: 'exportExcel' }
            },
            {
                path: 'export-selected-excel',
                component: () => import('/@/views/home/home.vue'),
                name: 'SelectExcel',
                meta: { title: 'selectExcel' }
            },
            {
                path: 'export-merge-header',
                component: () => import('/@/views/home/home.vue'),
                name: 'MergeHeader',
                meta: { title: 'mergeHeader' }
            },
            {
                path: 'upload-excel',
                component: () => import('/@/views/home/home.vue'),
                name: 'UploadExcel',
                meta: { title: 'uploadExcel' }
            }
        ]
    },

    {
        path: '/zip',
        component: Layout,
        redirect: '/zip/download',
        name: 'Zip',
        meta: { title: 'zip', icon: 'Location', alwaysShow: true },
        children: [
            {
                path: 'download',
                component: () => import('/@/views/home/home.vue'),
                name: 'ExportZip',
                meta: { title: 'exportZip' }
            }
        ]
    },

    {
        path: '/pdf',
        component: Layout,
        redirect: '/pdf/index',
        children: [
            {
                path: 'index',
                component: () => import('/@/views/home/home.vue'),
                name: 'PDF',
                meta: { title: 'pdf', icon: 'Location' }
            }
        ]
    },
    {
        path: '/theme',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('/@/views/home/home.vue'),
                name: 'Theme',
                meta: { title: 'theme', icon: 'Location' }
            }
        ]
    },

    {
        path: '/clipboard',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('/@/views/home/home.vue'),
                name: 'ClipboardDemo',
                meta: { title: 'clipboardDemo', icon: 'Location' }
            }
        ]
    },

    {
        path: '/i18n',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('/@/views/home/home.vue'),
                name: 'I18n',
                meta: { title: 'i18n', icon: 'Location' }
            }
        ]
    },

    {
        path: '/external-link',
        component: Layout
    }]

export const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({ left: 0, top: 0 })
})
