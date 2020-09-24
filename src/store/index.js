import { random } from "lodash";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let productstore = {
  namespaced: true,
  state: {
    productitems: [
      {
        id: 1,
        name: "Honey",
        price: 1500,
        size: 500,
        img: require("../assets/honey-500.jpeg"),
        wished: true,
        count: 1,
      },
      {
        id: 2,
        name: "Coconut Oil",
        price: 1200,
        size: 150,
        img: require("../assets/coco-150.jpeg"),
        wished: false,
        count: 1,
      },
      {
        id: 3,
        name: "Honey",
        price: 1200,
        size: 300,
        img: require("../assets/honey-300.jpg"),
        wished: false,
        count: 1,
      },
      {
        id: 4,
        name: "Coconut Oil",
        price: 500,
        size: 50,
        img: require("../assets/coco-50.jpeg"),
        wished: false,
        count: 1,
      },
      {
        id: 5,
        name: "Coconut Oil",
        price: 1700,
        size: "50 150",
        img: require("../assets/coco15050.jpeg"),
        wished: false,
        count: 1,
      },
    ],
    cartitems: [],
    cartcount: 0,
    carttotal: 0,
  },
  getters: {
    getProducts: (state) => state.productitems,
    getCartItems: (state) => state.cartitems,
    getCartCount: (state) => {
      state.cartcount = state.cartitems.reduce(
        (acc, item) => acc + item.count,
        0
      );

      return state.cartcount;
    },
    getCartTotal: (state) => {
      state.carttotal = state.cartitems.reduce(
        (acc, item) => acc + item.count * item.price,
        0
      );
      return state.carttotal;
    },
  },
  mutations: {
    UPDATE_CART(state, payload) {
      let index = state.cartitems.findIndex((item) => item.id == payload.id);

      if (index >= 0) {
        state.cartitems[index].count += 1;
      } else {
        payload.id = random(state.cartitems.length + 1, 900);

        state.cartitems = [...state.cartitems, payload];
        // console.log(state.cartitems);
      }

      // console.log(state.cartitems);
    },

    REMOVE_ITEM(state, payload) {
      let index = state.cartitems.findIndex((item) => item.id == payload.id);

      if (state.cartitems[index].count == 1) {
        return (state.cartitems = state.cartitems.filter(
          (items) => items.id != payload.id
        ));
      } else {
        state.cartitems[index].count -= 1;
      }

      // console.log(state.cartitems[index]);
    },

    WISH_ACTION(state, payload) {
      let index = state.productitems.findIndex((item) => item.id == payload.id);

      if (state.productitems[index].wished == true) {
        state.productitems[index].wished = false;
      } else {
        state.productitems[index].wished = true;
      }
    },

    CHECKOUT_CART(state) {
      state.cartitems = [];
    },
  },
  // perform asynchronous operations inside an action; remember this when you have to make api calls
  actions: {
    REMOVE_FROM_CART({ commit }, item) {
      commit("REMOVE_ITEM", item);
    },

    ADD_TO_CART({ commit }, item) {
      // console.log(item);
      setTimeout(() => {
        commit("UPDATE_CART", item);
      }, 3000);
    },

    WISH_ITEM({ commit }, item) {
      // console.log(item);
      setTimeout(() => {
        commit("WISH_ACTION", item);
      }, 3000);
    },

    CHECK_OUT({ commit }) {
      //console.log(item);
      setTimeout(() => {
        commit("CHECKOUT_CART");
      }, 3000);
    },
  },
  modules: {},
};

//module for user will contain submodules login, signup and porfile

let loginstore = {
  namespaced: true,
  state: {
    email: "",
    password: "",
  },
  getters: {
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
  },
  mutations: {
    SET_MAIL(state, payload) {
      state.email = payload;
    },

    SET_PASSWORD(state, payload) {
      state.password = payload;
    },

    CLEAR_DATA(state) {
      state.email = "";
      state.password = "";
    },
  },
  actions: {
    LOG_IN({ commit }, item) {
      sessionStorage.setItem("logindata", JSON.stringify({ ...item }));
      setTimeout(() => {
        commit("CLEAR_DATA");
      }, 3000);
    },

    RESET_PASSWORD({commit}, item){
      sessionStorage.setItem("resetdata", JSON.stringify({ ...item }));
      setTimeout(() => {
        commit("CLEAR_DATA");
      }, 3000);
    }
  },
};

let signupstore = {
  namespaced: true,
  state: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  },
  getters: {
    getFirstName: (state) => state.firstname,
    getLastName: (state) => state.lastname,
    getEmail: (state) => state.email,
    getPhone: (state) => state.phone,
    getPassword: (state) => state.password,
  },
  mutations: {
    SET_FNAME(state, payload) {
      state.firstname = payload;
    },
    SET_LNAME(state, payload) {
      state.lastname = payload;
    },
    SET_MAIL(state, payload) {
      state.email = payload;
    },
    SET_PHONE(state, payload) {
      state.phone = payload;
    },
    SET_PASSWORD(state, payload) {
      state.password = payload;
    },

    CLEAR_DATA(state) {
      state.firstname = "";
      state.lastname = " ";
      state.phone = "";
      state.email = "";
      state.password = "";
    },
  },
  actions: {
    SIGN_UP({ commit }, item) {
      sessionStorage.setItem("signupdata", JSON.stringify({ ...item }));
      setTimeout(() => {
        commit("CLEAR_DATA");
      }, 3000);
    },
  },
};

let store = new Vuex.Store({
  modules: {
    items: productstore,
    login: loginstore,
    signup: signupstore
  },
  state: {},
  mutations: {},
  getters: {},
  actions: {},
});


export default store;
