/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="item-container col-10 col-sm-7 mx-auto">
    <div class="cart-header p-2 mt-2">
      <div class="d-flex flex-wrap align-items-center justify-content-center mb-2">
        <h6>X XX XXX Street, XXX, Lagos</h6>

        <router-link to="/profile" title="Edit Details" class="ml-2">
          Edit Details
          <i class="fa fa-pencil"></i>
        </router-link>
      </div>

      <div class="d-flex align-items-center justify-content-center mb-2">
        <i class="fa fa-clock"></i>

        <h6 class="ml-2">24 working hours</h6>
      </div>
    </div>
    <div class="total-card bg-white d-flex flex-column col-5 mx-auto">
      <small>
        Items:
        <span class="item-text">{{length}}</span>
      </small>
      <small>
        Total :
        <span class="item-text">₦{{totalprice}}</span>
      </small>
    </div>
    <cart-item :items="items"></cart-item>
  </div>
</template>

<style lang="scss" >
@import "@/assets/variables.scss";
@import "@/assets/keyframes.scss";

.item-container {
  .cart-header {
    background: $primary;
    border-radius: 0px 0px 5px 30px;
    color: #ffffff;
    -webkit-animation: swing-in-top-fwd 0.7s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s both;
    animation: swing-in-top-fwd 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s
      both;

    h6 {
      font-size: small;
      margin-bottom: 0;
    }

    .bg-backdrop {
      background: rgba(255, 255, 255, 0.93);
      border-radius: 5px;
      padding: 0.2rem;
    }

    .fa {
      font-size: smaller;
    }

    a {
      color: #ffffff;
      font-size: smaller;

      &:hover {
        font-size: small;
      }
    }
  }

  .total-card {
    border-radius: 0px 0px 10px 5px;
    -webkit-animation: swing-in-top-fwd 0.7s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s both;
    animation: swing-in-top-fwd 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s
      both;
    box-shadow: 1px 4px 1px -1px rgba(0, 0, 0, 0.13);

    span {
      font-size: 120%;
    }
  }

  .item {
    .row {
      img {
        border-radius: 10px;
        height: 100%;
        width: 100%;
      }

      .actions {
        .fa {
          background: $primary;
          color: #ffffff;
          border: none;
          font-size: xx-small;
          padding: 0.4rem;

          &:hover {
            background: $primaryLight;
          }
        }
        small {
          // border: 1px solid $inactive;
          font-size: 24px;
          //  padding: 0.7rem;
        }
        > * {
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<script>
import CartItem from "./CartItem";

export default {
  name: "CartItems",
  props: ["items", "length", "totalprice"],
  components: {
    CartItem
  }
};
</script>

