<template>
  <div class="container buy">
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
import { mapGetters } from "vuex";
import Search from "../components/Search";
import ProductList from "../components/Product/ProductList";
import _ from "lodash";
export default {
  name: "Buy",
  data() {
    return {
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
    ...mapGetters({ products: "items/getProducts" }),
    searchedProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().match(this.searchField.toLowerCase());
      });
    },

    filterProducts() {
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
@import "@/assets/keyframes.scss";

.buy {
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
    margin-top: 0.2rem;

    &:hover,
    &.focus,
    &.favorited {
      color: $primary;
      -webkit-text-fill-color: $primary;
    }

    &.favorited:hover,
    &.favorited:focus {
      -webkit-text-fill-color: white;
    }
  }

  .btn {
    border-radius: 10px 0px;
  }

  .product-body {
    .dropdown-menu {
      top: 30px !important;
      left: -46px !important;

      .dropdown-item {
        font-size: 0.7rem;
        font-weight: 100;
        transition: all 0.5s;
        margin-bottom: 0.2rem;
        &:focus,
        &:hover, &.selected {
          color: $primary;
          text-decoration: none;
          background-color: transparent;
          font-weight: 100;
          border-left: 2px solid $primary;
           border-right: 2px solid $primary;

          i {
            color: $primary;
          }
        }
      }
    }

    .row {
      .item {
        height: 300px;
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

        @include xsm-max {
          height: 325px;
        }
      }
    }
  }
}
</style>
