/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
  <div class="container px-3">
    <h2 class="mb-3">Your amazing shopping experience with us begins here</h2>
    <ValidationObserver ref="observer">
      <form
        slot-scope="{validate}"
        @submit.prevent="validate().then(registerUser)"
        class="form-holder p-4 p-md-5"
      >
        <div class="form-group form-row justify-content-between mb-0">
          <ValidationProvider rules="required" name="First Name" class="mb-1 md-mb-2 col-md-5 p-0">
            <div slot-scope="{ valid, errors }">
              <input
                type="text"
                placeholder="First Name"
                v-model="form.firstname"
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
                v-model="form.lastname"
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
              v-model="form.email"
              :class="{'form-control  mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error': errors[0] }"
              :state="errors[0] ? false : (valid ? true : null)"
            />

            <span class="small text-danger">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider rules="required" name="Phone">
          <div slot-scope="{ valid, errors }" class="form-group mb-2 md-mb-3">
            <input
              type="tel"
              placeholder="Phone"
              v-model="form.phone"
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
                v-model="form.password"
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
              <span class="text-dark">Must be at least four characters</span>
              <br />
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
                v-model="form.confirmpassword"
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
          <button class="btn">SIGN UP</button>
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
export default {
  name: "Signup",
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        password: null,
        confirmpassword: null
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
    registerUser() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/outerform.scss";
</style>
