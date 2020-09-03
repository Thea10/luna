<template>
  <div class="container">
    <h2 class="mb-5" style="margin-top: -23px">MADE BY LUNA</h2>

    <section class="product-body">
      <div class="d-flex flex-wrap justify-content-around align-items-center">
        <h3 class="mb-2">PRODUCTS</h3>
        <search
          @searchproducts="SearchProducts"
          @filteritem="filterBy"
          @filterorder="orderBy"
          :filterBy="filterKey"
          :orderBy="orderKey"
        />
      </div>

      <product-list :products="filterProducts" />
    </section>
  </div>
</template>

<script>
import Search from "../components/Search";
import ProductList from "../components/ProductList";
import _ from "lodash";
export default {
  name: "Buy",
  data() {
    return {
      products: [
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
      ],

      searchField: "",
      filterKey: "size",
      orderKey: "desc"
    };
  },
  components: {
    Search,
    ProductList
  },

  methods: {
    SearchProducts: function(searchtext) {
      this.searchField = searchtext;
    },
    filterBy: function(filtertext) {
      this.filterKey = filtertext;
    },
    orderBy: function(filterorder) {
      this.orderKey = filterorder;
    }
  },
  computed: {
    searchedProducts: function() {
      return this.products.filter(product => {
        return product.name.toLowerCase().match(this.searchField.toLowerCase());
      });
    },

    filterProducts: function() {
      return _.orderBy(
        this.searchedProducts,
        product => {
          return product[this.filterKey];
        },
        this.orderKey
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

@keyframes beat {
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.01, 1.01, 1.01);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}

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
        height: 350px;
        background: #ffffff;
        box-shadow: 0px 0px 0px 1px rgb(234 188 53 / 81%);
        border-radius: 5px;
        animation: beat 9000ms ease-in-out infinite;
        -webkit-animation: beat 9000ms ease-in-out infinite;
        -moz-animation: beat 9000ms ease-in-out infinite;
        -ms-animation: beat 9000ms ease-in-out infinite;
        transition: box-shadow 0.6s;

        .img {
          height: 65% !important;

          img {
            border-top-left-radius: 84%;
            border-bottom-left-radius: 49%;
            border-bottom-right-radius: 91%;
            border-top-right-radius: 38%;
            transform: rotate(54deg);
            transition: transform 0.9s;
          }
        }

        .details {
          height: 35% !important;
        }

        &:hover {
          box-shadow: none;

          .img {
            img {
              border-radius: 5px;
              transform: scale3d(1.3, 1.3, 1.3);
              box-shadow: 0px 0px 0px 1px rgb(234 188 53 / 81%);
            }
          }
        }

        @include md-min {
          height: 340px;
        }

        @include xsm-max {
          height: 325px;
        }
      }
    }
  }
}
</style>
