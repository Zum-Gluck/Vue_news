import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cid: 0
  },
  mutations: {
    changeCid(state, num) {
      state.cid = num;
    }
  }
})

export default store