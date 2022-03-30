import getPageTitle from '/@/utils/get-page-title'
import { getToken } from '/@/utils/auth';
import { store } from '/@/store/index'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import { router } from '/@/router'

Nprogress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    Nprogress.set(0.4)
    document.title = getPageTitle((to.meta as any).title)
    const hasToken = getToken()
    if (hasToken) {
        try {
            const roles = await store.dispatch('user/getInfo')
            const routes = await store.dispatch('permission/generateRoutes')
            next()
        } catch (e) {

        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ name: 'Login' })
            Nprogress.done()
        }
    }
})

router.afterEach(() => {
    Nprogress.done()
})