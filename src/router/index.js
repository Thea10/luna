import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import { authGard, checklogIn } from "./routeguard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buy",
    name: "Buy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/Buy.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    beforeEnter: authGard,
    component: () => import("@/views/Cart.vue"),
   
  },

  {
    path: "/profile",
    name: "Profile",
    beforeEnter: authGard,
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    beforeEnter: checklogIn,
    component: () => import("@/views/Login.vue"),
  },

  {
    path: "/signup",
    name: "SignUp",
    beforeEnter: checklogIn,
    component: () => import("@/views/Signup.vue"),
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
     beforeEnter: checklogIn,
    component: () => import("@/views/ForgotPassword.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
