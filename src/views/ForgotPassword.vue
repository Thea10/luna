<template>
  <div class="container p-3">
    <h2 class="mb-3">Forgot your password? We’ve got you covered!</h2>
    <ValidationObserver ref="observer">
      <form
        slot-scope="{validate}"
        class="form-holder"
        @submit.prevent="validate().then(resetRequest(email))"
      >
        <ValidationProvider rules="required|email|min:5" name="Email">
          <div slot-scope="{valid, errors}" class="form-group mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              v-model="email"
              :class="{'form-control mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true, 'error': errors[0] }"
              :state="errors[0] ? false : (valid ? true : null)"
            />

            <span class="small text-danger">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <div class="form-group mb-4">
          <button :disabled="!email" class="btn text-center" style="    padding: .375rem .75rem;">
            <span class="loader" v-if="loading">
              <img src="@/assets/btnloader2.svg" alt="loading" height="20px" width="20px" />
            </span>
            <span v-else>Send me a password reset link</span>
          </button>
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
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "ForgotPassword",
  data() {
    return {
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
    }
  },

  methods: {
    ...mapGetters("login", {
      getEmail: "getEmail"
    }),
    ...mapActions("login", {
      reset: "RESET_PASSWORD"
    }),
    ...mapMutations("login", {
      setmail: "SET_MAIL"
    }),

    resetRequest(obj) {
      this.loading = true;
       this.reset(obj);

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
