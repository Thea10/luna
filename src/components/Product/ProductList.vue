<template>
  <div>
     <product-item :products="products"></product-item>
    
  </div>
</template>

<script>
 import ProductItem from "./ProductItem";
export default {
  name: "ProductList",
  components: {
    ProductItem
  },
  props: ["products"]
};
</script>