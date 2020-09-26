/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
  <div class="container pt-3 px-3">
    <h2 class="mb-3">Your  shopping experience with us begins here</h2>
    <ValidationObserver ref="observer">
      <form
        slot-scope="{validate}"
        @submit.prevent="validate().then(registerUser({firstname, lastname, email, phone, password}))"
        class="form-holder p-4 p-md-5"
      >
        <div class="form-group form-row justify-content-between mb-0">
          <ValidationProvider rules="required" name="First Name" class="mb-1 md-mb-2 col-md-5 p-0">
            <div slot-scope="{ valid, errors }">
              <input
                type="text"
                placeholder="First Name"
                v-model="firstname"
                :class="{'form-control mb-2  border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error': errors[0]}"
                :state="errors[0] ? false : (valid ? true : null)"
              />

              <span class="small text-danger">{{errors[0]}}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" name="Last Name" class="mb-1 md-mb-2 col-md-5 p-0">
            <div slot-scope="{ valid, errors }">
              <input
                type="text"
                placeholder="Last Name"
                v-model="lastname"
                :class="{'form-control mb-2 border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error': errors[0] }"
                :state="errors[0] ? false : (valid ? true : null)"
              />

              <span class="small text-danger">{{errors[0]}}</span>
            </div>
          </ValidationProvider>
        </div>

        <ValidationProvider rules="required|email|min:5" name="Email">
          <div slot-scope="{ valid, errors }" class="form-group mb-2 md-mb-3">
            <input
              type="email"
              placeholder="Email Address"
              pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              v-model="email"
              :class="{'form-control  mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error': errors[0] }"
              :state="errors[0] ? false : (valid ? true : null)"
            />

            <span class="small text-danger">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider rules="required|min:5" name="Phone">
          <div slot-scope="{ valid, errors }" class="form-group mb-2 md-mb-3">
            <input
              type="tel"
              placeholder="Phone"
              v-model="phone"
              :class="{'form-control mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error':errors[0] }"
              :state="errors[0] ? false : (valid ? true : null)"
            />

            <span class="small text-danger">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider rules="required|min:4" name="Password" vid="password">
          <div slot-scope="{ valid, errors }" class="form-group mb-2 md-mb-3">
            <div :class="{'d-flex form-control p-0 mb-1' : true , 'error' : errors[0]}">
              <input
                :type="passwordFieldType"
                placeholder="Password"
                v-model="password"
                class="form-control border-0 h-100 bg-transparent"
                :state="errors[0] ? false : (valid ? true : null)"
              />

              <span class="input-group-text bg-transparent border-0">
                <i
                  class="fa"
                  style="cursor: pointer; color: #b98b09;"
                  :class="{'fa-eye': showpassword, 'fa-eye-slash': !showpassword }"
                  @click="showPassword"
                ></i>
              </span>
            </div>

            <span class="small text-danger">
              <!-- <span class="text-dark">Must be at least four characters</span>
              <br /> -->
              {{errors[0]}}
            </span>
          </div>
        </ValidationProvider>

        <ValidationProvider rules="required|min:4|confirmed:password" name="Password Confirmation">
          <div slot-scope="{ valid, errors }" class="form-group mb-4">
            <div :class="{'d-flex form-control p-0 mb-1' : true , 'error' : errors[0]}">
              <input
                :type="passwordFieldType"
                placeholder=" Confirm Password"
                v-model="confirmpassword"
                class="form-control border-0 h-100 bg-transparent"
                :state="errors[0] ? false : (valid ? true : null)"
              />
              <span class="input-group-text bg-transparent border-0">
                <i
                  class="fa"
                  style="cursor: pointer;  color: #b98b09;"
                  :class="{'fa-eye': showpassword, 'fa-eye-slash': !showpassword }"
                  @click="showPassword"
                ></i>
              </span>
            </div>
            <span class="small text-danger">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <div class="form-group mb-2">
          <button
            :disabled="!firstname || !lastname || !email || !phone || !password || confirmpassword != password"
            class="btn"
          >
            <span class="loader" v-if="loading">
              <img src="@/assets/btnloader2.svg" alt="loading" height="20px" width="20px" />
            </span>

            <span v-else>SIGN UP</span>
          </button>
        </div>

        <div class="d-flex flex-wrap align-items-center social">
          <h4>Sign up with:</h4>

          <a href="#" title="Facebook">
            <img src="@/assets/facebook.png" alt="fb" />
          </a>

          <a href="#" title="Google">
            <img src="@/assets/google.png" alt="fb" />
          </a>
        </div>
      </form>
    </ValidationObserver>

    <h3 class="mt-2">
      Have an account? Log in
      <router-link to="/login">HERE</router-link>
    </h3>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      confirmpassword: "",
      passwordFieldType: "password",
      showpassword: false,
      loading: false,
      passworderror: false
    };
  },
  computed: {
    firstname: {
      get() {
        return this.getFname();
      },

      set(value) {
        this.setfirst(value);
      }
    },
    lastname: {
      get() {
        return this.getLname();
      },

      set(value) {
        this.setlast(value);
      }
    },
    phone: {
      get() {
        return this.getPhone();
      },

      set(value) {
        this.setphone(value);
      }
    },
    email: {
      get() {
        return this.getEmail();
      },

      set(value) {
        this.setmail(value);
      }
    },
    password: {
      get() {
        return this.getPassword();
      },

      set(value) {
        this.setpassword(value);
      }
    }
  },
  methods: {
    ...mapMutations("signup", {
      setfirst: "SET_FNAME",
      setlast: "SET_LNAME",
      setmail: "SET_MAIL",
      setphone: "SET_PHONE",
      setpassword: "SET_PASSWORD"
    }),
    ...mapGetters("signup",{
      getFname: "getFirstName",
      getLname: "getLastName",
      getPhone: "getPhone",
      getEmail: "getEmail",
      getPassword: "getPassword"
    }),

    ...mapActions("signup",{
      signup: "SIGN_UP"
    }),
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.showpassword = !this.showpassword;
    },
    registerUser(obj) {
       this.loading = true;
       this.signup(obj);

      setTimeout(() => {
         this.loading = false;
      }, 1000);
      this.confirmpassword = "";
       this.$router.replace('login');
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/outerform.scss";
</style>
