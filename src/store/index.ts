import { createStore } from 'vuex'

export default createStore({
  state: {
    abc: '小明'
  },
  mutations: {
    changeAbc(state, val) {
      state.abc = val
    }
  },
  actions: {
    changeA(context, val) {
      context.commit("changeAbc", val)
    }
  },
  modules: {
  }
})
