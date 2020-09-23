<template>
  <div class="row justify-content-between align-items-center m-0">
    <div class="col-3">
      <img :src="item.img" alt="product" />
    </div>

    <div class="col-5">
      <small>{{item.name}}</small>

      <small>{{item.size}} ML</small>
      <small class="item-text">₦{{item.price * item.count}}</small>
    </div>

    <div class="actions col-3 d-flex flex-wrap align-items-center justify-content-between">
      <i class="fa fa-minus" aria-hidden="true" @click="removeOne(item)" title="Add"></i>
      <small class="item-text">{{item.count}}</small>
      <i class="fa fa-plus" aria-hidden="true" @click="addOne(item)" title="Add" ></i>
    </div>
    <banner v-if="showbanner" :status="status" >{{message}}</banner>
  </div>
</template>

<script>
// REMOVE_FROM_CART
import { mapActions } from "vuex";
import Banner from "../ExtraBanner";
export default {
  name: "SingleCartItem",
  props: ["item"],
  data() {
    return {
      showbanner: false,
      message: "",
      status: ""
    };
  },
  components: {
    Banner
  },
  methods: {
    ...mapActions({
      removeItem: "items/REMOVE_FROM_CART",
      addItem: "items/ADD_TO_CART"
    }),

    async removeOne(item) {
      this.removeItem(item);
      this.message = `Item ${item.name} removed`;
      this.status = "success";
      this.showbanner = true;

      setTimeout(() => {
        this.showbanner = false;
      }, 3000);
    },
    async addOne(item) {
      this.addItem(item);
      this.message = `Item ${item.name} added`;
      this.status = "success";
      this.showbanner = true;

      setTimeout(() => {
        this.showbanner = false;
      }, 3000);
    }
  }
};
</script>