import { storeIds } from './../constants/index'
import { defineStore, acceptHMRUpdate} from 'pinia'

const state = () => ({
  isLoading: false,
  isAuth: false,
  userInfo: null,
})

const actions = {
  
}

const getters = {

}

export const useMainStore = defineStore(storeIds.MAIN, {
  state,
  actions,
  getters,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
