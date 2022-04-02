import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isCollapse: false,
    }
  },
  getters: {},
  actions: {},
})
