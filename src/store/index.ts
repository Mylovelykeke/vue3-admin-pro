import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, createLogger } from 'vuex'
import user from './modules/user'
export interface State {
    isCollapse: Boolean
}

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
    state: {
        isCollapse: false
    },
    mutations: {
        updateCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        }
    },
    strict: true,
    modules:{
        user
    },
    plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : []
})

export function useStore() {
    return baseUseStore(key)
}