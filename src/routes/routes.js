import Vue from "vue";
import Router from "vue-router";

import MainView from "../views/MainView";
import LoginView from "../views/LoginView";
import JoinView from "../views/JoinView";

const path = "http://localhost:8000";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/join",
      name: "join",
      component: JoinView,
    },
  ],
});
