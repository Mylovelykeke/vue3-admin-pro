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
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                commit('SET_ROLES', ['admin'])
                setTimeout(()=>{
                    resolve(['admin'])
                },1000)
            })

        }
    }
}