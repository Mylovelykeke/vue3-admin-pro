import { constantRoutes, asyncRoutes } from '/@/router'

export default {
    namespaced: true,

    state: {
        roles: []
    },

    mutations: {
        SET_ROLES(state, payload) {
            state.roles = payload
        }
    },

    actions: {
        generateRoutes({ commit },payload) {
            return new Promise((resolve, reject) => {
                if(payload.includes('admin')){
                    SET_
                }else{

                }
            })

        }
    }
}