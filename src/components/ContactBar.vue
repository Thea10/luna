<template>
  <nav class="navbar justify-content-end">
    <ul class="mt-3">
      <li class="nav-item dropdown">
        <a
          class="btn dropdown-toggle"
          href="#"
          id="dropdownId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Contact Us</a>
        <div class="dropdown-menu" aria-labelledby="dropdownId">
          <ValidationObserver ref="observer">
            <form
              slot-scope="{validate}"
              @submit.prevent="validate().then(sendMessage)"
              class="p-2 p-md-4"
            >
              <ValidationProvider rules="required" name="Full Name">
                <div slot-scope="{ valid, errors}" class="form-group mb-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    v-model="form.fullname"
                    :class="{'form-control mb-1': true, 'error': errors[0]}"
                    :state="errors[0] ? false: (valid ? true : null)"
                  />
                  <span style="font-size: 70%;" class="small text-danger">{{errors[0]}}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="required|email|min:5" name="Email">
                <div slot-scope="{ valid, errors }" class="form-group mb-1">
                  <input
                    type="email"
                    placeholder="Email"
                    pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    v-model="form.email"
                    :class="{'form-control mb-1': true, 'error': errors[0] }"
                    :state="errors[0] ? false : (valid ? true : null)"
                  />

                  <span style="font-size: 70%;" class="small text-danger">{{errors[0]}}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="required" name="Phone">
                <div slot-scope="{ valid, errors }" class="form-group mb-1">
                  <input
                    type="tel"
                    placeholder="Phone"
                    v-model="form.phone"
                    :class="{'form-control mb-1': true, 'error':errors[0] }"
                    :state="errors[0] ? false : (valid ? true : null)"
                  />

                  <span style="font-size: 70%;" class="small text-danger">{{errors[0]}}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="required" name="Message">
                <div slot-scope="{ valid, errors }" class="form-group mb-1">
                  <textarea
                    class="form-control"
                    cols="20"
                    rows="10"
                    placeholder="Your message"
                    v-model="form.message"
                    :class="{'form-control mb-1': true, 'error':errors[0] }"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></textarea>

                  <span style="font-size: 70%;" class="small text-danger">{{errors[0]}}</span>
                </div>
              </ValidationProvider>

              <button class="btn float-right" type="submit">Send</button>
            </form>
          </ValidationObserver>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ContactBar",
  data() {
    return {
      form: {
        fullname: null,
        email: null,
        phone: null,
        message: null
      }
    };
  },
  methods: {
    sendMessage() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss" >
@import "@/assets/variables.scss";
@import "@/assets/keyframes.scss";
nav {
  ul {
    list-style: none;

    .dropdown-menu {
      position: absolute;
      top: 82%;
      left: unset;
      right: 0;
      width: 280px;
      background-color: #fff;
      box-shadow: 1px 1px 1px rgb(215 168 30 / 31%);
      border-radius: 10px;
      transition: all 0.6s ease-in-out;
      form {
        .form-control {
          background: rgba(215, 168, 30, 0.07);
          border-radius: 20px;
          border: none;
          font-size: 12px;
          color: $grey;
          //height: calc(1em + .75rem + 2px);

          &:hover,
          &:focus {
            box-shadow: none;
          }
        }

        ::placeholder {
          color: rgba(0, 0, 0, 0.2);
        }

        :-moz-placeholder {
          color: rgba(0, 0, 0, 0.2);
        }

        :-ms-input-placeholder {
          color: rgba(0, 0, 0, 0.2);
        }

        ::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.2);
        }
      }

      @include sm-min {
        width: 400px;
      }
    }
  }
}

small {
  font-size: 10px;
}

.btn {
  background: $primary;
  transition: all 0.8s ease-in-out;
  border-radius: 30px;
  color: $white;
  font-size: 12px;
  padding: 0.375rem 2rem;

  &:hover,
  &:focus {
    box-shadow: none;
    background: linear-gradient(#d19d04, #bf910ca1);
    background: -webkit-linear-gradient(#d19d04, #bf910ca1);

    color: $white;
  }

  &.float-right {
    border-radius: 10px;
  }
}
</style>
