import { router } from '/@/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import getPageTitle from '/@/utils/get-page-title'
import { getToken } from '/@/utils/auth'

import { usePermission } from '/@/store/permission'
import { useUserStore } from '/@/store/user'

Nprogress.configure({ showSpinner: false })

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  Nprogress.set(0.4)
  document.title = getPageTitle((to.meta as any).title)
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next('/')
      Nprogress.done()
    } else {
      const store = useUserStore()
      const hasRoles = store.roles && store.roles.length > 0
      if (!hasRoles) {
        try {
          const roles = await store.getUserInfo()
          const routes = await usePermission().generateRoutes(roles)
          routes.forEach((route) => {
            router.addRoute(route)
          })
          next({ ...to, replace: true })
        } catch (e) {
          next(`/login`)
          Nprogress.done()
        }
      } else {
        next()
      }
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
