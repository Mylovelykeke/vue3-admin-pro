import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '../utils/auth'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: getToken(),
      roles: <string[]>[],
    }
  },
  actions: {
    async login(user: object): Promise<string> {
      return new Promise((resolve, reject) => {
        this.token = '接口请求'
        setToken('接口请求')
        setTimeout(() => {
          resolve('ppppppp')
        }, 1000)
      })
    },
    async getUserInfo(): Promise<string[]> {
      return new Promise((resolve, reject) => {
        this.roles = ['admin']
        resolve(['admin'])
      })
    },

    async logout() {
      return new Promise((resolve, reject) => {
        removeToken()
        resolve('')
      })
    },
  },
})
