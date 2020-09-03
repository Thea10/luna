import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
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
        component: () =>
            import ("@/views/Buy.vue"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () =>
            import ("@/views/Cart.vue"),
    },
    {
        path: "/login",
        name: "LogIn",
        component: () =>
            import ("@/views/Login.vue"),
    },
    {
        path: "/login",
        name: "LogIn",
        component: () =>
            import ("@/views/Login.vue"),
    },

    {
        path: "/signup",
        name: "SignUp",
        component: () =>
            import ("@/views/Signup.vue"),
    },

    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () =>
            import ("@/views/ForgotPassword.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;