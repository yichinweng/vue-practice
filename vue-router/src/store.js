import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'This is an about page',
    headlines: {},
    fetching: false,
  },
  mutations: {
    setMsg (state, newValue) {
      state.msg = newValue
    },
    clearMsg (state) {
      state.msg = ''
    },
    setHeadlines (state, headlines) {
      state.headlines = headlines
    },
    fetching (state, bool) {
      state.fetching = bool
    }
  },
  actions: {
    getHeadlines ({ commit }) {
      commit('fetching', true);
      fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=9180b03cfcdf4018ab8b60731b6c958a')
      .then(function(res) {
        return res.json();
      })
      .then((resJson) => {
        commit('setHeadlines', resJson);
        commit('fetching', false);
      })
    },
  }
})
