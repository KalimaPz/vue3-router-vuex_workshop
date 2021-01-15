import Vue from "vue";
import Vuex from "vuex";
import {
  db
} from "../config/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    biograph: {
      info: {},
      lifestyle: [],
      skill: {},
      story: '',
      work: [],
    },

  },
  mutations: {
    add_profile_detail(state, data) {
      console.log('loading : -> '+state.loading)
      state.biograph.info = data.info
      state.biograph.lifestyle = data.lifestyle
      state.biograph.skill = data.siklls
      state.biograph.story = data.story
      state.biograph.work = data.work_exp
      if (state.biograph == {}) {
        state.loading = true
      } else {
        state.loading = false
      }
      console.log('loading : -> '+state.loading)
    },
  },
  actions: {
    async FETCH(context) {
      const snapshot = await db.collection('information').doc('8NB5BqxpGYzk5lA1QSml').get()
      const data = snapshot.data()
      console.log(data)
      context.commit('add_profile_detail', snapshot.data())
    },
    // CHECKLOAD(context){
    //   context.commit('setloading')
    // }
  },
  modules: {

  }
});