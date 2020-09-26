<template>
  <div class="profile-section container-fluid p-0 pt-3">
    <div class="profile-header"></div>

    <div
      class="profile-content d-flex flex-column flex-md-row col-md-10 ml-auto mr-2 justify-content-center"
    >
      <div class="user-info bg-white col-11 col-md-3 mx-2 mb-3 p-3">
        <div class="user-info-head mb-3">
          <div class="img-holder mx-auto">
            <img src="../assets/avar2.png" alt="user-avartar" />
          </div>

          <h4>Akinade Cynthia</h4>
        </div>

        <div class="order-info">
          <ul class="list-group pl-0">
            <li class="list-group-item p-2">
              <h4>
                Total Orders :
                <span class="ml-3">4</span>
              </h4>
            </li>
            <li class="list-group-item p-2 mb-4">
              <h4>
                Pending Orders :
                <span class="ml-3">4</span>
              </h4>
            </li>

            <li class="list-group-item p-2 logout" @click="logOut">
              <h4>
                Log Out
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </h4>
            </li>
          </ul>
        </div>
      </div>

      <div class="edit-info col-11 col-md-8 mx-2 mx-md-5 bg-white mb-3 p-3">
        <h4>Edit Profile Details</h4>

        <ValidationObserver ref="observer">
          <form
            slot-scope="{ validate }"
            @submit.prevent="validate().then(updateDetails)"
            class="p-4"
          >
            <div class="form-group form-row justify-content-between mb-0">
              <ValidationProvider
                rules="required"
                name="First Name"
                class="mb-1 md-mb-2 col-md-5 p-0"
              >
                <div slot-scope="{ valid, errors }">
                  <label for="First name">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    v-model="form.firstname"
                    :class="{
                      'form-control mb-2  border-top-0 border-right-0 border-left-0 bg-transparent': true,
                      error: errors[0]
                    }"
                    :state="errors[0] ? false : valid ? true : null"
                  />

                  <span class="small text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                name="Last Name"
                class="mb-1 md-mb-2 col-md-5 p-0"
              >
                <div slot-scope="{ valid, errors }">
                  <label for="Last name">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    v-model="form.lastname"
                    :class="{
                      'form-control mb-2 border-top-0 border-right-0 border-left-0 bg-transparent': true,
                      error: errors[0]
                    }"
                    :state="errors[0] ? false : valid ? true : null"
                  />

                  <span class="small text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>

            <div class="form-group form-row justify-content-between mb-0">
              <ValidationProvider
                rules="required|email|min:5"
                class="mb-1 md-mb-2 col-md-5 p-0"
                name="Email"
              >
                <div
                  slot-scope="{ valid, errors }"
                  class="form-group mb-2 md-mb-3"
                >
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    v-model="form.email"
                    :class="{
                      'form-control  mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true,
                      error: errors[0]
                    }"
                    :state="errors[0] ? false : valid ? true : null"
                  />

                  <span class="small text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                name="Phone"
                class="mb-1 md-mb-2 col-md-5 p-0"
              >
                <div
                  slot-scope="{ valid, errors }"
                  class="form-group mb-2 md-mb-3"
                >
                  <label for="Phone">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    v-model="form.phone"
                    :class="{
                      'form-control mb-1 border-top-0 border-right-0 border-left-0 bg-transparent': true,
                      error: errors[0]
                    }"
                    :state="errors[0] ? false : valid ? true : null"
                  />

                  <span class="small text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>

            <div class="form-group form-row justify-content-between mb-0">
              <ValidationProvider
                rules="required"
                name="Address"
                class="mb-1 md-mb-2 col-md-5 p-0"
              >
                <div slot-scope="{ valid, errors }">
                  <label for="Address">Delivery Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    v-model="form.address"
                    :class="{
                      'form-control mb-2 border-top-0 border-right-0 border-left-0 bg-transparent': true,
                      error: errors[0]
                    }"
                    :state="errors[0] ? false : valid ? true : null"
                  />

                  <span class="small text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>

            <div class="form-group form-row justify-content-between mb-0">
              <ValidationProvider
                rules="required|min:4"
                name="Password"
                vid="password"
                class="mb-1 md-mb-2 col-md-5 p-0"
              >
                <div
                  slot-scope="{ valid, errors }"
                  class="form-group mb-2 md-mb-3"
                >
                  <label for="change password">Password</label>
                  <div
                    :class="{
                      'd-flex form-control p-0 mb-1': true,
                      error: errors[0]
                    }"
                  >
                    <input
                      :type="passwordFieldType"
                      placeholder="Password"
                      v-model="form.password"
                      class="form-control border-0 h-100 bg-transparent"
                      :state="errors[0] ? false : valid ? true : null"
                    />

                    <span class="input-group-text bg-transparent border-0">
                      <i
                        class="fa"
                        style="cursor: pointer; color: #b98b09;"
                        :class="{
                          'fa-eye': showpassword,
                          'fa-eye-slash': !showpassword
                        }"
                        @click="showPassword"
                      ></i>
                    </span>
                  </div>

                  <span class="small text-danger">
                    <small class="text-dark"
                      >Must be at least four characters</small
                    >
                    <br />
                    {{ errors[0] }}
                  </span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                rules="required|min:4|confirmed:password"
                name="Password Confirmation"
                class="mb-1 md-mb-2 col-md-5 p-0"
              >
                <div slot-scope="{ valid, errors }" class="form-group mb-4">
                  <label for="confirm password">Confirm</label>
                  <div
                    :class="{
                      'd-flex form-control p-0 mb-1': true,
                      error: errors[0]
                    }"
                  >
                    <input
                      :type="passwordFieldType"
                      placeholder=" Confirm Password"
                      v-model="form.confirmpassword"
                      class="form-control border-0 h-100 bg-transparent"
                      :state="errors[0] ? false : valid ? true : null"
                    />
                    <span class="input-group-text bg-transparent border-0">
                      <i
                        class="fa"
                        style="cursor: pointer;  color: #b98b09;"
                        :class="{
                          'fa-eye': showpassword,
                          'fa-eye-slash': !showpassword
                        }"
                        @click="showPassword"
                      ></i>
                    </span>
                  </div>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>

            <div class="form-group mb-2">
              <button class="btn">Update</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/outerform.scss";
@import "@/assets/keyframes.scss";

label {
  opacity: 0;
}
.profile-section {
  .profile-header {
    height: 40vh;
    background: rgba(215, 168, 30, 0.59);

    @include md-min {
      width: 85vw;
      margin: auto -1rem auto auto;
    }
  }

  .profile-content {
    margin-top: -6rem;

    .user-info {
      .img-holder {
        border-left: 2px solid #d2c8c8;
        width: 100px;
        border-radius: 50%;
        height: 100px;
        margin-bottom: 1.5rem;
        padding: 0.5rem;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        &::after {
          border: 1px solid $primary;
        }
      }
      i {
        color: $inactive;
        //  font-size: 11px;
        cursor: pointer;
        -webkit-text-stroke-width: medium;
        -webkit-text-fill-color: white;
        transition: all 0.5s;
      }

      h4{
        font-size: 11px;
      }

      .logout {
        color: $primary;
        transition: all 0.5s;
        cursor: pointer;

        &:hover > * {
          font-size: 10px;
        }
      }
    }

    .edit-info {
      small,
      .small {
        font-size: 70%;
      }
    }

    .user-info,
    .edit-info {
      animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
      -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s
        both;
    }
  }
}
</style>

<script>
import {  mapActions } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        address: null,
        password: null,
        confirmpassword: null
      },
      passwordFieldType: "password",
      showpassword: false
    };
  },
  methods: {
     ...mapActions({
      logout: "LOG_OUT"
    }),

    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.showpassword = !this.showpassword;
    },
    updateDetails() {
      console.log(this.form);
    },

    async logOut() {
      await this.logout();
      this.$router.replace('/');


    }
  }
};
</script>