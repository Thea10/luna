<template>
  <div class="item p-2 w-100">
    <div class="img text-center">
      <img  :src="product.img" alt="productimg" />
    </div>
    <div class="d-flex flex-column justify-content-between details">
      <h6>{{product.name}}</h6>

      <small>
        <span>Size:</span>
        {{product.size}} ML
      </small>
      <small>
        <span>Price:</span>
        ₦{{product.price}}
      </small>

      <div class="d-flex justify-content-between align-items-center mt-2">
        <!--   @click="AddToCart(product)" -->
        <button
          class="btn"
          title="Add to Cart"
          @click="AddToCart(product)"
          style="padding: 0.2rem 0.9rem;
                font-size: 0.7rem;
                margin-top: 0.5rem;"
        >
          <span class="loader" v-if="loading">
            <img src="@/assets/btnloader2.svg" alt="loading" height="20px" width="20px" />
          </span>
          <span v-else>Add to Cart</span>
        </button>
        <i
          class="fa fa-star"
          :class="{'fa fa-star': true, 'favorited': product.wished }"
          v-bind:title=" product.wished ? 'Remove from Wishlist' : 'Add to Wishlist' "
          @click="wish(product)"
        ></i>
      </div>
    </div>
    <banner v-if="showbanner" :status="status"> {{message}}</banner>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Banner from "../ExtraBanner";

export default {
  name: "SingleProduct",
  props: ["product"],
  data() {
    return {
      loading: false,
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
      addItemToCart: "items/ADD_TO_CART",
      wishAction: "items/WISH_ITEM"
    }),
    async AddToCart(item) {
      this.loading = true;
       this.addItemToCart(item);

      setTimeout(() => {
        this.loading = false;
        this.message = `Item ${item.name} added`;
        this.status = "success";
         this.showbanner = true;
      }, 500);
     
      setTimeout(() => {
        this.showbanner = false;
      }, 5000);
    },
    async wish(item) {
      this.loading = true;
       this.wishAction(item);
      setTimeout(() => {
        this.loading = false;
        item.wished == true ?  this.message ="Removed from wishlist" : this.message ="Added to wishlist";
       
        this.status = "success";
          this.showbanner = true;
      }, 1000);

    

      setTimeout(() => {
        this.showbanner = false;
      }, 5000);
    }
  }
};
</script>