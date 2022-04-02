import type { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
import { constantRoutes, asyncRoutes } from '/@/router'

type routes = RouteRecordRaw[]

function filterRoutes(routes: routes) {
  const list = []
  for (let i = 0; i < routes.length; i++) {
    if (!routes[i].meta?.hidden) {
      if (Array.isArray(routes[i].children)) {
        routes[i].children = filterRoutes(routes[i].children)
      }
      list.push(routes[i])
    }
  }
  return list
}

export const usePermission = defineStore('permission', {
  state: () => {
    return {
      routes: <routes>[],
    }
  },

  getters: {
    filterRoutes: (state) => {
      const newRoute = filterRoutes(state.routes)

      console.log(newRoute, '??')
      return newRoute
    },
  },

  actions: {
    async generateRoutes(roles: string[]): Promise<routes> {
      return new Promise((resolve, reject) => {
        if (roles.includes('admin')) {
          this.routes = constantRoutes.concat(asyncRoutes)
          resolve(asyncRoutes)
        }
      })
    },
  },
})
