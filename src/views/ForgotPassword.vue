<template>
  <div class="container p-3">
    <h2 class="mb-3">Forgot your password? We’ve got you covered!</h2>
    <ValidationObserver ref="observer">
      <form
        slot-scope="{validate}"
        class="form-holder"
        @submit.prevent="validate().then(resetRequest)"
      >
        <ValidationProvider rules="required|email|min:5" name="Email">
          <div slot-scope="{valid, errors}" class="form-group mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              v-model="form.email"
              :class="{'form-control mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error': errors[0] }"
              :state="errors[0] ? false : (valid ? true : null)"
            />

            <span class="small text-danger">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <div class="form-group mb-4">
          <button
            class="btn text-center"
            style="    padding: .375rem .75rem;"
          >Send me a password reset link</button>
        </div>
      </form>
    </ValidationObserver>

    <h3 class="mt-2">
      Back to
      <router-link to="/login">Log in</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      form: {
        email: null
      }
    };
  },

  methods: {
    resetRequest() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/outerform.scss";
</style>
