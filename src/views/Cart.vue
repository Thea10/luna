<template>
  <div class="container cart">
    <h2 class="mb-5" style="margin-top: -10px">MADE BY LUNA</h2>

    <section class="product-body">
      <div class="d-flex flex-wrap justify-content-around align-items-center">
        <h3 class="mb-2">Your order</h3>
      </div>

      <div v-if="cartLength !== 0 && !checkoutfail && !checkoutsuccess " class="row flex-column">
        <cart-items :items="items" :length="cartLength" :totalprice ="cartPrice" />

        <button class="btn checkout-btn col-4 mx-auto mb-3 item-text" @click="checkoutCart">
           <span class="loader" v-if="loading">
            <img src="@/assets/btnloader2.svg" alt="loading" height="20px" width="20px" />
          </span>
          <span v-else>   Checkout
          <i class="fa fa-shopping-bag" aria-hidden="true"></i></span>
       
        </button>
      </div>

      <div v-if="cartLength === 0" class="bg-white p-4 empty">
        <i class="fa fa-shopping-basket" aria-hidden="true"></i>

        <div class="empty-text mt-3">
          <h6>Your cart is empty,</h6>
          <h6>
            Shop here:
            <router-link to="/buy" class="btn shop-btn">Store</router-link>
          </h6>
        </div>
      </div>

      <div v-if="checkoutsuccess && cartLength !== 0" class="bg-white p-4 checkout">
        <i class="fa fa-check" aria-hidden="true"></i>
        <small>
          Order sucessfull!
          <br />A delivery agent will contact you in x hours
          <br />Thank you
        </small>
      </div>
      <div v-if="checkoutfail && cartLength !== 0" class="bg-white p-4 checkout checkout-fail">
        <i class="fa fa-times" aria-hidden="true"></i>
        <small>
          Something went wrong
          <br />Please try again
        </small>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItems from "../components/Cart/CartItems";
export default {
  name: "Cart",
   data() {
    return {
      checkoutsuccess: false,
      checkoutfail: false,
      loading: false
    };
  },
  components: {
    CartItems
  },
 
  methods:{
    ...mapActions({
      checkout: "items/CHECK_OUT"
    }),
  // ...mapMutations({
  //     setcart: "items/SET_CART"
  //   }),

   async checkoutCart() { 
      this.loading = true;
      await this.checkout;
      this.checkoutsuccess = !this.checkoutsuccess;
      this.loading = false;
     },
  },
  computed: {
    ...mapGetters({
      items: "items/getCartItems",
      cartLength: "items/getCartCount",
      cartPrice: "items/getCartTotal"
    }),

  }
};
</script>

<style lang="scss" >
@import "@/assets/variables.scss";
@import "@/assets/keyframes.scss";


.cart {
  color: $darkText;
  h2 {
    font-size: 20px;
    font-weight: 600;
    @include md-min {
      font-size: 27px;
    }
  }
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin: 0;
    width: unset;
    @include md-min {
      font-size: 18px;
    }
  }

  h6 {
    color: $inactive;
    font-size: 20px;
    font-weight: 600;
  }

  small {
    color: $price;
    font-size: 11px;
    font-weight: 600;
    display: block;

    span {
      color: $primary;
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

  .product-body {
    .item,
    .empty,
    .checkout, .item-text {
      animation: fade-in 1s ease-in-out 1s both;
      -webkit-animation: fade-in 1s ease-in-out 1s
        both;
    }
    .row {
      .item {
        background: #ffffff;
        box-shadow: 1px 0px 0px 2px rgba(0, 0, 0, 0.13);
        border-radius: 5px;
        transition: all 1s;
        height: auto;

        small,
        i {
          margin-bottom: 1rem;
        }

        &:hover {
          box-shadow: none;
        }
      }

      .checkout-btn {
        background: $darkText;


        &:hover {
          background: $price;
          font-weight: 600;

          .fa-shopping-bag:before{
            content: "\f061" ;
          }
        }
      }
    }

    .checkout-btn,
    .shop-btn {
      border-radius: 0px 0px 15px 15px;

       &:hover {
          border-radius: 0;
        }
    }

    .empty,
    .checkout {
      line-height: 3;

      i {
        -webkit-text-stroke-width: thin;
      }

      @include sm-min {
        width: 75%;
        margin: auto;
      }
    }

    .empty {
      i {
        font-size: 4rem;
      }

      h6,
      i {
        margin-bottom: 1rem;
      }
    }

    .checkout {
      i {
        border: 1px solid #0fcb0f;
        color: #0fcb0f;
        border-radius: 50%;
        padding: 1.5rem;
        font-size: 5rem;
      }

      &.checkout-fail {
        i {
          border: none;
          color: #ff1100;
        }
      }
    }
  }
}
</style>
