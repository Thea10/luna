<template>
  <div class="container p-3">
    <h2 class="mb-3">Your amazing shopping experience with us begins here</h2>
    <ValidationObserver ref="observer">
      <form
        slot-scope="{validate}"
        class="form-holder p-4 p-md-5"
        @submit.prevent="validate().then(logIn)"
      >
        <ValidationProvider rules="required|email|min:5" name="Email">
          <div slot-scope="{ valid, errors }" class="form-group mb-4">
            <input
              type="email"
              placeholder="Email Address"
              v-model="form.email"
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
              v-model="form.password"
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
          <button class="btn">LOG IN</button>
        </div>

        <h5>
          <router-link to="forgot-password"> Forgot Password?</router-link>
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
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      passwordFieldType: "password",
      showpassword: false
    };
  },
  methods: {
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.showpassword = !this.showpassword;
    },
    logIn() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/outerform.scss";
</style>
