<template>
  <div class="container">
    <h2 class="mb-5" style="margin-top: -23px">MADE BY LUNA</h2>

    <section class="product-body">
      <div class="d-flex flex-wrap justify-content-around align-items-center">
        <h3 class="mb-2">Items</h3>
      </div>

      <cart-items :items="items" />
    </section>
  </div>
</template>

<script>
import CartItems from "../components/CartItems";
export default {
  name: "Cart",
  components: {
    CartItems
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Honey",
          price: 1500,
          size: 500,
          img: require("../assets/honey-500.jpeg")
        },
        {
          id: 2,
          name: "Coconut Oil",
          price: 1200,
          size: 150,
          img: require("../assets/coco-150.jpeg")
        },
        {
          id: 3,
          name: "Honey",
          price: 1200,
          size: 300,
          img: require("../assets/honey-300.jpg")
        },
        {
          id: 4,
          name: "Coconut Oil",
          price: 500,
          size: 50,
          img: require("../assets/coco-50.jpeg")
        },
        {
          id: 5,
          name: "Coconut Oil",
          price: 1700,
          size: "50 150",
          img: require("../assets/coco15050.jpeg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
@import "@/assets/variables.scss";
.container {
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
      font-size: 23px;
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
    font-size: 11px;
    cursor: pointer;
    -webkit-text-stroke-width: medium;
    -webkit-text-fill-color: white;
    transition: all 0.5s;

    &:hover,
    &.favorited {
      color: $primary;
      -webkit-text-fill-color: $primary;
    }
  }

  .product-body {
    .row {
      .item {
        background: #ffffff;
        box-shadow: 1px 0px 0px 2px rgba(0, 0, 0, 0.13);
        border-radius: 5px;
        transition: box-shadow 0.6s;

        small,
        i {
          margin-bottom: 1rem;
        }

        &:hover {
          box-shadow: none;
        }
      }
    }
  }
}
</style>
