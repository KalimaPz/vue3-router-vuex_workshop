import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Profile from "../views/Profile/Profile.vue"
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
    component: () => {}
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

export default router;