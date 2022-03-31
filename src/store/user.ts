import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            roles: <string[]>[]
        }
    },
    actions: {
        async getUserInfo(): Promise<string[]> {
            return new Promise((resolve, reject) => {
                this.roles = ['admin']
                resolve(['admin'])
            })
        }
    }
})