<template>
  <div class="container p-3">
    <h2 class="mb-3">Your amazing shopping experience with us begins here</h2>
    <ValidationObserver ref="observer">
      <form
        slot-scope="{validate}"
        class="form-holder p-4 p-md-5"
        @submit.prevent="validate().then(logIn({email, password}))"
      >
        <ValidationProvider rules="required|email|min:5" name="Email">
          <div slot-scope="{ valid, errors }" class="form-group mb-4">
            <input
              type="email"
              placeholder="Email Address"
              v-model="email"
              required
              pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              :class="{'form-control mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error': errors[0] }"
              :state="errors[0] ? false : (valid ? true : null)"
            />

            <span class="small text-danger">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <div class="form-group mb-4">
          <div
            class="d-flex form-control p-0 mb-1 border-top-0 border-right-0 border-left-0 bg-transparent"
          >
            <input
              :type="passwordFieldType"
              placeholder="Password"
              v-model="password"
              class="form-control border-0 h-100 bg-transparent"
              required
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
        </div>

        <div class="form-group mb-4">
          <button :disabled="!email || !password" class="btn">
            <span class="loader" v-if="loading">
              <img src="@/assets/btnloader2.svg" alt="loading" height="20px" width="20px" />
            </span>

            <span v-else>LOG IN</span>
          </button>
        </div>

        <h5>
          <router-link to="forgot-password">Forgot Password?</router-link>
        </h5>

        <div class="d-flex flex-wrap align-items-center social">
          <h4>Log in with:</h4>

          <a href="#" title="Facebook">
            <img src="@/assets/facebook.png" alt="fb" />
          </a>

          <a href="#" title="Google">
            <img src="@/assets/google.png" alt="fb" />
          </a>
        </div>
      </form>
    </ValidationObserver>

    <h3 class="mt-4">
      Don’t have an account with us yet? Sign up
      <router-link to="/signup">HERE</router-link>
    </h3>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      passwordFieldType: "password",
      showpassword: false,
      loading: false
    };
  },
  computed: {
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
    ...mapMutations("login",{
      setmail: "SET_MAIL",
      setpassword: "SET_PASSWORD"
    }),
    ...mapGetters("login",{
      getEmail: "getEmail",
      getPassword: "getPassword"
    }),

    ...mapActions("login",{
      login: "LOG_IN"
    }),

    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.showpassword = !this.showpassword;
    },

     logIn(obj) {
      this.loading = true;
       this.login(obj);

      setTimeout(() => {
         this.loading = false;
      }, 1000);
     
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/outerform.scss";
</style>
