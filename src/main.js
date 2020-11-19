import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
var VueScrollTo = require('vue-scrollto');
Vue.config.productionTip = false;
Vue.use(axios, VueAxios);
Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");