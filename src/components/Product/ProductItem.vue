<template>
  <div class="row justify-content-center w-100 m-2 mx-md-5 py-md-0 px-md-3">
    <div
      v-for="product of products"
      class="col-10 col-sm-8 col-md-4 col-lg-3  text-left p-2 m-3 mx-sm-auto my-sm-2 m-md-3"
      :key="product.id"
    >
    <single-product :product="product" ></single-product>
    </div>
  </div>
</template>

<script>
 import SingleProduct from "./SingleProduct";
export default {
  name: "ProductItem",
  props: ["products"],
  components: {
    SingleProduct
  }
};
</script>