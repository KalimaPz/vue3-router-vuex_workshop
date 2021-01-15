import Vue from "vue";
import Vuex from "vuex";
import {
  db
} from "../config/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading : true,
    biograph: [],
    info : {},
    lifestyle : [],
    skill : {},
    story : '',
    work : [],
  },
  mutations: {
    add_profile_detail(state, data) {
      state.info = data.info
      state.lifestyle = data.lifestyle
      state.skill = data.siklls
      state.story = data.story
      state.work = data.work_exp
    }
  },

  actions: {
    async FETCH (context) {
      const snapshot = await db.collection('information').doc('8NB5BqxpGYzk5lA1QSml').get()
      const data = snapshot.data()
      console.log(data)
      context.commit('add_profile_detail', snapshot.data())
    }
  },
  modules: {}
});