<template>

 <transition-group name="list-complete" tag="div" class="row justify-content-center w-100 m-2 mx-md-5 py-md-0 px-md-3">
    <div
      v-for="product of products"
      class="list-complete-item col-10 col-sm-8 col-md-4 col-lg-3  text-left p-2 m-3 mx-sm-auto my-sm-2 m-md-3"
      :key="product.id"
    >
    <single-product :product="product" ></single-product>
    </div>
  </transition-group>

  <!-- <div class="row justify-content-center w-100 m-2 mx-md-5 py-md-0 px-md-3">
    <div
      v-for="product of products"
      class="col-10 col-sm-8 col-md-4 col-lg-3  text-left p-2 m-3 mx-sm-auto my-sm-2 m-md-3"
      :key="product.id"
    >
    <single-product :product="product" ></single-product>
    </div>
  </div> -->
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

<style lang="scss">

.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
.list-complete-leave-active {
  position: absolute;
}
  
</style>